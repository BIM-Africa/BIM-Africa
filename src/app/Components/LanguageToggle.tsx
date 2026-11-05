"use client";

import { useEffect, useState } from "react";

const COOKIE = "googtrans";
const FRENCH = "/en/fr";

function isFrench() {
  return document.cookie.split("; ").includes(`${COOKIE}=${FRENCH}`);
}

// Google Translate reads this cookie on load. It can exist on the host and on
// the parent domain, and a leftover copy would keep the page in French.
function setLanguageCookie(value: string | null) {
  const parts = window.location.hostname.split(".");
  const domains = [""];
  for (let i = 0; i < parts.length - 1; i++) {
    domains.push(`; domain=.${parts.slice(i).join(".")}`);
  }
  for (const domain of domains) {
    document.cookie = value
      ? `${COOKIE}=${value}; path=/${domain}`
      : `${COOKIE}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT${domain}`;
  }
}

export default function LanguageToggle() {
  const [french, setFrench] = useState(false);

  useEffect(() => {
    setFrench(isFrench());
  }, []);

  const toggle = () => {
    setLanguageCookie(french ? null : FRENCH);
    window.location.reload();
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={french ? "Switch to English" : "Passer en français"}
      translate="no"
      className="notranslate bg-white rounded-full p-1 sm:p-2 flex items-center space-x-1"
    >
      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#ff1f00] flex items-center justify-center">
        <span className="text-white text-xs font-bold">+</span>
      </div>
      <span className="text-black text-xs sm:text-sm font-medium px-1 sm:px-2">
        {french ? "ENG" : "FR"}
      </span>
    </button>
  );
}
