"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { EASE } from "@/lib/motion";

const posts = [
  {
    tag: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    tag: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    tag: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
];

function ReadMoreBtn() {
  return (
    <Link
      href="#"
      className="inline-flex items-center justify-center w-full uppercase text-[#e9f4f9]/50 hover:[background:white] hover:text-[#1a6bff] transition-all"
      style={{
        border: "1px solid rgba(233,244,249,0.5)",
        borderRadius: "10px",
        height: "40px",
        fontFamily: "'Chivo Mono', monospace",
        fontSize: "12px",
        letterSpacing: "0.1em",
      }}
    >
      READ MORE
    </Link>
  );
}

export default function BlogSection() {
  return (
    <section id="blog" className="relative bg-[#000d12] overflow-hidden" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <div
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,180,253,0.06) 0%, transparent 70%)" }}
      />

      <div className="page-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-start">

          {/* ── LEFT: heading + button (~48% of content area) ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col gap-10 items-center lg:items-start shrink-0 lg:w-[48%] lg:pt-2"
          >
            <h2
              className="text-[#e9f4f8] font-normal leading-tight text-center lg:text-left"
              style={{ fontSize: "clamp(28px, 3.2vw, 46px)" }}
            >
              Get yourself up-to-speed on all the things happening in fintech
            </h2>
            <Link
              href="#"
              className="inline-flex items-center justify-center uppercase text-[#e9f4f8] hover:bg-white hover:text-[#1a6bff] transition-all w-fit"
              style={{
                border: "1px solid rgba(233,244,248,0.6)",
                borderRadius: "8px",
                height: "49px",
                padding: "15px 40px",
                fontFamily: "'Chivo Mono', monospace",
                fontSize: "15px",
                lineHeight: "130%",
                letterSpacing: "0.08em",
              }}
            >
              INSIGHTS
            </Link>
          </motion.div>

          {/* ── RIGHT: cards (~52% of content area) ── */}
          <div className="flex flex-col gap-5 lg:ml-auto lg:w-[52%] w-full">

            {/* Featured card — flex row, thumbnail self-centered with inset */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex overflow-hidden"
              style={{ background: "#01141B", borderRadius: "18px", minHeight: "318px" }}
            >
              {/* Thumbnail — same width as a small card, even margin inside card */}
              <div
                className="shrink-0 relative overflow-hidden"
                style={{
                  width: "calc(50% - 10px - 24px)",
                  alignSelf: "stretch",
                  background: "#07193C",
                  margin: "16px 0 16px 16px",
                  borderRadius: "8px",
                }}
              >
                <Image src="/images/blog-thumb-1.png" alt="Blog thumbnail" fill className="object-cover" />
              </div>

              {/* Content — takes remaining space */}
              <div className="flex flex-col justify-between flex-1" style={{ padding: "28px 24px 24px", gap: "24px" }}>
                <div className="flex flex-col" style={{ gap: "11px" }}>
                  <span
                    style={{
                      fontFamily: "'Chivo Mono', monospace",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      color: "#2490BB",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {posts[0].tag}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontSize: "27px",
                      lineHeight: "120%",
                      color: "#E9F4F9",
                      fontWeight: 400,
                    }}
                  >
                    {posts[0].title}
                  </h3>
                  <div className="flex items-center" style={{ gap: "14px" }}>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "13px", color: "#64A8C4", opacity: 0.5 }}>
                      {posts[0].author}
                    </span>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "13px", color: "#64A8C4", opacity: 0.5 }}>
                      {posts[0].date}
                    </span>
                  </div>
                </div>
                <ReadMoreBtn />
              </div>
            </motion.div>

            {/* Two small cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {posts.slice(1).map((post, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
                  className="flex flex-col justify-between"
                  style={{
                    background: "#01141B",
                    borderRadius: "18px",
                    border: "1px solid rgba(233,244,249,0.06)",
                    minHeight: "300px",
                    padding: "28px 24px 24px",
                    gap: "24px",
                  }}
                >
                  <div className="flex flex-col" style={{ gap: "11px" }}>
                    <span
                      style={{
                        fontFamily: "'Chivo Mono', monospace",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        color: "#2490BB",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {post.tag}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Archivo', sans-serif",
                        fontSize: "27px",
                        lineHeight: "120%",
                        color: "#E9F4F9",
                        fontWeight: 400,
                      }}
                    >
                      {post.title}
                    </h3>
                    <div className="flex items-center" style={{ gap: "14px" }}>
                      <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "13px", color: "#64A8C4", opacity: 0.5 }}>
                        {post.author}
                      </span>
                      <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "13px", color: "#64A8C4", opacity: 0.5 }}>
                        {post.date}
                      </span>
                    </div>
                  </div>
                  <ReadMoreBtn />
                </motion.div>
              ))}
            </div>

            {/* READ ALL INSIGHTS — right-aligned below small cards */}
            <div className="mt-2 flex justify-end">
              <Link href="#" className="flex flex-col items-start gap-[4px] group w-fit">
                <span
                  className="flex items-center gap-2 text-[#00b4fd] uppercase group-hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "'Chivo Mono', monospace", fontSize: "14px", letterSpacing: "0.08em" }}
                >
                  READ ALL INSIGHTS
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" className="shrink-0">
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
