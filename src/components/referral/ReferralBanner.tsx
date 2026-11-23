import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { normalizeReferralCode, readAttribution } from "../../attribution";
import { WEB_APP_URL } from "../../constants/links";
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
 * Shown to visitors who arrived through a friend's referral link. Decided
 * only after mount: the prerendered HTML never contains it, so hydration
 * always matches.
 */
const ReferralBanner = () => {
  const { search, pathname } = useLocation();
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    const fromUrl = normalizeReferralCode(new URLSearchParams(search).get("ref"));
    const stored = pathname === "/" ? readAttribution()?.ref : undefined;
    const found = fromUrl ?? stored ?? null;
    setCode(found && !wasDismissed(found) ? found : null);
  }, [search, pathname]);

  if (!code) return null;

  const dismiss = () => {
    try {
      window.localStorage.setItem(DISMISSED_KEY, code);
    } catch {
      // private mode: just hide it for now
    }
    setCode(null);
  };

  return (
    <aside className="referral-banner" aria-label="Referral invitation">
      <p className="referral-banner__text">
        <strong>A fellow artist invited you to PMU Forms.</strong> Get $19.99 off your first
        payment when you subscribe in the web app.
      </p>
      <div className="referral-banner__actions">
        <a
          className="referral-banner__cta"
          href={WEB_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Claim it
        </a>
        <button
          type="button"
          className="referral-banner__close"
          onClick={dismiss}
          aria-label="Dismiss invitation"
        >
          ×
        </button>
      </div>
    </aside>
  );
};

export default ReferralBanner;
