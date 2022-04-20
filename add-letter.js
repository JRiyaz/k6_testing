import { sleep, group } from "k6";
import http from "k6/http";
import { randomItem, randomIntBetween, randomString } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';

// const BASE_URL = "http://172.27.1.137:5001/";// Server
const BASE_URL = "http://127.0.0.1:5000/";
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
const payor_names = ['best', 'internal', 'test', 'ama', 'abc'];
const keyword_idns = [7, 8, 38, 56, 57, 5000006, 43, 5000018, 106, 5000006, 107, 182];
const keyword_cds = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const notice_idns = [97, 104, 135, 142, 144, 147, 152, 153, 12325, 35328, 36306, 36741, 44726, 44730];
const dummy_enc_idns = [12325, '-1', 35328, '-1', 36306, '-1', 36741, '-1', 44726, '-1', 44730];
const template_master_idns = [10721, 10722, 10724, 10725, 10728, 10729, 10730, 10731, 10733, 10736];
const dummy_mbr_idns = [162387, 159950, 158452, 191905, 174089, 185318, 173395, 172976, 162387, 175758];
const start_date = ['04%2F03%2F2021', '12%2F12%2F2021', '06%2F21%2F2021', '08%2F12%2F2021'];
const end_date = ['04%2F13%2F2022', '03%2F13%2F2022', '02%2F13%2F2022', '01%2F13%2F2022'];
const prv_idn = [138115, 153862, 154120];
const prv_addr_idn = [595447, 596215, 596243];
const yesno = ['Y', 'N']
const program_idn = [42, 252, 5012646]
// const attach_pdf = [{'pdf_name': 'seladmin_54f2f0f718804982aaf93f6a7dd63b29', 'idn': 92}, {'pdf_name': 'seladmin_0d99fa8458c44ce390fddca14f306b7e', 'idn': 93}]

export const options = {
    vus: 1,
    duration: "2m",
    // stages: [
    //     { target: 20, duration: "30s" },
    //     { target: 10, duration: "2m" },
    //     { target: 0, duration: "0" },
    // ],

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
    // check(authToken, {
    //   "logged in successfully": () => authToken !== "Invalid Credentials",
    // });

    // return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0NDQ5OTcxNiwianRpIjoiemVhZG1pbiIsInR5cGUiOiJhY2Nlc3MiLCJuYmYiOjE2NDQ0OTk3MTYsImNzcmYiOiIzYmM2ZmJlMy0xMzliLTQ3MTAtYWNhMy0yOTBlNTRhMzliMWUiLCJleHAiOjE2NDcwOTE3MTYsInVzZXJuYW1lIjoiemVhZG1pbiIsInJvbGVzIjpbXX0.pIY0wX3Suou_rsUisXbp7Cshhhj1wuVTEgIeYN-hMSc";
    return authToken
}

