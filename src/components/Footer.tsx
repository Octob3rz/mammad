
import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
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
            <h4 className="text-2xl font-playfair font-semibold mb-6">Get in Touch</h4>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <span>viacheslavmamatov@example.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <span>+905356765899</span>
            </div>
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
            <h4 className="text-2xl font-playfair font-semibold mb-6">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/viacheslav-mamatov-61169032b/" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/viacheslav-mamatov-61169032b/" className="hover:text-pink-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 md:col-span-2"
          >
            <h4 className="text-2xl font-playfair font-semibold mb-6">About</h4>
            <p className="text-gray-400 leading-relaxed">
              With years of experience in entrepreneurship and business development, 
              I bring a wealth of knowledge and expertise to help businesses thrive 
              in today's competitive landscape.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} MAMMAD MAMATOV. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
