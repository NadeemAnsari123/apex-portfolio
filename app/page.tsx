
"use client";

import { useState } from "react";
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
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

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
      <section className="relative overflow-hidden px-6 pb-20 pt-20 md:pb-28 md:pt-28">

        {/* Background glow */}
        <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/[0.07] blur-[130px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-600/[0.06] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* TWO-COLUMN HERO */}
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

            {/* LEFT — INTRODUCTION */}
            <div className="relative z-10">

              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 font-mono text-[10px] font-semibold tracking-[0.14em] text-cyan-300 sm:text-xs">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                ORACLE APEX · ENTERPRISE APPLICATIONS
              </div>

              <h1 className="text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl xl:text-6xl">
                Hi, I'm Nadeem.
                <span className="mt-4 block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  Oracle APEX Developer & Consultant.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                I design and develop business applications using Oracle APEX,
                SQL, reporting, and dashboards—helping organizations streamline
                workflows and improve operational efficiency.
              </p>

              <p className="mt-5 flex items-center gap-2 text-sm font-medium text-emerald-400">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                Open to Full-Time Opportunities & Freelance Projects
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-cyan-500 px-7 py-3.5 font-semibold text-[#06101C] transition hover:bg-cyan-300"
                >
                  View Projects →
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-cyan-400/30 px-7 py-3.5 font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/10"
                >
                  Hire Me / Let's Talk
                </a>

                <a
                  href="/Nadeem_Ansari_Oracle_APEX_Developer.pdf"
                  download="Nadeem_Ansari_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-500/50 px-7 py-3.5 font-semibold text-white transition hover:border-cyan-300 hover:bg-cyan-400/10"
                >
                  <span aria-hidden="true">↓</span>
                  Download Resume
                </a>
              </div>

              <div className="mt-12 flex items-center gap-3 border-l-2 border-cyan-400/50 pl-4">
                <span className="font-mono text-[10px] tracking-[0.2em] text-cyan-400">
                  NA / ENTERPRISE COMMAND CENTER
                </span>
              </div>
            </div>

            {/* RIGHT — HOLOGRAPHIC AI CORE */}
            <div className="relative flex min-w-0 items-center justify-center overflow-hidden py-4">
              <div className="relative w-full">
  <div className="relative z-10">
    <HolographicEffects />
    <AICore />
  </div>

  <div className="relative z-20 mx-auto -mt-3 w-full max-w-[520px] rounded-2xl border border-cyan-400/10 bg-[#06101C]/70 p-3 shadow-[0_0_45px_rgba(34,211,238,0.04)] backdrop-blur-xl sm:-mt-6">
    <HolographicHUD />
  </div>
</div>
            </div>

          </div>

          {/* SYSTEM STATUS HUD */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3">

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
                className="group relative overflow-hidden rounded-xl border border-cyan-400/20 bg-cyan-400/[0.04] px-6 py-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-400/[0.08]"
              >
                <div className="absolute left-0 top-0 h-5 w-5 border-l border-t border-cyan-400/60" />
                <div className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-cyan-400/60" />

                <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-slate-500">
                  {item.label}
                </p>

                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-30" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                  </span>

                  <span className={`font-mono text-sm font-bold tracking-wider ${item.color}`}>
                    {item.value}
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
        className="scroll-mt-24 border-t border-cyan-400/10 bg-white/[0.02] px-6 py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 font-mono text-xs font-bold tracking-[0.2em] text-cyan-400">
              // ABOUT ME
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Business understanding meets technical execution.
            </h2>
          </div>

          <p className="text-lg leading-9 text-slate-400">
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
        className="scroll-mt-24 border-t border-cyan-400/10 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 font-mono text-xs font-bold tracking-[0.2em] text-cyan-400">
            // CAREER TIMELINE
          </p>

          <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
            Professional Experience
          </h2>

          <p className="mb-12 max-w-2xl leading-7 text-slate-400">
            Combining enterprise technology knowledge, client engagement,
            and business consulting to deliver practical solutions.
          </p>

          <div className="relative space-y-6 border-l-2 border-cyan-400/20 pl-7 md:pl-10">

            <article className="relative rounded-3xl border border-cyan-400/20 bg-[#0C1625] p-6 transition hover:border-cyan-400/50 md:p-8">
              <span className="absolute -left-[37px] top-9 h-3 w-3 rounded-full border-2 border-cyan-300 bg-[#060B16] md:-left-[49px]" />

              <p className="mb-3 font-mono text-xs tracking-widest text-cyan-400">
                JAN 2025 — PRESENT
              </p>

              <h3 className="text-xl font-bold text-white">
                Oracle APEX &amp; PL/SQL Developer
              </h3>

              <p className="mt-2 font-semibold text-cyan-200">
                TI Infotech Pvt. Ltd.
              </p>

              <p className="mt-5 leading-7 text-slate-400">
                Working on enterprise application solutions, business
                requirements gathering, product demonstrations, functional
                documentation, and client consulting.
              </p>
            </article>

            <article className="relative rounded-3xl border border-cyan-400/20 bg-[#0C1625] p-6 transition hover:border-cyan-400/50 md:p-8">
              <span className="absolute -left-[37px] top-9 h-3 w-3 rounded-full border-2 border-cyan-300 bg-[#060B16] md:-left-[49px]" />

              <p className="mb-3 font-mono text-xs tracking-widest text-cyan-400">
                AUG 2022 — JAN 2025
              </p>

              <h3 className="text-xl font-bold text-white">
                Oracle APEX &amp; PL/SQL Developer
              </h3>

              <p className="mt-2 font-semibold text-cyan-200">
                Cognizant Technology Solutions
              </p>

              <p className="mt-5 leading-7 text-slate-400">
                Supported enterprise technology solutions through client
                engagement, requirements analysis, functional documentation,
                solution support, and customer success activities.
              </p>
            </article>

          </div>
        </div>
      </section>
      {/* EXPERTISE */}
      <section id="expertise" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <p className="mb-4 font-mono text-xs font-bold tracking-[0.2em] text-cyan-400">
            // WHAT I DO
          </p>

          <h2 className="mb-12 text-4xl font-bold">
            Core Expertise
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {expertise.map((skill) => (
              <div
                key={skill.number}
                className="group relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-[#0C1625] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.06)]"
              >
                <p className="mb-7 font-mono text-xs tracking-widest text-cyan-400/60">
                  MODULE_{skill.number}
                </p>

                <div className="mb-6 h-1 w-12 rounded-full bg-cyan-400" />

                <h3 className="mb-4 text-xl font-bold">
                  {skill.title}
                </h3>

                <p className="leading-7 text-slate-400">
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
        className="scroll-mt-24 border-t border-cyan-400/10 bg-white/[0.02] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">

          <p className="mb-4 font-mono text-xs font-bold tracking-[0.2em] text-cyan-400">
            // SELECTED WORK
          </p>

          <h2 className="mb-5 text-4xl font-bold">
            Featured Projects
          </h2>

          <p className="mb-12 max-w-2xl text-slate-400">
            A selection of Oracle APEX applications and enterprise solutions.
          </p>

          <div className="grid gap-7 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-3xl border border-cyan-400/10 bg-[#101827] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.07)]"
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

                  <span className="absolute bottom-5 left-6 rounded-full border border-cyan-400/30 bg-[#06101C]/80 px-3 py-1.5 font-mono text-[10px] tracking-widest text-cyan-200 backdrop-blur-md">
                    PROJECT_{project.number}
                  </span>

                </div>
                <div className="p-8">
                  <p className="mb-3 font-mono text-[10px] font-bold tracking-widest text-cyan-400">
                    PROJECT {project.number} · {project.category}
                  </p>

                  <h3 className="mb-4 text-2xl font-bold">
                    {project.name}
                  </h3>

                  <p className="mb-6 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
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
        className="scroll-mt-24 border-t border-cyan-400/10 bg-white/[0.02] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">

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

          <div className="grid gap-6 md:grid-cols-2">

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
                className="group rounded-3xl border border-cyan-400/10 bg-[#0C1625] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.07)] md:p-9"
              >
                <p className="mb-6 font-mono text-xs tracking-widest text-cyan-400">
                  SERVICE_{service.number}
                </p>

                <h3 className="mb-4 text-xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mb-6 leading-8 text-slate-400">
                  {service.description}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-xs text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-white"
                >
                  Discuss Project <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}

          </div>
        </div>
      </section>
      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 border-t border-cyan-400/10 px-6 py-28">
        <div className="mx-auto max-w-5xl">

          <div className="mb-12 text-center">
            <p className="mb-5 font-mono text-xs font-bold tracking-[0.2em] text-cyan-400">
              // LET'S WORK TOGETHER
            </p>

            <h2 className="text-4xl font-black md:text-6xl">
              Have a Project in Mind?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Looking for an Oracle APEX developer, PL/SQL expert,
              or help building your next application?
              Share your requirements and let's connect.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-[#101827] p-6 shadow-[0_0_50px_rgba(34,211,238,0.04)] md:p-10">

            <form
              action="/api/contact"
              method="POST"
              className="space-y-6"
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

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label htmlFor="client-name" className="mb-2 block text-sm font-semibold text-slate-200">
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
                    className="w-full rounded-xl border border-cyan-400/15 bg-[#080D19] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label htmlFor="client-email" className="mb-2 block text-sm font-semibold text-slate-200">
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
                    className="w-full rounded-xl border border-cyan-400/15 bg-[#080D19] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                  />
                </div>

              </div>

              <div>
                <label htmlFor="client-service" className="mb-2 block text-sm font-semibold text-slate-200">
                  Service Required *
                </label>

                <select
                  id="client-service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-cyan-400/15 bg-[#080D19] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
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
                <label htmlFor="client-message" className="mb-2 block text-sm font-semibold text-slate-200">
                  Project Requirements *
                </label>

                <textarea
                  id="client-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={6}
                  placeholder="Tell me about your project, requirements, timeline, and budget..."
                  className="w-full resize-y rounded-xl border border-cyan-400/15 bg-[#080D19] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                disabled={inquiryStatus === "sending"}
                className="w-full rounded-xl bg-cyan-500 px-8 py-4 font-bold text-[#06101C] transition hover:bg-cyan-300 disabled:cursor-wait disabled:opacity-60"
              >
                {inquiryStatus === "sending"
                  ? "Sending your inquiry..."
                  : "Send Project Inquiry →"}
              </button>

              {inquiryStatus === "success" && (
                <div
                  role="presentation"
                  className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617]/85 p-5 backdrop-blur-md"
                >
                  <div
                    role="alertdialog"
                    aria-modal="true"
                    aria-labelledby="inquiry-success-title"
                    aria-describedby="inquiry-success-description"
                    className="w-full max-w-md rounded-3xl border border-cyan-400/40 bg-[#0B1525] p-8 text-center shadow-[0_0_80px_rgba(34,211,238,0.18)]"
                  >
                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-4xl text-cyan-300">
                      ✓
                    </div>

                    <p className="mb-3 font-mono text-xs tracking-[0.2em] text-cyan-400">
                      JARVIS / MESSAGE DELIVERED
                    </p>

                    <h3 id="inquiry-success-title" className="mb-4 text-2xl font-black text-white">
                      Inquiry Sent Successfully!
                    </h3>

                    <p id="inquiry-success-description" className="mb-8 leading-7 text-slate-400">
                      Thank you for reaching out.
                      I'll get back to you soon.
                    </p>

                    <button
                      type="button"
                      autoFocus
                      onClick={() => setInquiryStatus("idle")}
                      className="w-full rounded-xl bg-cyan-500 px-6 py-4 font-bold text-[#06101C] transition hover:bg-cyan-300"
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
      <footer className="border-t border-cyan-400/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Nadeem Ansari. Built with Next.js.
      </footer>

    </main>
  );
}





















