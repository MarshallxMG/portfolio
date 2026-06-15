"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Activity, ShieldCheck, Zap } from "lucide-react";
import { project } from "@/lib/data";
import Background from "@/components/Background";
import CustomCursor from "@/components/CustomCursor";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";

function Dashboard() {
  const bars = [62, 88, 45, 95, 70, 82, 58, 91];
  return (
    <div className="glass rounded-2xl p-6 shadow-glass">
      <div className="mb-4 flex items-center justify-between">
        <div className="eyebrow">fraud_monitor · live</div>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-cyan">
          <span className="h-2 w-2 animate-pulse-slow rounded-full bg-cyan" /> streaming
        </span>
      </div>
      <div className="flex h-40 items-end gap-2">
        {bars.map((b, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t bg-gradient-to-t from-electric to-neon"
            initial={{ height: 0 }}
            whileInView={{ height: `${b}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.8, ease: "easeOut" }}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 font-mono text-xs">
        {[
          { icon: Activity, k: "throughput", v: "2.4k/s" },
          { icon: ShieldCheck, k: "flagged", v: "1.9%" },
          { icon: Zap, k: "latency", v: "<100ms" },
        ].map(({ icon: Icon, k, v }) => (
          <div key={k} className="rounded-xl border border-white/10 p-3">
            <Icon size={14} className="text-cyan" />
            <div className="mt-2 text-white/40">{k}</div>
            <div className="text-white">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="relative min-h-screen">
      <Background />
      <CustomCursor />

      <div className="mx-auto max-w-5xl px-6 pt-28">
        <Link href="/#projects" data-cursor className="inline-flex items-center gap-2 font-mono text-sm text-white/60 hover:text-cyan">
          <ArrowLeft size={16} /> back to portfolio
        </Link>
      </div>

      {/* Hero / parallax */}
      <section ref={ref} className="relative mx-auto max-w-5xl px-6 pb-20 pt-10">
        <motion.div style={{ y, opacity }}>
          <div className="eyebrow mb-4">case_study · machine_learning</div>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/65">{project.blurb}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="rounded-full border border-glow/25 bg-white/5 px-3 py-1 font-mono text-xs text-white/80">
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Metrics */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {project.metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 text-center shadow-glass">
                <div className="font-display text-3xl font-extrabold text-gradient">
                  {m.display ?? (
                    <CountUp to={m.value} decimals={m.value % 1 !== 0 ? 2 : 0} prefix={m.prefix ?? ""} suffix={m.suffix ?? ""} />
                  )}
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase text-white/45">{m.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Dashboard + pipeline */}
      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-16 md:grid-cols-2">
        <Reveal>
          <Dashboard />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass h-full rounded-2xl p-6 shadow-glass">
            <div className="eyebrow mb-5">inference_pipeline</div>
            <div className="space-y-3">
              {project.pipeline.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-glow/25 bg-ink-700 font-mono text-xs text-cyan">
                    {i + 1}
                  </span>
                  <span className="font-mono text-sm text-white/80">{step}</span>
                  {i < project.pipeline.length - 1 && <span className="ml-auto text-white/25">↓</span>}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Achievements story */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-8 font-display text-2xl font-bold text-white">What it delivered</h2>
        <div className="space-y-4">
          {project.achievements.map((a, i) => (
            <Reveal key={a} delay={i * 0.06}>
              <div className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <span className="font-mono text-sm text-cyan">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-white/75">{a}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/#contact"
            data-cursor
            className="inline-flex rounded-full bg-gradient-to-r from-electric to-neon px-8 py-3 font-mono text-sm font-semibold text-white shadow-neon"
          >
            Discuss a project
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center font-mono text-xs text-white/40">
        © {new Date().getFullYear()} Manas Goel
      </footer>
    </main>
  );
}
