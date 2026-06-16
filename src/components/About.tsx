"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, TrendingUp, BarChart3 } from "lucide-react";

const highlights = [
  {
    icon: Lightbulb,
    title: "Mathematical Optimization",
    description:
      "Advanced algorithms to find optimal solutions in complex constrained environments.",
  },
  {
    icon: Target,
    title: "Operations Research",
    description:
      "Scientific approach to decision-making using quantitative analysis and modeling.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Insights",
    description:
      "Transform raw operational data into actionable intelligence for better decisions.",
  },
  {
    icon: BarChart3,
    title: "Decision Support",
    description:
      "Interactive systems that combine AI, simulation, and optimization for real-time planning.",
  },
];

export default function About() {
  return (
    <section id="solutions" className="relative py-24 lg:py-32 bg-white">
      <div className="absolute inset-0 bg-dot-pattern opacity-50" />

      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-blue-light mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue tracking-tight">
            Optimization Expertise Across Industries
          </h2>
          <div className="mt-6 h-1 w-16 bg-gradient-to-r from-brand-blue-light to-brand-green-light rounded-full mx-auto" />
          <p className="mt-8 text-xl text-gray-600 leading-relaxed">
            Our team specializes in mathematical optimization, operations research,
            energy systems, scheduling, resource allocation, and decision support
            systems. We transform complex operational challenges into intelligent,
            data-driven solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 lg:p-8 bg-white rounded-2xl border border-gray-100 hover:border-brand-blue-light/20 hover:shadow-xl hover:shadow-brand-blue-light/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center mb-5 group-hover:bg-brand-blue-light/10 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-brand-blue-light" />
                </div>
                <h3 className="text-xl font-semibold text-brand-blue mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
