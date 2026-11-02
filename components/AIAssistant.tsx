"use client";

import VoiceWaveform from "@/components/VoiceWaveform";

import { useJarvisVoice } from "@/components/useJarvisVoice";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "assistant" | "user";
  text: string;
};

const suggestions = [
  "Show me your projects",
  "What are your skills?",
  "Tell me about BabyNest",
  "How can I contact you?",
];

function getResponse(input: string): string {
  const q = input.toLowerCase().trim();

  if (/\b(hello|hi|hey|namaste)\b/.test(q)) {
    return "Welcome to Nadeem Ansari's Command Center! I can help you explore Nadeem's Oracle APEX projects, technical expertise, and consulting services.";
  }

  if (/babynest|baby nest/.test(q)) {
    return "BabyNest is an Oracle APEX baby care application featuring product browsing, account pages, and a PDF-to-JSON utility. You can explore it in the Featured Projects section.";
  }

  if (/hotel|hospitality/.test(q)) {
    return "The Hotel Management System is an Oracle APEX hospitality application. More detailed features and screenshots will be added to the portfolio.";
  }

  if (/project|portfolio|work|application/.test(q)) {
    return "Nadeem's featured Oracle APEX projects currently include BabyNest and a Hotel Management System. Scroll to Featured Projects to learn more.";
  }

  if (/skill|expertise|technology|sql|report|dashboard|apex/.test(q)) {
    return "Nadeem works with Oracle APEX, Oracle SQL, reporting, dashboards, enterprise applications, requirement analysis, functional documentation, and UAT.";
  }

  if (/experience|background|about|who is nadeem/.test(q)) {
    return "Nadeem is an India-based enterprise application professional working across Oracle technologies, business consulting, application support, and process improvement.";
  }

  if (/contact|email|hire|collaborat|reach|linkedin/.test(q)) {
    return "You can reach Nadeem through the Contact section of this portfolio. The contact details will be finalized before deployment.";
  }

  if (/thank/.test(q)) {
    return "You're welcome! Feel free to explore the portfolio or ask another question.";
  }

  return "I can help with Nadeem's Oracle APEX projects, technical skills, professional background, and contact information. Try asking about BabyNest, SQL reporting, or featured projects.";
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const voice = useJarvisVoice((transcript) => {
    setInput(transcript);
    sendMessage(transcript);
  });
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Welcome to Nadeem Ansari's Command Center. I'm your portfolio assistant. How can I help you?",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [messages, open]);

  function sendMessage(value?: string) {
    const question = (value ?? input).trim();

    if (!question) return;

    const answer = getResponse(question);
    voice.speak(answer);

    setMessages((previous) => [
      ...previous,
      { role: "user", text: question },
      { role: "assistant", text: answer },
    ]);

    setInput("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-[100] sm:bottom-7 sm:right-7">
      {open && (
        <section
          aria-label="NA Portfolio Assistant"
          className="mb-4 flex h-[min(520px,75dvh)] w-[min(370px,calc(100vw-40px))] flex-col overflow-hidden rounded-2xl border border-cyan-400/30 bg-[#071321]/95 shadow-[0_0_65px_rgba(34,211,238,0.16)] backdrop-blur-2xl"
        >
          <header className="flex items-center justify-between border-b border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/50 bg-cyan-400/10 text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.2)]">
                <svg
                  viewBox="0 0 24 24"
                  width="23"
                  height="23"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="4" y="7" width="16" height="13" rx="3" />
                  <path d="M12 3v4M9 3h6M4 12H2M22 12h-2" />
                  <circle cx="9" cy="13" r="1" fill="currentColor" />
                  <circle cx="15" cy="13" r="1" fill="currentColor" />
                  <path d="M9 17h6" />
                </svg>
              </div>

              <div>
                <h2 className="font-mono text-xs font-bold tracking-wider text-cyan-100">
                  NADEEM ANSARI / AI ASSISTANT
                </h2>
                <p className="mt-1 flex items-center gap-2 font-mono text-[9px] tracking-widest text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  SYSTEM READY
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
              className="rounded-lg px-3 py-2 text-slate-400 hover:bg-white/10 hover:text-white"
            >
              ✕
            </button>
          </header>

          <div
            className="flex-1 space-y-4 overflow-y-auto px-4 py-5"
            aria-live="polite"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[90%] rounded-2xl px-4 py-3 text-xs leading-6 ${
                    message.role === "user"
                      ? "rounded-br-sm bg-cyan-500 text-[#04111E]"
                      : "rounded-bl-sm border border-cyan-400/15 bg-[#102538] text-slate-200"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 px-4 pb-3">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => sendMessage(suggestion)}
                  className="rounded-full border border-cyan-400/20 px-3 py-2 text-[10px] text-cyan-200 transition hover:bg-cyan-400/10"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {voice.listening && (
            <div className="flex items-center justify-center gap-3 border-t border-cyan-400/10 bg-cyan-400/[0.04] py-2">
              <VoiceWaveform active={voice.listening} />
              <span className="font-mono text-[10px] tracking-widest text-cyan-300">
                LISTENING...
              </span>
            </div>
          )}
          <div className="flex items-center justify-between border-t border-cyan-400/10 px-4 py-2">
            <button
              type="button"
              onClick={() => {
                if (voice.listening) {
                  voice.stopListening();
                } else {
                  voice.startListening();
                }
              }}
              disabled={!voice.supported}
              className={`rounded-lg border px-3 py-2 text-xs transition ${
                voice.listening
                  ? "border-red-400 bg-red-500/20 text-red-300"
                  : "border-cyan-400/20 text-cyan-200 hover:bg-cyan-400/10"
              } disabled:opacity-40`}
            >
              {voice.listening ? "● LISTENING..." : "🎙 MICROPHONE"}
            </button>

            <button
              type="button"
              onClick={() => {
                if (voice.voiceEnabled) voice.stopSpeaking();
                voice.setVoiceEnabled(!voice.voiceEnabled);
              }}
              className="rounded-lg border border-cyan-400/20 px-3 py-2 text-xs text-cyan-200 hover:bg-cyan-400/10"
            >
              {voice.voiceEnabled ? "🔊 VOICE ON" : "🔇 VOICE OFF"}
            </button>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
            className="flex gap-2 border-t border-cyan-400/15 p-3"
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              maxLength={300}
              placeholder="Ask about projects or skills..."
              aria-label="Message"
              className="min-w-0 flex-1 rounded-xl border border-cyan-400/20 bg-[#0C2030] px-3 py-3 text-xs text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/60"
            />

            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="rounded-xl bg-cyan-500 px-4 text-sm font-bold text-[#04111E] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ➤
            </button>
          </form>

          <div className="pb-3 text-center font-mono text-[8px] tracking-widest text-slate-500">
            PORTFOLIO KNOWLEDGE ASSISTANT
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={open}
        className="group ml-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/60 bg-[#08273C] shadow-[0_0_30px_rgba(34,211,238,0.25)] transition duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(34,211,238,0.45)]"
      >
        <span className="text-xl font-black text-cyan-100 group-hover:text-white">
          {open ? "✕" : "NA"}
        </span>
      </button>
    </div>
  );
}






