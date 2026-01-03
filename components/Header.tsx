"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, User, Stethoscope, Building2, MessageSquare, PhoneCall } from "lucide-react";
import CTAButton from "./CTAButton";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about", icon: User },
    { label: "Services", href: "#services", icon: Stethoscope },
    { label: "Hospitals", href: "#hospitals", icon: Building2 },
    { label: "Testimonials", href: "#testimonials", icon: MessageSquare },
    { label: "Contact", href: "#contact", icon: PhoneCall },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-20">
          {/* Left side - Logo and Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#06b6d4] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-xl lg:text-2xl font-bold text-[#06b6d4] hover:text-[#0891b2] transition-colors text-left leading-tight"
              >
                Dr. Dinesh Jain
              </button>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex items-center gap-8"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-700 hover:text-[#06b6d4] font-medium transition-colors text-base lg:text-lg"
              >
                {link.label}
              </button>
            ))}
          </motion.div>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <CTAButton href="tel:+919822054142" className="text-xs px-4 py-2">
              Book Appointment
            </CTAButton>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute left-0 right-0 top-full bg-gradient-to-b from-white via-gray-50/50 to-white backdrop-blur-lg shadow-xl rounded-b-xl border border-gray-200/50"
          >
            <div className="p-6 space-y-2">
              {navLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <div key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="w-full flex items-center gap-4 text-left text-gray-700 hover:text-[#06b6d4] hover:bg-[#06b6d4]/5 font-medium transition-all duration-200 py-3 px-4 rounded-lg group"
                    >
                      <IconComponent className="w-5 h-5 text-[#06b6d4] group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-base">{link.label}</span>
                    </button>
                    {index < navLinks.length - 1 && (
                      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-4 my-1"></div>
                    )}
                  </div>
                );
              })}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <CTAButton
                  href="tel:+919822054142"
                  className="w-full justify-center py-3 text-base font-semibold shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  Book Appointment
                </CTAButton>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
