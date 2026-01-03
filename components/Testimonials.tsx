"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "Words are not enough to describe his brilliance in his field. He is hugely experienced and amazingly talented. I was in deep trouble as I had an infection in my stomach since last April. I consulted a few doctors in Pune but was not able to recover. I came to know about him from my manager and decided to visit his clinic. He is so down to earth in attitude and behaves very politely. Gives you proper time and with exact medication.",
    author: "Alok Raj",
  },
  {
    rating: 5,
    text: "Very honest practitioner. Recommends treatment which is patient-friendly and cost-effective as well. Apart from his specialization, if I have any other health-related problem then also he helps me by suggesting a specialized doctor for that problem. Those doctors are also like him only good and very honest.",
    author: "Satyabhama Pansare",
  },
  {
    rating: 5,
    text: "Dr. Dinesh Jain is a very experienced and knowledgeable professional while being extremely polite, cordial, and considerate as a human being. He is quite positive and encouraging which is like half the battle won for the patients in the journey of recovery.",
    author: "Anurag Jain",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-white">
      <div className="text-center mb-12 lg:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4"
        >
          Patient <span className="font-semibold text-[#06b6d4]">Testimonials</span>
        </motion.h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#06b6d4] to-[#d97706] mx-auto mb-6"></div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto font-light"
        >
          Real experiences from patients who have trusted Dr. Dinesh Jain with their surgical care.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative"
          >
            <Quote className="w-8 h-8 text-[#06b6d4]/20 absolute top-6 right-6" />
            
            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#d97706] text-[#d97706]"
                />
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed font-light mb-4 relative z-10">
              "{testimonial.text}"
            </p>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-gray-900 font-semibold text-sm">
                — {testimonial.author}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Google Reviews CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-12"
      >
        <p className="text-gray-600 mb-4 font-light">
          Read more reviews on Google
        </p>
        <a
          href="https://share.google/fhFvxs0ukYDUigSHt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#06b6d4] hover:text-[#0891b2] font-medium transition-colors"
        >
          View All Reviews
          <Star className="w-4 h-4 fill-[#d97706] text-[#d97706]" />
        </a>
      </motion.div>
    </Section>
  );
}

