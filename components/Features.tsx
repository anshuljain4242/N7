"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp } from "@/lib/motion";
import { EASE } from "@/lib/motion";
import { LearnMoreLink } from "./ui";

// Core Banking CB7 — blue swirl/pinwheel (Image #19)
const CB7Icon = memo(function CB7Icon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48">
      <defs>
        <linearGradient id="cb7g" x1="4" y1="44" x2="44" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#003ACE"/>
          <stop offset="100%" stopColor="#29AAFF"/>
        </linearGradient>
      </defs>
      {[0,60,120,180,240,300].map((deg, i) => (
        <g key={i} transform={`rotate(${deg} 24 24)`}>
          <path
            d="M24 24 C23 17 26 10 31 8 C35 6 38 10 36 14 C33 19 27 21 24 24Z"
            fill="url(#cb7g)"
          />
        </g>
      ))}
    </svg>
  );
});

// Digital Banking N7 — atom / two overlapping ellipses (Image #20 style)
const N7Icon = memo(function N7Icon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="n7g" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#003ACE"/>
          <stop offset="100%" stopColor="#29AAFF"/>
        </linearGradient>
      </defs>
      <ellipse cx="24" cy="24" rx="21" ry="9" stroke="url(#n7g)" strokeWidth="2.2"
               transform="rotate(-45 24 24)" />
      <ellipse cx="24" cy="24" rx="21" ry="9" stroke="url(#n7g)" strokeWidth="2.2"
               transform="rotate(45 24 24)" />
    </svg>
  );
});

// Open Banking — same atom style (Image #20)
const OpenBankingIcon = memo(function OpenBankingIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="obg" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#003ACE"/>
          <stop offset="100%" stopColor="#29AAFF"/>
        </linearGradient>
      </defs>
      <ellipse cx="24" cy="24" rx="21" ry="9" stroke="url(#obg)" strokeWidth="2.2"
               transform="rotate(-45 24 24)" />
      <ellipse cx="24" cy="24" rx="21" ry="9" stroke="url(#obg)" strokeWidth="2.2"
               transform="rotate(45 24 24)" />
    </svg>
  );
});

// Compass-cross icon shared by both NBFC products (Images #21 / #22)
function NBFCCrossIcon({ id }: { id: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48">
      <defs>
        <linearGradient id={id} x1="4" y1="44" x2="44" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#003ACE"/>
          <stop offset="100%" stopColor="#29AAFF"/>
        </linearGradient>
      </defs>
      <path d="M24 24 C22 20 19 12 21 6 C22 3 26 3 27 6 C29 12 26 20 24 24Z"
            fill={`url(#${id})`} />
      <path d="M24 24 C28 22 36 19 42 21 C45 22 45 26 42 27 C36 29 28 26 24 24Z"
            fill={`url(#${id})`} />
      <path d="M24 24 C26 28 29 36 27 42 C26 45 22 45 21 42 C19 36 22 28 24 24Z"
            fill={`url(#${id})`} />
      <path d="M24 24 C20 26 12 29 6 27 C3 26 3 22 6 21 C12 19 20 22 24 24Z"
            fill={`url(#${id})`} />
    </svg>
  );
}

const LoanOriginationIcon = memo(function LoanOriginationIcon() { return <NBFCCrossIcon id="loig" />; });
const LoanManagementIcon = memo(function LoanManagementIcon() { return <NBFCCrossIcon id="lmig" />; });

const cards = [
  {
    icon: <CB7Icon />,
    title: "Core Banking CB7",
    desc: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
  },
  {
    icon: <N7Icon />,
    title: "Digital Banking N7",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
  {
    icon: <OpenBankingIcon />,
    title: "Open Banking",
    desc: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
  },
  {
    icon: <LoanOriginationIcon />,
    tag: "NBFC",
    title: "Loan Origination System",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
  {
    icon: <LoanManagementIcon />,
    tag: "NBFC",
    title: "Loan Management System",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
];

export default function Features() {
  return (
    <section id="solutions" className="relative bg-[#000d12] overflow-hidden" style={{ minHeight: "1177px" }}>
      {/* Blue glow — Figma Ellipse 1 (x=969, r=556) */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: "557px",
          height: "557px",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          background: "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
          opacity: 0.1,
          filter: "blur(100px)",
        }}
      />

      <div className="page-container pt-[47px] pb-24">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col items-center lg:items-start lg:w-[433px] shrink-0"
            style={{ gap: "48px" }}
          >
            <h2
              className="text-[#e9f4f8] font-normal leading-[120%] tracking-[-0.01em] text-center lg:text-left"
              style={{ fontSize: "clamp(26px, 2.6vw, 37px)" }}
            >
              All of our solutions are tailor-made to your needs
            </h2>
            <Link
              href="#demo"
              className="self-center lg:self-start inline-flex items-center justify-center text-[#e9f4f8] uppercase hover:bg-white hover:text-[#1a6bff] hover:[border-color:white] transition-all rounded-[10px]"
              style={{
                height: "49px",
                padding: "15px 59px",
                border: "1px solid #E9F4F9",
                fontFamily: "'Chivo Mono', monospace",
                fontSize: "14px",
                lineHeight: "130%",
                width: "226px",
              }}
            >
              REQUEST DEMO
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-y-[52px] gap-x-[76px] max-w-[613px] mx-auto" style={{ marginLeft: "auto", marginRight: 0 }}>
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="flex flex-col items-center lg:items-start"
                style={{ gap: "26px" }}
              >
                <div className="flex items-end justify-between w-full">
                  {card.icon}
                  {card.tag && (
                    <span
                      className="text-[#e9f4f8]/60 uppercase"
                      style={{ fontFamily: "'Chivo Mono', monospace", fontSize: "14px", lineHeight: "130%" }}
                    >
                      {card.tag}
                    </span>
                  )}
                </div>

                <div className="flex flex-col items-center lg:items-start" style={{ gap: "32px" }}>
                  <h3
                    className="text-[#e9f4f8] font-normal leading-[120%] text-center lg:text-left"
                    style={{ fontSize: "22px" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-[#e9f4f8]/70 leading-[130%] text-center lg:text-left"
                    style={{ fontSize: "16px" }}
                  >
                    {card.desc}
                  </p>
                </div>

                <LearnMoreLink href="#" color="#00b4fd" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
