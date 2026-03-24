import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'Association | Orion Festival",
  description:
    "Découvrez l'association Orion — 23 membres passionnés, guidés par l'ancrage local, l'accessibilité, l'inclusivité et l'écologie.",
};

const pillars = [
  "Ancrage local",
  "Accessibilité",
  "Inclusivité",
  "Écologie",
];

const members = [
  { name: "Luca Dragon", photo: "ORION - GENEVE - Quentin Pidoux00446.jpg" },
  { name: "Micky", photo: "ORION - GENEVE - Quentin Pidoux00458.jpg" },
  { name: "Romain Grimardias", photo: "ORION - GENEVE - Quentin Pidoux00480.jpg" },
  { name: "Jimmy Cantatore", photo: "ORION - GENEVE - Quentin Pidoux00492.jpg" },
  { name: "Emma Nunes", photo: "ORION - GENEVE - Quentin Pidoux00498.jpg" },
  { name: "Laura Zamperini", photo: "ORION - GENEVE - Quentin Pidoux00510.jpg" },
  { name: "Laurie Favre", photo: "ORION - GENEVE - Quentin Pidoux00526.jpg" },
  { name: "Nicolo Lopez", photo: "ORION - GENEVE - Quentin Pidoux00538.jpg" },
  { name: "Guillaume Udry", photo: "ORION - GENEVE - Quentin Pidoux00548.jpg" },
  { name: "Alexandre Cavallero", photo: "ORION - GENEVE - Quentin Pidoux00569.jpg" },
  { name: "Leo Lopez", photo: "ORION - GENEVE - Quentin Pidoux00577.jpg" },
  { name: "Mozer Nicolas", photo: "ORION - GENEVE - Quentin Pidoux00601.jpg" },
  { name: "Hicham Magnin", photo: "ORION - GENEVE - Quentin Pidoux00613.jpg" },
  { name: "Quentin Pidoux", photo: "ORION - GENEVE - Quentin Pidoux00636.jpg" },
];

const offsets = [
  "", "mt-6 md:mt-12", "", "mt-4 md:mt-16",
  "md:mt-8", "mt-6 md:mt-20", "", "mt-4 md:mt-10",
  "", "mt-6 md:mt-14", "md:mt-6", "mt-4 md:mt-18",
  "", "mt-6 md:mt-10",
];

const rotations = [
  "", "-rotate-1", "rotate-1", "",
  "-rotate-1", "", "rotate-1", "-rotate-1",
  "", "rotate-1", "", "-rotate-1",
  "rotate-1", "",
];

export default function AssociationPage() {
  return (
    <>
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="relative bg-bleu-orion pt-28 md:pt-36 pb-0 px-4 md:px-6 grain-overlay text-center">
        <Image
          src="/images/decorations/nebula-glow.png"
          alt=""
          width={800}
          height={800}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[60%] opacity-50 pointer-events-none mix-blend-multiply"
          aria-hidden="true"
          priority
        />
        <div className="relative z-20 max-w-7xl mx-auto mb-12 md:mb-16">
          <h1 className="font-[var(--font-heading)] font-black text-[10vw] md:text-[7vw] text-white uppercase tracking-tighter leading-[0.85] mb-4 md:mb-6">
            L&apos;Association
          </h1>
          <p className="font-[var(--font-heading)] text-rose-orion text-sm md:text-lg uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">
            23 membres passionnés · 14 secteurs
          </p>
        </div>

        {/* Group photo */}
        <div className="relative z-20 max-w-5xl mx-auto">
          <Image
            src="/images/comite/ORION - GENEVE - Quentin Pidoux00441.jpg"
            alt="L'équipe Orion"
            width={2048}
            height={1365}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* ============ ABOUT / MISSION ============ */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-cream relative grain-overlay">
        <Image
          src="/images/decorations/nebula-glow.png"
          alt=""
          width={800}
          height={800}
          className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 w-[60%] md:w-[40%] opacity-50 pointer-events-none mix-blend-multiply"
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Pull quote */}
          <blockquote className="font-[var(--font-heading)] text-3xl md:text-5xl lg:text-7xl font-black text-bleu-orion tracking-tighter leading-tight mb-12 md:mb-20 text-center">
            &laquo;&nbsp;Pourquoi attendre l&apos;événement idéal quand on peut
            le créer&nbsp;?&nbsp;&raquo;
          </blockquote>

          {/* About text */}
          <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-8">
            Orion est une association à but non lucratif, née de l&apos;amitié
            d&apos;une vingtaine d&apos;étudiants. Notre but&nbsp;? Organiser
            des événements culturels accessibles à toutes et tous, tout en
            promouvant les artistes émergents de notre région. Orion incarne une
            énergie nouvelle, guidée par quatre piliers&nbsp;:
          </p>

          {/* Four pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
            {pillars.map((pillar) => (
              <div
                key={pillar}
                className="py-4 md:py-6 px-4 md:px-6 bg-bleu-orion text-center"
              >
                <span className="font-[var(--font-heading)] text-sm md:text-base font-black text-white uppercase tracking-widest">
                  {pillar}
                </span>
              </div>
            ))}
          </div>

          {/* Origin story */}
          <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
            Unis par l&apos;envie de porter un projet qui nous ressemble, nous
            travaillons depuis mars 2025 à l&apos;organisation d&apos;un
            festival de musique. Notre ambition est claire&nbsp;: en faire un
            rendez-vous annuel incontournable. Et ce n&apos;est que le
            début… D&apos;autres formats d&apos;événements pourraient bientôt
            voir le jour.
          </p>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
            L&apos;organisation d&apos;un événement d&apos;une telle ampleur
            demande du temps et nécessite, avant tout, une équipe motivée.
            L&apos;association rassemble déjà{" "}
            <strong className="text-bleu-orion">23 membres passionnés</strong>{" "}
            répartis en 14 secteurs.
          </p>
        </div>
      </section>

      {/* ============ TEAM GRID ============ */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-bleu-orion grain-overlay">
        <div className="max-w-7xl mx-auto relative z-20">
          <h2 className="font-[var(--font-heading)] text-4xl md:text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-12 md:mb-20 text-center">
            L&apos;équipe
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
            {members.map((member, i) => (
              <div
                key={member.name}
                className={`group ${offsets[i] || ""} ${rotations[i] || ""} transition-all duration-500 hover:rotate-0 hover:scale-[1.03]`}
              >
                <div className="aspect-square relative mb-3 md:mb-4 shadow-xl overflow-hidden">
                  <Image
                    src={`/images/comite/${member.photo}`}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-[var(--font-heading)] font-black text-white uppercase leading-tight">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
