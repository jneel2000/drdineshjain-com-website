"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "./Section";
import { GraduationCap, Award, BookOpen, Globe } from "lucide-react";

export default function About() {
  return (
    <Section id="about" className="bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-50 min-h-screen flex items-center py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-4 sm:mb-5 lg:mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-1 sm:mb-2"
          >
            About <span className="font-semibold text-[#06b6d4]">Dr. Dinesh Jain</span>
          </motion.h2>
          <div className="w-10 sm:w-12 lg:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-[#06b6d4] to-[#d97706] mx-auto mb-2 sm:mb-3"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 lg:p-6 shadow-xl border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 sm:gap-5 lg:gap-6 lg:items-center">
            {/* Left Panel - Content */}
            <div className="order-2 lg:order-1 space-y-2 sm:space-y-2.5 text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">
              <p className="text-sm sm:text-base font-medium text-gray-900">
                Dr. Dinesh Jain is a distinguished general and laparoscopic surgeon with over 30 years of experience, dedicated to providing exceptional surgical care in Pune, Maharashtra.
              </p>

              {/* Education */}
              <div className="pt-2 sm:pt-2.5 border-t border-gray-200">
                <div className="flex items-start gap-2 sm:gap-3">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-[#06b6d4] flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-0.5 sm:mb-1">Education</h3>
                    <ul className="space-y-0.5 sm:space-y-1">
                      <li>
                        <span className="font-medium">MBBS (1990)</span> - B.J. Medical College, Pune
                      </li>
                      <li>
                        <span className="font-medium">M.S. General Surgery (1993)</span> - B.J. Medical College, Pune
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* International Training & Fellowships */}
              <div className="pt-2 sm:pt-2.5 border-t border-gray-200">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#06b6d4] flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-0.5 sm:mb-1">International Training & Fellowships</h3>
                    <ul className="space-y-0.5 sm:space-y-1">
                      <li>
                        <span className="font-medium">Fellowship in Upper G.I. Surgery</span> - University of Adelaide, Australia
                      </li>
                      <li>
                        <span className="font-medium">Fellowship in Colorectal Surgery</span> - South Korea
                      </li>
                      <li>
                        Specialized training in endoscopy, laparoscopic surgery, and piles stapler surgery across India, Australia, South Korea, Malaysia, and Singapore
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Academic Contributions */}
              <div className="pt-2 sm:pt-2.5 border-t border-gray-200">
                <div className="flex items-start gap-2 sm:gap-3">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#06b6d4] flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-0.5 sm:mb-1">Academic Contributions</h3>
                    <p>
                      Postgraduate teacher for <span className="font-medium">DNB Surgery</span>, contributing to the education and training of future surgeons.
                    </p>
                  </div>
                </div>
              </div>

              {/* Recent Advanced Training */}
              <div className="pt-2 sm:pt-2.5 border-t border-gray-200">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#d97706] flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-0.5 sm:mb-1">Recent Advanced Training</h3>
                    <p>
                      Recent advanced training in <span className="font-medium">Abdominal Wall Reconstruction (AWR)</span> techniques for complex abdominal hernias, ensuring patients receive the most advanced treatment options available.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 sm:pt-2.5 border-t border-gray-200">
                <p className="text-gray-700 font-light text-xs sm:text-sm">
                  With a commitment to continuous learning and excellence, Dr. Jain combines decades of experience with cutting-edge techniques to provide the highest quality surgical care to his patients.
                </p>
              </div>
            </div>

            {/* Right Panel - Image */}
            <div className="order-1 lg:order-2 lg:sticky lg:top-20 lg:flex lg:items-center lg:h-full">
              <div className="relative w-full aspect-square max-w-xs mx-auto lg:max-w-none rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/AboutSectionImage.jpeg"
                  alt="Dr. Dinesh Jain"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

