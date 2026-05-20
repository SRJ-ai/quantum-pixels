"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const Github = ({ className, style }: any) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);
const Twitter = ({ className, style }: any) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const Linkedin = ({ className, style }: any) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const Instagram = ({ className, style }: any) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
];

const services = [
  { label: "Education Tech", href: "#services" },
  { label: "Gaming", href: "#services" },
  { label: "Software Dev", href: "#services" },
  { label: "AI Solutions", href: "#services" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer
      id="footer"
      ref={ref}
      className="relative w-full"
      style={{ backgroundColor: "#0B1120" }}
    >
      {/* Gradient top border */}
      <div
        className="absolute top-0 left-0 w-full h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, #00FFB2, #00E5FF, #8B5CF6)",
        }}
      />

      <motion.div
        className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* ─── Columns ─── */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <motion.div variants={itemVariants} className="space-y-6">
            <a href="#" className="inline-block">
              <span
                className="text-2xl font-bold"
                style={{
                  fontFamily: "var(--font-heading), sans-serif",
                  background: "linear-gradient(135deg, #00FFB2, #00E5FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Quantum Pixels
              </span>
            </a>

            <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
              Engineering the future of digital experiences.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-xl border backdrop-blur-xl transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(0,255,178,0.25)";
                    e.currentTarget.style.borderColor =
                      "rgba(0,255,178,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.1)";
                  }}
                >
                  <social.icon
                    className="h-4 w-4 transition-colors duration-300 group-hover:stroke-[#00FFB2]"
                    style={{ color: "#94A3B8" }}
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 — Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3
              className="text-sm font-semibold uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-heading), sans-serif",
                color: "#FFFFFF",
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300 hover:text-[#00FFB2]"
                    style={{ color: "#94A3B8" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#00FFB2")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#94A3B8")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 — Services */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3
              className="text-sm font-semibold uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-heading), sans-serif",
                color: "#FFFFFF",
              }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-sm transition-colors duration-300"
                    style={{ color: "#94A3B8" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#00FFB2")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#94A3B8")
                    }
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 — Contact */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3
              className="text-sm font-semibold uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-heading), sans-serif",
                color: "#FFFFFF",
              }}
            >
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" style={{ color: "#00FFB2" }} />
                <a
                  href="mailto:hello@quantumpixels.dev"
                  className="text-sm transition-colors duration-300"
                  style={{ color: "#94A3B8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00FFB2")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94A3B8")
                  }
                >
                  hello@quantumpixels.dev
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0" style={{ color: "#00FFB2" }} />
                <span className="text-sm" style={{ color: "#94A3B8" }}>
                  Global / Remote
                </span>
              </li>
              <li>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-300"
                  style={{ color: "#00FFB2" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00E5FF")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#00FFB2")
                  }
                >
                  Get in Touch
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ─── Divider ─── */}
        <motion.div
          variants={itemVariants}
          className="mt-14 h-[1px] w-full"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        />

        {/* ─── Bottom Bar ─── */}
        <motion.div
          variants={itemVariants}
          className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <p className="text-xs" style={{ color: "#94A3B8" }}>
            © 2026 Quantum Pixels. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#94A3B8" }}>
            Designed &amp; Built with ❤️ by Quantum Pixels
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
