"use client";

import { motion } from "framer-motion";
import { roundTo } from "@/lib/utils";

const stages = [
  { label: "Sources", sub: "API · DB · Files" },
  { label: "Ingest", sub: "Kafka" },
  { label: "Transform", sub: "Spark / PySpark" },
  { label: "Warehouse", sub: "SQL · Hive" },
  { label: "Insight", sub: "Power BI" },
];

export default function EtlPipeline() {
  return (
    <div className="glass relative overflow-hidden rounded-2xl p-6 shadow-glass md:p-8">
      <div className="eyebrow mb-6">live_pipeline</div>
      <div className="relative flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-between">
        {stages.map((s, i) => (
          <div key={s.label} className="flex flex-1 items-center gap-4 md:flex-col md:gap-3">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-glow/25 bg-ink-700"
            >
              <span className="absolute inset-0 animate-pulse-slow rounded-2xl bg-glow/10" style={{ animationDelay: `${roundTo(i * 0.4, 1)}s` }} />
              <span className="relative font-mono text-lg font-bold text-cyan">{i + 1}</span>
            </motion.div>
            <div className="md:text-center">
              <div className="font-display text-sm font-semibold text-white">{s.label}</div>
              <div className="font-mono text-[11px] text-white/45">{s.sub}</div>
            </div>

            {i < stages.length - 1 && (
              <div className="relative mx-2 hidden h-px flex-1 bg-white/10 md:block">
                <motion.span
                  className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_12px_2px_rgba(34,211,238,0.8)]"
                  animate={{ left: ["0%", "100%"] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
