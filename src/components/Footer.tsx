import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const navLinks = [
  { href: "/programmation", label: "Programmation" },
  { href: "/association", label: "Association" },
  { href: "/dons", label: "Dons" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-bleu-orion text-white pt-24 md:pt-40 pb-12 md:pb-16 px-6 md:px-12 overflow-hidden relative grain-overlay">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-20">
        {/* Left column */}
        <div className="md:max-w-md">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/images/logo/logo-blanc-plein.svg"
              alt="Orion Festival"
              width={300}
              height={60}
              className="h-10 md:h-14 w-auto"
            />
          </div>
          <p className="text-white/60 mb-8 leading-relaxed font-heading text-xs uppercase tracking-[0.2em] font-bold max-w-sm">
            Une expérience céleste au coeur du Parc des Molliers. Créé par
            l&apos;Association Orion avec passion et poussière d&apos;étoiles.
          </p>
          {/* Social icons placeholder */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/orionfestival.ch/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/20 hover:bg-white hover:text-bleu-orion transition-all text-sm"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://tiktok.com/@orionfestival"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/20 hover:bg-white hover:text-bleu-orion transition-all"
              aria-label="TikTok"
            >
              <FaTiktok className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right columns */}
        <div className="grid grid-cols-2 gap-12 md:gap-24">
          <div className="flex flex-col gap-4 md:gap-6">
            <h5 className="font-heading text-rose-orion font-black uppercase tracking-[0.2em] text-xs mb-2 md:mb-4">
              Navigation
            </h5>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-rose-orion transition-colors font-heading uppercase text-xs font-bold tracking-widest"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <h5 className="font-heading text-rose-orion font-black uppercase tracking-[0.2em] text-xs mb-2 md:mb-4">
              Contact
            </h5>
            <a
              href="mailto:Administratif@orionfestival.ch"
              className="text-white hover:text-rose-orion transition-colors font-heading uppercase text-xs font-bold tracking-widest break-all"
            >
              Administratif@orionfestival.ch
            </a>
            <div className="mt-4">
              <p className="text-white font-heading uppercase text-xs font-bold tracking-widest">
                Bernex, Suisse
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-20 md:mt-40 pt-8 md:pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
        <p className="font-heading tracking-[0.2em] uppercase text-xs font-bold">
          &copy; 2026 Association Orion Festival
        </p>
      </div>

      {/* Decorative étoile polaire */}
      <Image
        src="/images/decorations/etoile-deformer-rose.png"
        alt=""
        width={600}
        height={600}
        className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-auto opacity-50 pointer-events-none"
        aria-hidden="true"
      />
    </footer>
  );
}
