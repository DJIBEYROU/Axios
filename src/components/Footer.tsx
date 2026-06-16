"use client";

import { Linkedin, Mail, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-brand-blue text-white">
      {/* Top border gradient */}
      <div className="h-1 bg-gradient-to-r from-brand-blue-light via-brand-green-light to-brand-blue-light" />

      <div className="section-container py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" className="inline-block text-2xl font-extrabold tracking-tight mb-4">
              <span className="text-white">Axi</span>
              <span className="text-brand-green-light">Grid</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Optimization Intelligence for Complex Decisions. Transforming
              operations across energy, transportation, logistics, and
              manufacturing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-5">
              Connect
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@axigrid.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={16} className="text-brand-green-light" />
                contact@axigrid.com
              </a>
              <a
                href="https://linkedin.com/company/axigrid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={16} className="text-brand-blue-light" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AxiGrid. All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
