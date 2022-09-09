import { sleep, group } from "k6";
import http from "k6/http";
import { randomItem, randomIntBetween, randomString } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';

// const BASE_URL = "http://172.27.1.137:5001/";// Server
// const image_src = ['%2Fcms%2FNotification%2FController%2FgetImageLink%3Fimage_name%3Dzeadmin_4f2dca296c0f4aa584a1daf1ce3d8a47%26version_no%3D1',
//     '%2Fcms%2FNotification%2FController%2FgetImageLink%3Fimage_name%3Djmahesh_12032012040744522000%26version_no%3D1',
//     '%2Fcms%2FNotification%2FController%2FgetImageLink%3Fimage_name%3Dzeadmin_99d7a2d33cd14c4ba67d67a9d0e3c2db%26version_no%3D1',
//     '%2Fcms%2FNotification%2FController%2FgetImageLink%3Fimage_name%3Dzeadmin_30048cb9f2e74183930af51d3f2d9688%26version_no%3D1',
//     '%2Fcms%2FNotification%2FController%2FgetImageLink%3Fimage_name%3Dzeadmin_ef20335247644074a505adae4eaec7f8%26version_no%3D1',
//     '%2Fcms%2FNotification%2FController%2FgetImageLink%3Fimage_name%3Dzeadmin_d605f5f7533149b8936adf35859a3051%26version_no%3D1',
//     '%2Fcms%2FNotification%2FController%2FgetImageLink%3Fimage_name%3Dzeadmin_49e2f22aa1fb4417829a4b09623a3c14%26version_no%3D2',
//     '%2Fcms%2FNotification%2FController%2FgetImageLink%3Fimage_name%3Dzeadmin_95630a92810346b79e869fd825a03e4b%26version_no%3D1',
//     '%2Fcms%2FNotification%2FController%2FgetImageLink%3Fimage_name%3Dzeadmin_6008bb875d5f4e61b87013b740ec1c72%26version_no%3D1'
// ];
// const demographic_fields = ['Admitting', 'Attending', 'CC', 'Cb-Test_27Jan', 'Cb-Test_Addproviderrolerow', 'Client', 'Contact', 'Dshsh', 'Employer', 'Equipmentsupplier', 'Group', 'MD', 'Patient', 'Note', 'PCP', 'Recipient'];
const BASE_URL = "http://172.31.128.1:5001/";
const LETTERS_URL = `${BASE_URL}letters/api/`;
const CREDENTIALS = { username: "zeadmin", password: "Jiva@123" };

const episode_types = ['Appeal', 'BH-CM', 'BH-IP', 'BH-OP', 'CM', 'DM', 'ISSUES', 'HP', 'IP', 'LCN', 'LTSS', 'MA-Appeal', 'MA-Grievance', 'MTM', 'MRIP', 'OP', 'EP', 'PR', 'QR'];
const letter_types = ['NOTE', 'OUTREACH_SCRIPT', 'MEMBER_LETTER', 'LETTER', 'EMMI_LETTER', 'HEALTHWISE_LETTER'];
const query = ['test', 'sample', '20 decision', 'letter'];
const current_page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sort_by = ["ASC", "DESC"];
const is_all = ['Y', 'N'];
const payor_names = ['best', 'internal', 'test', 'ama', 'abc'];
const keyword_idns = [7, 8, 38, 56, 57, 5000006, 43, 5000018, 106, 5000006, 107, 182];
const keyword_cds = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const notice_idns = [97, 104, 135, 142, 144, 147, 152, 153, 12325, 35328, 36306, 36741, 44726, 44730];
const dummy_notice_idns = [12325, '-1', 35328, '-1', 36306, '-1', 36741, '-1', 44726, '-1', 44730];
const template_master_idns = [10721, 10722, 10724, 10725, 10728, 10729, 10730, 10731, 10733, 10736];
// const attach_pdf = [{'pdf_name': 'seladmin_54f2f0f718804982aaf93f6a7dd63b29', 'idn': 92}, {'pdf_name': 'seladmin_0d99fa8458c44ce390fddca14f306b7e', 'idn': 93}]

