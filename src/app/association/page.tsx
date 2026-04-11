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
  {
    name: "Ancrage local",
    description: "Faire vivre la scène et les talents de notre région.",
  },
  {
    name: "Accessibilité",
    description: "Une entrée à prix libre pour qu'aucune barrière ne s'impose.",
  },
  {
    name: "Inclusivité",
    description: "Un espace ouvert où chacun·e trouve sa place.",
  },
  {
    name: "Écologie",
    description: "Réduire notre empreinte à chaque étape de l'organisation.",
  },
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
          src="/images/decorations/etoile-polaire-rose.png"
          alt=""
          width={800}
          height={800}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[60%] opacity-60 pointer-events-none"
          aria-hidden="true"
          priority
        />
        {/* Constellation scatter — rose stars */}
        <Image src="/images/decorations/etoile-rose.png" alt="" width={60} height={60} className="absolute top-[20%] left-[10%] w-5 md:w-9 opacity-50 -rotate-[18deg] pointer-events-none z-[6]" aria-hidden="true" />
        <Image src="/images/decorations/etoile-rose.png" alt="" width={60} height={60} className="absolute top-[32%] right-[12%] w-4 md:w-7 opacity-45 rotate-[24deg] pointer-events-none z-[6]" aria-hidden="true" />
        <Image src="/images/decorations/etoile-rose.png" alt="" width={60} height={60} className="absolute top-[14%] right-[26%] w-3 md:w-6 opacity-40 rotate-[8deg] pointer-events-none z-[6]" aria-hidden="true" />
        <div className="relative z-20 max-w-7xl mx-auto mb-12 md:mb-16">
          <h1 className="page-title text-[7.5vw] md:text-[5.5vw] mb-4 md:mb-6">
            L&apos;Association
          </h1>
          <p className="font-heading text-rose-orion text-sm md:text-lg uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">
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
          src="/images/decorations/etoile-polaire-bleu.png"
          alt=""
          width={800}
          height={800}
          className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 w-[60%] md:w-[40%] opacity-40 pointer-events-none"
          aria-hidden="true"
        />
        {/* Constellation scatter — blue stars */}
        <Image src="/images/decorations/etoile-bleu.png" alt="" width={60} height={60} className="absolute top-[12%] left-[8%] w-5 md:w-8 opacity-30 rotate-[20deg] pointer-events-none z-[5]" aria-hidden="true" />
        <Image src="/images/decorations/etoile-bleu.png" alt="" width={60} height={60} className="absolute bottom-[18%] left-[14%] w-4 md:w-7 opacity-25 -rotate-[14deg] pointer-events-none z-[5]" aria-hidden="true" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-20">
            {/* LEFT — Pull quote (sticky on desktop) */}
            <aside className="md:col-span-5">
              <div className="md:sticky md:top-32">
                <div className="border-l-2 border-rose-orion pl-5 md:pl-7">
                  <span className="font-heading text-rose-orion text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold block mb-4 md:mb-6">
                    Manifeste
                  </span>
                  <blockquote className="font-heading text-2xl md:text-3xl lg:text-5xl font-black text-bleu-orion tracking-tighter leading-[1.05]">
                    &laquo;&nbsp;Pourquoi attendre l&apos;événement idéal quand
                    on peut le créer&nbsp;?&nbsp;&raquo;
                  </blockquote>
                </div>
              </div>
            </aside>

            {/* RIGHT — Running content */}
            <div className="md:col-span-7">
              {/* Intro paragraph */}
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Orion est une association à but non lucratif, née de
                l&apos;amitié d&apos;une vingtaine d&apos;étudiants. Notre
                but&nbsp;? Organiser des événements culturels accessibles à
                toutes et tous, tout en promouvant les artistes émergents de
                notre région. Orion incarne une énergie nouvelle, guidée par
                quatre piliers&nbsp;:
              </p>

              {/* Editorial numbered pillars */}
              <div className="mt-12 md:mt-16 space-y-8 md:space-y-12">
                {pillars.map((pillar, i) => (
                  <div
                    key={pillar.name}
                    className="flex items-start gap-5 md:gap-8 border-b border-bleu-orion/10 pb-6 md:pb-10 last:border-b-0"
                  >
                    <span className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-bleu-orion/15 leading-none shrink-0 tracking-tighter">
                      0{i + 1}
                    </span>
                    <div className="flex-1 pt-1 md:pt-2">
                      <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-black text-rose-orion uppercase tracking-tighter mb-2 md:mb-3 leading-none">
                        {pillar.name}
                      </h3>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stat callouts */}
              <div className="grid grid-cols-2 gap-6 md:gap-12 mt-14 md:mt-20 mb-14 md:mb-20 border-y border-bleu-orion/15 py-8 md:py-12">
                <div>
                  <span className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-bleu-orion leading-none block tracking-tighter">
                    23
                  </span>
                  <span className="font-heading text-rose-orion text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold block mt-3 md:mt-4">
                    Membres passionnés
                  </span>
                </div>
                <div>
                  <span className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-bleu-orion leading-none block tracking-tighter">
                    14
                  </span>
                  <span className="font-heading text-rose-orion text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold block mt-3 md:mt-4">
                    Secteurs d&apos;activité
                  </span>
                </div>
              </div>

              {/* Origin story */}
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
                Unis par l&apos;envie de porter un projet qui nous ressemble,
                nous travaillons depuis mars 2025 à l&apos;organisation
                d&apos;un festival de musique. Notre ambition est
                claire&nbsp;: en faire un rendez-vous annuel incontournable.
                Et ce n&apos;est que le début… D&apos;autres formats
                d&apos;événements pourraient bientôt voir le jour.
              </p>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                L&apos;organisation d&apos;un événement d&apos;une telle
                ampleur demande du temps et nécessite, avant tout, une équipe
                motivée — celle que nous avons réussi à réunir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TEAM GRID ============ */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-bleu-orion grain-overlay">
        <div className="max-w-7xl mx-auto relative z-20">
          <h2 className="font-heading text-4xl md:text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-12 md:mb-20 text-center">
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
                    className="object-cover transition-all duration-700"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-black text-white uppercase leading-tight">
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
