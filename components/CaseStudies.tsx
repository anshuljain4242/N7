"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { EASE } from "@/lib/motion";

const slides = [
  { company: "Zoomerr",   tag: "GETTING STARTED", title: "How we help brand reach out to more people" },
  { company: "ArtVenue",  tag: "GETTING STARTED", title: "How we help brand reach out to more people" },
  { company: "kontrastr", tag: "GETTING STARTED", title: "How we help brand reach out to more people" },
  { company: "Fintech",   tag: "GETTING STARTED", title: "How we help brand reach out to more people" },
];

function ArrowBtn({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center shrink-0 hover:bg-[#00b4fd]/10 transition-colors"
      style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1.5px solid #00b4fd" }}
    >
      {dir === "left" ? (
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
          <path d="M21 8H1" stroke="#00b4fd" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 1L1 8L8 15" stroke="#00b4fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
          <path d="M1 8H21" stroke="#00b4fd" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 1L21 8L14 15" stroke="#00b4fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  function go(next: number) {
    setDir(next > current ? 1 : -1);
    setCurrent((next + slides.length) % slides.length);
  }

  const slide = slides[current];

  return (
    <section className="bg-[#000d12] overflow-hidden" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <div className="page-container">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-[#e9f4f8] font-normal text-center"
          style={{ fontSize: "clamp(32px, 4vw, 53px)", marginBottom: "48px" }}
        >
          Our Case Studies
        </motion.h2>

        <div style={{ maxWidth: "950px", margin: "0 auto" }}>

          <div className="relative overflow-hidden" style={{ background: "#01141B", borderRadius: "18px" }}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current}
                initial={{ opacity: 0, x: dir * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -50 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="flex flex-col lg:flex-row items-stretch"
                style={{ minHeight: "439px" }}
              >
                <div
                  className="shrink-0 relative overflow-hidden"
                  style={{
                    width: "380px", height: "380px",
                    margin: "20px 0 20px 20px",
                    borderRadius: "10px",
                    background: "#07193C",
                    alignSelf: "center",
                  }}
                >
                  <Image src="/images/blog-thumb-1.png" alt="Case study" fill sizes="(max-width: 768px) 100vw, 380px" className="object-cover" />
                </div>

                <div className="flex flex-col justify-center items-center lg:items-start flex-1 py-10" style={{ gap: "28px", paddingLeft: "clamp(24px, 5vw, 60px)", paddingRight: "clamp(24px, 4vw, 40px)" }}>
                  <div className="flex flex-col items-center lg:items-start" style={{ gap: "16px" }}>
                    <span style={{
                      fontFamily: "'Chivo Mono', monospace", fontSize: "12px",
                      textTransform: "uppercase", color: "#2490BB", letterSpacing: "0.08em",
                    }}>
                      {slide.tag}
                    </span>
                    <h3 className="text-[#e9f4f8] font-normal leading-tight text-center lg:text-left"
                      style={{ fontFamily: "'Archivo', sans-serif", fontSize: "clamp(36px, 2.8vw, 48px)" }}>
                      How we help brand<br />reach out to more<br />people
                    </h3>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center shrink-0" style={{
                        width: "30px", height: "30px", borderRadius: "50%",
                        background: "rgba(233,244,248,0.08)", border: "1px solid rgba(233,244,248,0.12)",
                        marginTop: "15px"
                      }}>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <path d="M7.5 1L9 5H12.5L9.5 7.5L10.5 11.5L7 9.5L3.5 11.5L4.5 7.5L1.5 5H5L7.5 1Z" fill="rgba(233,244,248,0.45)" />
                        </svg>
                      </div>
                      <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "20px", color: "rgba(233,244,248,0.55)", fontWeight: 700, marginTop: "15px" }}>
                        {slide.company}
                      </span>
                    </div>
                  </div>
                  <Link href="#"
                    className="inline-flex items-center justify-center uppercase text-[#e9f4f9]/50 hover:[background:white] hover:text-[#1a6bff] transition-all"
                    style={{
                      border: "1px solid rgba(233,244,249,0.5)", borderRadius: "8px",
                      height: "35px", maxWidth: "400px", width: "100%",
                      fontFamily: "'Chivo Mono', monospace", fontSize: "11px",
                      letterSpacing: "0.1em", marginTop: "25px",
                    }}>
                    READ MORE
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col items-center gap-4 lg:relative lg:flex-row lg:justify-center" style={{ marginTop: "25px" }}>
            <div className="flex items-center gap-5">
              <ArrowBtn dir="left" onClick={() => go(current - 1)} />
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className="transition-all duration-300"
                    style={{
                      height: "12px",
                      width: i === current ? "35px" : "12px",
                      borderRadius: "10px",
                      background: i === current ? "#034a67" : "transparent",
                      border: "1.5px solid #034a67",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
              <ArrowBtn dir="right" onClick={() => go(current + 1)} />
            </div>

            <div className="lg:absolute lg:right-0">
              <Link href="#" className="flex flex-col items-center lg:items-start gap-[4px] group w-fit">
                <span
                  className="flex items-center gap-2 text-[#00b4fd] uppercase group-hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "'Chivo Mono', monospace", fontSize: "14px", letterSpacing: "0.08em" }}
                >
                  VIEW ALL
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
                    <path d="M2 7.5H11" stroke="#00B4FD" strokeWidth="0.94" strokeLinecap="round" />
                    <path d="M7.5 3.5L11.5 7.5L7.5 11.5" stroke="#00B4FD" strokeWidth="0.94" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="w-[33px] h-px bg-[#00b4fd] group-hover:w-full transition-[width] duration-300 ease-out" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
