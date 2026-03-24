import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Countdown from "@/components/Countdown";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmation | Orion Festival",
  description:
    "Découvrez la programmation du Orion Festival — 18 et 19 septembre 2026 au Parc des Molliers, Bernex.",
};

const artists = [
  { name: "Liv Del Estal", stage: "Scène Live", isLive: true },
  { name: "A6el", stage: "Scène DJ", isLive: false },
  { name: "Stela", stage: "Scène Live", isLive: true },
  { name: "Nore6el", stage: "Scène DJ", isLive: false },
  { name: "Beka", stage: "Scène Live", isLive: true },
  { name: "Mia Oud", stage: "Scène Live", isLive: true },
  { name: "Projet Wipeout", stage: "Scène Live", isLive: true },
  { name: "Mucho", stage: "Scène DJ", isLive: false },
  { name: "Halusk", stage: "Scène DJ", isLive: false },
  { name: "Habiboo", stage: "Scène Live", isLive: true },
  { name: "Yuri", stage: "Scène DJ", isLive: false },
  { name: "Knut", stage: "Scène Live", isLive: true },
  { name: "Burning House", stage: "Scène Live", isLive: true },
  { name: "22Chopper", stage: "Scène DJ", isLive: false },
  { name: "Este", stage: "Scène Live", isLive: true },
  { name: "Luane", stage: "Scène DJ", isLive: false },
];

const offsets = [
  "",
  "mt-8 md:mt-12 lg:mt-16",
  "",
  "mt-6 md:mt-20 lg:mt-24",
  "",
  "mt-10 md:mt-10 lg:mt-14",
  "",
  "mt-8 md:mt-16 lg:mt-20",
  "mt-4 md:mt-8",
  "mt-10 md:mt-20",
  "",
  "mt-6 md:mt-14 lg:mt-18",
  "",
  "mt-8 md:mt-16",
  "",
  "mt-10 md:mt-10",
];

const rotations = [
  "",
  "-rotate-1 md:-rotate-1",
  "rotate-1 md:rotate-1",
  "",
  "-rotate-1 md:-rotate-1",
  "",
  "rotate-1 md:rotate-1",
  "-rotate-1 md:-rotate-1",
  "",
  "rotate-1 md:rotate-1",
  "-rotate-1 md:-rotate-1",
  "",
  "rotate-1 md:rotate-1",
  "",
  "-rotate-1 md:-rotate-1",
  "rotate-1 md:rotate-1",
];

export default function ProgrammationPage() {
  return (
    <>
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="relative bg-bleu-orion min-h-screen px-4 md:px-6 grain-overlay text-center flex flex-col items-center justify-center">
        <Image
          src="/images/decorations/nebula-glow.png"
          alt=""
          width={800}
          height={800}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[60%] opacity-50 pointer-events-none mix-blend-multiply"
          aria-hidden="true"
          priority
        />
        <Image
          src="/images/decorations/iridescent-blob.png"
          alt=""
          width={600}
          height={600}
          className="absolute -bottom-20 -left-20 md:bottom-[10%] md:left-[5%] w-[50%] md:w-[30%] opacity-40 pointer-events-none mix-blend-screen"
          aria-hidden="true"
        />
        <div className="relative z-20 max-w-7xl mx-auto">
          <h1 className="font-[var(--font-heading)] font-black text-[10vw] md:text-[7vw] text-white uppercase tracking-tighter leading-[0.85] mb-4 md:mb-6">
            Programmation
          </h1>
          <p className="font-[var(--font-heading)] text-rose-orion text-sm md:text-lg uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold mb-10 md:mb-16">
            18 - 19 SEPT &apos;26 · Bernex, Parc des Molliers
          </p>
          <Countdown>
            <p className="font-[var(--font-heading)] text-rose-orion text-lg md:text-2xl font-black uppercase tracking-wider">
              Découvrez les artistes ci-dessous
            </p>
          </Countdown>
        </div>
      </section>

      {/* ============ ARTIST GRID — only visible after countdown ============ */}
      <Countdown showTimer={false}>
        <section className="bg-bleu-orion py-12 md:py-20 px-4 md:px-6 grain-overlay">
          <div className="max-w-7xl mx-auto relative z-20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {artists.map((artist, i) => (
                <div
                  key={artist.name}
                  className={`group ${offsets[i]} ${rotations[i]} transition-all duration-500 hover:rotate-0 hover:scale-[1.03]`}
                >
                  <div className="aspect-[3/4] bg-gradient-to-br from-white/10 to-white/5 mb-3 md:mb-4 shadow-xl relative">
                    <span className="absolute inset-0 flex items-center justify-center text-white/15 font-[var(--font-heading)] text-xl md:text-2xl font-black uppercase text-center px-4">
                      {artist.name}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] md:text-xs font-[var(--font-heading)] font-black uppercase tracking-[0.2em] inline-block tilted-btn px-2 py-1 mb-1 md:mb-2 ${
                      artist.isLive
                        ? "text-rose-orion bg-white/10"
                        : "text-white/60 bg-white/10"
                    }`}
                  >
                    <span>{artist.stage}</span>
                  </span>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-[var(--font-heading)] font-black text-white uppercase leading-tight">
                    {artist.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Countdown>

      <Footer />
    </>
  );
}
