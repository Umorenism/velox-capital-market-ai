import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, BarChart3, Bot, Sparkles } from "lucide-react";

export default function FintechTradingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Header Section */}
      <header className="w-full py-6 px-6 border-b border-teal-800/40 backdrop-blur-xl bg-black/40 sticky top-0 z-50">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Bot className="text-teal-400 animate-pulse" size={32} />
          FinTech Robotics • Forex Education
        </h1>
      </header>

      {/* Hero Section */}
      <section className="w-full py-20 px-6 flex flex-col items-center text-center bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Transform Your Forex Knowledge with
            <span className="text-teal-400"> AI-Driven FinTech Robotics</span>
          </h2>
          <p className="mt-6 text-gray-300 text-lg md:text-xl">
            Gain mastery in forex trading through AI‑powered education, robotics‑inspired learning systems, and structured knowledge designed for beginners and advanced traders alike.
          </p>
        </motion.div>

        {/* Floating Robot Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14"
        >
          <div className="w-52 h-52 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-[0_0_50px_#0ff] animate-float">
            <Cpu size={70} className="text-black" />
          </div>
        </motion.div>
      </section>

      {/* Forex Features */}
      <section className="py-20 px-6 bg-gray-900/50">
        <h3 className="text-3xl font-bold text-center mb-16">Forex Education • Learning Tracks</h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Beginner to Advanced Forex Lessons",
              desc: "Structured forex learning modules covering fundamentals, charts, trends, strategies, and risk management.",
              icon: <BarChart3 size={45} className="text-teal-400" />, 
            },
            {
              title: "Interactive Learning Simulations",
              desc: "Practice forex trading using AI‑powered simulations and robotics‑style training modules.",
              icon: <Bot size={45} className="text-cyan-400" />, 
            },
            {
              title: "Live Market Education Tools",
              desc: "Access real‑time charts, analysis tools, and live educational data to enhance your learning process.",
              icon: <Layers size={45} className="text-purple-400" />, 
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
          Build Your FinTech Trading Future
        </motion.h3>

        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="px-10 py-4 text-lg bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-xl shadow-lg"
        >
          Get Started
        </motion.button>
      </section>
    </div>
  );
}

// Extra Animation CSS
// .animate-float { animation: float 4s ease-in-out infinite; }
// @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }
