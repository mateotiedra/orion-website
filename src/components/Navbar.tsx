"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Festival" },
  { href: "/programmation", label: "Programmation" },
  { href: "/association", label: "Association" },
  { href: "/dons", label: "Dons" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled || menuOpen ? "bg-bleu-orion grain-overlay" : "bg-transparent"}`}>
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 py-4 md:py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo/logo-blanc-plein.svg"
            alt="Orion Festival"
            width={160}
            height={40}
            className="h-6 md:h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 lg:gap-10 font-heading uppercase tracking-[0.15em] font-bold text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-rose-orion transition-all duration-300 hover:scale-105"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 relative w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span
            className={`absolute left-0 block w-8 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              menuOpen ? "top-1/2 rotate-45" : "top-1.5"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 block w-8 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0 scale-x-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block w-8 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              menuOpen ? "top-1/2 -rotate-45" : "bottom-1.5"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-10 pt-6 flex flex-col gap-2 font-heading uppercase tracking-[0.15em] font-bold text-xl text-center">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-rose-orion transition-all duration-300 py-4 border-b border-white/10"
              style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
