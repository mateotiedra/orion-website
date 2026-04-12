"use client";

import { useState, useEffect, type ReactNode } from "react";

const TARGET_DATE = new Date("2026-05-14T00:00:00+02:00");

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();

  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown({
  children,
  showTimer = true,
}: {
  children?: ReactNode;
  showTimer?: boolean;
}) {
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | undefined>(undefined);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Not yet hydrated on client — render nothing to avoid mismatch
  if (timeLeft === undefined) return null;

  // Countdown finished — show children
  if (timeLeft === null) {
    return <>{children}</>;
  }

  // Countdown active but this instance only hides content
  if (!showTimer) return null;

  const units = [
    { value: timeLeft.days, label: "Jours" },
    { value: timeLeft.hours, label: "Heures" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  return (
    <div className="text-center">
      <p className="font-heading text-rose-orion text-sm md:text-lg uppercase tracking-[0.2em] font-bold mb-6 md:mb-10">
        Programmation révélée dans
      </p>
      <div className="flex items-center justify-center gap-3 md:gap-6">
        {units.map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-3 md:gap-6">
            <div className="text-center w-[3ch] md:w-[3ch]">
              <span className="font-heading text-3xl md:text-6xl lg:text-7xl font-black text-white block leading-none">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="font-heading text-[9px] md:text-xs text-rose-orion uppercase tracking-[0.2em] font-bold mt-1 block">
                {unit.label}
              </span>
            </div>
            {i < units.length - 1 && (
              <span className="font-heading text-2xl md:text-5xl text-white/30 font-bold -mt-4 md:-mt-6">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
