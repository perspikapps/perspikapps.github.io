// Google Analytics measurement ID.
// Replace with your actual GA4 property ID (format: G-XXXXXXXXXX).
export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

export const CONSENT_STORAGE_KEY = "perspikapps.cookie-consent";

const SCRIPT_ID = "ga4-loader";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function loadAnalytics() {
  if (typeof window === "undefined") return;
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID.includes("XXXXXXXXXX")) return;
  if (document.getElementById(SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
}

export function unloadAnalytics() {
  if (typeof window === "undefined") return;
  document.getElementById(SCRIPT_ID)?.remove();
  // Clear GA cookies best-effort
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0]?.trim();
    if (name && (name.startsWith("_ga") || name === "_gid")) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${window.location.hostname}`;
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${window.location.hostname}`;
    }
  });
  window.dataLayer = [];
}
