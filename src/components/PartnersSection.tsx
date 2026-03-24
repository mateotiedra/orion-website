import Image from "next/image";

const partners = [
  { src: "/images/logo-partners/Nos partenaires/Caverne de jouvence (pack 1).png", alt: "Caverne de Jouvence" },
  { src: "/images/logo-partners/Nos partenaires/Comte (pack 1).jpg", alt: "Comte" },
  { src: "/images/logo-partners/Nos partenaires/DJ-R (pack 2).png", alt: "DJ-R Location" },
  { src: "/images/logo-partners/Nos partenaires/Interiware (pack 1).png", alt: "Interiware" },
  { src: "/images/logo-partners/Nos partenaires/Logo LD (pack 3).avif", alt: "Logo LD" },
  { src: "/images/logo-partners/Nos partenaires/Mobilière (pack 2).jpg", alt: "La Mobilière" },
  { src: "/images/logo-partners/Nos partenaires/nébuleuse (pack 1).png", alt: "Nébuleuse" },
  { src: "/images/logo-partners/Nos partenaires/Techfirm (pack 1).png", alt: "Techfirm" },
  { src: "/images/logo-partners/Nos partenaires/Vision immo (pack 3).jpeg", alt: "Vision Immo" },
];

const supporters = [
  { src: "/images/logo-partners/Ils nous soutiennent/Bernex (1).png", alt: "Commune de Bernex" },
  { src: "/images/logo-partners/Ils nous soutiennent/Confignon (2).png", alt: "Commune de Confignon" },
  { src: "/images/logo-partners/Ils nous soutiennent/République et canton de GNV (3).png", alt: "République et canton de Genève" },
  { src: "/images/logo-partners/Ils nous soutiennent/Onex (4).png", alt: "Commune d'Onex" },
  { src: "/images/logo-partners/Ils nous soutiennent/Plo (5).png", alt: "PLO" },
  { src: "/images/logo-partners/Ils nous soutiennent/SIG (6).svg", alt: "SIG" },
  { src: "/images/logo-partners/Ils nous soutiennent/Fondation urlicht (7).webp", alt: "Fondation Urlicht" },
];

export default function PartnersSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-rose-orion">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center font-[var(--font-heading)] text-xs uppercase tracking-[0.3em] text-bleu-orion font-bold mb-8 md:mb-12">
          Nos partenaires
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-20">
          {partners.map((p) => (
            <Image
              key={p.alt}
              src={p.src}
              alt={p.alt}
              width={140}
              height={56}
              className="h-14 md:h-16 lg:h-20 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500 mix-blend-multiply"
            />
          ))}
        </div>

        <h3 className="text-center font-[var(--font-heading)] text-xs uppercase tracking-[0.3em] text-bleu-orion font-bold mb-8 md:mb-12">
          Ils nous soutiennent
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {supporters.map((s) => (
            <Image
              key={s.alt}
              src={s.src}
              alt={s.alt}
              width={140}
              height={56}
              className="h-14 md:h-16 lg:h-20 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500 mix-blend-multiply"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
