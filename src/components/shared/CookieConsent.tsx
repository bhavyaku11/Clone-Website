"use client";

import React, { useState, useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("gsoc_cookie_dismissed") === "true";
}

function getServerSnapshot(): boolean {
  return false;
}

export function CookieConsent() {
  const [localDismissed, setLocalDismissed] = useState(false);
  const isStoredDismissed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const handleDismiss = () => {
    localStorage.setItem("gsoc_cookie_dismissed", "true");
    setLocalDismissed(true);
  };

  if (localDismissed || isStoredDismissed) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-50 bg-[#3c4043] text-white py-2.5 px-4 text-xs sm:text-sm shadow-lg flex flex-wrap items-center justify-between gap-3"
    >
      <p className="text-gray-200">
        This site uses cookies from Google to deliver and enhance the quality of its services and to analyze traffic.
      </p>
      <div className="flex items-center gap-3 shrink-0">
        <a
          href="https://policies.google.com/technologies/cookies"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline font-medium text-xs sm:text-sm"
        >
          Learn more
        </a>
        <button
          type="button"
          onClick={handleDismiss}
          className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded font-medium text-xs sm:text-sm transition-colors"
        >
          OK, got it
        </button>
      </div>
    </div>
  );
}
