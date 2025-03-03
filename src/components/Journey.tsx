
import React from "react";
import { motion } from "framer-motion";
import { Building, Globe, Handshake } from "lucide-react";
import { useLocale } from "../context/LocaleContext";

const Journey = () => {
  const { t } = useLocale();

  // Images data for the masonry grid
  const images = [
    {
      id: 1,
      src: "/4.jpeg",
    },
    {
      id: 2,
      src: "/3.jpeg",
    },
  ];

  return (
    <div className="py-20" id="journey">
      {/* Title for the masonry section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-playfair font-bold text-violet-light text-shadow-violet">
          {t('journey.title')}
        </h2>
        <p className="mt-4 text-violet-light max-w-2xl mx-auto font-lora">
          {t('journey.subtitle')}
        </p>
      </motion.div>
      
      {/* Masonry grid with mixed content */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {/* First image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="break-inside-avoid mb-8"
        >
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-full object-cover rounded-lg shadow-md transform transition-transform duration-700 hover:scale-105"
          />
        </motion.div>
        
        {/* Professional Journey Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="break-inside-avoid mb-8"
        >
          <div className="p-8 gradient-violet rounded-2xl shadow-lg">
            <Building size={32} className="text-white mb-4" />
            <h3 className="text-xl font-playfair font-semibold mb-4 text-white">{t('meat.title')}</h3>
            <p className="font-lora text-white/90 leading-relaxed tracking-wide">{t('meat.content')}</p>
          </div>
        </motion.div>
        
        {/* Second image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="break-inside-avoid mb-8"
        >
          <img
            src={images[1].src}
            alt={images[1].alt}
            className="w-full h-full object-cover rounded-lg shadow-md transform transition-transform duration-700 hover:scale-105"
          />
        </motion.div>
        
        {/* Restaurant Owner Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="break-inside-avoid mb-8"
        >
          <div className="p-8 gradient-violet-light rounded-2xl shadow-lg">
            <Building size={32} className="text-white mb-4" />
            <h3 className="text-xl font-playfair font-semibold mb-4 text-white">{t('restaurant.title')}</h3>
            <p className="font-lora text-white/90 leading-relaxed tracking-wide">{t('restaurant.content')}</p>
          </div>
        </motion.div>
        
        {/* International Connections Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="break-inside-avoid mb-8"
        >
          <div className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-violet-light glow-violet">
            <Globe size={32} className="text-violet-deep mb-4" />
            <h3 className="text-xl font-playfair font-semibold mb-4 text-violet-deep">{t('connections.title')}</h3>
            <p className="font-lora text-violet-bright/80 leading-relaxed tracking-wide">{t('connections.content')}</p>
          </div>
        </motion.div>
        
        {/* Real Estate Consultant Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="break-inside-avoid mb-8"
        >
          <div className="p-8 gradient-violet rounded-2xl shadow-lg">
            <Building size={32} className="text-white mb-4" />
            <h3 className="text-xl font-playfair font-semibold mb-4 text-white">{t('realestate.title')}</h3>
            <p className="font-lora text-white/90 leading-relaxed tracking-wide">{t('realestate.content')}</p>
          </div>
        </motion.div>
        
        {/* Collaborative Growth Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="break-inside-avoid mb-8"
        >
          <div className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-violet-bright glow-violet">
            <Handshake size={32} className="text-violet-deep mb-4" />
            <h3 className="text-xl font-playfair font-semibold mb-4 text-violet-deep">{t('growth.title')}</h3>
            <p className="font-lora text-violet-bright/80 leading-relaxed tracking-wide">{t('growth.content')}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Journey;
