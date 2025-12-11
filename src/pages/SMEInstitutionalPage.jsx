import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Bot, 
  CircuitBoard, 
  Binary, 
  Activity, 
  Globe, 
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function SMEInstitutionalPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
        {/* Animated Matrix-Style Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-black to-gray-900" />
          <motion.div
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ffbb' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px"
            }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-teal-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-cyan-500/10 rounded-full"
          />
        </div>

        {/* Floating Circuit Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="fixed w-2 h-2 bg-teal-400 rounded-full shadow-lg shadow-teal-500/50"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: -20 
            }}
            animate={{ 
              y: window.innerHeight + 20,
              x: Math.random() * window.innerWidth 
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
          >
            <CircuitBoard className="w-8 h-8 text-teal-400 opacity-30 absolute -top-3 -left-3" />
          </motion.div>
        ))}

        {/* Header */}
        <header className="relative w-full py-8 px-6 border-b border-teal-800/60 backdrop-blur-2xl bg-black/60 sticky top-0 z-50">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between max-w-7xl mx-auto"
          >
            <h1 className="text-4xl font-bold flex items-center gap-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Bot className="text-teal-400" size={40} />
              </motion.div>
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-yellow-400 bg-clip-text text-white">
                VeloxCapitalMarket.ai
              </span>
            </h1>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-4 bg-teal-900/70 px-6 py-3 rounded-full border border-teal-600"
            >
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ping" />
              <span className="font-medium">Institutional • SME Robotics</span>
            </motion.div>
          </motion.div>
        </header>

        {/* Hero Section - Ultra Robotics */}
        <section className="relative py-32 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 
              className="text-6xl md:text-8xl font-extrabold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="block">Institutional-Grade</span>
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-yellow-400 bg-clip-text text-white">
                AI Robotics Engine
              </span>
            </motion.h2>
            <motion.p 
              className="mt-8 text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Built for SMEs & Institutions: Zero latency execution, quantum-resistant security, 
              autonomous liquidity routing, and self-learning algorithmic intelligence.
            </motion.p>
          </motion.div>

          {/* Central Robotics Core */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 1.2, type: "spring" }}
            className="mt-20 relative"
          >
            <div className="w-96 h-96 mx-auto rounded-full bg-gradient-to-br from-teal-600 via-cyan-500 to-yellow-500 p-2 shadow-[0_0_120px_rgba(0,255,200,0.6)]">
              <div className="w-full h-full rounded-full bg-black/90 backdrop-blur-xl border-4 border-teal-500/50 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border-4 border-dashed border-teal-400/40 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-16 border-2 border-cyan-400/30 rounded-full"
                />
                <Cpu className="w-32 h-32 text-teal-400" />
                <Sparkles className="absolute top-10 right-10 text-yellow-400 animate-ping" size={40} />
                <Binary className="absolute bottom-12 left-12 text-cyan-400 opacity-60" size={36} />
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-teal-300 text-sm font-mono"
            >
              <Activity className="inline mr-2" size={20} />
              Neural Core Active • 0.31ms Latency
            </motion.div>
          </motion.div>
        </section>

        {/* Features Grid - Robotics Modules */}
        <section className="py-24 px-6">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-bold text-center mb-20"
          >
            Autonomous Robotics Modules
          </motion.h3>

          <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                title: "Quantum Execution Core",
                desc: "Sub-millisecond smart order routing across 200+ venues with self-optimizing slippage control.",
                icon: <Zap className="text-yellow-400" size={50} />,
                color: "from-yellow-500 to-orange-500"
              },
              {
                title: "AI Risk Sentinel",
                desc: "Real-time behavioral anomaly detection, VaR prediction, and autonomous position hedging.",
                icon: <ShieldCheck className="text-teal-400" size={50} />,
                color: "from-teal-500 to-cyan-500"
              },
              {
                title: "Liquidity Aggregator v9",
                desc: "Deep pool scanning with predictive liquidity mapping and dark pool integration.",
                icon: <Globe className="text-purple-400" size={50} />,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Autonomous Rebalancer",
                desc: "24/7 portfolio drift correction using reinforcement learning and genetic algorithms.",
                icon: <Bot className="text-cyan-400" size={50} />,
                color: "from-cyan-500 to-blue-500"
              },
              {
                title: "Neural Compliance Engine",
                desc: "Real-time regulatory monitoring across 47 jurisdictions with automated reporting.",
                icon: <CircuitBoard className="text-green-400" size={50} />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Self-Learning Alpha",
                desc: "Continuously evolving strategy generation from 10,000+ market regime fingerprints.",
                icon: <Sparkles className="text-pink-400" size={50} />,
                color: "from-pink-500 to-rose-500"
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: "0 0 60px rgba(0,255,200,0.4)"
                }}
                className="group relative bg-black/70 backdrop-blur-2xl border border-teal-800/50 rounded-3xl p-10 overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="mb-6"
                >
                  {feature.icon}
                </motion.div>
                <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-white">
                  {feature.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                <motion.div 
                  className="mt-6 flex items-center gap-3 text-teal-400 font-medium"
                  whileHover={{ x: 10 }}
                >
                  <span>Activate Module</span>
                  <ArrowRight size={20} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl md:text-6xl font-extrabold mb-8">
              Deploy the Future.
              <span className="block text-teal-400">Today.</span>
            </h3>
            <div className="flex flex-col sm:flex-row gap-8 justify-center mt-12">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-16 py-6 text-2xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-black rounded-2xl shadow-2xl shadow-teal-500/50"
              >
                Request Institutional Access
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-16 py-6 text-2xl font-bold border-4 border-teal-500 text-teal-400 hover:bg-teal-500/20 rounded-2xl backdrop-blur-xl"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-teal-900/50 text-center">
          <p className="text-gray-500">
             <span className="text-teal-400 font-bold">VeloxCapitalMarket.ai</span> • 
            Institutional  • Built for the Next Financial Era
          </p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
      `}</style>
    </>
  );
}