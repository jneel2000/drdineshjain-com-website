"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { useState } from "react";
import {
  Activity,
  Camera,
  Zap,
  Stethoscope,
  Scissors,
  ChevronDown,
  Heart,
} from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Laparoscopic Surgery",
    subtitle: "Minimally Invasive Surgery",
    description: "Advanced laparoscopic techniques for faster recovery and minimal scarring",
    items: [
      "Gallbladder (Cholecystectomy)",
      "Appendix (Appendicectomy)",
      "Umbilical Hernia",
      "Inguinal Hernia",
      "Femoral Hernia",
      "Hiatus Hernia",
      "Incisional Hernia",
      "Achalasia Cardia",
      "Advanced Abdominal Wall Reconstruction (AWR) for complex hernias",
    ],
  },
  {
    icon: Activity,
    title: "General Surgery",
    subtitle: "Comprehensive Surgical Care",
    description: "Complete range of general surgical procedures",
    items: [
      "Digestive system surgeries",
      "Hernia repairs",
      "Hydrocele",
      "Fissure & Complex Fistulas",
      "Colorectal surgeries",
      "Rectal prolapse repair",
      "Abdominal cancer surgeries",
      "Varicocele management",
      "Abscess drainage",
      "Vasectomy",
      "Pilonidal sinus surgery",
      "Thyroid surgeries",
      "Breast surgeries",
      "Varicose veins treatment",
      "Testicular surgeries",
      "Pediatric hernia surgeries",
      "Diabetic foot management",
      "Perianal abscess drainage",
    ],
  },
  {
    icon: Camera,
    title: "Video Endoscopy",
    subtitle: "Diagnostic & Therapeutic",
    description: "State-of-the-art endoscopic procedures for accurate diagnosis and treatment",
    items: [
      "Gastroscopy",
      "Colonoscopy",
      "ERCP (Endoscopic Retrograde Cholangiopancreatography)",
    ],
  },
  {
    icon: Zap,
    title: "Laser Surgeries",
    subtitle: "Advanced Laser Treatment",
    description: "Precision laser procedures for optimal outcomes",
    items: [
      "Piles (Hemorrhoids)",
      "Fissures",
      "Fistulas",
      "Pilonidal Sinus",
      "Varicose veins",
    ],
  },
  {
    icon: Stethoscope,
    title: "Piles Surgery",
    subtitle: "Multiple Techniques Available",
    description: "Comprehensive treatment options for piles",
    items: [
      "MIPH Stapler Piles Surgery",
      "Open Piles Surgery",
      "Injection Sclerotherapy",
      "Banding Procedure",
      "Laser Surgery",
    ],
  },
  {
    icon: Scissors,
    title: "Minor Surgeries",
    subtitle: "Outpatient Procedures",
    description: "Quick and efficient minor surgical procedures",
    items: [
      "Ear lobe repairs",
      "Circumcision",
      "Prepucioplasty",
      "Biopsies (Breast, Liver, Lymph node)",
      "Lipoma removal",
      "Corn removal",
      "Ingrown toenail surgery",
      "Sebaceous cyst removal",
    ],
  },
];

export default function Services() {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  return (
    <Section id="services" className="bg-white">
      <div className="text-center mb-12 lg:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4"
        >
          Our <span className="font-semibold text-[#06b6d4]">Services</span>
        </motion.h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#06b6d4] to-[#d97706] mx-auto mb-6"></div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto font-light"
        >
          Comprehensive surgical care covering a wide range of procedures with advanced techniques and personalized treatment plans.
        </motion.p>
      </div>

      {/* Full-width featured services card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gradient-to-r from-[#06b6d4]/5 to-[#d97706]/5 rounded-3xl p-6 lg:p-8 mb-8 lg:mb-12 border border-gray-100"
      >
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#06b6d4] to-[#d97706] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Heart className="w-4 h-4" />
            New Advanced Procedures
          </div>
          <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">
            Latest Techniques & Treatments
          </h3>
          <p className="text-gray-600 font-light text-sm lg:text-base max-w-2xl mx-auto">
            Cutting-edge surgical procedures using the most advanced technology for optimal patient outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">Laser Surgeries</h4>
            <ul className="text-xs lg:text-sm text-gray-600 space-y-1">
              <li>• Piles, fissure and fistulas</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">Laser Pilonidal</h4>
            <ul className="text-xs lg:text-sm text-gray-600 space-y-1">
              <li>• Sinus surgery</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">AWR Surgeries</h4>
            <ul className="text-xs lg:text-sm text-gray-600 space-y-1">
              <li>• Inguinal hernias</li>
              <li>• Incisional hernias</li>
              <li>• Ventral complex hernias</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">Stapler Surgery</h4>
            <ul className="text-xs lg:text-sm text-gray-600 space-y-1">
              <li>• Circumcision surgery</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <button
              onClick={() => {
                const rowIndex = Math.floor(index / 2);
                setExpandedRows(prev => {
                  const newSet = new Set(prev);
                  if (newSet.has(rowIndex)) {
                    newSet.delete(rowIndex);
                  } else {
                    newSet.add(rowIndex);
                  }
                  return newSet;
                });
              }}
              className="w-full p-6 lg:p-8 text-left"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#06b6d4]/10 to-[#0891b2]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 lg:w-8 lg:h-8 text-[#06b6d4]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#06b6d4] font-medium mb-2">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                    expandedRows.has(Math.floor(index / 2)) ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {expandedRows.has(Math.floor(index / 2)) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-gray-100"
              >
                <ul className="space-y-2 mt-4">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <span className="text-[#06b6d4] mt-1">•</span>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

