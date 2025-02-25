
import React from "react";
import Hero from "../components/Hero";
import MasonryGrid from "../components/MasonryGrid";
import BioCard from "../components/BioCard";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const images = [
  {
    id: 1,
    src: "../public/5.jpeg",
    alt: "Entrepreneur working",
  },
  {
    id: 2,
    src: "../public/2.jpeg",
    alt: "Professional portrait",
  },
  {
    id: 3,
    src: "../public/3.jpeg",
    alt: "Working on laptop",
  },
  {
    id: 4,
    src: "../public/4.jpeg",
    alt: "Tech innovation",
  },
];

const achievements = [
  { number: "15+", text: "Years Experience" },
  { number: "5+", text: "Successful Projects" },
  { number: "1M+", text: "Revenue Generated" },
  { number: "100+", text: "Happy Clients" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Hero />
      
      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <BioCard
            title="About Me"
            content="Being born in Azerbaijan i cultivated dedication to my work in all aspects since i was born. In my 30s i've been thriving as a director of meet factory and later decided to open an own restaurant in the center of Baku. After that i've been living in Dubai and providing my professional guidance as a real estate agent to many influencial people. There i acquired extremely large circle of contacts that allow me to connect people from different places and unite them for one goal: develop and thrive together. 
As a visionary entrepreneur with over a decade of experience, I've dedicated my career to pushing the boundaries of entrepreneurship and creating meaningful impact through interactions with people."
          />
          <BioCard
            title="My Vision"
            content="I believe in harnessing the power of social communication to solve real-world problems and create solutions that make a difference in people's lives."
          />
        </div>
        
        <MasonryGrid images={images} />

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-20"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#D4AF37]/20 hover:border-[#D4AF37]/40"
            >
              <h3 className="text-4xl font-playfair font-bold text-[#8A898C] mb-2">{item.number}</h3>
              <p className="font-montserrat text-[#555555]">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Areas of Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-[#221F26]">Areas of Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] transition-all duration-300 transform hover:-translate-y-1 border border-[#D4AF37]/10">
              <h3 className="text-xl font-playfair font-semibold mb-4 text-[#8E9196]">BUSINESS STRATEGY</h3>
              <p className="font-lora text-[#555555] leading-relaxed tracking-wide">Developing comprehensive business strategies that drive growth and innovation.</p>
            </div>
            <div className="p-8 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] transition-all duration-300 transform hover:-translate-y-1 border border-[#D4AF37]/10">
              <h3 className="text-xl font-playfair font-semibold mb-4 text-[#8E9196]">LEADERSHIP</h3>
              <p className="font-lora text-[#555555] leading-relaxed tracking-wide">Guiding teams through physical transformations and communicational advancement.</p>
            </div>
            <div className="p-8 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] transition-all duration-300 transform hover:-translate-y-1 border border-[#D4AF37]/10">
              <h3 className="text-xl font-playfair font-semibold mb-4 text-[#8E9196]">MANAGEMENT</h3>
              <p className="font-lora text-[#555555] leading-relaxed tracking-wide">Fostering a culture of innovation and implementing cutting-edge solutions in various industries.</p>
            </div>
          </div>
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
