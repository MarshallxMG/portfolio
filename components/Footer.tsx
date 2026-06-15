"use client";

import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div className="font-display text-sm font-semibold">
          <span className="text-gradient">Manas</span>
          <span className="text-white/50">.</span>
          <span className="text-white">Goel</span>
        </div>
        <p className="font-mono text-xs text-white/40">
          Built with Next.js · GSAP · Three.js · Framer Motion — © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-4 font-mono text-xs">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-cyan" data-cursor>GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-cyan" data-cursor>LinkedIn</a>
          <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-cyan" data-cursor>LeetCode</a>
        </div>
      </div>
    </footer>
  );
}
