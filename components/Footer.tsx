"use client";

import Link from "next/link";
function N7Logo() {
  return (
    <span
      aria-hidden
      className="select-none font-bold block leading-none whitespace-nowrap"
      style={{
        fontSize: "clamp(80px, 25vw, 320px)",
        lineHeight: "0.88",
        backgroundImage: "linear-gradient(170deg, #00E5FF 0%, #29aaff 45%, #003ACE 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
        marginLeft: "0px"
      }}
    >
      N7
    </span>
  );
}

const offices = [
  {
    city: "London",
    address: "Linktia Infosystems Ltd – CB7,\n26 Main Road Sundridge,TN14 6EP,\nEngland, United Kingdom.",
  },
  {
    city: "Dubai",
    address: "Linktia Infosystems Ltd –\nCB7,Jumeirah Business, Center 5\nCluster W, Jumeirah Lakes Towers,\nDubai, United Arab Emirates",
  },
  {
    city: "London",
    address: "Linktia Infosystems Ltd –\nCB7,Nirmal, Anand Nagar,\nSuncity Road, Pune,\nMaharashtra, 411041, India",
  },
];

const solutions = [
  "Core Banking CB7",
  "Digital Banking N7",
  "Open Banking",
  "Loan Origination System",
  "Loan Management System",
  "Digital Transformation",
];

const n7Links = [
  "About Us",
  "Solutions",
  "Contact",
  "Company",
  "Careers",
  "Insights",
  "Core Team",
  "Brand Center",
];

const socials = ["LinkedIn", "X"];

function ArrowLink({ label }: { label: string }) {
  return (
    <Link href="#" className="flex items-center justify-between gap-3 group w-full sm:w-full" style={{ maxWidth: "260px" }}>
      <span
        className="text-[#e9f4f8]/70 group-hover:text-[#00b4fd] transition-colors"
        style={{ fontFamily: "'Archivo', sans-serif", fontSize: "15px", lineHeight: "130%" }}
      >
        {label}
      </span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
        <path d="M3 8H13" stroke="#00b4fd" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M9 4L13 8L9 12" stroke="#00b4fd" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#000d12] overflow-hidden">
      <div className="page-container" style={{ paddingTop: "40px", paddingBottom: "30px" }}>

        {/* Main layout: N7 logo left + content right */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start" style={{ gap: "60px" }}>

          {/* N7 gradient logo */}
          <div className="shrink-0" style={{ width: "fit-content" }}>
            <N7Logo />
          </div>

          {/* Right: addresses + link columns */}
          <div className="flex-1 flex flex-col" style={{ gap: "56px" }}>

            {/* Addresses row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {offices.map((o, i) => (
                <div key={i} className="flex flex-col gap-3 items-center sm:items-start">
                  <p
                    className="text-[#e9f4f8] font-semibold text-center sm:text-left"
                    style={{ fontFamily: "'Archivo', sans-serif", fontSize: "15px" }}
                  >
                    {o.city}
                  </p>
                  <p
                    className="text-[#e9f4f8]/60 leading-relaxed text-center sm:text-left"
                    style={{ fontFamily: "'Archivo', sans-serif", fontSize: "15px", whiteSpace: "pre-line" }}
                  >
                    {o.address}
                  </p>
                </div>
              ))}
            </div>

            {/* Links row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {/* Solutions */}
              <div className="flex flex-col items-center sm:items-start w-full sm:max-w-[170px]" style={{ gap: "14px" }}>
                <p
                  className="text-[#e9f4f8] font-semibold text-center sm:text-left"
                  style={{ fontFamily: "'Archivo', sans-serif", fontSize: "16px", marginBottom: "4px", marginTop: "35px" }}
                >
                  Solutions
                </p>
                {solutions.map((s) => <ArrowLink key={s} label={s} />)}
              </div>

              {/* N7 Banking */}
              <div className="flex flex-col items-center sm:items-start w-full sm:max-w-[170px]" style={{ gap: "14px" }}>
                <p
                  className="text-[#e9f4f8] font-semibold text-center sm:text-left"
                  style={{ fontFamily: "'Archivo', sans-serif", fontSize: "16px", marginBottom: "4px", marginTop: "35px" }}
                >
                  N7 Banking
                </p>
                {n7Links.map((l) => <ArrowLink key={l} label={l} />)}
              </div>

              {/* Our Socials */}
              <div className="flex flex-col items-center sm:items-start w-full sm:max-w-[170px]" style={{ gap: "14px" }}>
                <p
                  className="text-[#e9f4f8] font-semibold text-center sm:text-left"
                  style={{ fontFamily: "'Archivo', sans-serif", fontSize: "16px", marginBottom: "4px", marginTop: "35px" }}
                >
                  Our Socials
                </p>
                {socials.map((s) => <ArrowLink key={s} label={s} />)}
              </div>
            </div>

            {/* Copyright — aligned with content columns above */}
            <div>
              <p
                className="text-[#e9f4f8]/35 leading-relaxed text-center sm:text-left"
                style={{ fontFamily: "'Archivo', sans-serif", fontSize: "13px", marginTop: "30px", marginBottom: "0px" }}
              >
                Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies<br />Act 2006 in England and Wales | Number of Incorporation 13100992]
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
