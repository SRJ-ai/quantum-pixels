"use client";

import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Quantum Pixels represents the kind of student-driven innovation that gives me hope for the future of technology.",
    name: "Dr. Sarah Chen",
    role: "Professor, Computer Science",
    avatar: "SC",
  },
  {
    quote:
      "Their engineering-first approach and attention to detail is remarkable for such a young team. Truly impressive work.",
    name: "Arjun Mehta",
    role: "Startup Mentor",
    avatar: "AM",
  },
  {
    quote:
      "Working with the Quantum Pixels team was a fantastic experience. They bring fresh energy and solid technical skills.",
    name: "Lisa Park",
    role: "Early Collaborator",
    avatar: "LP",
  },
  {
    quote:
      "The vision behind Quantum Pixels is bold and exciting. They're building something meaningful for the next generation.",
    name: "James Rodriguez",
    role: "Student Community Lead",
    avatar: "JR",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden"
      style={{ backgroundColor: "#050816" }}
    >
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #00FFB2, #00E5FF)",
              }}
            >
              What People Say
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#94A3B8", fontFamily: "var(--font-body)" }}
          >
            Voices from our mentors, collaborators, and community
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative rounded-2xl p-[1px] transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(0,255,178,0.15)]"
              style={{
                background: "rgba(255,255,255,0.08)",
              }}
            >
              {/* Hover glow border overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,255,178,0.2), rgba(0,229,255,0.2))",
                }}
              />

              <div
                className="relative h-full rounded-2xl backdrop-blur-xl p-8 flex flex-col justify-between transition-transform duration-500 group-hover:-translate-y-1"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Quote Icon */}
                <div className="mb-5">
                  <Quote
                    className="w-10 h-10"
                    style={{ color: "#00FFB2", opacity: 0.4 }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Quote Text */}
                <p
                  className="italic text-base sm:text-lg leading-relaxed mb-8 flex-1"
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "var(--font-body)",
                    opacity: 0.9,
                  }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  {/* Avatar */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold tracking-wide select-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #00FFB2, #00E5FF)",
                      color: "#050816",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {testimonial.avatar}
                  </div>

                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{
                        color: "#FFFFFF",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="text-sm"
                      style={{
                        color: "#94A3B8",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
