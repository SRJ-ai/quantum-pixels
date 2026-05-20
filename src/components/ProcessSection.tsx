"use client";

import { useRef, type ElementType } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Search,
  BookOpen,
  Palette,
  Code2,
  FlaskConical,
  Rocket,
  TrendingUp,
} from "lucide-react";

interface Step {
  step: string;
  title: string;
  desc: string;
  icon: ElementType;
}

const steps: Step[] = [
  {
    step: "01",
    title: "Discovery",
    desc: "Understanding your vision, goals, and target audience through in-depth consultation.",
    icon: Search,
  },
  {
    step: "02",
    title: "Research",
    desc: "Analyzing market trends, competitors, and technical requirements.",
    icon: BookOpen,
  },
  {
    step: "03",
    title: "Design",
    desc: "Creating stunning UI/UX designs that align with your brand identity.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Development",
    desc: "Building robust, scalable applications with cutting-edge technology.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Testing",
    desc: "Rigorous quality assurance ensuring flawless performance.",
    icon: FlaskConical,
  },
  {
    step: "06",
    title: "Deployment",
    desc: "Seamless launch with optimized infrastructure and monitoring.",
    icon: Rocket,
  },
  {
    step: "07",
    title: "Scaling",
    desc: "Continuous improvement and scaling to meet growing demands.",
    icon: TrendingUp,
  },
];

