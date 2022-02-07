import http from "k6/http";
import { check, group } from "k6";
import { randomItem } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";

export const options = {
  vus: 100,
  duration: "1s",
  thresholds: {
    "iteration_duration{scenario:default}": [`max>=0`],
    "iteration_duration{group:::setup}": [`max>=0`],
    "iteration_duration{group:::teardown}": [`max>=0`],
    "http_req_duration{scenario:default}": [`max>=0`],
  },
};

// const usernames = ["zeadmin", "Riyaz", "Jiva"];

const BASE_URL = "http://172.17.176.1:5000/";
const LETTERS_URL = `${BASE_URL}letters/api/`;
// const credentials = { username: randomItem(usernames), password: "Jiva@123" };
const credentials = { username: "zeadmin", password: "Jiva@123" };

export function setup() {
  const loginRes = http.post(`${BASE_URL}auth`, JSON.stringify(credentials), {
    headers: { "Content-Type": "application/json" },
  });

  const authToken = loginRes.json("access_token");
  check(authToken, { "logged in successfully": () => authToken !== "" });

  return authToken;
}

export default (authToken) => {
  const bearer_token = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  const res = http.get(`${LETTERS_URL}get_languages`, bearer_token);
  // console.log('Response time was ' + String(res.timings.duration) + ' ms');

  // group("visit product listing page", function () {

  // for (let id = 1; id <= 5; id++) {
  //   const res_id = http.get(
  //     http.url`${LETTERS_URL}id?id=${id}`,
  //     bearer_token
  //   );
  // }
  // });

  // group("visit login page", function () {
  //   const res = http.get(`${LETTERS_URL}getLanguages`, bearer_token);
  // });
};