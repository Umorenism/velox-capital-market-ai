import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Zap, 
  Bot, 
  Sparkles,
  Activity, 
  Users, 
  MessageCircle, 
  Globe, 
  ShieldCheck,
  TrendingUp,
  Calendar,
  Clock,
  Star,
  ArrowRight
} from "lucide-react";

export default function MentorshipLivePage() {
  return (
    <>
      <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
        {/* Animated Robotic Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-black to-gray-900" />
          <motion.div
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ffbb' fill-opacity='0.12'%3E%3Cpath d='M60 55v-6h-4v6h-6v4h6v6h4v-6h6v-4h-6zm0-50V0h-4v5h-6v4h6v5h4v-5h6v-4h-6zM10 55v-6H5v6H0v4h5v6h5v-6h5v-4h-5zM10 5V0H5v5H0v4h5v5h5v-5h5v-4h-5z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px"
            }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-teal-500/20 rounded-full"
          />
        </div>

        {/* Floating Mentor Particles */}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="fixed w-3 h-3 bg-teal-400 rounded-full shadow-lg shadow-teal-500/60"
            initial={{ x: Math.random() * window.innerWidth, y: -30 }}
            animate={{ y: window.innerHeight + 30 }}
            transition={{
              duration: 18 + i * 3,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
          >
            <Sparkles className="w-10 h-10 text-yellow-400 opacity-50 absolute -top-4 -left-4 animate-ping" />
          </motion.div>
        ))}

        {/* Header */}
        <header className="relative w-full py-8 px-6 border-b border-teal-800/60 backdrop-blur-2xl bg-black/70 sticky top-0 z-50">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between max-w-7xl mx-auto"
          >
            <h1 className="text-4xl font-bold flex items-center gap-4">
              <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 30, repeat: Infinity }}>
                <Bot className="text-teal-400" size={42} />
              </motion.div>
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-yellow-400 bg-clip-text text-white">
                VeloxCapitalMarket.ai
              </span>
            </h1>
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-4 bg-teal-900/80 px-6 py-3 rounded-full border border-teal-600">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ping" />
              <span className="font-medium">LIVE • Mentorship Arena</span>
            </motion.div>
          </motion.div>
        </header>

        {/* Hero Section */}
        <section className="relative py-32 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 
              className="text-6xl md:text-8xl font-extrabold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="block">Live Mentorship</span>
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-yellow-400 bg-clip-text text-white">
                with AI & Elite Traders
              </span>
            </motion.h2>
            <motion.p 
              className="mt-8 text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Join real-time trading rooms with legendary mentors and AI co-pilots. 
              Watch, ask, execute — together.
            </motion.p>
          </motion.div>

          {/* Central Live Core */}
          <motion.div
            initial={{ scale: 0, rotate: -360 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.8, delay: 1, type: "spring" }}
            className="mt-24 relative"
          >
            <div className="w-96 h-96 mx-auto rounded-full bg-gradient-to-br from-teal-600 via-cyan-500 to-yellow-500 p-3 shadow-[0_0_160px_rgba(0,255,200,0.8)]">
              <div className="w-full h-full rounded-full bg-black/95 backdrop-blur-3xl border-4 border-teal-500/70 flex items-center justify-center relative">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-12 border-4 border-dashed border-teal-400/50 rounded-full" />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute inset-20 border-2 border-yellow-400/40 rounded-full" />
                <Users className="w-40 h-40 text-teal-400" />
                <MessageCircle className="absolute top-16 right-16 text-yellow-400 animate-ping" size={48} />
                <Activity className="absolute bottom-16 left-16 text-green-400 animate-pulse" size={44} />
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-teal-300 font-mono"
            >
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                <span>LIVE NOW • 1,847 Traders Online</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Live Sessions Grid */}
        <section className="py-24 px-6">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-bold text-center mb-20"
          >
            Active Mentorship Rooms
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              { mentor: "Alex Quantum", expertise: "HFT & Market Making", viewers: "2,194", profit: "+428%", live: true },
              { mentor: "Dr. Nova Chen", expertise: "AI Alpha Research", viewers: "1,873", profit: "+691%", live: true },
              { mentor: "Marcus Edge", expertise: "Crypto Arbitrage", viewers: "3,108", profit: "+312%", live: true },
              { mentor: "Lina Vortex", expertise: "Options Flow", viewers: "987", profit: "+189%", live: false },
              { mentor: "ZeroLatency", expertise: "MEV & Flashbots", viewers: "2,601", profit: "+1,204%", live: true },
              { mentor: "Theta King", expertise: "Volatility Trading", viewers: "1,429", profit: "+276%", live: false },
            ].map((room, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 80px rgba(0,255,200,0.4)" }}
                className="group relative bg-black/70 backdrop-blur-3xl border border-teal-800/60 rounded-3xl overflow-hidden cursor-pointer"
              >
                <div className="relative h-48 bg-gradient-to-br from-teal-900/50 to-cyan-900/50 flex items-center justify-center">
                  {room.live && (
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-600/90 px-4 py-2 rounded-full animate-pulse">
                      <div className="w-3 h-3 bg-white rounded-full" />
                      <span className="text-sm font-bold">LIVE</span>
                    </div>
                  )}
                  <Bot className="w-32 h-32 text-teal-400 opacity-50" />
                  <Sparkles className="absolute top-8 right-8 text-yellow-400 animate-ping" size={40} />
                </div>

                <div className="p-8">
                  <h4 className="text-2xl font-bold text-teal-300 mb-2">{room.mentor}</h4>
                  <p className="text-cyan-400 text-sm mb-4">{room.expertise}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Users size={18} />
                      <span>{room.viewers} watching</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400 font-bold">
                      <TrendingUp size={18} />
                      {room.profit}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ x: 10 }}
                    className="w-full py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-black font-bold rounded-xl flex items-center justify-center gap-3"
                  >
                    {room.live ? "Enter Room" : "Notify When Live"}
                    <ArrowRight />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Upcoming Sessions */}
        <section className="py-24 px-6 bg-gradient-to-t from-teal-950/20 to-transparent">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-bold text-center mb-16"
          >
            Upcoming Masterclasses
          </motion.h3>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { title: "Building Your Own Trading Bot Army", mentor: "ZeroLatency", date: "Tomorrow • 14:00 UTC", seats: "Limited" },
              { title: "AI-Powered Order Flow Reading", mentor: "Dr. Nova Chen", date: "Dec 15 • 18:00 UTC", seats: "200 spots" },
              { title: "The Future of DeFi Yield", mentor: "Marcus Edge", date: "Dec 18 • 20:00 UTC", seats: "Open" },
            ].map((session, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-black/60 backdrop-blur-xl border border-teal-700/50 rounded-2xl p-8 flex items-center justify-between hover:border-teal-500 transition-all"
              >
                <div>
                  <h4 className="text-2xl font-bold text-teal-300 mb-2">{session.title}</h4>
                  <div className="flex items-center gap-6 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={20} />
                      {session.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={20} />
                      {session.mentor}
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-xl"
                >
                  Reserve Seat
                </motion.button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6">
          <motion.div className="text-center max-w-4xl mx-auto">
            <h3 className="text-6xl font-extrabold mb-8">
              Level Up With The Best
              <span className="block text-teal-400">Live. Right Now.</span>
            </h3>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-20 py-7 text-2xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-black rounded-2xl shadow-2xl shadow-teal-500/60 mt-12"
            >
              Join Mentorship Arena
            </motion.button>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-teal-900/50 text-center text-gray-500">
          © 2025 <span className="text-teal-400 font-bold">VeloxCapitalMarket.ai</span> • 
          Live Mentorship • Where Legends Teach Tomorrow's Traders
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
      `}</style>
    </>
  );
}