"use client";

import { proficiencies } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SkillBar from "./SkillBar";
import TechOrbit from "./TechOrbit";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading index="03" eyebrow="capabilities" title="Skills" />
      <div className="grid items-center gap-14 md:grid-cols-2">
        <Reveal>
          <div className="space-y-5">
            {proficiencies.map((p) => (
              <SkillBar key={p.name} name={p.name} value={p.value} />
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <TechOrbit />
        </Reveal>
      </div>
    </section>
  );
}
