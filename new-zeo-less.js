// Creator: Grafana k6 Browser Recorder 1.0.7
import { sleep, group } from "k6";
import { check, fail } from "k6";
import http from "k6/http";

const HOST_NAME = "local.zeomega.org";
const BASE_URL = `https://${HOST_NAME}`;
const USER_NAME = "zeadmin";
const PASSWORD = "Jiva@123";

export const options = {
  // vus: 30,
  stages: [
    { target: 2, duration: "10m" },
    { target: 20, duration: "1h" },
    { target: 50, duration: "4h" },
    { target: 2, duration: "30m" },
    { target: 0, duration: "20m" },
  ],

  // thresholds: {
  //   http_req_failed: ["rate < 0.1"], // http errors should be less than 1%
  //   http_req_duration: ["p(95) < 200"], // 95% of requests should be below 200ms
  // },
};

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
        "content-type": "application/json",
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
  let res;

  group(`page_1 - ${BASE_URL}`, function () {
    res = http.get(
      `${BASE_URL}/++resource++core/nurse_login/index.html?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUser/Controller/check_user_loggedin`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUser/Controller/getLoginConfigData?login_type=np`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/++resource++core/nurse_login/++resource++ngui/src/css/vendor/bootstrap/bootstrap.min.css?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/++resource++core/nurse_login/++resource++ngui/src/css/bastion.css?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/++resource++core/nurse_login/++resource++ngui/src/css/vendor/font-awesome.css?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/++resource++core/nurse_login/++resource++ngui/src/css/vendor/jiva-icon-fonts.css?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUser/Controller/get_logo_data?logo_types=NP_LOGIN_TOP_LEFT,NP_LOGIN_TOP_RIGHT,NP_LOGIN_JIVA`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(`${BASE_URL}/cms/ZeSecurity/get_destination`);
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/getCustomerLogoDetails?logo_type=NP_LOGIN_TOP_LEFT`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/getCustomerLogoDetails?logo_type=NP_LOGIN_TOP_RIGHT`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/getCustomerLogoDetails?logo_type=NP_LOGIN_JIVA`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
  });

  group(`page_2 -${BASE_URL}/cms/ZeUI/core_portal`, function () {
    res = http.get(`${BASE_URL}/cms/ZeUI/core_portal`);
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++ngui/src/js/vendor/zonejs/zone.umd.js?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/styles/Ze_basic-style.css?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++ngui/src/css/vendor/bootstrap/bootstrap.min.css?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++ngui/src/css/vendor/fullcalendar.min.css?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++ngui/src/css/vendor/font-awesome.css?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++ngui/src/css/vendor/jiva-icon-fonts.css?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++ngui/src/css/vendor/angular-toastr.css?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++ngui/src/css/vendor/ui-grid/ui-grid.min.css?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/++resource++webjscripts/RoboHelp_CSH.js?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++ngui/src/js/require-map.js?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++ngui/src/js/business-require-map.js?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++clientjiva/src/ngui/js/client-require-map.js?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++ngui/src/js/vendor/require/require.min.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++ngui/src/js/main.js?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/require/domReady.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/require/json.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++ngui/src/js/mfmain.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/jquery/jquery.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/objectPath.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/require/text.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/underscorejs/underscore-min.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/angular-translate/messageformat.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/bubbling2/build/accordion/assets/accordion.css?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/jiva.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/controllers/sreValidationModalController.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jivaRouteChangeDirective.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/services/jivaExceptionServices.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jTitleDirective.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/rcSubmit.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jVar.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jvarDefaultSelect.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jivaNgClick.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jTime.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jIframe.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jClock.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jBindRelativeTime.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jAutoInvoke.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jBtn.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jResizeSeparator.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jLabel.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jHeader.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jWidget.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jHeight.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jDateMultiSelect.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jMultiselectAutocomplete.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jFileUpload.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jLeftNavigation.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jEpisodeCloseDirective.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jScrollingTabDirective.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jxsltProcessorDirective.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jServiceQualityMeasuresWidget.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jInview.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jAssessmentTemplate.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jScore.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jCountryStateSelect.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jToggleHeaderOnClick.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jScrollInToView.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/directives/jStaticSentinelVirtualScroller.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/css/style.css?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/services/jivaRouteResolverService.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++dashboard/src/ngdashboard/js/services/dashboardServices.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++message/src/message/js/services/messageServices.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++alerts/src/alerts/js/services/alertsServices.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/moment/moment-timezone-with-data.min.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/angular-fileUpload/jquery.iframe-transport.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/angular-fileUpload/jquery.fileupload.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/angular-fileUpload/jquery.fileupload-validate.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/angular-fileUpload/jquery.fileupload-process.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/fullcalendar.min.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/angular/angular.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/ui-grid/angular-ui-grid.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/angular-fileUpload/angular-file-upload.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/angular-dragdrop/angular-dragdrop.min.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/angular-inview/inview.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/scrolling-tab/scrolling-tabs.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/powerbi.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/angular/angular-compile-ext-pre-assign-bindings.min.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/ui-router/angular-ui-router.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/ngcal.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/uiutils/ui-utils.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/rcForm/rcDisabled.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/angular-google-maps/ng-map.min.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/angular-translate/angular-translate-interpolation-messageformat.min.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/filters/partition.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/ZeUI/getConfigData?usrTz=Asia/Kolkata`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/Ze_validation.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/Ze_common.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/Ze_claim.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/Ze_episode.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/Ze_fax.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/Ze_provider_portal.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/Ze_user.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/Ze_admin.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/Ze_sentinel.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/Ze_srebase.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/Ze_scheduler.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/Ze_AppCtrl.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/Ze_POC.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/Ze_ace_templates.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/Ze_ace.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/Ze_notification.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/yui28/build/accordionview/accordionview-min.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/yuidatatablegrouper/groupeddatatable-min.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/bubbling2/build/dispatcher/dispatcher-min.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/Treeble-min.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/Ze_thirdparty.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/jscript/MASS_scripts.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/views/styles/ze-skin-sprite.png?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
  });

  group(`page_3 -${BASE_URL}/cms/ZeUI/core_portal#/`, function () {
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++um/src/um/partials/service-request.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++um/src/um/partials/stay-request.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++prv/src/provider/partials/attach-provider-listing.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++appeal/src/appeal/partials/episode-details-non-edit.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++appeal/src/appeal/partials/episode-add-step-two.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++appeal/src/appeal/partials/appeal-stay-request.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++appeal/src/appeal/partials/appeal-service-request.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++ngui/src/partials/header.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/tinymce/js/tinymce/themes/modern/theme.min.js?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/tinymce/js/tinymce/plugins/spellchecker/plugin.min.js?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/tinymce/js/tinymce/plugins/paste/plugin.min.js?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/tinymce/js/tinymce/plugins/template/plugin.min.js?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
  });

  group(`page_4 - ${BASE_URL}/cms/ZeUI/core_portal#/dashboard`, function () {
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++dashboard/src/ngdashboard/partials/dashboard.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++dashboard/src/ngdashboard/js/controllers/dashboardController.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++workflow/src/worklist/js/controllers/transWorklistPopOverController.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++diag/src/diagnosis/js/controllers/advDiagSearchController.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++um/src/um/js/controllers/advancedServiceCodeSearchController.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/Message/Controller/get_dashboard_msg_count`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/getCustomerLogoDetails?logo_type=NP_MENU_JIVA`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++ngui/src/js/vendor/tinymce/js/tinymce/skins/lightgray/skin.min.css?JSTimeStamp=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++workflow/src/worklist/js/services/workListServices.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++prvportal/src/prvportal/js/services/prvportalServices.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++dashboard/src/ngdashboard/js/directives/dashboardDirective.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++prvportal/src/prvportal/js/directives/prvportalDashboardDirective.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++enc/src/episode/js/directives/episodeDirectives.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++diag/src/diagnosis/js/services/diagnosisServices.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++ce/src/fax/js/services/faxServices.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++maappeal/src/maappeal/js/directives/maappealDashboardDirective.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++magrievance/src/magrievance/js/directives/magrievanceDashboardDirective.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++prvportal/src/prvportal/js/controllers/attachPrvController.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++enc/src/episode/js/controllers/episodeDashboardController.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++enc/src/episode/js/controllers/episodeAbstractController.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++mbr/src/member/js/services/memberServices.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++um/src/um/js/directives/mcvServiceListDirective.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++diag/src/diagnosis/js/directives/episodeDiagnosisList.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++poc/src/poc/js/directives/problemList.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++mtm/src/mtm/js/directives/medicationIssueListWidget.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++mtm/src/mtm/js/directives/medicationActionPlanWidget.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++activity/src/activity/js/directives/activityDirective.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++ce/src/notification/js/directives/notificationDirective.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++edumaterial/src/edumaterial/js/directives/eduDirective.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++docmgr/src/docmgr/js/directives/docmgrDirectives.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++alerts/src/alerts/js/directives/alertsDirectives.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++mbr/src/member/js/directives/membercentricViewDirectives.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++guidelines/src/guidelines/js/services/guidelinesServices.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++user/src/user/js/services/powerBiUserService.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++magrievance/src/magrievance/js/services/magrievanceServices.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++magrievance/src/magrievance/js/controllers/magrievanceTatFilterPopupController.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++magrievance/src/magrievance/js/controllers/magrievanceTatUserPopOverController.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++mbr/src/member/js/directives/dateRangeDirectives.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++maappeal/src/maappeal/js/services/maappealServices.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++maappeal/src/maappeal/js/controllers/maappealTatFilterPopupController.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++maappeal/src/maappeal/js/controllers/maappealTatUserPopOverController.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_widget_controller_map`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_widget_end_point_map`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_widget_titles`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/getDashboardConfi`,
      '{"user_datetime":"04/04/2025 13:34"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/ZeUser/Controller/getLoggedInUserForngDashboar`,
      '{"user_datetime":"04/04/2025 13:34"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++ngui/src/partials/session-modal.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/getWidgetsDat`,
      '{"user_datetime":"04/04/2025 13:34","lazyLoad":true}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++dashboard/src/ngdashboard/partials/widgets/incepisodesandfaxcount.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++dashboard/src/ngdashboard/partials/widgets/faxstatspiegraphnew.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++dashboard/src/ngdashboard/partials/widgets/turnaroundtimenew.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++dashboard/src/ngdashboard/partials/widgets/nurseworkflow.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++dashboard/src/ngdashboard/partials/widgets/myactivities.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++dashboard/src/ngdashboard/partials/widgets/carereminder.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++dashboard/src/ngdashboard/partials/widgets/myepisodeswithduedtgraph.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++dashboard/src/ngdashboard/partials/widgets/myepisodeswithoutduedtgraph.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++maappeal/src/maappeal/partials/openmaappealsforuser.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++maappeal/src/maappeal/partials/maappealepisodeduecount.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++maappeal/src/maappeal/partials/maappealreviewstatuscount.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++maappeal/src/maappeal/partials/maappealwithduedtgraph.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++maappeal/src/maappeal/partials/maappealepisodesaging.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++maappeal/src/maappeal/partials/maappealdecisiontatrategraph.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++magrievance/src/magrievance/partials/magrievanceopenepisodecount.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++magrievance/src/magrievance/partials/magrievancesbyrequesttypeprioritygraph.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++magrievance/src/magrievance/partials/magrievanceepisodesaging.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++magrievance/src/magrievance/partials/magrievancedecisiontatrategraph.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_nurseworkflow_widge`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:04:32.370Z","uri":"#/dashboard","widget":"nurseworkflow","user_datetime":"04/04/2025 13:34"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_myactivities_widge`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:04:33.252Z","uri":"#/dashboard","widget":"myactivities","user_datetime":"04/04/2025 13:34"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_fax_turnaround_time_widge`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:04:35.592Z","uri":"#/dashboard","widget":"turnaroundtimenew","user_datetime":"04/04/2025 13:34"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_fax_stats_piegraph_widge`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:04:35.706Z","uri":"#/dashboard","widget":"faxstatspiegraphnew","user_datetime":"04/04/2025 13:34"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_carereminder_widge`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:04:35.874Z","uri":"#/dashboard","widget":"careremindernursewidget","user_datetime":"04/04/2025 13:34"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_incomplete_episode_fax_widge`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:04:35.881Z","uri":"#/dashboard","widget":"incepisodesandfaxcount","user_datetime":"04/04/2025 13:34"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_myepisodes_with_duedt_widge`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:05:08.930Z","uri":"#/dashboard","widget":"myepisodeswithduedtgraph","user_datetime":"04/04/2025 13:35"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_myepisodes_without_duedt_widge`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:05:27.620Z","uri":"#/dashboard","widget":"myepisodeswithoutduedtgraph","user_datetime":"04/04/2025 13:35"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_open_maappeal_episode_coun`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:05:37.415Z","uri":"#/dashboard","widget":"maappealepisodeduecount","user_datetime":"04/04/2025 13:35"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_open_maappeal_episode_of_an_use`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:05:39.489Z","uri":"#/dashboard","widget":"openmaappealsforuser","user_datetime":"04/04/2025 13:35"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_maappeal_episode_review_status_coun`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:05:39.496Z","uri":"#/dashboard","widget":"maappealreviewstatuscount","user_datetime":"04/04/2025 13:35"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/maappeal_by_request_type_and_priorit`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:05:45.450Z","uri":"#/dashboard","widget":"maappealbyrequesttypeprioritygraph","user_datetime":"04/04/2025 13:35"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_maappeal_duedt_widge`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:05:47.645Z","uri":"#/dashboard","widget":"maappealwithduedtgraph","user_datetime":"04/04/2025 13:35"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_maappeal_episodes_aging_widge`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:05:53.468Z","uri":"#/dashboard","widget":"maappealepisodesaging","user_datetime":"04/04/2025 13:35"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_maappeal_decision_tat_rat`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:00.938Z","uri":"#/dashboard","widget":"maappealdecisiontatrategraph","user_datetime":"04/04/2025 13:36"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_magrievance_episode_due_date_coun`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:01.884Z","uri":"#/dashboard","widget":"magrievanceepisodeduedatecount","user_datetime":"04/04/2025 13:36"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_magrievance_count_for_pending_for_revie`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:03.164Z","uri":"#/dashboard","widget":"magrievancependingreviewepisodescount","user_datetime":"04/04/2025 13:36"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_magrievance_open_episode_coun`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:03.166Z","uri":"#/dashboard","widget":"magrievanceopenepisodecount","user_datetime":"04/04/2025 13:36"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_magrievance_due_dt_graph_dat`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:03.173Z","uri":"#/dashboard","widget":"magrievancewithduedtgraph","user_datetime":"04/04/2025 13:36"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/magrievances_by_request_type_and_priorit`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:03.670Z","uri":"#/dashboard","widget":"magrievancesbyrequesttypeprioritygraph","user_datetime":"04/04/2025 13:36"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_grievance_episodes_aging_dat`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:03.674Z","uri":"#/dashboard","widget":"magrievanceepisodesaging","user_datetime":"04/04/2025 13:36"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_magrievance_decision_tat_rat`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:04.834Z","uri":"#/dashboard","widget":"magrievancedecisiontatrategraph","user_datetime":"04/04/2025 13:36"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_open_um_cases_widget_data_tod`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:09.885Z","uri":"#/dashboard","widget":"openumcaseswidget","user_datetime":"04/04/2025 13:36"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_um_aging_by_pending_reasons_dat`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:18.271Z","uri":"#/dashboard","widget":"umagingbypendingreasonswidget","user_datetime":"04/04/2025 13:36"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_um_decision_tat_rat`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:20.680Z","uri":"#/dashboard","widget":"umdecisiontatrategraph","user_datetime":"04/04/2025 13:36"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.post(
      `${BASE_URL}/cms/ZeUI/Dashboard/Controller/get_um_pr_at_risk_widget_data_tod`,
      '{"state":"dashboardView","user_idn":2,"ctime":"2025-04-04T08:06:25.555Z","uri":"#/dashboard","widget":"umprstatuswidget","user_datetime":"04/04/2025 13:36"}',
      {
        headers: {
          "x-xsrf-token": session["XSRF-TOKEN"],
        },
      }
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/Patient/Controller/getAllReadOnlyMembers`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++mbr/src/member/partials/add-member.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++mbr/src/member/js/controllers/memberAddController.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++mbr/src/member/js/controllers/advancedGroupSearchController.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++ce/src/fax/js/directives/faxDirective.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++mbr/src/member/js/controllers/memberSearchModalController.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++mbr/src/member/js/directives/memberSearchDirectives.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++mbr/src/member/js/controllers/memberAdvancedSearchController.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/++resource++mbr/src/member/js/directives/insdMbrCvgInfoDirectives.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
  });

  group(
    `page_5 - ${BASE_URL}/cms/ZeUI/core_portal#/member/add_member`,
    function () {
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getAcoAssociationConf`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(`${BASE_URL}/cms/ZeUI/Patient/Controller/getACOName`);
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/get_relation_types`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getCauseOfDeathEnabledStatus`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/get_logged_in_uroles`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getAddressTypeValues`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMemberSuffixValues`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMemberMaritalStatusValues`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMemberGenderValues`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMemberStatusValues`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getInsuranceTypeValues`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getPCMValues`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getAddressTypeValues`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Address/Controller/get_country_code`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getCountyDetails`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getPhoneTypeValues`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getEmailTypeValues`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrGenderIdentityValues`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getSexualOrientationValues`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrPronounValues`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getEligibilityStatusValues`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getFundingArrangementValues`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getCoverageTypeValues`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/ProviderPortal/Controller/getNoteTypeCheckConfiguration`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++ngui/src/partials/custom_udf.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Medications/Controller/get_notes_screen_state_config_xml`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Notes/Controller/getNoteTypesDetails?enc_idn=0`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Address/Controller/get_state_codes?country_cd=USA`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Address/Controller/get_state_codes?country_cd=TCD`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getEthicityForAutoComplete?is_text=0&max_results=20&query=t`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getRaceValuesForAutoComplete?is_text=0&max_results=20&query=s`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getLanguagesValueForAutoComplete?is_text=0&max_results=20&query=e`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getCoverageDetailsGroup?is_text=0&max_results=10&query=sam&GROUP_ATTR_TYPE=group_name`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/fillInsuranceType?I_GROUP_IDN=36788`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++mbr/src/member/partials/member-search-pop-up.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++mbr/src/member/partials/member-search.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getDefaultFilterCheckingOpt`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getConfigForMemberSearchDropDown?context=AddMemberSearch`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/is_adv_mbr_search_default`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getPCPDetailsForCoverage?I_PRV_NAME=tes&I_SEARCH_COUNT=10`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++calltracking/src/calltracking/partials/calltrack-mbr-search.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++calltracking/src/calltracking/js/controllers/calltrackingController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++calltracking/src/calltracking/js/services/calltrackingServices.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++mbr/src/member/js/directives/memberDirectives.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++mbr/src/member/js/controllers/clinicalAdvanceDirectiveFiltersController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++mbr/src/member/js/controllers/functionalCognitiveStatusFiltersController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++mbr/src/member/js/controllers/mbrKeywordIconsController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++contact/src/contact/js/controllers/mbrBannerContactInfoController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++contact/src/contact/js/services/contactServices.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
    }
  );

  group(
    `page_6 - ${BASE_URL}/cms/ZeUI/core_portal#/===SW50YWtl/call_trackin`,
    function () {
      res = http.get(
        `${BASE_URL}/cms/ZeUI/CallTracking/Controller/get_calltrac_left_nav_links?tag_name=Call_Tracking`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++calltracking/src/calltracking/partials/calltrac-mbr-list.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getConfigForMemberSearchDropDown?context=EpisodeIntake`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/patientFirstName?query=hel`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.post(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/episodeIntakeMbrSrc`,
        '{"params":{"currentPage":1,"searchParam":{"I_FIRST_NAME":"hell"},"orderByField":"","orderBy":false,"context":"EpisodeIntake"}}',
        {
          headers: {
            "x-xsrf-token": session["XSRF-TOKEN"],
          },
        }
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++calltracking/src/calltracking/partials/view-call-details.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/++resource++calltracking/src/calltracking/js/controllers/viewCallDetailController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/++resource++calltracking/src/calltracking/js/controllers/viewCallSummaryController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/++resource++calltracking/src/calltracking/js/controllers/callSearchFilterController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
    }
  );

  group(
    `page_7 - ${BASE_URL}/cms/ZeUI/core_portal#/===SW50YWtl/call_tracking/track_call_histor`,
    function () {
      res = http.post(
        `${BASE_URL}/cms/ZeUI/CallTracking/Controller/getCallTrackHistor`,
        '{"encIdn":"","encType":"","fromDate":"03/05/2025","toDate":"04/04/2025","currentPage":1,"callTypeCd":"","callcategryCd":"","contactTypeCd":"","spokeWith":"","callTrackId":"","userIdn":""}',
        {
          headers: {
            "x-xsrf-token": session["XSRF-TOKEN"],
          },
        }
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++calltracking/src/calltracking/partials/view-call-summary.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/CallTracking/Controller/getViewCallSummary?act_idn=&call_idn=34272&claimant_idn=1096570`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/get_member_name?mbr_idn=1096570`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++calltracking/src/calltracking/partials/mbr-call-details.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
    }
  );

  group(
    `page_8 - ${BASE_URL}/cms/ZeUI/core_portal#/===SW50YWtl/call_tracking/view_mbr_call_details/===MTA5NjU3MA==/===U29jaWFsQ2FyZQ==/===MTU1MDEzNQ=`,
    function () {
      res = http.post(
        `${BASE_URL}/cms/ZeUI/CallTracking/Controller/getViewDetail`,
        '{"mbrIdn":"1096570","encIdn":"1550135","encType":"SocialCare","fromDate":"03/05/2025","toDate":"04/04/2025","currentPage":1,"callTypeCd":"","callcategryCd":"","contactTypeCd":"","spokeWith":"","callTrackId":"","userIdn":""}',
        {
          headers: {
            "x-xsrf-token": session["XSRF-TOKEN"],
          },
        }
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++mbr/src/member/partials/member-demographics-template.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getConfigForMemberDemographics`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMemberDemographicsData?mbrIdn=1096570`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++mbr/src/member/partials/member-abstract.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMPIData?i_claimant_idn=1096570`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMPIData?i_claimant_idn=1096570`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/CallTracking/Controller/getViewCallSummary?act_idn=&call_idn=34272&claimant_idn=1096570&enc_type=SocialCare`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++calltracking/src/calltracking/partials/add-call.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/++resource++calltracking/src/calltracking/js/controllers/addCallController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/++resource++sms/src/sms/js/services/smsServices.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
    }
  );

  group(
    `page_9 - ${BASE_URL}/cms/ZeUI/core_portal#/===SW50YWtl/call_tracking/view_add_Call/===MTA5NjU3MA==/===U29jaWFsQ2FyZQ==/===MTU1MDEzNQ=`,
    function () {
      res = http.get(
        `${BASE_URL}/cms/ZeUI/ProviderPortal/Controller/getNoteTypeCheckConfiguration`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Sms/Controller/get_member_opt_phone_number?mbr_idn=1096570`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/CallTracking/Controller/get_calltrack_code_value_details`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/CallTracking/Controller/getCallTrackDetails?claimant_idn=1096570&enc_type=SocialCare&encounter_idn=1550135`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/CallTracking/Controller/get_prerequisites_for_route_to_cqn_add_call`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Notes/Controller/getNoteTypesDetails?mbr_idn=1096570`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/CallTracking/Controller/getCallTypes?enc_idn=1550135&encounter_type=SocialCare&mbr_idn=1096570`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/CallTracking/Controller/getContactTypes?enc_idn=1550135&encounter_type=SocialCare&mbr_idn=1096570`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/CallTracking/Controller/getCallCategories?enc_idn=1550135&encounter_type=SocialCare&mbr_idn=1096570`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/CallTracking/Controller/getCallStatus?enc_idn=1550135&encounter_type=SocialCare&mbr_idn=1096570`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/CallTracking/Controller/getCallUnsuccessRsn?enc_idn=1550135&encounter_type=SocialCare&mbr_idn=1096570`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/ProviderPortal/Controller/getNoteTypeCheckConfiguration`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Activity/Controller/getActivityTypes?enc_idn=1550135&encounter_type=SocialCare&mbr_idn=1096570`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMemberDemographicsData?mbrIdn=1096570`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.post(
        `${BASE_URL}/cms/ZeUI/Calendar/Controller/getAvailableUse`,
        '{"params":{"I_USER_IDN":2,"I_START_DT":"03/01/2025","I_END_DT":"05/31/2025"}}',
        {
          headers: {
            "x-xsrf-token": session["XSRF-TOKEN"],
          },
        }
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Notes/Controller/getNoteTypesDetails?enc_idn=0&mbr_idn=1096570`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/CallTracking/Controller/getCallTracKBroadTopics?enc_idn=1550135&inq_type_idn=2&mbr_idn=1096570`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/CallTracking/Controller/getSpecificTopic?broad_topic_idn=24&enc_idn=1550135&mbr_idn=1096570`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/CallTracking/Controller/get_assign_nurse_list?claimant_idn=1096570&enc_type=SocialCare&encounter_idn=1550135`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.post(
        `${BASE_URL}/cms/ZeUI/Calendar/Controller/getAvailableUse`,
        '{"params":{"I_USER_IDN":5044070,"I_START_DT":"03/01/2025","I_END_DT":"05/31/2025"}}',
        {
          headers: {
            "x-xsrf-token": session["XSRF-TOKEN"],
          },
        }
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/AutoComplete/Controller/getActivityCodes?ACTIVITY_TYPE=Episode&IS_OUTREACH=&I_BILLING_IDN=&I_ENC_TYPE_CD=SocialCare&I_INTERVENTION_IDN=&enc_idn=1550135&mbr_idn=1096570&query=te`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++ce/src/fax/partials/fax-view.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/++resource++ce/src/fax/js/controllers/faxListingController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/++resource++ce/src/fax/js/controllers/addfaxController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/++resource++ce/src/fax/js/controllers/faxAddLabelController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/++resource++ce/src/fax/js/controllers/faxMemberCoverageController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/++resource++mbr/src/member/js/controllers/memberAbstractController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/++resource++ce/src/fax/js/controllers/faxModifyDocumentController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
    }
  );

  group(`page_10 - ${BASE_URL}/cms/ZeUI/core_portal#/fax/===`, function () {
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++ce/src/fax/partials/fax-section.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++ce/src/fax/partials/fax-member-search-with-preview.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/Fax/Controller/get_file_types_allowed`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/Fax/Controller/fax_split_enabled`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++ce/src/fax/partials/pdf-preview.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++ce/src/fax/partials/fax-member-search.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/Patient/Controller/getConfigForMemberSearchDropDown?context=FaxIntake`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++ce/src/fax/partials/add-fax.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(`${BASE_URL}/cms/ZeUI/getpartialPerm`);
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/Fax/Controller/get_file_types_allowed`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/ZeUI/Fax/Controller/fax_split_enabled`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }

    res = http.get(
      `${BASE_URL}/cms/ZeUI/++resource++billing/src/billing/partials/billing-report.html?v=${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++billing/src/billing/js/controllers/billingReportController.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++billing/src/billing/js/services/billingReportService.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
    res = http.get(
      `${BASE_URL}/cms/++resource++billing/src/billing/js/services/billingServices.js?${Date.now()}`
    );
    if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
      fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
    }
  });

  group(
    `page_11 - ${BASE_URL}/cms/ZeUI/core_portal#/billingReport`,
    function () {
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Episode/Controller/get_required_enc_types_as_json`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Billing/Controller/get_billing_admin_group_list`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Payor/Controller/get_payor_name_autocomplete_for_group?is_text=0&max_results=20&query=sam`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Billing/Controller/get_billing_admin_group_list?tpaIdn=39213`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Billing/Controller/manage_corporate_billing_rpts_ng?I_ENC_TYPE_CD=Appeal&I_ENC_TYPE_CD=BH-CM&I_ENC_TYPE_CD=BH-IP&I_ENC_TYPE_CD=BH-OP&I_ENC_TYPE_CD=CM&I_ENC_TYPE_CD=DM&I_END_DATE=04%2F04%2F2025&I_GROUP_IDN=0&I_PAYOR_IDN=39213&I_START_DATE=01%2F01%2F2021&I_ENC_TYPE_CD=BH-CM&I_ENC_TYPE_CD=BH-IP&I_ENC_TYPE_CD=BH-OP&I_ENC_TYPE_CD=CM&I_ENC_TYPE_CD=DM`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++billing/src/billing/partials/search-billing-client.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/++resource++billing/src/billing/js/controllers/searchBillingClientController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/++resource++billing/src/billing/js/services/searchBillingClientService.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
    }
  );

  group(
    `page_12 - ${BASE_URL}/cms/ZeUI/core_portal#/billingadm/===Tg=`,
    function () {
      res = http.get(
        `${BASE_URL}/cms/ZeUI/AutoComplete/Controller/payorSearch?is_text=0&max_results=20&query=sam`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++billing/src/billing/partials/customized-billing-rates.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++billing/src/billing/js/controllers/customizedBillingRatesController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++billing/src/billing/js/services/customizedBillingRatesService.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Payor/Controller/fetch_ceg_billing_details?entityIdn=39213&entityType=client`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++billing/src/billing/partials/create-invoice.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++billing/src/billing/js/controllers/createInvoiceController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/AutoComplete/Controller/payorSearch?is_text=0&max_results=20&query=sam`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++billing/src/billing/partials/internal-billing-report.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++billing/src/billing/js/controllers/internalBillingReportController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++billing/src/billing/js/services/internalBillingReportService.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
    }
  );

  group(
    `page_13 - ${BASE_URL}/cms/ZeUI/core_portal#/internalbillingrp`,
    function () {
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Episode/Controller/get_required_enc_types_as_json`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Billing/Controller/get_billing_admin_group_list`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Payor/Controller/get_payor_name_autocomplete_for_group?is_text=0&max_results=20&query=tes`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Billing/Controller/get_billing_admin_group_list?tpaIdn=419040`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++billing/src/billing/partials/edit-billing.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++billing/src/billing/js/controllers/editBillingController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++billing/src/billing/js/controllers/showEncounterBillController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++billing/src/billing/js/services/editBillingCtrlService.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/patientFirstName?is_text=0&max_results=20&query=sam`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/patientLastName?is_text=0&max_results=20&query=tes`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Billing/Controller/search_edit_billing_details?I_CUR_PAGE=1&I_FROM_DT=01%2F01%2F2021&I_PAT_FIRST_NAME=Sameer&I_PAT_LAST_NAME=test&I_TO_DT=04%2F04%2F2025&no_of_rec=10`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/++resource++billing/src/billing/js/controllers/billingAdminGroupController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
    }
  );

  group(
    `page_14 - ${BASE_URL}/cms/ZeUI/core_portal#/episode/manage_episodes/myEpisodeByTyp`,
    function () {
      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++ngui/src/partials/jiva-left-navigation.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/ZeUI/get_left_navigation_links?xml_tag=Manage_Cases`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++workflow/src/worklist/partials/myepisode-by-type.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++workflow/src/worklist/js/controllers/myEpisodeByTypeController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++workflow/src/worklist/js/controllers/myEpisodeByTypeFilter.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/WorkList/Controller/get_my_cases_by_episode?I_CUR_PAGE=1&enc_type_list=`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=1763671`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=876321`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=1047351`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=796831`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=828970`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=1066570`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMPIData?i_claimant_idn=1545164`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMemberInfoDetails?I_CLAIMANT_IDN=1545164`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMPIData?i_claimant_idn=1545164`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMemberInfoDetails?I_CLAIMANT_IDN=1545164`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/get_member_name?mbr_idn=1545164`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
    }
  );

  group(
    `page_15 - ${BASE_URL}/cms/ZeUI/core_portal#/member/member_group_details/===MTU0NTE2NA==/===MzU1MjQ0/===MjcyNzQ5/===NDcwNjM`,
    function () {
      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++maappeal/src/maappeal/partials/appeal-episode-banner-details.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/check_member_info_edit_allowed?mbr_idn=1545164`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.post(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrGroupDetail`,
        '{"GROUP_IDN":"355244","I_CLAIMANT_IDN":"1545164","EMP_IDN":"272749","PAYOR_IDN":"470637"}',
        {
          headers: {
            "x-xsrf-token": session["XSRF-TOKEN"],
          },
        }
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Episode/Controller/menuEpisodesList?I_CLAIMANT_IDN=1545164`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/get_workflowbanner_config`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMemberDemographicsData?mbrIdn=1545164`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++mbr/src/member/partials/breadcrumbs.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
    }
  );

  group(
    `page_16 - ${BASE_URL}/cms/ZeUI/core_portal#/episode/manage_episodes/myEpisodeByTyp`,
    function () {
      res = http.get(
        `${BASE_URL}/cms/ZeUI/WorkList/Controller/get_my_cases_by_episode?I_CUR_PAGE=1&enc_type_list=`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=1763671`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=876321`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=1047351`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=796831`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=828970`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++workflow/src/worklist/partials/other-nurse-episodes.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++workflow/src/worklist/js/controllers/otherNurseEpisodeController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
    }
  );

  group(
    `page_17 - ${BASE_URL}/cms/ZeUI/core_portal#/episode/manage_episodes/otherNurseEpisode`,
    function () {
      res = http.get(
        `${BASE_URL}/cms/ZeUI/WorkList/Controller/getNursesList`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/WorkList/Controller/getNurseEpisodeList?I_ASSIGNED_NURSE_IDN=5440410&I_CUR_PAGE=1`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=1050990`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=796831`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=816697`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++enc/src/episode/partials/episode-abstract.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Episode/Controller/getEpisodeAbstarctDetails?I_CLAIMANT_IDN=1050990&I_ENCOUNTER_IDN=1527928&I_PAT_ACCESS=N`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.post(
        `${BASE_URL}/cms/ZeUI/Episode/Controller/getPositionEn`,
        null,
        {
          headers: {
            "x-xsrf-token": session["XSRF-TOKEN"],
          },
        }
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
    }
  );

  group(
    `page_18 - ${BASE_URL}/cms/ZeUI/core_portal#/episode/manage_episodes/my_current_hospitalizatio`,
    function () {
      res = http.get(
        `${BASE_URL}/cms/ZeUI/IPEpisode/Controller/show_current_hospitalization?all_users=N&curr_page=1`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=866136`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=1385381`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=1381099`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=1381099`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=1377257`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=1368723`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/IPEpisode/Controller/show_current_hospitalization?all_users=Y&curr_page=1`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Patient/Controller/getMbrKeywordWidgets?mbr_idn=1545164`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++enc/src/episode/partials/work-load-list-by-user.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++enc/src/episode/js/controllers/userWorkLoadListController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++keyword/src/keyword/js/services/keywordServices.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
    }
  );

  group(
    `page_19 - ${BASE_URL}/cms/ZeUI/core_portal#/episode/user_work_load_lis`,
    function () {
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Episode/Controller/get_user_work_load?client_idn=&currentPage=1&search_alpha=&search_user=`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/Episode/Controller/get_user_work_load?client_idn=&currentPage=&search_alpha=E&search_user=`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/AutoComplete/Controller/payorSearch?is_text=0&max_results=10&query=sam`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/Episode/Controller/get_user_work_load?client_idn=39213&currentPage=&search_alpha=`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/ZeUI/get_left_navigation_links?xml_tag=Manage_Incomplete_Episodes`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++enc/src/episode/partials/inactive-episodes.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++enc/src/episode/js/controllers/assignedEpisodeController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
    }
  );

  group(
    `page_20 - ${BASE_URL}/cms/ZeUI/core_portal#/episode/incomplete_episode/unassigned_episode_vie`,
    function () {
      res = http.get(
        `${BASE_URL}/cms/ZeUI/ZeUI/get_left_navigation_links?xml_tag=Manage_Sup_Content`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++edumaterial/src/edumaterial/partials/edu-search.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++edumaterial/src/edumaterial/js/controllers/searchEduMaterialController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++edumaterial/src/edumaterial/js/services/eduServices.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/EducationalMaterial/Controller/get_serach_educational_material`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/EducationalMaterial/Controller/getEducationalMaterialType`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/EducationalMaterial/Controller/get_educational_materials?is_text=0&max_results=20&query=sam`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/EducationalMaterial/Controller/get_search_edu_materials?material_name=sample&currentPage=1`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }

      res = http.get(
        `${BASE_URL}/cms/ZeUI/EducationalMaterial/Controller/act_deact_edu_material?ACT_DEACT_FLAG=N&EDU_IDN=64892`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/ZeUI/++resource++newsletter/src/newsletter/partials/search-news-letter.html?v=${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++newsletter/src/newsletter/js/controllers/newsLetterSearchController.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
      res = http.get(
        `${BASE_URL}/cms/++resource++newsletter/src/newsletter/js/services/newsLetterServices.js?${Date.now()}`
      );
      if (!check(res, { "status code MUST be 200": (res) => res.status == 200 })) {
        fail(`status code was *not* 200: ${res.status}: URI: ${res.request.url}`);
      }
    }
  );
}