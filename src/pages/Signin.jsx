// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { 
//   Zap, 
//   Bot, 
//   ShieldCheck, 
//   Sparkles, 
//   Lock, 
//   Mail, 
//   Eye, 
//   EyeOff,
//   Activity
// } from "lucide-react";

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <>
//       <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center relative overflow-hidden">
//         {/* Animated Robotic Background */}
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-black to-gray-900" />
          
//           {/* Matrix Grid */}
//           <motion.div
//             animate={{ backgroundPosition: "0% 0%, 100% 100%" }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="absolute inset-0 opacity-20"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ffbb' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
//               backgroundSize: "60px 60px"
//             }}
//           />

//           {/* Rotating Quantum Rings */}
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-teal-500/20 rounded-full"
//           />
//           <motion.div
//             animate={{ rotate: -360 }}
//             transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-cyan-500/10 rounded-full"
//           />

//           {/* Floating Particles */}
//           {[...Array(6)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-2 h-2 bg-teal-400 rounded-full shadow-lg shadow-teal-500/60"
//               initial={{ x: Math.random() * window.innerWidth, y: -20 }}
//               animate={{ y: window.innerHeight + 20 }}
//               transition={{
//                 duration: 15 + i * 3,
//                 repeat: Infinity,
//                 delay: i * 2,
//                 ease: "linear"
//               }}
//             >
//               <Sparkles className="w-8 h-8 text-cyan-400 opacity-50 absolute -top-3 -left-3 animate-ping" />
//             </motion.div>
//           ))}
//         </div>

//         {/* Login Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 50, scale: 0.9 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
//           className="relative w-full max-w-md"
//         >
//           {/* Glow Effect */}
//           <div className="absolute inset-0 bg-teal-500 rounded-3xl blur-3xl opacity-30 animate-pulse" />
          
//           <div className="relative bg-black/80 backdrop-blur-3xl border border-teal-800/60 rounded-3xl p-10 shadow-2xl">
//             {/* Logo & Title */}
//             <div className="text-center mb-10">
//               <motion.div
//                 animate={{ rotate: [0, 360] }}
//                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//                 className="inline-block mb-6"
//               >
//                 <Bot className="w-20 h-20 text-teal-400" />
//               </motion.div>
              
//               <h1 className="text-4xl font-extrabold bg-gradient-to-r from-teal-400 via-cyan-400 to-yellow-400 bg-clip-text text-white">
//                 VeloxCapitalMarket.ai
//               </h1>
//               <p className="mt-3 text-teal-300 text-lg">Institutional • AI • Robotics</p>
//             </div>

//             {/* Welcome Text */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               className="text-center mb-8"
//             >
//               <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
//               <p className="text-gray-400">Access your AI-powered trading terminal</p>
//             </motion.div>

//             {/* Form */}
//             <form className="space-y-6">
//               {/* Email Field */}
//               <div className="relative">
//                 <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400 w-5 h-5" />
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Institutional Email"
//                   className="w-full pl-14 pr-6 py-5 bg-teal-950/40 border border-teal-800/60 rounded-xl focus:border-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-500/20 transition-all placeholder-gray-500 text-white"
//                 />
//               </div>

//               {/* Password Field */}
//               <div className="relative">
//                 <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400 w-5 h-5" />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Secure Passphrase"
//                   className="w-full pl-14 pr-14 py-5 bg-teal-950/40 border border-teal-800/60 rounded-xl focus:border-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-500/20 transition-all placeholder-gray-500 text-white"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-teal-400 hover:text-cyan-400 transition"
//                 >
//                   {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </button>
//               </div>

//               {/* Remember & Forgot */}
//               <div className="flex items-center justify-between text-sm">
//                 <label className="flex items-center gap-3 cursor-pointer">
//                   <input type="checkbox" className="w-5 h-5 rounded border-teal-800 bg-teal-950/50 text-teal-400 focus:ring-teal-500" />
//                   <span className="text-gray-400">Stay connected</span>
//                 </label>
//                 <a href="#" className="text-teal-400 hover:text-cyan-400 transition">Recovery</a>
//               </div>

