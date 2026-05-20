"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Lightbulb,
  Wrench,
  Rocket,
  Zap,
  Palette,
  Layers,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: Lightbulb,
    title: "Student-Driven Innovation",
    desc: "Fresh perspectives and bold ideas from the next generation of tech leaders.",
  },
  {
    icon: Wrench,
    title: "Engineering-First Mindset",
    desc: "Every product is built on a foundation of strong technical architecture.",
  },
  {
    icon: Rocket,
    title: "Future-Focused Technology",
    desc: "We build with tomorrow's tech stack, not yesterday's.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    desc: "From concept to deployment in record time without compromising quality.",
  },
  {
    icon: Palette,
    title: "Creative + Technical Balance",
    desc: "Where imagination meets engineering excellence.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Systems designed to grow from MVP to enterprise scale.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -4,
        transition: { duration: 0.3, ease: "easeOut" as const },
      }}
      className="group relative rounded-2xl"
    >
      {/* Gradient top border */}
      <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-[#00FFB2] to-[#00E5FF] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Glow effect on hover */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[#00FFB2]/0 to-[#00E5FF]/0 opacity-0 blur-xl transition-all duration-500 group-hover:from-[#00FFB2]/10 group-hover:to-[#00E5FF]/10 group-hover:opacity-100" />

      {/* Card body */}
      <div className="relative flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(0,255,178,0.15)] sm:p-8">
        {/* Icon container */}
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#00FFB2]/10 to-[#00E5FF]/10 ring-1 ring-white/10 transition-all duration-300 group-hover:from-[#00FFB2]/20 group-hover:to-[#00E5FF]/20 group-hover:ring-white/20">
          <Icon
            className="h-6 w-6 text-[#00FFB2] transition-colors duration-300 group-hover:text-[#00E5FF]"
            strokeWidth={1.8}
          />
        </div>

        {/* Title */}
        <h3
          className="mb-2 text-lg font-semibold text-white sm:text-xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {feature.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed text-[#94A3B8] sm:text-base"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {feature.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative w-full overflow-hidden py-24 sm:py-32"
      style={{ backgroundColor: "#050816" }}
    >
      {/* Subtle background radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00FFB2]/[0.03] blur-[120px]" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#8B5CF6]/[0.04] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-16 text-center sm:mb-20"
        >
          <h2
            className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="bg-gradient-to-r from-[#00FFB2] to-[#00E5FF] bg-clip-text text-transparent">
              Why Quantum Pixels
            </span>
          </h2>
          <p
            className="mx-auto max-w-2xl text-base text-[#94A3B8] sm:text-lg"
            style={{ fontFamily: "var(--font-body)" }}
          >
            What sets us apart in the digital landscape
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
