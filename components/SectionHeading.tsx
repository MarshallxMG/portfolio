"use client";

import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-glow/60">{index}</span>
          <span className="h-px w-12 bg-gradient-to-r from-glow/60 to-transparent" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
