"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const lines = [
  "initializing command center",
  "spinning up spark cluster",
  "connecting data warehouse",
  "loading ETL pipelines",
  "ready",
];

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);
  const [line, setLine] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 14 + 6;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setTimeout(() => setDone(true), 500);
      }
      setPct(Math.floor(p));
      setLine(Math.min(lines.length - 1, Math.floor((p / 100) * lines.length)));
    }, 230);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-ink-900"
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <div className="absolute inset-0 bg-aurora opacity-40" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 w-[min(420px,80vw)]"
          >
            <div className="mb-6 text-center font-display text-2xl font-bold tracking-tight">
              <span className="text-gradient">MG</span>
              <span className="ml-1 text-white/40">::</span>
              <span className="ml-1 font-mono text-sm text-glow/70">command_center</span>
            </div>

            <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-electric via-neon to-cyan"
                style={{ width: `${pct}%` }}
              />
            </div>

            <div className="mt-3 flex items-center justify-between font-mono text-xs text-glow/60">
              <span>{lines[line]}</span>
              <span>{pct}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
