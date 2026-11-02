"use client";

import { useEffect, useState } from "react";

const modules = [
  "INITIALIZING AI CORE",
  "LOADING ORACLE APEX MODULES",
  "CONNECTING SQL & REPORTING",
  "VERIFYING ENTERPRISE SYSTEMS",
  "ACCESS GRANTED",
];

export default function BootSequence() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("na-boot-complete")) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sessionStorage.setItem("na-boot-complete", "1");
      return;
    }

    const showTimer = window.setTimeout(() => setVisible(true), 0);
    let value = 0;

    const interval = window.setInterval(() => {
      value = Math.min(value + 2, 100);
      setProgress(value);

      if (value === 100) {
        window.clearInterval(interval);
        sessionStorage.setItem("na-boot-complete", "1");
        setClosing(true);
      }
    }, 35);

    return () => {
      window.clearTimeout(showTimer);
      window.clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  const currentModule = Math.min(
    Math.floor(progress / 21),
    modules.length - 1
  );

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#030914] px-6 transition-opacity duration-700 ${
        closing ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      onTransitionEnd={() => {
        if (closing) setVisible(false);
      }}
      role="status"
      aria-live="polite"
      aria-label="Portfolio initialization"
    >
      <div className="w-full max-w-md text-center">
        <div className="relative mx-auto mb-12 flex h-52 w-52 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-3xl" />

          <div
            className="absolute inset-0 rounded-full border border-cyan-400/30"
            style={{ animation: "spin 12s linear infinite" }}
          />

          <div
            className="absolute inset-5 rounded-full border-2 border-dashed border-cyan-400/50"
            style={{ animation: "spin 8s linear infinite reverse" }}
          />

          <div
            className="absolute inset-10 rounded-full border border-cyan-300/70 shadow-[0_0_35px_rgba(34,211,238,0.25)]"
            style={{ animation: "spin 5s linear infinite" }}
          />

          <div className="relative flex h-24 w-24 flex-col items-center justify-center rounded-full border border-cyan-300 bg-[#092138] shadow-[0_0_40px_rgba(34,211,238,0.35)]">
            <span className="text-4xl font-black text-cyan-100">
              NA
            </span>
            <span className="text-[7px] font-bold tracking-[0.2em] text-cyan-300">
              AI SYSTEM
            </span>
          </div>
        </div>

        <p className="mb-3 font-mono text-xs tracking-[0.35em] text-cyan-300">
          NA / COMMAND CENTER
        </p>

        <h2 className="mb-8 text-2xl font-black tracking-wide text-white">
          SYSTEM INITIALIZING
        </h2>

        <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-cyan-950">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-300 shadow-[0_0_15px_#22d3ee] transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between gap-3 font-mono text-[10px] tracking-wider text-cyan-300">
          <span>{modules[currentModule]}</span>
          <span>{progress}%</span>
        </div>

        <p className="mt-12 font-mono text-[9px] tracking-[0.2em] text-slate-500">
          ORACLE APEX · ENTERPRISE APPLICATIONS
        </p>
      </div>
    </div>
  );
}
