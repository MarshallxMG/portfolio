"use client";

import { BadgeCheck, ArrowUpRight } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading index="07" eyebrow="credentials" title="Certifications" />
      <div className="grid gap-5 sm:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.08}>
            <a href={c.url} target="_blank" rel="noopener noreferrer" data-cursor className="group glass flex items-center gap-3 rounded-2xl p-5 shadow-glass transition-transform duration-300 hover:-translate-y-1 hover:border-glow/40">
              <BadgeCheck className="shrink-0 text-cyan" size={22} />
              <div className="min-w-0 flex-1">
                <div className="font-display text-sm font-semibold text-white">{c.name}</div>
                <div className="font-mono text-[11px] text-white/45">{c.issuer}</div>
              </div>
              <ArrowUpRight className="shrink-0 text-white/30 transition-colors group-hover:text-cyan" size={16} />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
