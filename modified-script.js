// Scenario: Scenario_1 (executor: ramping-vus)

import { sleep, group, check } from "k6";
import http from "k6/http";

const BASE_URL = "http://172.17.176.1:5000/";
const LETTERS_URL = `${BASE_URL}letters/api/`;
const CREDENTIALS = { username: "zeadmin", password: "Jiva@123" };

export function setup() {
  const loginRes = http.post(`${BASE_URL}auth`, JSON.stringify(CREDENTIALS), {
    headers: { "Content-Type": "application/json" },
  });

  const authToken = loginRes.json("access_token");
  check(authToken, {
    "logged in successfully": () => authToken !== "Invalid Credentials",
  });

  return authToken;
}

export default function (authToken) {
  const bearer_token = {
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
  };
  let response;

  group("Template APIs", function () {
    response = http.post(
      `${LETTERS_URL}actionNotificationCopy`,
      JSON.stringify({ EPISODE_TYPE: "Appeal", NOTICE_IDN: 44732 }),
      bearer_token
    );
    sleep(5);

    response = http.get(
      `${LETTERS_URL}activateOrDeactivateTemplateKeywords?keyword_idn=2252&entity_active=Y`,
      bearer_token
    );
    sleep(5);

    response = http.get(
      `${LETTERS_URL}attachTemplateKeywords?keyword_ids=5000006,43&notice_idn=44732`,
      bearer_token
    );
    sleep(5);

    response = http.get(
      `${LETTERS_URL}getKeywordSearchResultsForTemplate?notice_idn=44732&keyword_cd=A`,
      bearer_token
    );
    sleep(5);

    response = http.get(
      `${LETTERS_URL}getKeywordsHistoryForTemplate?notice_idn=44732&page_number=1`,
      bearer_token
    );
    sleep(5);

    response = http.get(
      `${LETTERS_URL}getTemplateKeywordList?notice_idn=44732&sort_by=true&order_by=UPD_DT&page_number=1`,
      bearer_token
    );
    sleep(5);

    response = http.post(
      `${LETTERS_URL}attach_pdf_list`,
      JSON.stringify({
        noticeIdn: 44732,
        pdfAttachedList: [
          {
            DOC_NAME: "seladmin_aa48930337c2481d8688cb3c97a97526",
            EDU_MATERIAL_IDN: 1164,
          },
          {
            DOC_NAME: "zeadmin_495fd6c2e6504c19a8b99fea38735897",
            EDU_MATERIAL_IDN: 1194,
          },
        ],
      }),
      bearer_token
    );
    sleep(5);

    response = http.get(
      `${LETTERS_URL}get_attched_pdfs?noticeIdn=44732`,
      bearer_token
    );
    sleep(5);

    response = http.get(
      `${LETTERS_URL}get_pdf_list?noticeIdn=44732&currentPage=1`,
      bearer_token
    );
    sleep(5);

    response = http.get(
      `${LETTERS_URL}remove_attached_pdf?attachmentIdns=713&attachmentIdns=714&noticeIdn=44732&attachmentIdns=714`,
      bearer_token
    );
    sleep(5);

    response = http.get(`${LETTERS_URL}auto_template_data`, bearer_token);
    sleep(5);

    response = http.get(`${LETTERS_URL}get_contact_types`, bearer_token);
    sleep(5);

    response = http.get(
      `${LETTERS_URL}get_data_elements?letter_type=LETTER&enc_type=Appeal`,
      bearer_token
    );
    sleep(5);

    response = http.get(
      `${LETTERS_URL}get_data_uri_for_image?image_src=%2Fcms%2FNotification%2FController%2FgetImageLink%3Fimage_name%3Dzeadmin_96c816110c8145e5b88ddb7f348968a9%26version_no%3D1`,
      bearer_token
    );
    sleep(5);

    response = http.get(`${LETTERS_URL}get_demographic_data`, bearer_token);
    sleep(5);

    response = http.get(
      `${LETTERS_URL}get_demographic_fields?tag_name=Admitting`,
      bearer_token
    );
    sleep(5);

    response = http.get(
      `${LETTERS_URL}get_employer_list?query=test&payor_idn=5347&payor_idn=89328&payor_idn=5349&payor_idn=84424&payor_idn=111&max_results=10&payor_access=P&payor_idn=89328&payor_idn=5349&payor_idn=84424&payor_idn=111`,
      bearer_token
    );
    sleep(5);

    response = http.get(`${LETTERS_URL}get_episode_types`, bearer_token);
    sleep(5);

    response = http.get(
      `${LETTERS_URL}get_group_list?query=test&emp_idn=60036&emp_idn=56891&emp_idn=189&max_results=10&emp_idn=56891&emp_idn=189`,
      bearer_token
    );
    sleep(5);

    response = http.get(`${LETTERS_URL}get_languages`, bearer_token);
    sleep(5);

    response = http.get(
      `${LETTERS_URL}get_line_decisions?enc_type=Appeal`,
      bearer_token
    );
    sleep(5);

    response = http.get(
      `${LETTERS_URL}get_modify_notice_details?notice_idn=44732`,
      bearer_token
    );
    sleep(5);

    response = http.get(`${LETTERS_URL}get_normal_images`, bearer_token);
    sleep(5);

    response = http.get(`${LETTERS_URL}get_outreach_episode`, bearer_token);
    sleep(5);

    response = http.get(
      `${LETTERS_URL}get_payor_list?query=test&max_results=10&payor_access=P`,
      bearer_token
    );
    sleep(5);

    response = http.get(
      `${LETTERS_URL}get_program_details?enc_type=Appeal`,
      bearer_token
    );
    sleep(5);

    response = http.get(`${LETTERS_URL}get_provider_addr_type`, bearer_token);
    sleep(5);

    response = http.get(`${LETTERS_URL}get_prv_fax_type`, bearer_token);
    sleep(5);

    response = http.get(`${LETTERS_URL}get_prv_roles`, bearer_token);
    sleep(5);

    response = http.get(`${LETTERS_URL}get_sent_to`, bearer_token);
    sleep(5);

    response = http.get(`${LETTERS_URL}get_states`, bearer_token);
    sleep(5);

    response = http.get(`${LETTERS_URL}get_template_master`, bearer_token);
    sleep(5);

    response = http.get(`${LETTERS_URL}get_template_type`, bearer_token);
    sleep(5);

    response = http.post(
      `${LETTERS_URL}save_template_data`,
      JSON.stringify({
        PAYOR_ACCESS: "P",
        contactTypeSelected: [
          "PHY",
          "SOCWRK",
          "ADJUSTER",
          "ATTORNEY",
          "BEN",
          "CSMGR",
          "client access",
          "DME",
        ],
        decision: "IP",
        employerIdns: [189, 56891, 60036],
        enc_selected: ["Appeal", "MA-Appeal", "BH-CM", "BH-IP", "IP"],
        external_template_id: 0,
        groupIdns: [163, 9350, 64737],
        isSelectAll: true,
        isSelectAllPrv: true,
        language_cd: "FRENCH",
        letter_name: "Letter-Template",
        mail_copy: "",
        notification_content:
          "%3C?xml%20version=%221.0%22?%3E%3Chtml%20xmlns=%22http://www.w3.org/1999/xhtml%22%3E%3Cbody%3E%3Cdiv%3E%3Cp%3EThis%20is%20Letter%20Template%3C/p%3E%3C/div%3E%3C/body%3E%3C/html%3E",
        notification_footer: "",
        notification_header: "",
        payorAddress: "",
        payorIdns: [111, 84424, 89328],
        payor_exclude: "P",
        program: 5012291,
        prvRoleSelected: [
          "ADM",
          "ATT",
          "4656",
          "446",
          "s",
          "EQUI",
          "peIKIa",
          "QBuxTb",
          "wGIGIs",
          "RF",
          "RFR",
        ],
        prv_add_type: 13,
        prv_fax_type: 24,
        sent_to: ["Patient", "Payor", "Contact", "Provider", "Group", "PCP"],
        state_cd: "AK",
        template_master_idn: 26765,
        template_type: "EMMI_LETTER",
      }),
      bearer_token
    );
    sleep(5);

    response = http.get(`${LETTERS_URL}getActStatus`, bearer_token);
    sleep(5);

    response = http.get(`${LETTERS_URL}getCurrentStatus`, bearer_token);
    sleep(5);

    response = http.get(
      `${LETTERS_URL}getDecisions?enc_type_cd=Appeal`,
      bearer_token
    );
    sleep(5);

    response = http.get(`${LETTERS_URL}getEncTypes`, bearer_token);
    sleep(5);

    response = http.get(`${LETTERS_URL}getFaxTypes`, bearer_token);
    sleep(5);

    response = http.get(
      `${LETTERS_URL}getGroupName?query=test&max_results=10`,
      bearer_token
    );
    sleep(5);

    response = http.get(`${LETTERS_URL}getLanguages`, bearer_token);
    sleep(5);

    response = http.get(`${LETTERS_URL}getNoResultMsg`, bearer_token);
    sleep(5);

    response = http.get(
      `${LETTERS_URL}getProgramCodes?enc_type_cd=Appeal`,
      bearer_token
    );
    sleep(5);

    response = http.get(`${LETTERS_URL}getStateCodes`, bearer_token);
    sleep(5);

    response = http.get(
      `${LETTERS_URL}getTemplateSearchResults?currentPage=1&isAll=N`,
      bearer_token
    );
    sleep(5);

    response = http.get(`${LETTERS_URL}getTemplateTypes`, bearer_token);
    sleep(5);

    response = http.get(
      `${LETTERS_URL}templateMasterSearch?query=test&max_results=10`,
      bearer_token
    );
    sleep(5);

    response = http.get(
      `${LETTERS_URL}templateSearch?query=test&max_results=10`,
      bearer_token
    );
    sleep(5);

    response = http.post(
      `${LETTERS_URL}notif_templ_activate_deactivate`,
      JSON.stringify({ ACTION_NOTICE_IDN: 45013, ENTITY_ACTIVE: "Y" }),
      bearer_token
    );
    sleep(5);
  });

  // Automatically added sleep
  sleep(1);
}
