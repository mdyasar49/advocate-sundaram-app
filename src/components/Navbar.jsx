import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, IconButton, Box } from '@mui/material';
import AdvocateBandLogo from './AdvocateBandLogo';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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
    <header>
      <div className="container navbar">
        <motion.a
          href="#"
          className="brand-logo"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={closeMobileMenu}
        >
          <div className="logo-icon" style={{ background: 'transparent', padding: 0 }}>
            <AdvocateBandLogo size={36} />
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