/* ── Individual Step Card ── */
function StepCard({
  item,
  index,
}: {
  item: Step;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-[1fr] md:grid-cols-[1fr_64px_1fr] items-center gap-0 md:gap-0"
    >
      {/* ── Left column (content or empty depending on index) ── */}
      <div
        className={`hidden md:flex ${
          isEven ? "justify-end" : "justify-end"
        }`}
      >
        {isEven ? (
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: "easeOut" as const,
            }}
            className="group relative w-full max-w-md rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,178,0.15)]"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderColor: "rgba(255,255,255,0.1)",
            }}
          >
            <CardContent item={item} align="right" />
          </motion.div>
        ) : (
          <div />
        )}
      </div>

      {/* ── Center dot (desktop) ── */}
      <div className="hidden md:flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.05,
          }}
          className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2"
          style={{
            borderColor: "#00FFB2",
            background: "#050816",
            boxShadow: "0 0 20px rgba(0,255,178,0.25)",
          }}
        >
          <span
            className="text-sm font-bold"
            style={{
              fontFamily: "var(--font-heading)",
              background: "linear-gradient(135deg, #00FFB2, #00E5FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {item.step}
          </span>
        </motion.div>
      </div>

      {/* ── Right column (content or empty depending on index) ── */}
      <div className="hidden md:flex">
        {!isEven ? (
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: "easeOut" as const,
            }}
            className="group relative w-full max-w-md rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,178,0.15)]"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderColor: "rgba(255,255,255,0.1)",
            }}
          >
            <CardContent item={item} align="left" />
          </motion.div>
        ) : (
          <div />
        )}
      </div>

      {/* ── Mobile Card ── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: "easeOut" as const,
        }}
        className="relative ml-16 flex md:hidden"
      >
        <div
          className="group relative w-full rounded-2xl border p-5 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,178,0.15)]"
          style={{
            background: "rgba(255,255,255,0.05)",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <CardContent item={item} align="left" />
        </div>
      </motion.div>

      {/* ── Mobile dot (absolute on left) ── */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: 0.05,
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex md:hidden h-12 w-12 items-center justify-center rounded-full border-2"
        style={{
          borderColor: "#00FFB2",
          background: "#050816",
          boxShadow: "0 0 20px rgba(0,255,178,0.25)",
        }}
      >
        <span
          className="text-xs font-bold"
          style={{
            fontFamily: "var(--font-heading)",
            background: "linear-gradient(135deg, #00FFB2, #00E5FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {item.step}
        </span>
      </motion.div>
    </div>
  );
}

/* ── Card Inner Content ── */
function CardContent({
  item,
  align,
}: {
  item: Step;
  align: "left" | "right";
}) {
  const Icon = item.icon;

  return (
    <div className={`flex flex-col ${align === "right" ? "items-end text-right" : "items-start text-left"}`}>
      {/* Icon container */}
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
        style={{
          background: "rgba(0,255,178,0.1)",
          border: "1px solid rgba(0,255,178,0.2)",
        }}
      >
        <Icon className="h-6 w-6" style={{ color: "#00FFB2" }} />
      </div>

      {/* Step number (large gradient) */}
      <span
        className="text-5xl font-extrabold leading-none"
        style={{
          fontFamily: "var(--font-heading)",
          background: "linear-gradient(135deg, #00FFB2, #8B5CF6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          opacity: 0.2,
        }}
      >
        {item.step}
      </span>

      {/* Title */}
      <h3
        className="mt-2 text-xl font-bold text-white"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        className="mt-2 text-sm leading-relaxed"
        style={{ color: "#94A3B8", fontFamily: "var(--font-body)" }}
      >
        {item.desc}
      </p>

      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,255,178,0.06) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

/* ── Main Process Section ── */
export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  const timelineContainerRef = useRef<HTMLDivElement>(null);

  /* Scroll-linked line growth */
  const { scrollYProgress } = useScroll({
    target: timelineContainerRef,
    offset: ["start 80%", "end 60%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{ background: "#050816" }}
    >
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 40%, rgba(139,92,246,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Header ── */}
        <div ref={headerRef} className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
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
              How We Build
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed"
            style={{ color: "#94A3B8", fontFamily: "var(--font-body)" }}
          >
            Our systematic approach to engineering excellence
          </motion.p>
        </div>

        {/* ── Timeline ── */}
        <div ref={timelineContainerRef} className="relative mt-20">
          {/* ── Gradient Connecting Line (Desktop — center) ── */}
          <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block">
            {/* Track (dim) */}
            <div
              className="h-full w-[2px] rounded-full"
              style={{
                background: "rgba(255,255,255,0.06)",
              }}
            />
            {/* Active progress (animated) */}
            <motion.div
              className="absolute top-0 left-0 w-[2px] rounded-full"
              style={{
                height: lineHeight,
                background:
                  "linear-gradient(to bottom, #00FFB2, #00E5FF, #8B5CF6)",
                boxShadow:
                  "0 0 12px rgba(0,255,178,0.4), 0 0 24px rgba(139,92,246,0.2)",
              }}
            />
          </div>

          {/* ── Gradient Connecting Line (Mobile — left) ── */}
          <div className="absolute left-[23px] top-0 block h-full md:hidden">
            {/* Track (dim) */}
            <div
              className="h-full w-[2px] rounded-full"
              style={{
                background: "rgba(255,255,255,0.06)",
              }}
            />
            {/* Active progress (animated) */}
            <motion.div
              className="absolute top-0 left-0 w-[2px] rounded-full"
              style={{
                height: lineHeight,
                background:
                  "linear-gradient(to bottom, #00FFB2, #00E5FF, #8B5CF6)",
                boxShadow:
                  "0 0 12px rgba(0,255,178,0.4), 0 0 24px rgba(139,92,246,0.2)",
              }}
            />
          </div>

          {/* ── Step Cards ── */}
          <div className="relative flex flex-col gap-12 md:gap-16">
            {steps.map((item, index) => (
              <StepCard key={item.step} item={item} index={index} />
            ))}
          </div>

          {/* ── Bottom glow cap ── */}
          <motion.div
            className="mx-auto mt-12 flex h-16 w-16 items-center justify-center rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)",
              boxShadow: "0 0 40px rgba(139,92,246,0.15)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
          >
            <div
              className="h-4 w-4 rounded-full"
              style={{
                background: "linear-gradient(135deg, #00FFB2, #8B5CF6)",
                boxShadow: "0 0 12px rgba(139,92,246,0.5)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
