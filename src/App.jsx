import React from 'react';
import './index.css';
import { LanguageProvider } from './context/LanguageContext';

import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import WhyChooseUs from './components/WhyChooseUs';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="app-root">
        <TopBar />
        <Navbar />
        <Hero />
        <PracticeAreas />
        <WhyChooseUs />
        <ConsultationForm />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
