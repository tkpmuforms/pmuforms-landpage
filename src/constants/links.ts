/** Store and app links, kept in one place so every button stays in sync. */
export const IOS_APP_URL = "https://apps.apple.com/ng/app/pmu-forms/id1497270923";
export const IOS_APP_ID = "1497270923";
export const ANDROID_APP_URL =
  "https://play.google.com/store/apps/details?id=com.pmuforms.mobile";
export const ANDROID_APP_ID = "com.pmuforms.mobile";
export const WEB_APP_URL = "https://artist.pmuforms.com/";

/**
 * The iOS app in the App Store is the old native app, without most of what
 * this site advertises. While the new one is in Apple review, iOS buttons
 * become web signup links and Safari's "Get the app" banner is left out.
 * Flip to true once the new iOS app is approved and live.
 */
export const IOS_APP_LIVE = false;
/**
 * Where iPhone visitors sign up while IOS_APP_LIVE is false. The artist app
 * reads the pmu_attr cookie and the current offer itself, so no code here.
 */
export const WEB_SIGNUP_URL = WEB_APP_URL;
export const DEMO_URL =
  "https://pmuforms.crunch.help/en/pmuforms-functionality/how-to-use-pmu-forms";
export const SITE_URL = "https://pmuforms.com";
export const SUPPORT_EMAIL = "contact@pmuforms.com";
