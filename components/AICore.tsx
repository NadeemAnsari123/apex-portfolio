"use client";

import { useState } from "react";

const ticks = Array.from({ length: 60 }, (_, i) => i);
const orbitDots = [0, 90, 180, 270];

export default function AICore() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative mx-auto flex aspect-square w-full max-w-[440px] select-none items-center justify-center overflow-hidden"
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientY - rect.top) / rect.height - 0.5;
        const y = (event.clientX - rect.left) / rect.width - 0.5;
        setTilt({ x: -x * 9, y: y * 9 });
      }}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
      aria-label="Animated NA Oracle APEX command center hologram"
      role="img"
    >
      <style>{`
        @keyframes na-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes na-pulse {
          0%, 100% { opacity: .45; transform: scale(.96); }
          50% { opacity: 1; transform: scale(1.04); }
        }
        @keyframes na-scan {
          to { transform: rotate(360deg); }
        }
        @keyframes na-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        .na-rotate {
          animation: na-spin 35s linear infinite;
        }
        .na-reverse {
          animation: na-spin 24s linear infinite reverse;
        }
        .na-scanner {
          animation: na-scan 9s linear infinite;
        }
        .na-pulse {
          animation: na-pulse 4s ease-in-out infinite;
        }
        .na-float {
          animation: na-float 5s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .na-rotate, .na-reverse, .na-scanner,
          .na-pulse, .na-float {
            animation: none !important;
          }
        }
      `}</style>

      {/* Ambient energy */}
      <div className="pointer-events-none absolute inset-[15%] rounded-full bg-cyan-500/15 blur-[65px]" />
      <div className="pointer-events-none absolute inset-[25%] rounded-full bg-blue-600/15 blur-[45px]" />

      {/* Interactive holographic assembly */}
      <div
        className="relative flex h-[88%] w-[88%] items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Technical tick marks */}
        <div className="na-rotate absolute inset-0 rounded-full">
          {ticks.map((tick) => (
            <div
              key={tick}
              className="absolute inset-0"
              style={{ transform: `rotate(${tick * 6}deg)` }}
            >
              <div
                className={`absolute left-1/2 top-0 -translate-x-1/2 bg-cyan-300 ${
                  tick % 5 === 0
                    ? "h-[12px] w-[2px] opacity-80"
                    : "h-[5px] w-px opacity-30"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Outer orbital ring */}
        <div className="absolute inset-[6%] rounded-full border border-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.08)]" />

        {/* Rotating segmented ring */}
        <div
          className="na-rotate absolute inset-[10%] rounded-full"
          style={{
            background:
              "conic-gradient(from 20deg, transparent 0deg 25deg, #22d3ee 26deg 65deg, transparent 66deg 130deg, #3b82f6 131deg 165deg, transparent 166deg 230deg, #67e8f9 231deg 275deg, transparent 276deg 360deg)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px))",
            mask:
              "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px))",
          }}
        />

        {/* Reverse orbital ring */}
        <div className="na-reverse absolute inset-[17%] rounded-full border-2 border-dashed border-cyan-400/35" />

        {/* Orbital tracking points */}
        <div className="na-reverse absolute inset-[17%] rounded-full">
          {orbitDots.map((angle) => (
            <div
              key={angle}
              className="absolute inset-0"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <div className="absolute left-1/2 top-[-3px] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />
            </div>
          ))}
        </div>

        {/* Inner scanner */}
        <div className="absolute inset-[25%] rounded-full border border-blue-400/30" />
        <div
          className="na-scanner absolute inset-[25%] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(34,211,238,.22) 65deg, transparent 95deg, transparent 360deg)",
          }}
        />

        {/* Inner illuminated ring */}
        <div className="na-pulse absolute inset-[31%] rounded-full border-2 border-cyan-300/70 shadow-[0_0_25px_rgba(34,211,238,.3),inset_0_0_25px_rgba(34,211,238,.15)]" />

        {/* Energy core */}
        <div className="na-float relative z-10 flex h-[29%] w-[29%] flex-col items-center justify-center rounded-full border border-cyan-200/80 bg-gradient-to-br from-[#123B59] via-[#071C30] to-[#06101C] shadow-[0_0_45px_rgba(34,211,238,.35),inset_0_0_30px_rgba(34,211,238,.15)]">
          <span className="text-[clamp(24px,5vw,43px)] font-black tracking-tight text-cyan-100 drop-shadow-[0_0_12px_rgba(103,232,249,.7)]">
            NA
          </span>
          <span className="mt-1 text-[clamp(5px,1vw,8px)] font-bold tracking-[0.15em] text-cyan-300">
            APEX CORE
          </span>
        </div>
      </div>

      {/* Floating HUD labels */}
      <div className="absolute left-[2%] top-[13%] font-mono text-[8px] tracking-[0.12em] text-cyan-300/80 sm:text-[10px]">
        <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
        SYSTEM ONLINE
      </div>

      <div className="absolute bottom-[15%] right-[1%] font-mono text-[8px] tracking-[0.12em] text-cyan-300/80 sm:text-[10px]">
        ORACLE APEX
      </div>

      <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[8px] tracking-[0.2em] text-cyan-400/70 sm:text-[10px]">
        NA / COMMAND CENTER
      </div>
    </div>
  );
}
