"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, TrendingUp, Building2 } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "30%+",
    label: "Planning Time Reduction",
    description:
      "Dramatically reduce the time required for complex operational planning cycles.",
    color: "text-brand-blue-light",
    bgColor: "bg-brand-blue-light/5",
  },
  {
    icon: DollarSign,
    value: "20%+",
    label: "Operational Cost Savings",
    description:
      "Significant cost reductions through optimized resource allocation and scheduling.",
    color: "text-brand-green",
    bgColor: "bg-brand-green/5",
  },
  {
    icon: TrendingUp,
    value: "10x",
    label: "Faster Decision-Making",
    description:
      "Real-time optimization engines that deliver decisions in minutes, not days.",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: Building2,
    value: "99.9%",
    label: "Scalable Enterprise Solutions",
    description:
      "Enterprise-grade platforms designed to handle the most demanding operational scales.",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue-light/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-green mb-4">
            Why AxiGrid
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue tracking-tight">
            Measurable Impact, Proven Results
          </h2>
          <div className="mt-6 h-1 w-16 bg-gradient-to-r from-brand-green to-brand-blue-light rounded-full mx-auto" />
          <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Our optimization solutions deliver tangible, quantifiable improvements
            across every dimension of your operations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative group"
              >
                <div className="relative p-6 lg:p-8 bg-white rounded-2xl border border-gray-100 text-center hover:border-gray-200 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl ${stat.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>

                  <div className="text-5xl lg:text-6xl font-extrabold text-brand-blue mb-2 tracking-tight">
                    {stat.value}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-700 mb-3">
                    {stat.label}
                  </h3>

                  <p className="text-base text-gray-500 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-600 mb-6">
            Ready to see what optimization can do for your organization?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-lg font-semibold text-white bg-brand-blue rounded-lg hover:bg-brand-blue/90 transition-all duration-200 shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/30 hover:-translate-y-0.5"
          >
            Start the Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
