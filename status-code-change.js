// Creator: Grafana k6 Browser Recorder 1.0.7

import { sleep, group } from "k6";
import { check, fail } from "k6";
import http from "k6/http";
import { randomItem } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";

const HOST_NAME = "localhost.com";
const BASE_URL = `https://${HOST_NAME}`;
const USER_NAME = "zeadmin";
const PASSWORD = "Jiva@123";
const STATUS_CODES = ['200', '503', '502'];

export function setup() {
  const payload = JSON.stringify({
    __ac_name: USER_NAME,
    __ac_password: PASSWORD,
    new_enhanced_screen: true,
  });

  const response = http.post(
    `${BASE_URL}/cms/ZeSecurity/core_portal_login`,
    payload,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );

  const cookies = {};
  for (const name in response.cookies) {
    const key = response.cookies[name][0].name;
    if (key === "aptn") continue;
    cookies[key] = response.cookies[name][0].value;
  }
  return cookies;
}

export default function main(session) {
  const jar = http.cookieJar();
  for (const key in session) {
    jar.set(BASE_URL, key, session[key]);
  }

  let response;

  response = http.get(
    `${BASE_URL}/cms/ZeUI/WorkList/Controller/get_my_cases_by_episode?I_CUR_PAGE=1&enc_type_list=&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:19.643Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "258de4f6-b2df-486c-b40d-a275be399184",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:19.643Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/ZeUI/get_udf_exist?other_params=%7B%22state%22:%22episode.manageEpisodes.MyEpisodeByType%22,%22ctime%22:%222025-03-25T09:23:19.643Z%22,%22uri%22:%22%23%2Fepisode%2Fmanage_episodes%2FmyEpisodeByType%22%7D&state_id=episode.manageEpisodes.MyEpisodeByType?status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.878Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "e06974ec-b93d-4341-8188-c7cea1c3c9b2",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.878Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=1545164&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.879Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "31e599da-3a2a-4199-a756-72e826b0763a",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.879Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=876321&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.879Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "c4514062-0547-4872-9942-1b2426dbeac8",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.879Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=1047351&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.879Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "401ab539-a426-4541-8110-2c1a87b5dee5",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.879Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=796831&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.879Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "6722d2c8-716d-420f-a8ee-0e4fe32c4a5b",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.879Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=816971&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.882Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "85e40259-1f2f-4d7d-b6cc-d08d76ad54d1",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.882Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=828970&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.883Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "532df606-cfd6-4f83-8068-a1fd44bf4597",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.883Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=1066570&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.883Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "67f7a6b8-2fe5-4420-a3fe-0425b5dcb92e",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.883Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=1066570&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.883Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "ffb16183-b5e5-4b5c-b30d-1dd22a62b974",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.883Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=1066570&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.883Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "71ca122f-a515-49e3-a65e-962f5e55904e",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.883Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=1066570&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.883Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "229c68d7-11b4-44aa-9583-7af2c1811104",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"episode.manageEpisodes.MyEpisodeByType","user_idn":2,"ctime":"2025-03-25T09:23:26.883Z","uri":"#/episode/manage_episodes/myEpisodeByType"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/ZeUI/ZeUI/get_left_navigation_links?xml_tag=Manage_Cases&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"episode.manageEpisodes","user_idn":2,"ctime":"2025-03-25T09:23:15.444Z","uri":"#/episode/manage_episodes"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "bda3ff44-bd5e-4b9a-a2a8-746d1e58afe7",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"episode.manageEpisodes","user_idn":2,"ctime":"2025-03-25T09:23:15.444Z","uri":"#/episode/manage_episodes"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.post(
    `${BASE_URL}/cms/ZeUI/WorkList/Controller/get_worklist_view?status=${randomItem(STATUS_CODES)}`,
    '{"currentPage":1,"orderByField":"worklist_name","sortBy":true,"worklist_name":""}',
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "content-type": "application/json;charset=UTF-8",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"workList.configWorkList.searchWorkList","user_idn":2,"ctime":"2025-03-25T09:23:00.523Z","uri":"#/workList/configWorkList/searchWorkList"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "edfdf093-e83d-43c5-8bfa-ff7e554a7747",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"workList.configWorkList.searchWorkList","user_idn":2,"ctime":"2025-03-25T09:23:00.523Z","uri":"#/workList/configWorkList/searchWorkList"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(`${BASE_URL}/cms/ZeUser/Controller/check_user_loggedin?status=${randomItem(STATUS_CODES)}`, {
    headers: {
      accept: "application/json, text/plain, */*",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
      "sec-ch-ua":
        '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
    },
  });
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/ZeUser/Controller/getLoginConfigData?login_type=np&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/ZeUser/Controller/get_logo_data?logo_types=NP_LOGIN_TOP_LEFT&NP_LOGIN_TOP_RIGHT,NP_LOGIN_JIVA&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(`${BASE_URL}/cms/ZeSecurity/get_destination?status=${randomItem(STATUS_CODES)}`, {
    headers: {
      accept: "application/json, text/plain, */*",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
      "sec-ch-ua":
        '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
    },
  });
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/ZeUI/getCustomerLogoDetails?logo_type=NP_LOGIN_TOP_LEFT&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/ZeUI/getCustomerLogoDetails?logo_type=NP_LOGIN_TOP_RIGHT&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/ZeUI/getCustomerLogoDetails?logo_type=NP_LOGIN_JIVA&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(`${BASE_URL}/cms/ZeUI/core_portal?status=${randomItem(STATUS_CODES)}`, {
    headers: {
      "upgrade-insecure-requests": "1",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
      "sec-ch-ua":
        '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
    },
  });
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/ZeUI/ZeUI/getConfigData?usrTz=Asia/Kolkata&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(`${BASE_URL}/cms/ZeUI/views/styles/ze-skin-sprite.png?${Date.now()}&status=${randomItem(STATUS_CODES)}`, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
      "sec-ch-ua":
        '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
    },
  });
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/ZeUI/++resource++appeal/src/appeal/partials/episode-add-step-two.html?v=${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:16.919Z","uri":""}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "ade94030-aa46-4050-848d-7d0ded901220",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:16.919Z","uri":""}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/++resource++appeal/src/appeal/partials/appeal-stay-request.html?v=${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:16.919Z","uri":""}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "cc86d152-2189-4418-88c3-19aa3afa1fcd",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:16.919Z","uri":""}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/++resource++appeal/src/appeal/partials/appeal-service-request.html?v=${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:16.919Z","uri":""}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "c9c2ab19-3b82-4faa-be95-2e35517daba0",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:16.919Z","uri":""}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/++resource++ngui/src/partials/header.html?v=${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:16.919Z","uri":""}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "1e17f081-72db-4f98-be8b-60f42785847d",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:16.919Z","uri":""}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/++resource++ngui/src/js/vendor/tinymce/js/tinymce/langs/en_US.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/++resource++ngui/src/js/vendor/tinymce/js/tinymce/themes/modern/theme.min.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/++resource++ngui/src/js/vendor/tinymce/js/tinymce/plugins/spellchecker/plugin.min.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/++resource++ngui/src/js/vendor/tinymce/js/tinymce/plugins/paste/plugin.min.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/++resource++ngui/src/js/vendor/tinymce/js/tinymce/plugins/template/plugin.min.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/++resource++ngui/src/assets/images/favicon.ico?JSTimeStamp=${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/++resource++dashboard/src/ngdashboard/js/controllers/dashboardController.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/++resource++workflow/src/worklist/js/controllers/transWorklistPopOverController.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/ZeUI/Message/Controller/get_dashboard_msg_count?status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"path":"","state":"sink","user_idn":2,"ctime":"2025-03-25T09:21:17.535Z","uri":"#/%3D%3D%3D"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "b4cb13ed-cd57-402c-85c7-3b0f3ba24648",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"path":"","state":"sink","user_idn":2,"ctime":"2025-03-25T09:21:17.535Z","uri":"#/%3D%3D%3D"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/ZeUI/getCustomerLogoDetails?logo_type=NP_MENU_JIVA&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/++resource++ngui/src/js/vendor/tinymce/js/tinymce/skins/lightgray/skin.min.css?JSTimeStamp=${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/++resource++prvportal/src/prvportal/js/services/prvportalServices.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/++resource++dashboard/src/ngdashboard/js/directives/dashboardDirective.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/++resource++prvportal/src/prvportal/js/directives/prvportalDashboardDirective.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/++resource++enc/src/episode/js/directives/episodeDirectives.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/++resource++mbr/src/member/js/services/memberServices.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/++resource++mbr/src/member/js/controllers/openToWorkController.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/++resource++notes/src/notes/js/directives/notesDirective.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/++resource++notes/src/notes/js/services/notesServices.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/++resource++enc/src/episode/js/services/episodeServices.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/++resource++keyword/src/keyword/js/directives/keywordDirectives.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/++resource++cm/src/cm/js/services/cmServices.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/++resource++dm/src/dm/js/services/dmServices.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/ZeUI/++resource++maappeal/src/maappeal/partials/openmaappealsforuser.html?v=${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:41.222Z","uri":"#/dashboard"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "9247fc6f-2842-442a-94b3-565092341cb7",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:41.222Z","uri":"#/dashboard"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/ZeUI/++resource++maappeal/src/maappeal/partials/maappealepisodeduecount.html?v=${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:41.222Z","uri":"#/dashboard"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "0adffdc4-fc9b-4fdb-a4c7-b722cf9e615b",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:41.222Z","uri":"#/dashboard"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/ZeUI/++resource++maappeal/src/maappeal/partials/maappealreviewstatuscount.html?v=${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:41.222Z","uri":"#/dashboard"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "4c99ff19-427d-4f29-b1ee-80dc64325fc4",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:41.222Z","uri":"#/dashboard"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/ZeUI/++resource++maappeal/src/maappeal/partials/maappealwithduedtgraph.html?v=${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:41.222Z","uri":"#/dashboard"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "399defce-f342-4fab-af24-3b953ddf881a",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:41.222Z","uri":"#/dashboard"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_widget_controller_map?status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":2,"ctime":"2025-03-25T09:21:25.928Z","uri":"#/dashboard"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "4dccfe43-1b76-4aaa-985c-2f53e7593bb7",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"dashboardView","user_idn":2,"ctime":"2025-03-25T09:21:25.928Z","uri":"#/dashboard"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_widget_end_point_map?status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":2,"ctime":"2025-03-25T09:21:25.928Z","uri":"#/dashboard"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "434e8218-2673-4fe6-97c0-4c26bf04c804",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"dashboardView","user_idn":2,"ctime":"2025-03-25T09:21:25.928Z","uri":"#/dashboard"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_widget_titles?status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":2,"ctime":"2025-03-25T09:21:25.928Z","uri":"#/dashboard"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "633dd4e6-7d43-493b-9c06-ee7fa98ddeb3",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"dashboardView","user_idn":2,"ctime":"2025-03-25T09:21:25.928Z","uri":"#/dashboard"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.post(
    `${BASE_URL}/cms/ZeUI/Dashboard/Controller/getDashboardConfig?status=${randomItem(STATUS_CODES)}`,
    '{"user_datetime":"03/25/2025 14:51"}',
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "content-type": "application/json;charset=UTF-8",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":2,"ctime":"2025-03-25T09:21:25.928Z","uri":"#/dashboard"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "d2d3eb4b-4d7c-4628-a9d2-65c7d081880a",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"dashboardView","user_idn":2,"ctime":"2025-03-25T09:21:25.928Z","uri":"#/dashboard"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.post(
    `${BASE_URL}/cms/ZeUI/ZeUser/Controller/getLoggedInUserForngDashboard?status=${randomItem(STATUS_CODES)}`,
    '{"user_datetime":"03/25/2025 14:51"}',
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "content-type": "application/json;charset=UTF-8",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":2,"ctime":"2025-03-25T09:21:25.928Z","uri":"#/dashboard"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "f7d1e510-2f9a-4cc5-84be-086f2c565387",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"dashboardView","user_idn":2,"ctime":"2025-03-25T09:21:25.928Z","uri":"#/dashboard"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.post(
    `${BASE_URL}/cms/ZeUI/Dashboard/Controller/getWidgetsData?status=${randomItem(STATUS_CODES)}`,
    '{"user_datetime":"03/25/2025 14:51","lazyLoad":true}',
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "content-type": "application/json;charset=UTF-8",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"dashboardView","user_idn":2,"ctime":"2025-03-25T09:21:35.687Z","uri":"#/dashboard"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "037bc56a-5f2f-4443-a6c8-c47f6009f27e",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"dashboardView","user_idn":2,"ctime":"2025-03-25T09:21:35.687Z","uri":"#/dashboard"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.post(
    `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_incomplete_episode_fax_widget?status=${randomItem(STATUS_CODES)}`,
    '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:41.580Z","uri":"#/dashboard","widget":"incepisodesandfaxcount","user_datetime":"03/25/2025 14:51"}',
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "content-type": "application/json;charset=UTF-8",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:41.771Z","uri":"#/dashboard"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "f283312c-a257-4563-b358-d902bd99426c",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:41.771Z","uri":"#/dashboard"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.post(
    `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_myactivities_widget?status=${randomItem(STATUS_CODES)}`,
    '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:41.771Z","uri":"#/dashboard","widget":"myactivities","user_datetime":"03/25/2025 14:51"}',
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "content-type": "application/json;charset=UTF-8",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:41.982Z","uri":"#/dashboard"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "63f9e8d2-495b-4bbb-b212-f35ffa7bb665",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:41.982Z","uri":"#/dashboard"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.post(
    `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_fax_stats_piegraph_widget?status=${randomItem(STATUS_CODES)}`,
    '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:41.982Z","uri":"#/dashboard","widget":"faxstatspiegraphnew","user_datetime":"03/25/2025 14:51"}',
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "content-type": "application/json;charset=UTF-8",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:42.007Z","uri":"#/dashboard"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "8e9c7e39-aa55-4cc2-a496-0cb8361e13e3",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:42.007Z","uri":"#/dashboard"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.post(
    `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_fax_turnaround_time_widget?status=${randomItem(STATUS_CODES)}`,
    '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:42.007Z","uri":"#/dashboard","widget":"turnaroundtimenew","user_datetime":"03/25/2025 14:51"}',
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "content-type": "application/json;charset=UTF-8",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:42.059Z","uri":"#/dashboard"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "947f1d50-2673-4eee-b45a-b5d0464182ac",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:21:42.059Z","uri":"#/dashboard"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/++resource++refcode/src/refcode/js/services/refcodeServices.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/ZeUI/getManageAdminContentsFromXML_new_new?status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"refcode.base","user_idn":2,"ctime":"2025-03-25T09:22:09.720Z","uri":"#/code_tables_config"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "592df659-ca41-48db-8eac-05d3696d9278",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"refcode.base","user_idn":2,"ctime":"2025-03-25T09:22:09.720Z","uri":"#/code_tables_config"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/++resource++ngui/src/assets/images/favicon.ico?JSTimeStamp=${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/Patient/Controller/getAllReadOnlyMembers?status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"refcode.base","user_idn":2,"ctime":"2025-03-25T09:22:23.069Z","uri":"#/code_tables_config"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "cd003a61-4270-43c2-b3d9-1b99e704f1fc",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"refcode.base","user_idn":2,"ctime":"2025-03-25T09:22:23.069Z","uri":"#/code_tables_config"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/++resource++mbr/src/member/js/controllers/memberSearchCtrl.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/++resource++mbr/src/member/js/controllers/memberAdvancedSearchController.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/++resource++mbr/src/member/js/directives/memberSearchDirectives.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/++resource++mbr/src/member/js/controllers/exactMatchController.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/++resource++mbr/src/member/js/controllers/memberAbstractController.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/++resource++mbr/src/member/js/filters/mpiMemberSearchFilter.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/++resource++mbr/src/member/js/controllers/mbrKeywordIconsController.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/++resource++mbr/src/member/js/services/memberSearchCtrlService.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/++resource++mbr/src/member/js/controllers/mbrAddEpisodesController.js?${Date.now()}&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);

  response = http.get(
    `${BASE_URL}/cms/ZeUI/Patient/Controller/getDefaultFilterCheckingOpt?status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"search_criteria":null,"value":null,"memId":0,"state":"mbr.membersearchintakeview","user_idn":2,"ctime":"2025-03-25T09:22:24.165Z","uri":"#/member_search/"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "345d7372-f8a4-491e-a336-819e7cd7ca1d",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"search_criteria":null,"value":null,"memId":0,"state":"mbr.membersearchintakeview","user_idn":2,"ctime":"2025-03-25T09:22:24.165Z","uri":"#/member_search/"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/Patient/Controller/getConfigForMemberSearchDropDown?context=EpisodeIntake&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"search_criteria":null,"value":null,"memId":0,"state":"mbr.membersearchintakeview","user_idn":2,"ctime":"2025-03-25T09:22:24.166Z","uri":"#/member_search/"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "228825f1-8b7d-4c68-aa08-f40dce0b42b4",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"search_criteria":null,"value":null,"memId":0,"state":"mbr.membersearchintakeview","user_idn":2,"ctime":"2025-03-25T09:22:24.166Z","uri":"#/member_search/"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/Patient/Controller/is_adv_mbr_search_default?status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"search_criteria":null,"value":null,"memId":0,"state":"mbr.membersearchintakeview","user_idn":2,"ctime":"2025-03-25T09:22:24.166Z","uri":"#/member_search/"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "c028c1b9-9d04-40b4-938f-81cf8cd8b747",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"search_criteria":null,"value":null,"memId":0,"state":"mbr.membersearchintakeview","user_idn":2,"ctime":"2025-03-25T09:22:24.166Z","uri":"#/member_search/"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/Patient/Controller/patientLastName?query=tes&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"search_criteria":null,"value":null,"memId":0,"state":"mbr.membersearchintakeview","user_idn":2,"ctime":"2025-03-25T09:22:34.086Z","uri":"#/member_search/"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "70dffb6c-82d3-476d-8e80-101ce186beac",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"search_criteria":null,"value":null,"memId":0,"state":"mbr.membersearchintakeview","user_idn":2,"ctime":"2025-03-25T09:22:34.086Z","uri":"#/member_search/"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/Patient/Controller/patientFirstName?query=tes&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"search_criteria":null,"value":null,"memId":0,"state":"mbr.membersearchintakeview","user_idn":2,"ctime":"2025-03-25T09:22:45.187Z","uri":"#/member_search/"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "dcc5f15a-20e2-4b66-9318-3cef4155bb8c",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"search_criteria":null,"value":null,"memId":0,"state":"mbr.membersearchintakeview","user_idn":2,"ctime":"2025-03-25T09:22:45.187Z","uri":"#/member_search/"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
  response = http.get(
    `${BASE_URL}/cms/ZeUI/WorkList/Controller/get_worlist_left_nav_links?tag_name=Manage_Worklist&status=${randomItem(STATUS_CODES)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-auditlog":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:22:58.646Z","uri":"#/workList/configWorkList"}',
        "x-browser-tab-id": "20cb53a0-3e38-4122-93e6-426c94e5b004",
        "x-csrft": "3c88af92-6a8b-4414-9266-b4d323c030b6",
        "x-request-id": "125c5308-8781-4cd5-817c-35103743e753",
        "x-xsrf-token": session["XSRF-TOKEN"],
        "x-usr-tz-offset": "-19800",
        "x-usr-tz-timezone": "Asia/Kolkata",
        "context-details":
          '{"state":"","user_idn":2,"ctime":"2025-03-25T09:22:58.646Z","uri":"#/workList/configWorkList"}',
        "sec-ch-ua":
          '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    }
  );
  sleep(1);
}
