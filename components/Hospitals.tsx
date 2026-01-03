"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { Building2, Award, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const hospitals = [
  {
    name: "Ruby Hall Clinic",
    location: "Wanowrie, Pune",
    image: "/images/hospital-carousel/Ruby Hall Clinic Dermatologists Pune.avif",
    description: (
      <ul className="space-y-2 list-disc list-inside">
        <li>A prestigious multispecialty hospital with <strong>over 50 years</strong> of healthcare excellence, evolving from a modest nursing home in <strong>1959</strong> to a <strong>130-bed</strong> advanced facility.</li>
        <li>Nationally accredited with <strong>9 NABH and NABL certifications</strong>, featuring state-of-the-art infrastructure including ICUs, operation theatres, and specialized departments.</li>
        <li>Holds the distinction of being <strong>Pune's first hospital with a Green OT certification</strong>, catering to <strong>over 30,000 inpatients and 1.2 lakh outpatients</strong> yearly.</li>
      </ul>
    ),
    highlight: "9 NABH & NABL Certifications",
  },
  {
    name: "Siddharth Hospital",
    location: "Market Yard, Pune",
    image: "/images/hospital-carousel/Sethiya Hospital Pune General Physician.webp",
    description: (
      <ul className="space-y-2 list-disc list-inside">
        <li>Established in <strong>1990</strong> by Dr. Vijay Setiya, serving Pune for <strong>over three decades</strong> as a premier multidisciplinary healthcare facility.</li>
        <li>Holds the distinction of establishing <strong>one of the city's first dedicated Laparoscopy departments</strong>, pioneering advanced minimally invasive procedures.</li>
        <li>Today, the <strong>25-bed</strong> hospital continues its legacy of innovation with complete endoscopic units and modern infrastructure.</li>
      </ul>
    ),
    highlight: "Pioneer in Laparoscopy",
  },
];

export default function Hospitals() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % hospitals.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + hospitals.length) % hospitals.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Section id="hospitals" className="bg-gradient-to-br from-gray-50 to-white">
      <div className="text-center mb-8 lg:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4"
        >
          Hospital <span className="font-semibold text-[#06b6d4]">Affiliations</span>
        </motion.h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#06b6d4] to-[#d97706] mx-auto mb-6"></div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto font-light"
        >
          Dr. Dinesh Jain is associated with Pune's most prestigious hospitals, ensuring access to world-class facilities and comprehensive care.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {hospitals.map((hospital, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full flex-shrink-0 relative"
              >
                {/* Background Image */}
                <div className="relative h-[32rem] lg:h-[600px]">
                  <Image
                    src={hospital.image}
                    alt={hospital.name}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    unoptimized
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/50"></div>
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-4 lg:p-12 flex flex-col justify-end text-white">
                    <div className="max-w-lg lg:max-w-2xl">
                      <h3 className="text-2xl lg:text-4xl font-bold mb-2">
                        {hospital.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <MapPin className="w-5 h-5 text-[#06b6d4]" />
                        <span className="text-lg font-medium">{hospital.location}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-[#d97706]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Award className="w-4 h-4" />
                        <span>{hospital.highlight}</span>
                      </div>
                      <div className="text-gray-100 leading-relaxed text-sm lg:text-base max-w-sm lg:max-w-xl">
                        {hospital.description}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows - Desktop only */}
          <button
            onClick={prevSlide}
            className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 hover:text-gray-200 transition-all duration-300 hover:scale-110"
            aria-label="Previous hospital"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 hover:text-gray-200 transition-all duration-300 hover:scale-110"
            aria-label="Next hospital"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {hospitals.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to hospital ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

