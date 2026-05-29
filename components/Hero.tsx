"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "@/lib/motion";
import { GradientButton, OutlineButton } from "./ui";

const trustedBy = ["SHELLS", "SmartFinder", "Zoomerr", "ArtVenue", "kontrastr", "WAVESMARATHON"];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#000d12] overflow-hidden flex flex-col">
      <div
        className="pointer-events-none absolute top-[10%] right-[5%] w-[700px] h-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(30,80,200,0.35) 0%, transparent 65%)" }}
      />

      <div className="page-container flex-1 flex flex-col pt-[140px]" style={{marginTop:"180px"}}>
        <div className="flex-1 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pb-16">
          <div className="flex flex-col gap-8 items-center lg:items-start">
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[#e9f4f8] font-medium leading-[1.2] tracking-[-0.01em] text-center lg:text-left"
              style={{ fontSize: "clamp(44px, 4.7vw, 67px)"}}
            >
              The new foundation of modern banking
            </motion.h1>

            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[#e9f4f8]/60 text-base leading-relaxed max-w-[440px] text-center lg:text-left"
            >
              We drive innovation and growth, provide seamless customer
              experience and operational excellence
            </motion.p>

            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <GradientButton href="#demo">REQUEST DEMO</GradientButton>
              <OutlineButton href="#contact">CONTACT US</OutlineButton>
            </motion.div>
          </div>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <AppMockup />
          </motion.div>
        </div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="pb-6 flex flex-col gap-4 border-t border-[#e9f4f8]/5 pt-8"
        >
          <span className="text-[#e9f4f8]/70 font-medium" style={{ fontSize: "16px", marginTop: "100px" }}>
            Trusted By:
          </span>
          <div className="flex flex-wrap gap-x-[18px] gap-y-3 opacity-90" style={{marginBottom:"80px"}}>
          {trustedBy.map((brand) => (
            <span
              key={brand}
              className="flex items-center gap-[4.6px]"
              style={{ color: "#586E84", fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: "13.8px" }}
            >
              <span className="w-[17px] h-[17px] rounded-full border border-[#586E84]/50 flex items-center justify-center shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#586E84]/70" />
              </span>
              {brand}
            </span>
          ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AppMockup() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative w-full max-w-[580px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src="/images/hero-mockup.png"
        alt="Banking app mockup"
        width={580}
        height={520}
        priority
        className="w-full h-auto object-contain"
        style={{ opacity: hovered ? 0 : 1, transition: "opacity 0.35s ease" }}
      />
      <Image
        src="/images/hero-mockup-hover.png"
        alt="Banking app mockup hover"
        width={580}
        height={520}
        priority
        className="absolute inset-0 w-full h-auto object-contain"
        style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.35s ease" }}
      />
    </div>
  );
}
