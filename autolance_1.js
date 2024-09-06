import http from "k6/http";
import { sleep, group } from "k6";

const HOST_NAME = "localhost:1132";
const BASE_URL = `http://${HOST_NAME}/`;
const SESSION =
  "A2L0yS7hAG1z2t52dAPho4gARzL1yqGcCVZxB388iqEIp0kJ5j__l10eMwQeS1g390XgKIxyW5m72ttN65jv5IAFlUwBAAAAAAAASryZ2mZHQdm2GACpIRx9lCiMCnNlc3Npb25faWSUjCQ3ZGM5YzhiNi1kYjNhLTQ0ZTYtOTViZC03NzVmYmM3YWRkMWOUjAhfX2NzcmZfX5SMKDVmMzE4Y2QzMzJiOGM1YTliMTlkM2UzMTNjY2FlMGQ4ZTM3MTQ2N2SUjAh1c2VyX2lkbpRLAowMcGF5b3JfYWNjZXNzlIwBQZSMCHRpbWV6b25llIwPQW1lcmljYS9QaG9lbml4lIwGb2Zmc2V0lIwGLTE5ODAwlIwCaWSUjAd6ZWFkbWlulIwJdXNlcl90eXBllIwESklWQZSMC3VzZXJfdHpfc3RylIwPQW1lcmljYS9QaG9lbml4lIwHdXNlcl90epSMBHB5dHqUjAJfcJSTlCiMD0FtZXJpY2EvUGhvZW5peJRKAJf__0sAjANMTVSUdJRSlHWHlC4";

// export const options = { vus: 10, duration: '5m' };

export const options = {
  // vus: 30,
  stages: [
    { target: 80, duration: "10m" },
    { target: 40, duration: "5m" },
    { target: 0, duration: "0" },
  ],

  thresholds: {
    http_req_failed: ["rate < 0.1"], // http errors should be less than 1%
    http_req_duration: ["p(95) < 200"], // 95% of requests should be below 200ms
  },
};

