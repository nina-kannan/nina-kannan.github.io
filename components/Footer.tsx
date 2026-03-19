"use client";

import { motion, type Transition } from "framer-motion";
import { Mail, Linkedin, Github, FileText, Phone } from "lucide-react";
import { meta } from "@/data/content";

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-6" style={{ background: "linear-gradient(160deg, #1e1b2e 0%, #2d1b4e 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } as Transition}
        >
          <div className="mb-16">
            <p
              className="text-[13px] font-semibold uppercase tracking-widest mb-4"
              style={{
                background: "linear-gradient(135deg, #818cf8 0%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Get in touch
            </p>
            <h2 className="text-[48px] sm:text-[64px] font-black text-white tracking-[-0.04em] leading-tight mb-6">
              Let&apos;s connect.
            </h2>
            <p className="text-[19px] text-purple-200/60 font-light max-w-md">
              Open to internships, research opportunities, and interesting conversations.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href={`mailto:${meta.email}`}
              className="flex items-center gap-2 px-7 py-3 text-white rounded-full text-[17px] font-medium hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-purple-900/50"
              style={{ background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)" }}
            >
              <Mail size={16} />
              {meta.email}
            </a>
            <a
              href={`tel:${meta.phone}`}
              className="flex items-center gap-2 px-7 py-3 bg-white/10 text-white rounded-full text-[17px] font-medium hover:bg-white/20 transition-colors duration-200"
            >
              <Phone size={16} />
              {meta.phone}
            </a>
          </div>

          {/* Icon link row */}
          <div className="flex gap-3 mb-20">
            {[
              { href: meta.linkedin, label: "LinkedIn", icon: <Linkedin size={18} /> },
              { href: meta.github, label: "GitHub", icon: <Github size={18} /> },
              { href: "/resume.pdf", label: "Resume", icon: <FileText size={18} /> },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[13px] text-purple-200/40">© {new Date().getFullYear()} {meta.name}</p>
            <p className="text-[13px] text-purple-200/40">{meta.phone}</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
