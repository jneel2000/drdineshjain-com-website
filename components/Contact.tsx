"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import CTAButton from "./CTAButton";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" className="bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-50">
      <div className="text-center mb-12 lg:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4"
        >
          Book Your <span className="font-semibold text-[#06b6d4]">Appointment</span>
        </motion.h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#06b6d4] to-[#d97706] mx-auto mb-6"></div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto font-light"
        >
          Get in touch with us to schedule your consultation. We're here to help you on your journey to better health.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#06b6d4]/10 to-[#0891b2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#06b6d4]" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-sm mb-1">Phone</p>
                  <a
                    href="tel:+912024444440"
                    className="text-gray-900 font-semibold text-lg hover:text-[#06b6d4] transition-colors block"
                  >
                    020-24444440
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#06b6d4]/10 to-[#0891b2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#06b6d4]" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-sm mb-1">Mobile</p>
                  <div className="space-y-1">
                    <a
                      href="tel:+919822054142"
                      className="text-gray-900 font-semibold text-lg hover:text-[#06b6d4] transition-colors block"
                    >
                      98220 54142
                    </a>
                    <a
                      href="tel:+919850054134"
                      className="text-gray-900 font-semibold text-lg hover:text-[#06b6d4] transition-colors block"
                    >
                      98500 54134
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#06b6d4]/10 to-[#0891b2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#06b6d4]" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-sm mb-1">Email</p>
                  <a
                    href="mailto:drdineshjainsurgery@yahoo.com"
                    className="text-gray-900 font-semibold text-lg hover:text-[#06b6d4] transition-colors break-all"
                  >
                    drdineshjainsurgery@yahoo.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#06b6d4]/10 to-[#0891b2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#06b6d4]" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-sm mb-1">Address</p>
                  <p className="text-gray-900 font-light leading-relaxed">
                    Office No. 205, Sneh Ganga, 2nd Floor,<br />
                    Shankarsheth Road, Swargate,<br />
                    Pune 411037
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visiting Hours */}
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#d97706]/10 to-[#f59e0b]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#d97706]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Visiting Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="font-medium text-gray-900">Monday to Saturday</p>
                  <p className="font-light">10:00 AM - 2:00 PM</p>
                  <p className="font-medium text-gray-900 mt-4">Monday to Friday</p>
                  <p className="font-light">4:00 PM - 6:00 PM (By Appointment)</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="tel:+919822054142" className="flex-1">
              Call Now
            </CTAButton>
            <CTAButton
              href="tel:+919850054134"
              variant="secondary"
              className="flex-1"
            >
              Alternative Number
            </CTAButton>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-100"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Location</h3>
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.646124603426!2d73.86051597592711!3d18.49968176981062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0165b11c1f7%3A0x7018264a8d8a2d1f!2sDR.%20DINESH%20JAIN!5e0!3m2!1sen!2sin!4v1767433494319!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Dr. Dinesh Jain Clinic Location - Swargate, Pune"
            ></iframe>
          </div>
          <p className="text-sm text-gray-500 mt-4 font-light">
            Office No. 205, Sneh Ganga, 2nd Floor, Shankarsheth Road, Swargate, Pune 411037
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

