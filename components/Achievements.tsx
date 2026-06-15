"use client";

import { achievements } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

export default function Achievements() {
  return (
    <section id="achievements" className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading index="08" eyebrow="by_the_numbers" title="Impact" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((a, i) => (
          <Reveal key={a.label} delay={i * 0.08}>
            <div className="glass rounded-2xl p-6 text-center shadow-glass">
              <div className="font-display text-4xl font-extrabold text-gradient md:text-5xl">
                <CountUp to={a.value} decimals={a.value % 1 !== 0 ? 2 : 0} suffix={a.suffix} />
              </div>
              <div className="mt-2 font-mono text-xs text-white/50">{a.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
