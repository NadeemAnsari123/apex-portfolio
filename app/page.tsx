
"use client";

import { useEffect, useState } from "react";
import AICore from "@/components/AICore";
import HolographicHUD from "@/components/HolographicHUD";
import HolographicEffects from "@/components/HolographicEffects";

const projects = [
  {
    number: "01",
    name: "BabyNest",
    category: "Baby Care & E-Commerce",
    description:
      "An Oracle APEX baby care storefront featuring product browsing, account pages, database-driven functionality, and a PDF-to-JSON utility.",
    tags: ["Oracle APEX", "PL/SQL", "E-Commerce"],
    image: "/babynest.png",
  },
  {
    number: "02",
    name: "Nadeem Rental Property",
    category: "Property & Rental Management System",
    description:
      "An Oracle APEX rental property management application featuring property listings, tenant management, rent collection, payment tracking, interactive reports, and dashboards.",
    tags: ["Oracle APEX", "Property Management", "Rent Collection", "Dashboards"],
    image: "/Nadeem_Rental_Property.png",
  },
  {    number: "03",
    name: "Hussaini Academy",
    category: "Online Learning Platform · In Development",
    description:
      "A Next.js learning platform featuring authentication, course browsing, enrollment, and lesson progress tracking.",
    tags: ["Next.js", "React", "TypeScript", "Supabase"],
    image: "/hussaini-academy.png",
  },
  {
    number: "04",
    name: "ARROW UDA",
    category: "Mobile Puzzle Game · In Development",
    description:
      "An original Flutter-based Android arrow escape puzzle game with colorful levels, animated arrow movement, lives, hints, and undo functionality.",
    tags: ["Flutter", "Dart", "Android", "Game Development"],
    image: "/arrow-uda.png",
  },
];
const expertise = [
  {
    number: "01",
    title: "Oracle APEX Development",
    text: "Enterprise applications, interactive reports, interactive grids, forms, dashboards, dynamic actions, and application customization.",
  },
  {
    number: "02",
    title: "SQL & PL/SQL Development",
    text: "Complex SQL queries, stored procedures, functions, packages, triggers, database logic, and query optimization.",
  },
  {
    number: "03",
    title: "Enterprise Reporting & BI",
    text: "JasperReports, Oracle BI Publisher, APEX interactive reports, KPI dashboards, and operational reporting solutions.",
  },
  {
    number: "04",
    title: "REST API & JSON Integration",
    text: "REST API integration, JSON-based data exchange, Postman testing, and application-level troubleshooting.",
  },
  {
    number: "05",
    title: "Oracle Database Development",
    text: "Database design, views, materialized views, data validation, SQL performance tuning, and data integrity.",
  },
  {
    number: "06",
    title: "Frontend Development & Testing",
    text: "JavaScript, HTML5, CSS3, responsive interfaces, application debugging, unit testing, and UAT support.",
  },
  {
    number: "07",
    title: "React.js & Next.js Development",
    text: "Building responsive web applications using React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, and Supabase.",
  },
  {
    number: "08",
    title: "Flutter & Dart Development",
    text: "Developing Android applications and interactive mobile puzzle games using Flutter, Dart, custom animations, and state management.",
  },];
