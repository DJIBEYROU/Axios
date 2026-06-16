"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-blue via-[#162D4A] to-[#0F2240]"
    >
      {/* Background network visualization */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.6" />
            </linearGradient>
            <radialGradient id="glowBlue">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="glowGreen">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Grid lines */}
          <g stroke="url(#lineGrad)" strokeWidth="0.5" fill="none">
            <line x1="100" y1="200" x2="400" y2="150" />
            <line x1="400" y1="150" x2="600" y2="300" />
            <line x1="600" y1="300" x2="400" y2="150" />
            <line x1="100" y1="200" x2="300" y2="400" />
            <line x1="300" y1="400" x2="600" y2="300" />
            <line x1="600" y1="300" x2="900" y2="250" />
            <line x1="300" y1="400" x2="700" y2="500" />
            <line x1="900" y1="250" x2="700" y2="500" />
            <line x1="700" y1="500" x2="1100" y2="450" />
            <line x1="900" y1="250" x2="1100" y2="150" />
            <line x1="1100" y1="150" x2="1100" y2="450" />
            <line x1="100" y1="200" x2="150" y2="550" />
            <line x1="150" y1="550" x2="300" y2="400" />
            <line x1="150" y1="550" x2="500" y2="650" />
            <line x1="500" y1="650" x2="700" y2="500" />
            <line x1="500" y1="650" x2="1000" y2="700" />
            <line x1="1000" y1="700" x2="1100" y2="450" />
          </g>

          {/* Glowing nodes */}
          <circle cx="400" cy="150" r="25" fill="url(#glowBlue)" />
          <circle cx="400" cy="150" r="4" fill="#60A5FA" />
          <circle cx="600" cy="300" r="20" fill="url(#glowGreen)" />
          <circle cx="600" cy="300" r="3" fill="#34D399" />
          <circle cx="300" cy="400" r="18" fill="url(#glowBlue)" />
          <circle cx="300" cy="400" r="3" fill="#60A5FA" />
          <circle cx="700" cy="500" r="22" fill="url(#glowGreen)" />
          <circle cx="700" cy="500" r="3.5" fill="#34D399" />
          <circle cx="1100" cy="150" r="15" fill="url(#glowBlue)" />
          <circle cx="1100" cy="150" r="2.5" fill="#60A5FA" />
          <circle cx="150" cy="550" r="12" fill="url(#glowGreen)" />
          <circle cx="150" cy="550" r="2" fill="#34D399" />
          <circle cx="500" cy="650" r="16" fill="url(#glowBlue)" />
          <circle cx="500" cy="650" r="2.5" fill="#60A5FA" />
          <circle cx="1000" cy="700" r="20" fill="url(#glowGreen)" />
          <circle cx="1000" cy="700" r="3" fill="#34D399" />
          <circle cx="900" cy="250" r="14" fill="url(#glowBlue)" />
          <circle cx="900" cy="250" r="2" fill="#60A5FA" />
          <circle cx="1100" cy="450" r="18" fill="url(#glowGreen)" />
          <circle cx="1100" cy="450" r="3" fill="#34D399" />

          {/* Decorative dashed routes */}
          <path
            d="M 100 200 Q 250 100 400 150"
            stroke="#2563EB"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
            opacity="0.3"
          />
          <path
            d="M 600 300 Q 750 200 900 250"
            stroke="#10B981"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
            opacity="0.3"
          />
          <path
            d="M 300 400 Q 450 550 700 500"
            stroke="#2563EB"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
            opacity="0.3"
          />
          <path
            d="M 700 500 Q 850 600 1000 700"
            stroke="#10B981"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
            opacity="0.3"
          />
        </svg>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 via-transparent to-brand-blue/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 via-transparent to-transparent" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 section-container w-full"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-8"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-brand-green-light animate-pulse" />
            <span className="text-base font-semibold text-white/80">
              Optimization Intelligence Platform
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
          >
            Transform Complex Problem into{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Optimal Decisions
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            We build optimization solutions that reduce costs, improve efficiency,
            and support sustainable operations across industries.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-brand-green rounded-lg hover:bg-brand-green/90 transition-all duration-200 shadow-lg shadow-brand-green/30 hover:shadow-xl hover:shadow-brand-green/40 hover:-translate-y-0.5"
            >
              Request Demo
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/15 transition-all duration-200 backdrop-blur-sm"
            >
              <Play size={18} />
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
