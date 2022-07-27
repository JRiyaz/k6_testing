import { sleep, group, check } from "k6";
import http from "k6/http";
import { randomItem, randomIntBetween, randomString } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';

// const BASE_URL = "http://172.27.1.137:5001/";// Server
// const BASE_URL = "http://172.31.128.1:5001/";
const BASE_URL = "http://127.0.0.1:5000/";
const LETTERS_URL = `${BASE_URL}correspondence/`;
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
const payor_names = ['best', 'internal', 'test', 'ama', 'abc'];
const keyword_idns = [7, 8, 38, 56, 57, 5000006, 43, 5000018, 106, 5000006, 107, 182];
const keyword_cds = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const notice_idns = [97, 104, 135, 142, 144, 147, 152, 153, 12325, 35328, 36306, 36741, 44726, 44730];
const dummy_notice_idns = [12325, '-1', 35328, '-1', 36306, '-1', 36741, '-1', 44726, '-1', 44730];
const template_master_idns = [10721, 10722, 10724, 10725, 10728, 10729, 10730, 10731, 10733, 10736];
// const attach_pdf = [{'pdf_name': 'seladmin_54f2f0f718804982aaf93f6a7dd63b29', 'idn': 92}, {'pdf_name': 'seladmin_0d99fa8458c44ce390fddca14f306b7e', 'idn': 93}]

export const options = {
    vus: 2,
    duration: "30s",
    thresholds: {
        http_req_failed: ["rate < 0.1"], // http errors should be less than 1%
        http_req_duration: ["p(95) < 200"], // 95% of requests should be below 200ms
    },
};
export function setup() {
    const loginRes = http.post(`${LETTERS_URL}auth`, JSON.stringify(CREDENTIALS), {
        headers: { "Content-Type": "application/json" },
    });

    const authToken = loginRes.json("access_token");
    check(authToken, {
        "logged in successfully": () => authToken !== "Invalid Credentials",
    });
    return authToken;

    // return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0NDQ5OTcxNiwianRpIjoiemVhZG1pbiIsInR5cGUiOiJhY2Nlc3MiLCJuYmYiOjE2NDQ0OTk3MTYsImNzcmYiOiIzYmM2ZmJlMy0xMzliLTQ3MTAtYWNhMy0yOTBlNTRhMzliMWUiLCJleHAiOjE2NDcwOTE3MTYsInVzZXJuYW1lIjoiemVhZG1pbiIsInJvbGVzIjpbXX0.pIY0wX3Suou_rsUisXbp7Cshhhj1wuVTEgIeYN-hMSc";
}

export default (authToken) => {
    const bearer_token = {
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
        },
    };
    group('Template | Add or Modify', function () {
        http.batch([
            ["GET", `${LETTERS_URL}templates/prefills`, null, bearer_token],
            ["GET", `${LETTERS_URL}contact-types`, null, bearer_token],
            ["GET", `${LETTERS_URL}letter-tags?letter_type=${randomItem(letter_types)}&enc_type=${randomItem(episode_types)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}payors?query=${randomItem(payor_names)}&max_results=${randomIntBetween(1, 10)}&payor_access=P`, null, bearer_token],
            ["GET", `${LETTERS_URL}employers?query=test&payor_ids=5347,89328,5349,84424,111&max_results=10&payor_access=P`, null, bearer_token],
            ["GET", `${LETTERS_URL}groups?query=test&emp_ids=60036,56891,189,56891&max_results=10`, null, bearer_token],
            ["GET", `${LETTERS_URL}episode-types`, null, bearer_token],
            ["GET", `${LETTERS_URL}decisions?enc_type=${randomItem(episode_types)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}episode-types/outreach`, null, bearer_token],
            ["GET", `${LETTERS_URL}programs?enc_type=${randomItem(episode_types)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}provider-address-types`, null, bearer_token],
            ["GET", `${LETTERS_URL}provider-fax-types`, null, bearer_token],
            ["GET", `${LETTERS_URL}provider-roles`, null, bearer_token],
            ["GET", `${LETTERS_URL}sent-to`, null, bearer_token],
            ["GET", `${LETTERS_URL}states`, null, bearer_token],
            ["GET", `${LETTERS_URL}templates/types`, null, bearer_token]
        ]);
    });

    group('Template | Attach PDF', function () {
        http.batch([
            ["GET", `${LETTERS_URL}pdfs/${randomItem(notice_idns)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}pdfs?notice_id=${randomItem(notice_idns)}&page=${randomIntBetween(1, 5)}`, null, bearer_token],
        ]);
    });
};
