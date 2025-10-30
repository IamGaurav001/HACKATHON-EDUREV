
"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

// Soft palette and UI tokens
const colors = {
  bg: "bg-white",
  card: "bg-white backdrop-blur",
  border: "border border-zinc-200/70",
  text: "text-zinc-800",
  subtext: "text-zinc-500",
  primary: "text-[#4F39F9]",
  shadow: "shadow-sm hover:shadow-xl",
};

const navItems = [
  { key: "dashboard", label: "Dashboard", href: "/dashboard", active: true },
  { key: "courses", label: "My Courses", href: "#" },
  { key: "progress", label: "Progress", href: "#" },
  { key: "certs", label: "Certificates", href: "#" },
  { key: "support", label: "Support", href: "#" },
];

const statusCards = [
  { key: "registered", title: "Registered Courses", color: "from-[#4F39F933] to-[#4F39F911]", ring: "ring-[rgba(79,57,249,0.35)]" },
  { key: "pending", title: "Pending RPL Processes", color: "from-[#4F39F933] to-[#4F39F911]", ring: "ring-[rgba(79,57,249,0.35)]" },
  { key: "completed", title: "Completed Courses/Exams", color: "from-[#4F39F933] to-[#4F39F911]", ring: "ring-[rgba(79,57,249,0.35)]" },
  { key: "rejected", title: "Rejected Applications", color: "from-[#4F39F933] to-[#4F39F911]", ring: "ring-[rgba(79,57,249,0.35)]" },
];

export default function StudentDashboard() {
  const [activePanel, setActivePanel] = useState("registered");

  // Mock data (replace with API data when available)
  const data = useMemo(
    () => ({
      registered: {
        count: 5,
        list: [
          { id: 1, name: "Data Structures (RPL)", provider: "NPTEL", start: "Jan 12, 2025" },
          { id: 2, name: "Operating Systems", provider: "Coursera", start: "Feb 03, 2025" },
          { id: 3, name: "Cybersecurity Basics", provider: "Udemy", start: "Mar 10, 2025" },
          { id: 4, name: "Cloud Foundations", provider: "AWS Academy", start: "Mar 22, 2025" },
          { id: 5, name: "Database Management", provider: "Swayam", start: "Apr 01, 2025" },
        ],
      },
      pending: {
        count: 2,
        items: [
          {
            id: "RPL-1024",
            course: "Advanced Networking (RPL)",
            currentStep: 2, // 0..3
            steps: ["Application Submitted", "Document Verification", "Exam", "Result"],
            updated: "Today 09:20 AM",
          },
          {
            id: "RPL-1041",
            course: "Software Engineering (RPL)",
            currentStep: 1,
            steps: ["Application Submitted", "Document Verification", "Exam", "Result"],
            updated: "Yesterday 04:36 PM",
          },
        ],
      },
      completed: {
        count: 3,
        list: [
          { id: 11, name: "Intro to Python", completionDate: "Aug 21, 2024" },
          { id: 12, name: "Linear Algebra", completionDate: "Nov 02, 2024" },
          { id: 13, name: "Web Dev Fundamentals", completionDate: "Dec 15, 2024" },
        ],
      },
      rejected: {
        count: 1,
        list: [
          {
            id: "RPL-0931",
            course: "Project Management (RPL)",
            reason: "Insufficient work experience documentation.",
            date: "Oct 05, 2024",
          },
        ],
      },
      upcoming: [
        { date: "Nov 30, 2024", label: "RPL Exam - Advanced Networking" },
        { date: "Dec 12, 2024", label: "Document Resubmission Deadline" },
        { date: "Jan 05, 2025", label: "Results Publication Window" },
      ],
      recommended: [
        { id: 201, title: "AI for Everyone", provider: "Coursera", level: "Beginner" },
        { id: 202, title: "Ethical Hacking Basics", provider: "Udemy", level: "Intermediate" },
        { id: 203, title: "DevOps Foundations", provider: "edX", level: "Beginner" },
      ],
    }),
    []
  );

  const countByKey = {
    registered: data.registered.count,
    pending: data.pending.count,
    completed: data.completed.count,
    rejected: data.rejected.count,
  };

  return (
    <main className={`min-h-screen ${colors.bg} ${colors.text} overflow-x-hidden`}>      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 md:gap-8 p-4 md:p-6 lg:p-8">
        {/* Main Content */}
        <section className="space-y-6">
          {/* Status Cards */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
            {statusCards.map((c) => (
              <button
                key={c.key}
                onClick={() => setActivePanel(c.key)}
                className={`group relative rounded-2xl ${colors.card} ${colors.border} ${colors.shadow} 
                           ring-1 ${c.ring} p-4 md:p-5 transition 
                           hover:-translate-y-0.5 hover:bg-white/80 dark:hover:bg-zinc-900/80`}
              >
                <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${c.color} blur-2xl`} />
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{c.title}</div>
                    <div className="mt-2 text-3xl font-semibold tracking-tight group-hover:scale-[1.02] transition-transform">
                      {countByKey[c.key] ?? 0}
                    </div>
                  </div>
                  <div className="mt-1 px-2 py-1 rounded-md bg-[#4F39F9] text-white text-xs">View</div>
                </div>
              </button>
            ))}
          </div>

          {/* Panel Switcher */}
          <div className={`rounded-2xl ${colors.card} ${colors.border} ${colors.shadow} p-4 md:p-6`}>
            {activePanel === "registered" && <RegisteredPanel list={data.registered.list} />}
            {activePanel === "pending" && <PendingPanel items={data.pending.items} />}
            {activePanel === "completed" && <CompletedPanel list={data.completed.list} />}
            {activePanel === "rejected" && <RejectedPanel list={data.rejected.list} />}
          </div>

          {/* Recommended Courses */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Recommended Courses</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.recommended.map((r) => (
                <div key={r.id} className={`rounded-xl ${colors.card} ${colors.border} ${colors.shadow} p-4 transition hover:-translate-y-0.5`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-medium">{r.title}</div>
                      <div className={`text-xs ${colors.subtext}`}>{r.provider} • {r.level}</div>
                    </div>
                    <button className="px-3 py-1.5 rounded-md bg-[#4F39F9] text-white text-sm hover:brightness-95 transition">Apply</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right Side Vertical Navigation (like YouTube Studio's right rail) */}
        <aside className="order-first lg:order-none lg:col-start-2 space-y-6">
          {/* Right Navigation */}
          <nav className={`sticky top-4 rounded-2xl ${colors.card} ${colors.border} ${colors.shadow} p-4`}>            
            <ul className="flex lg:flex-col gap-3 lg:gap-2 justify-end">
              {navItems.map((n) => (
                <li key={n.key}>
                  <Link
                    href={n.href}
                    className={`flex items-center justify-between w-full gap-3 px-3 py-2 rounded-lg transition
                               hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 ${n.active ? "bg-zinc-100/70 dark:bg-zinc-800/60" : ""}`}
                  >
                    <span className="text-sm">{n.label}</span>
                    {n.active && (
                      <span className="h-2 w-2 rounded-full bg-[#4F39F9] shadow-[0_0_8px_rgba(79,57,249,0.6)]" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Upcoming Important Dates */}
          <div className={`rounded-2xl ${colors.card} ${colors.border} ${colors.shadow} p-4`}>            
            <h3 className="text-base font-semibold">Upcoming Important Dates</h3>
            <ul className="mt-3 space-y-2">
              {data.upcoming.map((u, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#4F39F9" }} />
                  <div>
                    <div className="text-sm font-medium">{u.label}</div>
                    <div className={`text-xs ${colors.subtext}`}>{u.date}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}

function RegisteredPanel({ list }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Enrolled Courses</h2>
        <span className="text-xs px-2 py-1 rounded-md bg-zinc-100/70 dark:bg-zinc-800/70">{list.length} total</span>
      </div>
      <div className="mt-4 grid md:grid-cols-2 gap-3">
        {list.map((c) => (
          <div key={c.id} className="rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-900/60 p-4 hover:shadow-lg transition">
            <div className="font-medium">{c.name}</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">{c.provider}</div>
            <div className="mt-2 text-xs">Start: {c.start}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PendingPanel({ items }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">RPL Status Tracking</h2>
      {items.map((it) => (
        <div key={it.id} className="rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-900/60 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">{it.course}</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Application ID: {it.id}</div>
            </div>
            <div className="text-xs px-2 py-1 rounded-md bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">Updated: {it.updated}</div>
          </div>

          {/* Timeline */}
          <ol className="mt-4 relative">
            {it.steps.map((step, idx) => {
              const active = idx <= it.currentStep;
              const last = idx === it.steps.length - 1;
              return (
                <li key={step} className="flex items-start gap-3 relative">
                  {/* Connector */}
                  {!last && (
                    <span className={`absolute left-2.5 top-3 h-8 w-px ${active ? "bg-sky-400" : "bg-zinc-300 dark:bg-zinc-700"}`} />
                  )}
                  {/* Dot */}
                  <span className={`mt-1 h-3 w-3 rounded-full ring-4 ${active ? "bg-[#4F39F9] ring-[rgba(79,57,249,0.25)]" : "bg-zinc-400 ring-zinc-200/60"}`} />
                  <div className="pb-4">
                    <div className={`text-sm ${active ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-500 dark:text-zinc-400"}`}>{step}</div>
                    {idx === it.currentStep && (
                      <div className="text-xs" style={{ color: "#4F39F9" }}>In progress…</div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      ))}
    </div>
  );
}

function CompletedPanel({ list }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Completed Courses</h2>
        <span className="text-xs px-2 py-1 rounded-md bg-zinc-100/70 dark:bg-zinc-800/70">{list.length} total</span>
      </div>
      <ul className="mt-4 divide-y divide-zinc-200/70 dark:divide-zinc-800/70">
        {list.map((c) => (
          <li key={c.id} className="py-3 flex items-center justify-between">
            <div>
              <div className="font-medium">{c.name}</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Completed on {c.completionDate}</div>
            </div>
            {/* No download certificate option as requested */}
          </li>
        ))}
      </ul>
    </div>
  );
}

function RejectedPanel({ list }) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Rejected Applications</h2>
      {list.map((r) => (
        <div key={r.id} className="rounded-xl border border-rose-200/60 dark:border-rose-900/40 bg-rose-50/60 dark:bg-rose-900/20 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">{r.course}</div>
              <div className="text-xs text-zinc-600 dark:text-zinc-300">Application ID: {r.id}</div>
            </div>
            <span className="text-xs px-2 py-1 rounded-md bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-200">{r.date}</span>
          </div>
          <div className="mt-2 text-sm"><span className="font-medium">Reason:</span> {r.reason}</div>
        </div>
      ))}
    </div>
  );
}
