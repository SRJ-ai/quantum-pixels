"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ background: "#050816" }}
    >
      {/* ── Grid Background ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Cinematic radial gradient glow (center) ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 60%, rgba(0,255,178,0.08) 0%, rgba(0,229,255,0.04) 40%, transparent 80%)",
        }}
      />

      {/* ── Top fade transition ── */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, #050816 0%, transparent 100%)",
        }}
      />

      {/* ── Floating Orb — Top Left ── */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
        className="pointer-events-none absolute -left-32 -top-20 h-[420px] w-[420px] rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(0,229,255,0.1) 60%, transparent 80%)",
        }}
      />

      {/* ── Floating Orb — Bottom Right ── */}
      <motion.div
        animate={{
          y: [0, 18, 0],
          x: [0, -14, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
        className="pointer-events-none absolute -bottom-24 -right-28 h-[500px] w-[500px] rounded-full opacity-50 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,178,0.3) 0%, rgba(0,229,255,0.15) 50%, transparent 80%)",
        }}
      />

      {/* ── Floating Orb — Top Right (subtle purple) ── */}
      <motion.div
        animate={{
          y: [0, 14, 0],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
        className="pointer-events-none absolute -right-16 top-10 h-[300px] w-[300px] rounded-full opacity-40 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-32 text-center md:py-40 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur-xl"
          style={{
            background: "rgba(0,255,178,0.06)",
            borderColor: "rgba(0,255,178,0.2)",
            color: "#00FFB2",
            fontFamily: "var(--font-body)",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: "#00FFB2",
              boxShadow: "0 0 6px rgba(0,255,178,0.6)",
            }}
          />
          Ready to Start
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" as const }}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #00FFB2 0%, #00E5FF 50%, #8B5CF6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Let&apos;s Build The Future
          </span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #00FFB2, #00E5FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Together.
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" as const }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed md:text-xl"
          style={{ color: "#94A3B8", fontFamily: "var(--font-body)" }}
        >
          Ready to turn your vision into reality? Let&apos;s start a
          conversation.
        </motion.p>

        {/* Decorative divider line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" as const }}
          className="mx-auto mt-10 h-px w-48 origin-center"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,255,178,0.4), transparent)",
          }}
        />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" as const }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5"
        >
          {/* ── Primary: Contact Us ── */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(0,255,178,0.35), 0 0 80px rgba(0,229,255,0.15)",
            }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #00FFB2, #00E5FF)",
              color: "#050816",
              fontFamily: "var(--font-heading)",
              boxShadow: "0 0 20px rgba(0,255,178,0.2)",
            }}
          >
            {/* Shimmer sweep on hover */}
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
            <span className="relative z-10 flex items-center gap-2">
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </motion.a>

          {/* ── Secondary: Book a Call ── */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0,255,178,0.2)",
            }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full px-8 py-4 text-base font-semibold transition-all duration-300"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {/* Gradient border (pseudo-element via padding trick) */}
            <span
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                padding: "1.5px",
                background: "linear-gradient(135deg, #00FFB2, #00E5FF)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />

            {/* Hover fill */}
            <span
              className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: "linear-gradient(135deg, rgba(0,255,178,0.12), rgba(0,229,255,0.08))",
              }}
            />

            <span className="relative z-10 flex items-center gap-2 text-white">
              <Calendar className="h-4 w-4" />
              Book a Call
            </span>
          </motion.a>
        </motion.div>

        {/* Bottom trust micro-copy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" as const }}
          className="mt-8 text-sm"
          style={{ color: "#64748B", fontFamily: "var(--font-body)" }}
        >
          No commitment required · Free initial consultation
        </motion.p>
      </div>

      {/* ── Bottom fade ── */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{
          background:
            "linear-gradient(to top, #050816 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
