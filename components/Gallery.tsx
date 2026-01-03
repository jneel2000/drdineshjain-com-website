"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const galleryImages = [
  {
    src: "/images/gallery/1.jpeg",
    alt: "Medical facility photo 1",
    title: "Our Medical Facility"
  },
  {
    src: "/images/gallery/2.jpg",
    alt: "Medical facility photo 2",
    title: "Patient Care Environment"
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-cycle through images every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  return (
    <Section id="gallery" className="bg-gray-50">
      <div className="text-center mb-12 lg:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4"
        >
          Our <span className="font-semibold text-[#06b6d4]">Gallery</span>
        </motion.h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#06b6d4] to-[#d97706] mx-auto mb-6"></div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto font-light"
        >
          Take a look at our medical facility and patient care moments.
        </motion.p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Main Image Container */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl shadow-2xl"
        >
          <div className="aspect-[16/10] relative">
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-white font-semibold text-xl lg:text-2xl">
                {galleryImages[currentIndex].title}
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-[#06b6d4] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
