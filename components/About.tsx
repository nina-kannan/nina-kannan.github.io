"use client";

import { motion, type Transition } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { meta, about, honors, courses } from "@/data/content";

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

const iconWrap = "w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 bg-[#ede9fe]";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)} className="mb-16">
          <p className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={gradientText}>
            About
          </p>
          <h2 className="text-[48px] sm:text-[56px] font-black tracking-[-0.03em] leading-tight max-w-2xl" style={gradientText}>
            Built to build things.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div {...fadeUp(0.1)} className="space-y-8">
            <p className="text-[19px] text-[#6e6e73] leading-relaxed font-light">{about}</p>

            <div className="rounded-3xl p-8" style={{ background: "linear-gradient(135deg, #faf5ff 0%, #ede9fe 100%)" }}>
              <div className="flex items-center gap-3 mb-5">
                <div className={iconWrap}>
                  <GraduationCap size={18} className="text-[#9333ea]" />
                </div>
                <p className="text-[15px] font-semibold text-[#1d1d1f]">Education</p>
              </div>
              <p className="text-[21px] font-bold text-[#1d1d1f] leading-snug mb-1">
                The University of Texas at Austin
              </p>
              <p className="text-[15px] text-[#6e6e73] mb-6">B.S. Electrical and Computer Engineering</p>
              <div className="flex gap-10">
                <div>
                  <p className="text-[13px] text-[#6e6e73] mb-1">GPA</p>
                  <p className="text-[28px] font-black tracking-tight" style={gradientText}>{meta.gpa}</p>
                </div>
                <div>
                  <p className="text-[13px] text-[#6e6e73] mb-1">Graduation</p>
                  <p className="text-[22px] font-bold text-[#1d1d1f] tracking-tight">{meta.gradYear}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="space-y-6">
            <div className="bg-[#faf5ff] rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className={iconWrap}>
                  <Award size={18} className="text-[#9333ea]" />
                </div>
                <p className="text-[15px] font-semibold text-[#1d1d1f]">Honors & Awards</p>
              </div>
              <div className="space-y-4">
                {honors.map((h) => (
                  <div key={h.award} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }} />
                    <div>
                      <p className="text-[15px] font-semibold text-[#1d1d1f]">{h.award}</p>
                      <p className="text-[13px] text-[#6e6e73] mt-0.5">{h.issuer} · {h.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#faf5ff] rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className={iconWrap}>
                  <BookOpen size={18} className="text-[#9333ea]" />
                </div>
                <p className="text-[15px] font-semibold text-[#1d1d1f]">Relevant Coursework</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {courses.map((c) => (
                  <span
                    key={c}
                    className="text-[13px] px-3 py-1.5 rounded-full bg-white border border-purple-100 text-[#1d1d1f] font-medium"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
