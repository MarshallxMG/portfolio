"use client";

import dynamic from "next/dynamic";

const NetworkBackground = dynamic(() => import("./three/NetworkBackground"), { ssr: false });

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-aurora opacity-60" />
      <NetworkBackground />
      <div className="absolute inset-0 bg-ink-900/40" />
    </div>
  );
}
