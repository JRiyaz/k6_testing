// Creator: Grafana k6 Browser Recorder 1.0.7
// Creator: Grafana k6 Browser Recorder 1.0.7
import { sleep, group } from "k6";
import { check, fail } from "k6";
import http from "k6/http";
import {
  randomItem,
  randomIntBetween,
} from "https://jslib.k6.io/k6-utils/1.1.0/index.js";
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
      executor: "per-vu-iterations",
      vus: 1,
      iterations: 1,
      maxDuration: "1h",
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
  const response = JIVA.post("/cms/ZeSecurity/core_portal_login", payload);

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

  res = JIVA.get(`/cms/ZeUI/Patient/Controller/getAllReadOnlyMembers`);
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/++resource++mbr/src/member/partials/member-demographics-template.html?v=${getRandomNumber()}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/++resource++maappeal/src/maappeal/partials/appeal-episode-banner-details.html?v=${getRandomNumber()}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/check_member_info_edit_allowed?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Patient/Controller/get_centric_view_tab_config`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/menuEpisodesList?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Patient/Controller/get_workflowbanner_config`);
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Patient/Controller/getConfigForMemberDemographics`);
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/++resource++mbr/src/member/partials/breadcrumbs.html?v=${getRandomNumber()}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/++resource++mbr/src/member/partials/mbr-dashboard-all-tab.html?v=${getRandomNumber()}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Patient/Controller/getWidgetsConfig?view=Member`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1066570&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member&widget_name=${randomItem(WIDGET_NAMES)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/get_specific_widget_data?I_CLAIMANT_IDN=1066570&I_ENCOUNTER_IDN=0&I_ENC_TYPE_CD=&view=Member&widget_name=${randomItem(WIDGET_NAMES)}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/get_sdoh_widget_config?I_ENC_TYPE_CD=&view=Member`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/get_sdoh_category_icon_configuration`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/get_left_panel_widgets_config?view=Member`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENCOUNTER_IDN=0&I_ENC_TYPE_CD=&view=Member`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/get_utility_widget_data?enc_idn=0&enc_type=&mbr_idn=${randomItem(CLAIMANT_IDNS)}&view=Member`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/CareTeam/Controller/get_mcv_care_team_details?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getMoreLinksForMember?enc_type=claimant`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Activity/Controller/fetch_jiva_ccda_activity_data?act_status=Open&current_page=${randomIntBetween(1, 10)}&enc_idn=0&end_dt=&entityType=Member&mbr_idn=${randomItem(CLAIMANT_IDNS)}&start_dt=`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Activity/Controller/getActivityFieldAsDropdownConfig`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Activity/Controller/getAddActivityFormData?actIdn=229736&encIdn=0&encType=&entityType=Member&mbrIdn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Activity/Controller/getActivityTypes?encounter_type=&is_ra_activity=${randomItem(ORDER_BYS)}&mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Activity/Controller/getActivityPriority?encounter_type=&is_ra_activity=${randomItem(ORDER_BYS)}&mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/Calendar/Controller/getAvailableUser`,
    '{"params":{"I_USER_IDN":2,"I_START_DT":"03/01/2025","I_END_DT":"05/31/2025"}}'
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/ProviderPortal/Controller/getNoteTypeCheckConfiguration`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Medications/Controller/get_notes_screen_state_config_xml`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Notes/Controller/getNoteTypesDetails?enc_idn=0&mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/Sentinel/SREBaseController/triggerSentinelEventForValidation`,
    `{"mbr_idn":"${randomItem(CLAIMANT_IDNS)}","enc_type":"${randomItem(ENC_TYPES)}","event_name":"Validate Add Episode"}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/validateIfEncExistsForMember?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENC_TYPE_CD=${randomItem(ENC_TYPES)}`
  );
  failChecker(res);

  res = JIVA.get(`/cms/ZeUI/Episode/Controller/getUMAddEpisodeDetailsConfig`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/getConfigToHideTimeRequestAndDuedate`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/getEpisodeDetails?claimant_idn=${randomItem(CLAIMANT_IDNS)}&enc_type=${randomItem(ENC_TYPES)}`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Diagnosis/Controller/getConfigToDispStartDate`);
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Diagnosis/Controller/getDiagCodeTypes`);
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Episode/Controller/getConfigToShowSkipButton`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/getEpisodeLeftNavLinks?enc_type=${randomItem(ENC_TYPES)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/getEpisodeDiagOrProgramLinks?enc_type=${randomItem(ENC_TYPES)}`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Episode/Controller/getEpisodeStatus?enc_type=${randomItem(ENC_TYPES)}`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/mbrPrimaryCoverageInfo?claimant_idn=${randomItem(CLAIMANT_IDNS)}&enc_type_cd=${randomItem(ENC_TYPES)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/get_episodes_for_cvg_change_alert_without_multi_tenancy`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/get_episodes_to_show_coverage_change_alert`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Diagnosis/Controller/getDiseaseGroupValues?ICD_TYPE=hkenNO`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Diagnosis/Controller/getProgramValues?claimant_idn=${randomItem(CLAIMANT_IDNS)}&enc_type=${randomItem(ENC_TYPES)}&status=Open`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Diagnosis/Controller/getDiagCodeTypes?claimant_idn=${randomItem(CLAIMANT_IDNS)}&enc_type=${randomItem(ENC_TYPES)}&status=Open`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Diagnosis/Controller/getReasondropdown?claimant_idn=${randomItem(CLAIMANT_IDNS)}&enc_type=${randomItem(ENC_TYPES)}&status=Open`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/fillAssignToValues?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENC_STATUS=Referral&I_ENC_TYPE_CD=${randomItem(ENC_TYPES)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/getRecentEpisodesForCMDM?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENC_TYPE_CD=${randomItem(ENC_TYPES)}&I_PAGE_NUM=${randomIntBetween(1, 10)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Notes/Controller/getNoteTypesDetails?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/getReasonForRequest?claimant_idn=${randomItem(CLAIMANT_IDNS)}&enc_type=${randomItem(ENC_TYPES)}&status=Open`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/getAcuityLevelData?claimant_idn=${randomItem(CLAIMANT_IDNS)}&enc_type=${randomItem(ENC_TYPES)}&status=Open`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/getPatientClassData?claimant_idn=${randomItem(CLAIMANT_IDNS)}&enc_type=${randomItem(ENC_TYPES)}&status=Open`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/getEpisodeClass?enc_type=${randomItem(ENC_TYPES)}&payor_details=1985&payor_details=39214&payor_details=147793&payor_details=157146&payor_details=157539&payor_details=164881&payor_details=111&payor_details=111&payor_details=39214&payor_details=147793&payor_details=157146&payor_details=157539&payor_details=164881&payor_details=111&payor_details=111`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/getSeverityData?claimant_idn=${randomItem(CLAIMANT_IDNS)}&enc_type=${randomItem(ENC_TYPES)}&status=Open`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/getComplexityType?claimant_idn=${randomItem(CLAIMANT_IDNS)}&enc_type=${randomItem(ENC_TYPES)}&status=Open`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/getReferralSource?claimant_idn=${randomItem(CLAIMANT_IDNS)}&enc_type=${randomItem(ENC_TYPES)}&status=Open`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/getDefaultAssingTo?I_ENC_STATUS=Referral&I_ENC_TYPE_CD=${randomItem(ENC_TYPES)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getMbrCoverageList?claimant_idn=${randomItem(CLAIMANT_IDNS)}&enc_type=${randomItem(ENC_TYPES)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/fillAssignToValues?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENC_STATUS=Hold&I_ENC_TYPE_CD=${randomItem(ENC_TYPES)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/getDefaultAssingTo?I_ENC_STATUS=Hold&I_ENC_TYPE_CD=${randomItem(ENC_TYPES)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/fillAssignToValues?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENC_STATUS=Open&I_ENC_TYPE_CD=${randomItem(ENC_TYPES)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/getDefaultAssingTo?I_ENC_STATUS=Open&I_ENC_TYPE_CD=${randomItem(ENC_TYPES)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Diagnosis/Controller/getICD9CodesAndDesc?query=${randomItem(QUERY)}&diag_type=hkenNO&max_results=${randomIntBetween(1, 10)}&is_text=1&enc_idn=`
  );
  failChecker(res);

  res = JIVA.get(`/cms/ZeUI/Patient/Controller/get_sdoh_categories_config`);
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/ZeSecurity/get_api_token`);
  failChecker(res);

  res = JIVA.get(`/cms/ZeUI/Patient/Controller/get_logged_in_uroles`);
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Patient/Controller/getACOName`);
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Patient/Controller/getIdTypeValues`);
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Patient/Controller/getRaceValues`);
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Provider/Controller/getCountry`);
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Patient/Controller/getLanguageValues`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/get_relation_types?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Patient/Controller/getPreferredTimeValues`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getEditMemberDetails?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getMbrGenderIdentityValues?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getSexualOrientationValues?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getMbrPronounValues?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getCountyDetails?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Patient/Controller/getTimeZone?mbr_idn=${randomItem(CLAIMANT_IDNS)}`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getAddressTypeValues?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Provider/Controller/getCountry?mbr_idn=${randomItem(CLAIMANT_IDNS)}`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getPhoneTypeValues?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getEmailTypeValues?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getCoverageTypeValues?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getEligibilityStatusValues?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getFundingArrangementValues?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getMemberSuffixValues?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getMemberMaritalStatusValues?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getMemberGenderValues?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getMemberStatusValues?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getInsuranceTypeValues?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Patient/Controller/getPCMValues?mbr_idn=${randomItem(CLAIMANT_IDNS)}`);
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/QIDashboard/Controller/getCQNUsers?mbr_idn=${randomItem(CLAIMANT_IDNS)}`);
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Patient/Controller/getIdTypeValues?mbr_idn=${randomItem(CLAIMANT_IDNS)}`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getRaceValuesForAutoComplete?is_text=0&max_results=${randomIntBetween(1, 10)}&query=${randomItem(QUERY)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getRaceValuesForAutoComplete?is_text=0&max_results=${randomIntBetween(1, 10)}&query=${randomItem(QUERY)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getLanguagesValueForAutoComplete?is_text=0&max_results=${randomIntBetween(1, 10)}&query=${randomItem(QUERY)}`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Episode/Controller/getEpisodes?mbrIdn=${randomItem(CLAIMANT_IDNS)}`);
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Contact/Controller/show_contact_listing_info?currentPage=${randomIntBetween(1, 10)}&mbr_idn=${randomItem(CLAIMANT_IDNS)}&orderType=false&showPagination=false`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Contact/Controller/get_contact_doc_listing?contact_idn=45658`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getAllCoverageDetails?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_CUR_PAGE=${randomIntBetween(1, 10)}&I_SORTED_ORDER=1&I_SORTING_COLUMN=COV_EFFECTIVE_DT`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Keyword/Controller/getCoverageKeywordList?coverage_idn=431036&from_date=&mbr_idn=${randomItem(CLAIMANT_IDNS)}&order_by=UPD_DT&page_number=1&sort_by=true&to_date=`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Keyword/Controller/getKeywordSearchResultsForCoverage?coverage_idn=431036&keyword_cd=D&mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/++resource++message/src/message/js/controllers/nurseInboxMessageController.js?${getRandomNumber()}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Message/Controller/get_message_list?currentPage=${randomIntBetween(1, 10)}&isSent=N&mbrIdn=${randomItem(CLAIMANT_IDNS)}&msgType=All`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Message/Controller/get_dashboard_msg_count`);
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Message/Controller/getComposeMessageDetails?mbrIdn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Alerts/Controller/getMbrAlerts?CURRENT_PAGE=${randomIntBetween(1, 10)}&claimant_idn=${randomItem(CLAIMANT_IDNS)}&encounter_idn=0&end_date=&start_date=`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/CareTeam/Controller/get_create_care_team_btn_config`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/CareTeam/Controller/get_care_team_column_headers`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/CareTeam/Controller/get_mcv_care_team_Lisitng_details?currentPage=${randomIntBetween(1, 10)}&filterValues=%7B%7D&mbrIdn=${randomItem(CLAIMANT_IDNS)}&recPageLimit=10&sortBy=false&sortByColumn=created_date`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/CareTeam/Controller/care_team_view_history?care_team_idn=20419`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/CareTeam/Controller/get_care_team_view_notes?care_team_idn=20419&note_idn=0`
  );
  failChecker(res);

  res = JIVA.get(`/cms/ZeUI/CareTeam/Controller/get_prv_header_config`);
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/CareTeam/Controller/get_prv_user_header_config`);
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/CareTeam/Controller/get_user_search_header_config`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/CareTeam/Controller/get_prv_details?current_page=${randomIntBetween(1, 10)}&mbr_idn=${randomItem(CLAIMANT_IDNS)}&rec_per_page=${randomIntBetween(1, 10)}`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/CareTeam/Controller/get_create_care_team_conf`);
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/CareTeam/Controller/get_member_header_config`);
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/CareTeam/Controller/get_insured_header_config`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/CareTeam/Controller/get_member_details_for_care_team?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/CareTeam/Controller/get_care_team_title_config`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/CareTeam/Controller/get_pcp_details_for_mcv?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/CareTeam/Controller/get_pcm_details_for_mcv?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/CareTeam/Controller/get_contact_details_conf`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/CareTeam/Controller/get_contact_details_for_mcv?current_page=${randomIntBetween(1, 10)}&mbr_idn=${randomItem(CLAIMANT_IDNS)}&rec_per_page=${randomIntBetween(1, 10)}`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/CareTeam/Controller/get_case_manager_conf_data`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/CareTeam/Controller/get_case_manager_data_for_mcv?current_page=${randomIntBetween(1, 10)}&mbr_idn=${randomItem(CLAIMANT_IDNS)}&rec_per_page=${randomIntBetween(1, 10)}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Contact/Controller/getSmsRsnValues?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/get_member_phone_details?entity_active=Y&mbrIdn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Contact/Controller/get_contact_pref_days`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Contact/Controller/get_preferred_method_of_contact`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Contact/Controller/get_preferred_time`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getTextNotifContPrefHistDetails?current_page=${randomIntBetween(1, 10)}&enroll_idn=5000013&mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Activity/Controller/getAddActivityFormData?encIdn=0&encType=&entityType=Member&mbrIdn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Activity/Controller/getActivityTypes?enc_idn=0&encounter_type=&is_ra_activity=${randomItem(ORDER_BYS)}&mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Activity/Controller/getActivityPriority?enc_idn=0&encounter_type=&is_ra_activity=${randomItem(ORDER_BYS)}&mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Activity/Controller/getCallTypesMember?enc_idn=0&encounter_type=&is_ra_activity=${randomItem(ORDER_BYS)}&mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Activity/Controller/getReasonForCall?enc_idn=0&encounter_type=&is_ra_activity=${randomItem(ORDER_BYS)}&mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/Calendar/Controller/getAvailableUser`,
    '{"params":{"I_USER_IDN":2,"I_START_DT":"03/01/2025","I_END_DT":"05/31/2025"}}'
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/Calendar/Controller/getAvailableUser`,
    '{"params":{"I_USER_IDN":12124,"I_START_DT":"03/01/2025","I_END_DT":"05/31/2025"}}'
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Activity/Controller/getAddActivityFormData?actIdn=230383&encIdn=0&encType=&entityType=Member&mbrIdn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/Calendar/Controller/getAvailableUser`,
    '{"params":{"I_USER_IDN":2,"I_START_DT":"03/01/2025","I_END_DT":"05/31/2025"}}'
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member`
  );
  failChecker(res);

  res = JIVA.post(
    `/cms/ZeUI/CallTracking/Controller/getViewDetails`,
    `{"mbrIdn":"${randomItem(CLAIMANT_IDNS)}","encIdn":"","encType":"","fromDate":"03/10/2025","toDate":"04/09/2025","currentPage":${randomIntBetween(1, 10)},"callTypeCd":"","callcategryCd":"","contactTypeCd":"","spokeWith":"","callTrackId":"","userIdn":""}`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Patient/Controller/getMPIGroupID?idn=${randomItem(CLAIMANT_IDNS)}`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Procedure/Controller/fetch_procedure_list?claimantIdn=${randomItem(CLAIMANT_IDNS)}&currentPage=${randomIntBetween(1, 10)}&filterValues=%7B%7D&mpi_flag=&view=Member`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Procedure/Controller/fetch_dedup_proc_list?current_page=${randomIntBetween(1, 10)}&datasource=JIVA&enc_proc_idn=377074&mbr_idn=${randomItem(CLAIMANT_IDNS)}&mpi_flag=&proc_cd=99332&proc_type=CPT`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getGapsInCareDetailsForSecondaryScreen?current_page=${randomIntBetween(1, 10)}&mbr_idn=${randomItem(CLAIMANT_IDNS)}&sort_by=gaps_in_care_idn&user_context=me`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Patient/Controller/getGicStatusValues`);
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/Patient/Controller/getGapsInCareCodes`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/PlanOfCare/Controller/get_cp_titles?is_text=0&max_results=${randomIntBetween(1, 10)}&query=${randomItem(QUERY)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/PlanOfCare/Controller/get_poc_problem_ctgy?is_text=0&max_results=${randomIntBetween(1, 10)}&query=${randomItem(QUERY)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/PlanOfCare/Controller/get_problems?is_text=0&max_results=${randomIntBetween(1, 10)}&query=${randomItem(QUERY)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/PlanOfCare/Controller/get_category?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/PlanOfCare/Controller/get_priority_values?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/PlanOfCare/Controller/get_assigned_to_nurse?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/MTMEpisode/Controller/open_issue_list_data?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_CUR_PAGE=${randomIntBetween(1, 10)}&I_SORT_BY=MEDICATION_ISSUE_IDN&I_SORT_ORDER=DESC`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/MTMEpisode/Controller/inprogress_issue_list_data?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_CUR_PAGE=${randomIntBetween(1, 10)}&I_SORT_BY=SOURCE&I_SORT_ORDER=DESC`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/MTMEpisode/Controller/resolved_issue_list_data?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_CUR_PAGE=${randomIntBetween(1, 10)}&I_SORT_BY=UPD_DT&I_SORT_ORDER=DESC`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/MTMEpisode/Controller/get_medication_issue_code_data`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Medispan/Controller/getDrugName?query=${randomItem(QUERY)}&searchType=exhaustive`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/get_utility_widget_data?enc_idn=0&enc_type=&mbr_idn=${randomItem(CLAIMANT_IDNS)}&view=Member`
  );
  failChecker(res);

  res = JIVA.get(
    `/cms/ZeUI/Patient/Controller/checkEpisodeAccess?enctype=${randomItem(ENC_TYPES)}`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Episode/Controller/getEncGridDetails?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&currentPage=${randomIntBetween(1, 10)}&episodeActiveStatus=Y&episodeGridViewType=grouped_view&orderBy=${randomItem(ORDER_BYS)}&orderByField=orderby_date`
  );
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/ZeUser/Controller/get_sysuser_left_nav_links?tag_name=Manage_User`
  );
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/ZeUser/Controller/get_user_profile_data`);
  failChecker(res);
  res = JIVA.get(`/cms/ZeUI/ZeUser/Controller/get_user_preferences`);
  failChecker(res);
  res = JIVA.get(
    `/cms/ZeUI/Dashboard/Controller/show_user_preference_dashboard`
  );
  failChecker(res);
}
