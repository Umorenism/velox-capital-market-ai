import React from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, BarChart3, Bot, Sparkles, Users, Layers, Wallet, TrendingUp, Zap } from "lucide-react";

export default function RetirementBlogPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Header Section */}
      <header className="w-full py-6 px-6 border-b border-teal-800/40 backdrop-blur-xl bg-black/40 sticky top-0 z-50">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <ShieldCheck className="text-teal-400 animate-pulse" size={32} />
          VeloxCapitalMarket.ai • Retirement Blog
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
            Revolutionize Your Retirement with
            <span className="text-teal-400"> AI & Fintech Insights</span>
          </h2>
          <p className="mt-6 text-gray-300 text-lg md:text-xl">
            Discover cutting-edge strategies, AI-driven tools, and expert advice for optimizing your retirement planning in 2025 and beyond.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14"
        >
          <div className="w-56 h-56 rounded-full bg-gradient-to-br from-teal-500 to-yellow-500 flex items-center justify-center shadow-[0_0_60px_rgba(255,215,0,0.5)] animate-float">
            <Wallet size={80} className="text-black" />
          </div>
        </motion.div>
      </section>

      {/* Blog Post Previews */}
      <section className="py-20 px-6 bg-gray-900/50">
        <h3 className="text-3xl font-bold text-center mb-16">Latest Retirement Insights & Tips</h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "AI-Optimized 401(k)s for Future Wellness",
              desc: "Explore how AI shifts from static models to adaptive strategies, enhancing financial wellness through data-driven retirement planning.",
              icon: <Cpu size={45} className="text-teal-400" />,
              date: "Sep 15, 2025",
              author: "FinTech Weekly"
            },
            {
              title: "Reshaping Retirement with AI and Fintech",
              desc: "Learn how AI analyzes income patterns, automates savings, and provides alerts to adjust contributions for smarter retirement.",
              icon: <Bot size={45} className="text-yellow-400" />,
              date: "Jul 14, 2025",
              author: "RMC Group"
            },
            {
              title: "Fintech in Private Markets for Retirement",
              desc: "Discover how private credit and fintech bring transparency, access, and new options to 401(k) plans in the modern era.",
              icon: <TrendingUp size={45} className="text-cyan-400" />,
              date: "Nov 2, 2025",
              author: "Forbes"
            },
            {
              title: "AI Upending Traditional Retirement Assumptions",
              desc: "See how AI is transforming golden years by challenging old assumptions and introducing innovative planning techniques.",
              icon: <Zap size={45} className="text-purple-400" />,
              date: "Nov 29, 2025",
              author: "Axios"
            },
            {
              title: "AI for Better Retirement Decisions",
              desc: "Understand how AI improves efficiency in retirement planning while balancing technology with human advisor connections.",
              icon: <BarChart3 size={45} className="text-green-400" />,
              date: "Nov 21, 2025",
              author: "CFP Board"
            },
            {
              title: "Fintech & AI for Mass Financial Wellness",
              desc: "Dive into digital delivery of financial planning benefits, leveraging AI to extend advantages to more individuals.",
              icon: <Users size={45} className="text-pink-400" />,
              date: "Ongoing",
              author: "CFP.net"
            },
            {
              title: "Planning for 100-Year Lives with Fintech",
              desc: "How robo-advisors and AI coaches reshape saving and adapting for longer lifespans in the longevity economy.",
              icon: <Layers size={45} className="text-yellow-400" />,
              date: "Jun 16, 2025",
              author: "World Economic Forum"
            },
            {
              title: "Retirement Planning in the AI Age",
              desc: "Blend AI precision with human insight for trusted, effective retirement strategies from expert advisors.",
              icon: <Sparkles size={45} className="text-teal-400" />,
              date: "Oct 15, 2025",
              author: "Approach Retirement"
            },
            {
              title: "AI and Fintech Rewriting America's Future",
              desc: "Eliminate fees, simplify paperwork, and use AI-guided tools to make retirement accessible for everyone.",
              icon: <ShieldCheck size={45} className="text-cyan-400" />,
              date: "Jun 23, 2025",
              author: "Everest Group"
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
              <p className="text-gray-300 text-sm mb-4">{item.desc}</p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{item.date}</span>
                <span>By {item.author}</span>
              </div>
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
          Start Your AI-Powered Retirement Journey
        </motion.h3>

        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="px-10 py-4 text-lg bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-xl shadow-lg"
        >
          Explore Tools
        </motion.button>
      </section>
    </div>
  );
}

// Extra Animation CSS
// .animate-float { animation: float 4s ease-in-out infinite; }
// @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }