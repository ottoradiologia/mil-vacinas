import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VaccineFinder from './components/VaccineFinder';
import PlanSection from './components/PlanSection';
import HomeVaccinationSection from './components/HomeVaccinationSection';
import HowItWorksSection from './components/HowItWorksSection';
import TeamSection from './components/TeamSection';
import SpaceSection from './components/SpaceSection';
import CompaniesSection from './components/CompaniesSection';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      {/* pt: navbar fixa · pb: barra de ações fixa no celular */}
      <div className="min-h-screen bg-white pt-16 md:pt-[72px]">
        <Navbar />

        <main>
          {/* Topo: onde vacinar (clínica ou casa) */}
          <div id="home">
            <HeroSection />
          </div>

          {/* Vacinas por idade + plano vacinal */}
          <VaccineFinder />
          <PlanSection />

          {/* Vacina em casa: raio de 5 km e passos */}
          <HomeVaccinationSection />

          {/* Na clínica: agendamento, visita e pagamento */}
          <div id="how-it-works">
            <HowItWorksSection />
          </div>

          {/* Quem somos + conservação */}
          <TeamSection />

          {/* Nosso espaço */}
          <SpaceSection />

          {/* Empresas */}
          <CompaniesSection />
        </main>

        <Footer />

        <Analytics />
      </div>
    </LanguageProvider>
  );
}

export default App;