export default function Home() {
  // Open the homepage at the JARVIS welcome hero instead of restoring
  // a previous scroll position. Preserve intentional #section links.
  useEffect(() => {
    if (window.location.hash) return;

    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const goToTop = () => {
      if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    };

    goToTop();
    const firstFrame = window.requestAnimationFrame(goToTop);
    const shortDelay = window.setTimeout(goToTop, 120);
    const lateDelay = window.setTimeout(goToTop, 450);
    window.addEventListener("pageshow", goToTop);

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.clearTimeout(shortDelay);
      window.clearTimeout(lateDelay);
      window.removeEventListener("pageshow", goToTop);
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);
  const [inquiryStatus, setInquiryStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleInquirySubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (inquiryStatus === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setInquiryStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setInquiryStatus("success");
    } catch {
      setInquiryStatus("error");
    }
  }

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#060B16] text-white">

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-[#060B16]/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-5 sm:px-6 lg:px-8 xl:px-10">

          <a href="#" className="text-xl font-black tracking-tight">
            NADEEM ANSARI<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-9 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#experience" className="transition hover:text-cyan-400">
              Experience
            </a>
            <a href="#expertise" className="transition hover:text-cyan-400">
              Expertise
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#services" className="transition hover:text-cyan-400">
              Services
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/20 md:block"
          >
            Hire Me
          </a>

          <button
            type="button"
            className="text-2xl text-cyan-300 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            ☰
          </button>
        </nav>

        {menuOpen && (
          <div className="flex flex-col gap-4 border-t border-cyan-400/10 px-6 py-5 text-sm md:hidden">
            {["about", "experience", "expertise", "projects", "services", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="capitalize text-slate-300"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 xl:px-10 pb-5 pt-4 md:pb-28 md:pt-10 lg:pt-12">
        
{/* RESPONSIVE — JARVIS DIGITAL ATMOSPHERE (MOBILE + DESKTOP) */}

{/* Mobile hologram animations */}
<style>{`
  @keyframes mobileWaveFlow {
    0% { transform: translateX(-3%) translateY(0); opacity: .35; }
    50% { transform: translateX(3%) translateY(-5px); opacity: .85; }
    100% { transform: translateX(-3%) translateY(0); opacity: .35; }
  }

  @keyframes mobileGlobeRotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes mobileEnergyPulse {
    0%, 100% {
      opacity: .45;
      filter: drop-shadow(0 0 3px #22d3ee);
    }
    50% {
      opacity: 1;
      filter: drop-shadow(0 0 12px #22d3ee);
    }
  }

  .mobile-hud-wave {
    animation: mobileWaveFlow 5s ease-in-out infinite;
    transform-origin: center;
  }

  .mobile-hud-globe {
    animation: mobileGlobeRotate 24s linear infinite;
  }

  .mobile-hud-energy {
    animation: mobileEnergyPulse 3s ease-in-out infinite;
  }

  /* Original armored JARVIS messenger: fly-in, hover, welcome */
  @keyframes jarvisFlyAcross {
    0% { transform: translate(-420px, 55px) rotate(-17deg) scale(.58); opacity: 0; }
    12% { opacity: 1; }
    45% { transform: translate(-40px, -5px) rotate(8deg) scale(.95); opacity: 1; }
    62%, 86% { transform: translate(0, -9px) rotate(0deg) scale(1); opacity: 1; }
    100% { transform: translate(470px, -65px) rotate(16deg) scale(.7); opacity: 0; }
  }
  @keyframes jarvisThruster { 0%,100% { opacity: .5; transform: scaleY(.75); } 50% { opacity: 1; transform: scaleY(1.2); } }
  @keyframes jarvisWelcome { 0%, 35% { opacity: 0; transform: translateY(12px); } 48%, 83% { opacity: 1; transform: translateY(0); } 96%,100% { opacity: 0; transform: translateY(-8px); } }
  @keyframes jarvisFlyMobile {
    0% { transform: translate(-210px, 35px) rotate(-14deg) scale(.58); opacity: 0; }
    15% { opacity: 1; }
    46% { transform: translate(-10px, 0) rotate(5deg) scale(.9); opacity: 1; }
    60%, 84% { transform: translate(0, -5px) rotate(0deg) scale(1); opacity: 1; }
    100% { transform: translate(220px, -35px) rotate(14deg) scale(.65); opacity: 0; }
  }
  .jarvis-flyer { animation: jarvisFlyMobile 9s ease-in-out infinite; }
  @media (min-width: 1024px) {
    .jarvis-flyer { animation-name: jarvisFlyAcross; }
  }
  .jarvis-thruster { transform-origin: top center; animation: jarvisThruster .24s ease-in-out infinite; }
  .jarvis-welcome { animation: jarvisWelcome 9s ease-in-out infinite; }
  @keyframes jarvisCoreSpin { to { transform: rotate(360deg); } }
  @keyframes jarvisCoreSpinReverse { to { transform: rotate(-360deg); } }
  @keyframes jarvisScanSweep { 0%, 100% { transform: translateY(-26px); opacity: .12; } 50% { transform: translateY(26px); opacity: .7; } }
  @keyframes jarvisCoreBreathe { 0%, 100% { opacity: .55; transform: scale(.94); } 50% { opacity: 1; transform: scale(1.06); } }
  .jarvis-core-spin { animation: jarvisCoreSpin 22s linear infinite; }
  .jarvis-core-reverse { animation: jarvisCoreSpinReverse 15s linear infinite; }
  .jarvis-core-scan { animation: jarvisScanSweep 4s ease-in-out infinite; }
  .jarvis-core-pulse { animation: jarvisCoreBreathe 3.6s ease-in-out infinite; }
  @media (prefers-reduced-motion: reduce) {
    .mobile-hud-wave,
    .mobile-hud-globe,
    .mobile-hud-energy,
    .jarvis-core-spin,
    .jarvis-core-reverse,
    .jarvis-core-scan,
    .jarvis-core-pulse,
    .jarvis-flyer,
    .jarvis-thruster,
    .jarvis-welcome {
      animation: none !important;
    }
  }
`}</style>

<div className="pointer-events-none relative mx-auto mb-0 h-52 w-full max-w-[1600px] overflow-hidden sm:h-48 lg:mb-8 lg:h-36">
  {/* Digital wave lines */}
<div className="absolute inset-0 opacity-70 lg:opacity-100 mobile-hud-wave">
    <svg
      viewBox="0 0 400 130"
      preserveAspectRatio="none"
      className="h-full w-full"
      aria-hidden="true"
    >
      {Array.from({ length: 13 }, (_, i) => (
        <path
          key={i}
          d={`M -30 ${15 + i * 6} C 100 ${-20 + i * 4}, 190 ${140 - i * 3}, 430 ${20 + i * 5}`}
          fill="none"
          stroke="#22d3ee"
          strokeWidth="0.6"
          opacity={0.2 + i * 0.035}
        />
      ))}
    </svg>
  </div>

  {/* RESPONSIVE — original flying armored JARVIS messenger */}
  <div className="absolute inset-0 flex items-start justify-center pt-8 lg:items-center lg:pt-0" aria-hidden="true">
    <div className="absolute h-32 w-72 rounded-full bg-cyan-400/[0.07] blur-3xl" />
    <div className="jarvis-flyer relative z-10 h-24 w-20 lg:h-32 lg:w-28 drop-shadow-[0_0_20px_rgba(34,211,238,0.65)]">
      <svg viewBox="0 0 140 160" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="jarvisArmor" x1="20" y1="20" x2="120" y2="145" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B526A"/><stop offset=".48" stopColor="#0B1C31"/><stop offset="1" stopColor="#1B6B83"/>
          </linearGradient>
          <linearGradient id="jarvisFlame" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#E0FCFF"/><stop offset=".5" stopColor="#22D3EE"/><stop offset="1" stopColor="#22D3EE" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <g className="jarvis-thruster">
          <path d="M45 125L37 155L54 138L57 123Z" fill="url(#jarvisFlame)"/>
          <path d="M83 123L88 157L101 128L95 120Z" fill="url(#jarvisFlame)"/>
        </g>
        <path d="M47 94L33 124L48 134L61 108M91 94L107 124L92 134L79 108" fill="url(#jarvisArmor)" stroke="#46DFF1" strokeWidth="2"/>
        <path d="M46 51L24 63L10 99L26 107L45 80M94 51L116 63L130 99L114 107L95 80" fill="url(#jarvisArmor)" stroke="#46DFF1" strokeWidth="2"/>
        <path d="M43 48L70 42L97 48L103 93L86 118L54 118L37 93Z" fill="url(#jarvisArmor)" stroke="#61E7F8" strokeWidth="2"/>
        <path d="M50 65L70 73L90 65L86 96L70 106L54 96Z" fill="#081625" stroke="#22D3EE" strokeOpacity=".7"/>
        <circle cx="70" cy="83" r="12" fill="#22D3EE" fillOpacity=".14" stroke="#A5F3FC" strokeWidth="2"/>
        <circle cx="70" cy="83" r="5" fill="#D8FCFF"/>
        <path d="M51 15L70 7L89 15L97 37L87 53L53 53L43 37Z" fill="url(#jarvisArmor)" stroke="#67E8F9" strokeWidth="2"/>
        <path d="M51 32L64 36L70 34L76 36L89 32L84 42L70 45L56 42Z" fill="#5DE7F9" stroke="#C9FAFF" strokeWidth="1.5"/>
        <path d="M49 20L70 14L91 20M41 67L26 92M99 67L114 92" stroke="#6EE7F9" strokeOpacity=".65" strokeWidth="2"/>
        <circle cx="20" cy="103" r="6" fill="#B6F8FF" fillOpacity=".8"/>
        <circle cx="120" cy="103" r="6" fill="#B6F8FF" fillOpacity=".8"/>
      </svg>
    </div>
    <div className="jarvis-welcome absolute bottom-7 left-1/2 w-[min(88%,290px)] -translate-x-1/2 rounded-xl border border-cyan-300/40 bg-[#071523]/90 px-3 py-2 text-center lg:bottom-auto lg:left-[58%] lg:top-5 lg:w-auto lg:translate-x-0 lg:px-5 lg:py-3 lg:text-left shadow-[0_0_35px_rgba(34,211,238,0.18)]">
      <p className="font-mono text-[8px] tracking-[.14em] text-cyan-300/70 lg:text-[9px] lg:tracking-[.25em]">JARVIS / INCOMING MESSAGE</p>
      <p className="mt-1 text-xs font-bold tracking-wide text-cyan-100 lg:text-sm">WELCOME! CONTACT NADEEM</p>
      <p className="text-[9px] text-slate-400 lg:text-[10px]">Let&apos;s build something extraordinary.</p>
    </div>
  </div>

  {/* DESKTOP ONLY — live telemetry labels */}
  <div className="absolute bottom-3 left-[27%] hidden flex-col gap-1 font-mono text-[9px] tracking-[0.15em] text-cyan-300/65 lg:flex">
    <span>APEX ENGINE <span className="text-emerald-300">ACTIVE</span></span>
    <span>SECURE CONNECTION <span className="text-emerald-300">ESTABLISHED</span></span>
  </div>
  <div className="absolute bottom-3 right-[15%] hidden font-mono text-[9px] tracking-[0.15em] text-cyan-300/60 lg:block">
    HOLOGRAPHIC INTERFACE / V2
  </div>

  {/* Digital globe */}
  <div className="absolute right-2 top-2 hidden h-24 w-24 items-center justify-center lg:flex rounded-full border border-cyan-400/30 bg-cyan-400/[0.04] shadow-[0_0_35px_rgba(34,211,238,0.12)] mobile-hud-energy">
    <div className="absolute inset-3 rounded-full border border-dashed border-cyan-300/40 mobile-hud-globe" />
    <div className="absolute inset-6 rounded-full border border-cyan-400/30" />
    <div className="h-16 w-8 rounded-full border border-cyan-300/40" />
    <div className="absolute h-px w-20 bg-cyan-400/40" />
    <div className="absolute h-20 w-px bg-cyan-400/30" />
    <span className="absolute -right-1 top-6 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />
  </div>

  {/* Technology badge */}
  <div className="absolute left-2 top-3 rounded-full border border-cyan-400/30 bg-[#06101C]/80 px-3 py-2 font-mono text-[9px] font-semibold tracking-wider text-cyan-200">
    ORACLE APEX · SQL · BI · HCM
  </div>

  <div className="absolute bottom-2 left-3 flex items-center gap-2 font-mono text-[9px] tracking-widest text-cyan-400/70 lg:bottom-3">
    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
    JARVIS SYSTEM ONLINE
  </div>
</div>


        {/* Background glow */}
        <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/[0.07] blur-[130px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-600/[0.06] blur-[120px]" />

        <div className="relative mx-auto max-w-[1600px]">

          {/* TWO-COLUMN HERO */}
          {/* <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"> */}
          <div className="grid grid-cols-2 items-start gap-3 sm:gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">

            {/* LEFT — INTRODUCTION */}
            <div className="relative z-10">

              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 font-mono text-[10px] font-semibold tracking-[0.14em] text-cyan-300 sm:text-xs">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                ORACLE APEX · ENTERPRISE APPLICATIONS
              </div>

              {/* <h1 className="text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl xl:text-6xl"> */}
              <h1 className="text-[clamp(13px,3.8vw,24px)] font-black leading-[1.2] tracking-tight sm:text-5xl lg:text-4xl xl:text-6xl">
                Hi, I'm Nadeem.
                <span className="mt-4 block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  Oracle APEX Developer & Consultant.
                </span>
              </h1>

              {/* <p className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg"> */}
              <p className="mt-3 max-w-xl text-[10px] leading-[1.5] text-slate-400 sm:mt-8 sm:text-lg sm:leading-8">
                I design and develop business applications using Oracle APEX,
                SQL, reporting, and dashboards—helping organizations streamline
                workflows and improve operational efficiency.
              </p>

              {/* <p className="mt-5 flex items-center gap-2 text-sm font-medium text-emerald-400"> */}
               <p className="mt-3 hidden items-start gap-1.5 text-[9px] leading-[1.4] font-medium text-emerald-400 lg:mt-5 lg:flex lg:items-center lg:gap-2 lg:text-sm">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                Open to Full-Time Opportunities & Freelance Projects
              </p>
              {/* <div className="mt-10 flex flex-wrap gap-4"> */}
              <div className="mt-4 hidden flex-col items-start gap-2 lg:mt-10 lg:flex lg:flex-row lg:flex-wrap lg:items-center lg:gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-2 py-2 text-center text-[9px] font-semibold leading-tight text-[#06101C] transition hover:bg-cyan-300 sm:px-7 sm:py-3.5 sm:text-base"
                >
                  View Projects →
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 px-2 py-2 text-center text-[9px] font-semibold leading-tight text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/10 sm:px-7 sm:py-3.5 sm:text-base"
                >
                  Hire Me / Let's Talk
                </a>

                <a
                  href="/Nadeem_Ansari_Oracle_APEX_Developer.pdf"
                  download="Nadeem_Ansari_Resume.pdf"
                  className="inline-flex items-center justify-center gap-1 rounded-full border border-slate-500/50 px-2 py-2 text-center text-[9px] font-semibold leading-tight text-white transition hover:border-cyan-300 hover:bg-cyan-400/10 sm:gap-2 sm:px-7 sm:py-3.5 sm:text-base"
                >
                  <span aria-hidden="true">↓</span>
                  Download Resume
                </a>
              </div>

              <div className="mt-3 hidden items-center gap-3 border-l-2 border-cyan-400/50 pl-3 lg:mt-12 lg:flex lg:pl-4">
                <span className="font-mono text-[10px] tracking-[0.2em] text-cyan-400">
                  NA / ENTERPRISE COMMAND CENTER
                </span>
              </div>
            </div>

           
{/* RIGHT — HOLOGRAPHIC AI CORE */}
<div className="relative col-span-1 flex min-w-0 flex-col items-start justify-start pt-2 lg:block lg:py-4">
  <div className="relative w-full">

    {/* Animated JARVIS hologram */}
    <div className="relative z-10">
      <HolographicEffects />
      <AICore />
    </div>

    {/* HUD — desktop only in this position */}
    <div className="relative z-20 mx-auto mt-1 hidden w-full max-w-[520px] rounded-2xl border border-cyan-400/10 bg-[#06101C]/70 p-3 shadow-[0_0_45px_rgba(34,211,238,0.04)] backdrop-blur-xl lg:-mt-6 lg:block">
      <HolographicHUD />
    </div>

  </div>
</div>

{/* MOBILE — COMPACT TWO-COLUMN ACTIONS */}
<div className="col-span-2 grid min-w-0 grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start gap-3 lg:hidden">
  <div className="min-w-0 space-y-5 pt-1">
    <p className="flex items-start gap-2 text-[11px] leading-5 font-medium text-emerald-400">
      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
      <span>Open to Full-Time Opportunities &amp; Freelance Projects</span>
    </p>
    <div className="border-l-2 border-cyan-400/60 pl-3 font-mono text-[10px] leading-5 tracking-[0.12em] text-cyan-400">
      NA / ENTERPRISE COMMAND CENTER
    </div>
  </div>
  <div className="flex min-w-0 flex-col items-stretch gap-2">
    <a href="#projects" className="flex min-h-10 items-center justify-center rounded-full bg-cyan-500 px-2 py-2 text-center text-[11px] font-semibold leading-tight text-[#06101C] transition hover:bg-cyan-300">
      View Projects →
    </a>
    <a href="#contact" className="flex min-h-10 items-center justify-center rounded-full border border-cyan-400/30 px-2 py-2 text-center text-[11px] font-semibold leading-tight text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/10">
      Hire Me / Let&apos;s Talk
    </a>
    <a href="/Nadeem_Ansari_Oracle_APEX_Developer.pdf" download="Nadeem_Ansari_Resume.pdf" className="flex min-h-10 items-center justify-center gap-1 rounded-full border border-slate-500/50 px-2 py-2 text-center text-[11px] font-semibold leading-tight text-white transition hover:border-cyan-300 hover:bg-cyan-400/10">
      <span aria-hidden="true">↓</span> Download Resume
    </a>
  </div>
</div>

{/* FULL-WIDTH HUD — MOBILE ONLY */}
<div className="relative z-20 col-span-2 mt-0 min-w-0 rounded-2xl border border-cyan-400/10 bg-[#06101C]/70 p-3 shadow-[0_0_45px_rgba(34,211,238,0.04)] backdrop-blur-xl lg:hidden">
  <HolographicHUD />
</div>
</div> {/* END HERO GRID */}

          {/* SYSTEM STATUS HUD */}
          <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-14 sm:gap-4">

            {[
              {
                label: "SYSTEM STATUS",
                value: "ONLINE",
                color: "text-emerald-400",
              },
              {
                label: "SPECIALIZATION",
                value: "ORACLE APEX",
                color: "text-cyan-300",
              },
              {
                label: "OPERATION MODE",
                value: "REMOTE CONSULTING",
                color: "text-blue-300",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="group relative min-w-0 overflow-hidden rounded-xl border border-cyan-400/20 bg-cyan-400/[0.04] px-2 py-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-400/[0.08] sm:px-6 sm:py-5"
              >
                <div className="absolute left-0 top-0 h-5 w-5 border-l border-t border-cyan-400/60" />
                <div className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-cyan-400/60" />

                <p className="mb-2 font-mono text-[8px] tracking-normal text-slate-500 sm:mb-3 sm:text-[10px] sm:tracking-[0.2em]">
                  <span className="sm:hidden">{item.label === "SYSTEM STATUS" ? "STATUS" : item.label === "SPECIALIZATION" ? "SPECIALTY" : "MODE"}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </p>

                <div className="flex min-w-0 items-center gap-1 sm:gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-30" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                  </span>

                  <span className={`min-w-0 font-mono text-[10px] font-bold tracking-normal sm:text-sm sm:tracking-wider ${item.color}`}>
                    <span className="sm:hidden">{item.label === "SPECIALIZATION" ? "APEX" : item.label === "OPERATION MODE" ? "REMOTE" : item.value}</span>
                    <span className="hidden sm:inline">{item.value}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-24 border-t border-cyan-400/10 bg-white/[0.02] px-4 py-8 sm:px-6 lg:px-8 xl:px-10 md:py-24"
      >
        <div className="mx-auto grid max-w-[1600px] gap-5 md:grid-cols-2 md:gap-12">
          <div>
            <p className="mb-4 font-mono text-xs font-bold tracking-[0.2em] text-cyan-400">
              // ABOUT ME
            </p>

            <h2 className="text-2xl font-bold leading-tight sm:text-4xl">
              Business understanding meets technical execution.
            </h2>
          </div>

          <p className="text-base leading-7 text-slate-400 md:text-lg md:leading-9">
            I am an India-based enterprise application professional with
            experience in Oracle technologies, CRM applications, SQL reporting,
            requirements analysis, and application support. I focus on
            understanding business needs and delivering practical,
            maintainable solutions.
          </p>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section
        id="experience"
        className="scroll-mt-24 border-t border-cyan-400/10 px-4 py-8 sm:px-6 lg:px-8 xl:px-10 md:py-24"
      >
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-4 font-mono text-xs font-bold tracking-[0.2em] text-cyan-400">
            // CAREER TIMELINE
          </p>

          <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
            Professional Experience
          </h2>

          <p className="mb-6 max-w-2xl leading-7 text-slate-400 md:mb-12">
            Combining enterprise technology knowledge, client engagement,
            and business consulting to deliver practical solutions.
          </p>

          <div className="grid grid-cols-2 items-stretch gap-3 md:block md:space-y-6 md:border-l-2 md:border-cyan-400/20 md:pl-10">

            <article className="relative min-w-0 rounded-2xl border border-cyan-400/20 bg-[#0C1625] p-3 transition hover:border-cyan-400/50 sm:p-4 md:rounded-3xl md:p-8">
              <span className="absolute -left-[49px] top-9 hidden h-3 w-3 rounded-full border-2 border-cyan-300 bg-[#060B16] md:block" />

              <p className="mb-2 font-mono text-[9px] leading-4 tracking-wide text-cyan-400 sm:text-xs md:mb-3 md:tracking-widest">
                JAN 2025 — PRESENT
              </p>

              <h3 className="text-sm font-bold leading-5 text-white sm:text-base md:text-xl">
                Oracle APEX &amp; PL/SQL Developer
              </h3>

              <p className="mt-2 text-xs font-semibold leading-5 text-cyan-200 sm:text-sm md:text-base">
                TI Infotech Pvt. Ltd.
              </p>

              <p className="mt-3 text-xs leading-5 text-slate-400 sm:text-sm md:mt-5 md:text-base md:leading-7">
                Working on enterprise application solutions, business
                requirements gathering, product demonstrations, functional
                documentation, and client consulting.
              </p>
            </article>

            <article className="relative min-w-0 rounded-2xl border border-cyan-400/20 bg-[#0C1625] p-3 transition hover:border-cyan-400/50 sm:p-4 md:rounded-3xl md:p-8">
              <span className="absolute -left-[49px] top-9 hidden h-3 w-3 rounded-full border-2 border-cyan-300 bg-[#060B16] md:block" />

              <p className="mb-2 font-mono text-[9px] leading-4 tracking-wide text-cyan-400 sm:text-xs md:mb-3 md:tracking-widest">
                AUG 2022 — JAN 2025
              </p>

              <h3 className="text-sm font-bold leading-5 text-white sm:text-base md:text-xl">
                Oracle APEX &amp; PL/SQL Developer
              </h3>

              <p className="mt-2 text-xs font-semibold leading-5 text-cyan-200 sm:text-sm md:text-base">
                Cognizant Technology Solutions
              </p>

              <p className="mt-3 text-xs leading-5 text-slate-400 sm:text-sm md:mt-5 md:text-base md:leading-7">
                Supported enterprise technology solutions through client
                engagement, requirements analysis, functional documentation,
                solution support, and customer success activities.
              </p>
            </article>

          </div>
        </div>
      </section>
      {/* EXPERTISE */}
      <section id="expertise" className="scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8 xl:px-10 md:py-24">
        <div className="mx-auto max-w-[1600px]">

          <p className="mb-4 font-mono text-xs font-bold tracking-[0.2em] text-cyan-400">
            // WHAT I DO
          </p>

          <h2 className="mb-6 text-3xl font-bold md:mb-12 md:text-4xl">
            Core Expertise
          </h2>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {expertise.map((skill) => (
              <div
                key={skill.number}
                className="group relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-[#0C1625] p-3 sm:p-5 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.06)]"
              >
                <p className="mb-3 font-mono text-[10px] tracking-wider text-cyan-400/60 md:mb-7 md:text-xs md:tracking-widest">
                  MODULE_{skill.number}
                </p>

                <div className="mb-3 h-1 w-8 rounded-full bg-cyan-400 md:mb-6 md:w-12" />

                <h3 className="mb-2 break-words text-sm font-bold leading-snug sm:text-base md:mb-4 md:text-xl">
                  {skill.title}
                </h3>

                <p className="break-words text-[11px] leading-5 text-slate-400 sm:text-sm md:text-base md:leading-7">
                  {skill.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="scroll-mt-24 border-t border-cyan-400/10 bg-white/[0.02] px-4 py-8 sm:px-6 lg:px-8 xl:px-10 md:py-24"
      >
        <div className="mx-auto max-w-[1600px]">

          <p className="mb-4 font-mono text-xs font-bold tracking-[0.2em] text-cyan-400">
            // SELECTED WORK
          </p>

          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Featured Projects
          </h2>

          <p className="mb-5 max-w-2xl text-sm leading-6 text-slate-400 md:mb-12 md:text-base">
            A selection of Oracle APEX applications and enterprise solutions.
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-7">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group min-w-0 overflow-hidden rounded-xl md:rounded-3xl border border-cyan-400/10 bg-[#101827] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.07)]"
              >

                {/* Actual project screenshot */}
                <div className="relative aspect-video overflow-hidden border-b border-cyan-400/20 bg-[#081625]">

                  <img
                    src={project.image}
                    alt={`${project.name} project screenshot`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06101C]/65 via-transparent to-transparent" />

                  <span className="absolute bottom-2 left-2 rounded-full md:bottom-5 md:left-6 border border-cyan-400/30 bg-[#06101C]/80 px-2 py-1 font-mono text-[8px] tracking-wide md:px-3 md:py-1.5 md:text-[10px] md:tracking-widest text-cyan-200 backdrop-blur-md">
                    PROJECT_{project.number}
                  </span>

                </div>
                <div className="min-w-0 p-3 md:p-8">
                  <p className="mb-2 break-words font-mono text-[8px] font-bold leading-4 tracking-normal text-cyan-400 md:mb-3 md:text-[10px] md:tracking-widest">
                    PROJECT {project.number} · {project.category}
                  </p>

                  <h3 className="mb-2 break-words text-sm font-bold leading-snug md:mb-4 md:text-2xl">
                    {project.name}
                  </h3>

                  <p className="mb-3 line-clamp-3 break-words text-[11px] leading-4 text-slate-400 md:mb-6 md:line-clamp-none md:text-base md:leading-7">
                    {project.description}
                  </p>

                  <div className="hidden flex-wrap gap-2 md:flex">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.04] px-3 py-1.5 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FREELANCE SERVICES */}
      <section
        id="services"
        className="scroll-mt-24 border-t border-cyan-400/10 bg-white/[0.02] px-4 py-8 sm:px-6 lg:px-8 xl:px-10 md:py-24"
      >
        <div className="mx-auto max-w-[1600px]">

          <p className="mb-4 font-mono text-xs font-bold tracking-[0.2em] text-cyan-400">
            // SERVICES / WHAT I CAN BUILD
          </p>

          <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
            Solutions for Your Business
          </h2>

          <p className="mb-12 max-w-2xl leading-8 text-slate-400">
            I help businesses build, customize, and improve Oracle-based
            applications, database solutions, reporting systems, and integrations.
          </p>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-6">

            {[
              {
                number: "01",
                title: "Oracle APEX Application Development",
                description:
                  "Custom business applications, ERP modules, interactive dashboards, forms, reports, and workflow enhancements.",
                tags: ["Oracle APEX", "Dashboards", "Business Apps"],
              },
              {
                number: "02",
                title: "SQL & PL/SQL Development",
                description:
                  "Database procedures, functions, packages, triggers, complex SQL queries, troubleshooting, and performance optimization.",
                tags: ["PL/SQL", "Oracle Database", "SQL"],
              },
              {
                number: "03",
                title: "Enterprise Reporting & BI",
                description:
                  "Operational and management reports using JasperReports, Oracle BI Publisher, interactive reports, and KPI dashboards.",
                tags: ["JasperReports", "BI Publisher", "Reporting"],
              },
              {
                number: "04",
                title: "REST API Integration & Support",
                description:
                  "REST API integration, JSON-based data exchange, application customization, debugging, testing, and technical support.",
                tags: ["REST APIs", "JSON", "Integration"],
              },
            ].map((service) => (
              <article
                key={service.number}
                className="group flex min-w-0 flex-col rounded-2xl border border-cyan-400/10 bg-[#0C1625] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.07)] sm:p-5 md:rounded-3xl md:p-9"
              >
                <p className="mb-3 font-mono text-[10px] tracking-wide text-cyan-400 sm:text-xs md:mb-6 md:tracking-widest">
                  SERVICE_{service.number}
                </p>

                <h3 className="mb-2 break-words text-sm font-bold leading-snug text-white sm:text-lg md:mb-4 md:text-xl">
                  {service.title}
                </h3>

                <p className="mb-3 break-words text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6 md:mb-6 md:text-base md:leading-8">
                  {service.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1 md:mb-8 md:gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-2 py-1 text-[9px] text-cyan-200 sm:text-xs md:px-3 md:py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-cyan-300 transition hover:text-white sm:gap-2 sm:text-base"
                >
                  Discuss Project <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}

          </div>
        </div>
      </section>
      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 border-t border-cyan-400/10 px-4 py-8 sm:px-6 lg:px-8 xl:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-6 text-center md:mb-12">
            <p className="mb-3 font-mono text-[10px] md:mb-5 md:text-xs font-bold tracking-[0.2em] text-cyan-400">
              // LET'S WORK TOGETHER
            </p>

            <h2 className="text-[clamp(1.75rem,7vw,2.25rem)] font-black leading-tight md:text-6xl">
              Have a Project in Mind?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base md:mt-6 md:text-lg md:leading-8">
              Looking for an Oracle APEX developer, PL/SQL expert,
              or help building your next application?
              Share your requirements and let's connect.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-[#101827] p-4 sm:p-6 md:rounded-3xl shadow-[0_0_50px_rgba(34,211,238,0.04)] md:p-10">

            <form
              action="/api/contact"
              method="POST"
              className="space-y-4 md:space-y-6"
              onSubmit={handleInquirySubmit}
            >

              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid gap-4 md:grid-cols-2 md:gap-6">

                <div>
                  <label htmlFor="client-name" className="mb-1.5 block text-xs font-semibold text-slate-200 sm:text-sm md:mb-2">
                    Full Name *
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    name="name"
                    required
                    maxLength={100}
                    autoComplete="name"
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-cyan-400/15 bg-[#080D19] px-3 py-3 text-sm text-white outline-none sm:px-5 sm:py-4 sm:text-base transition focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label htmlFor="client-email" className="mb-1.5 block text-xs font-semibold text-slate-200 sm:text-sm md:mb-2">
                    Email Address *
                  </label>
                  <input
                    id="client-email"
                    type="email"
                    name="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-cyan-400/15 bg-[#080D19] px-3 py-3 text-sm text-white outline-none sm:px-5 sm:py-4 sm:text-base transition focus:border-cyan-400"
                  />
                </div>

              </div>

              <div>
                <label htmlFor="client-service" className="mb-1.5 block text-xs font-semibold text-slate-200 sm:text-sm md:mb-2">
                  Service Required *
                </label>

                <select
                  id="client-service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-cyan-400/15 bg-[#080D19] px-3 py-3 text-sm text-white outline-none sm:px-5 sm:py-4 sm:text-base transition focus:border-cyan-400"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Oracle APEX Development">Oracle APEX Development</option>
                  <option value="SQL & PL/SQL Development">SQL & PL/SQL Development</option>
                  <option value="Enterprise Reporting & BI">Enterprise Reporting & BI</option>
                  <option value="REST API Integration">REST API Integration</option>
                  <option value="React / Next.js Development">React / Next.js Development</option>
                  <option value="Flutter App Development">Flutter App Development</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="client-message" className="mb-1.5 block text-xs font-semibold text-slate-200 sm:text-sm md:mb-2">
                  Project Requirements *
                </label>

                <textarea
                  id="client-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={4}
                  placeholder="Tell me about your project, requirements, timeline, and budget..."
                  className="w-full resize-y rounded-xl border border-cyan-400/15 bg-[#080D19] px-3 py-3 text-sm text-white outline-none sm:px-5 sm:py-4 sm:text-base transition focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                disabled={inquiryStatus === "sending"}
                className="w-full rounded-xl bg-cyan-500 px-5 py-3 text-sm font-bold sm:px-8 sm:py-4 sm:text-base text-[#06101C] transition hover:bg-cyan-300 disabled:cursor-wait disabled:opacity-60"
              >
                {inquiryStatus === "sending"
                  ? "Sending your inquiry..."
                  : "Send Project Inquiry →"}
              </button>

              {inquiryStatus === "success" && (
                <div
                  role="presentation"
                  className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617]/85 p-3 sm:p-5 backdrop-blur-md"
                >
                  <div
                    role="alertdialog"
                    aria-modal="true"
                    aria-labelledby="inquiry-success-title"
                    aria-describedby="inquiry-success-description"
                    className="w-full max-w-md max-h-[calc(100dvh-24px)] overflow-y-auto rounded-2xl border border-cyan-400/40 bg-[#0B1525] px-4 py-5 text-center shadow-[0_0_80px_rgba(34,211,238,0.18)] sm:rounded-3xl sm:p-8"
                  >
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-3xl text-cyan-300 sm:mb-5 sm:h-20 sm:w-20 sm:text-4xl">
                      ✓
                    </div>

                    <p className="mb-2 font-mono text-[10px] tracking-[0.12em] text-cyan-400 sm:mb-3 sm:text-xs sm:tracking-[0.2em]">
                      JARVIS / MESSAGE DELIVERED
                    </p>

                    <h3 id="inquiry-success-title" className="mb-2 text-xl font-black leading-tight text-white sm:mb-4 sm:text-2xl">
                      Inquiry Sent Successfully!
                    </h3>

                    <p id="inquiry-success-description" className="mb-4 text-sm leading-6 text-slate-400 sm:mb-8 sm:text-base sm:leading-7">
                      Thank you for reaching out.
                      I'll get back to you soon.
                    </p>

                    <button
                      type="button"
                      autoFocus
                      onClick={() => setInquiryStatus("idle")}
                      className="w-full rounded-xl bg-cyan-500 px-4 py-3 text-sm font-bold text-[#06101C] transition hover:bg-cyan-300 sm:px-6 sm:py-4 sm:text-base"
                    >
                      OK, GOT IT
                    </button>
                  </div>
                </div>
              )}

              {inquiryStatus === "error" && (
                <p role="alert" className="rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-center text-sm text-red-300">
                  Unable to send your inquiry. Please try again.
                </p>
              )}

              <p className="text-center text-xs text-slate-500">
                Your inquiry will be sent directly to my email.
              </p>

            </form>

          </div>

        </div>
      </section>
      {/* FOOTER */}
      <footer className="border-t border-cyan-400/10 px-4 py-8 sm:px-6 lg:px-8 xl:px-10 text-center text-sm text-slate-500">
        © 2026 Nadeem Ansari. All Rights Reserved.
      </footer>

    </main>
  );
}


