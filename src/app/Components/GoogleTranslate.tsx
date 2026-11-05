"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
          elementId: string,
        ) => unknown;
      };
    };
  }
}

// Google Translate moves text nodes into <font> tags, so React can no longer
// find them when it re-renders and the page crashes. Ignore those stale moves.
function patchDomForTranslate() {
  const { removeChild, insertBefore } = Node.prototype;

  Node.prototype.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) return child;
    return removeChild.call(this, child) as T;
  };

  Node.prototype.insertBefore = function <T extends Node>(this: Node, node: T, ref: Node | null): T {
    if (ref && ref.parentNode !== this) return node;
    return insertBefore.call(this, node, ref) as T;
  };
}

// Only loads for visitors who picked French, so English visitors and crawlers
// get the normal page with no third-party script.
export default function GoogleTranslate() {
  useEffect(() => {
    if (!document.cookie.split("; ").includes("googtrans=/en/fr")) return;

    patchDomForTranslate();
    window.googleTranslateElementInit = () => {
      new window.google!.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,fr", autoDisplay: false },
        "google_translate_element",
      );
    };

    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div id="google_translate_element" className="hidden" aria-hidden="true" />;
}
