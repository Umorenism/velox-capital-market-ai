// src/pages/RiskManagement.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FiShield, FiLock, FiEye, FiAlertTriangle, FiCheckCircle, FiTrendingDown, FiCpu } from "react-icons/fi";

export default function RiskManagement() {
  const [protectedCapital, setProtectedCapital] = useState(4872);

  useEffect(() => {
    const interval = setInterval(() => {
      setProtectedCapital(prev => prev + Math.floor(Math.random() * 87));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* EPIC SPARKLING + SHIELD-THEMED BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {/* Deep protective gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-black to-teal-950" />

        {/* Animated Shield Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/60 blur-sm"
            initial={{ 
              y: -150,
              x: Math.random() * window.innerWidth,
              opacity: 0
            }}
            animate={{ 
              y: window.innerHeight + 150,
              opacity: [0, 0.8, 1, 0.8, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 25,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 12,
            }}
          />
        ))}

        {/* Glowing Shield Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`shield-${i}`}
            className="absolute w-80 h-80 md:w-96 md:h-96 bg-gradient-to-r from-emerald-500/20 via-teal-600/10 to-cyan-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 18 + i * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${15 + i * 18}%`,
              top: `${10 + i * 22}%`,
            }}
          />
        ))}
      </div>

      {/* Hero */}
      <section className="relative pt-5 pb-24 px-6 md:pt-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-emerald-900/40 border border-emerald-700/70 backdrop-blur-2xl mb-10">
              <FiShield className="text-emerald-400 text-3xl" />
              <span className="text-emerald-300 font-bold text-lg tracking-wider">ENTERPRISE RISK SHIELD</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-white">
                Your Capital
              </span>
              <br />
              <span className="text-white">Is Protected</span>
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-white">
                Like Never Before
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mt-10 max-w-5xl mx-auto font-light leading-relaxed">
              Real-time drawdown control • AI-powered circuit breakers • 100% segregated funds • Quantum-grade encryption
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-7 text-2xl font-bold rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/70 transition-all"
              >
                View Risk Dashboard
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Protected Capital */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative bg-black/80 backdrop-blur-3xl rounded-3xl border-2 border-emerald-700/60 overflow-hidden shadow-2xl shadow-emerald-600/40"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-transparent to-teal-600/10" />
            <div className="relative z-10 p-12 md:p-20 text-center">
              <div className="flex items-center justify-center gap-6 mb-8">
                <FiLock className="text-6xl text-emerald-400 animate-pulse" />
                <h2 className="text-5xl md:text-7xl font-black">Capital Under Protection</h2>
              </div>

              <motion.div
                key={protectedCapital}
                initial={{ scale: 1.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="text-8xl md:text-[180px] font-black bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-white leading-none"
              >
                ${protectedCapital.toLocaleString()}
                <span className="text-5xl md:text-9xl">M+</span>
              </motion.div>

              <p className="text-2xl text-gray-300 mt-6 font-light">
                Fully segregated • Insured • Monitored 24/7 by AI
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Risk Metrics */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: FiTrendingDown, value: 0.41, label: "Max Drawdown (30d)", suffix: "%", color: "emerald" },
            { icon: FiEye, value: 100, label: "Risk Checks/sec", color: "teal" },
            { icon: FiCheckCircle, value: 0, label: "Security Breaches", suffix: " Ever", color: "cyan" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex p-8 rounded-full bg-gradient-to-br from-gray-900/80 to-black border border-emerald-800/50 mb-8 backdrop-blur-xl">
                <item.icon className={`text-7xl text-${item.color}-400`} />
              </div>
              <p className="text-7xl md:text-8xl font-black text-white">
                {item.value === 0 ? "0" : <CountUp end={item.value} duration={3} decimals={item.value % 1 !== 0 ? 2 : 0} />}
                {item.suffix}
              </p>
              <p className="text-xl text-gray-400 mt-4 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Risk Engine Features */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-white"
          >
            Military-Grade Risk Intelligence
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "AI Circuit Breakers", desc: "Auto-pause at 2% drawdown", icon: FiAlertTriangle },
              { title: "Real-time VaR", desc: "99.9% confidence monitoring", icon: FiCpu },
              { title: "Dynamic Leverage Caps", desc: "Adjusts per volatility regime", icon: FiTrendingDown },
              { title: "Cold Wallet Storage", desc: "99.9% of funds offline", icon: FiLock },
              { title: "Quantum Encryption", desc: "Unbreakable key protection", icon: FiShield },
              { title: "24/7 Anomaly Detection", desc: "AI flags unusual behavior", icon: FiEye },
            ].map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-emerald-900/20 via-black/70 to-teal-900/20 border border-emerald-700/50 rounded-3xl p-10 backdrop-blur-2xl hover:border-emerald-500/80 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                <feat.icon className="text-6xl text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black mb-3 text-white">{feat.title}</h3>
                <p className="text-gray-400">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative bg-gradient-to-r from-emerald-900/50 via-teal-900/40 to-emerald-900/50 rounded-3xl border-4 border-emerald-600/70 backdrop-blur-3xl p-20 shadow-2xl shadow-emerald-600/60 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Trade Like a Whale
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-white">
                  Sleep Like a Baby
                </span>
              </h2>
              <p className="text-2xl text-gray-300 mb-12 font-light">
                The only platform where performance and protection live in perfect harmony.
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-20 py-10 text-3xl font-black rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-2xl shadow-emerald-500/70 hover:shadow-emerald-500/90 transition-all"
              >
                Activate Risk Shield
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
}