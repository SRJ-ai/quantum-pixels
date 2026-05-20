"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "3+", label: "Core Domains" },
  { value: "50+", label: "Projects Planned" },
  { value: "10+", label: "Team Members" },
  { value: "∞", label: "Possibilities" },
];

const milestones = [
  { title: "Founded", description: "The spark that started it all" },
  { title: "First Product", description: "Shipping our debut creation" },
  { title: "Growing Team", description: "Uniting brilliant minds" },
  { title: "Expanding Vision", description: "Reaching new frontiers" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-80px" });

  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{ background: "#050816" }}
    >
      {/* Subtle radial glow background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(0,255,178,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="text-center"
        >
          <h2
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #00FFB2, #00E5FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              About Quantum Pixels
            </span>
          </h2>
        </motion.div>

        {/* ── Description ── */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
          className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed"
          style={{ color: "#94A3B8", fontFamily: "var(--font-body)" }}
        >
          Quantum Pixels is a student-founded technology startup driven by
          innovation, creativity, and engineering excellence. We focus on
          building futuristic digital products that combine education, gaming,
          and software engineering into one connected ecosystem.
        </motion.p>

        {/* ── Main Grid: Timeline + Stats ── */}
        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-[280px_1fr] lg:gap-12">
          {/* ── Timeline ── */}
          <div ref={timelineRef} className="relative">
            <div className="flex flex-col gap-0">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, x: -40 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 * i,
                    ease: "easeOut" as const,
                  }}
                  className="relative flex items-start gap-4 pb-10 last:pb-0"
                >
                  {/* Vertical line */}
                  {i < milestones.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={timelineInView ? { scaleY: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.15 * i + 0.3,
                        ease: "easeOut" as const,
                      }}
                      className="absolute left-[9px] top-[24px] h-[calc(100%-14px)] w-px origin-top"
                      style={{
                        background:
                          "linear-gradient(to bottom, #00FFB2, rgba(0,229,255,0.3))",
                      }}
                    />
                  )}

                  {/* Dot */}
                  <div className="relative z-10 mt-1 flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={timelineInView ? { scale: 1 } : {}}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: 0.15 * i,
                      }}
                      className="h-[20px] w-[20px] rounded-full border-2 flex items-center justify-center"
                      style={{
                        borderColor: "#00FFB2",
                        background: "#050816",
                      }}
                    >
                      <div
                        className="h-2 w-2 rounded-full"
                        style={{
                          background:
                            "linear-gradient(135deg, #00FFB2, #00E5FF)",
                          boxShadow: "0 0 8px rgba(0,255,178,0.5)",
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Text */}
                  <div>
                    <h4
                      className="text-base font-semibold text-white"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {milestone.title}
                    </h4>
                    <p
                      className="mt-1 text-sm"
                      style={{ color: "#94A3B8" }}
                    >
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Stat Cards ── */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={
                  statsInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : {}
                }
                transition={{
                  duration: 0.5,
                  delay: 0.12 * i,
                  ease: "easeOut" as const,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0,255,178,0.15)",
                }}
                className="group relative flex flex-col items-center justify-center rounded-2xl border px-4 py-8 text-center backdrop-blur-xl transition-colors duration-300"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                {/* Hover glow overlay */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(0,255,178,0.08) 0%, transparent 70%)",
                  }}
                />

                <span
                  className="relative z-10 text-4xl font-bold lg:text-5xl"
                  style={{
                    fontFamily: "var(--font-heading)",
                    background: "linear-gradient(135deg, #00FFB2, #00E5FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="relative z-10 mt-2 text-sm font-medium"
                  style={{ color: "#94A3B8" }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
