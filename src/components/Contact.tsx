"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", company: "", email: "", message: "" });
    }, 5000);
  };

  const inputClass =
    "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-light/20 focus:border-brand-blue-light transition-all duration-200 text-base";

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-blue-light mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue tracking-tight">
            Let&apos;s Discuss Your Optimization Needs
          </h2>
          <div className="mt-6 h-1 w-16 bg-gradient-to-r from-brand-blue-light to-brand-green rounded-full mx-auto" />
          <p className="mt-8 text-xl text-gray-600 leading-relaxed">
            Tell us about your challenges and we&apos;ll show you how optimization
            can transform your operations.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue-light/5 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-blue-light" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-700 mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:contact@axigrid.com"
                    className="text-gray-500 hover:text-brand-blue-light transition-colors text-base"
                  >
                    contact@axigrid.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-green/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-700 mb-1">
                    Location
                  </h4>
                  <p className="text-gray-500 text-base leading-relaxed">
                    Tokyo Innovation Base
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-brand-blue/5 to-brand-green/5 rounded-2xl border border-brand-blue-light/10">
              <h4 className="text-lg font-semibold text-brand-blue mb-2">
                Ready to optimize?
              </h4>
              <p className="text-base text-gray-500 leading-relaxed">
                Schedule a discovery call with our team to explore how
                optimization intelligence can transform your operations.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-gray-700 mb-1.5"
                >
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-base font-medium text-gray-700 mb-1.5"
                >
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="Your company"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium text-gray-700 mb-1.5"
              >
                Email <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="you@company.com"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-base font-medium text-gray-700 mb-1.5"
              >
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell us about your optimization challenges..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-lg font-semibold text-white bg-brand-green rounded-xl hover:bg-brand-green/90 transition-all duration-200 shadow-lg shadow-brand-green/25 hover:shadow-xl hover:shadow-brand-green/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
            >
              {submitted ? (
                <>
                  <CheckCircle size={18} />
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
