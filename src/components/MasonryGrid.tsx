
import React from "react";
import { motion } from "framer-motion";

interface Image {
  id: number;
  src: string;
  alt: string;
}

interface MasonryGridProps {
  images: Image[];
}

const MasonryGrid = ({ images }: MasonryGridProps) => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 p-4">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="break-inside-avoid"
        >
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MasonryGrid;
