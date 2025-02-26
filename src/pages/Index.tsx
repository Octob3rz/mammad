
import React from "react";
import Hero from "../components/Hero";
import MasonryGrid from "../components/MasonryGrid";
import BioCard from "../components/BioCard";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const images = [
  {
    id: 1,
    src: "/4.jpeg",
    alt: "Tech innovation",
  },
  {
    id: 2,
    src: "/3.jpeg",
    alt: "Working on laptop",
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
        <div className="space-y-24">
          <BioCard
            title="About Me"
            content="Being born in Azerbaijan i cultivated dedication to my work in all aspects since i was born. In my 30s i've been thriving as a director of meet factory and later decided to open an own restaurant in the center of Baku. After that i've been living in Dubai and providing my professional guidance as a real estate agent to many influencial people. There i acquired extremely large circle of contacts that allow me to connect people from different places and unite them for one goal: develop and thrive together. 
As a visionary entrepreneur with over a decade of experience, I've dedicated my career to pushing the boundaries of entrepreneurship and creating meaningful impact through interactions with people."
            imageSrc="/5.jpeg"
            imagePosition="right"
          />
          
          <BioCard
            title="My Vision"
            content="I believe in harnessing the power of social communication to solve real-world problems and create solutions that make a difference in people's lives."
            imageSrc="/2.jpeg"
            imagePosition="left"
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

        {/* Professional Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-[#221F26]">Professional Journey</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] transition-all duration-300 transform hover:-translate-y-1 border border-[#D4AF37]/10">
              <h3 className="text-xl font-playfair font-semibold mb-4 text-[#8E9196]">MEAT FACTORY DIRECTOR</h3>
              <p className="font-lora text-[#555555] leading-relaxed tracking-wide">Leading operations and innovation in the meat processing industry, establishing efficient production systems and quality control measures.</p>
            </div>
            <div className="p-8 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] transition-all duration-300 transform hover:-translate-y-1 border border-[#D4AF37]/10">
              <h3 className="text-xl font-playfair font-semibold mb-4 text-[#8E9196]">RESTAURANT OWNER</h3>
              <p className="font-lora text-[#555555] leading-relaxed tracking-wide">Successfully established and managed a restaurant in central Baku, creating exceptional dining experiences and building a strong customer base.</p>
            </div>
            <div className="p-8 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] transition-all duration-300 transform hover:-translate-y-1 border border-[#D4AF37]/10">
              <h3 className="text-xl font-playfair font-semibold mb-4 text-[#8E9196]">REAL ESTATE CONSULTANT</h3>
              <p className="font-lora text-[#555555] leading-relaxed tracking-wide">Providing expert guidance in Dubai's real estate market, connecting influential clients with premium properties and investment opportunities.</p>
            </div>
          </div>
        </motion.div>

        {/* Global Network Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-[#221F26]">Global Network</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] transition-all duration-300 transform hover:-translate-y-1 border border-[#D4AF37]/10">
              <h3 className="text-xl font-playfair font-semibold mb-4 text-[#8E9196]">INTERNATIONAL CONNECTIONS</h3>
              <p className="font-lora text-[#555555] leading-relaxed tracking-wide">Built an extensive network spanning Azerbaijan, Dubai, and beyond, facilitating meaningful connections and business opportunities across borders.</p>
            </div>
            <div className="p-8 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] transition-all duration-300 transform hover:-translate-y-1 border border-[#D4AF37]/10">
              <h3 className="text-xl font-playfair font-semibold mb-4 text-[#8E9196]">COLLABORATIVE GROWTH</h3>
              <p className="font-lora text-[#555555] leading-relaxed tracking-wide">Uniting diverse professionals and businesses toward shared goals of development and success through strategic partnerships and innovative solutions.</p>
            </div>
          </div>
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
