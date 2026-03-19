"use client";

import { motion, type Transition } from "framer-motion";
import { FileText, Linkedin, Github, Mail } from "lucide-react";
import { meta } from "@/data/content";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] } as Transition,
});

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #ffffff 0%, #faf5ff 50%, #ede9fe 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(168,85,247,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl">
        <motion.p
          {...fadeUp(0.1)}
          className="text-[15px] font-semibold mb-5 tracking-tight"
          style={{
            background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {meta.title}
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-[64px] sm:text-[80px] lg:text-[96px] font-black text-[#1d1d1f] leading-[1.05] tracking-[-0.04em] mb-6"
        >
          {meta.name.split(" ")[0]}{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {meta.name.split(" ")[1]}
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-[19px] sm:text-[21px] text-[#6e6e73] leading-relaxed max-w-2xl mx-auto mb-12 font-light"
        >
          {meta.tagline}
        </motion.p>

        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 text-white rounded-full text-[17px] font-medium transition-opacity duration-200 hover:opacity-90 shadow-lg shadow-purple-200"
            style={{ background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)" }}
          >
            <FileText size={16} />
            View Resume
          </a>
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 bg-white text-[#1d1d1f] rounded-full text-[17px] font-medium border border-[#d2d2d7] hover:border-purple-300 transition-colors duration-200 shadow-sm"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 bg-white text-[#1d1d1f] rounded-full text-[17px] font-medium border border-[#d2d2d7] hover:border-purple-300 transition-colors duration-200 shadow-sm"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={`mailto:${meta.email}`}
            className="flex items-center gap-2 px-7 py-3 bg-white text-[#1d1d1f] rounded-full text-[17px] font-medium border border-[#d2d2d7] hover:border-purple-300 transition-colors duration-200 shadow-sm"
          >
            <Mail size={16} />
            Email
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#a855f7] hover:text-[#9333ea] transition-colors"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-2xl"
        >
          ↓
        </motion.div>
      </motion.a>
    </section>
  );
}
