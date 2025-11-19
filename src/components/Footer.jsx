// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiGlobe, FiShield, FiCpu, FiTrendingUp, FiMail, FiPhone, FiMapPin, FiTwitter, FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Platform",
      links: ["Trading Engine", "AI Alpha Suite", "API Docs", "Mobile App", "Web Terminal"],
    },
    {
      title: "Markets",
      links: ["Gold (XAU)", "Bitcoin (BTC)", "Silver (XAG)", "Crypto Pairs", "Synthetic Assets"],
    },
    {
      title: "Company",
      links: ["About Velox", "Careers", "Press & Media", "Partners", "Security"],
    },
    {
      title: "Legal",
      links: ["Terms of Service", "Privacy Policy", "Risk Disclosure", "AML/KYC", "Licenses"],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-black/90 backdrop-blur-2xl border-t border-teal-900/50">
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-32 w-80 h-80 bg-yellow-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl flex items-center justify-center font-black text-black text-2xl shadow-lg">
                V
              </div>
              <h2 className="text-4xl font-black bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-transparent">
                VELOX
              </h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              The world’s first adaptive AI trading engine for gold, Bitcoin, and institutional-grade markets.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { icon: <FiShield />, text: "SOC 2 Type II" },
                { icon: <FiGlobe />, text: "Global License" },
                { icon: <FiCpu />, text: "AI-Powered" },
                { icon: <FiTrendingUp />, text: "+41.8% Alpha" },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-teal-500/30 rounded-full text-sm text-gray-300"
                >
                  <span className="text-teal-400">{badge.icon}</span>
                  {badge.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {footerLinks.map((column, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <h3 className="text-teal-400 font-bold text-lg mb-6 tracking-wider">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 8 }}
                    className="text-gray-400 hover:text-teal-300 transition-all duration-300 cursor-pointer text-sm"
                  >
                    {link}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-10 border-t border-teal-900/50 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
        >
          {/* Copyright & Regulation */}
          <div>
            <p className="text-teal-300 font-medium">
              © {currentYear} Velox Technologies Inc. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Regulated by SEC • CFTC • FCA • MAS • Licensed in 40+ jurisdictions
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[FiTwitter, FiLinkedin, FiGithub, FiInstagram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-teal-500/30 flex items-center justify-center text-teal-400 hover:bg-teal-500/20 hover:border-teal-400 transition-all duration-300"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Final Trust Line */}
        <div className="text-center mt-10">
          <p className="text-xs text-gray-600">
            Velox operates under strict regulatory compliance. Trading involves risk. Past performance is not indicative of future results.
          </p>
        </div>
      </div>

      {/* Floating Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-yellow-500" />
    </footer>
  );
};

export default Footer;