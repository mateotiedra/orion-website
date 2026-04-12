import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/PartnersSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dons | Orion Festival",
  description:
    "Soutenez l'aventure Orion — chaque contribution nous rapproche de notre but. Festival de musique, 18-19 septembre 2026, Bernex.",
};

const values = [
  { verb: "Propulser", text: "des artistes locaux émergents." },
  { verb: "Financer", text: "un événement convivial, fédérateur et accessible à tous." },
  { verb: "Valoriser", text: "le savoir-faire des entreprises de notre région." },
  { verb: "Défendre", text: "nos valeurs\u00a0: accessibilité, ancrage local, inclusivité et écologie." },
  { verb: "Porter", text: "le rêve d'une équipe de 23 étudiants passionnés." },
];

const tiers = [
  { amount: "20", description: "Paie le café pour tenir une semaine de montage." },
  { amount: "50", description: "Permet d'offrir 15 repas à nos bénévoles." },
  { amount: "100", description: "Finance l'intégralité des affiches Orion." },
  { amount: "500", description: "Couvre le cachet d'un artiste émergent." },
  { amount: "1000", description: "Finance l'intégralité des t-shirts de l'équipe de bénévoles." },
];

export default function DonsPage() {
  return (
    <>
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="relative bg-bleu-orion pt-28 md:pt-36 pb-20 md:pb-32 px-4 md:px-6 grain-overlay text-center">
        <Image
          src="/images/decorations/etoile-polaire-rose.png"
          alt=""
          width={800}
          height={800}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[60%] opacity-60 pointer-events-none"
          aria-hidden="true"
          priority
        />
        {/* Constellation scatter — rose stars */}
        <Image src="/images/decorations/etoile-rose.png" alt="" width={60} height={60} className="absolute top-[28%] left-[10%] w-5 md:w-9 opacity-50 rotate-[16deg] pointer-events-none z-[6]" aria-hidden="true" />
        <Image src="/images/decorations/etoile-rose.png" alt="" width={60} height={60} className="absolute bottom-[26%] right-[10%] w-6 md:w-10 opacity-45 -rotate-[20deg] pointer-events-none z-[6]" aria-hidden="true" />
        <Image src="/images/decorations/etoile-rose.png" alt="" width={60} height={60} className="absolute top-[24%] right-[18%] w-4 md:w-7 opacity-40 rotate-[28deg] pointer-events-none z-[6]" aria-hidden="true" />
        <div className="relative z-20 max-w-5xl mx-auto">
          <h1 className="page-title text-[6.5vw] md:text-[4vw]">
            Soutenez l&apos;aventure Orion&nbsp;!
          </h1>
        </div>
      </section>

      {/* ============ APPEAL TEXT ============ */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-cream relative grain-overlay">
        <Image
          src="/images/decorations/etoile-polaire-bleu.png"
          alt=""
          width={800}
          height={800}
          className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 w-[60%] md:w-[40%] opacity-40 pointer-events-none"
          aria-hidden="true"
        />
        {/* Constellation scatter — blue stars */}
        <Image src="/images/decorations/etoile-bleu.png" alt="" width={60} height={60} className="absolute top-[14%] left-[8%] w-5 md:w-8 opacity-30 rotate-[18deg] pointer-events-none z-[5]" aria-hidden="true" />
        <Image src="/images/decorations/etoile-bleu.png" alt="" width={60} height={60} className="absolute bottom-[20%] left-[18%] w-4 md:w-7 opacity-25 -rotate-[22deg] pointer-events-none z-[5]" aria-hidden="true" />
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="font-heading text-bleu-orion text-2xl md:text-4xl lg:text-5xl font-black leading-tight mb-8 md:mb-12">
            Pour sa première édition, Orion a plus que jamais besoin de vous.
          </p>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
            Depuis plus d&apos;un an, notre équipe d&apos;une vingtaine
            d&apos;étudiants travaille sans relâche pour donner vie à ce
            projet. Aujourd&apos;hui, il ne nous manque qu&apos;une dernière
            étape&nbsp;: boucler notre budget pour garantir la viabilité du
            festival.
          </p>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
            Si des sponsors et fondations croient déjà en nous, votre soutien
            individuel est la clé pour réaliser l&apos;événement que vous
            méritez. Quel que soit le montant, chaque contribution nous
            rapproche de notre but&nbsp;!
          </p>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-bleu-orion grain-overlay">
        <div className="max-w-4xl mx-auto relative z-20">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-12 md:mb-16">
            Soutenir Orion, c&apos;est&nbsp;:
          </h2>
          <ul className="space-y-6 md:space-y-8">
            {values.map((v) => (
              <li key={v.verb} className="flex items-start gap-4 md:gap-6">
                <Image
                  src="/images/logo/mono-blanc-etoile.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="w-5 h-5 md:w-6 md:h-6 mt-1 shrink-0 opacity-70"
                  aria-hidden="true"
                />
                <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed">
                  <span className="font-heading font-black text-rose-orion uppercase">
                    {v.verb}
                  </span>{" "}
                  {v.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ IMPACT TIERS ============ */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-cream relative grain-overlay">
        {/* Constellation scatter — blue stars */}
        <Image src="/images/decorations/etoile-bleu.png" alt="" width={60} height={60} className="absolute top-[10%] right-[10%] w-5 md:w-9 opacity-30 -rotate-[16deg] pointer-events-none z-[5]" aria-hidden="true" />
        <Image src="/images/decorations/etoile-bleu.png" alt="" width={60} height={60} className="absolute bottom-[14%] right-[18%] w-4 md:w-7 opacity-25 rotate-[24deg] pointer-events-none z-[5]" aria-hidden="true" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-7xl font-black text-bleu-orion uppercase tracking-tighter mb-12 md:mb-16">
            À quoi servira votre don&nbsp;?
          </h2>
          <div className="space-y-8 md:space-y-10">
            {tiers.map((tier) => (
              <div
                key={tier.amount}
                className="flex items-end gap-4 md:gap-8 border-b border-gray-200 pb-6 md:pb-8"
              >
                <span className="font-heading text-4xl md:text-6xl lg:text-8xl font-black text-rose-orion shrink-0 leading-none">
                  {tier.amount}
                  <span className="text-lg md:text-2xl lg:text-3xl ml-1">
                    CHF
                  </span>
                </span>
                <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed flex-1 text-right">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PAYMENT INFO ============ */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-bleu-orion grain-overlay">
        <div className="max-w-5xl mx-auto relative z-20">
          <h2 className="font-heading text-2xl md:text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-12 md:mb-16 text-center">
            Soutenir Orion, c&apos;est simple et rapide&nbsp;!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Virement bancaire */}
            <div className="bg-white/10 p-8 md:p-12">
              <h3 className="font-heading text-rose-orion text-lg md:text-xl font-black uppercase tracking-widest mb-6 md:mb-8">
                Par virement bancaire
              </h3>
              <div className="space-y-4 text-white/90">
                <div>
                  <span className="font-heading text-xs uppercase tracking-widest text-white/50 block mb-1">
                    IBAN
                  </span>
                  <span className="text-lg md:text-xl font-bold font-heading">
                    CH12 0900 0000 1673 6120 8
                  </span>
                </div>
                <div>
                  <span className="font-heading text-xs uppercase tracking-widest text-white/50 block mb-1">
                    Bénéficiaire
                  </span>
                  <span className="text-base md:text-lg">
                    Association Orion
                  </span>
                </div>
                <div>
                  <span className="font-heading text-xs uppercase tracking-widest text-white/50 block mb-1">
                    Adresse
                  </span>
                  <span className="text-base md:text-lg">
                    Route de Soral 17, 1232 Confignon
                  </span>
                </div>
              </div>
            </div>

            {/* Twint */}
            <div className="bg-white/10 p-8 md:p-12">
              <h3 className="font-heading text-rose-orion text-lg md:text-xl font-black uppercase tracking-widest mb-6 md:mb-8">
                Par Twint
              </h3>
              <p className="text-white/70 text-sm md:text-base mb-6">
                Scannez le QR code ci-dessous pour faire un don en quelques
                secondes&nbsp;:
              </p>
              <div className="w-40 h-40 md:w-48 md:h-48 bg-white/20 flex items-center justify-center mx-auto">
                <span className="font-heading text-white/40 text-xs uppercase tracking-widest text-center">
                  QR Code
                  <br />
                  Twint
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnersSection />
      <Footer />
    </>
  );
}
