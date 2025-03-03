
import React from "react";
import Hero from "../components/Hero";
import Background from "../components/background";
import Footer from "../components/Footer";
import LanguageSelector from "../components/LanguageSelector";
import MainSection from "../components/MainSection";
import FloatingNav from "../components/FloatingNav";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Background />
      <div className="fixed top-5 right-5 z-50">
        <LanguageSelector />
      </div>
      <FloatingNav />
      <Hero />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Index;
