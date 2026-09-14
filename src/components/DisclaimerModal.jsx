import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import AdvocateBandLogo from './AdvocateBandLogo';
import BalanceIcon from '@mui/icons-material/Balance';
import GavelIcon from '@mui/icons-material/Gavel';

const DisclaimerModal = () => {
  const { t } = useLanguage();
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
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md">
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full max-w-lg sm:max-w-xl max-h-[90vh] bg-[#0b1222] border border-amber-500/40 rounded-2xl p-5 sm:p-8 shadow-2xl shadow-black/95 relative flex flex-col justify-between overflow-y-auto"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-20 -left-20 w-44 h-44 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header: Logo & Brand Name */}
              <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-amber-500/20">
                <div className="flex-shrink-0 p-2 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  <AdvocateBandLogo size={36} />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-base sm:text-xl font-bold tracking-wide text-amber-300 font-serif uppercase truncate">
                    {t('brandTitle')}
                  </h2>
                  <p className="text-[10px] sm:text-xs font-semibold text-slate-300 tracking-wider uppercase mt-0.5">
                    ADVOCATES & LEGAL CONSULTANTS
                  </p>
                </div>
              </div>

              {/* Modal Title */}
              <div className="flex items-center gap-2.5 mb-3.5">
                <BalanceIcon sx={{ color: 'var(--gold-accent)', fontSize: '1.3rem' }} />
                <h3 className="text-lg sm:text-2xl font-bold font-serif text-amber-400">
                  {t('disclaimerTitle')}
                </h3>
              </div>

              {/* Disclaimer Content Box */}
              <div className="bg-slate-900/70 border border-amber-500/15 rounded-xl p-4 sm:p-5 mb-6 text-slate-200 text-xs sm:text-sm leading-relaxed font-sans">
                <p>{t('disclaimerText')}</p>
              </div>
            </div>

            {/* Action Accept Button */}
            <div className="pt-2 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAccept}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-600 text-slate-950 font-extrabold text-xs sm:text-sm tracking-wide uppercase shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 flex items-center justify-center gap-2 border border-amber-300/40"
              >
                <GavelIcon sx={{ fontSize: '1.15rem' }} />
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
