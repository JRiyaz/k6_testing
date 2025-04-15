// Creator: Grafana k6 Browser Recorder 1.0.7
import { sleep, group } from "k6";
import { check, fail } from "k6";
import http from "k6/http";
import { randomItem, randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';
import { Httpx } from "https://jslib.k6.io/httpx/0.1.0/index.js";

const HOST_NAME = "local.zeomega.org";
const BASE_URL = `https://${HOST_NAME}`;
const USER_NAME = "seladmin";
const PASSWORD = "Jiva@123";
const JIVA = new Httpx({ baseURL: BASE_URL });

JIVA.addHeaders({
  accept: "application/json, text/plain, */*",
  "x-usr-tz-offset": "21600",
  "x-usr-tz-timezone": "America/Chicago",
  "content-type": "application/json",
});

const COUNTRY_CODE = ['11Aug_Country R', '465', 'CB-Test_AlleryT', 'CKCI', 'Countries_TM', 'Country_11aug', 'Country_11aug11', 'CountryEdit', 'GrKFaP', 'TCD', 'USA'];
const QUERY = ['hi', 'hello', 'test', 'simple', 'sample', 'sam', 'group', 'good', 'amazing', 'jiva', 'zeo', 'hmm'];
const ACO_IDNS = [12410, 12411, 95, 12413, 12414, 12415, 12416, 12417, 12418, 12419, 12420, 12421, 12422, 12423, 12424, 15, 11722, 11719, 12407, 1198, 11723, 11717, 12241, 1491, 1492, 1493, 1494, 1495, 12442, 12443, 12444];
const I_GROUP_IDNS = [19836, 84797, 116167, 116176, 116180, 208330, 142980, 84797, 85242, 19844, 19584, 9302, 9423, 4920, 4921, 5328, 5773, 6899, 8648, 8626, 8488, 8583, 7126, 8451, 5651, 4905, 5330, 101, 1670, 1107, 1599, 1809, 2789, 2790, 2791, 2792, 2793, 2794, 2795, 2796, 2797, 2799, 2800, 2948];
const MBR_IDNS = [185941, 769571, 771026, 771026, 776994, 781394, 791258, 793801, 794460, 799357, 185876, 768209, 768211, 768611, 769748, 771641, 776743, 781807, 782125, 782126, 783754, 787429, 788888, 789266, 789295, 789713, 789714, 789716, 789721, 789722, 789723, 789725, 789726, 789730, 791261, 791920, 791969, 794328, 794457, 794461, 794570, 862539, 863283, 863309, 863320, 863960, 863967, 864265, 865373, 865374, 865383, 865384, 865385, 865386, 865389, 865396, 865397, 865400, 865401, 865405, 865700, 865767, 865884, 865885, 865886, 865887, 865888, 865889, 865890, 865893, 865894, 865895, 865913, 865915, 865916, 865917, 865990, 865992, 865994, 865997, 865999, 866004, 866006, 866007, 866033, 866041, 1046528, 1047290, 1047291];
const CLAIMANT_IDNS = [158442, 158449, 158452, 158461, 159950, 162058, 162288, 162387, 171235, 185941, 229750, 313915, 572658, 577142, 607454, 607456, 620853, 710571, 762264, 767008, 767037, 767520, 767521, 767522, 767523, 767524, 768211, 768214, 768220, 768222, 768592, 768599, 768604, 768610, 768615, 769285, 769333, 769337, 769373, 769402, 769409, 769501, 769596, 769896, 769897, 769898, 769899, 769900, 771393, 771422]
const CONTEXT_DROPDOWN = ['EpisodeIntake', 'FaxIntake', 'AddMemberSearch', 'ManageMemberSearch', 'MemberMergeSearch'];
const SEARCH_ALPHA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const YES_NO = ['Y', 'N'];
const XML_TAGS = ['Manage_Incomplete_Episodes', 'Manage_Sup_Content', 'Manage_Cases', 'Manage_Supervisor_Cases', 'Tracking_Reports', 'Manage_User'];
const PAYOR_IDNS = [133, 164870, 134, 164872, 347784, 45948, 164875, 349836, 75399, 239758, 4623, 66958, 164881, 74899, 340761, 266272, 169, 164905, 170, 84652, 84653, 39214, 39215, 5299, 1721, 185, 1723, 1724, 1985, 193, 145219, 83907, 206275, 240198, 240207, 207, 147793, 157137, 212, 213, 214, 215, 205911, 157143, 157146, 157147, 239965, 146913, 157539, 229, 236, 157422, 113, 114, 1779, 47217, 123, 124];
const CLAIMAT_IDNS = [1096570, 1545164, 162387];
const SEL_NURSE_WLS = [5468789, 12132, 5298600];
const ENC_TYPES = ['Appeal', 'BH-CM', 'BH-IP', 'BH-OP', 'CM', 'DM', 'IP', 'OP'];
const ORDER_BYS = ['true', 'false'];
const DRUG_DETAIL_IDNS = [19107, 19108, 19109, 19110, 19111, 19112, 19113, 19114, 19115, 19116, 19117, 19118, 19119, 19120, 19121, 19122, 19123, 19124, 19125, 19126, 19127, 19128, 19129, 19130, 19131, 19132, 19133, 19134, 19135, 19136, 19137, 19138, 19139, 19140, 19141, 19142, 19143, 19144, 19145, 19146, 19147, 19148, 19149, 19150, 19151, 19152, 19153, 19154, 19155, 19156, 19157, 19158, 19159, 19160, 19161, 19162, 19163, 19164, 19165, 19166];
const USER_IDNS = [2, 12150, 22178, 22651, 22845, 25293, 26127, 27641, 27690, 29939, 30140, 32812, 35087, 35213, 35839, 5030120, 5034183, 5037043, 5037594, 5040254, 5040820, 5041484, 5041938, 5041953, 5042376, 5055353, 5057793, 5058679, 5059649, 5075584, 5075585, 5076058, 5076059, 5086760, 5125854, 5136827, 5138351, 5140877, 5146207, 5153142,
];
const ENC_IDNS = [20, 102, 112, 10216, 10225, 10229, 10240, 10284, 10287, 10315, 10330, 10346, 10352, 10541, 10616, 10681, 10706, 10712, 10803, 10804, 10812, 10888, 10891, 11557, 11558, 11614, 11793, 12051, 12056, 12101, 12140, 12153, 12170, 12321, 12331, 13973, 14141, 14208, 14209, 14311, 14394, 14482, 14485, 14517, 14704, 15166, 15167, 16574, 16842, 18430];

const I_ACO_IDNS = [12413, 12414, 12415, 12416, 12417, 12418, 12419, 12420, 12421, 12422, 12423, 12424, 15, 11722, 11719, 12407, 1198, 11723, 11717, 12241, 1491, 1492, 1493, 1494, 1495, 12442, 12443, 12444, 12446, 12447, 12449, 12450, 12451, 12453, 12535, 12536, 12537, 12539, 12540, 12542, 12543, 12544, 12546, 12581, 12582, 12583, 12585, 12586, 12588, 12589, 12590, 12592, 12448, 95];

const WIDGET_NAMES = ["LabDataExtended", "Procedures", "Notes", "MedicationAllergies", "ConsolidatedMedicationsList", "OtherAllergies", "DocumentsData", "AlertsData", "FunctionalAndCognitiveStatus", "AdvanceDirectives", "VitalSignsDirective", "Problems", "CareReminder", "AssessmentList", "ProblemList", "SocialDeterminants", "CareQualityGapsData", "HccCodesData"];

function getRandomNumber() {
  return Date.now() + randomIntBetween(1, 999999);
}

function failChecker(res) {
  if (!check(res, { "status code MUST be 200 or 201 or 204": (res) => res.status === 200 || res.status === 201 || res.status === 204 })) {
    console.log(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
  }
  sleep(0.5);
}

export const options = {
  // vus: 30,
  // stages: [
  //   { target: 2, duration: "5m" },
  //   { target: 20, duration: "10m" },
  //   { target: 50, duration: "30m" },
  //   { target: 2, duration: "10m" },
  //   { target: 0, duration: "5m" },
  // ],
  scenarios: {
    contacts: {
      executor: 'per-vu-iterations',
      vus: 1,
      iterations: 1,
      maxDuration: '1h',
    },
  },

  thresholds: {
    http_req_failed: ["rate < 0.1"], // http errors should be less than 1%
    //   http_req_duration: ["p(95) < 200"], // 95% of requests should be below 200ms
  },
};

export function setup() {
  const payload = JSON.stringify({
    __ac_name: USER_NAME,
    __ac_password: PASSWORD,
    new_enhanced_screen: true,
  });
  const response = JIVA.post('/cms/ZeSecurity/core_portal_login', payload);

  const cookies = {};
  for (const name in response.cookies) {
    const key = response.cookies[name][0].name;
    if (key === "aptn") continue;
    cookies[key] = response.cookies[name][0].value;
  }
  return cookies;
}

export default function main(session) {
  JIVA.addHeader("x-xsrf-token", session["XSRF-TOKEN"]);
  const jar = http.cookieJar();

  for (const key in session) {
    jar.set(BASE_URL, key, session[key]);
  }
  let res;
  let mbr_value = randomItem(MBR_IDNS);

  res = JIVA.post(
    `/cms/ZeUI/IPCensus/Controller/showCensusReport`,
    '{"currentPage":1,"toggleFilter":"mypatients","orderByField":"name","orderby":false,"selectedFilters":[],"diagFilterDetails":{"diagnosis":"","fromAge":"","toAge":"","fromScore":"","toScore":"","diagIdn":"","toggleMemberStatus":""}}',
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/IPCensus/Controller/getLoggedInUserPcpList`,
    null,
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/IPCensus/Controller/getLoggedInUserAcoList`,
    null,
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/IPCensus/Controller/showCensusReport`,
    '{"currentPage":1,"toggleFilter":"myphysicians","orderByField":"name","orderby":false,"selectedFilters":[],"diagFilterDetails":{"diagnosis":"","fromAge":"","toAge":"","fromScore":"","toScore":"","diagIdn":"","toggleMemberStatus":""}}',
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/IPCensus/Controller/showCensusReport`,
    '{"currentPage":1,"toggleFilter":"myacos","orderByField":"name","orderby":false,"selectedFilters":[],"diagFilterDetails":{"diagnosis":"","fromAge":"","toAge":"","fromScore":"","toScore":"","diagIdn":"","toggleMemberStatus":""}}',
  );
  failChecker(res);

  res = JIVA.get(`/cms/ZeUI/getpartialPerm`);
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/UDF/Controller/getSearchTitlePage`,
    '{"I_CONTEXT_ID":"mainContent"}',
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/Assessment/Controller/assessmentTitle?query=${randomItem(QUERY)}&i_active_mode=udf`
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/views/Assessment/Controller/getTitleResultsPageForUDF`,
    `{"mod_type":"udf","ace_title":"","title_desc":"","I_CUR_PAGE":"${randomIntBetween(1, 10)}","I_CONTEXT_ID":"mainContent","search":"Search"}`,
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/views/Assessment/Controller/getAddEditTitlePageForUDF`,
    `{"title_desc":"","mod_type":"udf","I_CUR_PAGE":"1","I_CUR_PG":"${randomIntBetween(1, 10)}","ace_title_idn":"5227280","I_CONTEXT_ID":"modelwindowobj"}`,
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/UDF/Controller/getSearchQuestionPage`,
    '{"I_CONTEXT_ID":"mainContent"}',
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/views/Assessment/Controller/getUDFSearchResultsPage`,
    '{"mod_type":"udf","configure_assmnt":"","search_options":"less_options","search_qtxt":"","qstn_type":"","qstn_start_range":"","qstn_end_range":"","I_CUR_PAGE":"1","I_CONTEXT_ID":"mainContent","search":"Search"}',
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/UDF/Controller/getSearchScreensPage`,
    '{"I_CONTEXT_ID":"mainContent"}',
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/views/Assessment/Controller/getUDFResultPage`,
    `{"mod_type":"udf","ace_title":"5285664","ace_status":"","I_CUR_PAGE":"${randomIntBetween(1, 10)}","I_CONTEXT_ID":"mainContent","search":""}`,
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/ZeUI/getManageAdminContentsFromXML_new_new`
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/Lookup/Controller/getReviewQuestionSearch`,
    '{"I_CONTEXT_ID":"mainContent"}',
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/Lookup/Controller/views/getReviewTypeForEnc.xml`,
    `{"i_enc_type_cd":"${randomItem(ENC_TYPES)}"}`,
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/Lookup/Controller/getReviewQuestionSearchResult`,
    `{"tabID":"","I_ENC_TYPE_CD":"Appeal","I_REVIEW_TYPE":"","search":"search","I_CUR_PAGE":"${randomIntBetween(1, 10)}","I_CONTEXT_ID":"mainContent"}`,
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Lookup/Controller/get_xml_modularized_menu`
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/Lookup/Controller/getArchivalConfiguration`,
    '{"I_CONTEXT_ID":"mainContent"}',
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/Lookup/Controller/getNewConfigCodeTables`,
    null,
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Lookup/Controller/getNewCodeTableConfig?I_TAB_IDN=125`
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/Lookup/Controller/getICDTypeDefaultPage`,
    '{"I_CONTEXT_ID":"mainContent"}',
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Medispan/Controller/get_pdl_search_result?I_CUR_PAGE=${randomIntBetween(1, 10)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Medispan/Controller/get_drug_edit_values`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Medispan/Controller/get_ceg_details_for_pdl?is_text=0&max_results=${randomIntBetween(1, 20)}&query=${randomItem(QUERY)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Medispan/Controller/get_therapeutic_classes?query=${randomItem(QUERY)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Medispan/Controller/get_medication_names?query=${randomItem(QUERY)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Medispan/Controller/get_ceg_details_for_pdl?is_text=0&max_results=${randomIntBetween(1, 20)}&query=${randomItem(QUERY)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Medispan/Controller/get_pdl_search_result?I_CUR_PAGE=${randomIntBetween(1, 10)}&I_GROUP_IDN=36788`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Medispan/Controller/get_drug_history_details?DRUG_DETAIL_IDN=${randomItem(DRUG_DETAIL_IDNS)}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/ZeUser/Controller/get_ssrs_admin_page`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/ZeUser/Controller/get_workspace_names?reportType=advancedReport`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Aco/Controller/getAcoResults?currentPage=${randomIntBetween(1, 10)}&orderBy=${randomItem(ORDER_BYS)}&orderByField=ACO_NAME`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Aco/Controller/getAcoViewDetails?I_ACO_IDN=${randomItem(I_ACO_IDNS)}`
  );
  failChecker(res);

  res = JIVA.get(`/cms/ZeUI/Provider/Controller/getCountry`);
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/Provider/Controller/getState`,
    `{"countryCd":"${randomItem(COUNTRY_CODE)}"}`,
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/PlanOfCare/Controller/getManageCareplanPage`,
    '{"I_CONTEXT_ID":"mainContent"}',
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/PlanOfCare/Assessment/Controller/getSearchTitlePage`,
    '{"title_name":"Question Group/Assessment title","I_CONTEXT_ID":"mainContent"}',
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/Assessment/Controller/assessmentTitle?query=${randomItem(QUERY)}&i_active_mode=ace`
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/views/Assessment/Controller/getTitleResultsPage`,
    `{"mod_type":"ace","ace_title":"","title_desc":"","I_CUR_PAGE":"${randomIntBetween(1, 10)}","I_CONTEXT_ID":"mainContent","search":"Search"}`,
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/PlanOfCare/PlanOfCare/Controller/getSearchCtgyPage`,
    '{"title_name":"Problem Category","I_CONTEXT_ID":"mainContent"}',
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/views/PlanOfCare/Controller/getCtgyResultsPage`,
    `{"ctgy_desc":"","I_CUR_PAGE":"${randomIntBetween(1, 10)}","I_CONTEXT_ID":"mainContent"}`,
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/PlanOfCare/Lookup/Controller/getProbViewPage`,
    '{"title_name":"Problems","I_CONTEXT_ID":"mainContent"}',
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/views/PlanOfCare/Controller/getProbSearchResultPage`,
    `{"I_PROBLEM_TYPE":"","search":"search","tabID":"","title_name":"Problems","I_CUR_PAGE":"${randomIntBetween(1, 10)}","I_CONTEXT_ID":"mainContent"}`,
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/views/Lookup/Controller/getCodeTableConfig`,
    '{"I_CONTEXT_ID":"code_table_47","I_TAB_IDN":"47"}',
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/PlanOfCare/Lookup/Controller/getGoalViewPage`,
    '{"title_name":"Goals","I_CONTEXT_ID":"mainContent"}',
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/views/PlanOfCare/Controller/getGoalSearchResultPage`,
    `{"title_name":"Goals","I_GOAL_CLASS_NAME":"","I_GOAL_TYPE_NAME":"","I_CUR_PAGE":"${randomIntBetween(1, 10)}","I_CONTEXT_ID":"mainContent"}`,
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/PlanOfCare/Lookup/Controller/getBarrierViewPage`,
    '{"title_name":"Strengths/Barriers","I_CONTEXT_ID":"mainContent"}',
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/views/Lookup/Controller/getCodeTableConfig`,
    '{"I_CONTEXT_ID":"code_table_11","I_TAB_IDN":"11"}',
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/PlanOfCare/PlanOfCare/Controller/getSearchCareplanPage`,
    '{"title_name":"Care Plan Template","I_CONTEXT_ID":"mainContent"}',
  );
  failChecker(res);

  res = JIVA.get(`/cms/PlanOfCare/Controller/pocGoals?query=${randomItem(QUERY)}`);
  failChecker(res);

  res = JIVA.get(
    `/cms/PlanOfCare/Controller/pocGoals?query=${randomItem(QUERY)}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/PlanOfCare/Controller/pocIntervention?query=${randomItem(QUERY)}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/PlanOfCare/Controller/pocProblems?query=${randomItem(QUERY)}`
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/views/PlanOfCare/Controller/getCareplanResultsPage`,
    `{"configure_assmnt":"","I_CONTEXT_ID":"mainContent","careplan_title":"","I_MASTER_PROB_IDN":"","I_MASTER_PROB":"","I_GOAL_CLASS_IDN":"","I_GOALS_CLASS":"","I_GOALS_CODE_IDN":"","I_BILLING_IDN":"","I_BILLING":"","I_CUR_PAGE":"${randomIntBetween(1, 10)}","search":"Search"}`,
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/Assessment/Controller/getManageQuestionsHomePage`,
    '{"I_CONTEXT_ID":"mainContent"}',
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/Assessment/Assessment/Controller/getSearchAttributePage`,
    '{"title_name":"Attributes","I_CONTEXT_ID":"mainContent"}',
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/views/Assessment/Controller/getAttributeResultsPage`,
    `{"I_QUE_ATTR_NAME":"","addQueAttr":"addQueAttr","I_CUR_PAGE":"${randomIntBetween(1, 10)}","I_CONTEXT_ID":"mainContent","search":"search"}`,
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/Assessment/Assessment/Controller/getSearchAttributeValuesPage`,
    '{"title_name":"Attributes","I_CONTEXT_ID":"mainContent"}',
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/views/Assessment/Controller/getAttributeValuesResultsPage`,
    `{ "title_name": "Attribute Values", "I_TAG_DESC": "", "I_QUE_ATTR_VALUE": "", "I_QUE_ATTR_IDN": "", "I_CUR_PAGE": "${randomIntBetween(1, 10)}", "I_CONTEXT_ID": "mainContent", "search": "Search" }`,
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/Assessment/Assessment/Controller/getSearchQuestionPage`,
    '{"title_name": "Question/Answer", "I_CONTEXT_ID": "mainContent"}',
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/views/Assessment/Controller/getQuestionResultPage`,
    `{"mod_type": "ace", "configure_assmnt": "", "search_options": "less_options", "search_qtxt": "", "qstn_type": "", "search_criteria": "All", "qstn_start_range": "", "qstn_end_range": "", "from_action": "search", "I_QUE_ATTR_IDN": "", "frm_name": "searchQuestion_ace", "I_CUR_PAGE": "${randomIntBetween(1, 10)}", "I_CONTEXT_ID": "mainContent", "search": "Search}`,
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Payor/Controller/get_ceg_left_nav_links`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Payor/Controller/get_payor_name_autocomplete?is_text=0&max_results=${randomIntBetween(1, 20)}&query=${randomItem(QUERY)}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Payor/Controller/get_employer_name_autocomplete?is_text=0&max_results=${randomIntBetween(1, 20)}&query=${randomItem(QUERY)}&tpaIdn=`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Payor/Controller/get_payor_name_autocomplete_for_employer?is_text=0&max_results=${randomIntBetween(1, 20)}&query=${randomItem(QUERY)}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Payor/Controller/get_employer_details?currentPage=${randomIntBetween(1, 10)}&orderByField=name&sortBy=false&tpaIdn=0`
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/PlanOfCare/Controller/getManageCareplanPage`,
    '{"I_CONTEXT_ID": "mainContent"}',
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/WorkList/Controller/get_worklist_kafka`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/WorkList/Controller/get_worklist_search_fields`
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/WorkList/Controller/get_episodes_by_worklist_basic_search`,
    `{"sort_by":${randomItem(ORDER_BYS)},"order_by":"","send_fields":${randomItem(ORDER_BYS)},"worklist_idn":0,"sys_user_type":"","page_num":${randomIntBetween(1, 10)},"sel_enc_type":"","USER_IDN":0,"loggedin_user_idn":26127,"worklist_name":"","enc_selected_flag":false,"currDate":"04/09/2025"}`,
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/WorkList/Controller/get_logged_in_user_worklists?USER_IDN=${randomItem(USER_IDNS)}`
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/WorkList/Controller/get_episodes_count_by_worklist`,
    `{"sort_by":${randomItem(ORDER_BYS)},"order_by":"DUEDATEWIDGET","send_fields":${randomItem(ORDER_BYS)},"worklist_idn":0,"sys_user_type":"","page_num":${randomIntBetween(1, 10)},"sel_enc_type":"Appeal","USER_IDN":0,"loggedin_user_idn":26127,"worklist_name":"","enc_selected_flag":${randomItem(ORDER_BYS)},"currDate":"04/09/2025","search_flag":${randomItem(ORDER_BYS)}}`,
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/get_member_keyword_icons?mbr_list=${mbr_value}&mbr_list=${mbr_value}&mbr_list=${mbr_value}&mbr_list=${mbr_value}&mbr_list=${mbr_value}&mbr_list=81669&mbr_list=${mbr_value}&mbr_list=${mbr_value}&mbr_list=${mbr_value}&mbr_list=${mbr_value}`
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/WorkList/Controller/get_episodes_by_worklist_basic_search`,
    `{"sort_by":${randomItem(ORDER_BYS)},"order_by":"","send_fields":${randomItem(ORDER_BYS)},"worklist_idn":12152,"sys_user_type":"USERWORKLIST","page_num":${randomIntBetween(1, 10)},"sel_enc_type":"","USER_IDN":0,"loggedin_user_idn":26127,"worklist_name":"My Programs","enc_selected_flag":false,"currDate":"04/09/2025","search_flag":${randomItem(ORDER_BYS)},"total_episodes_count":10}`,
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/WorkList/Controller/get_episodes_count_by_worklist`,
    `{"sort_by":${randomItem(ORDER_BYS)},"order_by":"mbr_last_name","send_fields":${randomItem(ORDER_BYS)},"worklist_idn":12152,"sys_user_type":"USERWORKLIST","page_num":${randomIntBetween(1, 10)},"sel_enc_type":"BH-CM","USER_IDN":0,"loggedin_user_idn":26127,"worklist_name":"My Programs","enc_selected_flag":${randomItem(ORDER_BYS)},"currDate":"04/09/2025","search_flag":${randomItem(ORDER_BYS)},"total_episodes_count":10}`,
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/WorkList/Controller/get_episodes_by_worklist_basic_search`,
    `{"sort_by":${randomItem(ORDER_BYS)},"order_by":"","send_fields":${randomItem(ORDER_BYS)},"worklist_idn":12152,"sys_user_type":"USERWORKLIST","page_num":${randomIntBetween(1, 10)},"sel_enc_type":"CM","USER_IDN":0,"loggedin_user_idn":26127,"worklist_name":"My Programs","enc_selected_flag":${randomItem(ORDER_BYS)},"currDate":"04/09/2025","search_flag":${randomItem(ORDER_BYS)},"total_episodes_count":0}`,
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/WorkList/Controller/get_episodes_count_by_worklist`,
    `{"sort_by":${randomItem(ORDER_BYS)},"order_by":"mbr_last_name","send_fields":false,"worklist_idn":12152,"sys_user_type":"USERWORKLIST","page_num":${randomIntBetween(1, 10)},"sel_enc_type":"CM","USER_IDN":0,"loggedin_user_idn":26127,"worklist_name":"My Programs","enc_selected_flag":${randomItem(ORDER_BYS)},"currDate":"04/09/2025","search_flag":${randomItem(ORDER_BYS)},"total_episodes_count":0}`,
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/get_member_keyword_icons?mbr_list=${mbr_value}&mbr_list=${mbr_value}&mbr_list=${mbr_value}&mbr_list=${mbr_value}&mbr_list=${mbr_value}`
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/WorkList/Controller/get_episodes_by_worklist_basic_search`,
    `{"sort_by":${randomItem(ORDER_BYS)},"order_by":"","send_fields":${randomItem(ORDER_BYS)},"worklist_idn":0,"sys_user_type":"USERWORKLIST","page_num":${randomIntBetween(1, 10)},"sel_enc_type":"","USER_IDN":0,"loggedin_user_idn":26127,"worklist_name":"","enc_selected_flag":${randomItem(ORDER_BYS)},"currDate":"04/09/2025","search_flag":${randomItem(ORDER_BYS)},"total_episodes_count":3}`,
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/WorkList/Controller/get_episodes_count_by_worklist`,
    `{"sort_by":${randomItem(ORDER_BYS)},"order_by":"DUEDATEWIDGET","send_fields":${randomItem(ORDER_BYS)},"worklist_idn":0,"sys_user_type":"USERWORKLIST","page_num":${randomIntBetween(1, 10)},"sel_enc_type":"Appeal","USER_IDN":0,"loggedin_user_idn":26127,"worklist_name":"","enc_selected_flag":${randomItem(ORDER_BYS)},"currDate":"04/09/2025","search_flag":${randomItem(ORDER_BYS)},"total_episodes_count":3}`,
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/getAllowedEncTypeList`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/get_member_keyword_icons?mbr_list=${mbr_value}&mbr_list=${mbr_value}&mbr_list=${mbr_value}&mbr_list=${mbr_value}&mbr_list=${mbr_value}&mbr_list=81669&mbr_list=${mbr_value}&mbr_list=${mbr_value}&mbr_list=${mbr_value}&mbr_list=${mbr_value}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/getEpisodeViewStatusDetails?I_CLAIMANT_IDN=${randomItem(MBR_IDNS)}&I_ENCOUNTER_IDN=1625103&I_ENCTYPE_CD=${randomItem(ENC_TYPES)}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/get_member_name?mbr_idn=${randomItem(MBR_IDNS)}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getAllReadOnlyMembers`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/UMService/Controller/get_pr_workflow_design_config`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/UMService/Controller/get_peer_to_peer_review_code_config`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/AppealEpisode/Controller/getAppealListingDetails?enc_idn=1625103&enc_type=Appeal&mbr_idn=${randomItem(MBR_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/UMService/Controller/getDynamicNotesDetails?I_CLAIMANT_IDN=${randomItem(MBR_IDNS)}&I_ENCOUNTER_IDN=1625103`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Diagnosis/Controller/getConfigToDispStartDate`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Diagnosis/Controller/getDiagnosisData?encounter_idn=1625103&claimant_idn=${randomItem(MBR_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Document/Controller/getEpisodeDocuments?claimant_idn=${randomItem(MBR_IDNS)}&encounter_idn=1625103&source=episode`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/AppealEpisode/Controller/get_attach_all_drugs_config`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/AppealEpisode/Controller/get_view_parent_link_doc_appeal_config`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/AppealEpisode/Controller/getAppealPendDecisions`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/menuEpisodesList?I_CLAIMANT_IDN=${randomItem(MBR_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/get_workflowbanner_config`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Provider/Controller/getEncProvidersListing?encIdn=1625103&mbrIdn=${randomItem(MBR_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/getDynamicEncDetails?I_CLAIMANT_IDN=816697&I_ENC_IDN=1625103&encType=${randomItem(ENC_TYPES)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getConfigForMemberDemographics`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/AppealEpisode/Controller/fetchAppealButtonsConfig?encIdn=${randomItem(ENC_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/prworkflow_version_nd_peer_to_peer_check?enc_type=${randomItem(ENC_TYPES)}`
  );
  failChecker(res);
}
