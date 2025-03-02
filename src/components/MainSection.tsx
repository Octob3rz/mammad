
import React from "react";
import { motion } from "framer-motion";
import { User, Rocket } from "lucide-react";
import BioCard from "./BioCard";
import Achievements from "./Achievements";
import Journey from "./Journey";
import { useLocale } from "../context/LocaleContext";

const MainSection = () => {
  const { t } = useLocale();

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 relative z-10">
      <div className="space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <User size={48} className="text-violet-deep" strokeWidth={2.5} />
        </motion.div>
        
        <BioCard
          title={t('about.title')}
          content={t('about.content')}
          imageSrc="/5.jpeg"
          imagePosition="right"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center my-12"
        >
          <Rocket size={48} className="text-violet-deep" strokeWidth={2.5} />
        </motion.div>
        
        <BioCard
          title={t('vision.title')}
          content={t('vision.content')}
          imageSrc="/2.jpeg"
          imagePosition="left"
        />
      </div>

      {/* Achievements Section */}
      <Achievements />

      {/* Journey Section with Masonry Grid */}
      <Journey />
    </section>
  );
};

export default MainSection;
