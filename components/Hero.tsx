"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CTAButton from "./CTAButton";
import { Award, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden pt-24 lg:pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-pattern"></div>
      </div>
      
      {/* Geometric pattern background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-pattern-geometric"></div>
        {/* Radial gradient accents */}
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-radial from-teal-100/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-radial from-cyan-100/15 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-[#06b6d4]/10 text-[#06b6d4] px-4 py-2 rounded-full font-medium text-sm mb-6"
            >
              <Award className="w-4 h-4" />
              <span>25,000+ Successful Surgeries</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-6 text-gray-900">
              Expert Surgical Care with{" "}
              <span className="font-semibold text-[#06b6d4]">Over 30 Years</span> of Excellence
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
              Specialized in laparoscopic surgery, general surgery, colorectal procedures, hernia repair, and advanced treatments for piles, fissures, and fistulas.
            </p>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#06b6d4]" />
                <span className="text-gray-700 font-medium">30+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#d97706]" />
                <span className="text-gray-700 font-medium">International Training</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <CTAButton href="tel:+919822054142" onClick={() => {}}>
                Book Appointment
              </CTAButton>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/20 to-[#d97706]/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-3xl p-4 lg:p-8 shadow-2xl overflow-hidden">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/HeroSection.jpeg"
                    alt="Dr. Dinesh Jain - Expert Surgeon"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

