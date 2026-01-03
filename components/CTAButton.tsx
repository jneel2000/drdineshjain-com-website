"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  showIcon?: boolean;
}

export default function CTAButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  showIcon = true,
}: CTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-sm lg:text-base shadow-xl transition-all duration-300 group";
  
  const variantClasses = variant === "primary"
    ? "bg-gradient-to-r from-[#06b6d4] to-[#0891b2] hover:from-[#0891b2] hover:to-[#0e7490] text-white"
    : "bg-white text-[#06b6d4] border-2 border-[#06b6d4] hover:bg-[#06b6d4] hover:text-white";

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      if (href.startsWith("tel:")) {
        window.location.href = href;
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {showIcon && <Phone className="w-4 h-4 lg:w-5 lg:h-5" />}
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
    </motion.button>
  );
}

