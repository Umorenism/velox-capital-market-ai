import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen, FiTrendingUp, FiStar, FiChevronRight } from "react-icons/fi";

// Fin-Edu Page - Robotics-themed fintech UI
// Usage: import FinEduPage from './FinEduPage';
// Dependencies: framer-motion, react-icons, tailwindcss

export default function FinEduPage() {
  const packages = [
    {
      id: 1,
      title: "Starter - Forex Basics",
      price: "$49",
      bullets: [
        "Fundamental forex concepts",
        "Reading charts & candles",
        "Risk management basics",
      ],
      badge: "Popular",
    },
    {
      id: 2,
      title: "Pro Trader",
      price: "$199",
      bullets: ["Strategy building", "Backtesting workflow", "Live demo sessions"],
      badge: "Best Value",
    },
    {
      id: 3,
      title: "Institutional",
      price: "$499",
      bullets: ["Algo trading intro", "Portfolio allocation", "1:1 mentoring"],
      badge: "Premium",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-slate-100 p-4 sm:p-8">
      {/* Top bar */}
      {/* <header className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-300 flex items-center justify-center shadow-lg">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12h18" stroke="#062C33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 3v18" stroke="#062C33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div className="text-lg font-semibold">Fin‑Edu</div>
            <div className="text-xs text-slate-400">Educational packages for Forex trading</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 rounded-full bg-slate-800/60 hover:bg-slate-700/60 text-sm">Overview</button>
          <button className="px-4 py-2 rounded-full bg-transparent border border-slate-700 text-sm">Curriculum</button>
          <button className="px-4 py-2 rounded-full bg-teal-500 text-slate-900 font-semibold">Get Started</button>
        </nav>
        <div className="md:hidden">
          <button className="p-2 rounded-full bg-slate-800/50">Menu</button>
        </div>
      </header> */}

      {/* Hero */}
      <main className="max-w-7xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <section className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 bg-slate-800/40 backdrop-blur-md border border-slate-700/40 shadow-xl"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">Learn Forex Trading with a Robotic Edge</h1>
                <p className="mt-3 text-slate-300 max-w-xl">Hands-on courses, automated strategy frameworks, and live mentoring to move you from beginner to confident trader.</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-300 text-slate-900 font-semibold shadow hover:scale-[1.02] transition-transform" href="#packages">
                    View Packages <FiChevronRight className="ml-1" />
                  </a>
                  <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-600 text-sm text-slate-200" href="#curriculum">
                    See Curriculum
                  </a>
                </div>
              </div>

              {/* Robot card / illustration */}
              <motion.div
                initial={{ scale: 0.95, rotate: -6 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 90, damping: 12 }}
                className="w-full md:w-64 p-4 bg-gradient-to-b from-slate-900/60 to-slate-800/40 rounded-xl border border-slate-700/40 shadow-inner"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-16 w-16 rounded-lg bg-black/40 flex items-center justify-center">
                    {/* simple robot face */}
                    <svg viewBox="0 0 64 64" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                      <rect x="8" y="12" width="48" height="40" rx="8" fill="#0f1724" stroke="#06b6d4" strokeWidth="1.5" />
                      <circle cx="24" cy="30" r="3" fill="#06b6d4" />
                      <circle cx="40" cy="30" r="3" fill="#06b6d4" />
                      <rect x="22" y="38" width="20" height="3" rx="1.5" fill="#06b6d4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">RoboTutor</div>
                    <div className="text-xs text-slate-400">Adaptive lessons • Real-time feedback</div>
                  </div>
                </div>

                <div className="mt-4 text-xs text-slate-300">Next live session</div>
                <div className="mt-1 flex items-center justify-between">
                  <div className="text-sm font-medium">Advanced Price Action</div>
                  <div className="text-sm text-slate-400">Dec 15</div>
                </div>

                <div className="mt-4">
                  <div className="w-full bg-slate-700/30 rounded-full h-2 overflow-hidden">
                    <div className="h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-300" style={{ width: "62%" }} />
                  </div>
                  <div className="mt-2 text-xs text-slate-400">Progress: 62%</div>
                </div>
              </motion.div>
            </div>

            {/* Quick stats */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { k: "Courses", v: "24" },
                { k: "Live Sessions", v: "8/mo" },
                { k: "Avg ROI", v: "12%" },
                { k: "Mentors", v: "6" },
              ].map((s) => (
                <div key={s.k} className="p-3 bg-slate-900/20 rounded-lg border border-slate-700/30 text-center">
                  <div className="text-sm text-slate-400">{s.k}</div>
                  <div className="mt-1 font-semibold text-lg">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Curriculum */}
          <section id="curriculum" className="mt-8">
            <motion.h2 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-2xl font-bold">Curriculum highlights</motion.h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <CurriculumCard icon={<FiBookOpen />} title="Foundations" text="Market structure, currency pairs, pip math, and order types." />
              <CurriculumCard icon={<FiTrendingUp />} title="Technical Analysis" text="Trendlines, indicators, swing trading, and confirmation setups." />
              <CurriculumCard icon={<FiStar />} title="Psychology & Risk" text="Emotional control, position sizing, and drawdown handling." />
              <CurriculumCard icon={<FiBookOpen />} title="Automation" text="Intro to algorithmic strategies and backtesting basics." />
            </div>
          </section>
        </section>

        {/* Packages sidebar */}
        <aside className="lg:col-span-1">
          <motion.div id="packages" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-2xl bg-slate-800/30 border border-slate-700/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-400">Choose a plan</div>
                <div className="text-xl font-bold">Subscription Packages</div>
              </div>
              <div className="text-xs text-slate-400">Flexible billing</div>
            </div>

            <div className="mt-4 space-y-3">
              {packages.map((p) => (
                <motion.div whileHover={{ scale: 1.02 }} key={p.id} className="p-3 rounded-xl bg-gradient-to-b from-slate-900/40 to-slate-800/30 border border-slate-700/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-300 font-semibold">{p.title}</div>
                      <div className="text-xs text-slate-400">{p.bullets[0]}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{p.price}</div>
                      <div className="text-xs text-slate-400">/month</div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <a className="text-xs underline text-slate-300" href="#">Learn more</a>
                    <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-teal-500 text-slate-900 font-semibold">Enroll</button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 text-xs text-slate-400">Need enterprise or team pricing? <a href="#" className="underline">Contact us</a></div>
          </motion.div>

          {/* FAQ */}
          <motion.div className="mt-6 p-4 rounded-xl bg-slate-900/20 border border-slate-700/30">
            <div className="text-sm text-slate-300 font-semibold">FAQ</div>
            <details className="mt-3 text-sm text-slate-400"> <summary className="cursor-pointer">What level is this for?</summary> <div className="mt-2">We have beginner → advanced content. Pro plan includes backtesting and algos.</div> </details>
            <details className="mt-3 text-sm text-slate-400"> <summary className="cursor-pointer">Do you provide certificates?</summary> <div className="mt-2">Yes — certificates awarded after final assessment.</div> </details>
          </motion.div>
        </aside>
      </main>

      {/* Footer CTA */}
      <footer className="max-w-7xl mx-auto mt-12 mb-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900/40 to-slate-800/30 border border-slate-700/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-lg font-bold">Ready to trade smarter?</div>
          <div className="text-sm text-slate-400">Join thousands of traders upskilling with Fin‑Edu.</div>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg border border-slate-700 text-sm">Talk to Sales</button>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-300 text-slate-900 font-semibold">Start Learning</button>
        </div>
      </footer>
    </div>
  );
}

function CurriculumCard({ icon, title, text }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="p-4 rounded-xl bg-slate-900/20 border border-slate-700/30">
      <div className="flex items-start gap-3">
        <div className="text-2xl p-2 rounded-md bg-slate-800/40">{icon}</div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-slate-400 mt-1">{text}</div>
        </div>
      </div>
    </motion.div>
  );
}