export default function main() {
  const jar = http.cookieJar();
  jar.set(BASE_URL, "session", SESSION);

  http.get(
    BASE_URL + "cms/ZeUI/views/ZeUI/getConfigData?usrTz=America/Phoenix",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-xsrf-token": "b917f987e2fae40881f7c7574b633da45d76a24a",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL + "cms/ZeUI/views/Message/Controller/get_dashboard_msg_count",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"state":"","user_idn":2,"ctime":"2024-09-06T07:24:39.904Z","uri":"","stateInfo":{"name":"","url":"^","views":null,"abstract":true}}',
        "x-request-id": "61ce96d9-85e5-4ec8-a656-d453064e7430",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "b917f987e2fae40881f7c7574b633da45d76a24a",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL + "cms/ZeUI/getCustomerLogoDetails?logo_type=NP_MENU_JIVA",
    {
      headers: {
        host: HOST_NAME,
        accept:
          "image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "image",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL + "cms/ZeUI/views/Dashboard/Controller/get_widget_controller_map",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":2,"ctime":"2024-09-06T07:24:41.649Z","uri":"#/dashboard","stateInfo":{"url":"/dashboard","views":{"index":{"templateUrl":"++resource++dashboard/src/ngdashboard/partials/dashboard.html","controller":"dashboardController as dashCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}},"data":{"displayName":"Dashboard"}},"data":{"displayName":"My Dashboard"},"name":"dashboardView"}}',
        "x-request-id": "ff6cd910-c70c-4298-93c2-ec5445b1e516",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "b917f987e2fae40881f7c7574b633da45d76a24a",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.post(
    BASE_URL + "cms/ZeUI/views/Dashboard/Controller/getDashboardConfig",
    '{"user_datetime":"09/06/2024 00:24"}',
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "content-type": "application/json; charset=utf-8",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":2,"ctime":"2024-09-06T07:24:41.649Z","uri":"#/dashboard","stateInfo":{"url":"/dashboard","views":{"index":{"templateUrl":"++resource++dashboard/src/ngdashboard/partials/dashboard.html","controller":"dashboardController as dashCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}},"data":{"displayName":"Dashboard"}},"data":{"displayName":"My Dashboard"},"name":"dashboardView"}}',
        "x-request-id": "2d24c61e-1c17-4c42-ad53-723fe09d00af",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "b917f987e2fae40881f7c7574b633da45d76a24a",
        origin: "http://localhost:1132",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.post(
    BASE_URL + "cms/ZeUI/views/ZeUser/Controller/getLoggedInUserForngDashboard",
    '{"user_datetime":"09/06/2024 00:24"}',
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "content-type": "application/json; charset=utf-8",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":2,"ctime":"2024-09-06T07:24:41.649Z","uri":"#/dashboard","stateInfo":{"url":"/dashboard","views":{"index":{"templateUrl":"++resource++dashboard/src/ngdashboard/partials/dashboard.html","controller":"dashboardController as dashCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}},"data":{"displayName":"Dashboard"}},"data":{"displayName":"My Dashboard"},"name":"dashboardView"}}',
        "x-request-id": "386e9a9f-bed0-4f96-9156-ec239f690161",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "b917f987e2fae40881f7c7574b633da45d76a24a",
        origin: "http://localhost:1132",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.post(
    BASE_URL + "cms/ZeUI/views/Dashboard/Controller/getWidgetsData",
    '{"user_datetime":"09/06/2024 00:24","lazyLoad":true}',
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "content-type": "application/json; charset=utf-8",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":2,"ctime":"2024-09-06T07:24:50.813Z","uri":"#/dashboard","stateInfo":{"url":"/dashboard","views":{"index":{"templateUrl":"++resource++dashboard/src/ngdashboard/partials/dashboard.html","controller":"dashboardController as dashCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}},"data":{"displayName":"Dashboard"}},"data":{"displayName":"My Dashboard"},"name":"dashboardView"}}',
        "x-request-id": "070959af-0925-4a13-9961-070afbbaf346",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "b917f987e2fae40881f7c7574b633da45d76a24a",
        origin: "http://localhost:1132",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.post(
    BASE_URL +
      "cms/ZeUI/views/Dashboard/Controller/get_incomplete_episode_fax_widget",
    '{"state":"dashboardView","user_idn":2,"ctime":"2024-09-06T07:24:55.829Z","uri":"#/dashboard","widget":"incepisodesandfaxcount","user_datetime":"09/06/2024 00:24"}',
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "content-type": "application/json; charset=utf-8",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":2,"ctime":"2024-09-06T07:24:55.936Z","uri":"#/dashboard","stateInfo":{"url":"/dashboard","views":{"index":{"templateUrl":"++resource++dashboard/src/ngdashboard/partials/dashboard.html","controller":"dashboardController as dashCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}},"data":{"displayName":"Dashboard"}},"data":{"displayName":"My Dashboard"},"name":"dashboardView"}}',
        "x-request-id": "a33c2f9a-4403-40b0-963c-4aa3503e5908",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "b917f987e2fae40881f7c7574b633da45d76a24a",
        origin: "http://localhost:1132",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.post(
    BASE_URL +
      "cms/ZeUI/views/Dashboard/Controller/get_fax_stats_piegraph_widget",
    '{"state":"dashboardView","user_idn":2,"ctime":"2024-09-06T07:24:55.936Z","uri":"#/dashboard","widget":"faxstatspiegraphnew","user_datetime":"09/06/2024 00:24"}',
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "content-type": "application/json; charset=utf-8",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":2,"ctime":"2024-09-06T07:24:56.036Z","uri":"#/dashboard","stateInfo":{"url":"/dashboard","views":{"index":{"templateUrl":"++resource++dashboard/src/ngdashboard/partials/dashboard.html","controller":"dashboardController as dashCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}},"data":{"displayName":"Dashboard"}},"data":{"displayName":"My Dashboard"},"name":"dashboardView"}}',
        "x-request-id": "11a5bd79-bc0e-48a4-a9e6-69c4e3095c20",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "b917f987e2fae40881f7c7574b633da45d76a24a",
        origin: "http://localhost:1132",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/ZeUI/getConfigurationStatus?item_cd=interactions_completed_today_link",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":2,"ctime":"2024-09-06T07:24:56.055Z","uri":"#/dashboard","stateInfo":{"url":"/dashboard","views":{"index":{"templateUrl":"++resource++dashboard/src/ngdashboard/partials/dashboard.html","controller":"dashboardController as dashCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}},"data":{"displayName":"Dashboard"}},"data":{"displayName":"My Dashboard"},"name":"dashboardView"}}',
        "x-request-id": "bb65913c-f769-4507-abf2-bb135436d1bf",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "b917f987e2fae40881f7c7574b633da45d76a24a",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.post(
    BASE_URL +
      "cms/ZeUI/views/Dashboard/Controller/get_fax_turnaround_time_widget",
    '{"state":"dashboardView","user_idn":2,"ctime":"2024-09-06T07:24:56.055Z","uri":"#/dashboard","widget":"turnaroundtimenew","user_datetime":"09/06/2024 00:24"}',
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "content-type": "application/json; charset=utf-8",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":2,"ctime":"2024-09-06T07:24:56.207Z","uri":"#/dashboard","stateInfo":{"url":"/dashboard","views":{"index":{"templateUrl":"++resource++dashboard/src/ngdashboard/partials/dashboard.html","controller":"dashboardController as dashCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}},"data":{"displayName":"Dashboard"}},"data":{"displayName":"My Dashboard"},"name":"dashboardView"}}',
        "x-request-id": "31af9683-c677-4410-9ba7-d7dab7e3f74f",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "b917f987e2fae40881f7c7574b633da45d76a24a",
        origin: "http://localhost:1132",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.post(
    BASE_URL + "cms/ZeUI/views/Dashboard/Controller/get_nurseworkflow_widget",
    '{"state":"dashboardView","user_idn":2,"ctime":"2024-09-06T07:24:56.055Z","uri":"#/dashboard","widget":"nurseworkflow","user_datetime":"09/06/2024 00:24"}',
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "content-type": "application/json; charset=utf-8",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":2,"ctime":"2024-09-06T07:24:56.207Z","uri":"#/dashboard","stateInfo":{"url":"/dashboard","views":{"index":{"templateUrl":"++resource++dashboard/src/ngdashboard/partials/dashboard.html","controller":"dashboardController as dashCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}},"data":{"displayName":"Dashboard"}},"data":{"displayName":"My Dashboard"},"name":"dashboardView"}}',
        "x-request-id": "59ef54a0-081b-421b-b1be-bb185348a01b",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "b917f987e2fae40881f7c7574b633da45d76a24a",
        origin: "http://localhost:1132",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.post(
    BASE_URL + "cms/ZeUI/views/Dashboard/Controller/get_myactivities_widget",
    '{"state":"dashboardView","user_idn":2,"ctime":"2024-09-06T07:24:56.055Z","uri":"#/dashboard","widget":"myactivities","user_datetime":"09/06/2024 00:24"}',
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "content-type": "application/json; charset=utf-8",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":2,"ctime":"2024-09-06T07:24:56.207Z","uri":"#/dashboard","stateInfo":{"url":"/dashboard","views":{"index":{"templateUrl":"++resource++dashboard/src/ngdashboard/partials/dashboard.html","controller":"dashboardController as dashCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}},"data":{"displayName":"Dashboard"}},"data":{"displayName":"My Dashboard"},"name":"dashboardView"}}',
        "x-request-id": "b3e7077f-646b-4879-8c4d-0195ef32878b",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "b917f987e2fae40881f7c7574b633da45d76a24a",
        origin: "http://localhost:1132",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.post(
    BASE_URL + "cms/ZeUI/views/Dashboard/Controller/get_carereminder_widget",
    '{"state":"dashboardView","user_idn":2,"ctime":"2024-09-06T07:24:56.055Z","uri":"#/dashboard","widget":"careremindernursewidget","user_datetime":"09/06/2024 00:24"}',
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "content-type": "application/json; charset=utf-8",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":2,"ctime":"2024-09-06T07:24:56.207Z","uri":"#/dashboard","stateInfo":{"url":"/dashboard","views":{"index":{"templateUrl":"++resource++dashboard/src/ngdashboard/partials/dashboard.html","controller":"dashboardController as dashCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}},"data":{"displayName":"Dashboard"}},"data":{"displayName":"My Dashboard"},"name":"dashboardView"}}',
        "x-request-id": "208b78d6-062c-425a-a914-06bf936a1812",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "b917f987e2fae40881f7c7574b633da45d76a24a",
        origin: "http://localhost:1132",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/ZeUI/getConfigurationStatus?item_cd=interactions_completed_today_link",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":2,"ctime":"2024-09-06T07:25:02.983Z","uri":"#/dashboard","stateInfo":{"url":"/dashboard","views":{"index":{"templateUrl":"++resource++dashboard/src/ngdashboard/partials/dashboard.html","controller":"dashboardController as dashCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}},"data":{"displayName":"Dashboard"}},"data":{"displayName":"My Dashboard"},"name":"dashboardView"}}',
        "x-request-id": "c61f4fdf-7ec8-403c-9729-f22901e2c59c",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL + "cms/ZeUI/views/WorkList/Controller/get_config_for_sort_by",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":2,"ctime":"2024-09-06T07:25:10.789Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
        "x-request-id": "81af4764-5870-48ce-8dbf-d1660f4c8c4a",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL + "cms/ZeUI/views/WorkList/Controller/get_worklist_search_fields",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":2,"ctime":"2024-09-06T07:25:10.789Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
        "x-request-id": "9ec4d69b-d262-43bf-b505-dc7ade9a431d",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.post(
    BASE_URL +
      "cms/ZeUI/views/WorkList/Controller/get_episodes_by_worklist_basic_search",
    '{"sort_by":true,"order_by":"","send_fields":true,"worklist_idn":0,"sys_user_type":"","page_num":1,"sel_enc_type":"","USER_IDN":0,"enc_selected_flag":false,"currDate":"09/06/2024"}',
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "content-type": "application/json; charset=utf-8",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":2,"ctime":"2024-09-06T07:25:15.249Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
        "x-request-id": "41beab34-eb9f-461d-96c1-0c5315c2997c",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        origin: "http://localhost:1132",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/WorkList/Controller/get_logged_in_user_worklists?USER_IDN=0",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":2,"ctime":"2024-09-06T07:25:15.249Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
        "x-request-id": "c1a0564e-f531-44f9-94d2-a841d9a5f103",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.post(
    BASE_URL +
      "cms/ZeUI/views/WorkList/Controller/get_episodes_count_by_worklist",
    '{"sort_by":true,"order_by":"DUEDATEWIDGET","send_fields":false,"worklist_idn":0,"sys_user_type":"","page_num":1,"sel_enc_type":"Appeal","USER_IDN":0,"enc_selected_flag":false,"currDate":"09/06/2024","sortAndFilter":[]}',
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "content-type": "application/json; charset=utf-8",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":2,"ctime":"2024-09-06T07:25:32.699Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
        "x-request-id": "698fdc11-70c0-474d-ae7b-7acd82741693",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        origin: "http://localhost:1132",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/WorkList/Controller/get_episode_data_by_worklist?default_worklist_idn=12123&enc_idns_list=652222&enc_idns_list=700859&enc_idns_list=703808&enc_idns_list=710652&enc_idns_list=710668&enc_idns_list=710702&enc_idns_list=710710&enc_idns_list=710753&enc_idns_list=710755&enc_idns_list=711022&fetch_episode_req_type=0&fields_list=ENC_IDN&fields_list=CERT_AUTH_NO&fields_list=EPISODEWIDGET&fields_list=PATIENTWIDGET&fields_list=MEMBERIDWIDGET&fields_list=APPEAL_LEVEL_DESC&fields_list=APPELLANT_TYPE&fields_list=APPEAL_CATEGORY&fields_list=DUEDATEWIDGET&fields_list=OVERDUEDATE&fields_list=ALL_PROVIDERS&fields_list=REVIEWER_DUE_DT&fields_list=ASSIGNED_REVIEWER&fields_list=ADMIT_DT&fields_list=DIAG_CD&fields_list=SERVICE_TYPE&fields_list=SERVICE_START_DT&fields_list=SERVICE_CODE&fields_list=DECISION_DESCRIPTION&fields_list=FOLLOWUP_DT&fields_list=TPA&fields_list=GROUP_NAME&fields_list=REQUESTED_DT&fields_list=APPEAL_TYPE&fields_list=CODE_TIME_SVC_ID&fields_list=ASSIGNED_DATE&fields_list=EXT_ENC_ID&fields_list=OVERDUE_ACT_DT&logged_in_user_idn=2&mbr_idns_list=838721&mbr_idns_list=796831&mbr_idns_list=838721&mbr_idns_list=788888&mbr_idns_list=799729&mbr_idns_list=788888&mbr_idns_list=863319&mbr_idns_list=838721&mbr_idns_list=838721&mbr_idns_list=838721&post_data=%7B%22sort_by%22%3Atrue%2C%22order_by%22%3A%22DUEDATEWIDGET%22%2C%22send_fields%22%3Afalse%2C%22worklist_idn%22%3A0%2C%22sys_user_type%22%3A%22%22%2C%22page_num%22%3A1%2C%22sel_enc_type%22%3A%22Appeal%22%2C%22USER_IDN%22%3A0%2C%22enc_selected_flag%22%3Afalse%2C%22currDate%22%3A%2209%2F06%2F2024%22%2C%22sortAndFilter%22%3A%5B%5D%7D&program_worklist_flag=0&worklist_idn=12123&enc_idns_list=700859&enc_idns_list=703808&enc_idns_list=710652&enc_idns_list=710668&enc_idns_list=710702&enc_idns_list=710710&enc_idns_list=710753&enc_idns_list=710755&enc_idns_list=711022&fields_list=CERT_AUTH_NO&fields_list=EPISODEWIDGET&fields_list=PATIENTWIDGET&fields_list=MEMBERIDWIDGET&fields_list=APPEAL_LEVEL_DESC&fields_list=APPELLANT_TYPE&fields_list=APPEAL_CATEGORY&fields_list=DUEDATEWIDGET&fields_list=OVERDUEDATE&fields_list=ALL_PROVIDERS&fields_list=REVIEWER_DUE_DT&fields_list=ASSIGNED_REVIEWER&fields_list=ADMIT_DT&fields_list=DIAG_CD&fields_list=SERVICE_TYPE&fields_list=SERVICE_START_DT&fields_list=SERVICE_CODE&fields_list=DECISION_DESCRIPTION&fields_list=FOLLOWUP_DT&fields_list=TPA&fields_list=GROUP_NAME&fields_list=REQUESTED_DT&fields_list=APPEAL_TYPE&fields_list=CODE_TIME_SVC_ID&fields_list=ASSIGNED_DATE&fields_list=EXT_ENC_ID&fields_list=OVERDUE_ACT_DT&mbr_idns_list=796831&mbr_idns_list=788888&mbr_idns_list=799729&mbr_idns_list=788888&mbr_idns_list=863319",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":2,"ctime":"2024-09-06T07:25:32.699Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
        "x-request-id": "8164995c-bcee-4d94-826f-466197f6cead",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_member_keyword_icons?mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=796831&mbr_list=796831&mbr_list=796831&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=788888&mbr_list=799729&mbr_list=788888&mbr_list=788888&mbr_list=788888&mbr_list=788888&mbr_list=863319&mbr_list=863319&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=838721&mbr_list=796831&mbr_list=796831&mbr_list=796831&mbr_list=788888&mbr_list=799729&mbr_list=788888&mbr_list=788888&mbr_list=788888&mbr_list=788888&mbr_list=863319&mbr_list=863319",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":2,"ctime":"2024-09-06T07:25:38.129Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
        "x-request-id": "20742a22-f1c0-43e1-a03b-ddb74cde139a",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(BASE_URL + "cms/ZeSecurity/isSessionInvalid", {
    headers: {
      host: HOST_NAME,
      accept: "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.5",
      "accept-encoding": "gzip, deflate, br, zstd",
      "x-usr-tz-offset": "25200",
      "x-usr-tz-timezone": "America/Phoenix",
      "x-auditlog":
        '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":2,"ctime":"2024-09-06T07:25:39.669Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
      "x-request-id": "a27507ad-eacf-471e-87dc-30b812817e2b",
      "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
      "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
      dnt: "1",
      "sec-gpc": "1",
      connection: "keep-alive",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
  });
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_member_name?mbr_idn=838721",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":2,"ctime":"2024-09-06T07:25:43.959Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
        "x-request-id": "104f309e-63d1-4bc3-83af-18ec44d2a319",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL + "cms/ZeUI/views/Patient/Controller/getAllReadOnlyMembers",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":2,"ctime":"2024-09-06T07:25:48.451Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
        "x-request-id": "2794442b-9c64-4b9b-a1dd-8ddff5bd7366",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/check_member_info_edit_allowed?mbr_idn=838721",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","state":"mbr.mbrbase.membercentricview","user_idn":2,"ctime":"2024-09-06T07:25:49.547Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"url":"/member/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard.html","controller":"MemberDashboardController as mbrdshctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"patient Overview"},"name":"mbr.mbrbase.membercentricview"}}',
        "x-request-id": "3ef36b6b-fe7a-450b-b2c4-984d2da62450",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL + "cms/ZeUI/views/Patient/Controller/get_xml_for_vendor_programs",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","state":"mbr.mbrbase.membercentricview","user_idn":2,"ctime":"2024-09-06T07:25:49.548Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"url":"/member/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard.html","controller":"MemberDashboardController as mbrdshctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"patient Overview"},"name":"mbr.mbrbase.membercentricview"}}',
        "x-request-id": "2cca2a5b-19cd-4a64-aa9e-fc04af5b0e2b",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL + "cms/ZeUI/views/Patient/Controller/get_centric_view_tab_config",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","state":"mbr.mbrbase.membercentricview","user_idn":2,"ctime":"2024-09-06T07:25:49.548Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"url":"/member/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard.html","controller":"MemberDashboardController as mbrdshctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"patient Overview"},"name":"mbr.mbrbase.membercentricview"}}',
        "x-request-id": "8f7f5f96-7d6d-479a-96d0-987eb81a2c53",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Episode/Controller/menuEpisodesList?I_CLAIMANT_IDN=838721",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","state":"mbr.mbrbase.membercentricview","user_idn":2,"ctime":"2024-09-06T07:25:49.548Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"url":"/member/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard.html","controller":"MemberDashboardController as mbrdshctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"patient Overview"},"name":"mbr.mbrbase.membercentricview"}}',
        "x-request-id": "0aa30795-6bb7-4659-8c28-70468962acd0",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.post(
    BASE_URL + "cms/ZeUI/views/ZeUI/clientErrorLog",
    '{"exception":"f is undefined (caused by \\"<j-label jname=\\"mbr_grp_keyword\\">\\")","stack":"gBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:88:285\\ncompileBASE_URL + @cms/++resource++ngui/src/js/directives/jLabel.js?1725438075:36:55\\nBBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:62:328\\nXBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:52:38\\nXBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:52:168\\nXBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:52:168\\nQBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:50:56\\nBBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:61:123\\nXBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:52:38\\nXBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:52:168\\nXBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:52:168\\nXBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:52:168\\nQBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:50:56\\nBBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:61:123\\nXBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:52:38\\nXBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:52:168\\nBc/this.$get</Xb/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:66:24\\nkd/f/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:112:182\\n$evalBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:126:250\\n$digestBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:123:365\\n$applyBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:127:12\\nlBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:81:327\\nwBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:85:450\\nAf/</I.onloadBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:86:463\\nEventHandlerNonNull*Af/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:86:299\\nmBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:83:22\\nPe/this.$get</k/f<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:80:249\\nkd/f/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:112:182\\n$evalBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:126:250\\n$digestBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:123:365\\n$applyBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:127:12\\nresolve/this.route.load</<BASE_URL + @cms/++resource++ngui/src/js/services/jivaRouteResolverService.js?1725438075:25:44\\nexecCbBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:29:311\\ncheckBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:18:385\\nga/enable/</<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:9\\nu/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:8:102\\nga/emit/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:370\\nvBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:7:173\\nemitBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:341\\ncheckBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:19:403\\nga/enable/</<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:9\\nu/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:8:102\\nga/emit/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:370\\nvBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:7:173\\nemitBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:341\\ncheckBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:19:403\\nga/enable/</<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:9\\nu/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:8:102\\nga/emit/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:370\\nvBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:7:173\\nemitBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:341\\ncheckBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:19:403\\nga/enable/</<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:9\\nu/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:8:102\\nga/emit/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:370\\nvBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:7:173\\nemitBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:341\\ncheckBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:19:403\\nga/enable/</<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:9\\nu/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:8:102\\nga/emit/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:370\\nvBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:7:173\\nemitBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:341\\ncheckBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:19:403\\nenableBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:238\\ninitBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:17:68\\nEBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:14:185\\ncompleteLoadBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:28:126\\nonScriptLoadBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:29:436\\nEventListener.handleEvent*g.loadBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:34:4\\nrequirejs.loadBASE_URL + @cms/++resource++ngui/src/js/services/jivaServices.js?1725438075:1525:21\\nloadBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:29:264\\nloadBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:18:31\\nfetchBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:17:490\\ncheckBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:19:471\\nenableBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:238\\nenableBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:27:466\\nga/enable/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:110\\nu/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:8:102\\nvBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:7:173\\nenableBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:22:242\\ninitBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:17:68\\nEBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:14:185\\ncompleteLoadBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:28:126\\nonScriptLoadBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:29:436\\nEventListener.handleEvent*g.loadBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:34:4\\nrequirejs.loadBASE_URL + @cms/++resource++ngui/src/js/services/jivaServices.js?1725438075:1525:21\\nloadBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:29:264\\nloadBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:18:31\\nfetchBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:17:490\\ncheckBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:19:471\\nenableBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:238\\nenableBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:27:466\\nga/enable/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:110\\nu/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:8:102\\nvBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:7:173\\nenableBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:22:242\\ninitBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:17:68\\nEBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:14:185\\n","cause":"<j-label jname=\\"mbr_grp_keyword\\">","location":"/member/===ODM4NzIx","client_timestamp":"2024-09-06T07:25:49.870Z","logging_level":40,"user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:130.0) Gecko/20100101 Firefox/130.0"}',
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "content-type": "application/json; charset=utf-8",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","state":"mbr.mbrbase.membercentricview","user_idn":2,"ctime":"2024-09-06T07:25:49.900Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"url":"/member/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard.html","controller":"MemberDashboardController as mbrdshctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"patient Overview"},"name":"mbr.mbrbase.membercentricview"}}',
        "x-request-id": "34b44979-ff6f-45dc-b55d-b0313792cfdd",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        origin: "http://localhost:1132",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/getConfigForMemberDemographics",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","state":"mbr.mbrbase.membercentricview","user_idn":2,"ctime":"2024-09-06T07:25:49.900Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"url":"/member/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard.html","controller":"MemberDashboardController as mbrdshctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"patient Overview"},"name":"mbr.mbrbase.membercentricview"}}',
        "x-request-id": "3202eb30-5f98-4259-8f2c-8c5ef5698f52",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=838721&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":2,"ctime":"2024-09-06T07:25:56.680Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
        "x-request-id": "de8c2865-1c41-4e52-9756-b3b48e3716e3",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL + "cms/ZeUI/views/Episode/Controller/get_deactivate_enc_btn_roles",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":2,"ctime":"2024-09-06T07:25:56.749Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
        "x-request-id": "a02c415a-c6d3-4f58-8c6d-f4fc5fa9ef87",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL + "cms/ZeUI/views/Patient/Controller/getWidgetsConfig?view=Member",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":2,"ctime":"2024-09-06T07:26:00.130Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
        "x-request-id": "dcab4785-2fc7-4693-85b2-cdc019815282",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Episode/Controller/getEpisodeCountAndList?claimant_idn=838721",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":2,"ctime":"2024-09-06T07:26:00.442Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
        "x-request-id": "8722b9f7-8bbf-4896-9490-867d5233c090",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_sdoh_category_icon_configuration",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":2,"ctime":"2024-09-06T07:26:04.522Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
        "x-request-id": "e3d26898-cbd9-4651-b957-6f531b650475",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_left_panel_widgets_config?view=Member",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","memId":0,"state":"mbr.mbrbase.membercentricview.mbrtabView","user_idn":2,"ctime":"2024-09-06T07:26:28.601Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"params":{"memId":0},"views":{"mbrTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-member-tab.html","controller":"MbrDashboardMemberTabController as mbrdshtabmbrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.mbrtabView"}}',
        "x-request-id": "2f8d6e92-c00c-49f0-9696-596ba9fff4fd",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=838721&I_ENCOUNTER_IDN=0&I_ENC_TYPE_CD=&view=Member",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","memId":0,"state":"mbr.mbrbase.membercentricview.mbrtabView","user_idn":2,"ctime":"2024-09-06T07:26:28.601Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"params":{"memId":0},"views":{"mbrTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-member-tab.html","controller":"MbrDashboardMemberTabController as mbrdshtabmbrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.mbrtabView"}}',
        "x-request-id": "9f954492-aa19-4dc6-80df-70278d8c1a62",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_utility_widget_data?enc_idn=0&enc_type=&mbr_idn=838721&view=Member",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","memId":0,"state":"mbr.mbrbase.membercentricview.mbrtabView","user_idn":2,"ctime":"2024-09-06T07:26:28.601Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"params":{"memId":0},"views":{"mbrTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-member-tab.html","controller":"MbrDashboardMemberTabController as mbrdshtabmbrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.mbrtabView"}}',
        "x-request-id": "6f5d5f0e-5b57-43a1-a72a-c928bcab9cf9",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(BASE_URL + "cms/ZeSecurity/isSessionInvalid", {
    headers: {
      host: HOST_NAME,
      accept: "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.5",
      "accept-encoding": "gzip, deflate, br, zstd",
      "x-usr-tz-offset": "25200",
      "x-usr-tz-timezone": "America/Phoenix",
      "x-auditlog":
        '{"mbr_idn":"838721","memId":0,"state":"mbr.mbrbase.membercentricview.mbrtabView","user_idn":2,"ctime":"2024-09-06T07:26:39.670Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"params":{"memId":0},"views":{"mbrTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-member-tab.html","controller":"MbrDashboardMemberTabController as mbrdshtabmbrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.mbrtabView"}}',
      "x-request-id": "06506c36-70b0-447a-8a7a-ab3b1a88ed3f",
      "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
      "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
      dnt: "1",
      "sec-gpc": "1",
      connection: "keep-alive",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
  });
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Episode/Controller/getEpisodeCountAndList?claimant_idn=838721",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":2,"ctime":"2024-09-06T07:26:45.652Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
        "x-request-id": "7b57492f-d1ab-4031-8cc9-8adbe569fdf4",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/checkEpisodeAccess?enctype=Appeal",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":2,"ctime":"2024-09-06T07:26:51.630Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
        "x-request-id": "be188c16-ba79-4268-84c9-2452ef554f5b",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/getMoreLinksForMember?enc_type=claimant",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":2,"ctime":"2024-09-06T07:26:59.049Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
        "x-request-id": "6d6a1437-3497-40a3-817f-54ba2ae74fdd",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/render-more-links.html?aGlkZW1hc2tpbmc=&v=1725438075",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":2,"ctime":"2024-09-06T07:26:59.065Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
        "x-request-id": "43533996-878a-4bb4-8383-51af51e45883",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=838721&I_ENCOUNTER_IDN=1159273&I_ENC_TYPE_CD=Appeal&view=Episode",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":2,"ctime":"2024-09-06T07:26:59.903Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
        "x-request-id": "6ebc9dd4-fca9-4f7f-9e33-c4d290627137",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Episode/Controller/getEncWidgetsConfig?encType=Appeal",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":2,"ctime":"2024-09-06T07:26:59.903Z","uri":"#/member/%3D%3D%3DODM4NzIx","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
        "x-request-id": "51db540c-2ec8-4901-978e-b3b4c17ac9e3",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Notification/Controller/get_episode_correspondence_data?current_page=1&em_data=1&enc_idn=0&enc_type=&mbr_idn=838721",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","state":"mbr.mbrbase.mbrcorrespondence.correspondenceView","user_idn":2,"ctime":"2024-09-06T07:27:11.034Z","uri":"#/member/correspondence_view/%3D%3D%3DODM4NzIx","stateInfo":{"url":"/member/correspondence_view/:mbr_idn","parent":"mbr.mbrbase.mbrcorrespondence","views":{"mbrcorrespondenceview":{"templateUrl":"++resource++ce/src/notification/partials/manage-correspondence-listing.html","controller":"ManageCorrespondenceController as manCorrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.mbrcorrespondence.correspondenceView","displayName":"Letters"},"name":"mbr.mbrbase.mbrcorrespondence.correspondenceView"}}',
        "x-request-id": "897233ae-5f37-4057-b60c-9e6efa771eb7",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Notification/Controller/get_notif_button_config_onload",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","state":"mbr.mbrbase.mbrcorrespondence.correspondenceView","user_idn":2,"ctime":"2024-09-06T07:27:11.034Z","uri":"#/member/correspondence_view/%3D%3D%3DODM4NzIx","stateInfo":{"url":"/member/correspondence_view/:mbr_idn","parent":"mbr.mbrbase.mbrcorrespondence","views":{"mbrcorrespondenceview":{"templateUrl":"++resource++ce/src/notification/partials/manage-correspondence-listing.html","controller":"ManageCorrespondenceController as manCorrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.mbrcorrespondence.correspondenceView","displayName":"Letters"},"name":"mbr.mbrbase.mbrcorrespondence.correspondenceView"}}',
        "x-request-id": "a931b90e-e431-48fe-9405-304177d059f2",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/get_udf_exist?other_params=%7B%22mbr_idn%22%3A%22838721%22%2C%22state%22%3A%22mbr.mbrbase.mbrcorrespondence.correspondenceView%22%2C%22ctime%22%3A%222024-09-06T07%3A27%3A11.035Z%22%2C%22uri%22%3A%22%23%2Fmember%2Fcorrespondence_view%2F%253D%253D%253DODM4NzIx%22%7D&state_id=mbr.mbrbase.mbrcorrespondence.correspondenceView&other_params=%7B%22mbr_idn%22%3A%22838721%22%2C%22state%22%3A%22mbr.mbrbase.mbrcorrespondence.correspondenceView%22%2C%22ctime%22%3A%222024-09-06T07%3A27%3A11.035Z%22%2C%22uri%22%3A%22%23%2Fmember%2Fcorrespondence_view%2F%253D%253D%253DODM4NzIx%22%7D",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","state":"mbr.mbrbase.mbrcorrespondence.correspondenceView","user_idn":2,"ctime":"2024-09-06T07:27:16.281Z","uri":"#/member/correspondence_view/%3D%3D%3DODM4NzIx","stateInfo":{"url":"/member/correspondence_view/:mbr_idn","parent":"mbr.mbrbase.mbrcorrespondence","views":{"mbrcorrespondenceview":{"templateUrl":"++resource++ce/src/notification/partials/manage-correspondence-listing.html","controller":"ManageCorrespondenceController as manCorrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.mbrcorrespondence.correspondenceView","displayName":"Letters"},"name":"mbr.mbrbase.mbrcorrespondence.correspondenceView"}}',
        "x-request-id": "490aa54d-d475-48c9-b91c-4d4b750686a2",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Notification/Controller/get_logged_correspondence_details?current_page=1&enc_notice_idn=301615&entity_idn=&header_type=adv_pop_up&job_type=PRINT",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","state":"notification/partials/manage-correspondence-log","user_idn":2,"ctime":"2024-09-06T07:27:28.923Z","uri":"#/member/correspondence_view/%3D%3D%3DODM4NzIx","stateInfo":{"url":"/member/correspondence_view/:mbr_idn","parent":"mbr.mbrbase.mbrcorrespondence","views":{"mbrcorrespondenceview":{"templateUrl":"++resource++ce/src/notification/partials/manage-correspondence-listing.html","controller":"ManageCorrespondenceController as manCorrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.mbrcorrespondence.correspondenceView","displayName":"Letters"},"name":"mbr.mbrbase.mbrcorrespondence.correspondenceView"}}',
        "x-request-id": "f8c14ad9-bd15-45cd-a5ae-cc1d6b9b7888",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(BASE_URL + "cms/ZeSecurity/isSessionInvalid", {
    headers: {
      host: HOST_NAME,
      accept: "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.5",
      "accept-encoding": "gzip, deflate, br, zstd",
      "x-usr-tz-offset": "25200",
      "x-usr-tz-timezone": "America/Phoenix",
      "x-auditlog":
        '{"mbr_idn":"838721","state":"mbr.mbrbase.mbrcorrespondence.correspondenceView","user_idn":2,"ctime":"2024-09-06T07:27:39.675Z","uri":"#/member/correspondence_view/%3D%3D%3DODM4NzIx","stateInfo":{"url":"/member/correspondence_view/:mbr_idn","parent":"mbr.mbrbase.mbrcorrespondence","views":{"mbrcorrespondenceview":{"templateUrl":"++resource++ce/src/notification/partials/manage-correspondence-listing.html","controller":"ManageCorrespondenceController as manCorrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.mbrcorrespondence.correspondenceView","displayName":"Letters"},"name":"mbr.mbrbase.mbrcorrespondence.correspondenceView"}}',
      "x-request-id": "bc788743-7fed-4d6c-83e9-8f06ceab06eb",
      "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
      "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
      dnt: "1",
      "sec-gpc": "1",
      connection: "keep-alive",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
  });
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++ngui/src/partials/fat-menu-template.html?aGlkZW1hc2tpbmc=&v=1725438075",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"mbr_idn":"838721","state":"mbr.mbrbase.mbrcorrespondence.correspondenceView","user_idn":2,"ctime":"2024-09-06T07:27:47.816Z","uri":"#/member/correspondence_view/%3D%3D%3DODM4NzIx","stateInfo":{"url":"/member/correspondence_view/:mbr_idn","parent":"mbr.mbrbase.mbrcorrespondence","views":{"mbrcorrespondenceview":{"templateUrl":"++resource++ce/src/notification/partials/manage-correspondence-listing.html","controller":"ManageCorrespondenceController as manCorrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.mbrcorrespondence.correspondenceView","displayName":"Letters"},"name":"mbr.mbrbase.mbrcorrespondence.correspondenceView"}}',
        "x-request-id": "628aeaf3-79d1-4594-9ee7-92a65b0f7ade",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(BASE_URL + "cms/ZeUI/views/ZeUI/enable_or_disable_add_member_link", {
    headers: {
      host: HOST_NAME,
      accept: "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.5",
      "accept-encoding": "gzip, deflate, br, zstd",
      "x-usr-tz-offset": "25200",
      "x-usr-tz-timezone": "America/Phoenix",
      "x-auditlog":
        '{"search_criteria":null,"value":null,"memId":0,"state":"mbr.membersearchintakeview","user_idn":2,"ctime":"2024-09-06T07:27:51.304Z","uri":"#/member_search/","stateInfo":{"url":"/member_search/:search_criteria/:value","params":{"memId":0,"search_criteria":{"value":null,"squash":true},"value":{"value":null,"squash":true}},"views":{"index@":{"templateUrl":"++resource++mbr/src/member/partials/member-search-template.html","controller":"memberSearchCtrl as mbrsrchctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"mbr.membersearchintakeview"}}',
      "x-request-id": "e8df2186-5ff8-4043-97e4-4262d8c2ba9f",
      "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
      "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
      dnt: "1",
      "sec-gpc": "1",
      connection: "keep-alive",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
  });
  sleep(1);

  http.get(
    BASE_URL + "cms/ZeUI/views/Patient/Controller/getDefaultFilterCheckingOpt",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"search_criteria":null,"value":null,"memId":0,"state":"mbr.membersearchintakeview","user_idn":2,"ctime":"2024-09-06T07:27:51.369Z","uri":"#/member_search/","stateInfo":{"url":"/member_search/:search_criteria/:value","params":{"memId":0,"search_criteria":{"value":null,"squash":true},"value":{"value":null,"squash":true}},"views":{"index@":{"templateUrl":"++resource++mbr/src/member/partials/member-search-template.html","controller":"memberSearchCtrl as mbrsrchctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"mbr.membersearchintakeview"}}',
        "x-request-id": "d74dd188-6633-407d-91be-ad173e3905e5",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/getConfigForMemberSearchDropDown?context=EpisodeIntake",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"search_criteria":null,"value":null,"memId":0,"state":"mbr.membersearchintakeview","user_idn":2,"ctime":"2024-09-06T07:27:51.369Z","uri":"#/member_search/","stateInfo":{"url":"/member_search/:search_criteria/:value","params":{"memId":0,"search_criteria":{"value":null,"squash":true},"value":{"value":null,"squash":true}},"views":{"index@":{"templateUrl":"++resource++mbr/src/member/partials/member-search-template.html","controller":"memberSearchCtrl as mbrsrchctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"mbr.membersearchintakeview"}}',
        "x-request-id": "d7cf4e86-efbd-43fc-b92a-11def7a9c807",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL + "cms/ZeUI/views/Patient/Controller/is_adv_mbr_search_default",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"search_criteria":null,"value":null,"memId":0,"state":"mbr.membersearchintakeview","user_idn":2,"ctime":"2024-09-06T07:27:51.369Z","uri":"#/member_search/","stateInfo":{"url":"/member_search/:search_criteria/:value","params":{"memId":0,"search_criteria":{"value":null,"squash":true},"value":{"value":null,"squash":true}},"views":{"index@":{"templateUrl":"++resource++mbr/src/member/partials/member-search-template.html","controller":"memberSearchCtrl as mbrsrchctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"mbr.membersearchintakeview"}}',
        "x-request-id": "8d909d7b-9899-46c6-b0d8-4c2e4f7d488e",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/ZeUser/Controller/get_sysuser_left_nav_links?tag_name=Manage_User",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"state":"sysuser.sysUserBase","user_idn":2,"ctime":"2024-09-06T07:27:59.893Z","uri":"#/sysuser/sysuserbase","stateInfo":{"url":"/sysuserbase","views":{"index@":{"templateUrl":"++resource++user/src/user/partials/sysuser-base.html","controller":"BaseUserController as baseUserCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"sysuser.sysUserBase"}}',
        "x-request-id": "8d905d5a-1f51-4315-b03a-7f20c31ab0d1",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL + "cms/ZeUI/views/ZeUser/Controller/get_add_user_required_details",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"state":"sysuser.sysUserBase.addUser","user_idn":2,"ctime":"2024-09-06T07:28:09.363Z","uri":"#/sysuser/sysuserbase/addsysuser","stateInfo":{"url":"/addsysuser","parent":"sysuser.sysUserBase","views":{"sysuserview@sysuser.sysUserBase":{"templateUrl":"++resource++user/src/user/partials/add-sysuser.html","controller":"AddUserController as addUserCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"sysuser.sysUserBase.addUser"}}',
        "x-request-id": "7cd8f131-d5d5-4a25-80e1-45b41b9e1e77",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(BASE_URL + "cms/ZeUI/views/ZeUser/Controller/get_department_list", {
    headers: {
      host: HOST_NAME,
      accept: "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.5",
      "accept-encoding": "gzip, deflate, br, zstd",
      "x-usr-tz-offset": "25200",
      "x-usr-tz-timezone": "America/Phoenix",
      "x-auditlog":
        '{"state":"sysuser.sysUserBase.addUser","user_idn":2,"ctime":"2024-09-06T07:28:09.363Z","uri":"#/sysuser/sysuserbase/addsysuser","stateInfo":{"url":"/addsysuser","parent":"sysuser.sysUserBase","views":{"sysuserview@sysuser.sysUserBase":{"templateUrl":"++resource++user/src/user/partials/add-sysuser.html","controller":"AddUserController as addUserCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"sysuser.sysUserBase.addUser"}}',
      "x-request-id": "df1dc54f-8fcf-437f-a325-cc59cf09f5d3",
      "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
      "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
      dnt: "1",
      "sec-gpc": "1",
      connection: "keep-alive",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
  });
  sleep(1);

  http.get(BASE_URL + "cms/ZeUI/views/ZeUser/Controller/getCountyDetails", {
    headers: {
      host: HOST_NAME,
      accept: "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.5",
      "accept-encoding": "gzip, deflate, br, zstd",
      "x-usr-tz-offset": "25200",
      "x-usr-tz-timezone": "America/Phoenix",
      "x-auditlog":
        '{"state":"sysuser.sysUserBase.addUser","user_idn":2,"ctime":"2024-09-06T07:28:09.363Z","uri":"#/sysuser/sysuserbase/addsysuser","stateInfo":{"url":"/addsysuser","parent":"sysuser.sysUserBase","views":{"sysuserview@sysuser.sysUserBase":{"templateUrl":"++resource++user/src/user/partials/add-sysuser.html","controller":"AddUserController as addUserCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"sysuser.sysUserBase.addUser"}}',
      "x-request-id": "c1e13ad8-9288-440c-91b5-fb5da4f3fa4d",
      "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
      "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
      dnt: "1",
      "sec-gpc": "1",
      connection: "keep-alive",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
  });
  sleep(1);

  http.get(
    BASE_URL + "cms/ZeUI/views/ZeUser/Controller/get_user_timezone_list",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"state":"sysuser.sysUserBase.addUser","user_idn":2,"ctime":"2024-09-06T07:28:09.363Z","uri":"#/sysuser/sysuserbase/addsysuser","stateInfo":{"url":"/addsysuser","parent":"sysuser.sysUserBase","views":{"sysuserview@sysuser.sysUserBase":{"templateUrl":"++resource++user/src/user/partials/add-sysuser.html","controller":"AddUserController as addUserCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"sysuser.sysUserBase.addUser"}}',
        "x-request-id": "0d6f5ddf-f0f0-48ea-b206-aa37d1f46907",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.post(
    BASE_URL + "cms/ZeUI/views/ZeUI/clientErrorLog",
    '{"exception":"data.roles_with_readonly.split is not a function (caused by \\"undefined\\")","stack":"addUserCtrl.addUserScreenDetailsBASE_URL + @cms/++resource++user/src/user/js/controllers/addUserController.js?1725438075:75:68\\n_getUserDetails/<BASE_URL + @cms/++resource++user/src/user/js/controllers/addUserController.js?1725438075:60:37\\nkd/f/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:112:182\\n$evalBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:126:250\\n$digestBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:123:365\\n$applyBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:127:12\\nlBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:81:327\\nwBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:85:450\\nAf/</I.onloadBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:86:463\\nEventHandlerNonNull*Af/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:86:299\\nmBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:83:22\\nPe/this.$get</k/f<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:80:249\\nkd/f/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:112:182\\n$evalBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:126:250\\n$digestBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:123:365\\n$applyBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:127:12\\nresolve/this.route.load</<BASE_URL + @cms/++resource++ngui/src/js/services/jivaRouteResolverService.js?1725438075:25:44\\nexecCbBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:29:311\\ncheckBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:18:385\\nga/enable/</<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:9\\nu/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:8:102\\nga/emit/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:370\\nvBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:7:173\\nemitBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:341\\ncheckBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:19:403\\nga/enable/</<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:9\\nu/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:8:102\\nga/emit/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:370\\nvBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:7:173\\nemitBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:341\\ncheckBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:19:403\\nenableBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:238\\ninitBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:17:68\\nEBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:14:185\\ncompleteLoadBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:28:126\\nonScriptLoadBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:29:436\\nEventListener.handleEvent*g.loadBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:34:4\\nrequirejs.loadBASE_URL + @cms/++resource++ngui/src/js/services/jivaServices.js?1725438075:1525:21\\nloadBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:29:264\\nloadBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:18:31\\nfetchBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:17:490\\ncheckBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:19:471\\nenableBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:238\\nenableBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:27:466\\nga/enable/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:110\\nu/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:8:102\\nvBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:7:173\\nenableBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:22:242\\ninitBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:17:68\\nEBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:14:185\\ncompleteLoadBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:28:126\\nonScriptLoadBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:29:436\\nEventListener.handleEvent*g.loadBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:34:4\\nrequirejs.loadBASE_URL + @cms/++resource++ngui/src/js/services/jivaServices.js?1725438075:1525:21\\nloadBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:29:264\\nloadBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:18:31\\nfetchBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:17:490\\ncheckBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:19:471\\nenableBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:238\\nenableBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:27:466\\nga/enable/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:23:110\\nu/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:8:102\\nvBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:7:173\\nenableBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:22:242\\ninitBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:17:68\\nga/makeRequire/j/<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:26:369\\nsetTimeout handler*g.nextTick<BASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:32:66\\njBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:26:308\\nrequirejsBASE_URL + @cms/ZeUI/views/++resource++ngui/src/js/vendor/require/require.min.js:31:470\\nresolve/this.route.load<BASE_URL + @cms/++resource++ngui/src/js/services/jivaRouteResolverService.js?1725438075:22:36\\neBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:36:315\\nproceedBASE_URL + @cms/++resource++ngui/src/js/vendor/ui-router/angular-ui-router-0.2.13.js?1725438075:474:42\\ninvokeBASE_URL + @cms/++resource++ngui/src/js/vendor/ui-router/angular-ui-router-0.2.13.js?1725438075:470:26\\n$Resolve/this.study/<BASE_URL + @cms/++resource++ngui/src/js/vendor/ui-router/angular-ui-router-0.2.13.js?1725438075:449:20\\n$Resolve/this.resolveBASE_URL + @cms/++resource++ngui/src/js/vendor/ui-router/angular-ui-router-0.2.13.js?1725438075:553:34\\n$StateProvider/$get/resolveState/<BASE_URL + @cms/++resource++ngui/src/js/vendor/ui-router/angular-ui-router-0.2.13.js?1725438075:3461:32\\nqBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:7:428\\nresolveStateBASE_URL + @cms/++resource++ngui/src/js/vendor/ui-router/angular-ui-router-0.2.13.js?1725438075:3455:14\\ntransitionToBASE_URL + @cms/++resource++ngui/src/js/vendor/ui-router/angular-ui-router-0.2.13.js?1725438075:3157:20\\ngoBASE_URL + @cms/++resource++ngui/src/js/vendor/ui-router/angular-ui-router-0.2.13.js?1725438075:3007:21\\nleftNavLinksActionBASE_URL + @cms/++resource++user/src/user/js/services/sysUserServices.js?1725438075:39:28\\nbaseUserCtrl.leftLinksActionBASE_URL + @cms/++resource++user/src/user/js/controllers/baseUserController.js?1725438075:31:33\\nfunctionCall/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:200:280\\nfBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:217:75\\n$evalBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:126:250\\n$applyBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:126:476\\nHc[c]</compile/</<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:217:126\\ndispatchBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:43064\\nadd/v.handleBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:41048\\nEventListener.handleEvent*addBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:41515\\nEe/<BASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:40109\\neachBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:3003\\neachBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:1481\\nEeBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:40085\\nonBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:46578\\nHc[c]</compile/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:217:40\\n","cause":"","location":"/sysuser/sysuserbase/addsysuser","client_timestamp":"2024-09-06T07:28:15.599Z","logging_level":40,"user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:130.0) Gecko/20100101 Firefox/130.0"}',
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "content-type": "application/json; charset=utf-8",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"state":"sysuser.sysUserBase.addUser","user_idn":2,"ctime":"2024-09-06T07:28:15.600Z","uri":"#/sysuser/sysuserbase/addsysuser","stateInfo":{"url":"/addsysuser","parent":"sysuser.sysUserBase","views":{"sysuserview@sysuser.sysUserBase":{"templateUrl":"++resource++user/src/user/partials/add-sysuser.html","controller":"AddUserController as addUserCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"sysuser.sysUserBase.addUser"}}',
        "x-request-id": "1971172e-b3d4-404c-b9a2-2aaa8dbcc774",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        origin: "http://localhost:1132",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.post(
    BASE_URL + "cms/ZeUI/views/ZeUI/clientErrorLog",
    '{"exception":"Could not resolve \'yes\' from state \'sysuser.sysUserBase.addUser\' (caused by \\"undefined\\")","stack":"transitionToBASE_URL + @cms/++resource++ngui/src/js/vendor/ui-router/angular-ui-router-0.2.13.js?1725438075:3074:17\\ngoBASE_URL + @cms/++resource++ngui/src/js/vendor/ui-router/angular-ui-router-0.2.13.js?1725438075:3007:21\\nmenuActionBASE_URL + @cms/++resource++ngui/src/js/services/cpJivaServices.js?1725438075:664:32\\nfatMenuCtrl.menuActionBASE_URL + @cms/++resource++ngui/src/js/controllers/fatMenuController.js?1725438075:12:29\\nfunctionCall/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:200:280\\nfBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:217:75\\n$evalBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:126:250\\n$applyBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:126:476\\nHc[c]</compile/</<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:217:126\\ndispatchBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:43064\\nadd/v.handleBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:41048\\nEventListener.handleEvent*addBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:41515\\nEe/<BASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:40109\\neachBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:3003\\neachBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:1481\\nEeBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:40085\\nonBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:46578\\nHc[c]</compile/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:217:40\\nXcBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:70:280\\nxBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:59:323\\ngBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:51:409\\nBc/this.$get</Q/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:51:17\\nBc/this.$get</$/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:52:395\\nlBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:56:399\\nse</compile/</<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:236:58\\nUe/this.$get</$watchCollection/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:123:20\\nTe/this.$get</l/e<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:108:405\\n$digestBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:124:114\\n$applyBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:127:12\\nHc[c]</compile/</<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:217:126\\ndispatchBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:43064\\nadd/v.handleBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:41048\\nEventListener.handleEvent*addBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:41515\\nEe/<BASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:40109\\neachBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:3003\\neachBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:1481\\nEeBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:40085\\nonBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:46578\\nHc[c]</compile/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:217:40\\nXcBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:70:280\\nxBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:59:323\\ngBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:51:409\\ngBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:51:426\\ngBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:51:426\\ngBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:51:426\\ngBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:51:426\\nxBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:59:267\\ngBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:51:409\\nxBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:59:267\\nBc/this.$get</Xb/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:66:289\\nkd/f/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:112:182\\n$evalBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:126:250\\n$digestBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:123:365\\n$applyBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:127:12\\nlBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:81:327\\nwBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:85:450\\nAf/</I.onloadBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:86:463\\nEventHandlerNonNull*Af/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:86:299\\nmBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:83:22\\nPe/this.$get</k/f<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:80:249\\nkd/f/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:112:182\\n$evalBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:126:250\\n","cause":"","location":"/sysuser/sysuserbase/addsysuser","client_timestamp":"2024-09-06T07:28:23.786Z","logging_level":40,"user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:130.0) Gecko/20100101 Firefox/130.0"}',
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "content-type": "application/json; charset=utf-8",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"state":"sysuser.sysUserBase.addUser","user_idn":2,"ctime":"2024-09-06T07:28:23.788Z","uri":"#/sysuser/sysuserbase/addsysuser","stateInfo":{"url":"/addsysuser","parent":"sysuser.sysUserBase","views":{"sysuserview@sysuser.sysUserBase":{"templateUrl":"++resource++user/src/user/partials/add-sysuser.html","controller":"AddUserController as addUserCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"sysuser.sysUserBase.addUser"}}',
        "x-request-id": "840db83a-973f-477f-9f55-ea5353dcbcc1",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        origin: "http://localhost:1132",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.post(
    BASE_URL + "cms/ZeUI/views/ZeUI/clientErrorLog",
    '{"exception":"Could not resolve \'yes\' from state \'sysuser.sysUserBase.addUser\' (caused by \\"undefined\\")","stack":"transitionToBASE_URL + @cms/++resource++ngui/src/js/vendor/ui-router/angular-ui-router-0.2.13.js?1725438075:3074:17\\ngoBASE_URL + @cms/++resource++ngui/src/js/vendor/ui-router/angular-ui-router-0.2.13.js?1725438075:3007:21\\nmenuActionBASE_URL + @cms/++resource++ngui/src/js/services/cpJivaServices.js?1725438075:664:32\\nfatMenuCtrl.menuActionBASE_URL + @cms/++resource++ngui/src/js/controllers/fatMenuController.js?1725438075:12:29\\nfunctionCall/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:200:280\\nfBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:217:75\\n$evalBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:126:250\\n$applyBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:126:476\\nHc[c]</compile/</<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:217:126\\ndispatchBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:43064\\nadd/v.handleBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:41048\\nEventListener.handleEvent*addBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:41515\\nEe/<BASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:40109\\neachBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:3003\\neachBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:1481\\nEeBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:40085\\nonBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:46578\\nHc[c]</compile/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:217:40\\nXcBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:70:280\\nxBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:59:323\\ngBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:51:409\\nBc/this.$get</Q/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:51:17\\nBc/this.$get</$/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:52:395\\nlBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:56:399\\nse</compile/</<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:236:58\\nUe/this.$get</$watchCollection/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:123:20\\nTe/this.$get</l/e<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:108:405\\n$digestBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:124:114\\n$applyBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:127:12\\nHc[c]</compile/</<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:217:126\\ndispatchBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:43064\\nadd/v.handleBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:41048\\nEventListener.handleEvent*addBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:41515\\nEe/<BASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:40109\\neachBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:3003\\neachBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:1481\\nEeBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:40085\\nonBASE_URL + @cms/++resource++ngui/src/js/vendor/jquery/jquery-3.6.0.min.js?1725438075:2:46578\\nHc[c]</compile/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:217:40\\nXcBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:70:280\\nxBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:59:323\\ngBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:51:409\\ngBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:51:426\\ngBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:51:426\\ngBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:51:426\\ngBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:51:426\\nxBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:59:267\\ngBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:51:409\\nxBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:59:267\\nBc/this.$get</Xb/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:66:289\\nkd/f/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:112:182\\n$evalBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:126:250\\n$digestBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:123:365\\n$applyBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:127:12\\nlBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:81:327\\nwBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:85:450\\nAf/</I.onloadBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:86:463\\nEventHandlerNonNull*Af/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:86:299\\nmBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:83:22\\nPe/this.$get</k/f<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:80:249\\nkd/f/<BASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:112:182\\n$evalBASE_URL + @cms/++resource++ngui/src/js/vendor/angular/angular-1.3.17.min.js?1725438075:126:250\\n","cause":"","location":"/sysuser/sysuserbase/addsysuser","client_timestamp":"2024-09-06T07:28:26.600Z","logging_level":40,"user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:130.0) Gecko/20100101 Firefox/130.0"}',
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "content-type": "application/json; charset=utf-8",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"state":"sysuser.sysUserBase.addUser","user_idn":2,"ctime":"2024-09-06T07:28:26.601Z","uri":"#/sysuser/sysuserbase/addsysuser","stateInfo":{"url":"/addsysuser","parent":"sysuser.sysUserBase","views":{"sysuserview@sysuser.sysUserBase":{"templateUrl":"++resource++user/src/user/partials/add-sysuser.html","controller":"AddUserController as addUserCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"sysuser.sysUserBase.addUser"}}',
        "x-request-id": "5069b280-90ca-4e8c-8038-de67b63c7110",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        origin: "http://localhost:1132",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(
    BASE_URL + "cms/ZeUI/views/ZeUI/getManageAdminContentsFromXML_new_new",
    {
      headers: {
        host: HOST_NAME,
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate, br, zstd",
        "x-usr-tz-offset": "25200",
        "x-usr-tz-timezone": "America/Phoenix",
        "x-auditlog":
          '{"state":"refcode.base","user_idn":2,"ctime":"2024-09-06T07:28:36.788Z","uri":"#/code_tables_config","stateInfo":{"url":"/code_tables_config","views":{"index@":{"templateUrl":"++resource++refcode/src/refcode/partials/code-table-base.html","controller":"RefcodeBaseController as refcodeBaseCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"refcode.base"}}',
        "x-request-id": "524cb69c-3763-4fd8-bc18-41f82b7b7d8b",
        "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
        "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
        dnt: "1",
        "sec-gpc": "1",
        connection: "keep-alive",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
    }
  );
  sleep(1);

  http.get(BASE_URL + "cms/ZeSecurity/isSessionInvalid", {
    headers: {
      host: HOST_NAME,
      accept: "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.5",
      "accept-encoding": "gzip, deflate, br, zstd",
      "x-usr-tz-offset": "25200",
      "x-usr-tz-timezone": "America/Phoenix",
      "x-auditlog":
        '{"state":"refcode.base","user_idn":2,"ctime":"2024-09-06T07:28:39.691Z","uri":"#/code_tables_config","stateInfo":{"url":"/code_tables_config","views":{"index@":{"templateUrl":"++resource++refcode/src/refcode/partials/code-table-base.html","controller":"RefcodeBaseController as refcodeBaseCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"refcode.base"}}',
      "x-request-id": "e43e03e4-39c6-4b19-8afe-5923bcf25767",
      "x-browser-tab-id": "f02504f3-d0eb-4d14-92dc-029f8873f07c",
      "x-xsrf-token": "ddd28e3a6f927ec64e255cbe93e354f2ccf775d8",
      dnt: "1",
      "sec-gpc": "1",
      connection: "keep-alive",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
  });
}
