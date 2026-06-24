import Image from "next/image";
import {
  FaApple,
  FaGlobe,
  FaInstagram,
  FaPlay,
  FaSpotify,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Countdown from "@/components/Countdown";
import CountdownTimer from "@/components/CountdownTimer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmation | Orion Festival",
  description:
    "Découvrez la programmation du Orion Festival — 18 et 19 septembre 2026 au Parc des Molliers, Bernex.",
};

type Artist = {
  name: string;
  stage: string;
  isLive: boolean;
  portrait?: string;
  livePhoto?: string;
  shortBio?: string;
  origin?: string;
  genre?: string;
  projectDescription?: string;
  spotify?: string;
  appleMusic?: string;
  youtube?: string;
  instagram?: string;
  tikTok?: string;
  officialWebsite?: string;
  liveVideo?: string;
  officialClip?: string;
};

const artists: Artist[] = [
  {
    name: "Liv Del Estal",
    stage: "Scène Live",
    isLive: true,
    shortBio:
      "Liv del Estal façonne une musique électronique hybride, où la trance nostalgique croise l’acid techno corrosive et le breakbeat nerveux. Sa signature explore un territoire sonore sans frontière, fédérateur et cosmique, traversé par une mélancolie douce et persistante.",
    genre: "Électronique hybride / trance / acid techno / breakbeat",
  },
  {
    name: "A6el",
    stage: "Scène DJ",
    isLive: false,
    shortBio:
      "Jeune artiste de rap suisse originaire de Renens, A6el explore ses expériences personnelles avec des textes introspectifs et mélancoliques, en contraste avec des productions plus lumineuses. Son univers associe une identité visuelle soignée à une voix prometteuse du rap suisse.",
    origin: "Renens, Suisse",
    genre: "Rap suisse",
    spotify: "https://open.spotify.com/intl-fr/artist/3B4P9BeoaJXid1mY7BmUvY",
    instagram: "https://www.instagram.com/princea6el/",
  },
  {
    name: "Stela",
    stage: "Scène Live",
    isLive: true,
    shortBio:
      "Artiste émergent basé à Paris, Stela fusionne rap, électro house et UK garage. Après plusieurs années comme producteur, il passe aussi derrière le micro sur certains morceaux, tout en gardant une forte empreinte électronique.",
    origin: "Paris, France",
    genre: "Rap / électro house / UK garage",
    spotify: "https://open.spotify.com/artist/7I53P9rSqifjrUtMernlW0",
    instagram: "https://www.instagram.com/stelajtm/",
  },
  {
    name: "Beka",
    stage: "Scène Live",
    isLive: true,
    portrait: "/images/artists/beka-presse-3.jpg",
    shortBio:
      "Rappeur franco-algérien installé à Lausanne et membre du collectif 247, Beka mélange RnB, hyperpop et électro pour parler d’ambition, de nostalgie et de relations amoureuses. Son style allie douceur, productions rythmées et mélancolie inspirée de son vécu.",
    origin: "Lausanne, Suisse",
    genre: "Rap / RnB / hyperpop / électro",
    spotify: "https://open.spotify.com/intl-fr/artist/5XAg39R6w6PShdOlNEnEXz",
    instagram: "https://www.instagram.com/247beka_/",
    youtube: "https://youtube.com/@deuxquatresept247",
  },
  {
    name: "Mia Oud",
    stage: "Scène Live",
    isLive: true,
    shortBio:
      "Jeune musicienne valaisanne, Mia Oud apprend la batterie, puis la guitare et le chant. Après des débuts folk, elle évolue vers une neo soul portée par le groove et des voix enchanteresses, avec un nouvel univers inspiré par la jaspe rouge.",
    origin: "Valais, Suisse",
    genre: "Neo soul / folk",
    projectDescription:
      "RED JASPER est un projet intense et vibrant inspiré de la jaspe rouge, autour de la résistance, de l’affirmation, de la surcharge émotionnelle, de la pression, de la libération et de la confiance.",
  },
  { name: "Projet Wipeout", stage: "Scène Live", isLive: true },
  { name: "Mucho", stage: "Scène DJ", isLive: false },
  {
    name: "Halusk",
    stage: "Scène DJ",
    isLive: false,
    shortBio:
      "Artiste et promoteur émergent de Granada, Halusk emmène le public aux racines de la musique électronique. Ses sets mêlent techno, club urbain et latin, breaks et touches hip-hop dans une sélection pensée comme un voyage.",
    origin: "Granada, Espagne",
    genre: "Techno / urban club / latin club / breaks / hip-hop",
  },
  { name: "Habiboo", stage: "Scène Live", isLive: true },
  {
    name: "Yuri",
    stage: "Scène DJ",
    isLive: false,
    shortBio:
      "Chanteuse genevoise aux sonorités dark-folk, Yuri écrit en anglais autour de l’intime, de la nostalgie et du vide. Sa musique douce et mélancolique mêle guitare, superpositions de voix et textures électroniques.",
    origin: "Genève, Suisse",
    genre: "Dark-folk",
    instagram: "https://www.instagram.com/yuritsme/",
    liveVideo: "https://youtu.be/0RYvAcz96Dw",
  },
  { name: "Knut", stage: "Scène Live", isLive: true },
  {
    name: "Burning House",
    stage: "Scène Live",
    isLive: true,
    shortBio:
      "Collectif émergent de quatre jeunes DJs suisses, Burning House réunit production, rap et graphisme dans une ambiance underground singulière. Basé entre Zurich, Genève et Lausanne, le collectif mêle jungle, UK garage, DnB et musiques électroniques.",
    origin: "Zurich / Genève / Lausanne, Suisse",
    genre: "Jungle / UK garage / DnB / électronique",
  },
  { name: "22Chopper", stage: "Scène DJ", isLive: false, origin: "Genève, Suisse" },
  { name: "Este", stage: "Scène Live", isLive: true },
  {
    name: "Semba",
    stage: "Scène DJ",
    isLive: false,
    portrait: "/images/artists/semba.jpg",
    shortBio:
      "DJ genevois, Semba mixe généralement en duo avec KOD mais se produira en solo à Orion. Inspiré par des mouvements musicaux du Brésil, du Nigeria, des USA et d’Haïti, il crée des sets variés à l’énergie contagieuse.",
    origin: "Genève, Suisse",
    genre: "DJ / sonorités brésiliennes, nigérianes, haïtiennes et club",
  },
  {
    name: "Funky McGee",
    stage: "Scène Live",
    isLive: true,
    portrait: "/images/artists/funky-mcgee.jpeg",
    shortBio:
      "Producteur, songwriter et multi-instrumentiste genevois, Funky McGee naît d’une réinvention artistique en 2021. Après plusieurs projets solo, il développe une écriture pop aux couleurs organiques et électroniques, portée par une énergie de scène accessible et directe.",
    origin: "Genève, Suisse",
    genre: "Pop / production / multi-instrumentiste",
    instagram: "https://www.instagram.com/funkymcgee/",
  },
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

const getArtistLinks = (artist: Artist) => {
  const links = [
    artist.spotify ? { label: "Spotify", href: artist.spotify, Icon: FaSpotify } : null,
    artist.appleMusic ? { label: "Apple Music", href: artist.appleMusic, Icon: FaApple } : null,
    artist.youtube ? { label: "YouTube", href: artist.youtube, Icon: FaYoutube } : null,
    artist.instagram ? { label: "Instagram", href: artist.instagram, Icon: FaInstagram } : null,
    artist.tikTok ? { label: "TikTok", href: artist.tikTok, Icon: FaTiktok } : null,
    artist.officialWebsite ? { label: "Site officiel", href: artist.officialWebsite, Icon: FaGlobe } : null,
    artist.liveVideo ? { label: "Vidéo live", href: artist.liveVideo, Icon: FaPlay } : null,
    artist.officialClip ? { label: "Clip officiel", href: artist.officialClip, Icon: FaYoutube } : null,
  ];

  return links.filter((link): link is NonNullable<(typeof links)[number]> => link !== null);
};

export default function ProgrammationPage() {
  return (
    <>
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="relative bg-bleu-orion min-h-screen px-4 md:px-6 grain-overlay text-center flex flex-col items-center justify-center">
        <Image
          src="/images/decorations/etoile-polaire-rose.png"
          alt=""
          width={800}
          height={800}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350%] max-w-none md:w-[75%] md:max-w-[75%] opacity-70 pointer-events-none"
          aria-hidden="true"
          priority
        />
        <Image
          src="/images/decorations/etoile-deformer-rose.png"
          alt=""
          width={600}
          height={600}
          className="absolute -bottom-20 -left-20 md:bottom-[10%] md:left-[5%] w-[50%] md:w-[30%] opacity-50 pointer-events-none"
          aria-hidden="true"
        />
        {/* Constellation scatter — rose stars */}
        <Image src="/images/decorations/etoile-rose.png" alt="" width={60} height={60} className="absolute top-[18%] right-[12%] w-5 md:w-9 opacity-50 rotate-[18deg] pointer-events-none z-[6]" aria-hidden="true" />
        <Image src="/images/decorations/etoile-rose.png" alt="" width={60} height={60} className="absolute top-[30%] left-[14%] w-4 md:w-7 opacity-40 -rotate-[22deg] pointer-events-none z-[6]" aria-hidden="true" />
        <Image src="/images/decorations/etoile-rose.png" alt="" width={60} height={60} className="absolute bottom-[18%] right-[18%] w-6 md:w-10 opacity-45 rotate-[12deg] pointer-events-none z-[6]" aria-hidden="true" />
        <div className="relative z-20 w-full max-w-7xl mx-auto text-center">
          <h1 className="page-title text-[6.5vw] md:text-[5.5vw] mb-4 md:mb-6">
            Programmation
          </h1>
          <p className="font-heading text-rose-orion text-sm md:text-lg uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold mb-10 md:mb-16">
            18 - 19 SEPT &apos;26 · Bernex, Parc des Molliers
          </p>
          <Countdown showTimer={false}>
            <p className="font-heading text-rose-orion text-lg md:text-2xl font-black uppercase tracking-wider">
              Découvrez les artistes ci-dessous
            </p>
          </Countdown>
          <CountdownTimer label="Programmation révélée dans" size="lg" />
        </div>
      </section>

      {/* ============ ARTIST GRID — only visible after countdown ============ */}
      <Countdown showTimer={false}>
        <section className="bg-bleu-orion py-12 md:py-20 px-4 md:px-6 grain-overlay">
          <div className="max-w-7xl mx-auto relative z-20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {artists.map((artist, i) => {
                const links = getArtistLinks(artist);

                return (
                  <div
                    key={artist.name}
                    className={`group ${offsets[i]} ${rotations[i]} transition-all duration-500 hover:rotate-0 hover:scale-[1.03]`}
                  >
                    <div className="aspect-[3/4] bg-gradient-to-br from-white/10 to-white/5 mb-3 md:mb-4 shadow-xl relative overflow-hidden">
                      {artist.portrait ? (
                        <Image
                          src={artist.portrait}
                          alt={artist.name}
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className="object-cover transition-all duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <span className="absolute inset-0 flex items-center justify-center text-white/15 font-heading text-xl md:text-2xl font-black uppercase text-center px-4">
                          {artist.name}
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-[10px] md:text-xs font-heading font-black uppercase tracking-[0.2em] inline-block tilted-btn px-2 py-1 mb-1 md:mb-2 ${artist.isLive
                        ? "text-rose-orion bg-white/10"
                        : "text-white/60 bg-white/10"
                        }`}
                    >
                      <span>{artist.stage}</span>
                    </span>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-black text-white uppercase leading-tight">
                      {artist.name}
                    </h2>
                    {(artist.origin || artist.genre) && (
                      <p className="mt-2 text-[10px] md:text-xs font-heading font-bold uppercase tracking-[0.18em] text-rose-orion/80 leading-relaxed">
                        {[artist.origin, artist.genre].filter(Boolean).join(" · ")}
                      </p>
                    )}
                    {artist.shortBio && (
                      <p className="mt-3 text-xs md:text-sm text-white/75 leading-relaxed">
                        {artist.shortBio}
                      </p>
                    )}
                    {artist.projectDescription && (
                      <details className="mt-3 text-xs md:text-sm text-white/75 leading-relaxed">
                        <summary className="cursor-pointer font-heading font-black uppercase tracking-[0.18em] text-rose-orion">
                          En savoir plus
                        </summary>
                        <p className="mt-2">{artist.projectDescription}</p>
                      </details>
                    )}
                    {links.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {links.map(({ label, href, Icon }) => (
                          <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${artist.name} — ${label}`}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/75 transition-colors hover:bg-rose-orion hover:text-bleu-orion"
                          >
                            <Icon aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Countdown>

      <Footer />
    </>
  );
}
