"use client";
import Link from "next/link";
import type { CSSProperties } from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

export function GradientButton({ href, children, className = "", style, id }: ButtonProps) {
  return (
    <Link
      href={href}
      id={id}
      className={`inline-flex items-center justify-center text-white uppercase transition-all hover:[background:white] hover:text-[#1a6bff] bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)] rounded-[10px] ${className}`}
      style={{ height: "49px", padding: "15px 51px", fontFamily: "'Chivo Mono', monospace", fontSize: "15px", lineHeight: "130%", letterSpacing: "0.08em", ...style }}
    >
      {children}
    </Link>
  );
}

export function OutlineButton({ href, children, className = "", style, id }: ButtonProps) {
  return (
    <Link
      href={href}
      id={id}
      className={`inline-flex items-center justify-center text-[#e9f4f8] uppercase transition-all hover:bg-white hover:text-[#1a6bff] hover:[border-color:white] rounded-[10px] ${className}`}
      style={{ height: "49px", padding: "15px 59px", border: "1px solid #E9F4F9", fontFamily: "'Chivo Mono', monospace", fontSize: "15px", lineHeight: "130%", letterSpacing: "0.08em", ...style }}
    >
      {children}
    </Link>
  );
}

export function LearnMoreLink({ href, color = "#00b4fd" }: { href: string; color?: string }) {
  return (
    <Link href={href} className="flex flex-col items-start gap-[3px] group w-fit">
      <span
        className="flex items-center gap-[5px] uppercase group-hover:opacity-80 transition-opacity"
        style={{ color, fontFamily: "'Chivo Mono', monospace", fontSize: "14px", lineHeight: "130%" }}
      >
        LEARN MORE
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" className="shrink-0" aria-hidden>
          <path d="M2 7.5H11" stroke={color} strokeWidth="0.94" strokeLinecap="round" />
          <path d="M7.5 3.5L11.5 7.5L7.5 11.5" stroke={color} strokeWidth="0.94" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <div className="w-[33px] h-px group-hover:w-full transition-[width] duration-300 ease-out" style={{ background: color }} />
    </Link>
  );
}
