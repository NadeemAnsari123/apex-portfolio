"use client";

type VoiceWaveformProps = {
  active: boolean;
};

export default function VoiceWaveform({
  active,
}: VoiceWaveformProps) {
  return (
    <div
      className="flex h-8 items-center justify-center gap-[3px]"
      role="status"
      aria-label={active ? "Microphone listening" : "Microphone idle"}
    >
      <style>{`
        @keyframes jarvisWave {
          0%, 100% { transform: scaleY(0.25); opacity: 0.5; }
          50% { transform: scaleY(1); opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .jarvis-wave-bar { animation: none !important; }
        }
      `}</style>

      {Array.from({ length: 13 }, (_, index) => (
        <span
          key={index}
          className="jarvis-wave-bar h-6 w-[3px] rounded-full bg-cyan-400"
          style={{
            transform: active ? undefined : "scaleY(0.25)",
            opacity: active ? undefined : 0.3,
            boxShadow: active
              ? "0 0 8px rgba(34,211,238,0.7)"
              : "none",
            animation: active
              ? `jarvisWave ${0.45 + (index % 5) * 0.12}s ease-in-out infinite`
              : "none",
            animationDelay: `${index * 0.07}s`,
          }}
        />
      ))}
    </div>
  );
}
