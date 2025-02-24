
import React from "react";
import Hero from "../components/Hero";
import MasonryGrid from "../components/MasonryGrid";
import BioCard from "../components/BioCard";
import { motion } from "framer-motion";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    alt: "Entrepreneur working",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    alt: "Professional portrait",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    alt: "Working on laptop",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    alt: "Tech innovation",
  },
];

const achievements = [
  { number: "10+", text: "Years Experience" },
  { number: "50+", text: "Successful Projects" },
  { number: "30M+", text: "Revenue Generated" },
  { number: "100+", text: "Happy Clients" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <BioCard
            title="About Me"
            content="As a visionary entrepreneur with over a decade of experience, I've dedicated my career to pushing the boundaries of innovation and creating meaningful impact through technology."
          />
          <BioCard
            title="My Vision"
            content="I believe in harnessing the power of technology to solve real-world problems and create solutions that make a difference in people's lives."
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
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-gray-800 mb-2">{item.number}</h3>
              <p className="text-gray-600">{item.text}</p>
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
          <h2 className="text-3xl font-bold text-center mb-12">Areas of Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Business Strategy</h3>
              <p className="text-gray-600">Developing comprehensive business strategies that drive growth and innovation.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Technology Leadership</h3>
              <p className="text-gray-600">Guiding teams through digital transformation and technological advancement.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Innovation Management</h3>
              <p className="text-gray-600">Fostering a culture of innovation and implementing cutting-edge solutions.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
