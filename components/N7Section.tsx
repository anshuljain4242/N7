"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeRight } from "@/lib/motion";
import { EASE } from "@/lib/motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { GradientButton, OutlineButton, LearnMoreLink } from "./ui";

const marqueeItems = ["N7", "CB7"];

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

      <div className="relative overflow-hidden" style={{ paddingTop: "100px", paddingBottom: "96px" }}>
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

        <div className="pointer-events-none absolute top-0 right-0 w-[779px] h-[779px] rounded-full border border-[#000d12]/5 -translate-y-1/2 translate-x-1/3" />
        <div className="pointer-events-none absolute top-0 right-0 w-[586px] h-[586px] rounded-full border border-[#000d12]/8 -translate-y-1/2 translate-x-1/3" />

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

        <div
          className="relative page-container grid grid-cols-1 lg:grid-cols-3 items-center"
          style={{ columnGap: "64px", rowGap: "110px" }}
        >

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
              <GradientButton href="#demo" className="!rounded-[6px]" style={{ padding: "15px 40px" }}>REQUEST DEMO</GradientButton>
              <LearnMoreLink href="#" color="#1a6bff" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }} className="flex justify-center order-3 lg:order-[0]">
            <Image src="/images/phone-mockup-1.png" alt="Banking app" width={300} height={607} sizes="(max-width: 768px) 240px, 300px" className="w-[240px] lg:w-[300px] h-auto" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }} className="flex flex-col gap-6 max-w-[340px] items-center lg:items-start order-2 lg:order-[0]">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#000d12] font-medium leading-snug text-center lg:text-left" style={{ fontSize: "20px" }}>Fully compliant with regulatory requirement</h3>
              <p className="text-[#000d12]/60 text-sm leading-relaxed text-center lg:text-left">The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.</p>
            </div>
            <ul className="flex flex-col gap-3">
              {["Pre-integrated Security System", "Fully Compliant With Regulatory Requirement", "Digitally Connected Core"].map((pt) => <CheckItem key={pt} text={pt} />)}
            </ul>
          </motion.div>

          <div className="hidden lg:block" />

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }} className="flex flex-col gap-6 max-w-[340px] items-center lg:items-start order-4 lg:order-[0]">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#000d12] font-medium leading-snug text-center lg:text-left" style={{ fontSize: "20px" }}>No legacy IT systems</h3>
              <p className="text-[#000d12]/60 text-sm leading-relaxed text-center lg:text-left">Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation.</p>
            </div>
            <ul className="flex flex-col gap-3">
              {["Adaptive & Intelligent API monetization", "Ambient User Experience", "Cloud-native With lower TCO"].map((pt) => <CheckItem key={pt} text={pt} />)}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }} className="flex justify-center order-5 lg:order-[0]">
            <Image src="/images/phone-mockup-2-new.png" alt="Banking app" width={300} height={607} sizes="(max-width: 768px) 240px, 300px" className="w-[240px] lg:w-[300px] h-auto" />
          </motion.div>

          <div className="hidden lg:block" />

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }} className="flex justify-center order-7 lg:order-[0]">
            <Image src="/images/phone-mockup-3-new.png" alt="Banking app" width={300} height={607} sizes="(max-width: 768px) 240px, 300px" className="w-[240px] lg:w-[300px] h-auto" />
          </motion.div>

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

          <div className="relative z-10 flex flex-col lg:flex-row items-stretch lg:min-h-[427px]">
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

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 lg:px-12 pb-10 lg:pb-0 lg:w-[45%]"
              style={{ marginTop: "24px" }}
            >
              <OutlineButton href="#contact" style={{ letterSpacing: "0.04em" }}>CONTACT US</OutlineButton>
              <GradientButton href="#demo" style={{ letterSpacing: "0.04em" }}>REQUEST DEMO</GradientButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
