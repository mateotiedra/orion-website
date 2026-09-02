"use client";

import { useState } from "react";

type DayKey = "vendredi" | "samedi";
type Stage = "nova" | "club";

type ScheduleSlot = {
  name: string;
  start: string;
  end?: string;
  stage?: Stage;
  artistAnchor?: string;
  kind?: "boundary";
};

const days: { key: DayKey; label: string; shortLabel: string }[] = [
  { key: "vendredi", label: "Vendredi 18 septembre", shortLabel: "Vendredi 18" },
  { key: "samedi", label: "Samedi 19 septembre", shortLabel: "Samedi 19" },
];

const schedule: Record<DayKey, ScheduleSlot[]> = {
  vendredi: [
    { name: "Ouverture", start: "16:00", end: "16:30", kind: "boundary" },
    { name: "22Chopper", start: "16:30", end: "17:30", stage: "club", artistAnchor: "22chopper" },
    { name: "Projet Wipeout", start: "17:30", end: "18:15", stage: "nova", artistAnchor: "projet-wipeout" },
    { name: "Knut", start: "18:15", end: "19:15", stage: "club", artistAnchor: "knut" },
    { name: "Funky McGee", start: "19:15", end: "20:00", stage: "nova", artistAnchor: "funky-mcgee" },
    { name: "Burning House", start: "20:00", end: "21:00", stage: "club", artistAnchor: "burning-house" },
    { name: "Al-Walid", start: "21:00", end: "21:45", stage: "nova" },
    { name: "Halusk", start: "21:45", end: "22:45", stage: "club", artistAnchor: "halusk" },
    { name: "Liv Del Estal", start: "22:45", end: "23:45", stage: "nova", artistAnchor: "liv-del-estal" },
    { name: "Stela", start: "00:00", end: "01:00", stage: "nova", artistAnchor: "stela" },
    { name: "Fermeture", start: "01:30", end: "02:00", kind: "boundary" },
  ],
  samedi: [
    { name: "Ouverture", start: "16:00", end: "16:30", kind: "boundary" },
    { name: "Semba", start: "16:30", end: "17:30", stage: "club", artistAnchor: "semba" },
    { name: "Yuri", start: "17:30", end: "18:15", stage: "nova", artistAnchor: "yuri" },
    { name: "Wamheda", start: "18:15", end: "19:15", stage: "club" },
    { name: "Mia Oud", start: "19:15", end: "20:00", stage: "nova", artistAnchor: "mia-oud" },
    { name: "Mucho", start: "20:00", end: "21:00", stage: "club", artistAnchor: "mucho" },
    { name: "Beka", start: "21:00", end: "21:45", stage: "nova", artistAnchor: "beka" },
    { name: "Esté", start: "21:45", end: "22:45", stage: "club", artistAnchor: "este" },
    { name: "A6el", start: "22:45", end: "23:45", stage: "nova", artistAnchor: "a6el" },
    { name: "Habiboo", start: "00:00", end: "01:00", stage: "nova", artistAnchor: "habiboo" },
    { name: "Fermeture", start: "01:30", end: "02:00", kind: "boundary" },
  ],
};


const timelineStart = 16 * 60;

function minutesFromStart(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  const adjustedHours = hours < 12 ? hours + 24 : hours;
  return adjustedHours * 60 + minutes - timelineStart;
}

function rowFor(time: string) {
  return minutesFromStart(time) / 15 + 1;
}

function spanFor(start: string, end: string) {
  return (minutesFromStart(end) - minutesFromStart(start)) / 15;
}

function SlotContent({ slot, compact = false }: { slot: ScheduleSlot; compact?: boolean }) {
  const content = (
    <>
      <span className={`${compact ? "text-[10px] md:text-[11px]" : "text-[11px] md:text-[13px]"} w-full shrink-0 rounded bg-white px-1 py-1 text-center font-heading font-black uppercase leading-none tracking-[0.04em] text-bleu-orion md:rounded-md md:px-2 md:py-0.5 md:tracking-[0.1em]`}>
        <time>{slot.start.replace(":", "h")}</time>
        {slot.end && <> – <time>{slot.end.replace(":", "h")}</time></>}
      </span>
      <span className={`${compact ? "text-[11px] md:text-base" : "text-xs md:text-xl"} flex min-h-0 w-full flex-1 items-center justify-center text-center font-heading font-black uppercase leading-tight text-white`}>
        {slot.name}
      </span>
    </>
  );

  if (!slot.artistAnchor) return <div className="flex h-full flex-col items-center">{content}</div>;

  return (
    <a
      href={`#artiste-${slot.artistAnchor}`}
      className="flex h-full flex-col items-center rounded-[inherit] outline-none focus-visible:ring-4 focus-visible:ring-white/80"
      aria-label={`${slot.name}, voir la présentation de l’artiste`}
    >
      {content}
    </a>
  );
}

