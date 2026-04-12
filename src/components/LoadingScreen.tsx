"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const dismiss = () => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 600);
    };

    // If the page is already fully loaded (cached / fast connection)
    if (document.readyState === "complete") {
      dismiss();
      return;
    }

    window.addEventListener("load", dismiss);
    // Safety timeout — don't block forever
    const timeout = setTimeout(dismiss, 5000);

    return () => {
      window.removeEventListener("load", dismiss);
      clearTimeout(timeout);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-bleu-orion transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Loading bar */}
        <div className="w-40 h-0.5 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-rose-orion rounded-full animate-loading-bar" />
        </div>
      </div>
    </div>
  );
}
