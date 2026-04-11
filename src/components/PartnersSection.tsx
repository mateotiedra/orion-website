import Image from "next/image";

const partners = [
  { src: "/images/logo-partners/Nos partenaires/Caverne de jouvence (pack 1).png", alt: "Caverne de Jouvence", w: 1024, h: 429 },
  { src: "/images/logo-partners/Nos partenaires/Comte (pack 1).jpg", alt: "Comte", w: 723, h: 780 },
  { src: "/images/logo-partners/Nos partenaires/DJ-R (pack 2).png", alt: "DJ-R Location", w: 279, h: 181 },
  { src: "/images/logo-partners/Nos partenaires/Interiware (pack 1).png", alt: "Interiware", w: 2000, h: 666 },
  { src: "/images/logo-partners/Nos partenaires/Logo LD (pack 3).avif", alt: "Logo LD", w: 980, h: 343 },
  { src: "/images/logo-partners/Nos partenaires/Mobilière (pack 2).jpg", alt: "La Mobilière", w: 888, h: 642 },
  { src: "/images/logo-partners/Nos partenaires/nébuleuse (pack 1).png", alt: "Nébuleuse", w: 426, h: 426 },
  { src: "/images/logo-partners/Nos partenaires/Techfirm (pack 1).png", alt: "Techfirm", w: 422, h: 118 },
  { src: "/images/logo-partners/Nos partenaires/Vision immo (pack 3).jpeg", alt: "Vision Immo", w: 364, h: 138 },
];

const supporters = [
  { src: "/images/logo-partners/Ils nous soutiennent/Bernex (1).png", alt: "Commune de Bernex", w: 322, h: 106 },
  { src: "/images/logo-partners/Ils nous soutiennent/Confignon (2).png", alt: "Commune de Confignon", w: 233, h: 136 },
  { src: "/images/logo-partners/Ils nous soutiennent/République et canton de GNV (3).png", alt: "République et canton de Genève", w: 1280, h: 990 },
  { src: "/images/logo-partners/Ils nous soutiennent/Onex (4).png", alt: "Commune d'Onex", w: 1200, h: 341 },
  { src: "/images/logo-partners/Ils nous soutiennent/Plo (5).png", alt: "PLO", w: 128, h: 120 },
  { src: "/images/logo-partners/Ils nous soutiennent/SIG (6).svg", alt: "SIG", w: 431, h: 431 },
  { src: "/images/logo-partners/Ils nous soutiennent/Fondation urlicht (7).webp", alt: "Fondation Urlicht", w: 300, h: 122 },
];

function logoStyle(w: number, h: number) {
  const s = Math.sqrt(w / h).toFixed(4);
  return {
    width: `calc(var(--logo-base) * ${s})`,
    height: `calc(var(--logo-base) / ${s})`,
  };
}

const logoClass =
  "object-contain grayscale invert opacity-70 hover:opacity-100 mix-blend-screen transition-opacity duration-500";

const rowClass =
  "flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 [--logo-base:64px] md:[--logo-base:72px] lg:[--logo-base:88px]";

export default function PartnersSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-bleu-orion grain-overlay">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center font-[var(--font-heading)] text-xs uppercase tracking-[0.3em] text-white font-bold mb-8 md:mb-12">
          Nos partenaires
        </h3>
        <div className={`${rowClass} mb-16 md:mb-20`}>
          {partners.map((p) => (
            <Image
              key={p.alt}
              src={p.src}
              alt={p.alt}
              width={p.w}
              height={p.h}
              style={logoStyle(p.w, p.h)}
              className={logoClass}
            />
          ))}
        </div>

        <h3 className="text-center font-[var(--font-heading)] text-xs uppercase tracking-[0.3em] text-white font-bold mb-8 md:mb-12">
          Ils nous soutiennent
        </h3>
        <div className={rowClass}>
          {supporters.map((s) => (
            <Image
              key={s.alt}
              src={s.src}
              alt={s.alt}
              width={s.w}
              height={s.h}
              style={logoStyle(s.w, s.h)}
              className={logoClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
