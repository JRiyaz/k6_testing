// Creator: Grafana k6 Browser Recorder 1.0.7
import { sleep, group } from "k6";
import { check, fail } from "k6";
import exec from 'k6/execution';
import http from "k6/http";
import { randomItem, randomIntBetween, randomString } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';
import { Httpx } from "https://jslib.k6.io/httpx/0.1.0/index.js";

const HOST_NAME = "local.zeomega.org";
const BASE_URL = `https://${HOST_NAME}`;
const USER_NAME = "seladmin";
const PASSWORD = "Jiva@123";
// TIMEOUT => 60000 == 1 min
const JIVA = new Httpx({ baseURL: BASE_URL, timeout: 180000 });

JIVA.addHeaders({
  accept: "application/json, text/plain, */*",
  "x-usr-tz-offset": "21600",
  "x-usr-tz-timezone": "America/Chicago",
  "content-type": "application/json",
});

const COUNTRY_CODE = ['11Aug_Country R', '465', 'CB-Test_AlleryT', 'CKCI', 'Countries_TM', 'Country_11aug', 'Country_11aug11', 'CountryEdit', 'GrKFaP', 'TCD', 'USA'];
const ACO_IDNS = [12410, 12411, 95, 12413, 12414, 12415, 12416, 12417, 12418, 12419, 12420, 12421, 12422, 12423, 12424, 15, 11722, 11719, 12407, 1198, 11723, 11717, 12241, 1491, 1492, 1493, 1494, 1495, 12442, 12443, 12444];
const I_GROUP_IDNS = [19836, 84797, 116167, 116176, 116180, 208330, 142980, 84797, 85242, 19844, 19584, 9302, 9423, 4920, 4921, 5328, 5773, 6899, 8648, 8626, 8488, 8583, 7126, 8451, 5651, 4905, 5330, 101, 1670, 1107, 1599, 1809, 2789, 2790, 2791, 2792, 2793, 2794, 2795, 2796, 2797, 2799, 2800, 2948];
const MBR_IDNS = [185941, 769571, 771026, 771026, 776994, 781394, 791258, 793801, 794460, 799357, 185876, 768209, 768211, 768611, 769748, 771641, 776743, 781807, 782125, 782126, 783754, 787429, 788888, 789266, 789295, 789713, 789714, 789716, 789721, 789722, 789723, 789725, 789726, 789730, 791261, 791920, 791969, 794328, 794457, 794461, 794570, 862539, 863283, 863309, 863320, 863960, 863967, 864265, 865373, 865374, 865383, 865384, 865385, 865386, 865389, 865396, 865397, 865400, 865401, 865405, 865700, 865767, 865884, 865885, 865886, 865887, 865888, 865889, 865890, 865893, 865894, 865895, 865913, 865915, 865916, 865917, 865990, 865992, 865994, 865997, 865999, 866004, 866006, 866007, 866033, 866041, 1046528, 1047290, 1047291];
const CLAIMANT_IDNS = [158442, 158452, 162058, 162288, 162387, 185941, 229750, 313915, 572658, 577142, 607456, 620853, 710571, 762264];
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
const USER_IDNS = [2, 12150, 22178, 22651, 22845, 25293, 26127, 27641, 27690, 29939, 30140, 32812, 35087, 35213, 35839, 5030120, 5034183, 5037043, 5037594, 5040254, 5040820, 5041484, 5041938, 5041953, 5042376, 5055353, 5057793, 5058679, 5059649, 5075584, 5075585, 5076058, 5076059, 5086760, 5125854, 5136827, 5138351, 5140877, 5146207, 5153142];
const ENC_IDNS = [20, 102, 112, 10216, 10225, 10229, 10240, 10284, 10287, 10315, 10330, 10346, 10352, 10541, 10616, 10681, 10706, 10712, 10803, 10804, 10812, 10888, 10891, 11557, 11558, 11614, 11793, 12051, 12056, 12101, 12140, 12153, 12170, 12321, 12331, 13973, 14141, 14208, 14209, 14311, 14394, 14482, 14485, 14517, 14704, 15166, 15167, 16574, 16842, 18430];
const I_ACO_IDNS = [12413, 12414, 12415, 12416, 12417, 12418, 12419, 12420, 12421, 12422, 12423, 12424, 15, 11722, 11719, 12407, 1198, 11723, 11717, 12241, 1491, 1492, 1493, 1494, 1495, 12442, 12443, 12444, 12446, 12447, 12449, 12450, 12451, 12453, 12535, 12536, 12537, 12539, 12540, 12542, 12543, 12544, 12546, 12581, 12582, 12583, 12585, 12586, 12588, 12589, 12590, 12592, 12448, 95];
const WIDGET_NAMES = ["LabDataExtended", "Procedures", "Notes", "MedicationAllergies", "ConsolidatedMedicationsList", "OtherAllergies", "DocumentsData", "AlertsData", "FunctionalAndCognitiveStatus", "AdvanceDirectives", "VitalSignsDirective", "Problems", "CareReminder", "AssessmentList", "ProblemList", "SocialDeterminants", "CareQualityGapsData", "HccCodesData"];

function getRandomNumber() {
  return Date.now() + randomIntBetween(1, 999999);
}

