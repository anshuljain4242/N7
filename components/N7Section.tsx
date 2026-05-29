"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const marqueeItems = ["N7", "CB7"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
};

function MarqueeSparkle() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="shrink-0">
      <path d="M16 0C16 0 17.3 13 21 16C17.3 19 16 32 16 32C16 32 14.7 19 11 16C14.7 13 16 0 16 0Z" fill="#94A3B8" />
      <path d="M0 16C0 16 13 17.3 16 21C19 17.3 32 16 32 16C32 16 19 14.7 16 11C13 14.7 0 16 0 16Z" fill="#94A3B8" />
    </svg>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <span className="shrink-0">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="11" fill="#1a6bff" />
          <path d="M6.5 11.2L9.5 14L15.5 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-[#000d12] font-medium text-sm">{text}</span>
    </li>
  );
}

export default function N7Section() {
  return (
    <section className="bg-[#e9f4f8] overflow-hidden">
      {/* Marquee ticker */}
      <div className="border-y border-[#000d12]/10 bg-white overflow-hidden" style={{ minHeight: "117px", display: "flex", alignItems: "center" }}>
        <Marquee gradient={false} speed={50} pauseOnHover>
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((brand, i) => (
            <span key={i} className="flex items-center gap-6 mx-14">
              <span className="font-semibold text-[#000d12]" style={{ fontSize: "47px", lineHeight: "120%" }}>Say</span>
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ fontSize: "47px", lineHeight: 1, display: "inline-block", transformOrigin: "70% 70%" }}
              >
                🤚
              </motion.span>
              <span className="font-semibold text-[#000d12]" style={{ fontSize: "47px", lineHeight: "120%" }}>to the new way of banking</span>
              <MarqueeSparkle />
              <span
                className="font-semibold"
                style={{
                  fontSize: "47px",
                  lineHeight: "120%",
                  background: "linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >{brand}</span>
              <MarqueeSparkle />
            </span>
          ))}
        </Marquee>
      </div>

      {/* Main content */}
      <div className="relative overflow-hidden" style={{ paddingTop: "100px", paddingBottom: "96px" }}>
        {/* Decorative N7 watermark — outline only, centered on Phone 1 */}
        <span
          className="pointer-events-none select-none absolute font-medium leading-none hidden lg:block"
          style={{
            fontSize: "clamp(50px, 100vw, 590px)",
            color: "transparent",
            WebkitTextStroke: "2.6px rgba(26,107,255,0.18)",
            top: "0.2%",
            left: "45%",
            transform: "translateX(calc(-50%)) scaleX(1.09)",
          }}
          aria-hidden
        >
          N7
        </span>

        {/* Decorative circles — right */}
        <div className="pointer-events-none absolute top-0 right-0 w-[779px] h-[779px] rounded-full border border-[#000d12]/5 -translate-y-1/2 translate-x-1/3" />
        <div className="pointer-events-none absolute top-0 right-0 w-[586px] h-[586px] rounded-full border border-[#000d12]/8 -translate-y-1/2 translate-x-1/3" />

        {/* Decorative arcs — left side, Row 2 area (from Figma Frame 39 Vector) */}
        {[1240, 920, 640, 380].map((size, i) => (
          <div
            key={i}
            className="pointer-events-none absolute rounded-full"
            style={{
              width: size,
              height: size,
              top: "50%",
              left: -142,
              transform: "translate(-50%, -50%)",
              border: `1px solid rgba(0,13,18,${0.12 - i * 0.01})`,
            }}
          />
        ))}

        {/* Single shared grid — all 3 rows share the same column tracks */}
        <div
          className="relative page-container grid grid-cols-1 lg:grid-cols-3 items-center"
          style={{ columnGap: "64px", rowGap: "110px" }}
        >

          {/* ── Row 1, Col 1: Product headline ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col gap-6 items-center lg:items-start order-1 lg:order-[0]"
            style={{ alignSelf: "flex-start" }}
          >
            <h2 className="text-[#000d12] font-normal leading-tight text-center lg:text-left" style={{ fontSize: "clamp(32px, 4vw, 53px)" }}>
              Digital banking out-of-the-box
            </h2>
            <p className="text-[#000d12]/60 text-base leading-relaxed text-center lg:text-left">
              N7 helps your financial institution improve the client experience,
              automate and optimize procedures
            </p>
            <div className="flex flex-col gap-4 mt-2 items-center lg:items-start w-full">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center text-white uppercase transition-all hover:[background:white] hover:text-[#1a6bff] bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)]"
                style={{ height: "49px", padding: "15px 40px", fontFamily: "'Chivo Mono', monospace", fontSize: "15px", lineHeight: "130%", letterSpacing: "0.08em", borderRadius: "6px" }}
              >
                REQUEST DEMO
              </Link>
              <Link href="#" className="flex flex-col items-center lg:items-start gap-[3px] group w-fit">
                <span className="flex items-center gap-[5px] text-[#1a6bff] uppercase group-hover:opacity-80 transition-opacity" style={{ fontFamily: "'Chivo Mono', monospace", fontSize: "14px", lineHeight: "130%" }}>
                  LEARN MORE
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" className="shrink-0">
                    <path d="M2 7.5H11" stroke="#1a6bff" strokeWidth="0.94" strokeLinecap="round" />
                    <path d="M7.5 3.5L11.5 7.5L7.5 11.5" stroke="#1a6bff" strokeWidth="0.94" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="w-[33px] h-px bg-[#1a6bff] group-hover:w-full transition-[width] duration-300 ease-out" />
              </Link>
            </div>
          </motion.div>

          {/* ── Row 1, Col 2: Phone 1 (center) ── */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }} className="flex justify-center order-3 lg:order-[0]">
            <Image src="/images/phone-mockup-1.png" alt="Banking app" width={300} height={607} className="w-[240px] lg:w-[300px] h-auto" />
          </motion.div>

          {/* ── Row 1, Col 3: Feature 1 ── */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }} className="flex flex-col gap-6 max-w-[340px] items-center lg:items-start order-2 lg:order-[0]">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#000d12] font-medium leading-snug text-center lg:text-left" style={{ fontSize: "20px" }}>Fully compliant with regulatory requirement</h3>
              <p className="text-[#000d12]/60 text-sm leading-relaxed text-center lg:text-left">The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.</p>
            </div>
            <ul className="flex flex-col gap-3">
              {["Pre-integrated Security System", "Fully Compliant With Regulatory Requirement", "Digitally Connected Core"].map((pt) => <CheckItem key={pt} text={pt} />)}
            </ul>
          </motion.div>

          {/* ── Row 2, Col 1: empty ── */}
          <div className="hidden lg:block" />

          {/* ── Row 2, Col 2: Feature 2 (aligns under Phone 1) ── */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }} className="flex flex-col gap-6 max-w-[340px] items-center lg:items-start order-4 lg:order-[0]">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#000d12] font-medium leading-snug text-center lg:text-left" style={{ fontSize: "20px" }}>No legacy IT systems</h3>
              <p className="text-[#000d12]/60 text-sm leading-relaxed text-center lg:text-left">Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation.</p>
            </div>
            <ul className="flex flex-col gap-3">
              {["Adaptive & Intelligent API monetization", "Ambient User Experience", "Cloud-native With lower TCO"].map((pt) => <CheckItem key={pt} text={pt} />)}
            </ul>
          </motion.div>

          {/* ── Row 2, Col 3: Phone 2 (right) ── */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }} className="flex justify-center order-5 lg:order-[0]">
            <Image src="/images/phone-mockup-2-new.png" alt="Banking app" width={300} height={607} className="w-[240px] lg:w-[300px] h-auto" />
          </motion.div>

          {/* ── Row 3, Col 1: empty ── */}
          <div className="hidden lg:block" />

          {/* ── Row 3, Col 2: Phone 3 (center, same column as Phone 1) ── */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }} className="flex justify-center order-7 lg:order-[0]">
            <Image src="/images/phone-mockup-3-new.png" alt="Banking app" width={300} height={607} className="w-[240px] lg:w-[300px] h-auto" />
          </motion.div>

          {/* ── Row 3, Col 3: Feature 3 ── */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }} className="flex flex-col gap-6 max-w-[340px] items-center lg:items-start order-6 lg:order-[0]">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#000d12] font-medium leading-snug text-center lg:text-left" style={{ fontSize: "20px" }}>No traditional branches</h3>
              <p className="text-[#000d12]/60 text-sm leading-relaxed text-center lg:text-left">Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.</p>
            </div>
            <ul className="flex flex-col gap-3">
              {["Branchless & Paperless Banking", "Digital Transformation Capability", "Optimized, Adoptable and Scalable"].map((pt) => <CheckItem key={pt} text={pt} />)}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ─── N7 paper-less CTA ─── */
