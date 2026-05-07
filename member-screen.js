// Creator: Grafana k6 Browser Recorder 1.0.7
// Creator: Grafana k6 Browser Recorder 1.0.7
import { sleep, group } from "k6";
import { check, fail } from "k6";
import http from "k6/http";
import { randomItem, randomIntBetween, randomString } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";
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

function failChecker(res, objName = null, obj = null, element = null, others = null) {
  let flag = false;
  if (!check(res, { "status code MUST be 200 or 201 or 204": (res) => res.status === 200 || res.status === 201 || res.status === 204 })) {
    console.log(`status code was *not* 200: ${res.status}: DATA: ${randomItem(CLAIMANT_IDNS)}: OTHER: ${others} URI: ${res.request.url}`);
    flag = true;
    // if (element !== null && obj !== null) {
    //   const index = obj.indexOf(element);
    //   if (index > -1) {
    //     obj.splice(index, 1);
    //     console.log(`=================> Removed ${randomItem(CLAIMANT_IDNS)} from ${objName}`);
    //   }
    // }
  }
  sleep(0.5);
  return flag;
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
      maxDuration: "3h",
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

  

  

  
  

  

  
}
