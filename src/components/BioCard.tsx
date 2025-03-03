
import React from "react";
import { motion } from "framer-motion";

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

      {/* Image */}
      {imageSrc && (
        <div className={`md:-mt-12 md:-mb-12 z-0 ${imagePosition === 'right' ? 'md:order-2' : 'md:order-1'}`}>
          <div className="relative rounded-lg overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#F1F1F1]/5 to-transparent opacity-50 mix-blend-overlay z-10"></div>
            <img
              src={imageSrc} 
              alt={title} 
              className="w-full h-[400px] object-cover transform transition-transform duration-700 hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default BioCard;
