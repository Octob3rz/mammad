
import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "../context/LocaleContext";
import { Mail, MapPin, Phone, Instagram, Send } from "lucide-react";

const Footer = () => {
  const { t } = useLocale();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-2xl font-playfair font-semibold mb-6">{t('footer.touch')}</h4>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span>Istanbul, Turkey</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-2xl font-playfair font-semibold mb-6">{t('footer.connect')}</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mamed777official/" className="hover:text-pink-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="" className="hover:text-blue-400 transition-colors">
                <Send classname="w-6 h-6" />
              </a>
              <a href="mailto:mr.mamed702@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://wa.me/+971581292767" className="hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} MAMMAD MAMATOV. {t('footer.rights')}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
