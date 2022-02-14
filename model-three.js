import { sleep } from "k6";
import http from "k6/http";
import { randomItem, randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';

// const BASE_URL = "http://172.27.1.137:5001/";// Server
const BASE_URL = "http://172.17.176.1:5001/";
const LETTERS_URL = `${BASE_URL}letters/api/`;
const CREDENTIALS = { username: "zeadmin", password: "Jiva@123" };

const episode_types = ['Appeal', 'BH-CM', 'BH-IP', 'BH-OP', 'CM', 'DM', 'ISSUES', 'HP', 'IP', 'LCN', 'LTSS', 'MA-Appeal', 'MA-Grievance', 'MTM', 'MRIP', 'OP', 'EP', 'PR', 'QR'];
const image_src = ['%2Fcms%2FNotification%2FController%2FgetImageLink%3Fimage_name%3Dzeadmin_4f2dca296c0f4aa584a1daf1ce3d8a47%26version_no%3D1',
    '%2Fcms%2FNotification%2FController%2FgetImageLink%3Fimage_name%3Djmahesh_12032012040744522000%26version_no%3D1',
    '%2Fcms%2FNotification%2FController%2FgetImageLink%3Fimage_name%3Dzeadmin_99d7a2d33cd14c4ba67d67a9d0e3c2db%26version_no%3D1',
    '%2Fcms%2FNotification%2FController%2FgetImageLink%3Fimage_name%3Dzeadmin_30048cb9f2e74183930af51d3f2d9688%26version_no%3D1',
    '%2Fcms%2FNotification%2FController%2FgetImageLink%3Fimage_name%3Dzeadmin_ef20335247644074a505adae4eaec7f8%26version_no%3D1',
    '%2Fcms%2FNotification%2FController%2FgetImageLink%3Fimage_name%3Dzeadmin_d605f5f7533149b8936adf35859a3051%26version_no%3D1',
    '%2Fcms%2FNotification%2FController%2FgetImageLink%3Fimage_name%3Dzeadmin_49e2f22aa1fb4417829a4b09623a3c14%26version_no%3D2',
    '%2Fcms%2FNotification%2FController%2FgetImageLink%3Fimage_name%3Dzeadmin_95630a92810346b79e869fd825a03e4b%26version_no%3D1',
    '%2Fcms%2FNotification%2FController%2FgetImageLink%3Fimage_name%3Dzeadmin_6008bb875d5f4e61b87013b740ec1c72%26version_no%3D1'
];
const demographic_fields = ['Admitting', 'Attending', 'CC', 'Cb-Test_27Jan', 'Cb-Test_Addproviderrolerow', 'Client', 'Contact', 'Dshsh', 'Employer', 'Equipmentsupplier', 'Group', 'MD', 'Patient', 'Note', 'PCP', 'Recipient'];
const letter_types = ['NOTE', 'OUTREACH_SCRIPT', 'MEMBER_LETTER', 'LETTER', 'EMMI_LETTER', 'HEALTHWISE_LETTER'];
const query = ['test', 'sample', '20 decision', 'letter'];
const current_page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const is_all = ['Y', 'N'];
const notice_idns = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110]
const payor_names = ['best', 'internal', 'test', 'ama', 'abc']
const keyword_idns = [7, 8, 38, 56, 57, 5000006, 43, 5000018, 106, 5000006, 107, 182]
const keyword_cds = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const notice_idns = [97, 104, 135, 142, 144, 147, 152, 153, 12325, 35328, 36306, 36741, 44726, 44730]

export const options = {
    stages: [
        { target: 20, duration: "30s" },
        { target: 10, duration: "1m" },
        { target: 0, duration: "0" },
    ],

    thresholds: {
        http_req_failed: ["rate < 0.1"], // http errors should be less than 1%
        http_req_duration: ["p(95) < 200"], // 95% of requests should be below 200ms
    },
};
export function setup() {
    // const loginRes = http.post(`${BASE_URL}auth`, JSON.stringify(CREDENTIALS), {
    //   headers: { "Content-Type": "application/json" },
    // });

    // const authToken = loginRes.json("access_token");
    // check(authToken, {
    //   "logged in successfully": () => authToken !== "Invalid Credentials",
    // });

    return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0NDQ5OTcxNiwianRpIjoiemVhZG1pbiIsInR5cGUiOiJhY2Nlc3MiLCJuYmYiOjE2NDQ0OTk3MTYsImNzcmYiOiIzYmM2ZmJlMy0xMzliLTQ3MTAtYWNhMy0yOTBlNTRhMzliMWUiLCJleHAiOjE2NDcwOTE3MTYsInVzZXJuYW1lIjoiemVhZG1pbiIsInJvbGVzIjpbXX0.pIY0wX3Suou_rsUisXbp7Cshhhj1wuVTEgIeYN-hMSc";
}

