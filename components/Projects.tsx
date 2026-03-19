"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import { Code2, Cpu, Zap } from "lucide-react";
import { projects, type Project } from "@/data/content";

const categories: Array<Project["category"] | "All"> = ["All", "Software", "Hardware", "Electrical"];

const categoryStyles: Record<Project["category"], {
  badge: string;
  glow: string;
  icon: React.ReactNode;
}> = {
  Software: {
    badge: "bg-blue-100 text-blue-600",
    glow: "hover:shadow-blue-100",
    icon: <Code2 size={18} className="text-[#9333ea]" />,
  },
  Hardware: {
    badge: "bg-violet-100 text-violet-600",
    glow: "hover:shadow-violet-100",
    icon: <Cpu size={18} className="text-[#9333ea]" />,
  },
  Electrical: {
    badge: "bg-amber-100 text-amber-600",
    glow: "hover:shadow-amber-100",
    icon: <Zap size={18} className="text-[#9333ea]" />,
  },
};

const gradientText = {
  background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] } as Transition,
});

export default function Projects() {
  const [filter, setFilter] = useState<Project["category"] | "All">("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)} className="mb-12">
          <p className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={gradientText}>
            Projects
          </p>
          <h2 className="text-[48px] sm:text-[56px] font-black tracking-[-0.03em] leading-tight" style={gradientText}>
            Things I&apos;ve built.
          </h2>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all duration-200 ${
                filter === cat
                  ? "text-white"
                  : "bg-[#faf5ff] text-[#6e6e73] hover:bg-purple-50 hover:text-[#a855f7]"
              }`}
              style={filter === cat ? { background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)" } : {}}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, delay: i * 0.05 } as Transition}
                className={`bg-[#faf5ff] rounded-3xl overflow-hidden transition-shadow duration-300 flex flex-col hover:shadow-xl ${categoryStyles[project.category].glow}`}
              >
                <div className="p-8 flex-1">
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-[#ede9fe]">
                        {categoryStyles[project.category].icon}
                      </div>
                      <span className={`text-[12px] font-semibold px-3 py-1 rounded-full ${categoryStyles[project.category].badge}`}>
                        {project.category}
                      </span>
                    </div>
                    <span className="text-[12px] text-[#6e6e73] mt-1">{project.period}</span>
                  </div>

                  <h3 className="text-[19px] font-bold text-[#1d1d1f] mb-3 leading-snug">{project.title}</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-relaxed">{project.summary}</p>

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tags.map((t) => (
                      <span key={t} className="text-[12px] px-2.5 py-1 rounded-full bg-white text-[#6e6e73] font-medium border border-purple-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setExpanded(expanded === project.title ? null : project.title)}
                  className="px-8 py-4 text-[14px] font-medium flex items-center justify-between border-t border-white/60 hover:bg-white/50 transition-colors duration-200 w-full"
                  style={{ color: "#a855f7" }}
                >
                  {expanded === project.title ? "Show less" : "See details"}
                  <span className={`transition-transform duration-200 inline-block ${expanded === project.title ? "rotate-180" : ""}`}>↓</span>
                </button>

                <AnimatePresence initial={false}>
                  {expanded === project.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } as Transition}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-2 border-t border-white/60">
                        <ul className="space-y-3">
                          {project.bullets.map((b, bi) => (
                            <li key={bi} className="flex items-start gap-3 text-[14px] text-[#6e6e73] leading-relaxed">
                              <span className="mt-1.5 flex-shrink-0 text-[8px] text-[#a855f7]">●</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
