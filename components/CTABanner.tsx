"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { EASE } from "@/lib/motion";

export default function CTABanner() {
  return (
    <section id="contact" className="bg-[#000d12]" style={{ paddingBottom: "130px", paddingTop: "80px" }}>
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="flex flex-col gap-5 lg:max-w-[55%]">
            <h2
              className="text-[#E9F4F9] leading-tight"
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 300,
                fontSize: "clamp(32px, 4vw, 53px)",
                lineHeight: "120%",
              }}
            >
              Take the full advantage of <br/>going paper-less now.
            </h2>
            <p
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "130%",
                color: "#E9F4F9",
                opacity: 0.6,
                maxWidth: "520px",
              }}
            >
              CB7 helps your financial institution improve the client experience,
              automate and optimize procedures, simplify banking operations
            </p>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-[10px] uppercase transition-all whitespace-nowrap text-[#E9F4F9] hover:bg-white hover:text-[#1a6bff] hover:[border-color:white]"
              style={{
                height: "49px",
                padding: "15px 45px",
                border: "1px solid #E9F4F9",
                fontFamily: "'Chivo Mono', monospace",
                fontSize: "14px",
                lineHeight: "130%",
                letterSpacing: "0.04em",
              }}
            >
              CONTACT US
            </Link>
            <Link
              href="#demo"
              id="demo"
              className="inline-flex items-center justify-center rounded-[10px] uppercase transition-all whitespace-nowrap text-white hover:[background:white] hover:text-[#1a6bff] bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)]"
              style={{
                height: "49px",
                padding: "15px 45px",
                fontFamily: "'Chivo Mono', monospace",
                fontSize: "14px",
                lineHeight: "130%",
                letterSpacing: "0.04em",
              }}
            >
              REQUEST DEMO
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
