// Creator: k6 Browser Recorder 0.6.0

import { Httpx } from "https://jslib.k6.io/httpx/0.1.0/index.js";
import { sleep, group } from "k6";
import { check, fail } from "k6";
import http from "k6/http";
import {
  randomItem,
  randomIntBetween,
} from "https://jslib.k6.io/k6-utils/1.1.0/index.js";

const HOST_NAME = "local.zeomega.org";
const BASE_URL = `https://${HOST_NAME}`;
const USER_NAME = "zeadmin";
const PASSWORD = "Jiva@123";

const JIVA = new Httpx({ baseURL: BASE_URL });

const QUERY = [
  "hi",
  "hello",
  "test",
  "simple",
  "sample",
  "sam",
  "group",
  "good",
  "amazing",
  "jiva",
  "zeo",
  "hmm",
];

function failChecker(res) {
  if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
    console.log(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
  }
}

export const options = {
  // vus: 30,
  // stages: [
  //   { target: 50, duration: "30m" },
  //   { target: 40, duration: "5m" },
  //   { target: 0, duration: "0" },
  // ],
  thresholds: {
    http_req_failed: ["rate < 0.1"], // http errors should be less than 1%
    http_req_duration: ["p(95) < 200"], // 95% of requests should be below 200ms
  },
};

JIVA.addHeaders({
  accept: "application/json, text/plain, */*",
  "x-usr-tz-offset": "21600",
  "x-usr-tz-timezone": "America/Chicago",
});

export function setup() {
  const payload = JSON.stringify({
    __ac_name: USER_NAME,
    __ac_password: PASSWORD,
    new_enhanced_screen: true,
  });
  JIVA.addHeader("content-type", "application/json");

  const response = JIVA.post(
    // `${BASE_URL}/cms/ZeUI/views?`,
    "/cms/ZeSecurity/core_portal_login",
    payload
  );

  // console.log(response.cookies["XSRF-TOKEN"][0].value)

  const cookies = {};
  for (const name in response.cookies) {
    const key = response.cookies[name][0].name;
    if (key === "aptn") continue;
    cookies[key] = response.cookies[name][0].value;
  }

  return cookies;
}

export default function main(session) {
  // JIVA.addHeader("x-xsrf-token", session["XSRF-TOKEN"]);

  const jar = http.cookieJar();
  for (const key in session) {
    // console.log(`${key}: ${session[key]}`);
    jar.set(BASE_URL, key, session[key]);
  }

  // console.log("Testing function is called...");

  let res;

  res = JIVA.get(
    `/cms/ZeUI/EducationalMaterial/Controller/act_deact_edu_material?ACT_DEACT_FLAG=N&EDU_IDN=64892`
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/Patient/Controller/episodeIntakeMbrSrch`,
    `{"params":{"currentPage":1,"searchParam":{"I_FIRST_NAME":"${randomItem(
      QUERY
    )}"},"orderByField":"","orderBy":false,"context":"EpisodeIntake"}}`
  );
  failChecker(res);
  // else {
  //   console.log("updating XSRF-TOKEN token");
  //   jar.set(BASE_URL, "XSRF-TOKEN", res.cookies["XSRF-TOKEN"][0].value);
  // }
}
