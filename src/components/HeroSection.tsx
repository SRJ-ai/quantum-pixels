"use client";

import { useRef, useMemo } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { ChevronDown, ArrowRight, Menu } from "lucide-react";

/* ─────────────────────── data ─────────────────────── */

const NAV_LINKS = ["About", "Services", "Projects", "Process", "Contact"];

const HEADLINE_WORDS = [
  "Engineering",
  "The",
  "Future",
  "of",
  "Digital",
  "Experiences",
];

/* ─────────────────────── particles ─────────────────── */

interface Particle {
  id: number;
  x: string;
  y: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function generateParticles(count: number, seed: number): Particle[] {
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    const hash = ((seed + i) * 2654435761) % 2 ** 32;
    particles.push({
      id: i,
      x: `${(hash % 1000) / 10}%`,
      y: `${((hash >> 10) % 1000) / 10}%`,
      size: 1 + ((hash >> 20) % 3),
      duration: 3 + ((hash >> 5) % 5),
      delay: (hash % 500) / 100,
      opacity: 0.15 + ((hash >> 15) % 50) / 100,
    });
  }
  return particles;
}

/* ─────────────────── orb particles ────────────────── */

interface OrbParticle {
  id: number;
  angle: number;
  radius: number;
  size: number;
  duration: number;
  delay: number;
}

function generateOrbParticles(count: number): OrbParticle[] {
  const orbParticles: OrbParticle[] = [];
  for (let i = 0; i < count; i++) {
    const hash = ((i + 42) * 2654435761) % 2 ** 32;
    orbParticles.push({
      id: i,
      angle: (360 / count) * i,
      radius: 140 + (hash % 100),
      size: 2 + (hash % 3),
      duration: 6 + (hash % 8),
      delay: (hash % 300) / 100,
    });
  }
  return orbParticles;
}

/* ─────────────────── animation variants ───────────── */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const navContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

