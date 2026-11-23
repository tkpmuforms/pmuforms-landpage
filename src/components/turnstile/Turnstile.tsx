import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import "./turnstile.scss";

interface TurnstileRenderOptions {
  sitekey: string;
  action?: string;
  "refresh-expired"?: "auto" | "manual" | "never";
  callback?: (token: string) => void;
  "expired-callback"?: () => void;
  "timeout-callback"?: () => void;
  "error-callback"?: (code?: string) => void;
}

interface TurnstileApi {
  render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

let scriptPromise: Promise<TurnstileApi> | undefined;

/** Loads Cloudflare's Turnstile script once per page. */
function loadTurnstile(): Promise<TurnstileApi> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      script.onload = () =>
        window.turnstile
          ? resolve(window.turnstile)
          : reject(new Error("Turnstile did not initialise"));
      script.onerror = () => {
        // allow a later retry to load it again
        scriptPromise = undefined;
        script.remove();
        reject(new Error("Couldn't load Turnstile"));
      };
      document.head.appendChild(script);
    });
  }
  return scriptPromise;
}

type Status =
  | "loading"
  | "ready"
  | "verified"
  | "expired"
  | "error"
  | "unconfigured";

const MESSAGES: Partial<Record<Status, string>> = {
  loading: "Loading verification…",
  expired: "The verification expired. It's refreshing now…",
  error: "The verification couldn't load. Check your connection and try again.",
  unconfigured: "Messages can't be sent right now. Please try again later.",
};

export interface TurnstileHandle {
  /** Gets a fresh token; call after every submission (tokens are single use). */
  reset: () => void;
}

interface Props {
  /** Must match what the API expects for this form. */
  action: string;
  /** Receives the token when the visitor passes, and null when it stops being usable. */
  onVerify: (token: string | null) => void;
  siteKey?: string;
}

/** Cloudflare Turnstile widget. */
const Turnstile = forwardRef<TurnstileHandle, Props>(function Turnstile(
  { action, onVerify, siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY },
  ref
) {
  const container = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const onVerifyRef = useRef(onVerify);
  onVerifyRef.current = onVerify;

  const [status, setStatus] = useState<Status>(
    siteKey ? "loading" : "unconfigured"
  );
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!siteKey) {
      console.error("VITE_TURNSTILE_SITE_KEY is not set");
      setStatus("unconfigured");
      return undefined;
    }
    let cancelled = false;
    setStatus("loading");

    loadTurnstile()
      .then((turnstile) => {
        if (cancelled || !container.current) return;
        widgetId.current = turnstile.render(container.current, {
          sitekey: siteKey,
          action,
          "refresh-expired": "auto",
          callback: (token) => {
            setStatus("verified");
            onVerifyRef.current(token);
          },
          "expired-callback": () => {
            setStatus("expired");
            onVerifyRef.current(null);
          },
          "timeout-callback": () => {
            setStatus("ready");
            onVerifyRef.current(null);
          },
          "error-callback": () => {
            setStatus("error");
            onVerifyRef.current(null);
          },
        });
        setStatus((current) => (current === "loading" ? "ready" : current));
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
      if (widgetId.current != null && window.turnstile) {
        window.turnstile.remove(widgetId.current);
      }
      widgetId.current = null;
    };
  }, [siteKey, action, attempt]);

  const reset = () => {
    onVerifyRef.current(null);
    if (widgetId.current != null && window.turnstile) {
      setStatus("ready");
      window.turnstile.reset(widgetId.current);
    } else {
      // the script never loaded: try again from scratch
      setAttempt((n) => n + 1);
    }
  };

  useImperativeHandle(ref, () => ({ reset }));

  const message = MESSAGES[status];

  return (
    <div className="turnstile">
      <div ref={container} className="turnstile__widget" />
      {message && (
        <p
          className={`turnstile__status turnstile__status--${status}`}
          role={status === "error" || status === "unconfigured" ? "alert" : "status"}
        >
          {message}
          {status === "error" && (
            <button type="button" className="turnstile__retry" onClick={reset}>
              Try again
            </button>
          )}
        </p>
      )}
    </div>
  );
});

export default Turnstile;
