"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { Building2, Award, MapPin } from "lucide-react";

const hospitals = [
  {
    name: "Ruby Hall Clinic",
    location: "Wanowrie, Pune",
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
  return (
    <Section id="hospitals" className="bg-gradient-to-br from-gray-50 to-white">
      <div className="text-center mb-12 lg:mb-16">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {hospitals.map((hospital, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group card-hover"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#06b6d4]/10 to-[#0891b2]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-[#06b6d4]/20 group-hover:to-[#0891b2]/20 transition-all duration-300">
                <Building2 className="w-6 h-6 lg:w-8 lg:h-8 text-[#06b6d4] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-1">
                  {hospital.name}
                </h3>
                <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{hospital.location}</span>
                </div>
                <div className="inline-flex items-center gap-1 bg-[#d97706]/10 text-[#d97706] px-3 py-1 rounded-full text-xs font-medium">
                  <Award className="w-3 h-3" />
                  <span>{hospital.highlight}</span>
                </div>
              </div>
            </div>
            <div className="text-gray-600 leading-relaxed font-light text-sm lg:text-base">
              {hospital.description}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

