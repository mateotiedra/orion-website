import Image from "next/image";

type Partner = {
  src: string;
  alt: string;
  w: number;
  h: number;
  pack: 1 | 3;
};

const partners: Partner[] = [
  { src: "/images/logo-partners/Nos partenaires/Architech (pack 1).png", alt: "Architech", w: 298, h: 71, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/Brands for Students (pack 1).png", alt: "Brands for Students", w: 359, h: 108, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/Caverne de jouvence (pack 1).png", alt: "Caverne de Jouvence", w: 882, h: 290, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/Comte (pack 1).jpg", alt: "Comte", w: 720, h: 776, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/GIT-IT (pack 1).png", alt: "GIT-IT", w: 1591, h: 1316, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/Interiware (pack 1).png", alt: "Interiware", w: 886, h: 107, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/Logo LD (pack 3).avif", alt: "Logo LD", w: 980, h: 343, pack: 3 },
  { src: "/images/logo-partners/Nos partenaires/Mobilière (pack 2).jpg", alt: "La Mobilière", w: 820, h: 160, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/nébuleuse (pack 1).png", alt: "Nébuleuse", w: 313, h: 352, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/Raiffeisen (pack 2).png", alt: "Raiffeisen", w: 820, h: 121, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/Systeo (pack 1).png", alt: "Systeo", w: 399, h: 110, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/Techfirm (pack 1).png", alt: "Techfirm", w: 440, h: 110, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/Vision immo (pack 3).jpeg", alt: "Vision Immo", w: 364, h: 130, pack: 3 },
  { src: "/images/logo-partners/Nos partenaires/lotterie-romande.png", alt: "Loterie Romande", w: 447, h: 447, pack: 3 },
  { src: "/images/logo-partners/Nos partenaires/flyerline-schweiz-ag.jpeg", alt: "Flyerline Schweiz AG", w: 1600, h: 470, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/king-trone.png", alt: "King Trône", w: 717, h: 301, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/la-manivelle.png", alt: "La Manivelle", w: 1134, h: 851, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/la-renfile.png", alt: "La Renfile", w: 1982, h: 736, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/auberge-de-confignon.png", alt: "Auberge de Confignon", w: 7680, h: 3444, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/alloboissons.png", alt: "Alloboissons", w: 1080, h: 549, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/el-tony.png", alt: "El Tony", w: 1020, h: 1024, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/geneve-aeroport.png", alt: "Genève Aéroport", w: 1200, h: 555, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/ramada.png", alt: "Ramada", w: 7701, h: 1563, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/mp-electricite.webp", alt: "MP électricité", w: 156, h: 137, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/chevalley-transport-sa.png", alt: "Chevalley Transport SA", w: 1200, h: 800, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/geneve-terroir-swisswine.jpg", alt: "Genève Terroir / Swisswine", w: 1565, h: 843, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/my-garage-pro-plus.png", alt: "My Garage Pro+", w: 4022, h: 472, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/secra.png", alt: "SECRA", w: 842, h: 596, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/imprimerie-helvetica.png", alt: "Imprimerie Helvetica", w: 391, h: 135, pack: 1 },
  { src: "/images/logo-partners/Nos partenaires/union-maraichere.png", alt: "Union maraîchère", w: 709, h: 473, pack: 1 },
];

const supporters = [
  { src: "/images/logo-partners/Ils nous soutiennent/Bernex (1).png", alt: "Commune de Bernex", w: 320, h: 106 },
  { src: "/images/logo-partners/Ils nous soutiennent/Confignon (2).png", alt: "Commune de Confignon", w: 233, h: 136 },
  { src: "/images/logo-partners/Ils nous soutiennent/République et canton de GNV (3).png", alt: "République et canton de Genève", w: 1274, h: 986 },
  { src: "/images/logo-partners/Ils nous soutiennent/Onex (4).png", alt: "Commune d'Onex", w: 1200, h: 341 },
  { src: "/images/logo-partners/Ils nous soutiennent/Plo (5).png", alt: "PLO", w: 128, h: 120 },
  { src: "/images/logo-partners/Ils nous soutiennent/SIG (6).svg", alt: "SIG", w: 431, h: 431 },
  { src: "/images/logo-partners/Ils nous soutiennent/Fondation urlicht (7).webp", alt: "Fondation Urlicht", w: 277, h: 76 },
];

function logoStyle(w: number, h: number) {
  const s = Math.sqrt(w / h).toFixed(4);
  return {
    width: `calc(var(--logo-base) * ${s})`,
    height: `calc(var(--logo-base) / ${s})`,
  };
}

const logoClass =
  "object-contain";

const rowClass = "flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16";

type CSSVarStyle = React.CSSProperties & { ["--logo-base"]?: string };

const packRowStyle: Record<1 | 3, CSSVarStyle> = {
  3: { ["--logo-base"]: "clamp(120px, 18vw, 220px)" },
  1: { ["--logo-base"]: "clamp(44px, 6vw, 76px)" },
};

const supportersRowStyle: CSSVarStyle = {
  ["--logo-base"]: "clamp(48px, 6.5vw, 84px)",
};

export default function PartnersSection() {
  const packs: (1 | 3)[] = [3, 1];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white grain-overlay">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center font-heading text-2xl md:text-4xl lg:text-5xl uppercase tracking-tight text-bleu-orion font-black mb-10 md:mb-14">
          Nos partenaires
        </h3>

        <div className="mb-16 md:mb-20 space-y-12 md:space-y-16">
          {packs.map((pack) => {
            const items = partners.filter((p) => p.pack === pack);
            if (items.length === 0) return null;
            return (
              <div key={pack} className={rowClass} style={packRowStyle[pack]}>
                {items.map((p) => (
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
            );
          })}
        </div>

        <h3 className="text-center font-heading text-2xl md:text-4xl lg:text-5xl uppercase tracking-tight text-bleu-orion font-black mb-10 md:mb-14">
          Ils nous soutiennent
        </h3>
        <div className={rowClass} style={supportersRowStyle}>
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
