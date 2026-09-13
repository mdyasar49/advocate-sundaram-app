import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Button, Box } from '@mui/material';
import AdvocateBandLogo from './AdvocateBandLogo';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Navbar = () => {
  const { t } = useLanguage();

  return (
    <header>
      <div className="container navbar">
        <motion.a
          href="#"
          className="brand-logo"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="logo-icon" style={{ background: 'transparent', padding: 0 }}>
            <AdvocateBandLogo size={36} />
          </div>
          <div className="brand-text">
            <h1>{t('brandTitle')}</h1>
            <span>{t('brandSub')}</span>
          </div>
        </motion.a>

        <ul className="nav-links">
          <li><a href="#about">{t('navAbout')}</a></li>
          <li><a href="#practices">{t('navPractices')}</a></li>
          <li><a href="#courts">{t('navCourts')}</a></li>
          <li><a href="#contact">{t('navContact')}</a></li>
        </ul>

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
      </div>
    </header>
  );
};

export default Navbar;
