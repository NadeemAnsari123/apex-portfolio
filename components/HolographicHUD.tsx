"use client";

import { useState } from "react";

const systems = [
  {
    id: "01",
    name: "ORACLE APEX",
    type: "APPLICATION DEVELOPMENT",
    detail: "Enterprise Applications",
    color: "cyan",
  },
  {
    id: "02",
    name: "SQL & REPORTING",
    type: "DATA INTELLIGENCE",
    detail: "Dashboards & Reports",
    color: "blue",
  },
  {
    id: "03",
    name: "BUSINESS CONSULTING",
    type: "PROCESS OPTIMIZATION",
    detail: "Requirements & UAT",
    color: "violet",
  },
];

export default function HolographicHUD() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="relative mx-auto mt-5 w-full max-w-[520px]">
      <div className="mb-4 flex items-center justify-between gap-3 px-1 font-mono text-[9px] tracking-[0.15em] text-cyan-400/70">
        <span>NA / SYSTEM MODULES</span>
        <span className="flex items-center gap-2 text-emerald-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          ONLINE
        </span>
      </div>

<div className="grid grid-cols-3 gap-1 sm:gap-3">
        {systems.map((system, index) => (
          <button
            key={system.id}
            type="button"
            onClick={() =>
              setActive(active === index ? null : index)
            }
            aria-expanded={active === index}
            className={`group relative min-h-[112px] overflow-hidden rounded-xl border p-3 text-left transition-all duration-300 hover:-translate-y-1 ${
              active === index
                ? "border-cyan-300/70 bg-cyan-400/15 shadow-[0_0_25px_rgba(34,211,238,0.12)]"
                : "border-cyan-400/20 bg-[#0B1B2B]/80 hover:border-cyan-300/50"
            }`}
          >
            <div className="absolute left-0 top-0 h-3 w-3 border-l border-t border-cyan-400/60" />
            <div className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-cyan-400/60" />

            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-[9px] text-cyan-400/70">
                MOD_{system.id}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            </div>

<h3 className="text-[11px] font-bold leading-snug tracking-wide text-cyan-100">
              {system.name}
            </h3>

            <p className="mt-2 font-mono text-[8px] leading-4 tracking-wider text-slate-400">
              {system.type}
            </p>

            <div
              className={`mt-3 overflow-hidden transition-all duration-300 ${
                active === index
                  ? "max-h-16 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-cyan-400/20 pt-2 text-[10px] text-cyan-300">
                {system.detail}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3 px-1">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400/40" />
        <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-400/50">
          INTERACTIVE MODULE INTERFACE
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-400/40" />
      </div>
    </div>
  );
}
