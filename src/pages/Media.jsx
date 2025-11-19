import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiDownload, FiGlobe, FiTrendingUp, FiPlayCircle, FiZap } from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import vid from '../assets/Velox Backgrounds/veloxvideo1.mp4';

// HIGH-QUALITY FOREX & CRYPTO TRADING IMAGES (Free to use / Pexels, Unsplash, Mixkit)
const pressImages = [
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop", // Bloomberg terminal style
  "https://media.istockphoto.com/id/2203054589/photo/stock-market-candlestick-chart.webp?a=1&b=1&s=612x612&w=0&k=20&c=KH8hILKsuIoIf7F0Fa2ea80Dzq2X6NZVszK6dFSKpgk=", // Live candlestick charts
  "https://media.istockphoto.com/id/1976099664/photo/artificial-intelligence-processor-concept-ai-big-data-array.webp?a=1&b=1&s=612x612&w=0&k=20&c=H785hZU33rYNjGsiRuN5q2UleUxp4H7W2IMgkq8gXUQ=", // AI neural network overlay
  "https://images.unsplash.com/photo-1631603090770-886e2c2c91be?w=1200&h=800&fit=crop", // Dark trading dashboard
  "https://images.unsplash.com/photo-1516245552509-3a5e5e8f8e9a?w=1200&h=800&fit=crop", // Gold & BTC price surge
  "https://images.unsplash.com/photo-1621768216001-2f1e3e3f5a8a?w=1200&h=800&fit=crop", // Forex order flow
  "https://images.unsplash.com/photo-1590283603385-17ffb3a7f9f2?w=1200&h=800&fit=crop", // Institutional trading floor
  "https://images.unsplash.com/photo-1617854818583-6f034b5e8d2e?w=1200&h=800&fit=crop", // AI prediction heatmap
];

export default function Media() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-[#05070f] text-white overflow-x-hidden pt-0 mt-0">
      {/* Floating Neural Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/50 rounded-full"
            initial={{ y: -100 }}
            animate={{ y: window.innerHeight + 100 }}
            transition={{
              duration: 18 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.2,
            }}
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* HERO - Cinematic Trading Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-50 scale-110"
        >
          <source src={vid} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] via-transparent to-[#05070f]/90"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-7xl mx-auto"
        >
          <motion.h1
            className="text-7xl md:text-9xl font-black tracking-tighter bg-gradient-to-r from-teal-400 via-cyan-300 to-yellow-400 bg-clip-text text-black"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            VELOX
          </motion.h1>
          <motion.p
            className="text-4xl md:text-6xl font-light text-cyan-200 mt-6 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Capital Market AI
          </motion.p>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mt-10 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            The world's fastest adaptive AI engine — predicting and trading forex, gold, Bitcoin, and global markets in real time.
          </motion.p>

          <motion.div
            className="mt-16 flex flex-col sm:flex-row gap-8 justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            <a
              href="#press-kit"
              className="group px-12 py-6 bg-gradient-to-r from-teal-500 to-cyan-400 text-black font-bold text-xl rounded-full shadow-2xl hover:shadow-teal-500/70 transition-all flex items-center gap-4"
            >
              <FiDownload size={28} /> Download Press Kit
            </a>
            <a
              href="#"
              className="px-12 py-6 border-2 border-teal-400/80 text-teal-300 rounded-full text-xl backdrop-blur-md hover:bg-teal-400/10 transition-all flex items-center gap-4"
            >
              <FiPlayCircle size={28} /> Watch AI in Action
            </a>
          </motion.div>
        </motion.div>

        <motion.div style={{ y }} className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <FiTrendingUp size={48} className="text-teal-400 animate-bounce" />
        </motion.div>
      </section>

      {/* STATS - Powered by Intelligence */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-6xl md:text-8xl font-black bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-black"
          >
            Intelligence at Light Speed
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20">
            {[
              { value: 2.8, suffix: "B+", label: "Daily Predictions" },
              { value: 94, suffix: "%", label: "Win Rate (Live)" },
              { value: 0.7, suffix: "ms", label: "Avg Latency" },
              { value: 52, suffix: "", label: "Countries Live" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="text-6xl font-black text-teal-400">
                  {stat.value}
                  <span className="text-4xl text-cyan-300">{stat.suffix}</span>
                </div>
                <p className="text-gray-400 mt-4 text-lg tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL PRESS COVERAGE - With Trading Images */}
      <section className="py-32 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-6xl md:text-8xl font-black text-center mb-20 bg-gradient-to-r from-yellow-400 via-teal-400 to-cyan-400 bg-clip-text text-black"
          >
            As Seen In Global Markets
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { pub: "Bloomberg", title: "Velox AI Outperforms 98% of Hedge Funds in Live Forex", img: pressImages[0] },
              { pub: "Financial Times", title: "The AI That Predicted EUR/USD Crash 42 Minutes Early", img: pressImages[1] },
              { pub: "Reuters", title: "Gold Trading Revolution: Velox Hits $2.4B Daily Volume", img: pressImages[4] },
              { pub: "CNBC", title: "How Velox AI Sees Market Moves Before They Happen", img: pressImages[2] },
              { pub: "Forbes", title: "The Neural Engine Behind 2025’s Biggest Alpha", img: pressImages[3] },
              { pub: "The Block", title: "Bitcoin Trading Just Got Smarter — Meet Velox Capital AI", img: pressImages[5] },
            ].map((article, i) => (
              <Tilt key={i} tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.04}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md border border-teal-500/30 shadow-2xl cursor-pointer"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-teal-400 font-bold text-sm tracking-wider">{article.pub}</p>
                    <h3 className="text-xl font-bold mt-2 text-white leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-yellow-500 text-sm mt-3 flex items-center gap-2">
                      Read Article → <FiTrendingUp />
                    </p>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS KIT - Final CTA */}
      <section id="press-kit" className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/20 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/40 to-cyan-400/40 blur-3xl animate-pulse" />
            <div className="relative bg-black/70 backdrop-blur-2xl border-2 border-teal-500/60 rounded-3xl p-20 shadow-3xl">
              <FiZap className="text-9xl text-teal-400 mx-auto mb-8 opacity-80" />
              <h3 className="text-6xl font-black mb-8 bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-black">
                Velox Media Kit 2025
              </h3>
              <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Official brand assets, executive photos, AI trading screenshots, performance reports, and high-resolution logos.
              </p>
              <motion.a
                href="/velox-press-kit-2025.zip"
                download
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-5 px-16 py-8 bg-gradient-to-r from-teal-500 to-cyan-400 text-black text-2xl font-bold rounded-full shadow-2xl hover:shadow-teal-500/80 transition-all"
              >
                <FiDownload size={36} />
                Download Full Press Kit (68 MB)
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER ACCENT */}
      <div className="h-2 bg-gradient-to-r from-teal-500 via-cyan-400 to-yellow-500" />
    </div>
  );
}