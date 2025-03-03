
import React from "react";
import { motion } from "framer-motion";
import { User, Award, Rocket, Handshake } from "lucide-react";
import { useLocale } from "../context/LocaleContext";

const Achievements = () => {
  const { t } = useLocale();

  const achievements = [
    { 
      number: "15+", 
      text: t('achievements.experience'), 
      icon: <User size={32} className="text-violet-deep mx-auto mb-4" /> 
    },
    { 
      number: "5+", 
      text: t('achievements.projects'), 
      icon: <Rocket size={32} className="text-violet-deep mx-auto mb-4" /> 
    },
    { 
      number: "1M+", 
      text: t('achievements.revenue'), 
      icon: <Award size={32} className="text-violet-deep mx-auto mb-4" /> 
    },
    { 
      number: "100+", 
      text: t('achievements.clients'), 
      icon: <Handshake size={32} className="text-violet-deep mx-auto mb-4" /> 
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="pt-20 pb-10"
    >
      <div className="flex justify-center mb-10">
        <Award size={48} className="text-violet-deep" strokeWidth={2.5} />
      </div>
      <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-violet-light text-shadow-violet">
        {t('achievements.title')}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-violet-deep/20 hover:border-violet-bright/40 glow-violet"
          >
            {item.icon}
            <h3 className="text-4xl font-playfair font-bold text-violet-deep mb-2">{item.number}</h3>
            <p className="font-montserrat text-violet-bright/80">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Achievements;
