// Creator: k6 Browser Recorder 0.6.2

import http from "k6/http";
import { sleep, group } from "k6";

const BASE_URL = "http://localhost:1234/";
const SESSION =
  "dqP4BuSoPNtnMfuOkrcmTq2FOsjhDcQuxbCF9FdzRXkg2LYYm5wzN-JjKm_aod1hPQi6MtXpdvtdpTYkyut5zIAFlUwBAAAAAAAASnG9DmZHQdmDr1a_Qj19lCiMCnNlc3Npb25faWSUjCQ5ZDIyMzY4OS1lMTZiLTQ0MmEtYjk0Ni1iODU2OGIwOGMyNDiUjAhfX2NzcmZfX5SMKDJkYjc2ZTFhYTBkNjNiYWExNGZhOWZmOWFiNzM0YzdhNGYwOWYyOGaUjAh1c2VyX2lkbpRLAowMcGF5b3JfYWNjZXNzlIwBQZSMCHRpbWV6b25llIwPQW1lcmljYS9DaGljYWdvlIwGb2Zmc2V0lIwGLTE5ODAwlIwCaWSUjAd6ZWFkbWlulIwJdXNlcl90eXBllIwESklWQZSMC3VzZXJfdHpfc3RylIwPQW1lcmljYS9DaGljYWdvlIwHdXNlcl90epSMBHB5dHqUjAJfcJSTlCiMD0FtZXJpY2EvQ2hpY2Fnb5RKvK3__0sAjANMTVSUdJRSlHWHlC4";

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
    BASE_URL + "cms/ZeUI/views/ZeUI/getConfigData?usrTz=America/Los_Angeles",
    {
      headers: {
        accept: "application/json, text/plain, */*",
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++um/src/um/partials/service-request.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"state":"","user_idn":26127,"ctime":"2024-04-01T14:15:05.570Z","uri":"","stateInfo":{"name":"","url":"^","views":null,"abstract":true}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++um/src/um/partials/stay-request.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"state":"","user_idn":26127,"ctime":"2024-04-01T14:15:05.570Z","uri":"","stateInfo":{"name":"","url":"^","views":null,"abstract":true}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++prv/src/provider/partials/attach-provider-listing.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"state":"","user_idn":26127,"ctime":"2024-04-01T14:15:05.570Z","uri":"","stateInfo":{"name":"","url":"^","views":null,"abstract":true}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++appeal/src/appeal/partials/episode-details-non-edit.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"state":"","user_idn":26127,"ctime":"2024-04-01T14:15:05.570Z","uri":"","stateInfo":{"name":"","url":"^","views":null,"abstract":true}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++appeal/src/appeal/partials/episode-add-step-two.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"state":"","user_idn":26127,"ctime":"2024-04-01T14:15:05.570Z","uri":"","stateInfo":{"name":"","url":"^","views":null,"abstract":true}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++appeal/src/appeal/partials/appeal-stay-request.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"state":"","user_idn":26127,"ctime":"2024-04-01T14:15:05.570Z","uri":"","stateInfo":{"name":"","url":"^","views":null,"abstract":true}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++appeal/src/appeal/partials/appeal-service-request.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"state":"","user_idn":26127,"ctime":"2024-04-01T14:15:05.571Z","uri":"","stateInfo":{"name":"","url":"^","views":null,"abstract":true}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++ngui/src/partials/header.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"state":"","user_idn":26127,"ctime":"2024-04-01T14:15:05.571Z","uri":"","stateInfo":{"name":"","url":"^","views":null,"abstract":true}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++dashboard/src/ngdashboard/partials/dashboard.html?v=1710943691",
    {
      headers: {
        accept: "text/html",
        "x-auditlog":
          '{"state":"","user_idn":26127,"ctime":"2024-04-01T14:15:05.638Z","uri":"","stateInfo":{"name":"","url":"^","views":null,"abstract":true}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL + "cms/ZeUI/views/Message/Controller/get_dashboard_msg_count",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"state":"","user_idn":26127,"ctime":"2024-04-01T14:15:05.918Z","uri":"","stateInfo":{"name":"","url":"^","views":null,"abstract":true}}',
      },
    }
  );
  sleep(0.5);

  http.get(BASE_URL + "cms/ZeUI/getCustomerLogoDetails?logo_type=NP_MENU_JIVA");
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++dashboard/src/ngdashboard/partials/user-breadcrumbs.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":26127,"ctime":"2024-04-01T14:15:08.077Z","uri":"#/dashboard","stateInfo":{"url":"/dashboard","views":{"index":{"templateUrl":"++resource++dashboard/src/ngdashboard/partials/dashboard.html","controller":"dashboardController as dashCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}},"data":{"displayName":"Dashboard"}},"data":{"displayName":"My Dashboard"},"name":"dashboardView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL + "cms/ZeUI/views/Dashboard/Controller/get_widget_controller_map",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":26127,"ctime":"2024-04-01T14:15:08.077Z","uri":"#/dashboard","stateInfo":{"url":"/dashboard","views":{"index":{"templateUrl":"++resource++dashboard/src/ngdashboard/partials/dashboard.html","controller":"dashboardController as dashCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}},"data":{"displayName":"Dashboard"}},"data":{"displayName":"My Dashboard"},"name":"dashboardView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++workflow/src/worklist/partials/search-worklist-trans.html?v=1710943691",
    {
      headers: {
        accept: "text/html",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":26127,"ctime":"2024-04-01T14:15:22.175Z","uri":"#/dashboard","stateInfo":{"url":"/dashboard","views":{"index":{"templateUrl":"++resource++dashboard/src/ngdashboard/partials/dashboard.html","controller":"dashboardController as dashCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}},"data":{"displayName":"Dashboard"}},"data":{"displayName":"My Dashboard"},"name":"dashboardView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL + "cms/ZeUI/views/WorkList/Controller/get_config_for_sort_by",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:15:22.359Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL + "cms/ZeUI/views/WorkList/Controller/get_worklist_search_fields",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:15:22.359Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/WorkList/Controller/get_logged_in_user_worklists?USER_IDN=0",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:15:28.548Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
      },
    }
  );
  sleep(0.5);

  http.get(BASE_URL + "cms/ZeSecurity/isSessionInvalid", {
    headers: {
      accept: "application/json, text/plain, */*",
      "x-auditlog":
        '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:16:05.537Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
    },
  });
  sleep(0.5);

  // http.get(
  //   BASE_URL +
  //     "cms/ZeUI/views/WorkList/Controller/get_episode_data_by_worklist?default_worklist_idn=12123&enc_idns_list=944706&fetch_episode_req_type=0&fields_list=ENC_IDN&fields_list=EPISODEWIDGET&fields_list=PATIENTWIDGET&fields_list=MEMBERIDWIDGET&fields_list=AGEWIDGET&fields_list=DIAG_CD&fields_list=PROGRAM&fields_list=PROGRAM_START_DT&fields_list=START_DT&fields_list=ACUITY_LEVEL&fields_list=SEVERITY&fields_list=RISK_SCORE&fields_list=TPA&fields_list=GROUP_NAME&fields_list=FOLLOWUP_DT&fields_list=EXT_ENC_ID&logged_in_user_idn=26127&mbr_idns_list=1031663&post_data=%7B%22sort_by%22%3Atrue%2C%22order_by%22%3A%22mbr_last_name%22%2C%22send_fields%22%3Afalse%2C%22worklist_idn%22%3A0%2C%22sys_user_type%22%3A%22%22%2C%22page_num%22%3A1%2C%22sel_enc_type%22%3A%22DM%22%2C%22USER_IDN%22%3A0%2C%22enc_selected_flag%22%3Atrue%2C%22currDate%22%3A%2204%2F01%2F2024%22%2C%22sortAndFilter%22%3A%5B%5D%2C%22total_episodes_count%22%3A0%7D&program_worklist_flag=0&worklist_idn=12123&fields_list=EPISODEWIDGET&fields_list=PATIENTWIDGET&fields_list=MEMBERIDWIDGET&fields_list=AGEWIDGET&fields_list=DIAG_CD&fields_list=PROGRAM&fields_list=PROGRAM_START_DT&fields_list=START_DT&fields_list=ACUITY_LEVEL&fields_list=SEVERITY&fields_list=RISK_SCORE&fields_list=TPA&fields_list=GROUP_NAME&fields_list=FOLLOWUP_DT&fields_list=EXT_ENC_ID",
  //   {
  //     headers: {
  //       accept: "application/json, text/plain, */*",
  //       "x-auditlog":
  //         '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:16:32.112Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
  //     },
  //   }
  // );
  // sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_member_keyword_icons?mbr_list=1031663",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:16:39.586Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_member_name?mbr_idn=1031663",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:16:46.022Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL + "cms/ZeUI/views/Patient/Controller/getAllReadOnlyMembers",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:16:50.674Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/mbr-base.html?v=1710943691",
    {
      headers: {
        accept: "text/html",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:16:50.674Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/mbr-dashboard.html?v=1710943691",
    {
      headers: {
        accept: "text/html",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:16:50.674Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/member-demographics-template.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","state":"mbr.mbrbase.membercentricview","user_idn":26127,"ctime":"2024-04-01T14:16:52.139Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"url":"/member/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard.html","controller":"MemberDashboardController as mbrdshctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"patient Overview"},"name":"mbr.mbrbase.membercentricview"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++maappeal/src/maappeal/partials/appeal-episode-banner-details.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","state":"mbr.mbrbase.membercentricview","user_idn":26127,"ctime":"2024-04-01T14:16:52.139Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"url":"/member/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard.html","controller":"MemberDashboardController as mbrdshctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"patient Overview"},"name":"mbr.mbrbase.membercentricview"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/check_member_info_edit_allowed?mbr_idn=1031663",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","state":"mbr.mbrbase.membercentricview","user_idn":26127,"ctime":"2024-04-01T14:16:52.139Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"url":"/member/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard.html","controller":"MemberDashboardController as mbrdshctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"patient Overview"},"name":"mbr.mbrbase.membercentricview"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/widgets/date-range-selector.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","state":"mbr.mbrbase.membercentricview","user_idn":26127,"ctime":"2024-04-01T14:16:52.139Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"url":"/member/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard.html","controller":"MemberDashboardController as mbrdshctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"patient Overview"},"name":"mbr.mbrbase.membercentricview"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/widgets/timeline.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","state":"mbr.mbrbase.membercentricview","user_idn":26127,"ctime":"2024-04-01T14:16:52.139Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"url":"/member/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard.html","controller":"MemberDashboardController as mbrdshctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"patient Overview"},"name":"mbr.mbrbase.membercentricview"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL + "cms/ZeUI/views/Patient/Controller/get_xml_for_vendor_programs",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","state":"mbr.mbrbase.membercentricview","user_idn":26127,"ctime":"2024-04-01T14:16:52.139Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"url":"/member/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard.html","controller":"MemberDashboardController as mbrdshctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"patient Overview"},"name":"mbr.mbrbase.membercentricview"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL + "cms/ZeUI/views/Patient/Controller/get_centric_view_tab_config",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","state":"mbr.mbrbase.membercentricview","user_idn":26127,"ctime":"2024-04-01T14:16:52.139Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"url":"/member/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard.html","controller":"MemberDashboardController as mbrdshctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"patient Overview"},"name":"mbr.mbrbase.membercentricview"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Episode/Controller/menuEpisodesList?I_CLAIMANT_IDN=1031663",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","state":"mbr.mbrbase.membercentricview","user_idn":26127,"ctime":"2024-04-01T14:16:52.139Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"url":"/member/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard.html","controller":"MemberDashboardController as mbrdshctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"patient Overview"},"name":"mbr.mbrbase.membercentricview"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/breadcrumbs.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","state":"mbr.mbrbase.membercentricview","user_idn":26127,"ctime":"2024-04-01T14:16:52.139Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"url":"/member/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard.html","controller":"MemberDashboardController as mbrdshctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"patient Overview"},"name":"mbr.mbrbase.membercentricview"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/getConfigForMemberDemographics",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","state":"mbr.mbrbase.membercentricview","user_idn":26127,"ctime":"2024-04-01T14:16:52.338Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"url":"/member/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard.html","controller":"MemberDashboardController as mbrdshctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"patient Overview"},"name":"mbr.mbrbase.membercentricview"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html?v=1710943691",
    {
      headers: {
        accept: "text/html",
        "x-auditlog":
          '{"mbr_idn":"1031663","state":"mbr.mbrbase.membercentricview","user_idn":26127,"ctime":"2024-04-01T14:16:55.793Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"url":"/member/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard.html","controller":"MemberDashboardController as mbrdshctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"patient Overview"},"name":"mbr.mbrbase.membercentricview"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++enc/src/episode/partials/episode-data-for-mcv.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:16:59.064Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:16:59.064Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL + "cms/ZeUI/views/Episode/Controller/get_deactivate_enc_btn_roles",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:16:59.135Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL + "cms/ZeUI/views/Patient/Controller/getWidgetsConfig?view=Member",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:02.474Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Episode/Controller/getEpisodeCountAndList?claimant_idn=1031663",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:02.777Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(BASE_URL + "cms/ZeSecurity/isSessionInvalid", {
    headers: {
      accept: "application/json, text/plain, */*",
      "x-auditlog":
        '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.549Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
    },
  });
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/widgets/udf-widget.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.794Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/widgets/lab-data-extended.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.794Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++procedure/src/procedure/partials/widgets/proceduresWidget.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.794Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++activity/src/activity/partials/widgets/treatment-plan.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.794Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++notes/src/notes/partials/notes.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.794Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/widgets/gaps-in-care.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.794Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++medications/src/medications/partials/consolidated-medication-widget-list.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.794Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++careintel/src/careintel/partials/explainable-ai-widget.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.794Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++ce/src/notification/partials/widgets/show-notification-list.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.794Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/widgets/medication-allergies.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.794Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/widgets/other-allergies.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.795Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++keyword/src/keyword/partials/keyword-widget.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.795Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++activity/src/activity/partials/widgets/activity-widget-list.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.795Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/widgets/coverage-info.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.795Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++edumaterial/src/edumaterial/partials/widgets/edu-material-list.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.795Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++docmgr/src/docmgr/partials/widgets/doc-widget-list.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.795Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++alerts/src/alerts/partials/widgets/alerts-widget-list.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.795Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/widgets/vital-signs-data.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.796Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/widgets/functional-cognitive-status.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.796Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/widgets/advance-directives.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.796Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/widgets/vital-signs-extended.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.796Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/widgets/immunization.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.796Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++diag/src/diagnosis/partials/widgets/problems.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.796Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member&widget_name=CareQualityGapsData",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.857Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member&widget_name=HccCodesData",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.858Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member&widget_name=Udf",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.950Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member&widget_name=LabDataExtended",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:05.950Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member&widget_name=Procedures",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:06.052Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member&widget_name=TreatmentPlan",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:06.173Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL + "cms/ZeUI/views/Patient/Controller/get_mbr_risks_source_config",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:06.415Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++enc/src/episode/partials/episode-widget-template.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:11.829Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++enc/src/episode/partials/non-um-episode-widget.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:18.963Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++enc/src/episode/partials/appeal-episode-widget.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:18.963Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++enc/src/episode/partials/um-episode-widget.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:18.963Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html?v=1710943691",
    {
      headers: {
        accept: "text/html",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:17:24.758Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Episode/Controller/getEpisodeCountAndList?claimant_idn=1031663",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":26127,"ctime":"2024-04-01T14:17:24.950Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/checkEpisodeAccess?enctype=DM",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":26127,"ctime":"2024-04-01T14:17:30.013Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=945687&I_ENC_TYPE_CD=DM&view=Episode",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":26127,"ctime":"2024-04-01T14:17:34.113Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Episode/Controller/getEncWidgetsConfig?encType=DM",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":26127,"ctime":"2024-04-01T14:17:34.114Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++poc/src/poc/partials/widgets/problem-listing.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":26127,"ctime":"2024-04-01T14:17:38.496Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++diag/src/diagnosis/partials/widgets/episode-programlist.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":26127,"ctime":"2024-04-01T14:17:38.496Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++diag/src/diagnosis/partials/widgets/episode-diaglist.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":26127,"ctime":"2024-04-01T14:17:38.497Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=945687&I_ENC_TYPE_CD=DM&view=Episode&widget_name=ActivityList",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":26127,"ctime":"2024-04-01T14:17:38.553Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","enc_idn":"945687","enc_type":"DM","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=945687&I_ENC_TYPE_CD=DM&view=Episode&widget_name=EduMaterialData",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":26127,"ctime":"2024-04-01T14:17:38.553Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","enc_idn":"945687","enc_type":"DM","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=945687&I_ENC_TYPE_CD=DM&view=Episode&widget_name=Notes",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":26127,"ctime":"2024-04-01T14:17:38.553Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","enc_idn":"945687","enc_type":"DM","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=945687&I_ENC_TYPE_CD=DM&view=Episode&widget_name=ConsolidatedMedicationsList",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":26127,"ctime":"2024-04-01T14:17:38.553Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","enc_idn":"945687","enc_type":"DM","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=945687&I_ENC_TYPE_CD=DM&view=Episode&widget_name=EpisodeDiagnosisList",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":26127,"ctime":"2024-04-01T14:17:38.726Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","enc_idn":"945687","enc_type":"DM","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=945687&I_ENC_TYPE_CD=DM&view=Episode&widget_name=ProblemList",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":26127,"ctime":"2024-04-01T14:17:38.791Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","enc_idn":"945687","enc_type":"DM","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=945687&I_ENC_TYPE_CD=DM&view=Episode&widget_name=EpisodeProgramList",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":26127,"ctime":"2024-04-01T14:17:38.834Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","enc_idn":"945687","enc_type":"DM","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++enc/src/episode/partials/base-episode-grid.html?v=1710943691",
    {
      headers: {
        accept: "text/html",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.enctabView","user_idn":26127,"ctime":"2024-04-01T14:17:54.586Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","enc_idn":"945687","enc_type":"DM","stateInfo":{"params":{"memId":0},"views":{"encTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-episode-tab.html","controller":"MbrDashboardEpisodeTabController as mbrdshtabencCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.enctabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++enc/src/episode/partials/episode-grid.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","state":"mbr.mbrbase.createepisodegrid","user_idn":26127,"ctime":"2024-04-01T14:17:54.847Z","uri":"#/episode/episode_grid/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"url":"/episode/episode_grid/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++enc/src/episode/partials/base-episode-grid.html","controller":"episodeGridController as encGridCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"Episodes"},"name":"mbr.mbrbase.createepisodegrid"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Episode/Controller/getEncGridDetails?I_CLAIMANT_IDN=1031663&currentPage=1&episodeActiveStatus=Y&episodeGridViewType=grouped_view&orderBy=true&orderByField=orderby_date",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","state":"mbr.mbrbase.createepisodegrid","user_idn":26127,"ctime":"2024-04-01T14:17:54.848Z","uri":"#/episode/episode_grid/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"url":"/episode/episode_grid/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++enc/src/episode/partials/base-episode-grid.html","controller":"episodeGridController as encGridCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"Episodes"},"name":"mbr.mbrbase.createepisodegrid"}}',
      },
    }
  );
  sleep(0.5);

  http.get(BASE_URL + "cms/ZeSecurity/isSessionInvalid", {
    headers: {
      accept: "application/json, text/plain, */*",
      "x-auditlog":
        '{"mbr_idn":"1031663","state":"mbr.mbrbase.createepisodegrid","user_idn":26127,"ctime":"2024-04-01T14:18:05.541Z","uri":"#/episode/episode_grid/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"url":"/episode/episode_grid/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++enc/src/episode/partials/base-episode-grid.html","controller":"episodeGridController as encGridCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"Episodes"},"name":"mbr.mbrbase.createepisodegrid"}}',
    },
  });
  sleep(0.5);

  http.get(
    BASE_URL + "cms/ZeUI/views/Patient/Controller/get_xml_for_vendor_programs",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","state":"mbr.mbrbase.membercentricview","user_idn":26127,"ctime":"2024-04-01T14:18:13.888Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"url":"/member/:mbr_idn","views":{"mbrview":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard.html","controller":"MemberDashboardController as mbrdshctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":"patient Overview"},"name":"mbr.mbrbase.membercentricview"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:18:13.934Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member&widget_name=CareQualityGapsData",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:18:17.635Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member&widget_name=HccCodesData",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:18:17.635Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member&widget_name=Udf",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:18:17.635Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member&widget_name=LabDataExtended",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:18:17.635Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member&widget_name=Procedures",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:18:17.635Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member&widget_name=TreatmentPlan",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:18:17.635Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Episode/Controller/getEpisodeCountAndList?claimant_idn=1031663",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:18:17.699Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/mbr-dashboard-member-tab.html?v=1710943691",
    {
      headers: {
        accept: "text/html",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.alltabView","user_idn":26127,"ctime":"2024-04-01T14:18:28.861Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"allTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html","controller":"MbrDashboardAllTabController as mbrdshtaballCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.alltabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_left_panel_widgets_config?view=Member",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.mbrtabView","user_idn":26127,"ctime":"2024-04-01T14:18:28.994Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"mbrTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-member-tab.html","controller":"MbrDashboardMemberTabController as mbrdshtabmbrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.mbrtabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=0&I_ENC_TYPE_CD=&view=Member",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.mbrtabView","user_idn":26127,"ctime":"2024-04-01T14:18:28.994Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"mbrTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-member-tab.html","controller":"MbrDashboardMemberTabController as mbrdshtabmbrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.mbrtabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/widgets/widgets-list.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.mbrtabView","user_idn":26127,"ctime":"2024-04-01T14:18:32.615Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"mbrTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-member-tab.html","controller":"MbrDashboardMemberTabController as mbrdshtabmbrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.mbrtabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/widgets/patient-care-team.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.mbrtabView","user_idn":26127,"ctime":"2024-04-01T14:18:32.615Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"mbrTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-member-tab.html","controller":"MbrDashboardMemberTabController as mbrdshtabmbrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.mbrtabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=0&I_ENC_TYPE_CD=&view=Member&widget_name=CareQualityGapsData",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.mbrtabView","user_idn":26127,"ctime":"2024-04-01T14:18:32.654Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"mbrTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-member-tab.html","controller":"MbrDashboardMemberTabController as mbrdshtabmbrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.mbrtabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=0&I_ENC_TYPE_CD=&view=Member&widget_name=HccCodesData",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.mbrtabView","user_idn":26127,"ctime":"2024-04-01T14:18:32.654Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"mbrTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-member-tab.html","controller":"MbrDashboardMemberTabController as mbrdshtabmbrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.mbrtabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=0&I_ENC_TYPE_CD=&view=Member&widget_name=Udf",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.mbrtabView","user_idn":26127,"ctime":"2024-04-01T14:18:32.654Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"mbrTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-member-tab.html","controller":"MbrDashboardMemberTabController as mbrdshtabmbrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.mbrtabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=0&I_ENC_TYPE_CD=&view=Member&widget_name=LabDataExtended",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.mbrtabView","user_idn":26127,"ctime":"2024-04-01T14:18:32.654Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"mbrTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-member-tab.html","controller":"MbrDashboardMemberTabController as mbrdshtabmbrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.mbrtabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=0&I_ENC_TYPE_CD=&view=Member&widget_name=Procedures",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.mbrtabView","user_idn":26127,"ctime":"2024-04-01T14:18:32.654Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"mbrTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-member-tab.html","controller":"MbrDashboardMemberTabController as mbrdshtabmbrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.mbrtabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1031663&I_ENCOUNTER_IDN=0&I_ENC_TYPE_CD=&view=Member&widget_name=TreatmentPlan",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.mbrtabView","user_idn":26127,"ctime":"2024-04-01T14:18:32.654Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"mbrTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-member-tab.html","controller":"MbrDashboardMemberTabController as mbrdshtabmbrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.mbrtabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_patient_care_team_details?mbr_idn=1031663",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.mbrtabView","user_idn":26127,"ctime":"2024-04-01T14:18:32.916Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"mbrTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-member-tab.html","controller":"MbrDashboardMemberTabController as mbrdshtabmbrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.mbrtabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++ngui/src/partials/fat-menu-template.html?aGlkZW1hc2tpbmc=&v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.mbrtabView","user_idn":26127,"ctime":"2024-04-01T14:18:41.669Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"mbrTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-member-tab.html","controller":"MbrDashboardMemberTabController as mbrdshtabmbrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.mbrtabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++user/src/user/partials/sysuser-base.html?v=1710943691",
    {
      headers: {
        accept: "text/html",
        "x-auditlog":
          '{"mbr_idn":"1031663","memId":0,"state":"mbr.mbrbase.membercentricview.mbrtabView","user_idn":26127,"ctime":"2024-04-01T14:18:48.250Z","uri":"#/member/%3D%3D%3DMTAzMTY2Mw%3D%3D","stateInfo":{"params":{"memId":0},"views":{"mbrTabContent":{"templateUrl":"++resource++mbr/src/member/partials/mbr-dashboard-member-tab.html","controller":"MbrDashboardMemberTabController as mbrdshtabmbrCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.membercentricview","displayName":false},"name":"mbr.mbrbase.membercentricview.mbrtabView"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/ZeUser/Controller/get_sysuser_left_nav_links?tag_name=Manage_User",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"state":"sysuser.sysUserBase","user_idn":26127,"ctime":"2024-04-01T14:18:48.461Z","uri":"#/sysuser/sysuserbase","stateInfo":{"url":"/sysuserbase","views":{"index@":{"templateUrl":"++resource++user/src/user/partials/sysuser-base.html","controller":"BaseUserController as baseUserCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"sysuser.sysUserBase"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++user/src/user/partials/search-sysuser.html?v=1710943691",
    {
      headers: {
        accept: "text/html",
        "x-auditlog":
          '{"state":"sysuser.sysUserBase","user_idn":26127,"ctime":"2024-04-01T14:18:53.862Z","uri":"#/sysuser/sysuserbase","stateInfo":{"url":"/sysuserbase","views":{"index@":{"templateUrl":"++resource++user/src/user/partials/sysuser-base.html","controller":"BaseUserController as baseUserCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"sysuser.sysUserBase"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++refcode/src/refcode/partials/code-table-base.html?v=1710943691",
    {
      headers: {
        accept: "text/html",
        "x-auditlog":
          '{"state":"sysuser.sysUserBase.searchUser","user_idn":26127,"ctime":"2024-04-01T14:18:56.762Z","uri":"#/sysuser/sysuserbase/searchsysuser","stateInfo":{"url":"/searchsysuser","parent":"sysuser.sysUserBase","views":{"sysuserview@sysuser.sysUserBase":{"templateUrl":"++resource++user/src/user/partials/search-sysuser.html","controller":"SearchUserController as searchuserctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"sysuser.sysUserBase.searchUser"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL + "cms/ZeUI/views/ZeUI/getManageAdminContentsFromXML_new_new",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"state":"refcode.base","user_idn":26127,"ctime":"2024-04-01T14:18:56.850Z","uri":"#/code_tables_config","stateInfo":{"url":"/code_tables_config","views":{"index@":{"templateUrl":"++resource++refcode/src/refcode/partials/code-table-base.html","controller":"RefcodeBaseController as refcodeBaseCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"refcode.base"}}',
      },
    }
  );
  sleep(0.5);

  http.get(BASE_URL + "cms/ZeSecurity/isSessionInvalid", {
    headers: {
      accept: "application/json, text/plain, */*",
      "x-auditlog":
        '{"state":"refcode.base","user_idn":26127,"ctime":"2024-04-01T14:19:05.538Z","uri":"#/code_tables_config","stateInfo":{"url":"/code_tables_config","views":{"index@":{"templateUrl":"++resource++refcode/src/refcode/partials/code-table-base.html","controller":"RefcodeBaseController as refcodeBaseCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"refcode.base"}}',
    },
  });
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++ce/src/notification/partials/upload-image-listing.html?v=1710943691",
    {
      headers: {
        accept: "text/html",
        "x-auditlog":
          '{"state":"refcode.base","user_idn":26127,"ctime":"2024-04-01T14:19:19.464Z","uri":"#/code_tables_config","stateInfo":{"url":"/code_tables_config","views":{"index@":{"templateUrl":"++resource++refcode/src/refcode/partials/code-table-base.html","controller":"RefcodeBaseController as refcodeBaseCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"refcode.base"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL + "cms/ZeUI/views/Notification/Controller/get_image_types",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"state":"refcode.base.uploadImageSearch","user_idn":26127,"ctime":"2024-04-01T14:19:19.666Z","uri":"#/code_tables_config/image_search","stateInfo":{"url":"/image_search","parent":"refcode.base","views":{"rightContent":{"templateUrl":"++resource++ce/src/notification/partials/upload-image-listing.html","controller":"uploadImageController as uploadImgCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"refcode.base.uploadImageSearch"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++ce/src/notification/partials/template-master-search.html?v=1710943691",
    {
      headers: {
        accept: "text/html",
        "x-auditlog":
          '{"state":"refcode.base.uploadImageSearch","user_idn":26127,"ctime":"2024-04-01T14:19:24.650Z","uri":"#/code_tables_config/image_search","stateInfo":{"url":"/image_search","parent":"refcode.base","views":{"rightContent":{"templateUrl":"++resource++ce/src/notification/partials/upload-image-listing.html","controller":"uploadImageController as uploadImgCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"refcode.base.uploadImageSearch"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Notification/Controller/get_template_master_search",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"memId":0,"state":"refcode.base.searchMasterTemplate","user_idn":26127,"ctime":"2024-04-01T14:19:24.853Z","uri":"#/code_tables_config/master_template_search","stateInfo":{"url":"/master_template_search","params":{"memId":0},"views":{"rightContent":{"templateUrl":"++resource++ce/src/notification/partials/template-master-search.html","controller":"TmpltMasterSearchController as tmpltMasterSearchCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"refcode.base.searchMasterTemplate"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Notification/Controller/get_tmplt_master_search_form_data?act_status=Y&cur_page=1",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"memId":0,"state":"refcode.base.searchMasterTemplate","user_idn":26127,"ctime":"2024-04-01T14:19:29.477Z","uri":"#/code_tables_config/master_template_search","stateInfo":{"url":"/master_template_search","params":{"memId":0},"views":{"rightContent":{"templateUrl":"++resource++ce/src/notification/partials/template-master-search.html","controller":"TmpltMasterSearchController as tmpltMasterSearchCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"refcode.base.searchMasterTemplate"}}',
      },
    }
  );
  sleep(0.5);

  http.get(BASE_URL + "cms/ZeSecurity/isSessionInvalid", {
    headers: {
      accept: "application/json, text/plain, */*",
      "x-auditlog":
        '{"memId":0,"state":"refcode.base.searchMasterTemplate","user_idn":26127,"ctime":"2024-04-01T14:20:05.602Z","uri":"#/code_tables_config/master_template_search","stateInfo":{"url":"/master_template_search","params":{"memId":0},"views":{"rightContent":{"templateUrl":"++resource++ce/src/notification/partials/template-master-search.html","controller":"TmpltMasterSearchController as tmpltMasterSearchCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"refcode.base.searchMasterTemplate"}}',
    },
  });
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++mbr/src/member/partials/temporary-member-listing.html?v=1710943691",
    {
      headers: {
        accept: "text/html",
        "x-auditlog":
          '{"memId":0,"state":"refcode.base.searchMasterTemplate","user_idn":26127,"ctime":"2024-04-01T14:20:19.832Z","uri":"#/code_tables_config/master_template_search","stateInfo":{"url":"/master_template_search","params":{"memId":0},"views":{"rightContent":{"templateUrl":"++resource++ce/src/notification/partials/template-master-search.html","controller":"TmpltMasterSearchController as tmpltMasterSearchCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"refcode.base.searchMasterTemplate"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_temporary_members?currentPage=1",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"state":"mbr.listTemporaryMembers","user_idn":26127,"ctime":"2024-04-01T14:20:19.951Z","uri":"#/temporary_members","stateInfo":{"url":"/temporary_members","views":{"index@":{"templateUrl":"++resource++mbr/src/member/partials/temporary-member-listing.html","controller":"temporaryMembersListingController as tmpmbrctrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"mbr.listTemporaryMembers"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL + "cms/ZeUI/views/WorkList/Controller/get_config_for_sort_by",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:20:28.403Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
      },
    }
  );
  sleep(0.5);

  http.get(BASE_URL + "cms/ZeSecurity/isSessionInvalid", {
    headers: {
      accept: "application/json, text/plain, */*",
      "x-auditlog":
        '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:21:05.545Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
    },
  });
  sleep(0.5);

  // http.get(
  //   BASE_URL +
  //     "cms/ZeUI/views/WorkList/Controller/get_episode_data_by_worklist?default_worklist_idn=12123&enc_idns_list=944005&enc_idns_list=945613&enc_idns_list=946055&fetch_episode_req_type=0&fields_list=EPISODEWIDGET&fields_list=PATIENTWIDGET&fields_list=MEMBERIDWIDGET&fields_list=ADMIT_DT&fields_list=ALL_PROVIDERS&fields_list=DIAG_CD&fields_list=DUEDATEWIDGET&fields_list=OVERDUEDATE&fields_list=AUTH_NEXT_REVIEW_DT&fields_list=REVIEWER_DUE_DT&fields_list=ASSIGNED_REVIEWER&fields_list=REQUESTED_DT&fields_list=APPEAL_TYPE&fields_list=CODE_TIME_SVC_ID&fields_list=SERVICE_TYPE&fields_list=SERVICE_CODE&fields_list=DECISION_DESCRIPTION&fields_list=GROUP_NAME&fields_list=TPA&fields_list=START_DT&fields_list=FOLLOWUP_DT&fields_list=PATIENT_CLASS_CD&fields_list=DISCHARGE_DATE&fields_list=ASSIGNED_DATE&fields_list=EXT_ENC_ID&fields_list=CERT_AUTH_NO&fields_list=OVERDUE_ACT_DT&logged_in_user_idn=26127&mbr_idns_list=951556&mbr_idns_list=951556&mbr_idns_list=1050990&post_data=%7B%22sort_by%22%3Atrue%2C%22order_by%22%3A%22DUEDATEWIDGET%22%2C%22send_fields%22%3Afalse%2C%22worklist_idn%22%3A0%2C%22sys_user_type%22%3A%22%22%2C%22page_num%22%3A1%2C%22sel_enc_type%22%3A%22IP%22%2C%22USER_IDN%22%3A0%2C%22enc_selected_flag%22%3Atrue%2C%22currDate%22%3A%2204%2F01%2F2024%22%2C%22sortAndFilter%22%3A%5B%5D%2C%22total_episodes_count%22%3A0%7D&program_worklist_flag=0&worklist_idn=12123&enc_idns_list=945613&enc_idns_list=946055&fields_list=PATIENTWIDGET&fields_list=MEMBERIDWIDGET&fields_list=ADMIT_DT&fields_list=ALL_PROVIDERS&fields_list=DIAG_CD&fields_list=DUEDATEWIDGET&fields_list=OVERDUEDATE&fields_list=AUTH_NEXT_REVIEW_DT&fields_list=REVIEWER_DUE_DT&fields_list=ASSIGNED_REVIEWER&fields_list=REQUESTED_DT&fields_list=APPEAL_TYPE&fields_list=CODE_TIME_SVC_ID&fields_list=SERVICE_TYPE&fields_list=SERVICE_CODE&fields_list=DECISION_DESCRIPTION&fields_list=GROUP_NAME&fields_list=TPA&fields_list=START_DT&fields_list=FOLLOWUP_DT&fields_list=PATIENT_CLASS_CD&fields_list=DISCHARGE_DATE&fields_list=ASSIGNED_DATE&fields_list=EXT_ENC_ID&fields_list=CERT_AUTH_NO&fields_list=OVERDUE_ACT_DT&mbr_idns_list=1050990",
  //   {
  //     headers: {
  //       accept: "application/json, text/plain, */*",
  //       "x-auditlog":
  //         '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:21:23.315Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
  //     },
  //   }
  // );
  // sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_member_keyword_icons?mbr_list=951556&mbr_list=951556&mbr_list=1050990&mbr_list=1050990",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:21:29.413Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
      },
    }
  );
  sleep(0.5);

  // http.get(
  //   BASE_URL +
  //     "cms/ZeUI/views/WorkList/Controller/get_episode_data_by_worklist?default_worklist_idn=12123&enc_idns_list=652044&fetch_episode_req_type=0&fields_list=CERT_AUTH_NO&fields_list=EPISODEWIDGET&fields_list=PATIENTWIDGET&fields_list=MEMBERIDWIDGET&fields_list=APPEAL_LEVEL_DESC&fields_list=APPELLANT_TYPE&fields_list=APPEAL_CATEGORY&fields_list=DUEDATEWIDGET&fields_list=OVERDUEDATE&fields_list=REVIEWER_DUE_DT&fields_list=ASSIGNED_REVIEWER&fields_list=ADMIT_DT&fields_list=SERVICE_START_DT&fields_list=SERVICE_TYPE&fields_list=ALL_PROVIDERS&fields_list=SERVICE_CODE&fields_list=DIAG_CD&fields_list=DECISION_DESCRIPTION&fields_list=ENC_IDN&fields_list=AGEWIDGET&fields_list=REQUESTED_DT&fields_list=APPEAL_TYPE&fields_list=CODE_TIME_SVC_ID&fields_list=START_DT&fields_list=GROUP_NAME&fields_list=FOLLOWUP_DT&fields_list=RSN_REFERRAL_CD&fields_list=TPA&fields_list=EXT_ENC_ID&logged_in_user_idn=26127&mbr_idns_list=768611&post_data=%7B%22sort_by%22%3Atrue%2C%22order_by%22%3A%22ENC_IDN%22%2C%22send_fields%22%3Afalse%2C%22worklist_idn%22%3A0%2C%22sys_user_type%22%3A%22%22%2C%22page_num%22%3A1%2C%22sel_enc_type%22%3A%22MA-Appeal%22%2C%22USER_IDN%22%3A0%2C%22enc_selected_flag%22%3Atrue%2C%22currDate%22%3A%2204%2F01%2F2024%22%2C%22sortAndFilter%22%3A%5B%5D%2C%22total_episodes_count%22%3A3%7D&program_worklist_flag=0&worklist_idn=12123&fields_list=EPISODEWIDGET&fields_list=PATIENTWIDGET&fields_list=MEMBERIDWIDGET&fields_list=APPEAL_LEVEL_DESC&fields_list=APPELLANT_TYPE&fields_list=APPEAL_CATEGORY&fields_list=DUEDATEWIDGET&fields_list=OVERDUEDATE&fields_list=REVIEWER_DUE_DT&fields_list=ASSIGNED_REVIEWER&fields_list=ADMIT_DT&fields_list=SERVICE_START_DT&fields_list=SERVICE_TYPE&fields_list=ALL_PROVIDERS&fields_list=SERVICE_CODE&fields_list=DIAG_CD&fields_list=DECISION_DESCRIPTION&fields_list=ENC_IDN&fields_list=AGEWIDGET&fields_list=REQUESTED_DT&fields_list=APPEAL_TYPE&fields_list=CODE_TIME_SVC_ID&fields_list=START_DT&fields_list=GROUP_NAME&fields_list=FOLLOWUP_DT&fields_list=RSN_REFERRAL_CD&fields_list=TPA&fields_list=EXT_ENC_ID",
  //   {
  //     headers: {
  //       accept: "application/json, text/plain, */*",
  //       "x-auditlog":
  //         '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:21:53.775Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
  //     },
  //   }
  // );
  // sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_member_keyword_icons?mbr_list=768611",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:21:59.356Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL + "cms/ZeUI/views/Episode/Controller/getAllowedEncTypeList",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:22:05.360Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
      },
    }
  );
  sleep(0.5);

  http.get(BASE_URL + "cms/ZeSecurity/isSessionInvalid", {
    headers: {
      accept: "application/json, text/plain, */*",
      "x-auditlog":
        '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:22:05.537Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
    },
  });
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Episode/Controller/getEpisodeViewStatusDetails?I_CLAIMANT_IDN=768611&I_ENCOUNTER_IDN=652044&I_ENCTYPE_CD=MA-Appeal",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:22:08.822Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Patient/Controller/get_member_name?mbr_idn=768611",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:22:17.251Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++enc/src/episode/partials/episode-base.html?v=1710943691",
    {
      headers: {
        accept: "text/html",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:22:21.617Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++appeal/src/appeal/partials/appeal-episode-base.html?v=1710943691",
    {
      headers: {
        accept: "text/html",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:22:21.617Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++appeal/src/appeal/partials/appeal-list.html?v=1710943691",
    {
      headers: {
        accept: "text/html",
        "x-auditlog":
          '{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":"","state":"workList.workListTrans","user_idn":26127,"ctime":"2024-04-01T14:22:21.617Z","uri":"#/workList/searchWorkListTrans","stateInfo":{"url":"/searchWorkListTrans","params":{"memId":0,"enc_type":"","worklist_idn":0,"USER_IDN":0,"worklistName":""},"views":{"index@":{"templateUrl":"++resource++workflow/src/worklist/partials/search-worklist-trans.html","controller":"WorklistTransController as wlCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"name":"workList.workListTrans"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++enc/src/episode/partials/episode-banner.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:25.107Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/UMService/Controller/retain_dismissed_decision_date",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:25.107Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++appeal/src/appeal/partials/episode-btn-grp.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:25.107Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++notes/src/notes/partials/add-view-note-links.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:25.108Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++notes/src/notes/partials/view-single-note.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:25.108Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++maappeal/src/maappeal/partials/maappeal-list.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:25.108Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Episode/Controller/menuEpisodesList?I_CLAIMANT_IDN=768611",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:25.108Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++maappeal/src/maappeal/partials/ma-appeal-episode-btn-grp.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:25.887Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++maappeal/src/maappeal/partials/ma-appeal-partc-episode-btn-grp.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:25.888Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++maappeal/src/maappeal/partials/referenc-listing.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:25.888Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++enc/src/recordrequest/partials/record-request.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:25.888Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/MAAppealEpisode/Controller/get_attach_all_drug_config",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:25.891Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL + "cms/ZeUI/views/MAAppealEpisode/Controller/get_ui_panels_config",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:25.892Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/MAAppealEpisode/Controller/get_mappeal_pend_decisions?enc_type=MA-Appeal",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:25.892Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/UMService/Controller/getDynamicNotesDetails?I_CLAIMANT_IDN=768611&I_ENCOUNTER_IDN=652044",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:25.892Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL + "cms/ZeUI/views/Diagnosis/Controller/getConfigToDispStartDate",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:25.892Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Diagnosis/Controller/getDiagnosisData?encounter_idn=652044&claimant_idn=768611",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:25.892Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/MAAppealEpisode/Controller/get_appeal_banner_data?I_CLAIMANT_IDN=768611&I_ENCOUNTER_IDN=652044",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:25.893Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/MAAppealEpisode/Controller/get_um_episode_details?I_CLAIMANT_IDN=768611&I_ENCOUNTER_IDN=652044",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:25.893Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++maappeal/src/maappeal/partials/partc-maappeal-staysvc-list.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:25.973Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++appeal/src/appeal/partials/ecv-attach-btn.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:26.012Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++enc/src/episode/partials/episode-lock-msg.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:26.037Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Episode/Controller/getDynamicEncDetails?I_CLAIMANT_IDN=768611&I_ENC_IDN=652044&encType=MA-Appeal",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:26.037Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++maappeal/src/maappeal/partials/invtgn-attach-btn.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:29.264Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/MAAppealEpisode/Controller/fetch_maappeal_partc_button_config?encIdn=652044",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:29.467Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/MAAppealEpisode/Controller/get_base_reference_pharmacy_claim?current_page=1&enc_idn=652044&mbr_idn=768611",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:36.147Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/MAAppealEpisode/Controller/get_base_reference_medical_claim?current_page=1&enc_idn=652044&mbr_idn=768611",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:36.147Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Episode/Controller/get_request_records?record_request_params=%7B%22enc_idn%22:%22652044%22,%22current_page%22:1,%22order_by_column%22:%22request_added_dt%22,%22order_by%22:%22desc%22%7D",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:36.147Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL + "cms/ZeUI/views/Notes/Controller/open_notes_in_popup_window",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:36.148Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++appeal/src/appeal/partials/appeal-document.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:36.148Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Provider/Controller/getEncProvidersListing?encIdn=652044&mbrIdn=768611",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:36.148Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/Notes/Controller/getNoteDetailsWithAddendums?I_CLAIMANT_IDN=768611&I_NOTE_IDN=454976",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:40.098Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++maappeal/src/maappeal/partials/appeal-diagnosis-list.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:40.436Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/MAAppealEpisode/Controller/getAppealListingDetails?enc_idn=652044&enc_type=MA-Appeal&mbr_idn=768611",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:44.793Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(BASE_URL + "cms/ZeUI/views/UMService/Controller/isMDRole", {
    headers: {
      accept: "application/json, text/plain, */*",
      "x-auditlog":
        '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:44.793Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
    },
  });
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/MAAppealEpisode/Controller/get_enc_reference?current_page=1&enc_idn=652044&is_medication_request=false&mbr_idn=768611",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:44.793Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/MAAppealEpisode/Controller/check_claim_request_type?enc_type=MA-Appeal&request_type=10197",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:44.817Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++appeal/src/appeal/partials/appeal-episode-doc-list.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:50.905Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/++resource++appeal/src/appeal/partials/appeal-member-doc-list.html?v=1710943691",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:22:50.906Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);

  http.get(
    BASE_URL +
      "cms/ZeUI/views/MAAppealEpisode/Controller/get_basic_claims_listing_details?enc_idn=652044&mbr_idn=768611&page_num=1&request_type=10197",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-auditlog":
          '{"mbr_idn":"768611","enc_type":"MA-Appeal","enc_idn":"652044","memId":0,"state":"mbr.mbrbase.encbase.appealencbase.appealListing","user_idn":26127,"ctime":"2024-04-01T14:23:03.403Z","uri":"#/episode/view_episode/%3D%3D%3DNzY4NjEx/%3D%3D%3DTUEtQXBwZWFs/%3D%3D%3DNjUyMDQ0","stateInfo":{"url":"/episode/view_episode/:mbr_idn/:enc_type/:enc_idn","params":{"memId":0},"parent":"mbr.mbrbase.encbase.appealencbase","views":{"appealencview":{"templateUrl":"++resource++appeal/src/appeal/partials/appeal-list.html","controller":"AppealListController as appealListCtrl","resolve":{"load":["$q","$rootScope",null],"$template":null}}},"data":{"proxy":"mbr.mbrbase.encbase.appealencbase.appealListing","displayName":"Episode"},"name":"mbr.mbrbase.encbase.appealencbase.appealListing"}}',
      },
    }
  );
  sleep(0.5);
}
