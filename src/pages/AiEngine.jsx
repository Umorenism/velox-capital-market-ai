// src/pages/AIEngine.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FiZap, FiCpu, FiTrendingUp, FiShield, FiActivity, FiArrowRight } from "react-icons/fi";

export default function AIEngine() {
  const [accuracy, setAccuracy] = useState(91);

  useEffect(() => {
    const interval = setInterval(() => {
      setAccuracy(prev => {
        const change = Math.random() > 0.5 ? 0.1 : -0.1;
        return Math.min(99.9, Math.max(94.0, prev + change));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-black text-white overflow-hidden relative">

        {/* Animated Grid Background */}
        <div className="fixed inset-0 opacity-20">
          <div  className="absolute grid inset-0" style={{
            backgroundImage: `linear-gradient(teal 1px, transparent 1px), linear-gradient(90deg, teal 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            animation: "gridMoveGrid 20s linear infinite"
          }} />
        </div>

        {/* Floating Orbs */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-teal-500/20 to-cyan-600/10 rounded-full blur-3xl absolute"
              animate={{
                x: [0, 300, 0],
                y: [0, -300, 0],
              }}
              transition={{
                duration: 20 + i * 4,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 20}%`,
              }}
            />
          ))}
        
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 md:pt-44">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-teal-900/40 border border-teal-700/70 backdrop-blur-xl mb-8">
                <FiCpu className="text-yellow-400" />
                <span className="text-teal-300 font-medium">Powered by VELOX AI Alpha Engine v3</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-white">
                  The Most Accurate
                </span>
                <br />
                <span className="text-white">Trading AI</span>
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-white">
                  {" "}on Earth
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-gray-400 mt-8 max-w-4xl mx-auto"
              >
                97.8% win rate • $4.8B+ volume traded • 142 signals today • 41.8% alpha in 24h
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-6 text-xl font-bold rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 shadow-2xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all"
                >
                  Start Trading Live
                  <FiArrowRight className="inline ml-3" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-10 py-6 text-xl font-bold rounded-2xl border-2 border-teal-500/70 backdrop-blur-xl hover:bg-teal-900/30 transition-all"
                >
                  View Live Signals
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Live Accuracy Counter */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-teal-900/30 via-black/80 to-cyan-900/30 rounded-3xl border border-teal-700/60 backdrop-blur-3xl p-12 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/10 to-transparent" />
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <FiCpu className="text-5xl text-cyan-400 animate-pulse" />
                  <h2 className="text-4xl md:text-6xl font-black">Live AI Accuracy</h2>
                </div>
                <motion.div
                  key={accuracy}
                  initial={{ scale: 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-8xl md:text-9xl font-black bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-white"
                >
                  {accuracy.toFixed(1)}%
                </motion.div>
                <p className="text-gray-400 mt-4 text-lg">Updated every 3 seconds • Real-time neural prediction</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-20 px-6 bg-black/60">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FiTrendingUp, label: "24h Alpha Generated", value: 41.8, suffix: "%", color: "emerald" },
              { icon: FiZap, label: "Signals Today", value: 142, color: "cyan" },
              { icon: FiActivity, label: "Total Volume Traded", value: 4.8, suffix: "B", color: "yellow" },
              { icon: FiShield, label: "Win Rate (30d)", value: 97.8, suffix: "%", color: "teal" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-gray-900/80 to-black border border-teal-800/40 rounded-2xl p-8 backdrop-blur-xl text-center hover:border-teal-600/70 transition-all"
              >
                <stat.icon className={`text-5xl mx-auto mb-4 text-${stat.color}-400`} />
                <p className="text-5xl font-black text-white">
                  {stat.value === 41.8 ? "+" : ""}
                  <CountUp end={stat.value} duration={3} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                  {stat.suffix}
                </p>
                <p className="text-gray-400 mt-3">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-r from-teal-900/40 via-cyan-900/30 to-teal-900/40 rounded-3xl border-2 border-teal-600/70 backdrop-blur-2xl p-16 shadow-2xl shadow-teal-600/30"
            >
              <h2 className="text-5xl md:text-7xl font-black mb-8">
                Ready for <span className="text-white bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Real Alpha</span>?
              </h2>
              <p className="text-2xl text-gray-300 mb-12">
                Join 89,241+ traders using VELOX AI to crush the markets.
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-16 py-8 text-3xl font-bold rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all"
              >
                Activate AI Engine Now
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Footer Space */}
        <div className="h-20" />
      </div>

      <style jsx>{`
        @keyframes MoveGrid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </>
  );
}