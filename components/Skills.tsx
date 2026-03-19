"use client";

import { motion, type Transition } from "framer-motion";
import { skills } from "@/data/content";

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

const categoryColors = [
  "border-t-2 border-indigo-300",
  "border-t-2 border-violet-300",
  "border-t-2 border-purple-300",
  "border-t-2 border-fuchsia-300",
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#faf5ff]">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)} className="mb-16">
          <p className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={gradientText}>
            Toolbox
          </p>
          <h2 className="text-[48px] sm:text-[56px] font-black tracking-[-0.03em] leading-tight" style={gradientText}>
            Skills
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              {...fadeUp(gi * 0.08)}
              className={`bg-white rounded-3xl p-7 shadow-sm ${categoryColors[gi % categoryColors.length]}`}
            >
              <p className="text-[12px] font-bold text-[#6e6e73] uppercase tracking-widest mb-5">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-[13px] px-3 py-1.5 rounded-full bg-[#faf5ff] text-[#1d1d1f] font-medium hover:bg-purple-100 hover:text-[#a855f7] transition-colors duration-150 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
