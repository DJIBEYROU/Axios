"use client";

import { motion } from "framer-motion";
import {
  Brain,
  BarChart3,
  Cpu,
  Zap,
  Calendar,
  Monitor,
} from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Mathematical Optimization",
    description:
      "Advanced linear, mixed-integer, and nonlinear programming models to solve complex resource allocation and planning problems with provable optimality guarantees.",
    color: "text-brand-blue-light",
    bgColor: "bg-brand-blue-light/5",
    borderColor: "border-brand-blue-light/10",
    hoverBorder: "group-hover:border-brand-blue-light/30",
  },
  {
    icon: BarChart3,
    title: "Operations Research",
    description:
      "Comprehensive modeling and analysis using simulation, queuing theory, network flow, and stochastic optimization to improve operational efficiency.",
    color: "text-brand-green",
    bgColor: "bg-brand-green/5",
    borderColor: "border-brand-green/10",
    hoverBorder: "group-hover:border-brand-green/30",
  },
  {
    icon: Cpu,
    title: "AI-Assisted Decision Support",
    description:
      "Machine learning and artificial intelligence systems that augment human decision-making with predictive analytics and prescriptive recommendations.",
    color: "text-brand-blue-light",
    bgColor: "bg-brand-blue-light/5",
    borderColor: "border-brand-blue-light/10",
    hoverBorder: "group-hover:border-brand-blue-light/30",
  },
  {
    icon: Zap,
    title: "Energy System Planning",
    description:
      "Optimization solutions for generation dispatch, unit commitment, renewable integration, grid balancing, and energy trading operations.",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
    hoverBorder: "group-hover:border-amber-300",
  },
  {
    icon: Calendar,
    title: "Scheduling and Resource Allocation",
    description:
      "Intelligent scheduling systems that optimize workforce, equipment, and material allocation across complex operational environments.",
    color: "text-brand-green",
    bgColor: "bg-brand-green/5",
    borderColor: "border-brand-green/10",
    hoverBorder: "group-hover:border-brand-green/30",
  },
  {
    icon: Monitor,
    title: "Digital Twin and Simulation",
    description:
      "Virtual replicas of physical systems that enable real-time monitoring, what-if analysis, and optimized operational decision-making.",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
    hoverBorder: "group-hover:border-purple-300",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 lg:py-32 bg-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-blue-light mb-4">
            Our Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue tracking-tight">
            Technology & Expertise
          </h2>
          <div className="mt-6 h-1 w-16 bg-gradient-to-r from-brand-blue-light to-brand-green rounded-full mx-auto" />
          <p className="mt-8 text-xl text-gray-600 leading-relaxed">
            A comprehensive suite of optimization technologies and methodologies
            to tackle your most complex challenges.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                variants={cardVariants}
                className={`group relative p-6 lg:p-8 bg-white rounded-2xl border ${cap.borderColor} ${cap.hoverBorder} hover:shadow-xl transition-all duration-300 cursor-default`}
              >
                <div
                  className={`w-14 h-14 rounded-xl ${cap.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-7 h-7 ${cap.color}`} />
                </div>

                <h3 className="text-xl font-semibold text-brand-blue mb-3 group-hover:text-brand-blue-light transition-colors duration-300">
                  {cap.title}
                </h3>

                <p className="text-base text-gray-500 leading-relaxed">
                  {cap.description}
                </p>

                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-brand-blue-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
