import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import AdvocateBandLogo from './AdvocateBandLogo';
import BalanceIcon from '@mui/icons-material/Balance';
import GavelIcon from '@mui/icons-material/Gavel';

const DisclaimerModal = () => {
  const { lang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted disclaimer in this session
    const accepted = sessionStorage.getItem('disclaimerAccepted');
    if (!accepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem('disclaimerAccepted', 'true');
    setIsOpen(false);
  };

  // Re-open helper if user clicks Disclaimer link in footer
  useEffect(() => {
    const handleReopen = () => setIsOpen(true);
    window.addEventListener('openDisclaimerModal', handleReopen);
    return () => window.removeEventListener('openDisclaimerModal', handleReopen);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full max-w-xl bg-[#0e1424] border border-amber-500/35 rounded-2xl p-6 sm:p-9 shadow-2xl shadow-black/90 relative overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header: Logo & Brand Name */}
            <div className="flex items-center gap-4 mb-6 pb-5 border-b border-amber-500/20">
              <div className="flex-shrink-0 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <AdvocateBandLogo size={38} />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold tracking-wide text-white font-serif uppercase">
                  {t('brandTitle')}
                </h2>
                <p className="text-[11px] sm:text-xs font-bold text-amber-400/90 tracking-widest uppercase mt-0.5">
                  ADVOCATES & LEGAL CONSULTANTS
                </p>
              </div>
            </div>

            {/* Modal Title */}
            <div className="flex items-center gap-2 mb-4">
              <BalanceIcon sx={{ color: 'var(--gold-accent)', fontSize: '1.4rem' }} />
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-amber-400">
                {t('disclaimerTitle')}
              </h3>
            </div>

            {/* Disclaimer Content Body */}
            <div className="text-slate-300 text-xs sm:text-sm leading-relaxed space-y-3 mb-8 font-sans">
              <p>
                {t('disclaimerText')}
              </p>
            </div>

            {/* Action Accept Button */}
            <div className="flex justify-start">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAccept}
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 text-slate-950 font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <GavelIcon sx={{ fontSize: '1.1rem' }} />
                <span>{t('disclaimerBtn')}</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerModal;
