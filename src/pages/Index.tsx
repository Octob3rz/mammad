
import React from "react";
import Hero from "../components/Hero";
import MasonryGrid from "../components/MasonryGrid";
import BioCard from "../components/BioCard";

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
      </section>
    </div>
  );
};

export default Index;
