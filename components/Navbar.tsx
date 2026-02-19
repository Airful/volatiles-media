"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "MATERIALS", href: "#materials" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "APPLICATIONS", href: "#applications" },
  { label: "PARTNER", href: "#partner" },
  { label: "ENQUIRE", href: "#enquire" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/Volatiles-Logo-white-1.svg"
                alt="Volatiles Logo"
                width={160}
                height={50}
                priority
                className="h-[44px] w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="relative text-white/80 hover:text-[#C9A962] transition-colors duration-300 text-[11px] tracking-[0.2em] font-light group"
                    style={{ fontFamily: "Jost, sans-serif", letterSpacing: "0.2em" }}
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C9A962] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/98 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <li
              key={link.label}
              className={`transition-all duration-500 ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-[#C9A962] transition-colors duration-300 text-sm tracking-[0.25em] font-light"
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

