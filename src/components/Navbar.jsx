import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { IconButton, Box } from '@mui/material';
import AdvocateBandLogo from './AdvocateBandLogo';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import TopBar from './TopBar';
import LanguageSwitcher from './common/LanguageSwitcher';
import GoldButton from './common/GoldButton';

const Navbar = () => {
  const { t } = useLanguage();
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

        {/* Desktop Reusable CTA Button */}
        <Box className="desktop-cta">
          <GoldButton
            href="https://wa.me/918838828632?text=Hello%20Advocate%20Sundaram%20Sir,%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter."
            target="_blank"
            icon={WhatsAppIcon}
            size="sm"
          >
            {t('navCta')}
          </GoldButton>
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

              <div className="mt-3 mb-2">
                <GoldButton
                  href="https://wa.me/918838828632?text=Hello%20Advocate%20Sundaram%20Sir,%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter."
                  target="_blank"
                  icon={WhatsAppIcon}
                  fullWidth
                  onClick={closeMobileMenu}
                >
                  {t('navCta')}
                </GoldButton>
              </div>

              {/* Reusable Mobile Language Switcher */}
              <div className="mobile-lang-box mt-4 pt-3 border-t border-amber-500/20 text-center">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-2">
                  🌐 Select Language / மொழியைத் தேர்வு செய்க
                </span>
                <LanguageSwitcher onSelect={closeMobileMenu} showLabel={false} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

