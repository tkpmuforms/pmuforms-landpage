import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { normalizeReferralCode, readAttribution } from "../../attribution";
import { WEB_APP_URL } from "../../constants/links";
import { HOLIDAY_OFFER, holidayOfferActive } from "../../constants/holiday";
import { REFERRAL_DISCOUNT, formatPrice } from "../../constants/pricing";
import "./referralBanner.scss";

const DISMISSED_KEY = "pmu_ref_banner_dismissed";

const wasDismissed = (code: string) => {
  try {
    return window.localStorage.getItem(DISMISSED_KEY) === code;
  } catch {
    return false;
  }
};

/**
 * Shown to visitors who arrived through a friend's referral link, and while
 * the holiday offer runs, to everyone else on the home page. Decided only
 * after mount: the prerendered HTML never contains it, so hydration always
 * matches.
 */
const ReferralBanner = () => {
  const { search, pathname } = useLocation();
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(search);
    const fromUrl = normalizeReferralCode(params.get("code") ?? params.get("ref"));
    const stored = pathname === "/" ? readAttribution()?.ref : undefined;
    const holiday = pathname === "/" && holidayOfferActive() ? HOLIDAY_OFFER.code : undefined;
    const found = fromUrl ?? stored ?? holiday ?? null;
    setCode(found && !wasDismissed(found) ? found : null);
  }, [search, pathname]);

  if (!code) return null;
  const isHoliday = code === HOLIDAY_OFFER.code;

  const dismiss = () => {
    try {
      window.localStorage.setItem(DISMISSED_KEY, code);
    } catch {
      // private mode: just hide it for now
    }
    setCode(null);
  };

  return (
    <aside
      className="referral-banner"
      aria-label={isHoliday ? "Holiday offer" : "Referral invitation"}
    >
      {isHoliday ? (
        <p className="referral-banner__text">
          <strong>🎁 Holiday offer: start {HOLIDAY_OFFER.year} strong.</strong> Your first
          month is on us, on any plan, with code <strong>{HOLIDAY_OFFER.code}</strong>.
        </p>
      ) : (
        <p className="referral-banner__text">
          <strong>A fellow artist invited you to PMU Forms.</strong> Your first month is free
          on any plan ({formatPrice(REFERRAL_DISCOUNT)} off your first payment) when you
          subscribe in the web app.
        </p>
      )}
      <div className="referral-banner__actions">
        <a
          className="referral-banner__cta"
          // the app saves the code and applies it at payment
          href={`${WEB_APP_URL.replace(/\/+$/, "")}/?code=${encodeURIComponent(code)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Claim it
        </a>
        <button
          type="button"
          className="referral-banner__close"
          onClick={dismiss}
          aria-label={isHoliday ? "Dismiss holiday offer" : "Dismiss invitation"}
        >
          ×
        </button>
      </div>
    </aside>
  );
};

export default ReferralBanner;
