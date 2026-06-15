"use client";

import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading index="06" eyebrow="learning_path" title="Education" />
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.08}>
            <div className="glass h-full rounded-2xl p-6 shadow-glass">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-neon text-white">
                <GraduationCap size={18} />
              </div>
              <div className="font-mono text-xs text-cyan">{e.period}</div>
              <h3 className="mt-1 font-display text-lg font-bold text-white">{e.degree}</h3>
              <div className="text-sm text-white/55">{e.school}</div>
              <div className="mt-3 font-mono text-xs text-white/45">{e.detail}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