export default (authToken) => {
    const bearer_token = {
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
        },
    };


    group('Correspondence Widget | Patient Overview', function () {
        http.batch([
            ["GET", `${LETTERS_URL}showCorrespondenceNotificationPanel?I_CLAIMANT_IDN=${randomItem(dummy_mbr_idns)}`, null, bearer_token],
        ]);
    });

    group('Add Letter Episode Level | Gear Icon', function () {
        http.batch([
            ["GET", `${LETTERS_URL}getLoggedCorrespondenceDetails?enc_notice_idn=${randomItem(dummy_enc_idns)}`, null, bearer_token],
            ["POST", `${LETTERS_URL}activateDeactivateNoticeEpisodeLevel`, JSON.stringify({
                enc_idn: randomItem(dummy_enc_idns),
                enc_notif_idn: randomItem(dummy_mbr_idns),
                entity_active: randomItem(yesno)
            }), , bearer_token],
        ]);
    });

    group('Add Letter Member Level | List Screen', function () {
        http.batch([
            ["GET", `${LETTERS_URL}getEpisodeCorrespondenceDataFilterMemberLevel?mbr_idn=${randomItem(dummy_mbr_idns)}&start_date=${randomItem(start_date)}&end_date=${randomItem(end_date)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}getEpisodeCorrespondenceDataMemberLevel?mbr_idn=${randomItem(dummy_mbr_idns)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}getMemberFaxNotifDetails?encounter_idn=${randomItem(dummy_enc_idns)}&encounter_notice_idn=${randomItem(notice_idns)}`, null, bearer_token],
        ]);
    });
    

    group('Add Letter Episode Level | List Screen', function () {
        http.batch([
            ["GET", `${LETTERS_URL}getEpisodeCorrespondenceDataEpisodeLevel?mbr_idn=${randomItem(dummy_mbr_idns)}&enc_idn=${randomItem(dummy_enc_idns)}&enc_type=${randomItem(episode_types)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}getEpisodeCorrespondenceDataFilterEpisodeLevel?mbr_idn=${randomItem(dummy_mbr_idns)}&enc_idn=${randomItem(dummy_enc_idns)}&enc_type=${randomItem(episode_types)}&start_date=${randomItem(start_date)}&end_date=${randomItem(end_date)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}getEpisodeFaxNotifDetails?encounter_idn=${randomItem(dummy_enc_idns)}&encounter_notice_idn=${randomItem(notice_idns)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}getPrvFaxDetails?I_PRV_IDN=${randomItem(prv_idn)}&I_PRV_ADDR_IDN=${randomItem(prv_addr_idn)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}outreach-script?CLAIMANT_IDN=${randomItem(dummy_mbr_idns)}&ENCOUNTER_IDN=${randomItem(dummy_enc_idns)}&I_ENC_TYPE_CD=${randomItem(episode_types)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}outreach-script-preview?CLAIMANT_IDN=${randomItem(dummy_mbr_idns)}&ENCOUNTER_IDN=${randomItem(dummy_enc_idns)}&I_ENC_TYPE_CD=${randomItem(episode_types)}&NOTICE_IDN=${randomItem(notice_idns)}`, null, bearer_token],
            ["POST", `${LETTERS_URL}performPrvFaxActions`, JSON.stringify({
                I_FAX_IDN: 2732,
                I_FAX_NUMBER: "(123) 123-1234",
                I_FAX_TYPE: randomIntBetween(1,24),
                I_PREF_FAX: randomItem(yesno),
                I_PRV_ADD_IDN: randomItem(prv_addr_idn),
                I_PRV_IDN: randomItem(prv_idn),
                actionType: "Modify",
                entity_active: randomItem(yesno),
                i_msg: "U",
                old_preferred: randomItem(yesno)
            }), , bearer_token],
        ]);
    });

    group('Add Letter Episode Level | Drop down Screen', function () {
        http.batch([
            ["GET", `${LETTERS_URL}getEpisodeLetterList?mbr_idn=${randomItem(dummy_mbr_idns)}&enc_idn=${randomItem(dummy_enc_idns)}&enc_type=${randomItem(episode_types)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}getEpisodeProgramsList?mbr_idn=${randomItem(dummy_mbr_idns)}&enc_idn=${randomItem(dummy_enc_idns)}&enc_type=${randomItem(episode_types)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}getEpisodeSignatureUserList?mbr_idn=${randomItem(dummy_mbr_idns)}&enc_idn=${randomItem(dummy_enc_idns)}&enc_type=${randomItem(episode_types)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}getLetterDetails?mbr_idn=${randomItem(dummy_mbr_idns)}&enc_idn=${randomItem(dummy_enc_idns)}&program_idn=${randomItem(program_idn)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}showEpisodeStaySrv?mbr_idn=${randomItem(dummy_mbr_idns)}&enc_idn=${randomItem(dummy_enc_idns)}&enc_type=${randomItem(episode_types)}`, null, bearer_token],
            ["POST", `${LETTERS_URL}saveLetterEpisodeLevel`, JSON.stringify({
                cvg_idn: 170093,
                enc_idn: 405447,
                enc_type: randomItem(episode_types),
                letrRequestedBy: 5055581,
                letterDate: "2022-03-11T04:22:42.310Z",
                letterIdn: 35341,
                mbr_idn: 154185,
                programIdn: 5012646,
                signUser: 5044469,
                stay_srv_lst: []
            }), , bearer_token],
        ]);
    });

    group('Add Letter Member Level | Drop Down Screen', function () {
        http.batch([
            ["GET", `${LETTERS_URL}getLetterList?mbr_idn=${randomItem(dummy_mbr_idns)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}getProgramsList?mbr_idn=${randomItem(dummy_mbr_idns)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}getSignatureUserList?mbr_idn=${randomItem(dummy_mbr_idns)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}showStaySrv?mbr_idn=${randomItem(dummy_mbr_idns)}`, null, bearer_token],
            ["POST", `${LETTERS_URL}saveLetterMemberLevel`, JSON.stringify({
                mbr_idn:randomItem(dummy_mbr_idns),
                enc_type:randomItem(episode_types),
                stay_srv_lst:[],
                letterDate:"2022-04-04T02:30:18.988Z",
                letterIdn:randomItem(notice_idns),
                letrRequestedBy:22845,
                signUser:5044192
            }), , bearer_token],
        ]);
    });

    group('Add Letter gear icon | Attach Document Screen', function () {
        http.batch([
            ["GET", `${LETTERS_URL}doc-edumaterial-count?mbr_idn=${randomItem(dummy_mbr_idns)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}episode-documents?mbr_idn=${randomItem(dummy_mbr_idns)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}fetch-attach-doc-material?encounter_notice_idn=${randomItem(notice_idns)}`, null, bearer_token],
            ["POST", `${LETTERS_URL}attach-doc-material`, JSON.stringify({
                CRT_DT: "11/19/2021 06:49:10",
                DATE_DOC_RECIEVED: "",
                DOCUMENT_DESCRIPTION: "",
                DOCUMENT_NAME: "",
                DOCUMENT_TITLE: "",
                DOCUMENT_TYPE: 11,
                DOCUMENT_TYPE_CD: "INBFAX",
                DOC_IDN: "",
                ENC_IDN: randomItem(dummy_enc_idns),
                MBR_IDN: "",
                TYPE_DESCRIPTION: "",
                USR_NAME: "Laurel, page",
                VERSION_NO: 1,
                doc_idn: 1,
                enc_notif_idn: randomItem(notice_idns)
            }), , bearer_token],
            ["POST", `${LETTERS_URL}remove-attached-doc-material`, JSON.stringify({
                CRT_DT: "11/19/2021 06:49:10",
                DATE_DOC_RECIEVED: "",
                DOCUMENT_DESCRIPTION: "",
                DOCUMENT_NAME: "",
                DOCUMENT_TITLE: "",
                DOCUMENT_TYPE: 11,
                DOCUMENT_TYPE_CD: "INBFAX",
                DOC_IDN: "",
                ENC_IDN: randomItem(dummy_enc_idns),
                MBR_IDN: "",
                TYPE_DESCRIPTION: "",
                USR_NAME: "Laurel, page",
                VERSION_NO: 1,
                doc_idn: 1,
                enc_notif_idn: randomItem(notice_idns)
            }), , bearer_token],
        ]);
    });

    group('Member and Episode Screen | Modify Letter', function () {
        http.batch([
            ["GET", `${LETTERS_URL}get_letter_job_status?enc_notif_idn=${randomItem(notice_idns)}`, null, bearer_token],
            ["GET", `${LETTERS_URL}get_modify_mbrenc_letter?enc_notif_idn=${randomItem(notice_idns)}`, null, bearer_token],
            ["POST", `${LETTERS_URL}save_modified_enc_Letter`, JSON.stringify({
                disclaimer: "",
                enc_notif_idn: randomItem(notice_idns),
                notice_body: ""
            }), , bearer_token],
        ]);
    });

    sleep(5);
};
