
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="../public/1.jpeg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">MAMMAT MAMATOV</h1>
        <h3 className="text-xl md:text-2xl max-w-2xl mx-auto">Innovator. Entrepreneur. Visionary.
        </h3>
      </motion.div>
    </div>
  );
};

export default Hero;
