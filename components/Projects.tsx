"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { project } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import CountUp from "./CountUp";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading index="05" eyebrow="featured_work" title="Projects" />
      <Reveal>
        <Link href={`/projects/${project.slug}`} aria-label={`Open ${project.title}`} data-cursor>
          <TiltCard className="glass overflow-hidden rounded-3xl p-8 shadow-glass md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <div className="eyebrow mb-3">machine_learning · production</div>
                <h3 className="font-display text-3xl font-bold text-white md:text-4xl">{project.title}</h3>
                <p className="mt-4 text-white/65">{project.blurb}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li key={t} className="rounded-full border border-glow/25 bg-white/5 px-3 py-1 font-mono text-xs text-white/80">
                      {t}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-cyan">
                  Open case study <ArrowUpRight size={16} />
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {project.metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl border border-white/10 bg-ink-700/60 p-5 text-center">
                    <div className="font-display text-2xl font-bold text-gradient md:text-3xl">
                      {m.display ?? (
                        <CountUp
                          to={m.value}
                          decimals={m.value % 1 !== 0 ? 2 : 0}
                          prefix={m.prefix ?? ""}
                          suffix={m.suffix ?? ""}
                        />
                      )}
                    </div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-white/45">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>
        </Link>
      </Reveal>
    </section>
  );
}
