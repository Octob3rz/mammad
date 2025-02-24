
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
      className="p-6 rounded-2xl backdrop-blur-lg bg-white/80 shadow-lg"
    >
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </motion.div>
  );
};

export default BioCard;