export default function ProgramTimeline() {
  const [activeDay, setActiveDay] = useState<DayKey>("vendredi");
  const activeSlots = schedule[activeDay];

  return (
    <section aria-labelledby="horaires-title" className="relative overflow-hidden bg-white px-4 py-16 grain-overlay md:px-6 md:py-24">
      <div className="relative z-20 mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-3 font-heading text-xs font-black uppercase tracking-[0.28em] text-bleu-orion/65 md:text-sm">
            Deux scènes · deux nuits
          </p>
          <h2 id="horaires-title" className="font-heading text-5xl font-black uppercase leading-none text-bleu-orion md:text-7xl">
            Horaires
          </h2>
        </div>

        <div className="mx-auto mb-10 grid max-w-xl grid-cols-2 gap-2 rounded-2xl bg-bleu-orion/10 p-2" role="tablist" aria-label="Jour de programmation">
          {days.map((day) => {
            const isActive = day.key === activeDay;
            return (
              <button
                key={day.key}
                id={`tab-${day.key}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`programme-${day.key}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveDay(day.key)}
                className={`rounded-xl px-3 py-3 font-heading text-sm font-black uppercase tracking-[0.08em] transition-colors md:text-base ${
                  isActive ? "bg-bleu-orion text-white shadow-lg" : "text-bleu-orion hover:bg-white/40"
                }`}
              >
                <span className="md:hidden">{day.shortLabel}</span>
                <span className="hidden md:inline">{day.label}</span>
              </button>
            );
          })}
        </div>

        <div id={`programme-${activeDay}`} role="tabpanel" aria-labelledby={`tab-${activeDay}`}>

          <div className="overflow-hidden rounded-2xl border-2 border-bleu-orion bg-rose-orion shadow-2xl md:rounded-[2rem] md:border-4">
            <div className="grid grid-cols-[3rem_1fr_1fr] border-b-2 border-bleu-orion bg-bleu-orion text-white md:grid-cols-[5.5rem_1fr_1fr] md:border-b-4">
              <div aria-hidden="true" />
              <div className="border-l border-white/25 px-1 py-3 text-center font-heading text-[10px] font-black uppercase leading-tight tracking-[0.06em] md:px-4 md:py-5 md:text-lg md:tracking-[0.12em]">Scène Nova</div>
              <div className="border-l border-white/25 px-1 py-3 text-center font-heading text-[10px] font-black uppercase leading-tight tracking-[0.06em] md:px-4 md:py-5 md:text-lg md:tracking-[0.12em]">Orion Club</div>
            </div>

            <div
              className="relative grid grid-cols-[3rem_1fr_1fr] md:grid-cols-[5.5rem_1fr_1fr]"
              style={{
                gridTemplateRows: "repeat(40, 22px)",
                backgroundImage: "linear-gradient(to bottom, rgba(20, 82, 128, 0.28) 1px, transparent 1px)",
                backgroundSize: "100% 88px",
              }}
            >
              {Array.from({ length: 11 }, (_, index) => {
                const hour = (16 + index) % 24;
                return (
                  <time
                    key={hour}
                    className="z-10 border-r border-bleu-orion/25 px-1 pt-1 font-heading text-[10px] font-black text-bleu-orion md:border-r-2 md:px-3 md:text-sm"
                    style={{ gridColumn: 1, gridRow: `${index * 4 + 1} / span 4` }}
                  >
                    {String(hour).padStart(2, "0")}h
                  </time>
                );
              })}

              {activeSlots.map((slot) => {
                const isBoundary = slot.kind === "boundary";
                return (
                  <article
                    key={`${slot.start}-${slot.name}`}
                    className={`z-20 m-0.5 overflow-hidden rounded-lg border-2 border-bleu-orion px-1 md:m-1 md:rounded-xl md:px-4 ${
                      isBoundary ? "bg-white/90 py-0 text-center" : "bg-bleu-orion py-1 shadow-md transition-transform hover:-translate-y-0.5 md:py-2"
                    }`}
                    style={{
                      gridColumn: isBoundary ? "2 / 4" : slot.stage === "nova" ? 2 : 3,
                      gridRow: `${rowFor(slot.start)} / span ${spanFor(slot.start, slot.end!)}`,
                    }}
                  >
                    {isBoundary ? (
                      <div className="flex h-full items-center justify-center gap-1 md:gap-3">
                        <time className="font-heading text-[10px] font-black uppercase leading-none tracking-[0.04em] text-bleu-orion md:text-sm md:tracking-[0.08em]">{slot.start.replace(":", "h")}</time>
                        <span className="font-heading text-xs font-black uppercase leading-none text-bleu-orion md:text-lg">{slot.name}</span>
                      </div>
                    ) : (
                      <SlotContent slot={slot} compact={spanFor(slot.start, slot.end!) <= 3} />
                    )}
                  </article>
                );
              })}
            </div>
          </div>

          <p className="mt-6 text-center font-heading text-xs font-black uppercase tracking-[0.16em] text-bleu-orion/65">
            Sélectionnez un artiste pour découvrir son univers
          </p>
        </div>
      </div>
    </section>
  );
}
