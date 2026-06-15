"use client";

import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading index="01" eyebrow="who_am_i" title="About" />
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="text-balance font-body text-lg leading-relaxed text-white/70 md:text-2xl">
            {profile.about}
          </p>
          <p className="mt-6 font-body leading-relaxed text-white/55">
            My expertise spans building scalable data systems, designing ETL workflows,
            developing machine-learning solutions, and optimizing analytical pipelines
            across distributed environments.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass rounded-2xl p-6 shadow-glass">
            <div className="eyebrow mb-4">focus_areas</div>
            <ul className="flex flex-wrap gap-2">
              {profile.focus.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-glow/20 bg-white/5 px-3 py-1.5 font-mono text-xs text-white/75"
                >
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="rounded-xl border border-white/10 p-3">
                <div className="text-white/40">role</div>
                <div className="mt-1 text-cyan">{profile.role}</div>
              </div>
              <div className="rounded-xl border border-white/10 p-3">
                <div className="text-white/40">based_in</div>
                <div className="mt-1 text-cyan">Pune, IN</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