export function N7CTASection() {
  return (
    <section className="relative bg-[#e9f4f8] overflow-hidden" style={{ paddingTop: "66px", paddingBottom: "100px" }}>
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative rounded-[27px] overflow-hidden border border-[#e9f4f8]/10"
          style={{
            background: "linear-gradient(135deg, #031e29 0%, #000d12 63%)",
            minHeight: "425px",
          }}
        >
          {/* N7 watermark — hollow outline, right side bleeding off edge */}
          <span
            className="pointer-events-none select-none absolute bottom-0 font-medium leading-none"
            style={{
              fontSize: "clamp(200px, 38vw, 540px)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(26,107,255,0.45)",
              right: "-80px",
            }}
            aria-hidden
          >
            N7
          </span>

          {/* Two-column layout */}
          <div className="relative z-10 flex flex-col lg:flex-row items-stretch lg:min-h-[427px]">
            {/* LEFT: text (~55%) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col justify-center items-center lg:items-start gap-6 pt-14 pb-6 lg:py-16 lg:w-[55%]"
              style={{ paddingLeft: "clamp(24px, 5vw, 60px)", paddingRight: "clamp(24px, 4vw, 48px)" }}
            >
              <h2
                className="text-[#E9F4F9] text-center lg:text-left"
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(28px, 4vw, 53px)",
                  lineHeight: "120%",
                  letterSpacing: "-0.01em",
                  marginTop: "32px",
                }}
              >
                Take the full advantage of{" "}
                <br className="hidden lg:block" />
                going paper-less now.
              </h2>
              <p
                className="text-center lg:text-left"
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "130%",
                  color: "#E9F4F9",
                  opacity: 0.8,
                }}
              >
                N7 helps your financial institution improve the client experience,{" "}
                <br className="hidden lg:block" />
                automate and optimize procedures, simplify banking operations
              </p>
            </motion.div>

            {/* RIGHT: buttons (~45%) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 lg:px-12 pb-10 lg:pb-0 lg:w-[45%]"
              style={{ marginTop: "24px" }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-[10px] uppercase transition-all text-[#E9F4F9] hover:bg-white hover:text-[#1a6bff] hover:[border-color:white]"
                style={{
                  height: "49px",
                  padding: "15px 59px",
                  border: "1px solid #E9F4F9",
                  fontFamily: "'Chivo Mono', monospace",
                  fontSize: "15px",
                  lineHeight: "130%",
                  letterSpacing: "0.04em",
                }}
              >
                CONTACT US
              </Link>
              <Link
                href="#demo"
                className="inline-flex items-center justify-center rounded-[10px] uppercase transition-all text-white hover:[background:white] hover:text-[#1a6bff] bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)]"
                style={{
                  height: "49px",
                  padding: "15px 51px",
                  fontFamily: "'Chivo Mono', monospace",
                  fontSize: "15px",
                  lineHeight: "130%",
                  letterSpacing: "0.04em",
                }}
              >
                REQUEST DEMO
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
