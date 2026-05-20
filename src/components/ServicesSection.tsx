"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Gamepad2, Code2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────────── */

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  accent: string;
  glowRgb: string;
}

const services: ServiceCard[] = [
  {
    icon: GraduationCap,
    title: "Education Technology",
    description:
      "Interactive educational platforms, AI-powered learning systems, engineering simulations, and developer-focused learning ecosystems.",
    features: [
      "AI-Powered Learning",
      "Engineering Simulations",
      "Smart Platforms",
      "Developer Ecosystems",
    ],
    accent: "#00FFB2",
    glowRgb: "0,255,178",
  },
  {
    icon: Gamepad2,
    title: "Gaming Experiences",
    description:
      "Immersive game development, multiplayer systems, gamified experiences, and creative digital storytelling.",
    features: [
      "Indie Game Dev",
      "Multiplayer Systems",
      "Gamified Learning",
      "Immersive Storytelling",
    ],
    accent: "#00E5FF",
    glowRgb: "0,229,255",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom software solutions, scalable SaaS platforms, AI integrations, enterprise systems, and startup product development.",
    features: [
      "SaaS Platforms",
      "AI Integrations",
      "Enterprise Software",
      "Startup Products",
    ],
    accent: "#8B5CF6",
    glowRgb: "139,92,246",
  },
];

/* ─── Animation variants ────────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ─── Component ─────────────────────────────────────────────────── */

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full py-28 md:py-36 overflow-hidden"
    >
      {/* ── Ambient background glow ── */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-20 blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,178,0.12) 0%, rgba(0,229,255,0.06) 50%, transparent 80%)",
        }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* ── Header ── */}
        <motion.div variants={headingVariants} className="text-center mb-16 md:mb-20">
          <p className="mb-3 text-sm font-medium tracking-[0.25em] uppercase text-[#00FFB2]/80">
            Our Services
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5">
            <span className="gradient-text">What We Build</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-[#94A3B8]">
            Three pillars of innovation driving the future
          </p>
        </motion.div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5">
          {services.map((service, index) => (
            <ServiceCardComponent
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Card Sub-component ────────────────────────────────────────── */

function ServiceCardComponent({
  service,
  index,
}: {
  service: ServiceCard;
  index: number;
}) {
  const { icon: Icon, title, description, features, accent, glowRgb } = service;

  /* First card spans 2 cols on lg for the bento feel */
  const spanClass = index === 0 ? "lg:col-span-2" : "lg:col-span-1";

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.025, transition: { duration: 0.3 } }}
      className={`group relative rounded-2xl p-[1px] ${spanClass}`}
      style={
        {
          "--card-accent": accent,
          "--card-glow-rgb": glowRgb,
        } as React.CSSProperties
      }
    >
      {/* ── Animated gradient border ── */}
      <div
        className="absolute inset-0 rounded-2xl opacity-40 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${accent}30, transparent 40%, transparent 60%, ${accent}20)`,
        }}
      />

      {/* ── Card body ── */}
      <div
        className="relative h-full rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-8 md:p-10 transition-shadow duration-500 overflow-hidden"
        style={{
          boxShadow: `0 0 30px rgba(${glowRgb},0.08), 0 0 60px rgba(${glowRgb},0.03)`,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px rgba(${glowRgb},0.2), 0 0 80px rgba(${glowRgb},0.08)`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px rgba(${glowRgb},0.08), 0 0 60px rgba(${glowRgb},0.03)`;
        }}
      >
        {/* subtle top-edge gradient accent */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          }}
        />

        {/* corner glow */}
        <div
          className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full opacity-10 blur-[80px] transition-opacity duration-500 group-hover:opacity-25"
          style={{ background: accent }}
        />

        {/* ── Icon ── */}
        <div
          className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${accent}22, ${accent}08)`,
            border: `1px solid ${accent}30`,
          }}
        >
          <Icon className="h-7 w-7" style={{ color: accent }} strokeWidth={1.8} />
        </div>

        {/* ── Title ── */}
        <h3
          className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-3"
          style={{ color: "#FFFFFF" }}
        >
          {title}
        </h3>

        {/* ── Description ── */}
        <p className="text-[#94A3B8] text-base leading-relaxed mb-8">
          {description}
        </p>

        {/* ── Features List ── */}
        <div
          className={`grid gap-3 ${
            index === 0 ? "sm:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3 group/feat">
              {/* accent dot */}
              <span
                className="inline-block h-2 w-2 flex-shrink-0 rounded-full transition-shadow duration-300 group-hover/feat:shadow-[0_0_8px_var(--card-accent)]"
                style={{ backgroundColor: accent }}
              />
              <span className="text-sm text-[#94A3B8] transition-colors duration-300 group-hover/feat:text-white">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* ── Bottom edge gradient ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-40 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
}
