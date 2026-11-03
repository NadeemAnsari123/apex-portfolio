"use client";

export default function HolographicEffects() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <style>{`
        @keyframes hudSweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes hudBlink {
          0%, 100% { opacity: .25; }
          50% { opacity: .85; }
        }
        @keyframes hudFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .hud-sweep {
          animation: hudSweep 24s linear infinite;
        }
        .hud-blink {
          animation: hudBlink 3s ease-in-out infinite;
        }
        .hud-float {
          animation: hudFloat 6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hud-sweep, .hud-blink, .hud-float {
            animation: none;
          }
        }
      `}</style>

      <div className="absolute inset-[8%] rounded-full border border-cyan-400/10" />

      <div
        className="hud-sweep absolute inset-[13%] rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg 290deg, rgba(34,211,238,.12) 335deg, transparent 360deg)",
          WebkitMask:
            "radial-gradient(farthest-side, transparent 92%, black 95%)",
          mask:
            "radial-gradient(farthest-side, transparent 92%, black 95%)",
        }}
      />

      <div className="hud-blink absolute left-[12%] top-[24%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />
      <div className="hud-blink absolute bottom-[25%] right-[12%] h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_#3b82f6]" />

     <div className="hud-float absolute left-[4%] top-[35%] hidden font-mono text-[8px] tracking-widest text-cyan-400/50 lg:block">
        SYS.01
      </div>

      <div className="hud-float absolute bottom-[32%] right-[3%] hidden font-mono text-[8px] tracking-widest text-cyan-400/50 lg:block">
        APEX.CORE
      </div>

      <div className="absolute left-[10%] top-1/2 h-px w-[12%] bg-gradient-to-r from-transparent to-cyan-400/30" />
      <div className="absolute right-[10%] top-1/2 h-px w-[12%] bg-gradient-to-l from-transparent to-cyan-400/30" />
    </div>
  );
}
