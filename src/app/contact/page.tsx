import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Orion Festival",
  description:
    "Contactez l'équipe Orion Festival — programmation, financement, administration. 18-19 septembre 2026, Bernex.",
};

const contacts = [
  {
    label: "Administratif",
    email: "Administratif@orionfestival.ch",
    description: "Contact principal de l'association",
    primary: true,
  },
  {
    label: "Programmation",
    email: "Programmation@orionfestival.ch",
    description: "Questions sur les artistes et la scène",
    primary: false,
  },
  {
    label: "Financement",
    email: "Financement@orionfestival.ch",
    description: "Partenariats et sponsors",
    primary: false,
  },
];

export default function ContactPage() {
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
        <Image src="/images/decorations/etoile-rose.png" alt="" width={60} height={60} className="absolute top-[28%] left-[12%] w-5 md:w-8 opacity-50 rotate-[18deg] pointer-events-none z-[6]" aria-hidden="true" />
        <Image src="/images/decorations/etoile-rose.png" alt="" width={60} height={60} className="absolute top-[40%] right-[14%] w-4 md:w-7 opacity-45 -rotate-[24deg] pointer-events-none z-[6]" aria-hidden="true" />
        <Image src="/images/decorations/etoile-rose.png" alt="" width={60} height={60} className="absolute bottom-[20%] left-[20%] w-6 md:w-10 opacity-40 rotate-[10deg] pointer-events-none z-[6]" aria-hidden="true" />
        <div className="relative z-20 max-w-7xl mx-auto">
          <h1 className="page-title text-[10vw] md:text-[6vw]">
            Contact
          </h1>
        </div>
      </section>

      {/* ============ CONTACT EMAILS ============ */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-cream relative grain-overlay">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="space-y-8 md:space-y-12">
            {contacts.map((contact) => (
              <a
                key={contact.email}
                href={`mailto:${contact.email}`}
                className={`block p-6 md:p-10 transition-all duration-300 hover:scale-[1.02] ${
                  contact.primary
                    ? "bg-bleu-orion text-white"
                    : "bg-white border border-gray-100 hover:border-bleu-orion/20"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 min-w-0">
                  <div className="min-w-0 flex-1">
                    <span
                      className={`font-heading text-xs uppercase tracking-[0.2em] font-bold block mb-2 ${
                        contact.primary ? "text-rose-orion" : "text-rose-orion"
                      }`}
                    >
                      {contact.label}
                    </span>
                    <span
                      className={`font-heading text-base md:text-lg lg:text-xl font-black block mb-2 break-all ${
                        contact.primary ? "text-white" : "text-bleu-orion"
                      }`}
                    >
                      {contact.email}
                    </span>
                    <span
                      className={`text-sm md:text-base ${
                        contact.primary ? "text-white/70" : "text-gray-500"
                      }`}
                    >
                      {contact.description}
                    </span>
                  </div>
                  <span
                    className={`font-heading text-xs uppercase tracking-widest font-bold shrink-0 ${
                      contact.primary ? "text-rose-orion" : "text-bleu-orion/50"
                    }`}
                  >
                    Écrire →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SOCIALS + ADDRESS ============ */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-bleu-orion grain-overlay">
        <div className="max-w-4xl mx-auto relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Socials */}
            <div>
              <h2 className="font-heading text-rose-orion text-lg md:text-xl font-black uppercase tracking-widest mb-8">
                Suivez-nous
              </h2>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/orionfestival.ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-bleu-orion transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6 md:w-7 md:h-7" />
                </a>
                <a
                  href="https://tiktok.com/@orionfestival"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-bleu-orion transition-all duration-300"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-6 h-6 md:w-7 md:h-7" />
                </a>
              </div>
            </div>

            {/* Address */}
            <div>
              <h2 className="font-heading text-rose-orion text-lg md:text-xl font-black uppercase tracking-widest mb-8">
                Adresse
              </h2>
              <div className="text-white/80 space-y-2">
                <p className="text-lg md:text-xl font-medium">
                  Association Orion
                </p>
                <p>Route de Soral 17</p>
                <p>1232 Confignon</p>
                <p>Suisse</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MAP ============ */}
      <section className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2764.5!2d6.1!3d46.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDEwJzEyLjAiTiA2wrAwNicwMC4wIkU!5e0!3m2!1sfr!2sch!4v1!5m2!1sfr!2sch&q=Parc+des+Molliers+Bernex+Suisse"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Parc des Molliers, Bernex"
          className="md:h-[500px]"
        />
      </section>

      <Footer />
    </>
  );
}