function failChecker(res) {
  if (!check(res, { "status code MUST be 200 or 201 or 204": (res) => res.status === 200 || res.status === 201 || res.status === 204 })) {
    console.log(`VUS: ${exec.instance.vusActive}  ==> status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
  }
  sleep(0.5);
}

export const options = {
  // vus: 30,
  stages: [
    { target: 2, duration: "10m" },
    { target: 30, duration: "2h30m" },
    { target: 2, duration: "20m" },
  ],
  // scenarios: {
  //   contacts: {
  //     executor: 'per-vu-iterations',
  //     vus: 1,
  //     iterations: 1,
  //     maxDuration: '1h',
  //   },
  // },

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

  group('page_1', function () {
    res = JIVA.get(
      `/++resource++core/nurse_login/index.html?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUser/Controller/check_user_loggedin`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUser/Controller/getLoginConfigData?login_type=np`
    );
    failChecker(res);

    res = JIVA.get(
      `/++resource++core/nurse_login/++resource++ngui/src/css/vendor/bootstrap/bootstrap.min.css?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/++resource++core/nurse_login/++resource++ngui/src/css/bastion.css?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/++resource++core/nurse_login/++resource++ngui/src/css/vendor/font-awesome.css?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/++resource++core/nurse_login/++resource++ngui/src/css/vendor/jiva-icon-fonts.css?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUser/Controller/get_logo_data?logo_types=NP_LOGIN_TOP_LEFT,NP_LOGIN_TOP_RIGHT,NP_LOGIN_JIVA`
    );
    failChecker(res);

    res = JIVA.get(`/cms/ZeSecurity/get_destination`);
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/getCustomerLogoDetails?logo_type=NP_LOGIN_TOP_LEFT`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/getCustomerLogoDetails?logo_type=NP_LOGIN_TOP_RIGHT`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/getCustomerLogoDetails?logo_type=NP_LOGIN_JIVA`
    );
    failChecker(res);
  });

  group('page_2', function () {
    res = JIVA.get(`/cms/ZeUI/core_portal`);
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++ngui/src/js/vendor/zonejs/zone.umd.js?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/styles/Ze_basic-style.css?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++ngui/src/css/vendor/bootstrap/bootstrap.min.css?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++ngui/src/css/vendor/fullcalendar.min.css?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++ngui/src/css/vendor/font-awesome.css?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++ngui/src/css/vendor/jiva-icon-fonts.css?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++ngui/src/css/vendor/angular-toastr.css?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++ngui/src/css/vendor/ui-grid/ui-grid.min.css?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/++resource++webjscripts/RoboHelp_CSH.js?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++ngui/src/js/require-map.js?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++ngui/src/js/business-require-map.js?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++clientjiva/src/ngui/js/client-require-map.js?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++ngui/src/js/vendor/require/require.min.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++ngui/src/js/main.js?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/require/domReady.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/require/json.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++ngui/src/js/mfmain.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/jquery/jquery.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/objectPath.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/require/text.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/underscorejs/underscore-min.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/angular-translate/messageformat.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/views/jscript/bubbling2/build/accordion/assets/accordion.css?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/jiva.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/controllers/sreValidationModalController.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jivaRouteChangeDirective.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/services/jivaExceptionServices.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jTitleDirective.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/rcSubmit.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jVar.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jvarDefaultSelect.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jivaNgClick.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jTime.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jIframe.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jClock.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jBindRelativeTime.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jAutoInvoke.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jBtn.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jResizeSeparator.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jLabel.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jHeader.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jWidget.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jHeight.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jDateMultiSelect.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jMultiselectAutocomplete.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jFileUpload.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jLeftNavigation.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jEpisodeCloseDirective.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jScrollingTabDirective.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jxsltProcessorDirective.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jServiceQualityMeasuresWidget.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jInview.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jAssessmentTemplate.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jScore.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jCountryStateSelect.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jToggleHeaderOnClick.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jScrollInToView.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/directives/jStaticSentinelVirtualScroller.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++ngui/src/css/style.css?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++ngui/src/js/services/jivaRouteResolverService.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++dashboard/src/ngdashboard/js/services/dashboardServices.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++message/src/message/js/services/messageServices.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++alerts/src/alerts/js/services/alertsServices.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/moment/moment-timezone-with-data.min.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/angular-fileUpload/jquery.iframe-transport.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/angular-fileUpload/jquery.fileupload.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/angular-fileUpload/jquery.fileupload-validate.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/angular-fileUpload/jquery.fileupload-process.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/fullcalendar.min.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/angular/angular.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/ui-grid/angular-ui-grid.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/angular-fileUpload/angular-file-upload.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/angular-dragdrop/angular-dragdrop.min.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/angular-inview/inview.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/scrolling-tab/scrolling-tabs.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/powerbi.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/angular/angular-compile-ext-pre-assign-bindings.min.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/ui-router/angular-ui-router.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/ngcal.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/uiutils/ui-utils.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/rcForm/rcDisabled.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/angular-google-maps/ng-map.min.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/angular-translate/angular-translate-interpolation-messageformat.min.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++ngui/src/js/filters/partition.js?${getRandomNumber()}`
    );
    failChecker(res);

    // res = JIVA.get(
    //   `/cms/ZeUI/ZeUI/getConfigData?usrTz=Asia/Kolkata`
    // );
    // failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/views/jscript/Ze_validation.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/Ze_common.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/Ze_claim.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/Ze_episode.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/Ze_fax.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/Ze_provider_portal.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/Ze_user.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/Ze_admin.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/Ze_sentinel.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/Ze_srebase.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/Ze_scheduler.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/Ze_AppCtrl.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/Ze_POC.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/Ze_ace_templates.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/Ze_ace.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/Ze_notification.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/yui28/build/accordionview/accordionview-min.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/yuidatatablegrouper/groupeddatatable-min.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/bubbling2/build/dispatcher/dispatcher-min.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/Treeble-min.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/Ze_thirdparty.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/jscript/MASS_scripts.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/views/styles/ze-skin-sprite.png?${getRandomNumber()}`
    );
    failChecker(res);
  });

  group('page_3', function () {
    res = JIVA.get(
      `/cms/ZeUI/++resource++um/src/um/partials/service-request.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++um/src/um/partials/stay-request.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++prv/src/provider/partials/attach-provider-listing.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++appeal/src/appeal/partials/episode-details-non-edit.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++appeal/src/appeal/partials/episode-add-step-two.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++appeal/src/appeal/partials/appeal-stay-request.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++appeal/src/appeal/partials/appeal-service-request.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++ngui/src/partials/header.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/tinymce/js/tinymce/themes/modern/theme.min.js?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/tinymce/js/tinymce/plugins/spellchecker/plugin.min.js?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/tinymce/js/tinymce/plugins/paste/plugin.min.js?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/tinymce/js/tinymce/plugins/template/plugin.min.js?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++dashboard/src/ngdashboard/partials/dashboard.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++dashboard/src/ngdashboard/js/controllers/dashboardController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++workflow/src/worklist/js/controllers/transWorklistPopOverController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++diag/src/diagnosis/js/controllers/advDiagSearchController.js?${getRandomNumber()}`
    );
    failChecker(res);
  });

  group('page_4', function () {

    res = JIVA.get(
      `/cms/++resource++um/src/um/js/controllers/advancedServiceCodeSearchController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Message/Controller/get_dashboard_msg_count`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/getCustomerLogoDetails?logo_type=NP_MENU_JIVA`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++ngui/src/js/vendor/tinymce/js/tinymce/skins/lightgray/skin.min.css?JSTimeStamp=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++workflow/src/worklist/js/services/workListServices.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++prvportal/src/prvportal/js/services/prvportalServices.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++dashboard/src/ngdashboard/js/directives/dashboardDirective.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++prvportal/src/prvportal/js/directives/prvportalDashboardDirective.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++enc/src/episode/js/directives/episodeDirectives.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++diag/src/diagnosis/js/services/diagnosisServices.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++ce/src/fax/js/services/faxServices.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++maappeal/src/maappeal/js/directives/maappealDashboardDirective.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++magrievance/src/magrievance/js/directives/magrievanceDashboardDirective.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++prvportal/src/prvportal/js/controllers/attachPrvController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++enc/src/episode/js/controllers/episodeDashboardController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++enc/src/episode/js/controllers/episodeAbstractController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++mbr/src/member/js/services/memberServices.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++um/src/um/js/directives/mcvServiceListDirective.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++diag/src/diagnosis/js/directives/episodeDiagnosisList.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++poc/src/poc/js/directives/problemList.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++mtm/src/mtm/js/directives/medicationIssueListWidget.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++mtm/src/mtm/js/directives/medicationActionPlanWidget.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++activity/src/activity/js/directives/activityDirective.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++ce/src/notification/js/directives/notificationDirective.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++edumaterial/src/edumaterial/js/directives/eduDirective.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++docmgr/src/docmgr/js/directives/docmgrDirectives.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++alerts/src/alerts/js/directives/alertsDirectives.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++mbr/src/member/js/directives/membercentricViewDirectives.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++guidelines/src/guidelines/js/services/guidelinesServices.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++user/src/user/js/services/powerBiUserService.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++magrievance/src/magrievance/js/services/magrievanceServices.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++magrievance/src/magrievance/js/controllers/magrievanceTatFilterPopupController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++magrievance/src/magrievance/js/controllers/magrievanceTatUserPopOverController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++mbr/src/member/js/directives/dateRangeDirectives.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++maappeal/src/maappeal/js/services/maappealServices.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++maappeal/src/maappeal/js/controllers/maappealTatFilterPopupController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++maappeal/src/maappeal/js/controllers/maappealTatUserPopOverController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Dashboard/Controller/get_widget_controller_map`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Dashboard/Controller/get_widget_end_point_map`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Dashboard/Controller/get_widget_titles`
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/getDashboardConfig`,
      '{"user_datetime":"04/04/2025 13:34"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/ZeUser/Controller/getLoggedInUserForngDashboard`,
      '{"user_datetime":"04/04/2025 13:34"}'
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++ngui/src/partials/session-modal.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/getWidgetsData`,
      '{"user_datetime":"04/04/2025 13:34","lazyLoad":true}'
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++dashboard/src/ngdashboard/partials/widgets/incepisodesandfaxcount.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++dashboard/src/ngdashboard/partials/widgets/faxstatspiegraphnew.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++dashboard/src/ngdashboard/partials/widgets/turnaroundtimenew.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++dashboard/src/ngdashboard/partials/widgets/nurseworkflow.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++dashboard/src/ngdashboard/partials/widgets/myactivities.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++dashboard/src/ngdashboard/partials/widgets/carereminder.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++dashboard/src/ngdashboard/partials/widgets/myepisodeswithduedtgraph.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++dashboard/src/ngdashboard/partials/widgets/myepisodeswithoutduedtgraph.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++maappeal/src/maappeal/partials/openmaappealsforuser.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++maappeal/src/maappeal/partials/maappealepisodeduecount.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++maappeal/src/maappeal/partials/maappealreviewstatuscount.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++maappeal/src/maappeal/partials/maappealwithduedtgraph.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++maappeal/src/maappeal/partials/maappealepisodesaging.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++maappeal/src/maappeal/partials/maappealdecisiontatrategraph.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++magrievance/src/magrievance/partials/magrievanceopenepisodecount.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++magrievance/src/magrievance/partials/magrievancesbyrequesttypeprioritygraph.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++magrievance/src/magrievance/partials/magrievanceepisodesaging.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++magrievance/src/magrievance/partials/magrievancedecisiontatrategraph.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_nurseworkflow_widget`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:04:32.370Z","uri":"#/dashboard","widget":"nurseworkflow","user_datetime":"04/04/2025 13:34"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_myactivities_widget`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:04:33.252Z","uri":"#/dashboard","widget":"myactivities","user_datetime":"04/04/2025 13:34"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_fax_turnaround_time_widget`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:04:35.592Z","uri":"#/dashboard","widget":"turnaroundtimenew","user_datetime":"04/04/2025 13:34"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_fax_stats_piegraph_widget`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:04:35.706Z","uri":"#/dashboard","widget":"faxstatspiegraphnew","user_datetime":"04/04/2025 13:34"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_carereminder_widget`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:04:35.874Z","uri":"#/dashboard","widget":"careremindernursewidget","user_datetime":"04/04/2025 13:34"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_incomplete_episode_fax_widget`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:04:35.881Z","uri":"#/dashboard","widget":"incepisodesandfaxcount","user_datetime":"04/04/2025 13:34"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_myepisodes_with_duedt_widget`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:05:08.930Z","uri":"#/dashboard","widget":"myepisodeswithduedtgraph","user_datetime":"04/04/2025 13:35"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_myepisodes_without_duedt_widget`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:05:27.620Z","uri":"#/dashboard","widget":"myepisodeswithoutduedtgraph","user_datetime":"04/04/2025 13:35"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_open_maappeal_episode_count`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:05:37.415Z","uri":"#/dashboard","widget":"maappealepisodeduecount","user_datetime":"04/04/2025 13:35"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_open_maappeal_episode_of_an_user`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:05:39.489Z","uri":"#/dashboard","widget":"openmaappealsforuser","user_datetime":"04/04/2025 13:35"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_maappeal_episode_review_status_count`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:05:39.496Z","uri":"#/dashboard","widget":"maappealreviewstatuscount","user_datetime":"04/04/2025 13:35"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/maappeal_by_request_type_and_priority`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:05:45.450Z","uri":"#/dashboard","widget":"maappealbyrequesttypeprioritygraph","user_datetime":"04/04/2025 13:35"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_maappeal_duedt_widget`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:05:47.645Z","uri":"#/dashboard","widget":"maappealwithduedtgraph","user_datetime":"04/04/2025 13:35"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_maappeal_episodes_aging_widget`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:05:53.468Z","uri":"#/dashboard","widget":"maappealepisodesaging","user_datetime":"04/04/2025 13:35"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_maappeal_decision_tat_rate`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:00.938Z","uri":"#/dashboard","widget":"maappealdecisiontatrategraph","user_datetime":"04/04/2025 13:36"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_magrievance_episode_due_date_count`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:01.884Z","uri":"#/dashboard","widget":"magrievanceepisodeduedatecount","user_datetime":"04/04/2025 13:36"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_magrievance_count_for_pending_for_review`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:03.164Z","uri":"#/dashboard","widget":"magrievancependingreviewepisodescount","user_datetime":"04/04/2025 13:36"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_magrievance_open_episode_count`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:03.166Z","uri":"#/dashboard","widget":"magrievanceopenepisodecount","user_datetime":"04/04/2025 13:36"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_magrievance_due_dt_graph_data`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:03.173Z","uri":"#/dashboard","widget":"magrievancewithduedtgraph","user_datetime":"04/04/2025 13:36"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/magrievances_by_request_type_and_priority`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:03.670Z","uri":"#/dashboard","widget":"magrievancesbyrequesttypeprioritygraph","user_datetime":"04/04/2025 13:36"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_grievance_episodes_aging_data`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:03.674Z","uri":"#/dashboard","widget":"magrievanceepisodesaging","user_datetime":"04/04/2025 13:36"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_magrievance_decision_tat_rate`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:04.834Z","uri":"#/dashboard","widget":"magrievancedecisiontatrategraph","user_datetime":"04/04/2025 13:36"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_open_um_cases_widget_data_todo`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:09.885Z","uri":"#/dashboard","widget":"openumcaseswidget","user_datetime":"04/04/2025 13:36"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_um_aging_by_pending_reasons_data`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:18.271Z","uri":"#/dashboard","widget":"umagingbypendingreasonswidget","user_datetime":"04/04/2025 13:36"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_um_decision_tat_rate`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:20.680Z","uri":"#/dashboard","widget":"umdecisiontatrategraph","user_datetime":"04/04/2025 13:36"}'
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Dashboard/Controller/get_um_pr_at_risk_widget_data_todo`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:25.555Z","uri":"#/dashboard","widget":"umprstatuswidget","user_datetime":"04/04/2025 13:36"}'
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getAllReadOnlyMembers`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++mbr/src/member/partials/add-member.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++mbr/src/member/js/controllers/memberAddController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++mbr/src/member/js/controllers/advancedGroupSearchController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++ce/src/fax/js/directives/faxDirective.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++mbr/src/member/js/controllers/memberSearchModalController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++mbr/src/member/js/directives/memberSearchDirectives.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++mbr/src/member/js/controllers/memberAdvancedSearchController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++mbr/src/member/js/directives/insdMbrCvgInfoDirectives.js?${getRandomNumber()}`
    );
    failChecker(res);
  });

  group('page_5', function () {
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getAcoAssociationConf`
    );
    failChecker(res);
    res = JIVA.get(`/cms/ZeUI/Patient/Controller/getACOName`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/get_relation_types`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getCauseOfDeathEnabledStatus`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/get_logged_in_uroles`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getAddressTypeValues`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getMemberSuffixValues`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getMemberMaritalStatusValues`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getMemberGenderValues`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getMemberStatusValues`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getInsuranceTypeValues`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getPCMValues`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getAddressTypeValues`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Address/Controller/get_country_code`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getCountyDetails`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getPhoneTypeValues`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getEmailTypeValues`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getMbrGenderIdentityValues`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getSexualOrientationValues`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getMbrPronounValues`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getEligibilityStatusValues`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getFundingArrangementValues`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getCoverageTypeValues`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/ProviderPortal/Controller/getNoteTypeCheckConfiguration`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++ngui/src/partials/custom_udf.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Medications/Controller/get_notes_screen_state_config_xml`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Notes/Controller/getNoteTypesDetails?enc_idn=0`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Address/Controller/get_state_codes?country_cd=${randomItem(COUNTRY_CODE)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getEthicityForAutoComplete?is_text=0&max_results=${randomIntBetween(1, 20)}&query=${randomString(4)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getRaceValuesForAutoComplete?is_text=0&max_results=${randomIntBetween(1, 20)}&query=${randomString(4)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getLanguagesValueForAutoComplete?is_text=0&max_results=${randomIntBetween(1, 20)}&query=${randomString(4)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getCoverageDetailsGroup?is_text=0&max_results=${randomIntBetween(1, 20)}&query=${randomString(4)}&GROUP_ATTR_TYPE=group_name`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getMemberACODetails?ACO_IDN=${randomItem(ACO_IDNS)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/fillInsuranceType?I_GROUP_IDN=${randomItem(I_GROUP_IDNS)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++mbr/src/member/partials/member-search-pop-up.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++mbr/src/member/partials/member-search.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getDefaultFilterCheckingOpt`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getConfigForMemberSearchDropDown?context=${randomItem(CONTEXT_DROPDOWN)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/is_adv_mbr_search_default`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getPCPDetailsForCoverage?I_PRV_NAME=${randomString(4)}&I_SEARCH_COUNT=${randomIntBetween(1, 10)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++calltracking/src/calltracking/partials/calltrack-mbr-search.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++calltracking/src/calltracking/js/controllers/calltrackingController.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++calltracking/src/calltracking/js/services/calltrackingServices.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++mbr/src/member/js/directives/memberDirectives.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++mbr/src/member/js/controllers/clinicalAdvanceDirectiveFiltersController.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++mbr/src/member/js/controllers/functionalCognitiveStatusFiltersController.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++mbr/src/member/js/controllers/mbrKeywordIconsController.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++contact/src/contact/js/controllers/mbrBannerContactInfoController.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++contact/src/contact/js/services/contactServices.js?${getRandomNumber()}`
    );
    failChecker(res);
  }
  );

  group('page_6', function () {
    res = JIVA.get(
      `/cms/ZeUI/CallTracking/Controller/get_calltrac_left_nav_links?tag_name=Call_Tracking`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++calltracking/src/calltracking/partials/calltrac-mbr-list.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/patientFirstName?query=${randomString(4)}`
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Patient/Controller/episodeIntakeMbrSrch`,
      `{"params":{"currentPage":1,"searchParam":{"I_FIRST_NAME":"${randomString(4)}"},"orderByField":"","orderBy":false,"context":"EpisodeIntake"}}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++calltracking/src/calltracking/partials/view-call-details.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++calltracking/src/calltracking/js/controllers/viewCallDetailController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++calltracking/src/calltracking/js/controllers/viewCallSummaryController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++calltracking/src/calltracking/js/controllers/callSearchFilterController.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.post(
      `/cms/ZeUI/CallTracking/Controller/getCallTrackHistory`,
      '{"encIdn":"","encType":"","fromDate":"03/05/2025","toDate":"04/04/2025","currentPage":1,"callTypeCd":"","callcategryCd":"","contactTypeCd":"","spokeWith":"","callTrackId":"","userIdn":""}'
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++calltracking/src/calltracking/partials/view-call-summary.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/CallTracking/Controller/getViewCallSummary?act_idn=&call_idn=34272&claimant_idn=1096570`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/get_member_name?mbr_idn=${randomItem(MBR_IDNS)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++calltracking/src/calltracking/partials/mbr-call-details.html?v=${getRandomNumber()}`
    );
    failChecker(res);
  }
  );

  group('page_7', function () {
    res = JIVA.post(
      `/cms/ZeUI/CallTracking/Controller/getViewDetails`,
      '{"mbrIdn":"1096570","encIdn":"1550135","encType":"SocialCare","fromDate":"03/05/2025","toDate":"04/04/2025","currentPage":1,"callTypeCd":"","callcategryCd":"","contactTypeCd":"","spokeWith":"","callTrackId":"","userIdn":""}'
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++mbr/src/member/partials/member-demographics-template.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getConfigForMemberDemographics`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++mbr/src/member/partials/member-abstract.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getMPIData?i_claimant_idn=${randomItem(CLAIMAT_IDNS)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/CallTracking/Controller/getViewCallSummary?act_idn=&call_idn=34272&claimant_idn=1096570&enc_type=SocialCare`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++calltracking/src/calltracking/partials/add-call.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++calltracking/src/calltracking/js/controllers/addCallController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++sms/src/sms/js/services/smsServices.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/ProviderPortal/Controller/getNoteTypeCheckConfiguration`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Sms/Controller/get_member_opt_phone_number?mbr_idn=${randomItem(MBR_IDNS)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/CallTracking/Controller/get_calltrack_code_value_details`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/CallTracking/Controller/getCallTrackDetails?claimant_idn=1096570&enc_type=SocialCare&encounter_idn=1550135`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/CallTracking/Controller/get_prerequisites_for_route_to_cqn_add_call`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Notes/Controller/getNoteTypesDetails?mbr_idn=${randomItem(MBR_IDNS)}`
    );
    failChecker(res);
  }
  );

  group('page_8', function () {
    res = JIVA.get(
      `/cms/ZeUI/CallTracking/Controller/getCallTypes?enc_idn=1550135&encounter_type=SocialCare&mbr_idn=1096570`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/CallTracking/Controller/getContactTypes?enc_idn=1550135&encounter_type=SocialCare&mbr_idn=1096570`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/CallTracking/Controller/getCallCategories?enc_idn=1550135&encounter_type=SocialCare&mbr_idn=1096570`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/CallTracking/Controller/getCallStatus?enc_idn=1550135&encounter_type=SocialCare&mbr_idn=1096570`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/CallTracking/Controller/getCallUnsuccessRsn?enc_idn=1550135&encounter_type=SocialCare&mbr_idn=1096570`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/ProviderPortal/Controller/getNoteTypeCheckConfiguration`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Activity/Controller/getActivityTypes?enc_idn=1550135&encounter_type=SocialCare&mbr_idn=1096570`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getMemberDemographicsData?mbrIdn=${randomItem(MBR_IDNS)}`
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Calendar/Controller/getAvailableUser`,
      '{"params":{"I_USER_IDN":2,"I_START_DT":"03/01/2025","I_END_DT":"05/31/2025"}}'
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Notes/Controller/getNoteTypesDetails?enc_idn=0&mbr_idn=1096570`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/CallTracking/Controller/getCallTracKBroadTopics?enc_idn=1550135&inq_type_idn=2&mbr_idn=1096570`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/CallTracking/Controller/getSpecificTopic?broad_topic_idn=24&enc_idn=1550135&mbr_idn=1096570`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/CallTracking/Controller/get_assign_nurse_list?claimant_idn=1096570&enc_type=SocialCare&encounter_idn=1550135`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/AutoComplete/Controller/getActivityCodes?ACTIVITY_TYPE=Episode&IS_OUTREACH=&I_BILLING_IDN=&I_ENC_TYPE_CD=SocialCare&I_INTERVENTION_IDN=&enc_idn=1550135&mbr_idn=1096570&query=te`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++ce/src/fax/partials/fax-view.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++ce/src/fax/js/controllers/faxListingController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++ce/src/fax/js/controllers/addfaxController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++ce/src/fax/js/controllers/faxAddLabelController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++ce/src/fax/js/controllers/faxMemberCoverageController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++mbr/src/member/js/controllers/memberAbstractController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++ce/src/fax/js/controllers/faxModifyDocumentController.js?${getRandomNumber()}`
    );
    failChecker(res);
  }
  );

  group('page_9', function () {
    res = JIVA.get(
      `/cms/ZeUI/++resource++ce/src/fax/partials/fax-section.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++ce/src/fax/partials/fax-member-search-with-preview.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Fax/Controller/get_file_types_allowed`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Fax/Controller/fax_split_enabled`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++ce/src/fax/partials/pdf-preview.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++ce/src/fax/partials/fax-member-search.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++ce/src/fax/partials/add-fax.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(`/cms/ZeUI/getpartialPerm`);
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Fax/Controller/get_file_types_allowed`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Fax/Controller/fax_split_enabled`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++billing/src/billing/partials/billing-report.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++billing/src/billing/js/controllers/billingReportController.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++billing/src/billing/js/services/billingReportService.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++billing/src/billing/js/services/billingServices.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Episode/Controller/get_required_enc_types_as_json`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Billing/Controller/get_billing_admin_group_list`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Billing/Controller/get_billing_admin_group_list?tpaIdn=${randomItem(PAYOR_IDNS)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Billing/Controller/manage_corporate_billing_rpts_ng?I_ENC_TYPE_CD=Appeal&I_ENC_TYPE_CD=BH-CM&I_ENC_TYPE_CD=BH-IP&I_ENC_TYPE_CD=BH-OP&I_ENC_TYPE_CD=CM&I_ENC_TYPE_CD=DM&I_END_DATE=04%2F04%2F2025&I_GROUP_IDN=0&I_PAYOR_IDN=39213&I_START_DATE=01%2F01%2F2021&I_ENC_TYPE_CD=BH-CM&I_ENC_TYPE_CD=BH-IP&I_ENC_TYPE_CD=BH-OP&I_ENC_TYPE_CD=CM&I_ENC_TYPE_CD=DM`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++billing/src/billing/partials/search-billing-client.html?v=${getRandomNumber()}`
    );
    failChecker(res);
  });

  group('page_10', function () {
    res = JIVA.get(
      `/cms/++resource++billing/src/billing/js/controllers/searchBillingClientController.js?${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++billing/src/billing/js/services/searchBillingClientService.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++billing/src/billing/partials/customized-billing-rates.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++billing/src/billing/js/controllers/customizedBillingRatesController.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++billing/src/billing/js/services/customizedBillingRatesService.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Payor/Controller/fetch_ceg_billing_details?entityIdn=39213&entityType=client`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++billing/src/billing/partials/create-invoice.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++billing/src/billing/js/controllers/createInvoiceController.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/AutoComplete/Controller/payorSearch?is_text=0&max_results=${randomIntBetween(1, 20)}&query=${randomString(4)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++billing/src/billing/partials/internal-billing-report.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++billing/src/billing/js/controllers/internalBillingReportController.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++billing/src/billing/js/services/internalBillingReportService.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Episode/Controller/get_required_enc_types_as_json`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Payor/Controller/get_payor_name_autocomplete_for_group?is_text=0&max_results=${randomIntBetween(1, 20)}&query=${randomString(4)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++billing/src/billing/partials/edit-billing.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++billing/src/billing/js/controllers/editBillingController.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++billing/src/billing/js/controllers/showEncounterBillController.js?${getRandomNumber()}`
    );
    failChecker(res);
  }
  );

  group('page_11', function () {
    res = JIVA.get(
      `/cms/++resource++billing/src/billing/js/services/editBillingCtrlService.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/patientFirstName?is_text=0&max_results=${randomIntBetween(1, 20)}&query=${randomString(4)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/patientLastName?is_text=0&max_results=${randomIntBetween(1, 20)}&query=${randomString(4)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Billing/Controller/search_edit_billing_details?I_CUR_PAGE=1&I_FROM_DT=01%2F01%2F2021&I_PAT_FIRST_NAME=Sameer&I_PAT_LAST_NAME=test&I_TO_DT=04%2F04%2F2025&no_of_rec=10`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/++resource++billing/src/billing/js/controllers/billingAdminGroupController.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++ngui/src/partials/jiva-left-navigation.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++workflow/src/worklist/partials/myepisode-by-type.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++workflow/src/worklist/js/controllers/myEpisodeByTypeController.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++workflow/src/worklist/js/controllers/myEpisodeByTypeFilter.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/WorkList/Controller/get_my_cases_by_episode?I_CUR_PAGE=${randomIntBetween(1, 10)}&enc_type_list=`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getMemberInfoDetails?I_CLAIMANT_IDN=${randomItem(CLAIMAT_IDNS)}`
    );
    failChecker(res);
  }
  );

  group('page_12', function () {
    res = JIVA.get(
      `/cms/ZeUI/++resource++maappeal/src/maappeal/partials/appeal-episode-banner-details.html?v=${getRandomNumber()}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/check_member_info_edit_allowed?mbr_idn=${randomItem(MBR_IDNS)}`
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Patient/Controller/getMbrGroupDetails`,
      '{"GROUP_IDN":"355244","I_CLAIMANT_IDN":"1545164","EMP_IDN":"272749","PAYOR_IDN":"470637"}'
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Episode/Controller/menuEpisodesList?I_CLAIMANT_IDN=${randomItem(CLAIMAT_IDNS)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/get_workflowbanner_config`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++mbr/src/member/partials/breadcrumbs.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=${randomItem(MBR_IDNS)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++workflow/src/worklist/partials/other-nurse-episodes.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++workflow/src/worklist/js/controllers/otherNurseEpisodeController.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/WorkList/Controller/getNursesList`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/WorkList/Controller/getNurseEpisodeList?I_ASSIGNED_NURSE_IDN=5440410&I_CUR_PAGE=${randomIntBetween(1, 10)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++enc/src/episode/partials/episode-abstract.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.post(
      `/cms/ZeUI/Episode/Controller/getPositionEnc`,
      null
    );
    failChecker(res);
  }
  );

  group('page_13', function () {
    res = JIVA.get(
      `/cms/ZeUI/IPEpisode/Controller/show_current_hospitalization?all_users=${randomItem(YES_NO)}&curr_page=${randomIntBetween(1, 10)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++enc/src/episode/partials/work-load-list-by-user.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++enc/src/episode/js/controllers/userWorkLoadListController.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++keyword/src/keyword/js/services/keywordServices.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Episode/Controller/get_user_work_load?client_idn=&currentPage=${randomIntBetween(1, 10)}&search_alpha=&search_user=`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Episode/Controller/get_user_work_load?client_idn=&currentPage=&search_alpha=${randomItem(SEARCH_ALPHA)}&search_user=`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++enc/src/episode/partials/inactive-episodes.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++enc/src/episode/js/controllers/assignedEpisodeController.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/ZeUI/get_left_navigation_links?xml_tag=${randomItem(XML_TAGS)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/++resource++edumaterial/src/edumaterial/partials/edu-search.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++edumaterial/src/edumaterial/js/controllers/searchEduMaterialController.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++edumaterial/src/edumaterial/js/services/eduServices.js?${getRandomNumber()}`
    );
    failChecker(res);
  }
  );

  group('page_14', function () {
    res = JIVA.get(`/cms/ZeUI/EducationalMaterial/Controller/get_serach_educational_material`);
    failChecker(res);
    res = JIVA.get(`/cms/ZeUI/EducationalMaterial/Controller/getEducationalMaterialType`);
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/EducationalMaterial/Controller/get_educational_materials?is_text=0&max_results=${randomIntBetween(1, 20)}&query=${randomString(4)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/EducationalMaterial/Controller/get_search_edu_materials?material_name=${randomString(4)}&currentPage=${randomIntBetween(1, 10)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/EducationalMaterial/Controller/act_deact_edu_material?ACT_DEACT_FLAG=N&EDU_IDN=64892`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++newsletter/src/newsletter/partials/search-news-letter.html?v=${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++newsletter/src/newsletter/js/controllers/newsLetterSearchController.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++newsletter/src/newsletter/js/services/newsLetterServices.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getAllReadOnlyMembers`,
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getDefaultFilterCheckingOpt`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/is_adv_mbr_search_default`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/fetch_all_patients_lname?query=${randomString(4)}`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/fetch_all_patients_fname?query=${randomString(4)}`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/AutoComplete/Controller/grpSearch?query=${randomString(4)}`,
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Activity/Controller/getRescheduleEncActInfo?override_md_sup_role=1`,
    );
    failChecker(res);
    res = JIVA.post(
      `/cms/ZeUI/Calendar/Controller/getAvailableUser`,
      '{"params":{"I_USER_IDN":2,"I_START_DT":"03/01/2025","I_END_DT":"05/31/2025"}}',
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Activity/Controller/getEpisodeAndActivities?date_type=immediate_due_date`,
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Activity/Controller/getSearchReassignInfo`,
      `{"date_type":"immediate_due_date","encType":"${randomItem(ENC_TYPES)}","selNurseWL":"${randomItem(SEL_NURSE_WLS)}","curr_page":${randomIntBetween(1, 10)},"sort_type":"","order_by":"${randomItem(ORDER_BYS)}"}`,
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Activity/Controller/getReassignActNurseList?encType=Activities+to+be+complete&selNurseWL=${randomItem(SEL_NURSE_WLS)}`,
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Calendar/Controller/get_pqi_calender_activities_tab_config`,
    );
    failChecker(res);
  }
  );

  group('page_15', function () {
    res = JIVA.get(
      `/cms/ZeUI/Calendar/Controller/get_calendar_activities?actButton=agendaDay&endDate=04%2F10%2F205+00:00&payor_idn=&startDate=04%2F09%2F2025+00:00&syncExtCal=true&userIdn=0`,
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Calendar/Controller/get_calendar_activities_overdue?I_SORTED_ORDER=&I_SORTING_COLUMN=FOLLOWUP_DT&activityType=&currentPage=1&encType=&fromDate=04%2F09%2F2025&mbr_first_name=&mbr_idn=&mbr_last_name=&overdue=N&payorName=&payor_idn=&pqi_idn=&priority=&prvName=&prv_add_idn=&selDate=&selected_tab=mbr&toDate=04%2F09%2F2025&userIdn=5527940`,
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/ExtCalendar/Controller/get_external_calendar_config`,
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Calendar/Controller/get_calendar_activities?actButton=month&buttonText=Mont&endDate=05%2F11%2F2025+00:00&payor_idn=&startDate=03%2F30%2F2025+00:00&syncExtCal=false&userIdn=5527940&view=month`,
    );
    failChecker(res);


    res = JIVA.post(
      `/cms/ZeUI/Calendar/Controller/scheduled_activities`,
      '{"startDt":"04/09/2025 01:09","endDt":"05/10/2025 01:39","blockFlag":false,"userIdn":5527940}',
    );
    failChecker(res);

    res = JIVA.post(
      `/cms/ZeUI/Calendar/Controller/scheduled_activities`,
      '{"startDt":"04/09/2025 01:10","endDt":"05/01/2025","blockFlag":true,"userIdn":5527940}',
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Activity/Controller/get_reschedule_activity_data?override_md_sup_role=1`,
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Activity/Controller/get_reschedule_activity_data`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Activity/Controller/get_resactivity_search_result?curPage=${randomIntBetween(1, 10)}&selectedNurse=35385`,
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/ZeUser/Controller/get_sysuser_left_nav_links?tag_name=${randomItem(XML_TAGS)}`,
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/get_member_merge_log_details?I_CUR_PAGE=${randomIntBetween(1, 10)}`,
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Provider/Controller/get_error_request`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Provider/Controller/get_error_search_result?I_ORDER_BY=ASC&currentPage=${randomIntBetween(1, 10)}&memFlag=false`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Activity/Controller/get_followup_search_fields`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Activity/Controller/get_followup_search_results?currentPage=${randomIntBetween(1, 10)}&fromDate=&nurseIdn=3538&searchType=Appeal&toDate=`,
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Episode/Controller/search_over_due_cases?currentPage=${randomIntBetween(1, 10)}`,
    );
    failChecker(res);
    res = JIVA.post(
      `/cms/ZeUI/Episode/Controller/getPositionEnc`,
      null,
    );
    failChecker(res);
  });

  group('page_16', function () {
    res = JIVA.get(
      `/cms/ZeUI/++resource++phm/src/ipcensus/partials/base-ipcensus-data.html?v=${getRandomNumber()}`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/++resource++phm/src/ipcensus/partials/ip-census-report.html?v=${getRandomNumber()}`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++phm/src/ipcensus/js/controllers/ipCensusSearchController.js?${getRandomNumber()}`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++phm/src/ipcensus/js/controllers/ipCensusFiltersController.js?${getRandomNumber()}`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++phm/src/ipcensus/js/controllers/ipCensusDiagnosisFilterController.js?${getRandomNumber()}`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++phm/src/ipcensus/js/services/ipCensusServices.js?${getRandomNumber()}`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++phm/src/ipcensus/js/services/ipCensusJivaServices.js?${getRandomNumber()}`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++phm/src/ipcensus/js/directives/ipCensusCheckboxList.js?${getRandomNumber()}`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++mbr/src/member/js/directives/breadcrumbsDirectives.js?${getRandomNumber()}`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++enc/src/episode/js/directives/episodeBannerDirectives.js?${getRandomNumber()}`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++um/src/um/js/directives/stayServiceSummaryDirective.js?${getRandomNumber()}`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++phm/src/phmregistry/js/services/phmRegistryService.js?${getRandomNumber()}`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++enc/src/episode/js/controllers/episodeAcuityHistoryController.js?${getRandomNumber()}`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++qr/src/qr/js/services/qrServices.js?${getRandomNumber()}`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++contact/src/contact/js/controllers/episodeBannerContactInfoController.js?${getRandomNumber()}`,
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++contact/src/contact/js/services/contactServices.js?${getRandomNumber()}`,
    );
    failChecker(res);
  });

  group('page_17', function () {
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
      `/cms/Assessment/Controller/assessmentTitle?query=${randomString(4)}&i_active_mode=udf`
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
  });

  group('page_18', function () {
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
      `/cms/ZeUI/Medispan/Controller/get_ceg_details_for_pdl?is_text=0&max_results=${randomIntBetween(1, 20)}&query=${randomString(4)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Medispan/Controller/get_therapeutic_classes?query=${randomString(4)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Medispan/Controller/get_medication_names?query=${randomString(4)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Medispan/Controller/get_ceg_details_for_pdl?is_text=0&max_results=${randomIntBetween(1, 20)}&query=${randomString(4)}`
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
      `/cms/Assessment/Controller/assessmentTitle?query=${randomString(4)}&i_active_mode=ace`
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
  });

  group('page_19', function () {
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

    res = JIVA.get(`/cms/PlanOfCare/Controller/pocGoals?query=${randomString(4)}`);
    failChecker(res);

    res = JIVA.get(
      `/cms/PlanOfCare/Controller/pocGoals?query=${randomString(4)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/PlanOfCare/Controller/pocIntervention?query=${randomString(4)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/PlanOfCare/Controller/pocProblems?query=${randomString(4)}`
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
      `/cms/ZeUI/Payor/Controller/get_payor_name_autocomplete?is_text=0&max_results=${randomIntBetween(1, 20)}&query=${randomString(4)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Payor/Controller/get_employer_name_autocomplete?is_text=0&max_results=${randomIntBetween(1, 20)}&query=${randomString(4)}&tpaIdn=`
    );
    failChecker(res);
  });

  group('page_20', function () {
    res = JIVA.get(
      `/cms/ZeUI/Payor/Controller/get_payor_name_autocomplete_for_employer?is_text=0&max_results=${randomIntBetween(1, 20)}&query=${randomString(4)}`
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
  });

  group('page_21', function () {
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
  });

  group('page_22', function () {
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

    res = JIVA.get(`/cms/ZeUI/Patient/Controller/get_centric_view_tab_config`);
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
      `/cms/ZeUI/Patient/Controller/getMoreLinksForMember?enc_type=claimant`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Activity/Controller/getActivityFieldAsDropdownConfig`
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
    res = JIVA.get(`/cms/ZeUI/Episode/Controller/getUMAddEpisodeDetailsConfig`);
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Episode/Controller/getConfigToHideTimeRequestAndDuedate`
    );
    failChecker(res);
    res = JIVA.get(`/cms/ZeUI/Diagnosis/Controller/getConfigToDispStartDate`);
    failChecker(res);
    res = JIVA.get(`/cms/ZeUI/Diagnosis/Controller/getDiagCodeTypes`);
    failChecker(res);
    res = JIVA.get(`/cms/ZeUI/Episode/Controller/getConfigToShowSkipButton`);
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
  });

  group('page_23', function () {
    res = JIVA.get(
      `/cms/ZeUI/Contact/Controller/get_preferred_method_of_contact`
    );
    failChecker(res);
    res = JIVA.get(`/cms/ZeUI/Contact/Controller/get_preferred_time`);
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
    res = JIVA.post(
      `/cms/ZeUI/Calendar/Controller/getAvailableUser`,
      '{"params":{"I_USER_IDN":2,"I_START_DT":"03/01/2025","I_END_DT":"05/31/2025"}}'
    );
    failChecker(res);
    res = JIVA.get(`/cms/ZeUI/Patient/Controller/getGicStatusValues`);
    failChecker(res);
    res = JIVA.get(`/cms/ZeUI/Patient/Controller/getGapsInCareCodes`);
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/PlanOfCare/Controller/get_cp_titles?is_text=0&max_results=${randomIntBetween(1, 10)}&query=${randomString(4)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/PlanOfCare/Controller/get_poc_problem_ctgy?is_text=0&max_results=${randomIntBetween(1, 10)}&query=${randomString(4)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/PlanOfCare/Controller/get_problems?is_text=0&max_results=${randomIntBetween(1, 10)}&query=${randomString(4)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/MTMEpisode/Controller/get_medication_issue_code_data`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Medispan/Controller/getDrugName?query=${randomString(4)}&searchType=exhaustive`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/checkEpisodeAccess?enctype=${randomItem(ENC_TYPES)}`
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
      `/cms/ZeUI/Episode/Controller/getEpisodeClass?enc_type=${randomItem(ENC_TYPES)}&payor_details=1985&payor_details=39214&payor_details=147793&payor_details=157146&payor_details=157539&payor_details=164881&payor_details=111&payor_details=111&payor_details=39214&payor_details=147793&payor_details=157146&payor_details=157539&payor_details=164881&payor_details=111&payor_details=111`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Episode/Controller/getDefaultAssingTo?I_ENC_STATUS=Referral&I_ENC_TYPE_CD=${randomItem(ENC_TYPES)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Episode/Controller/getDefaultAssingTo?I_ENC_STATUS=Hold&I_ENC_TYPE_CD=${randomItem(ENC_TYPES)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Episode/Controller/getDefaultAssingTo?I_ENC_STATUS=Open&I_ENC_TYPE_CD=${randomItem(ENC_TYPES)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Diagnosis/Controller/getICD9CodesAndDesc?query=${randomString(4)}&diag_type=hkenNO&max_results=${randomIntBetween(1, 10)}&is_text=1&enc_idn=`
    );
    failChecker(res);
  });

  group('page_24', function () {
    res = JIVA.get(`/cms/ZeUI/Provider/Controller/getCountry`);
    failChecker(res);
    res = JIVA.get(`/cms/ZeUI/Patient/Controller/getLanguageValues`);
    failChecker(res);
    res = JIVA.get(`/cms/ZeUI/Patient/Controller/getPreferredTimeValues`);
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getRaceValuesForAutoComplete?is_text=0&max_results=${randomIntBetween(1, 10)}&query=${randomString(4)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getRaceValuesForAutoComplete?is_text=0&max_results=${randomIntBetween(1, 10)}&query=${randomString(4)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getLanguagesValueForAutoComplete?is_text=0&max_results=${randomIntBetween(1, 10)}&query=${randomString(4)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Contact/Controller/get_contact_doc_listing?contact_idn=45658`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/++resource++message/src/message/js/controllers/nurseInboxMessageController.js?${getRandomNumber()}`
    );
    failChecker(res);
    res = JIVA.get(`/cms/ZeUI/Message/Controller/get_dashboard_msg_count`);
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/CareTeam/Controller/get_create_care_team_btn_config`
    );
    failChecker(res);
    res = JIVA.get(`/cms/ZeUI/CareTeam/Controller/get_care_team_column_headers`);
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
    res = JIVA.get(`/cms/ZeUI/CareTeam/Controller/get_create_care_team_conf`);
    failChecker(res);
    res = JIVA.get(`/cms/ZeUI/CareTeam/Controller/get_member_header_config`);
    failChecker(res);
    res = JIVA.get(`/cms/ZeUI/CareTeam/Controller/get_insured_header_config`);
    failChecker(res);
    res = JIVA.get(`/cms/ZeUI/CareTeam/Controller/get_care_team_title_config`);
    failChecker(res);
    res = JIVA.get(`/cms/ZeUI/CareTeam/Controller/get_contact_details_conf`);
    failChecker(res);
    res = JIVA.get(`/cms/ZeUI/CareTeam/Controller/get_case_manager_conf_data`);
    failChecker(res);
    res = JIVA.get(`/cms/ZeUI/Contact/Controller/get_contact_pref_days`);
    failChecker(res);
  });

  group('page_25', function () {
    res = JIVA.post(
      `/cms/ZeUI/CallTracking/Controller/getViewDetails`,
      `{"mbrIdn":"${randomItem(CLAIMANT_IDNS)}","encIdn":"","encType":"","fromDate":"03/10/2025","toDate":"04/09/2025","currentPage":${randomIntBetween(1, 10)},"callTypeCd":"","callcategryCd":"","contactTypeCd":"","spokeWith":"","callTrackId":"","userIdn":""}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/check_member_info_edit_allowed?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Episode/Controller/menuEpisodesList?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member`
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
      `/cms/ZeUI/Activity/Controller/getAddActivityFormData?actIdn=229736&encIdn=0&encType=&entityType=Member&mbrIdn=${randomItem(CLAIMANT_IDNS)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Activity/Controller/fetch_jiva_ccda_activity_data?act_status=Open&current_page=${randomIntBetween(1, 10)}&enc_idn=0&end_dt=&entityType=Member&mbr_idn=${randomItem(CLAIMANT_IDNS)}&start_dt=`
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
  });

  group('page_26', function () {
    res = JIVA.get(
      `/cms/ZeUI/Episode/Controller/getEpisodeDetails?claimant_idn=${randomItem(CLAIMANT_IDNS)}&enc_type=${randomItem(ENC_TYPES)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/mbrPrimaryCoverageInfo?claimant_idn=${randomItem(CLAIMANT_IDNS)}&enc_type_cd=${randomItem(ENC_TYPES)}`
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
  });

  group('page_27', function () {
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getMbrCoverageList?claimant_idn=${randomItem(CLAIMANT_IDNS)}&enc_type=${randomItem(ENC_TYPES)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Episode/Controller/fillAssignToValues?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENC_STATUS=Hold&I_ENC_TYPE_CD=${randomItem(ENC_TYPES)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Episode/Controller/fillAssignToValues?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENC_STATUS=Open&I_ENC_TYPE_CD=${randomItem(ENC_TYPES)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/get_relation_types?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
    );
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
  });

  group('page_28', function () {
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
      `/cms/ZeUI/Message/Controller/get_message_list?currentPage=${randomIntBetween(1, 10)}&isSent=N&mbrIdn=${randomItem(CLAIMANT_IDNS)}&msgType=All`
    );
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
  });

  group('page_29', function () {
    res = JIVA.get(
      `/cms/ZeUI/CareTeam/Controller/get_mcv_care_team_Lisitng_details?currentPage=${randomIntBetween(1, 10)}&filterValues=%7B%7D&mbrIdn=${randomItem(CLAIMANT_IDNS)}&recPageLimit=10&sortBy=false&sortByColumn=created_date`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/CareTeam/Controller/get_prv_details?current_page=${randomIntBetween(1, 10)}&mbr_idn=${randomItem(CLAIMANT_IDNS)}&rec_per_page=${randomIntBetween(1, 10)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/CareTeam/Controller/get_member_details_for_care_team?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/CareTeam/Controller/get_pcp_details_for_mcv?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/CareTeam/Controller/get_pcm_details_for_mcv?mbr_idn=${randomItem(CLAIMANT_IDNS)}`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/CareTeam/Controller/get_contact_details_for_mcv?current_page=${randomIntBetween(1, 10)}&mbr_idn=${randomItem(CLAIMANT_IDNS)}&rec_per_page=${randomIntBetween(1, 10)}`
    );
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

    res = JIVA.get(
      `/cms/ZeUI/Activity/Controller/getAddActivityFormData?actIdn=230383&encIdn=0&encType=&entityType=Member&mbrIdn=${randomItem(CLAIMANT_IDNS)}`
    );
    failChecker(res);
  });

  group('page_30', function () {
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member`
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

    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member`
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
      `/cms/ZeUI/Patient/Controller/getWidgetsData?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&I_ENCOUNTER_IDN=&I_ENC_TYPE_CD=&view=Member`
    );
    failChecker(res);
    res = JIVA.get(
      `/cms/ZeUI/Patient/Controller/get_utility_widget_data?enc_idn=0&enc_type=&mbr_idn=${randomItem(CLAIMANT_IDNS)}&view=Member`
    );
    failChecker(res);

    res = JIVA.get(
      `/cms/ZeUI/Episode/Controller/getEncGridDetails?I_CLAIMANT_IDN=${randomItem(CLAIMANT_IDNS)}&currentPage=${randomIntBetween(1, 10)}&episodeActiveStatus=Y&episodeGridViewType=grouped_view&orderBy=${randomItem(ORDER_BYS)}&orderByField=orderby_date`
    );
    failChecker(res);
  });
}
