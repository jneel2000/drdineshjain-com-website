"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = "", id }: SectionProps) {
  // Check if className includes min-h-screen to avoid double padding
  const hasMinHeight = className.includes("min-h-screen");
  const paddingClass = hasMinHeight ? "" : "py-16 lg:py-24";
  
  return (
    <section
      id={id}
      className={`relative ${paddingClass} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        {children}
      </motion.div>
    </section>
  );
}

