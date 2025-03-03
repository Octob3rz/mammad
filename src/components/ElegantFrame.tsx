
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ElegantFrameProps {
  src: string;
  alt: string;
  className?: string;
}

const ElegantFrame = ({ src, alt, className }: ElegantFrameProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative rounded-lg overflow-hidden",
        "before:absolute before:inset-0 before:border-2 before:border-[#D4AF37]/20 before:rounded-lg before:z-20",
        "after:absolute after:inset-0 after:m-3 after:border after:border-[#D4AF37]/10 after:rounded-lg after:z-10",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-[#F1F1F1]/5 to-transparent opacity-50 mix-blend-overlay z-10" />
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10" />
    </motion.div>
  );
};

export default ElegantFrame;
