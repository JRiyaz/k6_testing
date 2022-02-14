// Scenario: Scenario_1 (executor: ramping-vus)

import { sleep, check } from "k6";
import http from "k6/http";
import { Trend, Counter, Rate, Gauge } from "k6/metrics";

const template_type_duration = new Trend("template_type_duration");
const template_type_no_of_times = new Counter("template_type_no_of_times");
const template_type_waiting_time = new Trend("template_type_waiting_time");
const template_type_success_rate = new Rate("template_type_success_rate");

const enc_type_duration = new Trend("enc_type_duration");
const enc_type_no_of_times = new Counter("enc_type_no_of_times");
const enc_type_waiting_time = new Trend("enc_type_waiting_time");
const enc_type_success_rate = new Rate("enc_type_success_rate");

// const BASE_URL = "http://172.27.1.137:5001/";// Server
const BASE_URL = "http://172.17.176.1:5001/";
const LETTERS_URL = `${BASE_URL}letters/api/`;
const CREDENTIALS = { username: "zeadmin", password: "Jiva@123" };

export const options = {
  vus: 10,
  duration: "30s",
  // stages: [
  //   { target: 10, duration: "30s" },
  //   { target: 5, duration: "1m" },
  //   { target: 0, duration: "0" },
  // ],

  thresholds: {
    http_req_failed: ["rate < 0.1"], // http errors should be less than 1%
    http_req_duration: ["p(90) < 200"], // 95% of requests should be below 200ms
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

  let temp_type = http.get(`${LETTERS_URL}getTemplateTypes`, bearer_token);

  let enc_type = http.get(`${LETTERS_URL}getEncTypes`, bearer_token);
  template_type_duration.add(temp_type.timings.duration);
  template_type_no_of_times.add(1);
  template_type_waiting_time.add(temp_type.timings.waiting);
  template_type_success_rate.add(temp_type.status != "undefined" ? 1 : 0);

  enc_type_duration.add(enc_type.timings.duration);
  enc_type_no_of_times.add(1);
  enc_type_waiting_time.add(enc_type.timings.waiting);
  enc_type_success_rate.add(enc_type.status != "undefined" ? 1 : 0);

  sleep(5);
};
