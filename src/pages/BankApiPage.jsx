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
  CheckCircle2,
  Database,
  Link2,
  Code,
  Lock,
  CreditCard,
  Globe2
} from "lucide-react";

export default function BankApiPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
        {/* Enhanced Robotic Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-black to-gray-900" />
          <motion.div
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ffbb' fill-opacity='0.15'%3E%3Cpath d='M48 45v-5h-3v5h-5v3h5v5h3v-5h5v-3h-5zm0-40V0h-3v5h-5v3h5v5h3v-5h5v-3h-5zM8 45v-5H5v5H0v3h5v5h3v-5h5v-3H8zM8 5V0H5v5H0v3h5v5h3v-5h5v-3H8z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "80px 80px"
            }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-teal-500/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-cyan-500/20 rounded-full"
          />
        </div>

        {/* Floating Fintech Particles - More Robotic Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="fixed w-3 h-3 bg-cyan-400 rounded-full shadow-xl shadow-cyan-500/60"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: -30 
            }}
            animate={{ 
              y: window.innerHeight + 30,
              x: Math.random() * window.innerWidth 
            }}
            transition={{
              duration: 20 + Math.random() * 15,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear"
            }}
          >
            <Binary className="w-10 h-10 text-teal-400 opacity-40 absolute -top-4 -left-4 animate-pulse" />
          </motion.div>
        ))}

        {/* Header - Fintech Robotics Theme */}
        {/* <header className="relative w-full py-8 px-6 border-b border-teal-800/60 backdrop-blur-2xl bg-black/70 sticky top-0 z-50">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between max-w-7xl mx-auto"
          >
            <h1 className="text-4xl font-bold flex items-center gap-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <Database className="text-teal-400" size={42} />
              </motion.div>
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-yellow-400 bg-clip-text text-white">
                VeloxCapitalMarket.ai
              </span>
            </h1>
            <motion.div 
              whileHover={{ scale: 1.15 }}
              className="flex items-center gap-4 bg-teal-900/80 px-6 py-3 rounded-full border border-teal-600 shadow-md shadow-teal-500/30"
            >
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ping" />
              <span className="font-medium">Bank API • Robotic Fintech Core</span>
            </motion.div>
          </motion.div>
        </header> */}

        {/* Hero Section - Hyper Fintech Robotics */}
        <section className="relative py-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 
              className="text-6xl md:text-8xl font-extrabold leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="block">Seamless Banking API</span>
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-yellow-400 bg-clip-text text-white">
                Powered by AI Robotics
              </span>
            </motion.h2>
            <motion.p 
              className="mt-8 text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Integrate ultra-secure, real-time banking APIs with robotic automation for frictionless transactions, AI fraud shielding, and quantum-speed settlements.
            </motion.p>
          </motion.div>

          {/* Advanced Robotic Fintech Core Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -270 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.8, delay: 1, type: "spring", stiffness: 120 }}
            className="mt-20 relative"
          >
            <div className="w-96 h-96 mx-auto rounded-full bg-gradient-to-br from-teal-600 via-cyan-500 to-yellow-500 p-2 shadow-[0_0_140px_rgba(0,255,200,0.7)] animate-pulse">
              <div className="w-full h-full rounded-full bg-black/95 backdrop-blur-3xl border-4 border-cyan-500/60 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-10 border-4 border-dashed border-teal-400/50 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-20 border-2 border-yellow-400/40 rounded-full"
                />
                <CreditCard className="w-36 h-36 text-teal-400" />
                <Sparkles className="absolute top-12 right-12 text-yellow-400 animate-ping" size={44} />
                <Link2 className="absolute bottom-14 left-14 text-cyan-400 opacity-70 animate-pulse" size={40} />
                <Lock className="absolute top-20 left-20 text-teal-300 opacity-60" size={36} />
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-cyan-300 text-sm font-mono flex items-center gap-2"
            >
              <Activity className="text-green-400" size={22} />
              API Core Online • 0.12ms Response Time
            </motion.div>
          </motion.div>
        </section>

        {/* API Features Grid - More Fintech & Robotics */}
        <section className="py-24 px-6">
          <motion.h3 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center mb-20"
          >
            Robotic Fintech API Modules
          </motion.h3>

          <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                title: "Real-Time Transaction Engine",
                desc: "Process payments with sub-second latency, auto-routing across global banks via AI optimization.",
                icon: <Zap className="text-yellow-400" size={52} />,
                color: "from-yellow-500 to-amber-500"
              },
              {
                title: "AI Fraud Guardian",
                desc: "Machine learning anomaly detection with biometric verification and predictive threat blocking.",
                icon: <ShieldCheck className="text-teal-400" size={52} />,
                color: "from-teal-500 to-cyan-500"
              },
              {
                title: "Seamless Integration Hub",
                desc: "Plug-and-play SDKs for 50+ platforms, with auto-scaling APIs and webhook orchestration.",
                icon: <Link2 className="text-purple-400" size={52} />,
                color: "from-purple-500 to-indigo-500"
              },
              {
                title: "Quantum-Safe Encryption",
                desc: "Post-quantum cryptography for all endpoints, ensuring unbreakable data security in transit.",
                icon: <Lock className="text-cyan-400" size={52} />,
                color: "from-cyan-500 to-blue-500"
              },
              {
                title: "Autonomous Compliance Bot",
                desc: "Real-time KYC/AML checks with global regulatory updates and automated reporting.",
                icon: <Bot className="text-green-400" size={52} />,
                color: "from-green-500 to-lime-500"
              },
              {
                title: "Global Currency Matrix",
                desc: "Instant FX conversions with predictive hedging and cross-border settlement robotics.",
                icon: <Globe2 className="text-pink-400" size={52} />,
                color: "from-pink-500 to-rose-500"
              },
              {
                title: "Smart Analytics Dashboard",
                desc: "AI-driven insights on transaction patterns, risk scores, and optimization recommendations.",
                icon: <Code className="text-orange-400" size={52} />,
                color: "from-orange-500 to-red-500"
              },
              {
                title: "Robotic Loan Processor",
                desc: "Automated credit scoring, instant approvals, and dynamic interest rate adjustments via ML.",
                icon: <CircuitBoard className="text-teal-400" size={52} />,
                color: "from-teal-500 to-emerald-500"
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, rotateX: -45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.2 }}
                whileHover={{ 
                  scale: 1.08, 
                  rotateY: 10,
                  boxShadow: "0 0 80px rgba(0,255,255,0.5)"
                }}
                className="group relative bg-black/80 backdrop-blur-3xl border border-teal-800/60 rounded-3xl p-10 overflow-hidden cursor-pointer shadow-lg"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="mb-6"
                >
                  {feature.icon}
                </motion.div>
                <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-white">
                  {feature.title}
                </h4>
                <p className="text-gray-300 leading-relaxed mb-6">{feature.desc}</p>
                <motion.div 
                  className="flex items-center gap-3 text-cyan-400 font-medium"
                  whileHover={{ x: 15 }}
                >
                  <CheckCircle2 size={22} />
                  <span>Integrate Now</span>
                  <ArrowRight size={22} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section - Fintech Call to Action */}
        <section className="py-32 px-6 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-5xl md:text-6xl font-extrabold mb-8">
              Unlock Robotic Banking.
              <span className="block text-cyan-400">Elevate Your Fintech.</span>
            </h3>
            <div className="flex flex-col sm:flex-row gap-8 justify-center mt-12">
              <motion.button
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.98 }}
                className="px-16 py-6 text-2xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-black rounded-2xl shadow-2xl shadow-cyan-500/60"
              >
                Get API Keys
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.12 }}
                className="px-16 py-6 text-2xl font-bold border-4 border-cyan-500 text-cyan-400 hover:bg-cyan-500/30 rounded-2xl backdrop-blur-xl"
              >
                View Docs
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-teal-900/50 text-center">
          <p className="text-gray-500">
            © 2025 <span className="text-teal-400 font-bold">VeloxCapitalMarket.ai</span> • 
            Robotic Fintech API • Powering the Future of Banking
          </p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-35px) rotate(7deg); }
        }
        .animate-float { animation: float 7s ease-in-out infinite; }
      `}</style>
    </>
  );
}