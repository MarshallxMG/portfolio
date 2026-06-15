"use client";

import { orbitTech } from "@/lib/data";
import { roundTo } from "@/lib/utils";

/**
 * Build a `calc(50% ± Npx)` string in the canonical form browsers
 * normalize to (rounded to 4 decimals, sign folded into the operator).
 * Producing this form ourselves keeps server- and client-rendered
 * styles identical after the browser parses the SSR HTML.
 */
function offset(n: number) {
  const r = roundTo(n, 4);
  return r >= 0 ? `calc(50% + ${r}px)` : `calc(50% - ${-r}px)`;
}

export default function TechOrbit() {
  const ring1 = orbitTech.slice(0, 6);
  const ring2 = orbitTech.slice(6);

  const Ring = ({ items, radius, reverse, dur }: { items: string[]; radius: number; reverse?: boolean; dur: number }) => (
    <div
      className="absolute left-1/2 top-1/2 rounded-full border border-glow/15"
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
        animationName: "spin-slow",
        animationDuration: `${dur}s`,
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {items.map((t, i) => {
        const angle = (i / items.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <span
            key={t}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center rounded-full border border-glow/25 bg-ink-700 px-2.5 py-1 font-mono text-[11px] text-white/80"
            style={{
              left: offset(x),
              top: offset(y),
              animationName: "spin-slow",
              animationDuration: `${dur}s`,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationDirection: reverse ? "normal" : "reverse",
            }}
          >
            {t}
          </span>
        );
      })}
    </div>
  );

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[380px]">
      <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-electric to-neon text-center font-display text-sm font-bold text-white shadow-neon">
        Data<br />Stack
      </div>
      <Ring items={ring1} radius={100} dur={34} />
      <Ring items={ring2} radius={165} reverse dur={48} />
    </div>
  );
}