//               {/* Login Button */}
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full py-5 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-black font-bold text-xl rounded-xl shadow-2xl shadow-teal-500/50 transition-all flex items-center justify-center gap-3"
//               >
//                 <ShieldCheck size={24} />
//                 Secure Access Portal
//                 <Zap size={24} />
//               </motion.button>
//             </form>

//             {/* Alternative Options */}
//             <div className="mt-8 text-center">
//               <p className="text-gray-500 mb-4">Or enter with</p>
//               <div className="flex justify-center gap-6">
//                 <motion.button
//                   whileHover={{ scale: 1.2, rotate: 5 }}
//                   className="p-4 bg-teal-900/50 border border-teal-700 rounded-xl hover:border-teal-400 transition"
//                 >
//                   <Activity className="w-6 h-6 text-teal-400" />
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.2, rotate: -5 }}
//                   className="p-4 bg-teal-900/50 border border-teal-700 rounded-xl hover:border-teal-400 transition"
//                 >
//                   <Bot className="w-6 h-6 text-cyan-400" />
//                 </motion.button>
//               </div>
//             </div>

//             {/* Status Bar */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1 }}
//               className="mt-8 pt-6 border-t border-teal-800/50 text-center"
//             >
//               <div className="flex items-center justify-center gap-3 text-sm">
//                 <div className="w-3 h-3 bg-green-400 rounded-full animate-ping" />
//                 <span className="text-teal-300">All systems operational • Quantum encryption active</span>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>

       
//       </div>
//     </>
//   );
// }




import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Bot,
  ShieldCheck,
  Sparkles,
  Lock,
  Mail,
  Eye,
  EyeOff,
  Activity,
} from "lucide-react";
import { loginUser } from "../api/authApi";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      console.warn("⚠️ Missing credentials");
      return;
    }

    setLoading(true);

    try {
      const payload = { email, password };

      console.log("🚀 Login Payload:", payload);

      const res = await loginUser(payload);

      console.log("✅ Login Response:", res.data);

      const { token, user } = res.data;

      if (!token || !user) {
        throw new Error("Invalid login response");
      }

      // Save session for website
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // 🔐 ROLE-BASED REDIRECT (ALIGNED)
      if (user.role === "admin") {
        window.location.href =
          "https://dashboard.veloxcapitalmarkets.ai/admin";
      } else {
        window.location.href =
          `https://velox-user-dashboard.vercel.app/login?token=${token}`;
      }
    } catch (err) {
      console.error(
        "❌ Login Failed:",
        err.response?.data || err.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-black to-gray-900" />

        <motion.div
          animate={{ backgroundPosition: "0% 0%, 100% 100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ffbb' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* LOGIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative w-full max-w-md"
      >
        <div className="absolute inset-0 bg-teal-500 rounded-3xl blur-3xl opacity-30 animate-pulse" />

        <div className="relative bg-black/80 backdrop-blur-3xl border border-teal-800/60 rounded-3xl p-10 shadow-2xl">
          <div className="text-center mb-10">
            <Bot className="w-20 h-20 text-teal-400 mx-auto mb-6" />
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-teal-400 via-cyan-400 to-yellow-400 bg-clip-text text-white">
              VeloxCapitalMarket.ai
            </h1>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Institutional Email"
                className="w-full pl-14 py-5 bg-teal-950/40 border border-teal-800/60 rounded-xl text-white"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Secure Passphrase"
                className="w-full pl-14 pr-14 py-5 bg-teal-950/40 border border-teal-800/60 rounded-xl text-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-teal-400"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-bold rounded-xl disabled:opacity-50"
            >
              {loading ? "Authenticating..." : "Secure Access Portal"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
