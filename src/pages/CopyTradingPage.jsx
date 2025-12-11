import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, BarChart3, Bot, Users, Sparkles } from "lucide-react";

export default function CopyTradingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Header Section */}
      {/* <header className="w-full py-6 px-6 border-b border-teal-800/40 backdrop-blur-xl bg-black/40 sticky top-0 z-50">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Users className="text-teal-400 animate-pulse" size={32} />
          Copy-Trading • Forex Education
        </h1>
      </header> */}

      {/* Hero Section */}
      <section className="w-full py-20 px-6 flex flex-col items-center text-center bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Learn Copy-Trading with
            <span className="text-teal-400"> AI-Enhanced Strategies</span>
          </h2>
          <p className="mt-6 text-gray-300 text-lg md:text-xl">
            Discover how to replicate successful traders, understand market behaviors, and enhance your Forex skills with robotics-inspired educational systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14"
        >
          <div className="w-52 h-52 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-[0_0_50px_#0ff] animate-float">
            <Bot size={70} className="text-black" />
          </div>
        </motion.div>
      </section>

      {/* Copy-Trading Education Features */}
      <section className="py-20 px-6 bg-gray-900/50">
        <h3 className="text-3xl font-bold text-center mb-16">Copy-Trading Learning Tracks</h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Understanding Copy-Trading",
              desc: "Learn the fundamentals of copy-trading, including how to choose traders to follow and manage risk effectively.",
              icon: <Users size={45} className="text-teal-400" />, 
            },
            {
              title: "AI-Powered Replication",
              desc: "Explore AI-driven systems that automatically replicate trades from top-performing Forex experts.",
              icon: <Cpu size={45} className="text-cyan-400" />, 
            },
            {
              title: "Simulated Copy-Trading Labs",
              desc: "Practice replicating trades in a controlled, educational simulation environment before committing real funds.",
              icon: <BarChart3 size={45} className="text-purple-400" />, 
            },
            {
              title: "Risk Management Education",
              desc: "Learn how to balance portfolios, set stop-loss limits, and diversify effectively when copying trades.",
              icon: <Layers size={45} className="text-yellow-400" />
            },
            {
              title: "Performance Tracking",
              desc: "Understand key metrics, analytics dashboards, and trader statistics to improve your copy-trading outcomes.",
              icon: <Sparkles size={45} className="text-pink-400" />
            },
            {
              title: "Community Insights",
              desc: "Join forums, discussion groups, and collaborative sessions to learn from other learners and expert traders.",
              icon: <Bot size={45} className="text-green-400" />
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-black/40 backdrop-blur-xl border border-teal-700/30 p-7 rounded-2xl shadow-lg hover:shadow-teal-500/20 transition cursor-pointer"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-6"
        >
          Start Copy-Trading Today
        </motion.h3>

        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="px-10 py-4 text-lg bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-xl shadow-lg"
        >
          Join Now
        </motion.button>
      </section>
    </div>
  );
}

// Extra Animation CSS
// .animate-float { animation: float 4s ease-in-out infinite; }
// @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }