"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { Component as ParallaxScrollFeatureSection } from "@/components/ui/parallax-scroll-feature-section";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#050505] text-white overflow-x-clip">

      {/* ── HERO BANNER: THEME OF EDITORIAL IMAGE 3 WITH DESK SCENE ── */}
      <section className="relative w-full min-h-[85vh] sm:min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#050505] pt-28 sm:pt-32 pb-16 sm:pb-20">

        {/* 3/4 Desktop Image Layer spanning across the right side */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[75%] h-full z-0 select-none overflow-hidden pointer-events-none">
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            <Image
              src="/services-banner.png"
              alt="Services Crafted for Ambitious Brands"
              fill
              priority
              unoptimized
              className="object-cover object-right sm:object-center opacity-85 lg:opacity-95"
            />
          </motion.div>

          {/* Left Gradient Fade: Seamless blend from pure #050505 into the image */}
          <div className="absolute inset-y-0 left-0 w-48 sm:w-80 lg:w-[45%] bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent z-10" />

          {/* Top Gradient Fade: Smooth blend for navbar */}
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#050505] via-[#050505]/75 to-transparent z-10" />

          {/* Bottom Gradient Fade: Smooth blend into next section */}
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-transparent z-10" />

          {/* Subtle Ambient Studio Glow */}
          <div 
            className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none z-10"
            style={{
              background: "radial-gradient(ellipse at 70% 40%, rgba(168, 85, 247, 0.18) 0%, rgba(236, 72, 153, 0.05) 50%, transparent 80%)"
            }}
          />
        </div>

        {/* Mobile-only background underlay so text is 100% readable on small screens */}
        <div className="block lg:hidden absolute inset-0 bg-[#050505]/75 backdrop-blur-[2px] z-10 pointer-events-none" />

        {/* 1/4 Content Area at Left */}
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20">
          <div className="max-w-xl lg:max-w-[420px] xl:max-w-[480px] flex flex-col items-start text-left">

            {/* Pill Badge matching Image 3 theme with dot indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/25 bg-[#0a0a0f]/80 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(168,85,247,0.12)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
                Services
              </span>
            </motion.div>

            {/* Main Heading — Preserving original font style (Satoshi, sans-serif, font-bold) */}
            <motion.h1
              initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-white text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-bold tracking-tight leading-[1.12] mb-6 text-balance"
              style={{
                fontFamily: "Satoshi, sans-serif",
                textShadow: "0 0 30px rgba(255, 255, 255, 0.22), 0 0 60px rgba(139, 92, 246, 0.12)",
              }}
            >
              Services crafted for Ambitious brands
            </motion.h1>

            {/* Description matching Image 3 layout */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/60 font-sans font-normal text-sm sm:text-base leading-relaxed tracking-wide mb-8 max-w-md text-pretty"
            >
              From bespoke digital architecture and high-performance engineering to immersive branding and scalable enterprise software.
            </motion.p>

            {/* Subtle editorial indicator matching Image 3's bottom pill tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-[11px] font-mono tracking-wider text-white/40"
            >
              <span className="h-1 w-1 rounded-full bg-purple-400" />
              <span>Full-Cycle Development & Design</span>
            </motion.div>

          </div>
        </div>

      </section>

      {/* ── TRANSITION TEXT CYCLE ── */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center bg-[#050505] px-6 text-center border-y border-white/[0.03]">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-purple-400 mb-8 block">
            The Next Stage
          </span>
          <h2 className="text-4xl md:text-6xl font-light text-white/50 leading-tight tracking-tight" style={{ fontFamily: "Satoshi, sans-serif" }}>
            Your <AnimatedTextCycle 
                words={[
                    "business",
                    "team",
                    "workflow",
                    "future",
                    "productivity",
                    "projects",
                    "analytics",
                    "dashboard",
                    "platform"
                ]}
                interval={3000}
                className="text-purple-400 font-bold inline-block" 
            /> deserves better tools.
          </h2>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="relative w-full">
        <ParallaxScrollFeatureSection />
      </section>

      {/* ── CTA ── */}
      <section className="relative w-full py-36 md:py-52 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Pulsing ambient glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[700px] h-[400px] rounded-full pointer-events-none bg-purple-950/15 blur-[130px] -z-10"
        />

        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] font-semibold uppercase tracking-[0.3em] text-purple-400 mb-5 block"
        >
          Next Stage
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-white text-5xl sm:text-6xl md:text-7xl tracking-tight font-bold mb-10"
          style={{ fontFamily: "Satoshi, sans-serif" }}
        >
          Let&apos;s Build Something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.25)] inline-block pb-2">
            Impossible.
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/50 text-white font-medium shadow-[0_0_25px_rgba(168,85,247,0.12)] hover:shadow-[0_0_45px_rgba(168,85,247,0.28)] transition-all duration-300 group"
          >
            <span className="text-xs font-mono tracking-widest uppercase">
              Book Consultation
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