export default (authToken) => {
    const bearer_token = {
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
        },
    };

    group('Template | Search Screen', function () {
        http.batch([
            ["GET", `${LETTERS_URL}getActStatus`, null, bearer_token],
            ["GET", `${LETTERS_URL}getCurrentStatus`, null, bearer_token],
            ["GET", `${LETTERS_URL}getDecisions?enc_type_cd=${randomItem(episode_types)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}getEncTypes`, null, bearer_token],
            ["GET", `${LETTERS_URL}getFaxTypes`, null, bearer_token],
            ["GET", `${LETTERS_URL}getGroupName?query=${randomItem(query)}&max_results=${randomIntBetween(1, 10)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}getLanguages`, null, bearer_token],
            ["GET", `${LETTERS_URL}getNoResultMsg`, null, bearer_token],
            ["GET", `${LETTERS_URL}getProgramCodes?enc_type_cd=${randomItem(episode_types)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}getStateCodes`, null, bearer_token],
            ["GET", `${LETTERS_URL}getTemplateSearchResults?currentPage=${randomItem(current_page)}&isAll=${randomItem(is_all)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}getTemplateTypes`, null, bearer_token],
            ["GET", `${LETTERS_URL}templateMasterSearch?query=${randomItem(query)}&max_results=${randomIntBetween(1, 10)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}templateSearch?query=${randomItem(query)}&max_results=${randomIntBetween(1, 10)}`, null, bearer_token],
        ]);
    });



    group('Template | Add or Modify', function () {
        http.batch([
            ["GET", `${LETTERS_URL}auto_template_data`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_contact_types`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_data_elements?letter_type=${randomItem(letter_types)}&enc_type=${randomItem(episode_types)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_data_uri_for_image?image_src=${randomItem(image_src)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_demographic_data`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_demographic_fields?tag_name=${randomItem(demographic_fields)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_payor_list?query=${randomItem(payor_names)}&max_results=${randomIntBetween(1, 10)}&payor_access=P`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_employer_list?query=test&payor_idn=5347&payor_idn=89328&payor_idn=5349&payor_idn=84424&payor_idn=111&max_results=10&payor_access=P&payor_idn=89328&payor_idn=5349&payor_idn=84424&payor_idn=111`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_group_list?query=test&emp_idn=60036&emp_idn=56891&emp_idn=189&max_results=10&emp_idn=56891&emp_idn=189`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_episode_types`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_languages`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_line_decisions?enc_type=${randomItem(episode_types)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_modify_notice_details?notice_idn=${randomItem(notice_idns)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_normal_images`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_outreach_episode`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_program_details?enc_type=${randomItem(episode_types)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_provider_addr_type`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_prv_fax_type`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_prv_roles`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_sent_to`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_states`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_template_master`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_template_type`, null, bearer_token],
            ["POST", `${LETTERS_URL}save_template_data`, JSON.stringify({
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
            }), , bearer_token],
        ]);
    });

    group('Template | Keyword List', function () {
        http.batch([
            ["GET", `${LETTERS_URL}activateOrDeactivateTemplateKeywords?keyword_idn=${randomItem(keyword_idns)}&entity_active=${randomItem(is_all)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}attachTemplateKeywords?keyword_ids=${randomItem(keyword_idns)}&notice_idn=${randomItem(notice_idns)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}getKeywordSearchResultsForTemplate?notice_idn=${randomItem(notice_idns)}&keyword_cd=${randomItem(keyword_cds)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}getKeywordsHistoryForTemplate?notice_idn=${randomItem(notice_idns)}&page_number=${randomIntBetween(1, 5)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}getTemplateKeywordList?notice_idn=${randomItem(notice_idns)}&sort_by=true&order_by=UPD_DT&page_number=${randomIntBetween(1, 5)}`, null, bearer_token],
        ]);
    });

    group('Template | Attach PDF', function () {
        http.batch([
            ["POST", `${LETTERS_URL}attach_pdf_list`,
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
                }), , bearer_token],
            ["GET", `${LETTERS_URL}get_attched_pdfs?noticeIdn=${randomItem(notice_idns)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_pdf_list?noticeIdn=${randomItem(notice_idns)}&currentPage=${randomIntBetween(1, 5)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}remove_attached_pdf?attachmentIdns=713&attachmentIdns=714&attachmentIdns=714&noticeIdn=${randomItem(notice_idns)}`, null, bearer_token],
        ]);
    });

    group('Template | Copy', function () {
        http.post(`${LETTERS_URL}actionNotificationCopy`, JSON.stringify({ EPISODE_TYPE: "Appeal", NOTICE_IDN: randomItem(notice_idns) }), bearer_token);
    });

    group('Template | Activate or De-Activate', function () {
        http.post(`${LETTERS_URL}notif_templ_activate_deactivate`, JSON.stringify({ ACTION_NOTICE_IDN: randomItem(notice_idns), ENTITY_ACTIVE: randomItem(is_all) }), bearer_token);
    });

    sleep(5);
};
