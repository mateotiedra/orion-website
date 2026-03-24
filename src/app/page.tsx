import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ============ HERO SECTION — POSTER STYLE ============ */}
      <section className="relative min-h-screen bg-bleu-orion px-6 md:px-10 lg:px-16 grain-overlay flex flex-col">
        {/* Decorative nebula image — centre */}
        <Image
          src="/images/decorations/nebula-glow.png"
          alt=""
          width={800}
          height={800}
          className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[55%] opacity-60 pointer-events-none mix-blend-multiply"
          aria-hidden="true"
          priority
        />

        {/* Iridescent blob decoration */}
        <Image
          src="/images/decorations/iridescent-blob.png"
          alt=""
          width={600}
          height={600}
          className="absolute -bottom-20 -right-20 md:bottom-[10%] md:right-[5%] w-[60%] md:w-[35%] opacity-70 pointer-events-none mix-blend-screen z-[5]"
          aria-hidden="true"
        />

        {/* Vertical text — left side */}
        <div className="hidden md:block absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20">
          <p className="font-[var(--font-heading)] text-rose-orion/60 text-sm lg:text-base uppercase tracking-[0.3em] font-bold whitespace-nowrap -rotate-90 origin-center">
            Sous les étoiles tous les sons brillent
          </p>
        </div>

        {/* Vertical text — right side */}
        <div className="hidden md:block absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20">
          <p className="font-[var(--font-heading)] text-rose-orion/60 text-sm lg:text-base uppercase tracking-[0.3em] font-bold whitespace-nowrap rotate-90 origin-center">
            Sous les étoiles tous les sons brillent
          </p>
        </div>

        {/* Top bar — location left, date right */}
        <div className="relative z-20 flex justify-between items-start pt-20 md:pt-28">
          <div>
            <p className="font-[var(--font-heading)] text-rose-orion text-xs md:text-sm lg:text-base font-black uppercase tracking-wider">
              Bernex, Parc des Molliers
            </p>
            <p className="font-[var(--font-heading)] text-rose-orion text-xs md:text-sm lg:text-base font-black uppercase tracking-wider">
              Entrée prix libre
            </p>
          </div>
          <div className="text-right">
            <p className="font-[var(--font-heading)] text-rose-orion text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9]">
              18 - 19
              <br />
              SEPT
            </p>
          </div>
        </div>

        {/* Monogram + '26 markers */}
        <div className="hidden md:flex absolute top-[28%] right-[10%] z-20 items-center gap-3">
          <Image src="/images/logo/mono-blanc-etoile.svg" alt="" width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10" aria-hidden="true" />
          <span className="font-[var(--font-heading)] text-white text-lg lg:text-xl font-bold">&apos;26</span>
        </div>
        <div className="hidden md:flex absolute bottom-[42%] left-[8%] z-20 items-center gap-3">
          <Image src="/images/logo/mono-blanc-etoile.svg" alt="" width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10 opacity-70" aria-hidden="true" />
          <span className="font-[var(--font-heading)] text-rose-orion text-lg lg:text-xl font-bold">&apos;26</span>
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

        {/* Bottom — Lineup text hierarchy (poster style) */}
        <div className="relative z-20 pb-8 md:pb-12 text-center">
          {/* Headliners */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-8 mb-2 md:mb-3">
            <span className="font-[var(--font-heading)] text-rose-orion text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight">
              Liv Del Estal
            </span>
            <Image src="/images/logo/mono-blanc-etoile.svg" alt="" width={40} height={40} className="w-6 h-6 md:w-8 md:h-8 hidden md:block" aria-hidden="true" />
            <span className="font-[var(--font-heading)] text-rose-orion text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight">
              A6el
            </span>
          </div>

          {/* Secondary */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 mb-2 md:mb-3">
            {["Stela", "Nore6el", "Beka", "Mia Oud"].map((name, i) => (
              <span key={name} className="flex items-center gap-2 md:gap-4">
                <span className="font-[var(--font-heading)] text-rose-orion text-xl md:text-3xl lg:text-5xl font-black uppercase tracking-tight">
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
                  <span className="font-[var(--font-heading)] text-rose-orion text-sm md:text-lg lg:text-2xl font-bold uppercase tracking-tight">
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
                  <span className="font-[var(--font-heading)] text-rose-orion text-sm md:text-lg lg:text-2xl font-bold uppercase tracking-tight">
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

      {/* ============ FESTIVAL TEASER ============ */}
      <section className="py-20 md:py-40 px-4 md:px-6 bg-cream relative grain-overlay">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Left column */}
            <div className="md:col-span-5 md:pt-20">
              <span className="font-[var(--font-heading)] uppercase tracking-widest text-rose-orion font-bold text-xs md:text-sm mb-4 md:mb-6 block">
                Manifeste
              </span>
              <h2 className="font-[var(--font-heading)] text-5xl md:text-7xl lg:text-[9rem] font-black text-bleu-orion mb-8 md:mb-12 tracking-tighter leading-[0.85]">
                L&apos;ESPACE{" "}
                <br />
                <span className="text-rose-orion">ORION</span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl lg:text-3xl leading-relaxed max-w-xl font-medium">
                Le temps d&apos;un week-end, le Parc des Molliers se
                métamorphose pour accueillir un festival de musique
                d&apos;envergure, accessible à toutes et tous grâce à une
                entrée à prix libre.
              </p>
              <p className="text-gray-500 text-base md:text-lg mt-6 max-w-xl leading-relaxed">
                Du rap à l&apos;électro, en passant par la pop et le rock,
                Orion met à l&apos;honneur la scène suisse. Notre
                programmation, plus que variée, met en avant des jeunes
                artistes émergents répartis sur deux univers.
              </p>
              <div className="mt-12 md:mt-20 h-[1px] w-full bg-gray-300/30" />
            </div>

            {/* Right column — stages */}
            <div className="md:col-span-5 md:col-start-8 relative">
              <div className="relative space-y-20 md:space-y-40 lg:space-y-48">
                {/* Scène Live */}
                <div className="relative group">
                  <h3 className="hidden md:block font-[var(--font-heading)] text-8xl lg:text-[14rem] font-black text-bleu-orion/10 uppercase tracking-tighter absolute -top-10 lg:-top-20 -left-10 z-0 select-none">
                    LIVE
                  </h3>
                  <div className="relative z-10">
                    <h4 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-6xl font-black text-bleu-orion uppercase">
                      Scène <br /> Live
                    </h4>
                    <p className="text-gray-500 text-xs md:text-sm mt-3 md:mt-4 font-bold uppercase tracking-widest">
                      Pour l&apos;énergie des instruments et des voix
                    </p>
                  </div>
                </div>

                {/* Scène DJ */}
                <div className="relative group md:pl-20">
                  <h3 className="hidden md:block font-[var(--font-heading)] text-8xl lg:text-[14rem] font-black text-rose-orion/10 uppercase tracking-tighter absolute -top-10 lg:-top-20 right-0 z-0 select-none">
                    BEATS
                  </h3>
                  <div className="relative z-10 md:text-left">
                    <h4 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-6xl font-black text-rose-orion uppercase">
                      Scène <br /> DJ
                    </h4>
                    <p className="text-gray-500 text-xs md:text-sm mt-3 md:mt-4 font-bold uppercase tracking-widest">
                      Plus intimiste pour des sets immersifs et dansants
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PARTNERS ============ */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-rose-orion">
        <div className="max-w-7xl mx-auto">
          {/* Nos partenaires */}
          <h3 className="text-center font-[var(--font-heading)] text-xs uppercase tracking-[0.3em] text-bleu-orion font-bold mb-8 md:mb-12">
            Nos partenaires
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-20">
            {[
              { src: "/images/logo-partners/Nos partenaires/Caverne de jouvence (pack 1).png", alt: "Caverne de Jouvence" },
              { src: "/images/logo-partners/Nos partenaires/Comte (pack 1).jpg", alt: "Comte" },
              { src: "/images/logo-partners/Nos partenaires/DJ-R (pack 2).png", alt: "DJ-R Location" },
              { src: "/images/logo-partners/Nos partenaires/Interiware (pack 1).png", alt: "Interiware" },
              { src: "/images/logo-partners/Nos partenaires/Logo LD (pack 3).avif", alt: "Logo LD" },
              { src: "/images/logo-partners/Nos partenaires/Mobilière (pack 2).jpg", alt: "La Mobilière" },
              { src: "/images/logo-partners/Nos partenaires/nébuleuse (pack 1).png", alt: "Nébuleuse" },
              { src: "/images/logo-partners/Nos partenaires/Techfirm (pack 1).png", alt: "Techfirm" },
              { src: "/images/logo-partners/Nos partenaires/Vision immo (pack 3).jpeg", alt: "Vision Immo" },
            ].map((partner) => (
              <Image
                key={partner.alt}
                src={partner.src}
                alt={partner.alt}
                width={140}
                height={56}
                className="h-14 md:h-16 lg:h-20 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500"
              />
            ))}
          </div>

          {/* Ils nous soutiennent */}
          <h3 className="text-center font-[var(--font-heading)] text-xs uppercase tracking-[0.3em] text-bleu-orion font-bold mb-8 md:mb-12">
            Ils nous soutiennent
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {[
              { src: "/images/logo-partners/Ils nous soutiennent/Bernex (1).png", alt: "Commune de Bernex" },
              { src: "/images/logo-partners/Ils nous soutiennent/Confignon (2).png", alt: "Commune de Confignon" },
              { src: "/images/logo-partners/Ils nous soutiennent/République et canton de GNV (3).png", alt: "République et canton de Genève" },
              { src: "/images/logo-partners/Ils nous soutiennent/Onex (4).png", alt: "Commune d'Onex" },
              { src: "/images/logo-partners/Ils nous soutiennent/Plo (5).png", alt: "PLO" },
              { src: "/images/logo-partners/Ils nous soutiennent/SIG (6).svg", alt: "SIG" },
              { src: "/images/logo-partners/Ils nous soutiennent/Fondation urlicht (7).webp", alt: "Fondation Urlicht" },
            ].map((supporter) => (
              <Image
                key={supporter.alt}
                src={supporter.src}
                alt={supporter.alt}
                width={140}
                height={56}
                className="h-14 md:h-16 lg:h-20 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============ DONS CTA ============ */}
      <section className="py-20 md:py-40 px-4 md:px-6 bg-cream relative grain-overlay">
        <Image
          src="/images/decorations/nebula-glow.png"
          alt=""
          width={800}
          height={800}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[50%] opacity-60 pointer-events-none mix-blend-multiply"
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-[var(--font-heading)] text-4xl md:text-6xl lg:text-8xl font-black text-bleu-orion mb-6 md:mb-10 tracking-tighter">
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
