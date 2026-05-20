"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TechItem {
  name: string;
  abbr: string;
  color: string;
}

const row1Techs: TechItem[] = [
  { name: "React", abbr: "Re", color: "#61DAFB" },
  { name: "Next.js", abbr: "Nx", color: "#FFFFFF" },
  { name: "TypeScript", abbr: "TS", color: "#3178C6" },
  { name: "Python", abbr: "Py", color: "#3776AB" },
  { name: "FastAPI", abbr: "FA", color: "#009688" },
  { name: "Node.js", abbr: "Nj", color: "#339933" },
  { name: "TensorFlow", abbr: "TF", color: "#FF6F00" },
];

const row2Techs: TechItem[] = [
  { name: "PostgreSQL", abbr: "PG", color: "#4169E1" },
  { name: "AWS", abbr: "AW", color: "#FF9900" },
  { name: "Three.js", abbr: "3j", color: "#000000" },
  { name: "Unity", abbr: "Un", color: "#FFFFFF" },
  { name: "Unreal Engine", abbr: "UE", color: "#0E1128" },
  { name: "Docker", abbr: "Dk", color: "#2496ED" },
  { name: "Firebase", abbr: "Fb", color: "#FFCA28" },
];

function TechBadge({ tech }: { tech: TechItem }) {
  return (
    <div className="group relative mx-3 flex h-[72px] w-[120px] flex-shrink-0 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(0,255,178,0.25)]">
      {/* Icon-like abbreviation */}
      <span
        className="text-sm font-bold leading-none transition-colors duration-300"
        style={{ color: tech.color }}
      >
        {tech.abbr}
      </span>
      {/* Name */}
      <span className="text-xs font-medium leading-none text-[#94A3B8] transition-colors duration-300 group-hover:text-white">
        {tech.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  techs,
  direction = "left",
  duration = 30,
}: {
  techs: TechItem[];
  direction?: "left" | "right";
  duration?: number;
}) {
  // Duplicate items 4 times for seamless looping
  const items = [...techs, ...techs, ...techs, ...techs];

  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="group/row relative w-full overflow-hidden">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#050816] to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#050816] to-transparent" />

      <div
        className={`flex w-max ${animationClass} group-hover/row:[animation-play-state:paused]`}
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((tech, i) => (
          <TechBadge key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <>
      {/* Keyframe styles for marquee animations */}
      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
      `}</style>

      <section
        id="tech-stack"
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-[#050816] py-24 sm:py-32"
      >
        {/* Subtle top/bottom gradient borders */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00FFB2]/20 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent" />

        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00FFB2]/[0.03] blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="mb-16 text-center"
          >
            <h2
              className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="bg-gradient-to-r from-[#00FFB2] to-[#00E5FF] bg-clip-text text-transparent">
                Our Technology Stack
              </span>
            </h2>
            <p
              className="mx-auto max-w-2xl text-lg text-[#94A3B8]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Powered by industry-leading technologies
            </p>
          </motion.div>

          {/* Marquee Rows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            className="flex flex-col gap-6"
          >
            {/* Row 1 — scrolls left */}
            <MarqueeRow techs={row1Techs} direction="left" duration={35} />

            {/* Row 2 — scrolls right */}
            <MarqueeRow techs={row2Techs} direction="right" duration={35} />
          </motion.div>
        </div>
      </section>
    </>
  );
}
