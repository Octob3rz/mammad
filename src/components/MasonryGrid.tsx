
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
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 p-4">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2,
            ease: "easeOut"
          }}
          className="break-inside-avoid mb-6"
        >
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover transform transition-all duration-500 ease-out group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 p-4 text-white"
            >
              <h3 className="text-lg font-medium">{image.alt}</h3>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MasonryGrid;
