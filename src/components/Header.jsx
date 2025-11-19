// src/components/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiArrowRight,
  FiUser,
  FiMail,
  FiLock,
  FiGlobe,
  FiZap,
  FiCpu,
  FiShield,
  FiTrendingUp,
  FiBarChart2,  // ← Swapped from FiBarChart3 (this one exists!)
} from "react-icons/fi";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close modal/menus on route change
  useEffect(() => {
    setIsModalOpen(false);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const services = [
    { name: "Live Trading", icon: <FiTrendingUp />, path: "/markets" },
    { name: "AI Alpha Engine", icon: <FiCpu />, path: "/engine" },
    { name: "Zero-Latency Infra", icon: <FiZap />, path: "/markets#infra" },
    { name: "Risk Shield", icon: <FiShield />, path: "/markets#risk" },
    { name: "Portfolio Analytics", icon: <FiBarChart2 />, path: "/markets#analytics" },  // ← Fixed here
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-2xl border-b border-teal-900/50"
            : "bg-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl flex items-center justify-center font-black text-black text-xl">
              V
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-transparent">
              VELOX
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-gray-300 hover:text-teal-400 transition font-medium">
              Platform
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition font-medium"
              >
                Our Services
                <motion.div
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiArrowRight className="text-sm" />
                </motion.div>
              </button>

              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-black/95 backdrop-blur-2xl border border-teal-800/50 rounded-2xl shadow-2xl overflow-hidden"
                >
                  {services.map((service, i) => (
                    <Link
                      key={i}
                      to={service.path}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-4 px-6 py-5 hover:bg-teal-900/30 transition"
                    >
                      <div className="text-2xl text-teal-400">{service.icon}</div>
                      <div>
                        <p className="font-semibold text-white">{service.name}</p>
                        <p className="text-xs text-gray-400">High-speed AI execution</p>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            <Link to="/media" className="text-gray-300 hover:text-teal-400 transition font-medium">
              Media
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-teal-400 transition font-medium">
              Contact
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/login"
              className="text-gray-300 hover:text-white transition font-medium px-6"
            >
              Sign In
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-400 text-black font-bold rounded-full overflow-hidden shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Open Account <FiArrowRight />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-3xl text-teal-400"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            className="fixed inset-y-0 right-0 w-full bg-black/98 backdrop-blur-2xl lg:hidden z-40 pt-24 px-8"
          >
            <div className="flex flex-col gap-8 text-2xl">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>Platform</Link>
              <div>
                <p className="text-teal-400 font-bold mb-4">Our Services</p>
                {services.map((s) => (
                  <Link
                    key={s.name}
                    to={s.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-4 py-3 text-gray-300"
                  >
                    {s.icon} {s.name}
                  </Link>
                ))}
              </div>
              <Link to="/media" onClick={() => setMobileMenuOpen(false)}>Media</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <div className="h-px bg-teal-900/50 my-6" />
              <Link to="/login" className="text-teal-400">Sign In</Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="mt-6 px-16 py-6 bg-gradient-to-r from-teal-500 to-cyan-400 text-black font-bold rounded-full"
              >
                Open Account
              </button>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Open Account Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            className="relative bg-gradient-to-b from-gray-900 to-black border border-teal-800/50 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl z-10"
            >
              <FiX />
            </button>

            <div className="p-8">
              <h2 className="text-3xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-black mb-2">
                Open Live Account
              </h2>
              <p className="text-gray-400 mb-8">
                Start trading with VELOX in under 2 minutes
              </p>

              <form className="space-y-5">
                <div className="relative">
                  <FiUser className="absolute left-4 top-4 text-teal-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-teal-500 focus:outline-none text-white placeholder-gray-500 transition"
                  />
                </div>
                <div className="relative">
                  <FiMail className="absolute left-4 top-4 text-teal-400" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-teal-500 focus:outline-none text-white placeholder-gray-500 transition"
                  />
                </div>
                <div className="relative">
                  <FiLock className="absolute left-4 top-4 text-teal-400" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-teal-500 focus:outline-none text-white placeholder-gray-500 transition"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <FiGlobe className="text-teal-400" />
                  <select className="flex-1 bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-4 text-white focus:border-teal-500 focus:outline-none">
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Europe</option>
                    <option>Other</option>
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-gradient-to-r from-teal-500 to-cyan-400 text-black font-bold text-lg rounded-xl shadow-lg"
                  type="submit"
                >
                  Create Account
                </motion.button>
              </form>

              <p className="text-center text-gray-500 text-sm mt-6">
                By signing up, you agree to our{" "}
                <a href="#" className="text-teal-400 hover:underline">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-teal-400 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Spacer for content below header */}
      <div className="h-24" />
    </>
  );
}