
import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "../context/LocaleContext";

const Hero = () => {
  const { t, locale } = useLocale();

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/1.jpeg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`relative text-center text-white px-4 ${locale === 'ar' ? 'rtl' : 'ltr'}`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair text-shadow-violet">{t('hero.title')}</h1>
        <h3 className="text-xl md:text-2xl max-w-2xl mx-auto font-lora text-violet-light">
          {t('hero.subtitle')}
        </h3>
      </motion.div>
    </div>
  );
};

export default Hero;
