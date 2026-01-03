"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <a
                href="tel:+919822054142"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>98220 54142</span>
              </a>
              <a
                href="tel:+912024444440"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>020-24444440</span>
              </a>
              <a
                href="mailto:drdineshjainsurgery@yahoo.com"
                className="flex items-center gap-2 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">drdineshjainsurgery@yahoo.com</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Location</h3>
            <div className="flex items-start gap-2 text-gray-300">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <p className="text-sm leading-relaxed">
                Office No. 205, Sneh Ganga, 2nd Floor,<br />
                Shankarsheth Road, Swargate,<br />
                Pune 411037
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Dr. Jain
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#hospitals" className="hover:text-white transition-colors">
                  Hospital Affiliations
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Dr. Dinesh Jain. All rights reserved.
          </p>
          <p className="mt-2">
            Expert Surgical Care with Over 30 Years of Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}





