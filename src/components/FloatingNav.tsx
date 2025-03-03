
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Rocket, Award, Map, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Menu items
  const navItems = [
    { icon: Home, label: "Home", target: "#top" },
    { icon: User, label: "About", target: "#about" },
    { icon: Rocket, label: "Vision", target: "#vision" },
    { icon: Award, label: "Achievements", target: "#achievements" },
    { icon: Map, label: "Journey", target: "#journey" },
  ];

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div
      className={cn(
        "fixed right-5 z-50 transition-all duration-300",
        scrollY > 300 ? "bottom-5" : "-bottom-20"
      )}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {/* Toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-violet-deep hover:bg-violet-deep hover:text-white transition-colors duration-300"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Navigation menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-2 min-w-48"
            >
              <div className="flex flex-col space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.target)}
                    className="flex items-center gap-3 px-4 py-2 rounded-md text-sm text-violet-deep hover:bg-violet-deep/10 transition-colors"
                  >
                    <item.icon size={16} />
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FloatingNav;
