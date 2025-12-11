import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Activity, 
  TrendingUp, 
  Bot, 
  ShieldCheck, 
  Cpu,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  Sparkles
} from "lucide-react";

export default function LiveTradingPage() {
  const [marketData, setMarketData] = useState([
    { symbol: "AAPL", price: 277.89, change: +2.34, changePct: +0.85, volume: "48.2M", trend: "up" },
    { symbol: "NVDA", price: 182.43, change: -4.12, changePct: -2.21, volume: "312.7M", trend: "down" },
    { symbol: "TSLA", price: 448.27, change: +18.91, changePct: +4.41, volume: "142.8M", trend: "up" },
    { symbol: "BTC/USD", price: 92415.50, change: +1823.77, changePct: +2.01, volume: "$41.2B", trend: "up" },
    { symbol: "ETH/USD", price: 3482.10, change: -87.44, changePct: -2.45, volume: "$18.9B", trend: "down" },
    { symbol: "GOOGL", price: 195.78, change: +3.67, changePct: +1.91, volume: "29.4M", trend: "up" },
  ]);

  // Simulate live price updates every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prev => prev.map(item => ({
        ...item,
        price: item.price + (Math.random() - 0.5) * 10,
        change: item.change + (Math.random() - 0.5) * 8,
        changePct: (Math.random() - 0.5) * 3,
        trend: Math.random() > 0.5 ? "up" : "down"
      })));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
        {/* Animated Background Orbs */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-teal-600 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-32 right-32 w-80 h-80 bg-yellow-500 rounded-full blur-3xl opacity-15 animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse delay-1000" />
        </div>

        {/* Header */}
        <header className="w-full py-6 px-6 border-b border-teal-800/40 backdrop-blur-xl bg-black/50 sticky top-0 z-50">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Zap className="text-teal-400 animate-pulse" size={36} />
              <span className="bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-transparent">
                VeloxCapitalMarket.ai
              </span>
            </h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 bg-teal-900/60 px-5 py-2 rounded-full border border-teal-700">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-ping" />
                <span className="text-sm font-medium">LIVE • Ultra-Low Latency</span>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="w-full py-24 px-6 flex flex-col items-center text-center bg-gradient-to-b from-black via-gray-950 to-black">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Real-Time AI Trading
              <span className="block text-teal-400 mt-3">Powered by Robotics Intelligence</span>
            </h2>
            <p className="mt-8 text-xl text-gray-300 max-w-2xl mx-auto">
              Experience institutional-grade execution with sub-millisecond latency, AI-driven signals, and quantum-resistant encryption.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-16 relative"
          >
            <div className="w-72 h-72 rounded-full bg-gradient-to-br from-teal-400 via-cyan-400 to-teal-600 p-1 shadow-[0_0_80px_#0ff8]">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center animate-float">
                <Bot size={120} className="text-teal-400" />
                <Sparkles className="absolute top-8 right-8 text-yellow-400 animate-ping" size={32} />
              </div>
            </div>
          </motion.div>

          {/* Live Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl"
          >
            {[
              { label: "Active Bots", value: "89", icon: <Cpu className="text-cyan-400" /> },
              { label: "24h Volume", value: "$4.82T", icon: <Activity className="text-teal-400" /> },
              { label: "Avg Latency", value: "0.47ms", icon: <Zap className="text-yellow-400" /> },
              { label: "Markets", value: "127+", icon: <Globe className="text-purple-400" /> },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-teal-300">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Live Trading Feed */}
        <section className="py-20 px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <h3 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-4">
              <TrendingUp className="text-teal-400" size={40} />
              Live Market Execution Feed
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketData.map((asset, i) => (
                <motion.div
                  key={asset.symbol}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative group"
                >
                  <div className="bg-black/60 backdrop-blur-2xl border border-teal-800/50 rounded-2xl p-8 hover:border-teal-500/80 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 transform hover:-translate-y-2">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-teal-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />

                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="text-2xl font-bold text-yellow-400">{asset.symbol}</h4>
                        <p className="text-teal-300 text-sm">Real-time • Level 3 Data</p>
                      </div>
                      <div className={`p-3 rounded-full ${asset.trend === "up" ? "bg-green-500/20" : "bg-red-500/20"}`}>
                        {asset.trend === "up" ? 
                          <ArrowUpRight className="text-green-400" size={28} /> : 
                          <ArrowDownRight className="text-red-400" size={28} />
                        }
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-4xl font-extrabold">${asset.price.toFixed(2)}</p>
                      <p className={`text-xl font-bold mt-2 ${asset.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                        {asset.change >= 0 ? "+" : ""}{asset.change.toFixed(2)} ({asset.changePct.toFixed(2)}%)
                      </p>
                    </div>

                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Volume</span>
                      <span className="text-teal-300 font-medium">{asset.volume}</span>
                    </div>

                    <button className="mt-6 w-full py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-black font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg">
                      Trade Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-t from-teal-950/30 to-transparent">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8">
              Join the Future of <span className="text-teal-400">AI Trading</span>
            </h3>
            <p className="text-xl text-gray-300 mb-12">
              Zero emotions. Pure execution. Built for speed, precision, and profit.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 text-xl font-bold bg-teal-500 hover:bg-teal-400 text-black rounded-2xl shadow-2xl shadow-teal-500/50 transition-all"
              >
                Launch Terminal
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-12 py-5 text-xl font-bold border-2 border-teal-500 text-teal-400 hover:bg-teal-500/20 rounded-2xl transition-all"
              >
                View API Docs
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-10 px-6 border-t border-teal-900/50 text-center text-gray-500 text-sm">
          © 2025 <span className="text-teal-400 font-bold">VeloxCapitalMarket.ai</span> • 
          AI-Powered • Quantum-Resistant • Institutional Grade
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}