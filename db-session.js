import http from "k6/http";

const BASE_URL = "http://localhost:8000/correspondence/";
const zeadmin_token = "99a4ebc506eb4d2faf81e64f2a662b04";
const zeadmin_csrf = "3df5800e-d2ab-47dd-90a1-9d4fdd31374d";

const jiva_token = "ee1256ebaa4147cc99fec11c36c859e6";
const jiva_csrf = "644470a6-bad6-40eb-b357-d1db01db92aa";

export const options = {
  // vus: 1,
  // duration: "15s",
  // stages: [
  //   { target: 20, duration: "30s" },
  //   { target: 10, duration: "2m" },
  //   { target: 0, duration: "0" },
  // ],

  thresholds: {
    http_req_failed: ["rate < 0.1"], // http errors should be less than 1%
    http_req_duration: ["p(95) < 200"], // 95% of requests should be below 200ms
  },
};

export default () => {
  const zeadmin = {
    headers: {
      Authorization: `Bearer ${zeadmin_token}`,
      "Content-Type": "application/json",
    },
  };

  const jiva = {
    headers: {
      Authorization: `Bearer ${jiva_token}`,
      "Content-Type": "application/json",
    },
  };

  // http.get(`${BASE_URL}sent-to`, null, zeadmin);
  // http.get(`${BASE_URL}sent-to`, null, jiva);

  http.get(`${BASE_URL}active-status`, zeadmin);
  http.get(`${BASE_URL}active-status?auth=auth`, jiva);

  // http.post(`${BASE_URL}active-status`, null, zeadmin);
  // http.post(`${BASE_URL}active-status`, null, jiva);
  // http.post(`${BASE_URL}active-status`, null, {
  //   headers: {
  //     "X-CSRFT": zeadmin_csrf,
  //     "Content-Type": "application/json",
  //   },
  //   cookies: {
  //     apitoken: jiva_token,
  //   },
  // });
  // http.post(`${BASE_URL}active-status`, null, {
  //   headers: {
  //     "X-CSRFT": zeadmin_csrf,
  //     "Content-Type": "application/json",
  //   },
  //   cookies: {
  //     apitoken: zeadmin_token,
  //   },
  // });
};
