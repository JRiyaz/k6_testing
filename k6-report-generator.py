import json
import os
import re
import subprocess
from collections import Counter

# --- Configuration ---
RUN_K6_FIRST = False
SCRIPT_FILE = "k6-script.js"
FINAL_REPORT_FILE = "report-final.html"
DELETE_FILES = False
HTML_FILE = "report.html"
LOG_FILE = "report.log"

K6_COMMAND = ["k6", "run", SCRIPT_FILE, "--console-output", LOG_FILE]

# 0. Run k6 test first if enabled
if RUN_K6_FIRST:
    # Delete old files to ensure a clean run
    for f in (HTML_FILE, LOG_FILE):
        if os.path.exists(f):
            try:
                os.remove(f)
            except OSError:
                pass

    print(f"🚀 Running k6 test: {' '.join(K6_COMMAND)}...")
    try:
        _ = subprocess.run(K6_COMMAND, check=True)
        print("✅ k6 test completed successfully.\n")
    except subprocess.CalledProcessError:
        print("⚠️ k6 test finished with some failures (this is normal if checks fail).")
    except FileNotFoundError:
        print("❌ Error: 'k6' command not found. Please ensure k6 is installed.")
        exit(1)

# Read input files
with open(HTML_FILE, "r", encoding="utf-8") as f:
    html = f.read()

with open(LOG_FILE, "r", encoding="utf-8") as f:
    logs = f.read()

# 1. Remove ANSI color codes
clean_logs = re.sub(r"\x1b\[[0-9;]*m", "", logs)

# 2. Extract FAILED_REQUEST JSON objects
failed_requests: list[dict[str, str]] = []
for line in clean_logs.split("\n"):
    if "FAILED_REQUEST" not in line:
        continue

    json_start = line.find("{")
    json_end = line.rfind("}")

    if json_start == -1 or json_end == -1:
        continue

    try:
        failed_requests.append(json.loads(line[json_start : json_end + 1]))
    except json.JSONDecodeError:
        continue

print(f"Parsed failures: {len(failed_requests)}")


def delete_files():
    if not DELETE_FILES:
        return

    try:
        for filepath in (HTML_FILE, LOG_FILE):
            if os.path.exists(filepath):
                os.remove(filepath)

        print("🗑️ Temporary files deleted")
    except OSError as err:
        print(f"Failed to delete temp files: {err}")


def get_wrapper(html_content: str):
    return f"""
    <input type="radio" name="tabs" id="tab_custom">
    <label for="tab_custom"><i class="fas fa-bug"></i> Failed Requests</label>
    <div class="tab">
      {html_content}
    </div>
    <!-- ---- end tab ---- -->
    """


def build_status_summary_html(failures: list[dict[str, str]]):
    """Build a multi-column div showing the count of each status code."""
    if not failures:
        return ""

    status_counts = Counter(f.get("status", "unknown") for f in failures)

    def status_color(code: str):
        """Return a gradient background based on the status code range."""
        try:
            code_int = int(code)
        except (ValueError, TypeError):
            return "linear-gradient(135deg, #a0aec0 0%, #718096 100%)"  # grey
        if code_int >= 500:
            return "linear-gradient(135deg, #fc8181 0%, #e53e3e 100%)"  # red
        if code_int >= 400:
            return "linear-gradient(135deg, #f6ad55 0%, #dd6b20 100%)"  # orange
        if code_int >= 300:
            return "linear-gradient(135deg, #63b3ed 0%, #3182ce 100%)"  # blue
        if code_int >= 200:
            return "linear-gradient(135deg, #68d391 0%, #38a169 100%)"  # green
        return "linear-gradient(135deg, #a0aec0 0%, #718096 100%)"  # grey

    cards = ""
    for code, count in sorted(status_counts.items(), key=lambda x: (-x[1], x[0])):
        bg = status_color(code)
        cards += f"""
          <div style="
            background: {bg};
            color: white;
            border-radius: 12px;
            padding: 1.25rem 1.5rem;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            min-width: 120px;
          ">
            <div style="font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; opacity:0.9; margin-bottom:0.5rem;">
              Status {code}
            </div>
            <div style="font-size:2rem; font-weight:700;">{count}</div>
          </div>
        """

    return f"""
    <div style="padding:20px 20px 0 20px;">
      <h2 style="font-size:1.5rem; font-weight:600; margin:0 0 1rem 0; padding-bottom:0.75rem; border-bottom:2px solid #e2e8f0; color:#2d3748;">
        Failed Request Status Breakdown
      </h2>
      <div style="display:flex; flex-wrap:wrap; gap:1rem;">
        {cards}
      </div>
    </div>
    """


def build_failed_html(failures: list[dict[str, str]]):
    status_summary = build_status_summary_html(failures)

    if not failures:
        return """
      <div style="padding:20px;">
        <h2>Failed Requests</h2>
        <p>No failed requests 🎉</p>
      </div>
    """

    rows = ""
    for f in failures:
        rows += f"""
            <tr>
              <td>{f.get("status", "")}</td>
              <td>{f.get("method", "")}</td>
              <td style="word-break:break-all">{f.get("url", "")}</td>
              <td>{f.get("timestamp", "")}</td>
            </tr>
          """

    return f"""{status_summary}
    <div style="padding:20px;">
      <h2>Failed Requests ({len(failures)})</h2>

      <table border="1" cellpadding="6" cellspacing="0" width="100%">
        <thead>
          <tr>
            <th>Status</th>
            <th>Method</th>
            <th>URL</th>
            <th>Timestamp</th>
          </tr>
        </thead>

        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  """


failed_html = build_failed_html(failed_requests)
wrapped_failed_html = get_wrapper(failed_html)

# 3. Inject into HTML
target_marker = "<!-- ---- end tab ---- -->"
last_marker_idx = html.rfind(target_marker)

if last_marker_idx != -1:
    insert_pos = last_marker_idx + len(target_marker)
    updated_html = html[:insert_pos] + f"\n{wrapped_failed_html}" + html[insert_pos:]
else:
    # Fallback to before closing body tag
    updated_html = html.replace("</body>", f"{wrapped_failed_html}</body>")

with open(FINAL_REPORT_FILE, "w", encoding="utf-8") as f:
    _ = f.write(updated_html)

print(f"✅ {FINAL_REPORT_FILE} generated")

delete_files()
