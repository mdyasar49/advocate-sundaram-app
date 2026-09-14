import React from 'react';
import './index.css';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { LanguageProvider } from './context/LanguageContext';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import WhyChooseUs from './components/WhyChooseUs';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';

const luxuryLegalTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#d4af37',
      light: '#f3e5ab',
      dark: '#996515',
      contrastText: '#060a14',
    },
    secondary: {
      main: '#10b981',
      contrastText: '#ffffff',
    },
    background: {
      default: '#080d1a',
      paper: 'rgba(15, 23, 42, 0.85)',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Mukta Malar", system-ui, sans-serif',
    h1: { fontFamily: '"Cinzel", "Mukta Malar", serif' },
    h2: { fontFamily: '"Cinzel", "Mukta Malar", serif' },
    h3: { fontFamily: '"Cinzel", "Mukta Malar", serif' },
    h4: { fontFamily: '"Cinzel", "Mukta Malar", serif' },
    h5: { fontFamily: '"Cinzel", "Mukta Malar", serif' },
    h6: { fontFamily: '"Cinzel", "Mukta Malar", serif' },
  },
  shape: {
    borderRadius: 16,
  },
});

function App() {
  return (
    <ThemeProvider theme={luxuryLegalTheme}>
      <CssBaseline />
      <LanguageProvider>
        <div className="app-root text-slate-100 bg-[#080d1a] min-h-screen selection:bg-amber-500 selection:text-slate-950">
          <Navbar />
          <Hero />
          <PracticeAreas />
          <WhyChooseUs />
          <ConsultationForm />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
