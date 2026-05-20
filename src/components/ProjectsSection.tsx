"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  desc: string;
  tags: string[];
  color: string;
}

const projects: Project[] = [
  {
    title: "NeuralLearn AI",
    category: "Education",
    desc: "An AI-powered adaptive learning platform that personalizes curriculum paths using neural networks.",
    tags: ["AI/ML", "React", "Python"],
    color: "#00FFB2",
  },
  {
    title: "Embedded Dashboard",
    category: "IoT",
    desc: "Real-time monitoring dashboard for embedded systems with live data visualization and alerts.",
    tags: ["Next.js", "WebSocket", "C++"],
    color: "#00E5FF",
  },
  {
    title: "CloudForge SaaS",
    category: "Software",
    desc: "A scalable cloud infrastructure management platform for startups and enterprises.",
    tags: ["TypeScript", "AWS", "PostgreSQL"],
    color: "#8B5CF6",
  },
  {
    title: "Pixel Arena",
    category: "Gaming",
    desc: "A multiplayer competitive gaming platform with real-time matchmaking and leaderboards.",
    tags: ["Unity", "Node.js", "Redis"],
    color: "#00FFB2",
  },
  {
    title: "SmartBench Tools",
    category: "Engineering",
    desc: "Intelligent engineering workbench with simulation tools and collaborative design features.",
    tags: ["Three.js", "FastAPI", "Docker"],
    color: "#00E5FF",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateXSpring = useSpring(useTransform(mouseY, [0, 1], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateYSpring = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-shrink-0"
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[350px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden cursor-pointer transition-shadow duration-300"
        whileHover={{
          boxShadow: `0 0 30px ${project.color}25, 0 0 60px ${project.color}10`,
          borderColor: `${project.color}40`,
        }}
      >
        {/* Gradient placeholder header */}
        <div
          className="relative h-[120px] w-full overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.color}18 0%, ${project.color}08 50%, transparent 100%)`,
          }}
        >
          {/* Decorative grid pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(${project.color}30 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Decorative floating shapes */}
          <motion.div
            className="absolute top-4 right-6 w-16 h-16 rounded-full opacity-20"
            style={{ background: project.color }}
            animate={
              isHovered
                ? { scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }
                : { scale: 1, opacity: 0.2 }
            }
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
          />
          <motion.div
            className="absolute bottom-3 left-8 w-10 h-10 rounded-lg opacity-15 rotate-45"
            style={{ background: project.color }}
            animate={
              isHovered
                ? { rotate: [45, 90, 45], opacity: [0.15, 0.3, 0.15] }
                : { rotate: 45, opacity: 0.15 }
            }
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut" as const,
            }}
          />

          {/* Category badge */}
          <div
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border backdrop-blur-md"
            style={{
              color: project.color,
              borderColor: `${project.color}40`,
              backgroundColor: `${project.color}15`,
              fontFamily: "var(--font-body)",
            }}
          >
            {project.category}
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#050816] to-transparent" />
        </div>

        {/* Card content */}
        <div className="p-6 pt-4" style={{ transform: "translateZ(20px)" }}>
          <h3
            className="text-xl font-bold text-white mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "#94A3B8", fontFamily: "var(--font-body)" }}
          >
            {project.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full border border-white/15 text-white/70 bg-white/5 font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 5);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 5
    );
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    checkScrollability();
    container.addEventListener("scroll", checkScrollability, { passive: true });
    window.addEventListener("resize", checkScrollability);
    return () => {
      container.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, [checkScrollability]);

  const scroll = useCallback((direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = 380;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#050816" }}
    >
      {/* Background ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-15 blur-[120px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,178,0.12) 0%, rgba(0,229,255,0.06) 50%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #00FFB2, #00E5FF)",
              }}
            >
              Featured Projects
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#94A3B8", fontFamily: "var(--font-body)" }}
          >
            Showcasing our vision through innovative builds
          </p>
        </motion.div>

        {/* Scroll container wrapper */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          {/* Left scroll arrow */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/10 bg-[#0B1120]/90 backdrop-blur-md flex items-center justify-center transition-all duration-300 -translate-x-1/2 ${
              canScrollLeft
                ? "opacity-100 hover:border-[#00FFB2]/40 hover:shadow-[0_0_20px_rgba(0,255,178,0.2)] cursor-pointer"
                : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-white/80" />
          </button>

          {/* Right scroll arrow */}
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/10 bg-[#0B1120]/90 backdrop-blur-md flex items-center justify-center transition-all duration-300 translate-x-1/2 ${
              canScrollRight
                ? "opacity-100 hover:border-[#00FFB2]/40 hover:shadow-[0_0_20px_rgba(0,255,178,0.2)] cursor-pointer"
                : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-white/80" />
          </button>

          {/* Left fade overlay */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none transition-opacity duration-300 ${
              canScrollLeft ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background:
                "linear-gradient(to right, #050816 0%, transparent 100%)",
            }}
          />

          {/* Right fade overlay */}
          <div
            className={`absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none transition-opacity duration-300 ${
              canScrollRight ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background:
                "linear-gradient(to left, #050816 0%, transparent 100%)",
            }}
          />

          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* Left spacer for centering on larger screens */}
            <div className="flex-shrink-0 w-0 lg:w-4" />

            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}

            {/* Right spacer */}
            <div className="flex-shrink-0 w-0 lg:w-4" />
          </div>
        </motion.div>
      </div>

      {/* CSS to hide scrollbar across browsers */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
