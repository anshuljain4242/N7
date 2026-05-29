"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
};

const whatYouGet = [
  "Customer On-Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];


/* ─── Section 1: A complete cloud-based core banking ─── */
export function CB7Section1() {
  return (
    <section className="relative bg-[#000d12] overflow-hidden flex items-center min-h-screen" style={{ minHeight: "619px" }}>
      {/* Subtle blue radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 60% at 65% 50%, rgba(0,60,120,0.2) 0%, transparent 70%)" }}
      />
      {/* Large background "CB7" watermark */}
      <span
        className="pointer-events-none select-none absolute left-[-60px] top-1/2 -translate-y-1/2 font-medium leading-none hidden lg:block"
        style={{ fontSize: "clamp(250px, 35vw, 780px)", color: "transparent", WebkitTextStroke: "1px rgba(233,244,248,0.04)" }}
        aria-hidden
      >
        CB7
      </span>

      {/* Text content — left side */}
      <div className="page-container py-16 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeLeft}
          className="relative z-10 flex flex-col gap-6 max-w-[480px] mx-auto lg:mx-0 items-center lg:items-start"
        >
          <h2
            className="text-[#e9f4f8] font-medium leading-tight text-center lg:text-left"
            style={{ fontSize: "clamp(32px, 3vw, 53px)" }}
          >
            <span style={{ whiteSpace: "nowrap" }}>A complete cloud-based</span><br />core banking.
          </h2>
          <p className="text-[#e9f4f8]/60 text-base leading-relaxed text-center lg:text-left">
            Faster time to market with our cloud-based <br/> core banking services
          </p>
          <div className="flex flex-col gap-4 mt-2 items-center lg:items-start w-full">
            <Link
              href="#demo"
              className="inline-flex items-center justify-center text-white uppercase hover:[background:white] hover:text-[#1a6bff] transition-all rounded-[8px]"
              style={{
                height: "49px",
                padding: "15px 40px",
                background: "linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)",
                fontFamily: "'Chivo Mono', monospace",
                fontSize: "15px",
                lineHeight: "130%",
                letterSpacing: "0.02em",
              }}
            >
              REQUEST DEMO
            </Link>
            <Link href="#" className="flex flex-col items-center lg:items-start gap-[3px] group w-fit">
              <span
                className="flex items-center gap-[5px] text-[#00b4fd] uppercase group-hover:opacity-80 transition-opacity"
                style={{ fontFamily: "'Chivo Mono', monospace", fontSize: "14px", lineHeight: "130%" }}
              >
                learn more
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" className="shrink-0">
                  <path d="M2 7.5H11" stroke="#00B4FD" strokeWidth="0.94" strokeLinecap="round" />
                  <path d="M7.5 3.5L11.5 7.5L7.5 11.5" stroke="#00B4FD" strokeWidth="0.94" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="w-[33px] h-px bg-[#00b4fd] group-hover:w-full transition-[width] duration-300 ease-out" />
            </Link>
          </div>
        </motion.div>

        {/* Mobile-only laptop mockup */}
        <div className="lg:hidden mt-8">
          <LaptopMockup />
        </div>

      </div>

      {/* Laptop — absolutely positioned, bleeds off right edge */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeRight}
        className="absolute hidden lg:block"
        style={{ right: "-139px", width: "651.67px", top: "80.17px" }}
      >
        <LaptopMockup />
      </motion.div>
    </section>
  );
}

/* ─── Section 2: Feature list — mockup bleeds left (x=-159) ─── */
export function CB7Section2() {
  return (
    <section className="bg-[#000d12] overflow-hidden" style={{ minHeight: "681px" }}>
      <div className="page-container relative">
        <div className="flex flex-col lg:flex-row items-stretch" style={{marginLeft: "-250px", marginTop:"30px"}}>
          {/* LEFT: mockup bleeding off left edge */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            className="hidden lg:flex items-center shrink-0 py-24"
            style={{width: "560px" }}
          >
            <LaptopMockup src="/images/ckyc-dashboard.png" alt="CKYC Dashboard" />
          </motion.div>

          {/* RIGHT: content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
            className="flex flex-col gap-8 px-6 sm:px-8 md:px-14 lg:pl-20 lg:pr-[80px] py-24 flex-1"
          >
            <h2
              className="text-[#e9f4f8] font-normal leading-snug"
              style={{ fontSize: "clamp(15px, 2vw, 30px)", marginLeft: "300px", marginTop: "100px"}}
            >
              Run a more efficient, flexible, and digitally connected corebanking system
            </h2>

            <div className="flex flex-col gap-3" style={{marginLeft:"300px" }}>
              <p className="text-[#e9f4f8] font-semibold text-base">
                What you will get:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 ">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#e9f4f8]/80 text-sm leading-relaxed list-none">
                    <span className="shrink-0 mt-0.5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="#1a6bff"/>
                        <path d="M6 10.2L8.8 13L14 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </div>
            </div>

            {/* Mobile-only laptop mockup */}
            <div className="lg:hidden mt-4">
              <LaptopMockup src="/images/ckyc-dashboard.png" alt="CKYC Dashboard" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: Paper-less CTA — big rounded card (1279×427, r=27) ─── */
export function CB7Section3() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 90% 60% at 50% 100%, rgba(0,30,60,0.55) 0%, #000d12 65%)",
        paddingBottom: "120px"
      }}
    >
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative rounded-[27px] overflow-hidden border border-[#e9f4f8]/8 mb-5"
          style={{
            background: "linear-gradient(135deg, #031e29 0%, #000d12 63%)",
            minHeight: "427px",
          }}
        >
          {/* CB7 watermark — hollow outline letters */}
          {/* Mobile watermark — right-anchored */}
          <span
            className="lg:hidden pointer-events-none select-none absolute bottom-0 font-medium leading-none"
            style={{
              fontSize: "clamp(200px, 38vw, 540px)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(26,120,255,0.45)",
              right: "-20px",
            }}
            aria-hidden
          >CB7</span>
          {/* Desktop watermark — left-anchored */}
          <span
            className="hidden lg:block pointer-events-none select-none absolute bottom-0 font-medium leading-none"
            style={{
              fontSize: "clamp(200px, 38vw, 540px)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(26,120,255,0.45)",
              left: "calc(55% - 450px)",
            }}
            aria-hidden
          >
            CB7
          </span>

          {/* Two-column layout — text left, buttons right */}
          <div className="relative z-10 flex flex-col lg:flex-row items-stretch lg:min-h-[427px]">
            {/* LEFT: text (~55% width) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col justify-center items-center lg:items-start gap-6 py-10 lg:py-16 lg:w-[55%]"
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
                CB7 helps your financial institution improve the client experience,{" "}
                <br className="hidden lg:block" />
                automate and optimize procedures, simplify banking operations
              </p>
            </motion.div>

            {/* RIGHT: buttons centered (~45% width) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-10 px-6 lg:px-12 pb-10 lg:pb-0 lg:w-[45%]"
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
                  letterSpacing: "0.08em",
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
                  letterSpacing: "0.08em",
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

/* ─── Shared UI ─── */

function LaptopMockup({ src = "/images/aml-dashboard.png", alt = "Dashboard", imageOpacity = 0.8 }: { src?: string; alt?: string; imageOpacity?: number }) {
  return (
    <div style={{ width: "100%" }}>
      {/* Screen / lid */}
      <div
        style={{
          border: "2px solid #00b4fd",
          borderRadius: "15.77px 15.77px 0 0",
          background: "#020d14",
          boxShadow: "0 0 32px rgba(0,180,253,0.25), 0 0 80px rgba(0,180,253,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top bezel with camera */}
        <div
          style={{
            height: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#07111a",
          }}
        >
          <div
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.18)",
            }}
          />
        </div>

        {/* Screen content — inset ~10px sides, clip to 3/4 height */}
        <div style={{ padding: "0 10px" }}>
          <div style={{ overflow: "hidden", aspectRatio: "1440/768" }}>
            <Image
              src={src}
              alt={alt}
              width={1440}
              height={1024}
              priority
              className="w-full h-auto block"
              style={{ opacity: imageOpacity }}
            />
          </div>
        </div>
      </div>

      {/* Keyboard base — extends 57px wider than lid on each side */}
      <div
        style={{
          border: "2px solid #00b4fd",
          borderTop: "none",
          borderRadius: "5.26px 5.26px 14.715px 14.715px",
          height: "30px",
          background: "rgba(0,180,253,0.04)",
          position: "relative",
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
          marginLeft: "-57px",
          marginRight: "-57px",
        }}
      >
        {/* Trackpad */}
        <div
          style={{
            position: "absolute",
            bottom: "6px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "68px",
            height: "10px",
            borderRadius: "3px",
            border: "1px solid rgba(0,180,253,0.35)",
            background: "rgba(0,180,253,0.06)",
          }}
        />
      </div>
    </div>
  );
}

