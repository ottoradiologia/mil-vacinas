import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AgeCardsSection from './components/AgeCardsSection';
import HowItWorksSection from './components/HowItWorksSection';
import VaccinesSection from './components/VaccinesSection';
import PlanSection from './components/PlanSection';
import CompaniesSection from './components/CompaniesSection';
import SpaceSection from './components/SpaceSection';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <div id="home">
        <HeroSection />
      </div>
      
      {/* Age Cards Section */}
      <div id="age-cards">
        <AgeCardsSection />
      </div>
      
      {/* How It Works Section */}
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      
      {/* Vaccines Section */}
      <VaccinesSection />
      
      {/* Plan Section */}
      <div id="plan-section">
        <PlanSection />
      </div>

      {/* Companies Section */}
      <CompaniesSection />
      
      {/* Space Section - Conheça Nosso Espaço */}
      <div id="space-section">
        <SpaceSection />
      </div>
      
      {/* Footer */}
      <div id="contact">
        <Footer />
      </div>
      
      {/* Vercel Analytics */}
      <Analytics />
      </div>
    </LanguageProvider>
  );
}

export default App;
