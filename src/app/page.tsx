import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/PartnersSection";
import Countdown from "@/components/Countdown";
import { PiHamburger, PiBeerStein, PiPaintBrush, PiSunHorizon } from "react-icons/pi";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ============ HERO SECTION — POSTER STYLE ============ */}
      <section className="relative min-h-screen bg-bleu-orion px-6 md:px-10 lg:px-16 grain-overlay flex flex-col">
        {/* Étoile polaire centrale — anchor of the hero */}
        <Image
          src="/images/decorations/etoile-polaire-rose.png"
          alt=""
          width={800}
          height={800}
          className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[55%] opacity-70 pointer-events-none"
          aria-hidden="true"
          priority
        />

        {/* Étoile déformée — corner accent */}
        <Image
          src="/images/decorations/etoile-deformer-rose.png"
          alt=""
          width={600}
          height={600}
          className="absolute -bottom-20 -right-20 md:bottom-[10%] md:right-[5%] w-[60%] md:w-[35%] opacity-60 pointer-events-none z-[5]"
          aria-hidden="true"
        />

        {/* Constellation scatter — small rose stars */}
        <Image src="/images/decorations/etoile-rose.png" alt="" width={60} height={60} className="absolute top-[18%] left-[12%] w-6 md:w-10 opacity-50 rotate-[14deg] pointer-events-none z-[6]" aria-hidden="true" />
        <Image src="/images/decorations/etoile-rose.png" alt="" width={60} height={60} className="absolute top-[60%] left-[6%] w-4 md:w-6 opacity-40 -rotate-[22deg] pointer-events-none z-[6]" aria-hidden="true" />
        <Image src="/images/decorations/etoile-rose.png" alt="" width={60} height={60} className="absolute top-[22%] right-[14%] w-5 md:w-8 opacity-55 rotate-[35deg] pointer-events-none z-[6]" aria-hidden="true" />
        <Image src="/images/decorations/etoile-rose.png" alt="" width={60} height={60} className="absolute top-[72%] right-[20%] w-4 md:w-7 opacity-40 -rotate-[12deg] pointer-events-none z-[6]" aria-hidden="true" />

        {/* Vertical text — left side */}
        <div className="hidden md:block absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20">
          <p className="font-heading text-rose-orion/60 text-sm lg:text-base uppercase tracking-[0.3em] font-bold whitespace-nowrap -rotate-90 origin-center">
            Sous les étoiles tous les sons brillent
          </p>
        </div>

        {/* Vertical text — right side */}
        <div className="hidden md:block absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20">
          <p className="font-heading text-rose-orion/60 text-sm lg:text-base uppercase tracking-[0.3em] font-bold whitespace-nowrap rotate-90 origin-center">
            Sous les étoiles tous les sons brillent
          </p>
        </div>

        {/* Top bar — location left, date right */}
        <div className="relative z-20 flex justify-between items-start pt-20 md:pt-28">
          <div>
            <p className="font-subtitle text-rose-orion text-xs md:text-sm lg:text-base font-bold uppercase tracking-wider">
              Bernex, Parc des Molliers
            </p>
            <p className="font-subtitle text-rose-orion text-xs md:text-sm lg:text-base font-bold uppercase tracking-wider">
              Entrée prix libre
            </p>
          </div>
          <div className="text-right">
            <p className="font-heading text-rose-orion text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9]">
              18 - 19
              <br />
              SEPT
            </p>
          </div>
        </div>

        {/* Monogram + '26 markers */}
        <div className="hidden md:flex absolute top-[28%] right-[10%] z-20 items-center gap-3">
          <Image src="/images/logo/mono-blanc-etoile.svg" alt="" width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10" aria-hidden="true" />
          <span className="font-heading text-white text-lg lg:text-xl font-bold">&apos;26</span>
        </div>
        <div className="hidden md:flex absolute bottom-[42%] left-[8%] z-20 items-center gap-3">
          <Image src="/images/logo/mono-blanc-etoile.svg" alt="" width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10 opacity-70" aria-hidden="true" />
          <span className="font-heading text-rose-orion text-lg lg:text-xl font-bold">&apos;26</span>
        </div>

        {/* Centre — Logo */}
        <div className="relative z-20 flex-1 flex items-center justify-center py-12 md:py-0">
          <Image
            src="/images/logo/logo-blanc-plein.svg"
            alt="Orion Festival"
            width={600}
            height={150}
            className="w-[70%] md:w-[45%] lg:w-[35%] h-auto"
            priority
          />
        </div>

        {/* Bottom — Lineup or Countdown */}
        <div className="relative z-20 pb-8 md:pb-12 text-center">
          <Countdown>
            {/* Headliners */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-8 mb-2 md:mb-3">
              <span className="font-heading text-rose-orion text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight">
                Liv Del Estal
              </span>
              <Image src="/images/logo/mono-blanc-etoile.svg" alt="" width={40} height={40} className="w-6 h-6 md:w-8 md:h-8 hidden md:block" aria-hidden="true" />
              <span className="font-heading text-rose-orion text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight">
                A6el
              </span>
            </div>

            {/* Secondary */}
            <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 mb-2 md:mb-3">
              {["Stela", "Nore6el", "Beka", "Mia Oud"].map((name, i) => (
                <span key={name} className="flex items-center gap-2 md:gap-4">
                  <span className="font-heading text-rose-orion text-xl md:text-3xl lg:text-5xl font-black uppercase tracking-tight">
                    {name}
                  </span>
                  {i < 3 && (
                    <span className="text-rose-orion/50 text-lg md:text-2xl font-light">
                      &middot;
                    </span>
                  )}
                </span>
              ))}
            </div>

            {/* Supporting */}
            <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-3 mb-2 md:mb-3">
              {["Projet Wipeout", "Mucho", "Halusk", "Habiboo", "Yuri"].map(
                (name, i) => (
                  <span key={name} className="flex items-center gap-2 md:gap-3">
                    <span className="font-heading text-rose-orion text-sm md:text-lg lg:text-2xl font-bold uppercase tracking-tight">
                      {name}
                    </span>
                    {i < 4 && (
                      <span className="text-rose-orion/50 text-sm md:text-lg font-light">
                        &middot;
                      </span>
                    )}
                  </span>
                )
              )}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-3 mb-6 md:mb-10">
              {["Knut", "Burning House", "22Chopper", "Este", "Luane"].map(
                (name, i) => (
                  <span key={name} className="flex items-center gap-2 md:gap-3">
                    <span className="font-heading text-rose-orion text-sm md:text-lg lg:text-2xl font-bold uppercase tracking-tight">
                      {name}
                    </span>
                    {i < 4 && (
                      <span className="text-rose-orion/50 text-sm md:text-lg font-light">
                        &middot;
                      </span>
                    )}
                  </span>
                )
              )}
            </div>

            {/* CTA to programmation */}
            <Link
              href="/programmation"
              className="inline-block mt-6 md:mt-10 px-8 md:px-12 py-3 md:py-4 bg-rose-orion text-bleu-orion font-black uppercase tracking-widest text-xs md:text-sm tilted-btn hover:brightness-110 transition-all"
            >
              <span>Voir la programmation</span>
            </Link>
          </Countdown>

          {/* Orion logo small at bottom */}
          <Image
            src="/images/logo/logo-blanc.svg"
            alt="Orion Festival"
            width={200}
            height={50}
            className="mx-auto mt-8 md:mt-12 w-32 md:w-48 h-auto opacity-80"
          />
        </div>
      </section>

      {/* ============ FESTIVAL — L'ESPACE ORION ============ */}
      <section id="festival" className="py-20 md:py-40 px-4 md:px-6 bg-cream relative grain-overlay">
        {/* Constellation scatter — blue stars */}
        <Image src="/images/decorations/etoile-bleu.png" alt="" width={60} height={60} className="absolute top-[8%] left-[10%] w-6 md:w-10 opacity-30 rotate-[18deg] pointer-events-none z-[5]" aria-hidden="true" />
        <Image src="/images/decorations/etoile-bleu.png" alt="" width={60} height={60} className="absolute top-[40%] right-[8%] w-5 md:w-8 opacity-25 -rotate-[14deg] pointer-events-none z-[5]" aria-hidden="true" />
        <Image src="/images/decorations/etoile-bleu.png" alt="" width={60} height={60} className="absolute bottom-[12%] left-[6%] w-4 md:w-7 opacity-25 rotate-[28deg] pointer-events-none z-[5]" aria-hidden="true" />
        <div className="max-w-7xl mx-auto relative z-10">

          {/* Mobile: title first, then stages. Desktop: stages flank top, title centre */}

          {/* Title + text — shown first on mobile, centred on desktop */}
          <div className="mb-12 md:hidden">
            <span className="font-subtitle uppercase tracking-widest text-rose-orion font-bold text-xs mb-4 block">
              Manifeste
            </span>
            <h2 className="font-heading text-5xl font-black text-bleu-orion mb-6 tracking-tighter leading-[0.85]">
              L&apos;ESPACE <span className="text-rose-orion">ORION</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed font-medium">
              Le temps d&apos;un week-end, le Parc des Molliers se
              métamorphose pour accueillir un festival de musique
              d&apos;envergure, accessible à toutes et tous grâce à une
              entrée à prix libre.
            </p>
          </div>

          {/* Two stages — 2-col on mobile, spread on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-6 md:gap-0 mb-10 md:mb-0">
            <div className="md:col-span-5 relative group">
              <h3 className="hidden md:block font-heading text-[8rem] lg:text-[12rem] font-black text-bleu-orion/8 uppercase tracking-tighter absolute -top-8 lg:-top-14 -left-4 z-0 select-none">
                LIVE
              </h3>
              <div className="relative z-10">
                <h4 className="font-heading text-2xl md:text-4xl lg:text-6xl font-black text-bleu-orion uppercase">
                  Scène <br /> Live
                </h4>
                <p className="font-subtitle text-gray-500 text-[10px] md:text-sm mt-2 md:mt-4 font-bold uppercase tracking-widest">
                  Instruments et voix
                </p>
              </div>
            </div>

            <div className="md:col-span-5 md:col-start-8 relative group md:text-right md:mt-20">
              <h3 className="hidden md:block font-heading text-[8rem] lg:text-[12rem] font-black text-rose-orion/8 uppercase tracking-tighter absolute -top-8 lg:-top-14 right-0 z-0 select-none">
                BEATS
              </h3>
              <div className="relative z-10">
                <h4 className="font-heading text-2xl md:text-4xl lg:text-6xl font-black text-rose-orion uppercase">
                  Scène <br /> DJ
                </h4>
                <p className="font-subtitle text-gray-500 text-[10px] md:text-sm mt-2 md:mt-4 font-bold uppercase tracking-widest">
                  Sets immersifs
                </p>
              </div>
            </div>
          </div>

          {/* Centre title — desktop only (mobile shown above) */}
          <div className="hidden md:block md:max-w-2xl md:mx-auto md:text-center md:py-20 lg:py-32">
            <span className="font-subtitle uppercase tracking-widest text-rose-orion font-bold text-sm mb-6 block">
              Manifeste
            </span>
            <h2 className="font-heading text-7xl lg:text-[8rem] font-black text-bleu-orion mb-12 tracking-tighter leading-[0.85]">
              L&apos;ESPACE{" "}
              <span className="text-rose-orion">ORION</span>
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed font-medium">
              Le temps d&apos;un week-end, le Parc des Molliers se
              métamorphose pour accueillir un festival de musique
              d&apos;envergure, accessible à toutes et tous grâce à une
              entrée à prix libre. Du rap à l&apos;électro, en passant par
              la pop et le rock, Orion met à l&apos;honneur la scène suisse.
            </p>
          </div>

          {/* 4 activities — 2x2 on mobile, alternating left/right on desktop */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:block md:space-y-20 lg:space-y-24">
            {/* Row 1: Gastronomie left, Désaltération right */}
            <div className="contents md:flex md:justify-between md:items-start md:gap-16">
              <div className="relative group md:w-2/5">
                <h3 className="hidden md:block font-heading text-[7rem] lg:text-[10rem] font-black text-bleu-orion/6 uppercase tracking-tighter absolute -top-6 lg:-top-12 -left-4 z-0 select-none">
                  FOOD
                </h3>
                <div className="relative z-10">
                  <PiHamburger className="w-7 h-7 md:w-10 md:h-10 text-rose-orion/50 mb-2" />
                  <h4 className="font-heading text-xl md:text-3xl lg:text-4xl font-black text-bleu-orion uppercase">
                    Gastronomie
                  </h4>
                  <p className="font-subtitle text-gray-500 text-[10px] md:text-sm mt-1 md:mt-2 font-bold uppercase tracking-widest">
                    3 stands de nourriture
                  </p>
                </div>
              </div>

              <div className="relative group md:w-2/5 md:text-right md:mt-12">
                <h3 className="hidden md:block font-heading text-[7rem] lg:text-[10rem] font-black text-rose-orion/6 uppercase tracking-tighter absolute -top-6 lg:-top-12 right-0 z-0 select-none">
                  BARS
                </h3>
                <div className="relative z-10">
                  <PiBeerStein className="w-7 h-7 md:w-10 md:h-10 text-bleu-orion/30 mb-2 md:ml-auto" />
                  <h4 className="font-heading text-xl md:text-3xl lg:text-4xl font-black text-rose-orion uppercase">
                    Désaltération
                  </h4>
                  <p className="font-subtitle text-gray-500 text-[10px] md:text-sm mt-1 md:mt-2 font-bold uppercase tracking-widest">
                    2 bars + Biergarten
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2: Artisanat right, Détente left */}
            <div className="contents md:flex md:justify-between md:items-start md:gap-16 md:flex-row-reverse">
              <div className="relative group md:w-2/5">
                <h3 className="hidden md:block font-heading text-[7rem] lg:text-[10rem] font-black text-bleu-orion/6 uppercase tracking-tighter absolute -top-6 lg:-top-12 -left-4 z-0 select-none">
                  CRAFT
                </h3>
                <div className="relative z-10">
                  <PiPaintBrush className="w-7 h-7 md:w-10 md:h-10 text-rose-orion/50 mb-2" />
                  <h4 className="font-heading text-xl md:text-3xl lg:text-4xl font-black text-bleu-orion uppercase">
                    Artisanat
                  </h4>
                  <p className="font-subtitle text-gray-500 text-[10px] md:text-sm mt-1 md:mt-2 font-bold uppercase tracking-widest">
                    3 stands de créateurs
                  </p>
                </div>
              </div>

              <div className="relative group md:w-2/5 md:text-right md:mt-12">
                <h3 className="hidden md:block font-heading text-[7rem] lg:text-[10rem] font-black text-rose-orion/6 uppercase tracking-tighter absolute -top-6 lg:-top-12 right-0 z-0 select-none">
                  CHILL
                </h3>
                <div className="relative z-10">
                  <PiSunHorizon className="w-7 h-7 md:w-10 md:h-10 text-bleu-orion/30 mb-2 md:ml-auto" />
                  <h4 className="font-heading text-xl md:text-3xl lg:text-4xl font-black text-rose-orion uppercase">
                    Détente
                  </h4>
                  <p className="font-subtitle text-gray-500 text-[10px] md:text-sm mt-1 md:mt-2 font-bold uppercase tracking-widest">
                    Pétanque + chill zones
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing line */}
          <p className="mt-12 md:mt-32 text-center font-subtitle text-rose-orion text-base md:text-2xl lg:text-3xl font-bold uppercase tracking-wider">
            Bref, Orion c&apos;est l&apos;événement à ne pas manquer de 2026&nbsp;!
          </p>

        </div>
      </section>

      <PartnersSection />

      {/* ============ DONS CTA ============ */}
      <section className="py-20 md:py-40 px-4 md:px-6 bg-cream relative grain-overlay">
        <Image
          src="/images/decorations/etoile-polaire-bleu.png"
          alt=""
          width={800}
          height={800}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[50%] opacity-50 pointer-events-none"
          aria-hidden="true"
        />
        {/* Constellation scatter — blue stars */}
        <Image src="/images/decorations/etoile-bleu.png" alt="" width={60} height={60} className="absolute top-[15%] left-[12%] w-5 md:w-8 opacity-30 -rotate-[16deg] pointer-events-none z-[5]" aria-hidden="true" />
        <Image src="/images/decorations/etoile-bleu.png" alt="" width={60} height={60} className="absolute bottom-[18%] right-[14%] w-6 md:w-10 opacity-25 rotate-[22deg] pointer-events-none z-[5]" aria-hidden="true" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-6xl lg:text-8xl font-black text-bleu-orion mb-6 md:mb-10 tracking-tighter">
            Soutenez l&apos;aventure Orion&nbsp;!
          </h2>
          <p className="text-gray-600 text-lg md:text-xl lg:text-2xl mb-10 md:mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
            Pour sa première édition, Orion a plus que jamais besoin de vous.
            Quel que soit le montant, chaque contribution nous rapproche de
            notre but&nbsp;!
          </p>
          <Link
            href="/dons"
            className="inline-flex items-center gap-4 md:gap-6 px-10 md:px-14 py-5 md:py-7 bg-bleu-orion text-white font-black uppercase tracking-widest text-xs md:text-sm tilted-btn hover:brightness-110 transition-all shadow-2xl shadow-bleu-orion/40"
          >
            <span>Faire un don</span>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
