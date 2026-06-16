"use client";

import { motion } from "framer-motion";
import {
  Package,
  Zap,
  Bus,
  Factory,
  AlertCircle,
  Target,
} from "lucide-react";

const industries = [
  {
    id: "logistics",
    title: "Logistics",
    icon: Package,
    color: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50",
    iconColor: "text-blue-600",
    challenges: [
      "Time-intensive planning driven by complex and interdependent constraints",
      "Direct correlation between planning precision and cost performance",
    ],
    approach: [
      "Enabling operational planning that integrates multiple interrelated constraints",
      "Supporting decision-making that balances cost efficiency with CO\u2082 emissions reduction",
    ],
  },
  {
    id: "energy",
    title: "Energy",
    icon: Zap,
    color: "from-emerald-500 to-emerald-600",
    bgLight: "bg-emerald-50",
    iconColor: "text-emerald-600",
    challenges: [
      "High planning burden driven by complex interdependencies across supply-demand balance, generation assets, and operational constraints",
      "Significant impact of decision quality on cost performance and supply stability",
    ],
    approach: [
      "Enabling generation and operational planning that fully incorporates real-world constraints",
      "Supporting rapid, data-driven decision-making to ensure stable and resilient operations",
    ],
  },
  {
    id: "transportation",
    title: "Transportation",
    icon: Bus,
    color: "from-blue-500 to-emerald-500",
    bgLight: "bg-indigo-50",
    iconColor: "text-indigo-600",
    challenges: [
      "Operational planning complexity driven by numerous and interdependent constraints",
      "Overreliance on institutional knowledge and experienced specialists in bus and rail operations",
    ],
    approach: [
      "Structuring operational constraints and formalizing planning logic to enhance transparency",
      "Enabling reproducible, scalable timetable and operational planning",
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    color: "from-emerald-500 to-blue-500",
    bgLight: "bg-amber-50",
    iconColor: "text-amber-600",
    challenges: [
      "Frequent re-planning driven by volatility in orders and delivery requirements",
      "Heavy reliance on individual expertise for time-intensive coordination and adjustments",
    ],
    approach: [
      "Enabling production and utility planning designed to accommodate demand variability",
      "Reducing planning burden to allow organizations to focus on higher-value strategic activities",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative py-24 lg:py-32 bg-gray-50/80"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-green mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue tracking-tight">
            Transforming Complex Operations
          </h2>
          <div className="mt-6 h-1 w-16 bg-gradient-to-r from-brand-green to-brand-blue-light rounded-full mx-auto" />
          <p className="mt-8 text-xl text-gray-600 leading-relaxed">
            Deep domain expertise across critical industries where optimization
            drives measurable impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300"
              >
                <div className="p-6 lg:p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl ${industry.bgLight} flex items-center justify-center shrink-0`}
                    >
                      <Icon className={`w-7 h-7 ${industry.iconColor}`} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-3xl font-bold text-brand-blue mb-1">
                        {industry.title}
                      </h3>
                      <span className="text-base text-gray-400">
                        Industry Solutions
                      </span>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <AlertCircle className="w-4 h-4 text-red-400" />
                        <h4 className="text-base font-semibold text-gray-700 uppercase tracking-wider">
                          Challenges
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {industry.challenges.map((c, ci) => (
                          <li
                            key={ci}
                            className="flex items-start gap-2.5 text-base text-gray-500 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-red-300 mt-2 shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-4 h-4 text-brand-green" />
                        <h4 className="text-base font-semibold text-gray-700 uppercase tracking-wider">
                          Our Approach
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {industry.approach.map((a, ai) => (
                          <li
                            key={ai}
                            className="flex items-start gap-2.5 text-base text-gray-500 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className={`h-1.5 bg-gradient-to-r ${industry.color} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