export const options = {
    stages: [
        { target: 20, duration: "30s" },
        { target: 10, duration: "2m" },
        { target: 0, duration: "0" },
    ],

    thresholds: {
        http_req_failed: ["rate < 0.1"], // http errors should be less than 1%
        http_req_duration: ["p(95) < 200"], // 95% of requests should be below 200ms
    },
};
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

export default (authToken) => {
    const bearer_token = {
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
        },
    };

    group('Template | Search Screen', function () {
        http.batch([
            // ["GET", `${LETTERS_URL}getDecisions?enc_type_cd=${randomItem(episode_types)}`, null, bearer_token],
            // ["GET", `${LETTERS_URL}getEncTypes`, null, bearer_token],
            // ["GET", `${LETTERS_URL}getFaxTypes`, null, bearer_token],
            // ["GET", `${LETTERS_URL}getTemplateTypes`, null, bearer_token],
            // ["GET", `${LETTERS_URL}getLanguages`, null, bearer_token],
            // ["GET", `${LETTERS_URL}getProgramCodes?enc_type_cd=${randomItem(episode_types)}`, null, bearer_token],
            // ["GET", `${LETTERS_URL}getStateCodes`, null, bearer_token],
            ["GET", `${LETTERS_URL}active-status`, null, bearer_token],
            ["GET", `${LETTERS_URL}template-status`, null, bearer_token],
            ["GET", `${LETTERS_URL}group-names?query=${randomItem(query)}&max_results=${randomIntBetween(1, 10)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}no-result-message`, null, bearer_token],
            ["GET", `${LETTERS_URL}templates?page=${randomItem(current_page)}&all=${randomItem(is_all)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}template-master-names?query=${randomItem(query)}&max_results=${randomIntBetween(1, 10)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}templates/names?query=${randomItem(query)}&max_results=${randomIntBetween(1, 10)}`, null, bearer_token],
        ]);
    });

    group('Template | Add or Modify', function () {
        http.batch([
            // ["GET", `${LETTERS_URL}get_data_uri_for_image?image_src=${randomItem(image_src)}`, null, bearer_token],
            // ["GET", `${LETTERS_URL}get_demographic_data`, null, bearer_token],
            // ["GET", `${LETTERS_URL}get_demographic_fields?tag_name=${randomItem(demographic_fields)}`, null, bearer_token],
            // ["GET", `${LETTERS_URL}get_normal_images`, null, bearer_token],
            ["GET", `${LETTERS_URL}template-master-names`, null, bearer_token],
            ["GET", `${LETTERS_URL}templates/prefills`, null, bearer_token],
            ["GET", `${LETTERS_URL}contact-types`, null, bearer_token],
            ["GET", `${LETTERS_URL}letter-tags?letter_type=${randomItem(letter_types)}&enc_types=${randomItem(episode_types)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}payors?query=${randomItem(payor_names)}&payor_access=P`, null, bearer_token],
            ["GET", `${LETTERS_URL}employers?query=test&payor_ids=5347,89328,5349,84424,111&payor_access=P`, null, bearer_token],
            ["GET", `${LETTERS_URL}groups?query=test&emp_ids=60036,56891,189,56891`, null, bearer_token],
            ["GET", `${LETTERS_URL}episode-types`, null, bearer_token],
            ["GET", `${LETTERS_URL}languages`, null, bearer_token],
            ["GET", `${LETTERS_URL}decisions?enc_types=${randomItem(episode_types)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}templates/${randomItem(notice_idns)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}episode-types/outreach`, null, bearer_token],
            ["GET", `${LETTERS_URL}programs?enc_types=${randomItem(episode_types)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}provider-address-types`, null, bearer_token],
            ["GET", `${LETTERS_URL}provider-fax-types`, null, bearer_token],
            ["GET", `${LETTERS_URL}provider-roles`, null, bearer_token],
            ["GET", `${LETTERS_URL}sent-to`, null, bearer_token],
            ["GET", `${LETTERS_URL}states`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_template_type`, null, bearer_token],
            ["POST", `${LETTERS_URL}templates`, JSON.stringify({
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
                letter_name: randomString(8),
                notice_idn: randomItem(dummy_notice_idns),
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
                template_master_idn: randomItem(template_master_idns),
                template_type: randomItem(letter_types),
            }), , bearer_token],
        ]);
    });

    group('Template | Keyword List', function () {
        http.batch([
            ["PUT", `${LETTERS_URL}template-keywords/${randomItem(keyword_idns)}`, JSON.stringify({ active: randomItem(is_all) }), , bearer_token],
            ["POST", `${LETTERS_URL}template-keywords`, JSON.stringify({
                keyword_ids: randomItem(keyword_idns),
                notice_id: randomItem(notice_idns)
            }), , bearer_token],
            ["GET", `${LETTERS_URL}keywords/search?notice_id=${randomItem(notice_idns)}&keyword_cd=${randomItem(keyword_cds)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}template-keywords/history?notice_id=${randomItem(notice_idns)}&page=${randomIntBetween(1, 5)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}template-keywords?notice_id=${randomItem(notice_idns)}&sort_by=${randomItem(sort_by)}&order_by=UPD_DT&page=${randomIntBetween(1, 5)}`, null, bearer_token],
        ]);
    });

    group('Template | Attach PDF', function () {
        http.batch([
            ["POST", `${LETTERS_URL}pdfs`,
                JSON.stringify({
                    notice_id: randomItem(notice_idns),
                    pdf_attached_list: [
                        {
                            doc_name: "seladmin_aa48930337c2481d8688cb3c97a97526",
                            edu_material_id: 1164,
                        },
                        {
                            doc_name: "zeadmin_495fd6c2e6504c19a8b99fea38735897",
                            edu_material_id: 1194,
                        },
                        {
                            doc_name: "seladmin_54f2f0f718804982aaf93f6a7dd63b29",
                            edu_material_id: 92,
                        },
                        {
                            doc_name: "seladmin_0d99fa8458c44ce390fddca14f306b7e",
                            edu_material_id: 93,
                        },
                    ],
                }), , bearer_token],
            ["PUT", `${LETTERS_URL}pdfs/${randomItem(notice_idns)}`, JSON.stringify({ attachment_ids: '1164,1194,92,93' }), , bearer_token],
            ["GET", `${LETTERS_URL}pdfs/${randomItem(notice_idns)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}pdfs?notice_id=${randomItem(notice_idns)}&page=${randomIntBetween(1, 5)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}pdfs/download?eparams====ZG9jTmFtZT1zZWxhZG1pbl9hYTQ4OTMwMzM3YzI0ODFkODY4OGNiM2M5N2E5NzUyNiZ2ZXJObz0xJnNvdXJjZT1ub3RpZmljYXRpb25faW1hZ2U=`, null, bearer_token],
        ]);
    });

    group('Template | Copy', function () {
        http.post(`${LETTERS_URL}templates/${randomItem(notice_idns)}`, JSON.stringify({ episode_types: "Appeal" }), bearer_token);
    });

    group('Template | Activate or De-Activate', function () {
        http.put(`${LETTERS_URL}templates/${randomItem(notice_idns)}`, JSON.stringify({ active: randomItem(is_all) }), bearer_token);
    });

    // TODO: Provide data
    group('Healthwise Education Material', function () {
        http.get(`${LETTERS_URL}download-notification-materials?eparams====RU5DX05PVElDRV9JRE49MTUwNDczJkFUVEFDSE1FTlRfSUROPTM0NTQ=`, null, bearer_token);
    });

    // TODO: Provide data
    group('Member Level Letter', function () {
        http.batch([
            ["GET", `${LETTERS_URL}letter-job-status?enc_notif_id=148148`, null, bearer_token],
            ["GET", `${LETTERS_URL}episode-letters/148148`, null, bearer_token],
            ["POST", `${LETTERS_URL}episode-letters`,
                JSON.stringify({
                    enc_notif_id: 148148,
                    notice_body: '',
                    disclaimer: ''
                }), , bearer_token],
        ]);
    });

    // TODO: Provide data
    group('Send Email Notification', function () {
        http.post(`${LETTERS_URL}email-notification`, JSON.stringify({ episode_types: "Appeal" }), bearer_token);
    });

    sleep(5);
};
