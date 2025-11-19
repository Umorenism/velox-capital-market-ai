// src/pages/Trade.jsx — FINAL VERSION (Mobile + Desktop Perfect)
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import {
  FiTrendingUp,
  FiTrendingDown,
  FiZap,
  FiActivity,
  FiClock,
  FiArrowUpRight,
  FiArrowDownRight,
  FiPause,
  FiPlay,
  FiCpu,
} from "react-icons/fi";

export default function Trade() {
  const [isEngineRunning, setIsEngineRunning] = useState(true);

  // Updated pairs: BTC, ETH, Gold, Silver, SOL
  const pairs = [
    { symbol: "BTC/USD", price: 93742.18, change: +4.82 },
    { symbol: "ETH/USD", price: 4128.67, change: +6.21 },
    { symbol: "XAU/USD", price: 2684.42, change: +2.19 }, // Gold
    { symbol: "X ALU/USD", price: 32.18, change: -1.44 }, // Silver (XAG/USD)
    { symbol: "SOL/USD", price: 198.44, change: +8.77 },
  ];

  const liveSignals = [
    { pair: "BTC/USD", direction: "LONG", confidence: 94, entry: 93742, target: 95500, time: "12s ago", new: true },
    { pair: "XAU/USD", direction: "LONG", confidence: 91, entry: 2684, target: 2720, time: "38s ago", new: false },
    { pair: "XAG/USD", direction: "SHORT", confidence: 88, entry: 32.18, target: 31.50, time: "1m ago", new: false },
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-40">

      {/* VELOX LIVE Fixed Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-20 left-0 right-0 z-40 bg-black/95 backdrop-blur-3xl border-b border-teal-900/60 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between md:px-6">
          <div className="flex items-center gap-4">
            <motion.div animate={{ rotate: isEngineRunning ? 360 : 0 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
              <FiCpu className="text-2xl text-cyan-400 md:text-3xl" />
            </motion.div>
            <div>
              <h2 className="text-xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-white md:text-2xl">
                VELOX LIVE
              </h2>
              <div className="flex items-center gap-2 text-xs md:text-sm">
                <div className={`w-2.5 h-2.5 rounded-full ${isEngineRunning ? "bg-emerald-400 animate-pulse" : "bg-red-500"}`} />
                <span className="text-gray-300">{isEngineRunning ? "Active" : "Paused"}</span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsEngineRunning(!isEngineRunning)}
                  className="p-1.5 rounded bg-gradient-to-r from-teal-600 to-cyan-600"
                >
                  {isEngineRunning ? <FiPause size={14} /> : <FiPlay size={14} />}
                </motion.button>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-right">
            <div>
              <p className="text-gray-500 text-xs">Live PnL</p>
              <p className="text-2xl font-black text-emerald-400">+$41,829</p>
            </div>
            <div className="w-px h-10 bg-teal-800/60" />
            <div>
              <p className="text-gray-500 text-xs">Win Rate</p>
              <p className="text-2xl font-black text-cyan-400">94.2%</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/60 rounded-full blur-sm"
            initial={{ y: -100 }}
            animate={{ y: "110vh" }}
            transition={{
              duration: 18 + Math.random() * 30,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 12,
            }}
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Ticker Marquee */}
      <div className="mt-44 hidden md:flex border-y border-teal-900/40 backdrop-blur-sm bg-black/60">
        <div className="overflow-hidden py-3">
          <motion.div
            animate={{ x: [0, -2200] }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
            className="flex gap-10 md:gap-20 text-sm md:text-lg font-medium"
          >
            {[...pairs, ...pairs].map((p, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-8 whitespace-nowrap">
                <span className="font-bold text-teal-300">{p.symbol}</span>
                <span className="font-black">
                  ${p.symbol.includes("XAG") ? p.price.toFixed(2) : p.price.toFixed(0)}
                </span>
                <span className={`flex items-center gap-1 font-bold ${p.change > 0 ? "text-emerald-400" : "text-red-400"}`}>
                  {p.change > 0 ? <FiTrendingUp size={16} /> : <FiTrendingDown size={16} />}
                  {p.change > 0 ? "+" : ""}{Math.abs(p.change).toFixed(2)}%
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="flex md:mt-0 mt-20 items-center gap-4 mb-10">
            <FiZap className="text-5xl text-cyan-400 animate-pulse md:text-6xl" />
            <h2 className="text-4xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-white md:text-5xl">
              Live AI Signals
            </h2>
          </motion.div>

          <div className="space-y-10">

            {/* Live Signals */}
            <div className="space-y-6">
              <AnimatePresence>
                {liveSignals.map((signal, i) => (
                  <motion.div
                    key={i}
                    layout
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    {signal.new && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-black text-xs font-black px-4 py-1.5 rounded-full shadow-2xl z-10"
                      >
                        NEW
                      </motion.div>
                    )}

                    <div className="rounded-2xl md:rounded-3xl bg-gradient-to-br from-teal-900/20 via-black/60 to-cyan-900/20 border border-teal-700/50 backdrop-blur-2xl p-6 md:p-8 shadow-xl">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex items-start gap-5">
                          <motion.div
                            whileTap={{ scale: 1.2 }}
                            className={`p-4 rounded-xl border-4 ${signal.direction === "LONG" ? "bg-emerald-600/30 border-emerald-500" : "bg-red-600/30 border-red-500"}`}
                          >
                            {signal.direction === "LONG" ? (
                              <FiArrowUpRight className="text-4xl text-emerald-400" />
                            ) : (
                              <FiArrowDownRight className="text-4xl text-red-400" />
                            )}
                          </motion.div>
                          <div>
                            <p className="text-2xl font-black md:text-4xl">{signal.pair}</p>
                            <p className="text-lg text-gray-300">Entry ${signal.entry.toLocaleString()}</p>
                            <p className="text-sm text-gray-500 mt-1">Target ${signal.target.toLocaleString()}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <motion.div
                            initial={{ scale: 1.4 }}
                            animate={{ scale: 1 }}
                            className="text-6xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-white md:text-8xl"
                          >
                            {signal.confidence}%
                          </motion.div>
                          <p className="text-xs text-gray-400 flex items-center justify-end gap-1 mt-2">
                            <FiClock className="animate-pulse" /> {signal.time}
                          </p>
                        </div>
                      </div>
                      <div className="mt-6 h-3 bg-black/60 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${signal.confidence}%` }}
                          transition={{ duration: 1.8 }}
                          className="h-full bg-gradient-to-r from-teal-500 to-cyan-400"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Market Pulse + Quick Trade */}
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-teal-900/30 to-black border border-teal-600/50 rounded-2xl p-8 backdrop-blur-3xl shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <FiActivity className="text-5xl text-cyan-400 animate-pulse" />
                  <h3 className="text-2xl font-black">Market Pulse</h3>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div><p className="text-gray-400 text-xs">Accuracy</p><p className="text-4xl font-black text-cyan-400">97.8%</p></div>
                  <div><p className="text-gray-400 text-xs">Signals</p><p className="text-4xl font-black text-teal-400">142</p></div>
                  <div><p className="text-gray-400 text-xs">Volume</p><p className="text-3xl font-black text-yellow-400">$4.8B</p></div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-teal-600/25 to-cyan-600/20 border-4 border-teal-500/70 rounded-2xl p-8 backdrop-blur-3xl shadow-2xl">
                <h3 className="text-2xl font-black text-center mb-6">Quick Trade</h3>
                <select className="w-full bg-black/70 border-2 border-teal-600 rounded-xl px-5 py-4 text-lg mb-6">
                  <option>BTC/USD</option>
                  <option>XAU/USD</option>
                  <option>XAG/USD</option>
                </select>
                <div className="grid grid-cols-2 gap-4">
                  <motion.button whileTap={{ scale: 0.95 }} className="py-6 bg-emerald-600/30 border-4 border-emerald-500 text-emerald-400 text-2xl font-black rounded-xl">LONG</motion.button>
                  <motion.button whileTap={{ scale: 0.95 }} className="py-6 bg-red-600/30 border-4 border-red-500 text-red-400 text-2xl font-black rounded-xl">SHORT</motion.button>
                </div>
              </motion.div>
            </div>

            {/* Active Positions */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-teal-400 mb-6">Active Positions</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {["BTC/USD", "XAU/USD", "XAG/USD"].map((pair) => (
                  <motion.div key={pair} whileTap={{ scale: 0.98 }} className="bg-gradient-to-br from-teal-900/20 to-cyan-900/10 backdrop-blur-2xl border border-teal-700/40 rounded-2xl p-6 shadow-xl">
                    <div className="flex justify-between mb-4">
                      <div>
                        <p className="text-2xl font-black">{pair}</p>
                        <p className="text-xl text-emerald-400 font-bold">{pair === "XAG/USD" ? "SHORT × 85" : "LONG × 12.4"}</p>
                      </div>
                      <p className="text-3xl font-black text-emerald-400">+${pair === "XAG/USD" ? "1,294" : "8,421"}</p>
                    </div>
                    <div className="text-sm space-y-2">
                      <div className="flex justify-between"><span className="text-gray-400">Entry</span><span>${pair === "XAG/USD" ? "32.80" : "92,840"}</span></div>
                      <div className="flex justify-between"><span className="text-gray-400">Current</span><span className="text-cyan-400">${pair === "XAG/USD" ? "32.18" : "93,742"}</span></div>
                      <div className="flex justify-between text-emerald-400 text-xl font-bold"><span>ROI</span><span>{pair === "XAG/USD" ? "+4.82%" : "+9.71%"}</span></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* PERFECTLY ALIGNED FLOATING BOTTOM BAR — Works on ALL screens */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-black/98 backdrop-blur-3xl border-t border-teal-900/70 shadow-2xl"
      >
        <div className="max-w-5xl mx-auto px-6 py-7 flex flex-col items-center justify-center gap-8 text-center sm:flex-row sm:gap-16 md:gap-24">
          <div>
            <p className="text-gray-400 text-sm tracking-wider">Traders Live</p>
            <p className="text-4xl font-black text-teal-400 mt-1">
              <CountUp end={89241} duration={3} separator="," />+
            </p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-teal-800/60" />
          <div>
            <p className="text-gray-400 text-sm tracking-wider">24h Alpha</p>
            <p className="text-4xl font-black text-emerald-400 mt-1">+41.8%</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-teal-800/60" />
          <div>
            <p className="text-gray-400 text-sm tracking-wider">Engine Uptime</p>
            <p className="text-4xl font-black text-cyan-400 mt-1">99.999%</p>
          </div>
        </div>
      </motion.div>

      {/* Spacer so content isn't hidden */}
      <div className="h-[150px]" />
    </div>
  );
}