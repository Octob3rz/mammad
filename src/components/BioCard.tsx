
import React from "react";
import { motion } from "framer-motion";

interface BioCardProps {
  title: string;
  content: string;
}

const BioCard = ({ title, content }: BioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 rounded-2xl bg-gradient-to-b from-white to-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] transition-all duration-300 border border-[#D4AF37]/10"
    >
      <h3 className="text-2xl font-playfair font-semibold mb-4 text-[#221F26]">{title}</h3>
      <p className="text-[#555555] leading-relaxed font-sans">{content}</p>
    </motion.div>
  );
};

export default BioCard;
