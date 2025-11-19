// src/pages/PortfolioAnalysis.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FiTrendingUp, FiDollarSign, FiLayers } from "react-icons/fi";

export default function PortfolioAnalysis() {
  const [totalValue, setTotalValue] = useState(2847281);
  const [dailyPnL, setDailyPnL] = useState(87421);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalValue(prev => prev + Math.floor(Math.random() * 8000 - 3000));
      setDailyPnL(prev => prev + Math.floor(Math.random() * 3000 - 1000));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const positions = [
    { asset: "BTC", allocation: 38, pnl: +18.4, startColor: "#f97316", endColor: "#eab308" },     // orange → yellow
    { asset: "ETH", allocation: 24, pnl: +12.1, startColor: "#a855f7", endColor: "#ec4899" },     // purple → pink
    { asset: "XAU", allocation: 18, pnl: +6.8,  startColor: "#fbbf24", endColor: "#f59e0b" },     // gold → amber
    { asset: "SOL", allocation: 12, pnl: +41.2, startColor: "#06b6d4", endColor: "#3b82f6" },     // cyan → blue
    { asset: "XAG", allocation: 8,  pnl: -2.1,  startColor: "#94a3b8", endColor: "#64748b" },     // silver gray
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-black to-emerald-950" />
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full shadow-lg shadow-purple-400/60 blur-sm"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: window.innerHeight + 100, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 10 + Math.random() * 20, repeat: Infinity, ease: "linear", delay: Math.random() * 8 }}
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/20 via-cyan-600/10 to-emerald-600/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.6, 1], x: [0, 400, -400, 0], y: [0, -400, 400, 0] }}
            transition={{ duration: 35 + i * 7, repeat: Infinity, ease: "linear" }}
            style={{ left: `${10 + i * 20}%`, top: `${15 + i * 18}%` }}
          />
        ))}
      </div>

      {/* Hero */}
      <section className="relative pt-5 pb-20 px-6 md:pt-10 text-center">
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-purple-900/40 border border-purple-700/70 backdrop-blur-2xl mb-10">
            <FiLayers className="text-purple-400 text-3xl" />
            <span className="text-purple-300 font-bold text-lg tracking-wider">PORTFOLIO INTELLIGENCE ENGINE</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-white">Your Wealth</span><br />
            <span className="text-white">Understood</span><br />
            <span className="bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-white">Perfected</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mt-10 max-w-4xl mx-auto font-light">
            Real-time performance • AI-powered rebalancing • Risk-adjusted returns • 24/7 optimization
          </p>
        </motion.div>
      </section>

      {/* Value + PnL Cards */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} className="bg-black/80 backdrop-blur-3xl rounded-3xl border-2 border-purple-700/60 p-12 shadow-2xl shadow-purple-600/40">
            <div className="flex items-center gap-6 mb-6"><FiDollarSign className="text-6xl text-purple-400" /><h3 className="text-4xl font-black">Total Portfolio Value</h3></div>
            <motion.div key={totalValue} initial={{ scale: 1.2 }} animate={{ scale: 1 }} className="text-5xl md:text-8xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-white">
              ${totalValue.toLocaleString()}
            </motion.div>
          </motion.div>

          <motion.div initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2 }} className="bg-black/80 backdrop-blur-3xl rounded-3xl border-2 border-emerald-700/60 p-12 shadow-2xl shadow-emerald-600/40">
            <div className="flex items-center gap-6 mb-6"><FiTrendingUp className={`text-6xl ${dailyPnL > 0 ? "text-emerald-400" : "text-red-400"}`} /><h3 className="text-4xl font-black">Today's PnL</h3></div>
            <motion.div key={dailyPnL} initial={{ scale: 1.2 }} animate={{ scale: 1 }} className={`text-6xl md:text-9xl font-black ${dailyPnL > 0 ? "text-emerald-400" : "text-red-400"}`}>
              {dailyPnL > 0 ? "+" : ""}${Math.abs(dailyPnL).toLocaleString()}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Donut Chart + Positions */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Donut */}
          <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} className="flex justify-center">
            <div className="relative w-96 h-96">
              <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                {(() => {
                  let startAngle = 0;
                  return positions.map((pos, i) => {
                    const angle = (pos.allocation / 100) * 360;
                    const endAngle = startAngle + angle;
                    const largeArc = angle > 180 ? 1 : 0;
                    const x1 = 100 + 80 * Math.cos((startAngle * Math.PI) / 180);
                    const y1 = 100 + 80 * Math.sin((startAngle * Math.PI) / 180);
                    const x2 = 100 + 80 * Math.cos((endAngle * Math.PI) / 180);
                    const y2 = 100 + 80 * Math.sin((endAngle * Math.PI) / 180);
                    const path = `M100,100 L${x1},${y1} A80,80 0 ${largeArc},1 ${x2},${y2} Z`;
                    startAngle = endAngle;

                    return (
                      <path
                        key={i}
                        d={path}
                        fill="none"
                        stroke={`url(#gradient${i})`}
                        strokeWidth="36"
                        strokeLinecap="round"
                      />
                    );
                  });
                })()}

                <defs>
                  {positions.map((pos, i) => (
                    <linearGradient key={i} id={`gradient${i}`}>
                      <stop offset="0%" stopColor={pos.startColor} />
                      <stop offset="100%" stopColor={pos.endColor} />
                    </linearGradient>
                  ))}
                </defs>
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-white">
                    <CountUp end={94.2} decimals={1} duration={3} />%
                  </p>
                  <p className="text-xl text-white mt-2">Portfolio Health</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Positions List */}
          <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
            <h3 className="text-4xl font-black mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Live Allocation</h3>
            {positions.map((pos, i) => (
              <motion.div key={i} whileHover={{ x: 20 }} className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-purple-800/50 rounded-2xl p-6 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full" style={{ background: `linear-gradient(to bottom right, ${pos.startColor}, ${pos.endColor})` }} />
                  <div>
                    <p className="text-3xl font-black">{pos.asset}</p>
                    <p className="text-gray-400">{pos.allocation}% of portfolio</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-3xl font-black ${pos.pnl > 0 ? "text-emerald-400" : "text-red-400"}`}>
                    {pos.pnl > 0 ? "+" : ""}{pos.pnl}%
                  </p>
                  <p className="text-gray-500 text-sm">24h</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Metrics + CTA */}
      <section className="py-20 px-6 bg-black/60">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[{ label: "Sharpe Ratio", value: 4.82 }, { label: "Sortino", value: 7.21 }, { label: "Max Drawdown", value: 6.4, suffix: "%" }, { label: "Alpha", value: 38.7, suffix: "%" }].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center bg-gradient-to-br from-gray-900/80 to-black border border-purple-800/40 rounded-2xl p-8 backdrop-blur-xl">
              <p className="text-6xl font-black text-white"><CountUp end={s.value} decimals={s.value % 1 !== 0 ? 2 : 0} duration={3} />{s.suffix}</p>
              <p className="text-gray-400 mt-3 text-lg">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="max-w-5xl mx-auto bg-gradient-to-r from-purple-900/50 via-cyan-900/40 to-emerald-900/50 rounded-3xl border-4 border-purple-600/70 backdrop-blur-3xl p-20 shadow-2xl shadow-purple-600/60">
          <h2 className="text-5xl md:text-7xl font-black mb-8">Stop Guessing<br /><span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-white">Start Dominating</span></h2>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="px-20 py-10 text-3xl font-black rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 shadow-2xl shadow-purple-500/70">
            Launch Portfolio AI
          </motion.button>
        </motion.div>
      </section>

      <div className="h-20" />
    </div>
  );
}