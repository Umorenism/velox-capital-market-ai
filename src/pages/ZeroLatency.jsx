// src/pages/ZeroLatency.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FiZap, FiGlobe, FiServer, FiActivity, FiShield, FiArrowRight, FiCpu } from "react-icons/fi";

export default function ZeroLatency() {
  const [latency, setLatency] = useState(0.47);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => {
        const fluctuation = (Math.random() - 0.5) * 0.08;
        return Math.max(0.31, Math.min(0.68, prev + fluctuation));
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Animated Global Network Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-black to-cyan-950 opacity-80" />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-96 h-96 md:w-[600px] md:h-[600px] bg-gradient-to-r from-cyan-500/20 to-teal-600/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              x: [0, 200, -200, 0],
              y: [0, -200, 200, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transform: "translate(-50%, -50%)" }}
          />
        ))}
      </div>

      {/* Hero */}
      <section className="relative pt-5 pb-24 px-6 md:pt-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-cyan-900/40 border border-cyan-700/70 backdrop-blur-2xl mb-10">
              <FiZap className="text-yellow-400 text-2xl animate-pulse" />
              <span className="text-cyan-300 font-bold text-lg">ZERO LATENCY INFRASTRUCTURE</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-white">
                Execute Before
              </span>
              <br />
              <span className="text-white">The World Even</span>
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-white">
                Blinks
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mt-10 max-w-4xl mx-auto leading-relaxed">
              Sub-millisecond execution • 127+ global PoPs • 400Gbps fiber backbone • AI-routed smart order routing
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-7 text-2xl font-bold rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/70 transition-all flex items-center gap-4 justify-center"
              >
                Deploy in 60 Seconds
                <FiArrowRight className="text-3xl" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Latency Monitor */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative bg-black/80 backdrop-blur-3xl rounded-3xl border-2 border-cyan-700/60 overflow-hidden shadow-2xl shadow-cyan-600/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-transparent to-teal-600/10" />
            <div className="relative z-10 p-12 md:p-20 text-center">
              <div className="flex items-center justify-center gap-6 mb-8">
                <FiActivity className="text-6xl text-cyan-400 animate-pulse" />
                <h2 className="text-5xl md:text-7xl font-black">Live Global Latency</h2>
              </div>

              <motion.div
                key={latency}
                initial={{ scale: 1.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-9xl md:text-[180px] font-black bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-white leading-none"
              >
                {latency.toFixed(2)}<span className="text-6xl md:text-9xl">ms</span>
              </motion.div>

              <p className="text-2xl text-gray-300 mt-6">Average execution latency • Real-time • 127 edge locations</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Network Map Stats */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-black/50 to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: FiGlobe, value: 127, label: "Global Edge Nodes", color: "cyan" },
            { icon: FiServer, value: 99.999, label: "Uptime (30d)", suffix: "%", color: "teal" },
            { icon: FiZap, value: 400, label: "Gbps Backbone", suffix: "Gbps", color: "emerald" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex p-8 rounded-full bg-gradient-to-br from-gray-900/80 to-black border border-cyan-800/50 mb-8">
                <item.icon className={`text-7xl text-${item.color}-400`} />
              </div>
              <p className="text-7xl md:text-8xl font-black text-white">
                <CountUp end={item.value} duration={3} decimals={item.value % 1 !== 0 ? 3 : 0} />
                {item.suffix}
              </p>
              <p className="text-xl text-gray-400 mt-4">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Highlights */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl md:text-7xl font-black text-center mb-20"
          >
            Built on <span className="text-white bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Uncompromising Speed</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Smart Order Routing", desc: "AI predicts fastest path", icon: FiCpu },
              { title: "Colocation", desc: "Servers inside exchanges", icon: FiServer },
              { title: "400G Fiber", desc: "Zero packet loss", icon: FiZap },
              { title: "Quantum-Resistant", desc: "Post-quantum encryption", icon: FiShield },
            ].map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-cyan-900/20 via-black/70 to-teal-900/20 border border-cyan-700/50 rounded-3xl p-10 backdrop-blur-2xl hover:border-cyan-500/80 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                <feat.icon className="text-6xl text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black mb-3">{feat.title}</h3>
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
            className="relative bg-gradient-to-r from-cyan-900/50 via-teal-900/40 to-cyan-900/50 rounded-3xl border-4 border-cyan-600/70 backdrop-blur-3xl p-20 shadow-2xl shadow-cyan-600/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-8">
                No More <span className="text-red-500 line-through">Latency</span>
                <br />
                Only <span className="text-white bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Velox</span>
              </h2>
              <p className="text-2xl text-gray-300 mb-12">
                Join the fastest trading infrastructure on the planet.
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-20 py-10 text-3xl font-black rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 shadow-2xl shadow-cyan-500/70 hover:shadow-cyan-500/90 transition-all"
              >
                Get Zero Latency Access
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
}