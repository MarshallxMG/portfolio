"use client";

const items = [
  "Apache Spark", "PySpark", "Hadoop", "Hive", "HDFS", "YARN", "MapReduce",
  "Python", "SQL", "PostgreSQL", "MySQL", "MongoDB", "TiDB",
  "ETL / ELT", "Data Warehousing", "Machine Learning", "Power BI", "FastAPI",
  "Git", "Render", "Vercel",
];

export default function TechMarquee() {
  // duplicate the list so the loop is seamless
  const loop = [...items, ...items];

  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-6"
    >
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-900 to-transparent" />

      <div className="marquee flex w-max gap-4">
        {loop.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap font-mono text-sm text-white/55"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-electric to-cyan" />
            {t}
          </span>
        ))}
      </div>

      <style jsx>{`
        .marquee {
          animation: scroll 38s linear infinite;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none; }
        }
      `}</style>
    </section>
  );
}
