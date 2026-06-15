"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CornerDownLeft, Search } from "lucide-react";
import { navItems, profile } from "@/lib/data";

type Item = { label: string; hint: string; action: () => void };

export default function CommandPalette({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const ext = (url: string) => {
    setOpen(false);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const items: Item[] = useMemo(
    () => [
      ...navItems.map((n) => ({ label: `Go to ${n.label}`, hint: "section", action: () => go(n.id) })),
      { label: "Open GitHub", hint: "link", action: () => ext(profile.links.github) },
      { label: "Open LinkedIn", hint: "link", action: () => ext(profile.links.linkedin) },
      { label: "Open LeetCode", hint: "link", action: () => ext(profile.links.leetcode) },
      { label: "Open HackerRank", hint: "link", action: () => ext(profile.links.hackerrank) },
      { label: "Send email", hint: "contact", action: () => ext(`mailto:${profile.email}`) },
    ],
    []
  );

  const filtered = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));

  useEffect(() => {
    if (open) {
      setQ("");
      setIdx(0);
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setIdx((i) => Math.min(filtered.length - 1, i + 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setIdx((i) => Math.max(0, i - 1));
      }
      if (e.key === "Enter") {
        e.preventDefault();
        filtered[idx]?.action();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, idx, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9000] flex items-start justify-center px-4 pt-[18vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-ink-900/70 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.96, y: -12, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="glass relative w-full max-w-lg overflow-hidden rounded-2xl shadow-glass"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <Search size={16} className="text-glow/70" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setIdx(0);
                }}
                placeholder="Jump to a section or link…"
                className="w-full bg-transparent font-mono text-sm text-white outline-none placeholder:text-white/35"
              />
              <kbd className="rounded border border-white/15 px-1.5 py-0.5 font-mono text-[10px] text-white/50">ESC</kbd>
            </div>
            <ul className="max-h-72 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center font-mono text-xs text-white/40">No results</li>
              )}
              {filtered.map((it, i) => (
                <li key={it.label}>
                  <button
                    onMouseEnter={() => setIdx(i)}
                    onClick={() => it.action()}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                      i === idx ? "bg-glow/15 text-white" : "text-white/70"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <ArrowUpRight size={14} className="text-glow/70" />
                      {it.label}
                    </span>
                    <span className="flex items-center gap-2 font-mono text-[10px] uppercase text-white/35">
                      {it.hint}
                      {i === idx && <CornerDownLeft size={12} />}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
