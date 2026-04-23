"use client";

import { useState, useEffect } from "react";

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

export function useCountdownFinished() {
  const [finished, setFinished] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const check = () => setFinished(getTimeLeft() === null);
    check();
    const timer = setInterval(check, 1000);
    return () => clearInterval(timer);
  }, []);

  return finished;
}

const sizeClasses = {
  default: {
    number: "text-3xl md:text-6xl lg:text-7xl",
    label: "text-[9px] md:text-xs",
    separator: "text-2xl md:text-5xl -mt-4 md:-mt-6",
    gap: "gap-3 md:gap-6",
    heading: "text-sm md:text-lg mb-6 md:mb-10",
  },
  lg: {
    number: "text-5xl md:text-8xl lg:text-9xl",
    label: "text-xs md:text-sm",
    separator: "text-4xl md:text-7xl -mt-6 md:-mt-8",
    gap: "gap-4 md:gap-8",
    heading: "text-base md:text-xl mb-8 md:mb-12",
  },
} as const;

export default function CountdownTimer({ label, size = "default" }: { label?: string; size?: keyof typeof sizeClasses }) {
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | undefined>(undefined);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (timeLeft === undefined || timeLeft === null) return null;

  const s = sizeClasses[size];

  const units = [
    { value: timeLeft.days, label: "Jours" },
    { value: timeLeft.hours, label: "Heures" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  return (
    <div className="text-center">
      {label && (
        <p className={`font-heading text-white uppercase tracking-[0.2em] font-bold ${s.heading}`}>
          {label}
        </p>
      )}
      <div className={`flex items-center justify-center ${s.gap}`}>
        {units.map((unit, i) => (
          <div key={unit.label} className={`flex items-center ${s.gap}`}>
            <div className="text-center">
              <span className={`font-heading ${s.number} font-black text-white block leading-none whitespace-nowrap`}>
                {String(unit.value).padStart(2, "0").split("").map((digit, j) => (
                  <span key={j} className="inline-block w-[1em] text-center">{digit}</span>
                ))}
              </span>
              <span className={`font-heading ${s.label} text-rose-orion uppercase tracking-[0.2em] font-bold mt-1 block`}>
                {unit.label}
              </span>
            </div>
            {i < units.length - 1 && (
              <span className={`font-heading ${s.separator} text-white/30 font-bold`}>
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
