import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMapPin, FiMail, FiSend } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

// Replace with your actual location (Velox HQ or main office)
const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.850451649977!2d121.05654931536835!3d14.608374989794944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c15e8f0a5d6b%3A0x9b877e0b3e7e7e7e!2sQuezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1731900000000!5m2!1sen!2sph";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e17] via-[#0f1a2e] to-[#0a0e17] text-white overflow-hidden">
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative h-[55vh] min-h-[500px] flex items-center justify-center bg-gradient-to-b from-teal-900/20 via-cyan-900/10 to-transparent"
      >
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent"></div>

        <motion.div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 inline-block"
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-gold-400 bg-clip-text text-black">
              Contact Velox
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-cyan-300 font-light tracking-wide"
          >
            Innovate Faster. Transact Smarter.
          </motion.p>
        </motion.div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-teal-400/30 rounded-full"
              initial={{ y: -100, x: Math.random() * window.innerWidth }}
              animate={{
                y: window.innerHeight + 100,
                x: Math.random() * window.innerWidth,
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      </motion.header>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <FiPhone className="text-3xl" />,
              title: "Phone",
              info: "+63 2 8555 9000",
              sub: "+63 917 888 8356",
            },
            {
              icon: <FiMapPin className="text-3xl" />,
              title: "Office",
              info: "Velox Tower, BGC",
              sub: "Taguig City, Metro Manila",
            },
            {
              icon: <FiMail className="text-3xl" />,
              title: "Email",
              info: "hello@velox.ph",
              sub: "support@velox.ph",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-teal-900/20 to-cyan-900/10 border border-teal-500/20 backdrop-blur-xl p-8 text-center shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="inline-flex p-4 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-2xl text-white mb-5 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-sm uppercase tracking-widest text-teal-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-xl font-semibold text-white">{item.info}</p>
                <p className="text-sm text-cyan-300 mt-1">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Form + Map Side by Side */}
      <section ref={ref} className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-black">
                Let's Build the Future Together
              </h2>
              <p className="text-gray-400 mt-3 text-lg">
                Whether it's partnership, support, or just saying hi — we're listening.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent successfully! 🚀");
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full px-5 py-4 bg-white/5 border border-teal-500/30 rounded-xl placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-4 focus:ring-teal-500/20 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-5 py-4 bg-white/5 border border-teal-500/30 rounded-xl placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-4 focus:ring-teal-500/20 transition-all duration-300"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-5 py-4 bg-white/5 border border-teal-500/30 rounded-xl placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-4 focus:ring-teal-500/20 transition-all"
              />
              <textarea
                rows={6}
                placeholder="Your Message"
                required
                className="w-full px-5 py-4 bg-white/5 border border-teal-500/30 rounded-xl placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-4 focus:ring-teal-500/20 transition-all resize-none"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-teal-500 to-cyan-400 text-black font-bold rounded-full overflow-hidden shadow-2xl hover:shadow-teal-500/50 transition-all duration-300"
              >
                <span>Send Message</span>
                <FiSend className="group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </motion.button>
            </form>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-teal-500/30"
          >
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="520"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Velox Location"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
            <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-md px-5 py-3 rounded-full border border-teal-400/50">
              <p className="text-teal-300 font-medium flex items-center gap-2">
                <FiMapPin /> Velox Global Headquarters
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 text-center"
      >
        <p className="text-teal-400 text-lg mb-8 font-medium">Connect With Veloxcapitalmarket.ai</p>
        <div className="flex justify-center gap-6">
          {[FaLinkedinIn, FaTwitter, FaInstagram, FaGithub, FaFacebookF].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-4 bg-teal-900/30 border border-teal-500/40 rounded-full hover:bg-teal-500 hover:text-black hover:border-teal-400 transition-all duration-300"
            >
              <Icon className="text-xl" />
            </motion.a>
          ))}
        </div>
      </motion.section>

     
     
    </div>
  );
}