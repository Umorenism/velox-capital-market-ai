// src/pages/Trade.jsx  (or Markets.jsx)
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FiTrendingUp,
  FiTrendingDown,
  FiZap,
  FiActivity,
  FiBarChart3,
  FiClock,
  FiArrowUpRight,
  FiArrowDownRight,
  FiPause,
  FiPlay,
} from "react-icons/fi";

export default function Trade() {
  const [selectedPair, setSelectedPair] = useState("BTC/USD");
  const [isEngineRunning, setIsEngineRunning] = useState(true);

  const pairs = [
    { symbol: "BTC/USD", price: 93742.18, change: +4.82, volume: "2.4B" },
    { symbol: "ETH/USD", price: 4128.67, change: +6.21, volume: "1.1B" },
    { symbol: "XAU/USD", price: 2684.42, change: +2.19, volume: "890M" },
    { symbol: "SOL/USD", price: 198.44, change: +8.77, volume: "620M" },
  ];

  const liveSignals = [
    { pair: "BTC/USD", direction: "LONG", confidence: 94, entry: 93742, target: 95500, time: "12s ago" },
    { pair: "XAU/USD", direction: "SHORT", confidence: 89, entry: 2684, target: 2650, time: "45s ago" },
    { pair: "ETH/USD", direction: "LONG", confidence: 91, entry: 4128, target: 4280, time: "1m ago" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-60"
            initial={{ y: -100 }}
            animate={{ y: "100vh" }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Header Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-teal-900/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              VELOX LIVE
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${isEngineRunning ? "bg-green-400 animate-pulse" : "bg-red-500"}`} />
                <span className="text-sm font-medium">{isEngineRunning ? "AI Engine Active" : "Paused"}</span>
              </div>
              <button
                onClick={() => setIsEngineRunning(!isEngineRunning)}
                className="p-2 rounded-lg bg-teal-900/50 hover:bg-teal-800 transition"
              >
                {isEngineRunning ? <FiPause /> : <FiPlay />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <div className="text-right">
              <p className="text-gray-400">Live PnL</p>
              <p className="text-2xl font-black text-green-400">+$41,829.42</p>
            </div>
            <div className="w-px h-10 bg-teal-800" />
            <div className="text-right">
              <p className="text-gray-400">Win Rate</p>
              <p className="text-2xl font-black text-teal-400">94.2%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-24 pb-20">
        {/* Top Ticker Bar */}
        <div className="bg-gradient-to-r from-teal-900/20 via-cyan-900/20 to-yellow-900/20 border-y border-teal-800/50">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [0, -1200] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex gap-12 py-4"
            >
              {[...pairs, ...pairs].map((p, i) => (
                <div key={i} className="flex items-center gap-6 whitespace-nowrap">
                  <span className="font-bold text-teal-400">{p.symbol}</span>
                  <span className="text-xl font-black">${p.price.toLocaleString()}</span>
                  <span className={`flex items-center gap-1 text-lg font-bold ${p.change > 0 ? "text-green-400" : "text-red-400"}`}>
                    {p.change > 0 ? <FiTrendingUp /> : <FiTrendingDown />}
                    {p.change > 0 ? "+" : ""}{p.change}%
                  </span>
                  <span className="text-gray-500 text-sm">Vol: {p.volume}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Live Signals */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-4xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Live AI Signals
              </h2>

              <div className="space-y-4">
                {liveSignals.map((signal, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-900/20 to-cyan-900/10 border border-teal-800/50 backdrop-blur-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-transparent" />
                    <div className="relative p-6 flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className={`p-4 rounded-xl ${signal.direction === "LONG" ? "bg-green-500/20" : "bg-red-500/20"}`}>
                          {signal.direction === "LONG" ? <FiArrowUpRight className="text-green-400 text-3xl" /> : <FiArrowDownRight className="text-red-400 text-3xl" />}
                        </div>
                        <div>
                          <p className="text-3xl font-black">{signal.pair}</p>
                          <p className="text-gray-400">Entry @ ${signal.entry.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-5xl font-black text-teal-400">{signal.confidence}%</p>
                        <p className="text-sm text-gray-500">Confidence</p>
                        <p className="text-sm text-gray-500 mt-2 flex items-center justify-end gap-2">
                          <FiClock /> {signal.time}
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-black/50 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${signal.confidence}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-teal-500 to-cyan-400"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Active Positions */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Active Positions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["BTC/USD", "XAU/USD"].map((pair) => (
                    <div key={pair} className="bg-white/5 backdrop-blur-xl border border-teal-800/30 rounded-2xl p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-2xl font-black">{pair}</p>
                          <p className="text-green-400">LONG × 12.4</p>
                        </div>
                        <span className="text-3xl font-black text-green-400">+$8,421</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Entry</span>
                          <span>$92,840</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Current</span>
                          <span>$93,742</span>
                        </div>
                        <div className="flex justify-between text-green-400 font-bold">
                          <span>ROI</span>
                          <span>+9.71%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Market Overview */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-800/50 rounded-3xl p-8 backdrop-blur-xl">
                <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <FiActivity className="text-teal-400" />
                  Market Pulse
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-400 text-sm">AI Prediction Accuracy</p>
                    <p className="text-5xl font-black text-teal-400">97.8%</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Signals Today</p>
                    <p className="text-4xl font-black">142</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Total Volume</p>
                    <p className="text-4xl font-black">$4.8B</p>
                  </div>
                </div>
              </div>

              {/* Quick Trade Card */}
              <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 border-2 border-teal-500/50 rounded-3xl p-8 backdrop-blur-xl">
                <h3 className="text-2xl font-black mb-6">Quick Trade</h3>
                <select className="w-full bg-black/50 border border-teal-800 rounded-xl px-4 py-4 text-xl mb-4">
                  <option>BTC/USD</option>
                  <option>ETH/USD</option>
                  <option>XAU/USD</option>
                </select>
                <div className="grid grid-cols-2 gap-4">
                  <button className="py-6 bg-green-500/20 border-2 border-green-500 text-green-400 font-bold rounded-xl hover:bg-green-500/30 transition">
                    LONG
                  </button>
                  <button className="py-6 bg-red-500/20 border-2 border-red-500 text-red-400 font-bold rounded-xl hover:bg-red-500/30 transition">
                    SHORT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-2xl border-t border-teal-900/50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-center gap-16 text-center">
          <div>
            <p className="text-gray-400 text-sm">Total Traders Live</p>
            <p className="text-3xl font-black text-teal-400">
              <CountUp end={89241} duration={2} separator="," />+
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">24h Alpha Generated</p>
            <p className="text-3xl font-black text-green-400">+41.8%</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Engine Uptime</p>
            <p className="text-3xl font-black text-teal-400">99.999%</p>
          </div>
        </div>
      </div>
    </div>
  );
}