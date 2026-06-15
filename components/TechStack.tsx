"use client";

import { skillGroups } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function TechStack() {
  return (
    <section id="techstack" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading index="04" eyebrow="toolbox" title="Tech Stack" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.06}>
            <div className="group glass h-full rounded-2xl p-6 shadow-glass transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(34,211,238,0.6)]" />
                <h3 className="font-display text-base font-semibold text-white">{g.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-white/70 transition-colors group-hover:border-glow/30"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
