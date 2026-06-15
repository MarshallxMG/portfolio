"use client";

import { ReactNode, useRef, MouseEvent } from "react";

export default function TiltCard({
  children,
  className = "",
  radiusClass = "rounded-3xl",
}: {
  children: ReactNode;
  className?: string;
  radiusClass?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -10;
    const ry = (px - 0.5) * 12;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };

  return (
    <div className={`group relative ${radiusClass}`}>
      {/* animated gradient glow border — same radius as the card so corners align */}
      <div
        className={`glow-border pointer-events-none absolute -inset-px ${radiusClass} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className={`relative ${radiusClass} transition-transform duration-200 ease-out [transform-style:preserve-3d] ${className}`}
        style={{
          backgroundImage:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(124,155,255,0.14), transparent 45%)",
        }}
      >
        {children}
      </div>

      <style jsx>{`
        .glow-border {
          background: conic-gradient(from 0deg, #3b6bff, #a855f7, #22d3ee, #3b6bff);
          filter: blur(14px);
          animation: spin 6s linear infinite;
        }
        /* pause the glow animation while hidden to save GPU/battery */
        .group:not(:hover) .glow-border {
          animation-play-state: paused;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .glow-border { animation: none; }
        }
      `}</style>
    </div>
  );
}
