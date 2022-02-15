import { sleep } from "k6";
import http from "k6/http";
import { randomItem, randomIntBetween } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";

// const BASE_URL = "http://172.27.1.137:5001/";// Server
const BASE_URL = "http://172.17.176.1:5001/";
const LETTERS_URL = `${BASE_URL}letters/api/`;
const CREDENTIALS = { username: "zeadmin", password: "Jiva@123" };

const episode_types = ['Appeal', 'BH-CM', 'BH-IP', 'BH-OP', 'CM', 'DM', 'ISSUES', 'HP', 'IP', 'LCN', 'LTSS', 'MA-Appeal', 'MA-Grievance', 'MTM', 'MRIP', 'OP', 'EP', 'PR', 'QR'];
const query = ['test', 'sample', '20 decision', 'letter'];
const max_results = [1, 5, 10, 15, 20];
const current_page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const is_all = ['Y', 'N'];

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

    check(responses[2], {
        'form data OK': (res) => res.body.data != null && res.body.data != undefined,
    });

    sleep(5);
};