/* ═══════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════ */

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const bgParticles = useMemo(() => generateParticles(40, 7), []);
  const orbParticles = useMemo(() => generateOrbParticles(16), []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden"
      style={{ background: "#050816" }}
    >
      {/* ── FULLSCREEN VIDEO BACKGROUND ───────────────── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      {/* ── VIDEO DARK OVERLAY ────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#050816]/60" />

      {/* ── RADIAL ACCENT OVERLAY ─────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 45%, rgba(0,255,178,0.06) 0%, rgba(0,229,255,0.03) 40%, transparent 70%)",
        }}
      />

      {/* ── NOISE OVERLAY ─────────────────────────────── */}
      <div className="noise-overlay pointer-events-none absolute inset-0 z-[3]" />

      {/* ══════════════════════════════════════════════════
          NAVIGATION BAR
          ══════════════════════════════════════════════════ */}
      <motion.nav
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={navContainerVariants}
        className="fixed left-0 right-0 top-0 z-50"
      >
        {/* liquid-glass background */}
        <div className="liquid-glass absolute inset-0 border-b border-white/[0.06] bg-[#050816]/50 backdrop-blur-xl" />

        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <motion.a
            href="#hero"
            variants={navItemVariants}
            className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight"
          >
            {/* small logo icon */}
            <span className="relative flex h-8 w-8 items-center justify-center">
              <span
                className="absolute inset-0 rounded-lg"
                style={{
                  background: "linear-gradient(135deg, #00FFB2, #00E5FF)",
                  opacity: 0.15,
                }}
              />
              <span
                className="text-sm font-extrabold"
                style={{
                  background: "linear-gradient(135deg, #00FFB2, #00E5FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                QP
              </span>
            </span>
            <span className="gradient-text">Quantum Pixels</span>
          </motion.a>

          {/* Nav links — desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                variants={navItemVariants}
                className="relative text-sm font-medium text-[#94A3B8] transition-colors duration-300 hover:text-white"
              >
                {link}
                {/* hover underline */}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#00FFB2] to-[#00E5FF] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA button — desktop */}
          <motion.a
            href="#contact"
            variants={navItemVariants}
            className="liquid-glass group hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 md:flex"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </motion.a>

          {/* Mobile hamburger */}
          <motion.button
            variants={navItemVariants}
            className="flex items-center justify-center rounded-lg border border-white/10 p-2 text-white md:hidden"
            whileTap={{ scale: 0.92 }}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </motion.button>
        </div>
      </motion.nav>

      {/* ══════════════════════════════════════════════════
          MAIN HERO CONTENT
          ══════════════════════════════════════════════════ */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24 lg:flex-row lg:items-center lg:gap-12 lg:px-8" style={{ zIndex: 10 }}>
        {/* ── LEFT SIDE ─────────────────────────────────── */}
        <div className="flex flex-1 flex-col justify-center lg:max-w-2xl">
          {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00FFB2] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00FFB2]" />
            </span>
            <span className="text-xs font-medium tracking-wide text-[#94A3B8]">
              Next-Gen Digital Studio
            </span>
          </motion.div>

          {/* headline — word-by-word stagger */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-6 text-4xl font-normal leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif", letterSpacing: "-0.04em" }}
          >
            {HEADLINE_WORDS.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="mr-[0.3em] inline-block"
                style={
                  word === "Future" || word === "Digital"
                    ? {
                        background:
                          "linear-gradient(135deg, #00FFB2, #00E5FF)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }
                    : {}
                }
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* subheadline */}
          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.7 }}
            className="mb-10 max-w-lg text-base leading-relaxed text-[#94A3B8] sm:text-lg md:text-xl"
          >
            Education. Gaming. Software Innovation —{" "}
            <span className="font-medium text-white">
              Built by the Next Generation.
            </span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap items-center gap-4"
          >
            {/* Primary CTA */}
            <motion.a
              href="#services"
              className="liquid-glass group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-white sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative">Explore Platform</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-full border border-[#00FFB2]/30 bg-transparent px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#00FFB2]/60 hover:bg-[#00FFB2]/5 sm:text-base"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 30px rgba(0,255,178,0.2), 0 0 60px rgba(0,255,178,0.08)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              Start a Project
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00FFB2] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00FFB2]" />
              </span>
            </motion.a>
          </motion.div>

          {/* trust indicators */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 1.15 }}
            className="mt-12 flex items-center gap-6 text-xs text-[#94A3B8]"
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">
                  {stat.value}
                </span>
                <span>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT SIDE — ANIMATED ORB ────────────────── */}
        <motion.div
          className="relative mt-16 flex flex-1 items-center justify-center lg:mt-0"
          style={{ y: orbY }}
        >
          <motion.div
            variants={scaleInVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
            className="relative flex items-center justify-center"
            style={{ width: 480, height: 480 }}
          >
            {/* ── OUTERMOST GLOW ── */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,255,178,0.08) 0%, rgba(0,229,255,0.04) 40%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            {/* ── RING 1 — slow outer ring ── */}
            <motion.div
              className="absolute"
              style={{
                width: 420,
                height: 420,
                borderRadius: "50%",
                border: "1px solid rgba(0,255,178,0.12)",
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear" as const,
              }}
            >
              {/* node on ring 1 */}
              <span
                className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background: "#00FFB2",
                  boxShadow: "0 0 12px rgba(0,255,178,0.6)",
                }}
              />
              <span
                className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full"
                style={{
                  background: "#00E5FF",
                  boxShadow: "0 0 10px rgba(0,229,255,0.5)",
                }}
              />
            </motion.div>

            {/* ── RING 2 — medium counter-rotating ring ── */}
            <motion.div
              className="absolute"
              style={{
                width: 330,
                height: 330,
                borderRadius: "50%",
                border: "1px solid rgba(0,229,255,0.15)",
              }}
              animate={{ rotate: -360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear" as const,
              }}
            >
              <span
                className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full"
                style={{
                  background: "#00E5FF",
                  boxShadow: "0 0 10px rgba(0,229,255,0.6)",
                }}
              />
              <span
                className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background: "#8B5CF6",
                  boxShadow: "0 0 10px rgba(139,92,246,0.6)",
                }}
              />
            </motion.div>

            {/* ── RING 3 — inner fast ring ── */}
            <motion.div
              className="absolute"
              style={{
                width: 240,
                height: 240,
                borderRadius: "50%",
                border: "1px solid rgba(139,92,246,0.18)",
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear" as const,
              }}
            >
              <span
                className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background: "#8B5CF6",
                  boxShadow: "0 0 8px rgba(139,92,246,0.7)",
                }}
              />
              <span
                className="absolute bottom-0 right-0 h-2 w-2 translate-x-1/2 translate-y-1/2 rounded-full"
                style={{
                  background: "#00FFB2",
                  boxShadow: "0 0 8px rgba(0,255,178,0.5)",
                }}
              />
            </motion.div>

            {/* ── CORE ORB ── */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 160,
                height: 160,
                background:
                  "radial-gradient(circle at 35% 35%, rgba(0,255,178,0.35), rgba(0,229,255,0.2) 50%, rgba(139,92,246,0.15) 80%, transparent 100%)",
                boxShadow:
                  "0 0 60px rgba(0,255,178,0.25), 0 0 120px rgba(0,229,255,0.12), inset 0 0 60px rgba(0,255,178,0.1)",
              }}
              animate={{
                scale: [1, 1.08, 1, 0.96, 1],
                boxShadow: [
                  "0 0 60px rgba(0,255,178,0.25), 0 0 120px rgba(0,229,255,0.12), inset 0 0 60px rgba(0,255,178,0.1)",
                  "0 0 80px rgba(0,255,178,0.35), 0 0 160px rgba(0,229,255,0.18), inset 0 0 80px rgba(0,255,178,0.15)",
                  "0 0 60px rgba(0,255,178,0.25), 0 0 120px rgba(0,229,255,0.12), inset 0 0 60px rgba(0,255,178,0.1)",
                  "0 0 50px rgba(0,255,178,0.20), 0 0 100px rgba(0,229,255,0.08), inset 0 0 50px rgba(0,255,178,0.08)",
                  "0 0 60px rgba(0,255,178,0.25), 0 0 120px rgba(0,229,255,0.12), inset 0 0 60px rgba(0,255,178,0.1)",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut" as const,
              }}
            >
              {/* inner bright core */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  width: 80,
                  height: 80,
                  background:
                    "radial-gradient(circle at 40% 40%, rgba(0,255,178,0.5), rgba(0,229,255,0.3) 60%, transparent 100%)",
                  filter: "blur(8px)",
                }}
              />

              {/* specular highlight */}
              <div
                className="absolute rounded-full"
                style={{
                  top: "18%",
                  left: "22%",
                  width: 40,
                  height: 24,
                  background:
                    "radial-gradient(ellipse, rgba(255,255,255,0.25), transparent 70%)",
                  filter: "blur(4px)",
                  transform: "rotate(-30deg)",
                }}
              />
            </motion.div>

            {/* ── CORE FLOAT (entire orb gently bobs) ── */}
            <motion.div
              className="pointer-events-none absolute inset-0"
              animate={{
                y: [0, -12, 0, 8, 0],
                x: [0, 5, 0, -4, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut" as const,
              }}
            />

            {/* ── ORBITING PARTICLES ── */}
            {orbParticles.map((op) => (
              <motion.div
                key={op.id}
                className="absolute left-1/2 top-1/2"
                style={{
                  width: op.size,
                  height: op.size,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: op.duration,
                  repeat: Infinity,
                  ease: "linear" as const,
                  delay: op.delay,
                }}
              >
                <motion.span
                  className="absolute rounded-full"
                  style={{
                    width: op.size,
                    height: op.size,
                    background:
                      op.id % 3 === 0
                        ? "#00FFB2"
                        : op.id % 3 === 1
                          ? "#00E5FF"
                          : "#8B5CF6",
                    boxShadow: `0 0 6px ${op.id % 3 === 0 ? "rgba(0,255,178,0.6)" : op.id % 3 === 1 ? "rgba(0,229,255,0.6)" : "rgba(139,92,246,0.6)"}`,
                    top: -op.radius,
                    left: 0,
                  }}
                  animate={{
                    opacity: [0.3, 0.9, 0.3],
                  }}
                  transition={{
                    duration: op.duration / 2,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                  }}
                />
              </motion.div>
            ))}

            {/* ── ENERGY ARCS (SVG) ── */}
            <svg
              className="pointer-events-none absolute inset-0"
              viewBox="0 0 480 480"
              fill="none"
            >
              {/* arc 1 */}
              <motion.ellipse
                cx="240"
                cy="240"
                rx="190"
                ry="60"
                stroke="url(#arcGrad1)"
                strokeWidth="0.8"
                strokeDasharray="12 8"
                opacity={0.3}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear" as const,
                }}
                style={{ transformOrigin: "240px 240px" }}
              />
              {/* arc 2 */}
              <motion.ellipse
                cx="240"
                cy="240"
                rx="170"
                ry="50"
                stroke="url(#arcGrad2)"
                strokeWidth="0.6"
                strokeDasharray="8 12"
                opacity={0.25}
                animate={{ rotate: -360 }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear" as const,
                }}
                style={{
                  transformOrigin: "240px 240px",
                  transform: "rotate(60deg)",
                }}
              />
              {/* arc 3 */}
              <motion.ellipse
                cx="240"
                cy="240"
                rx="150"
                ry="40"
                stroke="url(#arcGrad3)"
                strokeWidth="0.5"
                strokeDasharray="6 10"
                opacity={0.2}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear" as const,
                }}
                style={{
                  transformOrigin: "240px 240px",
                  transform: "rotate(-30deg)",
                }}
              />
              <defs>
                <linearGradient
                  id="arcGrad1"
                  x1="50"
                  y1="240"
                  x2="430"
                  y2="240"
                >
                  <stop stopColor="#00FFB2" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#00FFB2" />
                  <stop offset="1" stopColor="#00FFB2" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="arcGrad2"
                  x1="70"
                  y1="240"
                  x2="410"
                  y2="240"
                >
                  <stop stopColor="#00E5FF" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#00E5FF" />
                  <stop offset="1" stopColor="#00E5FF" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="arcGrad3"
                  x1="90"
                  y1="240"
                  x2="390"
                  y2="240"
                >
                  <stop stopColor="#8B5CF6" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════════
          SCROLL-DOWN INDICATOR
          ══════════════════════════════════════════════════ */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-xs font-medium tracking-widest text-[#94A3B8] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        >
          <ChevronDown className="h-5 w-5 text-[#00FFB2]" />
        </motion.div>
        {/* little line */}
        <motion.div
          className="h-8 w-px"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,255,178,0.4), transparent)",
          }}
          animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.4, 0.8, 0.4] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
      </motion.div>

      {/* ── BOTTOM GRADIENT FADE ─────────────────────── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to top, #050816, transparent)",
        }}
      />
    </section>
  );
}
