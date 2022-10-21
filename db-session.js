import http from "k6/http";

const BASE_URL = "http://localhost:6001/correspondence/";

export const options = {
  vus: 50,
  duration: "15s",
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
  http.get(`${BASE_URL}sent-to`);
};
