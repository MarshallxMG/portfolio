"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import EtlPipeline from "./EtlPipeline";

export default function Experience() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline",
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
      gsap.utils.toArray<HTMLElement>(".tl-item").forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          scrollTrigger: { trigger: item, start: "top 82%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={root} className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading index="02" eyebrow="career_log" title="Experience" />

      <div className="mb-16">
        <EtlPipeline />
      </div>

      <div className="timeline relative pl-8 md:pl-0">
        {/* center line */}
        <div className="absolute left-[7px] top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
          <div className="timeline-line h-full w-full bg-gradient-to-b from-electric via-neon to-cyan" />
        </div>

        <div className="space-y-12">
          {experience.map((job, i) => (
            <div
              key={job.company}
              className={`tl-item relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
            >
              {/* node */}
              <div className="absolute left-[-26px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-cyan bg-ink-900 md:left-1/2 md:-translate-x-1/2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              </div>

              <div className={`${i % 2 === 0 ? "md:text-right md:pr-2" : "md:[direction:ltr] md:col-start-2 md:pl-2"}`}>
                <div className="glass rounded-2xl p-6 text-left shadow-glass">
                  <div className="font-mono text-xs text-cyan">{job.period}</div>
                  <h3 className="mt-1 font-display text-xl font-bold text-white">{job.role}</h3>
                  <div className="text-sm text-white/55">{job.company} · {job.place}</div>
                  <ul className="mt-4 space-y-1.5">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-white/65">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neon" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
