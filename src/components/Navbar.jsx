import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, IconButton, Box } from '@mui/material';
import AdvocateBandLogo from './AdvocateBandLogo';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import TopBar from './TopBar';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-[1000] w-full bg-[#080d1a]/95 backdrop-blur-md border-b border-amber-500/20">
      <TopBar />
      <div className="container navbar">
        <motion.a
          href="#"
          className="brand-logo"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={closeMobileMenu}
        >
          <div className="logo-icon" style={{ background: 'transparent', border: 'none', padding: 0, width: 'auto', height: 'auto', boxShadow: 'none' }}>
            <AdvocateBandLogo size={46} />
          </div>
          <div className="brand-text">
            <h1>{t('brandTitle')}</h1>
            <span>{t('brandSub')}</span>
          </div>
        </motion.a>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          <li><a href="#about">{t('navAbout')}</a></li>
          <li><a href="#practices">{t('navPractices')}</a></li>
          <li><a href="#courts">{t('navCourts')}</a></li>
          <li><a href="#contact">{t('navContact')}</a></li>
        </ul>

        {/* Desktop CTA Button */}
        <Box className="desktop-cta">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              component="a"
              href="https://wa.me/918838828632?text=Hello%20Advocate%20Sundaram%20Sir,%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter."
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<WhatsAppIcon sx={{ fontSize: '1.2rem !important' }} />}
              className="nav-cta-btn"
              sx={{
                background: 'var(--gold-gradient)',
                color: '#080d1a',
                fontWeight: 700,
                borderRadius: '50px',
                px: 3,
                py: 1,
                textTransform: 'none',
                fontSize: '0.9rem',
                boxShadow: '0 4px 20px var(--gold-glow)',
                '&:hover': {
                  background: 'var(--gold-gradient)',
                  boxShadow: '0 6px 25px rgba(212, 175, 55, 0.5)',
                },
              }}
            >
              {t('navCta')}
            </Button>
          </motion.div>
        </Box>

        {/* Mobile Hamburger Toggle Button */}
        <IconButton
          className="mobile-menu-toggle"
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
          sx={{
            color: 'var(--gold-accent)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '10px',
            p: 1,
            display: { xs: 'flex', md: 'none' },
          }}
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>

      {/* Mobile Slide-Down Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="container mobile-nav-content">
              <ul className="mobile-nav-links">
                <li><a href="#about" onClick={closeMobileMenu}>{t('navAbout')}</a></li>
                <li><a href="#practices" onClick={closeMobileMenu}>{t('navPractices')}</a></li>
                <li><a href="#courts" onClick={closeMobileMenu}>{t('navCourts')}</a></li>
                <li><a href="#contact" onClick={closeMobileMenu}>{t('navContact')}</a></li>
              </ul>
              <Button
                component="a"
                href="https://wa.me/918838828632?text=Hello%20Advocate%20Sundaram%20Sir,%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter."
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                startIcon={<WhatsAppIcon sx={{ fontSize: '1.2rem !important' }} />}
                onClick={closeMobileMenu}
                sx={{
                  width: '100%',
                  mt: 2,
                  mb: 1,
                  background: 'var(--gold-gradient)',
                  color: '#080d1a',
                  fontWeight: 700,
                  borderRadius: '30px',
                  py: 1.3,
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 20px var(--gold-glow)',
                }}
              >
                {t('navCta')}
              </Button>

              {/* Mobile Menu 5-Language Switcher */}
              <div className="mobile-lang-box mt-4 pt-3 border-t border-amber-500/20">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-2 text-center">
                  🌐 Select Language / மொழியைத் தேர்வு செய்க
                </span>
                <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/90 border border-amber-500/30">
                  {[
                    { code: 'ta', label: 'தமிழ்' },
                    { code: 'en', label: 'English' },
                    { code: 'hi', label: 'हिंदी' },
                    { code: 'te', label: 'తెలుగు' },
                    { code: 'ml', label: 'മലയാളം' },
                  ].map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => {
                        setLang(item.code);
                        closeMobileMenu();
                      }}
                      className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all duration-200 ${
                        lang === item.code
                          ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-600 text-slate-950 shadow-md shadow-amber-500/30 font-extrabold scale-105'
                          : 'text-slate-300 hover:text-amber-400 hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
