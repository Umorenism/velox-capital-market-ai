
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiArrowRight,
  FiZap,
  FiTrendingUp,
  FiShield,
  FiCpu,
  FiPlayCircle,
  FiMap,
  FiUsers,
  FiTwitter,
  FiMessageSquare,   // Discord replacement
  FiSend,           // Telegram replacement
  FiMail,
  FiLink,
  FiGithub,
} from "react-icons/fi";
import CountUp from "react-countup";
import { useInView as useObserver } from "react-intersection-observer";

import Header from "../components/Header";
import Footer from "../components/Footer";

const HERO_VIDEO = "https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-animation-with-glowing-lines-31026-large.mp4";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* FLOATING NEURAL PARTICLES */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-60"
            initial={{ y: -100, x: Math.random() * window.innerWidth }}
            animate={{ y: window.innerHeight + 100 }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <Header />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover brightness-75">
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 via-transparent to-yellow-900/30" />

        <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2 }}>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter bg-gradient-to-r from-teal-400 via-cyan-300 to-yellow-400 bg-clip-text text-white ">
              VELOX
            </h1>
            <p className="text-4xl md:text-6xl font-bold mt-4 text-white">
              CAPITAL MARKET <span className="text-teal-400">AI</span>
            </p>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mt-8 max-w-4xl mx-auto font-light tracking-wide">
            The world's fastest AI trading engine — predicting gold, Bitcoin, and silver moves in real time.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-12 flex flex-wrap justify-center gap-8 text-lg">
            {[
              { label: "24h Volume", value: 487, suffix: "M" },
              { label: "Users Live", value: 89000, suffix: "+" },
              { label: "Alpha Generated", value: 41.8, suffix: "%" },
              { label: "Uptime", value: 99.999, suffix: "%" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-teal-400">
                  <CountUp end={stat.value} duration={3} separator="," decimals={stat.value % 1 !== 0 ? 1 : 0} />
                  {stat.suffix}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }}
            className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 bg-gradient-to-r from-teal-500 to-cyan-400 text-black text-xl font-bold rounded-full shadow-2xl overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Start Trading Live <FiArrowRight className="group-hover:translate-x-2 transition" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition duration-300" />
            </motion.a>

            <motion.a href="#" whileHover={{ scale: 1.05 }}
              className="px-12 py-6 border-2 border-teal-400/70 text-teal-300 rounded-full text-xl font-medium backdrop-blur-md flex items-center gap-3">
              <FiPlayCircle /> Watch AI Demo
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <FiTrendingUp size={40} className="text-teal-400" />
        </motion.div>
      </section>

      {/* Trusted By Marquee */}
      <section className="py-16 bg-black/80 backdrop-blur-xl border-y border-teal-900/50">
        <div className="overflow-hidden">
          <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-16 items-center text-4xl font-bold text-gray-600">
            {["Bloomberg", "Forbes", "CNBC", "Financial Times", "Reuters", "TechCrunch", "Barron’s", "The Block"]
              .concat(["Bloomberg", "Forbes", "CNBC", "Financial Times"])
              .map((name, i) => (<span key={i}>{name}</span>))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="text-6xl md:text-8xl font-black text-center bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-white">
            Trade Like the Future
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10 mt-20">
            {[
              { icon: <FiZap className="text-6xl" />, title: "Zero Latency Execution", desc: "Sub-1ms order routing via 7 global data centers", gradient: "from-teal-500 to-cyan-400" },
              { icon: <FiCpu className="text-6xl" />, title: "Neural Alpha Engine", desc: "Deep learning models outperform 97% of hedge funds", gradient: "from-yellow-500 to-amber-400" },
              { icon: <FiShield className="text-6xl" />, title: "Bank-Grade Security", desc: "Cold wallet storage • MPC • Biometric 2FA", gradient: "from-teal-600 to-emerald-400" },
            ].map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} whileHover={{ y: -20 }}>
                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-teal-500/30 rounded-3xl p-10 shadow-2xl transition-all duration-500 hover:shadow-teal-500/50">
                  <div className={`inline-block p-5 rounded-2xl bg-gradient-to-br ${feature.gradient} text-black mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 text-lg">{feature.desc}</p>
                  <div className="mt-8 text-teal-400 font-medium flex items-center gap-2">
                    Learn more <FiArrowRight className="group-hover:translate-x-3 transition" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Performance */}
      <section className="py-32 bg-gradient-to-b from-black via-teal-950/20 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-black mb-16 bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-white">
            +41.8% Alpha in 2025 (Live)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["XAU/USD", "BTC/USD", "XAG/USD", "ETH/USD"].map((pair) => (
              <div key={pair} className="bg-white/5 backdrop-blur-xl border border-teal-500/30 rounded-2xl p-8">
                <p className="text-3xl font-bold text-teal-400">{pair}</p>
                <p className="text-5xl font-black mt-4 text-green-400">↑ 6.4%</p>
                <p className="text-sm text-gray-400 mt-2">Past 30 days</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONE MAP */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-6xl md:text-8xl font-black text-center mb-20 bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-white">
            Our Journey <FiMap className="inline ml-4" />
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500 to-yellow-500 hidden md:block" />
            {[
              { year: "2023 Q4", title: "Velox Founded", desc: "AI research lab launched in Singapore", side: "left" },
              { year: "2024 Q2", title: "Alpha Engine v1", desc: "First model beats 92% of quant funds", side: "right" },
              { year: "2024 Q4", title: "Mainnet Launch", desc: "Live trading with $50M AUM", side: "left" },
              { year: "2025 Q1", title: "Partnerships", desc: "Binance Cloud & Goldman Sachs Prime", side: "right" },
              { year: "2025 Q3", title: "10,000+ Traders", desc: "Global expansion & mobile apps", side: "left" },
              { year: "2025 Q4", title: "IPO Roadmap", desc: "Series C at $3B valuation", side: "right", upcoming: true },
            ].map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
                className={`flex justify-center items-center mb-20 relative ${m.side === "left" ? "md:flex-row-reverse" : ""}`}>
                <div className={`w-full md:w-5/12 ${m.side === "left" ? "text-right pr-12" : "pl-12"}`}>
                  <div className={`p-8 rounded-3xl border ${m.upcoming ? "border-gray-700 bg-white/5" : "border-teal-500/50 bg-white/10"} backdrop-blur-xl`}>
                    <p className={`text-2xl font-bold ${m.upcoming ? "text-gray-500" : "text-teal-400"}`}>{m.year}</p>
                    <h3 className="text-4xl font-black mt-2">{m.title}</h3>
                    <p className="text-gray-400 mt-4 text-lg">{m.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-teal-400 rounded-full border-4 border-black shadow-lg shadow-teal-500/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN COMMUNITY */}
      <section className="py-32 bg-gradient-to-b from-black via-teal-950/30 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-white">
            Join the Movement
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
            120,000+ traders, quants, and crypto natives already in.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Discord", icon: <FiMessageSquare size={48} />, members: 85420, color: "from-indigo-500 to-purple-600", link: "https://discord.gg/velox" },
              { name: "Telegram", icon: <FiSend size={48} />, members: 62300, color: "from-cyan-500 to-blue-600", link: "https://t.me/veloxcapital" },
              { name: "X / Twitter", icon: <FiTwitter size={48} />, members: 187000, color: "from-gray-200 to-gray-500", link: "https://twitter.com/veloxcapital" },
            ].map((comm) => (
              <motion.a key={comm.name} href={comm.link} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -10 }} className="group relative bg-white/5 backdrop-blur-xl border border-teal-500/30 rounded-3xl p-10 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${comm.color} opacity-0 group-hover:opacity-20 transition`} />
                <div className="relative z-10">
                  <div className={`inline-block p-6 rounded-2xl bg-gradient-to-br ${comm.color} text-black mb-6`}>
                    {comm.icon}
                  </div>
                  <h3 className="text-3xl font-bold">{comm.name}</h3>
                  <p className="text-5xl font-black text-teal-400 mt-4">
                    <CountUp end={comm.members} duration={2.5} separator="," />+
                  </p>
                  <p className="text-gray-400 mt-2">Members</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

            
      {/* OUR SERVICES – EDUCATION + CASHBACK (Replaces the old Team section) */}
      
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-teal-400 via-cyan-300 to-yellow-400 bg-clip-text text-white">
              Our Services
            </h2>
            <p className="text-2xl text-gray-300 mt-8 max-w-4xl mx-auto">
              Financial education combined with real AI-powered trading – you learn, we trade, you earn cashback.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left – Education Focus */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-10"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-teal-500/30 rounded-3xl p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                  <FiTrendingUp size={40} className="text-black" />
                </div>
                <h3 className="text-4xl font-black mb-4">World-Class Education</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Just like CashFX, we believe knowledge is power. Get access to live mentorship, 
                  step-by-step courses, daily market analysis, and private mastermind sessions – 
                  everything you need to become a confident trader.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-teal-500/30 rounded-3xl p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-400 rounded-2xl flex items-center justify-center mb-6">
                  <FiCpu size={40} className="text-black" />
                </div>
                <h3 className="text-4xl font-black mb-4">Proprietary AI Bots</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Our in-house neural alpha engine trades Gold, Bitcoin, Silver & major forex pairs 
                  24/7 with institutional-grade precision. No emotions. No mistakes. Pure data-driven profit.
                </p>
              </div>
            </motion.div>

            {/* Right – Cashback Model */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-teal-900/40 via-cyan-900/30 to-yellow-900/20 backdrop-blur-2xl border border-teal-500/50 rounded-3xl p-12 shadow-2xl">
                <div className="text-center mb-10">
                  <h3 className="text-5xl font-black bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-white">
                    Passive Cashback Rewards
                  </h3>
                  <p className="text-7xl font-black text-teal-400 mt-6">
                    Up to <span className="text-yellow-400">70%</span>
                  </p>
                  <p className="text-2xl text-gray-300 mt-2">of trading profits paid back weekly</p>
                </div>

                <ul className="space-y-6 text-xl text-gray-200">
                  {[
                    "No personal trading required",
                    "Weekly cashback in USDT or fiat",
                    "Fully transparent performance dashboard",
                    "Capital always under your control",
                    "Zero lock-up periods – withdraw anytime",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-3 h-3 bg-teal-400 rounded-full flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-12 w-full block text-center py-6 bg-gradient-to-r from-teal-500 to-cyan-400 text-black text-xl font-bold rounded-2xl shadow-xl"
                >
                  Start Earning Cashback Today
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CAREERS */}
      <section className="py-32 bg-gradient-to-r from-teal-900/20 via-cyan-900/20 to-yellow-900/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-12 bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-white">
            We Are Hiring
          </h2>
          <p className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto">
            Join the fastest-growing AI trading firm on the planet. Remote-first • Equity • Unlimited PTO
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Senior ML Engineer", desc: "Build the next-gen alpha engine", location: "Remote", tags: ["PyTorch", "LLMs", "$300K+"] },
              { title: "Quantitative Trader", desc: "Design signals for BTC & Gold", location: "Singapore / NYC", tags: ["HFT", "C++", "7-figures"] },
              { title: "Full-Stack Engineer", desc: "Next.js + Rust + Web3", location: "Remote", tags: ["React", "WebSockets", "Equity"] },
            ].map((job, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white/5 backdrop-blur-xl border border-teal-500/40 rounded-3xl p-10 text-left">
                <h3 className="text-3xl font-bold text-teal-400">{job.title}</h3>
                <p className="text-xl text-gray-300 mt-4">{job.desc}</p>
                <p className="text-gray-500 mt-6">{job.location}</p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {job.tags.map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm font-medium">{tag}</span>
                  ))}
                </div>
                <a href="#" className="mt-8 inline-flex items-center text-teal-400 font-bold text-lg">
                  Apply Now <FiArrowRight className="ml-2 group-hover:translate-x-2 transition" />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.a href="#" whileHover={{ scale: 1.1 }}
            className="mt-16 inline-block px-16 py-6 bg-gradient-to-r from-teal-500 to-cyan-400 text-black text-2xl font-bold rounded-full shadow-2xl">
            See All Open Roles
          </motion.a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-cyan-600/20 to-yellow-600/20 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.h2 initial={{ scale: 0.9 }} whileInView={{ scale: 1 }}
            className="text-6xl md:text-8xl font-black mb-8">
            Ready to Trade at <span className="text-teal-400">Light Speed?</span>
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
              className="px-16 py-8 bg-gradient-to-r from-teal-500 to-cyan-400 text-black text-2xl font-bold rounded-full shadow-2xl">
              Open Live Account — Free
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }}
              className="px-16 py-8 border-4 border-teal-400 text-teal-400 text-2xl font-bold rounded-full backdrop-blur-md">
              Schedule Demo Call
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}