"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Cpu, Sparkles } from "lucide-react";

/* ── Particle config ── */
function generateParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 12 + 10,
    delay: Math.random() * 8,
    driftX: (Math.random() - 0.5) * 60,
    driftY: (Math.random() - 0.5) * 60,
    opacity: Math.random() * 0.5 + 0.15,
  }));
}

/* ── Supporting pillars data ── */
const pillars = [
  {
    label: "Innovation",
    icon: Lightbulb,
    description: "Bold ideas that redefine what's possible",
  },
  {
    label: "Technology",
    icon: Cpu,
    description: "Cutting-edge tools to shape tomorrow",
  },
  {
    label: "Imagination",
    icon: Sparkles,
    description: "Visionary thinking without boundaries",
  },
];

/* ── Main quote split into lines ── */
const quoteLines = [
  "We believe the future belongs",
  "to creators who combine",
  "intelligence, technology,",
  "and imagination.",
];

export default function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  const quoteInView = useInView(quoteRef, { once: true, margin: "-80px" });
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-60px" });

  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    setParticles(generateParticles(25));
  }, []);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        background: "#050816",
        paddingTop: "10rem",
        paddingBottom: "10rem",
      }}
    >
      {/* ── Background: subtle grid ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Background: large radial gradient glow ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle 500px at 50% 45%, rgba(0,255,178,0.12) 0%, rgba(0,229,255,0.04) 40%, transparent 70%)",
        }}
      />

      {/* ── Background: secondary purple glow ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle 350px at 30% 60%, rgba(139,92,246,0.06) 0%, transparent 60%)",
        }}
      />

      {/* ── Floating particles ── */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background:
              p.id % 3 === 0
                ? "#00FFB2"
                : p.id % 3 === 1
                  ? "#00E5FF"
                  : "#8B5CF6",
            boxShadow:
              p.id % 3 === 0
                ? `0 0 ${p.size * 3}px rgba(0,255,178,0.4)`
                : p.id % 3 === 1
                  ? `0 0 ${p.size * 3}px rgba(0,229,255,0.4)`
                  : `0 0 ${p.size * 3}px rgba(139,92,246,0.4)`,
          }}
          animate={{
            x: [0, p.driftX, -p.driftX * 0.5, 0],
            y: [0, p.driftY * 0.7, -p.driftY, 0],
            opacity: [p.opacity, p.opacity * 1.8, p.opacity * 0.6, p.opacity],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut" as const,
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Quote: line-by-line reveal ── */}
        <div ref={quoteRef} className="flex flex-col items-center text-center">
          {quoteLines.map((line, lineIdx) => (
            <motion.span
              key={lineIdx}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={
                quoteInView
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: 0.25 * lineIdx,
                ease: "easeOut" as const,
              }}
              className="block text-3xl font-bold leading-snug tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
              style={{
                fontFamily: "var(--font-heading)",
                color: "#FFFFFF",
              }}
            >
              {/* Highlight keywords with gradient */}
              {line.split(/(intelligence|technology|imagination|creators|future)/gi).map(
                (segment, segIdx) => {
                  const isHighlight =
                    /^(intelligence|technology|imagination|creators|future)$/i.test(
                      segment
                    );
                  if (isHighlight) {
                    return (
                      <span
                        key={segIdx}
                        style={{
                          background:
                            "linear-gradient(135deg, #00FFB2, #00E5FF)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {segment}
                      </span>
                    );
                  }
                  return <span key={segIdx}>{segment}</span>;
                }
              )}
            </motion.span>
          ))}

          {/* Decorative line under quote */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={quoteInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" as const }}
            className="mt-10 h-px w-40 origin-center"
            style={{
              background:
                "linear-gradient(90deg, transparent, #00FFB2, #00E5FF, transparent)",
            }}
          />
        </div>

        {/* ── Three Supporting Pillars ── */}
        <div
          ref={pillarsRef}
          className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={
                  pillarsInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: 1.0 + 0.2 * i,
                  ease: "easeOut" as const,
                }}
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 0 30px rgba(0,255,178,0.15)",
                }}
                className="group relative flex flex-col items-center rounded-2xl border px-6 py-10 text-center backdrop-blur-xl transition-colors duration-300"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(0,255,178,0.08) 0%, transparent 70%)",
                  }}
                />

                {/* Icon circle */}
                <motion.div
                  className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-full border"
                  style={{
                    borderColor: "rgba(0,255,178,0.3)",
                    background: "rgba(0,255,178,0.06)",
                  }}
                  whileHover={{ rotate: 10 }}
                >
                  <Icon
                    size={26}
                    strokeWidth={1.8}
                    style={{ color: "#00FFB2" }}
                  />
                </motion.div>

                {/* Label */}
                <h3
                  className="relative z-10 text-lg font-semibold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {pillar.label}
                </h3>

                {/* Description */}
                <p
                  className="relative z-10 mt-2 text-sm leading-relaxed"
                  style={{ color: "#94A3B8", fontFamily: "var(--font-body)" }}
                >
                  {pillar.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 transition-all duration-500 group-hover:w-3/4"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #00FFB2, #00E5FF, transparent)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Bottom edge fade ── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to top, #050816 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
