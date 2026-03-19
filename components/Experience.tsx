"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences, earlierBackground } from "@/data/content";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] } as Transition,
});

const gradientText = {
  background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <section id="experience" className="py-28 px-6 bg-[#faf5ff]">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)} className="mb-16">
          <p className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={gradientText}>
            Work
          </p>
          <h2 className="text-[48px] sm:text-[56px] font-black tracking-[-0.03em] leading-tight" style={gradientText}>
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div
            className="absolute left-[22px] top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, #c4b5fd, #e9d5ff)" }}
          />

          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <motion.div key={exp.org + exp.role} {...fadeUp(i * 0.08)} className="md:pl-14 relative">
                {/* Timeline dot */}
                <div
                  className="absolute left-[15px] top-7 w-[15px] h-[15px] rounded-full hidden md:block ring-4 ring-[#faf5ff]"
                  style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}
                />

                <div
                  className="bg-white rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <div className="p-8 flex items-start justify-between gap-6">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Briefcase icon */}
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "linear-gradient(135deg, #ede9fe, #f3e8ff)" }}
                      >
                        <Briefcase size={18} style={{ color: "#a855f7" }} />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className="text-[19px] font-bold text-[#1d1d1f]">{exp.role}</h3>
                          <span className="text-[13px] font-semibold px-3 py-0.5 rounded-full bg-purple-50 text-[#a855f7]">
                            {exp.org}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-[13px] text-[#6e6e73] mb-4">
                          <span className="flex items-center gap-1.5">
                            <MapPin size={12} className="text-purple-300" /> {exp.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar size={12} className="text-purple-300" /> {exp.period}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((t) => (
                            <span key={t} className="text-[12px] px-2.5 py-1 rounded-full bg-[#faf5ff] text-[#6e6e73] font-medium">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-full bg-[#faf5ff] flex items-center justify-center flex-shrink-0 mt-1 transition-transform duration-300 ${expanded === i ? "rotate-180" : ""}`}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 4l4 4 4-4" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {expanded === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } as Transition}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 pt-0">
                          <div className="h-px bg-[#faf5ff] mb-6" />
                          <ul className="space-y-3">
                            {exp.bullets.map((b, bi) => (
                              <li key={bi} className="flex items-start gap-3 text-[15px] text-[#6e6e73] leading-relaxed">
                                <span className="mt-1.5 flex-shrink-0 text-[8px] text-[#a855f7]">●</span>
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div {...fadeUp(0.3)} className="mt-10 md:pl-14">
          <button
            onClick={() => setShowEarlier(!showEarlier)}
            className="flex items-center gap-2 text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200 font-medium"
          >
            <span className={`inline-block transition-transform duration-200 ${showEarlier ? "rotate-90" : ""}`}>›</span>
            Earlier background
          </button>

          <AnimatePresence initial={false}>
            {showEarlier && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 } as Transition}
                className="overflow-hidden"
              >
                <ul className="mt-4 space-y-2 pl-4 border-l border-purple-200">
                  {earlierBackground.map((item) => (
                    <li key={item.label} className="text-[13px] text-[#6e6e73]">
                      <span className="font-medium text-[#1d1d1f]">{item.label}</span>
                      {" — "}
                      {item.detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
