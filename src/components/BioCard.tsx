
import React from "react";
import { motion } from "framer-motion";
import ElegantFrame from "./ElegantFrame";

interface BioCardProps {
  title: string;
  content: string;
  imageSrc?: string;
  imagePosition?: 'left' | 'right';
}

const BioCard = ({ title, content, imageSrc, imagePosition = 'left' }: BioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
        imagePosition === 'right' ? 'md:-translate-x-12' : 'md:translate-x-12'
      }`}
    >
      {/* Text Content */}
      <div className={`p-8 rounded-2xl bg-gradient-to-b from-white to-gray-50 
        shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] 
        transition-all duration-300 border border-[#D4AF37]/10 z-10
        ${imagePosition === 'right' ? 'md:order-1' : 'md:order-2'}`}
      >
        <h3 className="text-2xl font-playfair font-semibold mb-4 text-[#221F26]">{title}</h3>
        <p className="font-lora text-[#555555] leading-relaxed tracking-wide">{content}</p>
      </div>

      {/* Image with Elegant Frame */}
      {imageSrc && (
        <div className={`md:-mt-12 md:-mb-12 z-0 ${imagePosition === 'right' ? 'md:order-2' : 'md:order-1'}`}>
          <ElegantFrame 
            src={imageSrc} 
            alt={title} 
            className="h-[400px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]" 
          />
        </div>
      )}
    </motion.div>
  );
};

export default BioCard;
