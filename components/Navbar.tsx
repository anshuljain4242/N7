"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "SOLUTIONS", href: "#solutions", chevron: true },
  { label: "RESOURCES", href: "#blog", chevron: true },
  { label: "ABOUT US", href: "#about", chevron: false },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop: floating centered pill — 716×47, bg=#2e2e2e, r=12 */}
      <header className="fixed top-[31px] inset-x-0 z-50 hidden md:flex justify-center pointer-events-none">
        <nav
          className="pointer-events-auto flex items-center rounded-xl"
          style={{
            width: "716px",
            height: "47px",
            background: "#2e2e2e",
            padding: "0 14px",
          }}
        >
          {/* Logo — left */}
          <Link
            href="/"
            className="text-[#e9f4f8] font-bold leading-none shrink-0 tracking-tight"
            style={{ fontSize: "22px" }}
          >
            N7
          </Link>

          {/* Nav links — centered via flex-1 + justify-center */}
          <div className="flex-1 flex items-center justify-center gap-7" >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 text-[#e9f4f8]/80 hover:text-[#e9f4f8] text-[11px] tracking-widest uppercase font-medium transition-colors whitespace-nowrap"
              >
                {link.label}
                {link.chevron && (
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    className="opacity-70"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>
            ))}
          </div>

          {/* REQUEST DEMO — outlined button on right */}
          <Link
            href="#demo"
            className="shrink-0 inline-flex items-center justify-center text-[#e9f4f8] text-[11px] tracking-widest uppercase font-medium transition-all whitespace-nowrap rounded-lg hover:bg-white hover:text-[#1a6bff] hover:[border-color:white]"
            style={{
              border: "1px solid rgba(233,244,248,0.45)",
              height: "31px",
              padding: "0 16px",
            }}
          >
            REQUEST DEMO
          </Link>
        </nav>
      </header>

      {/* Mobile: top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden bg-[#0c0c0c]/90 backdrop-blur-md">
        <div className="flex items-center justify-between h-14 border-b border-[#e9f4f8]/5" style={{ paddingLeft: "max(24px, env(safe-area-inset-left))", paddingRight: "max(24px, env(safe-area-inset-right))" }}>
          <Link href="/" className="text-[#e9f4f8] font-bold text-xl tracking-tight">
            N7
          </Link>
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-[#e9f4f8] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-px bg-[#e9f4f8] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-[#e9f4f8] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"} bg-[#0c0c0c]/98`}
        >
          <nav className="flex flex-col px-6 pb-6 pt-3 gap-4 border-b border-[#e9f4f8]/5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#e9f4f8]/80 hover:text-[#e9f4f8] transition-colors text-sm uppercase tracking-widest py-1 border-b border-[#e9f4f8]/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#demo"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-xs text-[#e9f4f8] border border-[#e9f4f8]/40 text-center tracking-widest uppercase font-medium px-5 py-3 rounded-lg transition-all hover:bg-white hover:text-[#1a6bff] hover:[border-color:white]"
            >
              REQUEST DEMO
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
