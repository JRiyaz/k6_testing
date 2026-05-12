import fs from "node:fs";

// k6 run k6-script.js --console-output report.log

/**
        <!-- ---- end tab ---- -->
      </div>

      <!-- ---- paste-here ---- -->
    </div>

    <footer>K6 Reporter v3.0.4 - Ben Coleman 2025 · <a href="https://github.com/benc-uk/k6-reporter">GitHub</a></footer>
  </div>
</body>

</html>
 */

// node k6-report-generator.js

const FINAL_REPORT_FILE = "report-final.html";
const DELETE_FILES = false;
const HTML_FILE = "report.html";
const LOG_FILE = "report.log";

const html = fs.readFileSync(HTML_FILE, "utf8");
const logs = fs.readFileSync(LOG_FILE, "utf8");

// 1. Remove ANSI color codes
const cleanLogs = logs.replace(/\x1b\[[0-9;]*m/g, "");

// 2. Extract FAILED_REQUEST JSON objects
const failedRequests = cleanLogs
    .split("\n")
    .filter((line) => line.includes("FAILED_REQUEST"))
    .map((line) => {
        const jsonStart = line.indexOf("{");
        const jsonEnd = line.lastIndexOf("}");

        if (jsonStart === -1 || jsonEnd === -1) return null;

        try {
            return JSON.parse(line.substring(jsonStart, jsonEnd + 1));
        } catch (_e) {
            return null;
        }
    })
    .filter(Boolean);

console.log(`Parsed failures: ${failedRequests.length}`);

function deleteFiles() {
    if (!DELETE_FILES) return;

    try {
        if (fs.existsSync(HTML_FILE)) {
            fs.unlinkSync(HTML_FILE);
        }
        if (fs.existsSync(LOG_FILE)) {
            fs.unlinkSync(LOG_FILE);
        }

        console.log("🗑️ Temporary files deleted");
    } catch (err) {
        console.error("Failed to delete temp files:", err);
    }
}

function buildFailedHtml(failures) {
    if (!failures.length) {
        return `
      <div style="padding:20px;">
        <h2>Failed Requests</h2>
        <p>No failed requests 🎉</p>
      </div>
    `;
    }

    return `
    <div style="padding:20px;">
      <h2>Failed Requests (${failures.length})</h2>

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
          ${failures
            .map(
                (f) => `
            <tr>
              <td>${f.status}</td>
              <td>${f.method}</td>
              <td style="word-break:break-all">${f.url}</td>
              <td>${f.timestamp}</td>
            </tr>
          `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

const failedHtml = buildFailedHtml(failedRequests);

const marker = "<!-- ---- paste-here ---- -->";

let updatedHTML;

if (html.includes(marker)) {
    updatedHTML = html.replace(
        marker,
        `<!-- ---- Failed Requests list ---- -->\n\n${failedHtml}`,
    );
} else {
    updatedHTML = html.replace("</body>", `${failedHtml}</body>`);
}

fs.writeFileSync(FINAL_REPORT_FILE, updatedHTML);

console.log(`✅ ${FINAL_REPORT_FILE} generated`);

deleteFiles();
