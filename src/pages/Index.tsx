
import React from "react";
import Hero from "../components/Hero";
import Background from "../components/background";
import MasonryGrid from "../components/MasonryGrid";
import BioCard from "../components/BioCard";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { User, Award, Rocket, Building, Globe, Handshake } from "lucide-react";

// We'll use the images in the comprehensive masonry grid below
const images = [
  {
    id: 1,
    src: "/4.jpeg",
    alt: "Tech innovation",
    description: "Embracing technological innovation to create meaningful solutions."
  },
  {
    id: 2,
    src: "/3.jpeg",
    alt: "Working on laptop",
    description: "Dedicated to excellence in every project and initiative."
  },
];

const achievements = [
  { number: "15+", text: "Years Experience", icon: <User size={32} className="text-violet-deep mx-auto mb-4" /> },
  { number: "5+", text: "Successful Projects", icon: <Rocket size={32} className="text-violet-deep mx-auto mb-4" /> },
  { number: "1M+", text: "Revenue Generated", icon: <Award size={32} className="text-violet-deep mx-auto mb-4" /> },
  { number: "100+", text: "Happy Clients", icon: <Handshake size={32} className="text-violet-deep mx-auto mb-4" /> },
];

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Background />
      <Hero />
      
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
            title="About Me"
            content="Being born in Azerbaijan i cultivated dedication to my work in all aspects since i was born. In my 30s i've been thriving as a director of meet factory and later decided to open an own restaurant in the center of Baku. After that i've been living in Dubai and providing my professional guidance as a real estate agent to many influencial people. There i acquired extremely large circle of contacts that allow me to connect people from different places and unite them for one goal: develop and thrive together. 
As a visionary entrepreneur with over a decade of experience, I've dedicated my career to pushing the boundaries of entrepreneurship and creating meaningful impact through interactions with people."
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
            title="My Vision"
            content="I believe in harnessing the power of social communication to solve real-world problems and create solutions that make a difference in people's lives."
            imageSrc="/2.jpeg"
            imagePosition="left"
          />
        </div>

        {/* Achievements Section */}
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
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-violet-deep text-shadow-violet">Achievements</h2>
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

        {/* Comprehensive Masonry Grid with Images and Text */}
        <div className="py-20">
          {/* Title for the masonry section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-playfair font-bold text-violet-deep text-shadow-violet">My Journey in Pictures</h2>
            <p className="mt-4 text-violet-bright/80 max-w-2xl mx-auto font-lora">Visual highlights from my professional experience and global connections</p>
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
              <div className="relative group overflow-hidden rounded-2xl">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full h-auto object-cover transform transition-all duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-xl font-playfair font-bold mb-2">{images[0].alt}</h3>
                  <p className="font-lora">{images[0].description}</p>
                </div>
              </div>
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
                <h3 className="text-xl font-playfair font-semibold mb-4 text-white">MEAT FACTORY DIRECTOR</h3>
                <p className="font-lora text-white/90 leading-relaxed tracking-wide">Leading operations and innovation in the meat processing industry, establishing efficient production systems and quality control measures.</p>
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
              <div className="relative group overflow-hidden rounded-2xl">
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="w-full h-auto object-cover transform transition-all duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-xl font-playfair font-bold mb-2">{images[1].alt}</h3>
                  <p className="font-lora">{images[1].description}</p>
                </div>
              </div>
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
                <Building size={32} className="text-violet-deep mb-4" />
                <h3 className="text-xl font-playfair font-semibold mb-4 text-violet-deep">RESTAURANT OWNER</h3>
                <p className="font-lora text-violet-deep/90 leading-relaxed tracking-wide">Successfully established and managed a restaurant in central Baku, creating exceptional dining experiences and building a strong customer base.</p>
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
              <div className="p-8 bg-white rounded-2xl shadow-lg border-2 border-violet-light glow-violet">
                <Globe size={32} className="text-violet-deep mb-4" />
                <h3 className="text-xl font-playfair font-semibold mb-4 text-violet-deep">INTERNATIONAL CONNECTIONS</h3>
                <p className="font-lora text-violet-bright/80 leading-relaxed tracking-wide">Built an extensive network spanning Azerbaijan, Dubai, and beyond, facilitating meaningful connections and business opportunities across borders.</p>
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
                <h3 className="text-xl font-playfair font-semibold mb-4 text-white">REAL ESTATE CONSULTANT</h3>
                <p className="font-lora text-white/90 leading-relaxed tracking-wide">Providing expert guidance in Dubai's real estate market, connecting influential clients with premium properties and investment opportunities.</p>
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
              <div className="p-8 bg-white rounded-2xl shadow-lg border-2 border-violet-bright glow-violet">
                <Handshake size={32} className="text-violet-deep mb-4" />
                <h3 className="text-xl font-playfair font-semibold mb-4 text-violet-deep">COLLABORATIVE GROWTH</h3>
                <p className="font-lora text-violet-bright/80 leading-relaxed tracking-wide">Uniting diverse professionals and businesses toward shared goals of development and success through strategic partnerships and innovative solutions.</p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* We've incorporated the Professional Journey and Global Network sections 
            into the masonry grid above, so we can remove the standalone sections */}
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
