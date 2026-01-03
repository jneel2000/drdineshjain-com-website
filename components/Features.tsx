"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import {
  Award,
  Stethoscope,
  GraduationCap,
  Heart,
  Shield,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "30+ Years Experience",
    description: "Practicing since 1994 with over 25,000 successful surgeries, demonstrating unmatched expertise and reliability.",
  },
  {
    icon: Stethoscope,
    title: "State-of-the-Art Equipment",
    description: "Utilizing the latest technology for laparoscopic and laser surgeries, ensuring precision and minimal invasiveness.",
  },
  {
    icon: GraduationCap,
    title: "International Training",
    description: "Fellowships from University of Adelaide, Australia and South Korea, bringing world-class techniques to Pune.",
  },
  {
    icon: Heart,
    title: "Transparent Counseling",
    description: "Comprehensive preoperative counseling with honest opinions and full transparency, ensuring informed decisions.",
  },
  {
    icon: Users,
    title: "Dedicated Post-Operative Care",
    description: "Exceptional postoperative support ensuring complete patient satisfaction and smooth recovery.",
  },
  {
    icon: Shield,
    title: "Patient Safety First",
    description: "Prioritizing patient safety above all, with high-quality treatment tailored to individual needs.",
  },
];

export default function Features() {
  return (
    <Section className="bg-white min-h-screen flex items-center py-8 lg:py-12">
      <div className="w-full">
        <div className="text-center mb-6 lg:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-2 lg:mb-3"
          >
            Why Choose <span className="font-semibold text-[#06b6d4]">Dr. Dinesh Jain</span>
          </motion.h2>
          <div className="w-12 lg:w-16 h-1 bg-gradient-to-r from-[#06b6d4] to-[#d97706] mx-auto mb-3 lg:mb-4"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto font-light px-4"
          >
            Excellence in surgical care backed by decades of experience, international training, and unwavering commitment to patient well-being.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-4 sm:p-5 lg:p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group card-hover"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#06b6d4]/10 to-[#0891b2]/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:from-[#06b6d4]/20 group-hover:to-[#0891b2]/20 transition-all duration-300">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#06b6d4] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

