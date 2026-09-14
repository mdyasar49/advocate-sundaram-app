import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import AdvocateBandLogo from './AdvocateBandLogo';
import BalanceIcon from '@mui/icons-material/Balance';
import GavelIcon from '@mui/icons-material/Gavel';
import LanguageSwitcher from './common/LanguageSwitcher';
import GoldButton from './common/GoldButton';

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
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl overflow-y-auto">
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-gradient-to-b from-[#0e1628] via-[#090e1a] to-[#04060c] border border-amber-500/40 rounded-3xl sm:rounded-[2.5rem] p-7 sm:p-10 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.95),0_0_50px_rgba(212,175,55,0.2)] relative flex flex-col my-auto"
          >
            {/* Ambient Luxury Background Glows */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-amber-500/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-amber-400/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Top Bar: Brand Logo & Reusable Language Switcher */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 pt-2 pb-5 px-2 border-b border-amber-500/20 relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 shadow-inner">
                  <AdvocateBandLogo size={34} />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold tracking-wider text-amber-300 font-serif uppercase">
                    {t('brandTitle')}
                  </h2>
                  <p className="text-[9px] sm:text-[11px] font-semibold text-slate-400 tracking-widest uppercase mt-0.5">
                    ADVOCATES & LEGAL CONSULTANTS
                  </p>
                </div>
              </div>

              {/* Reusable Language Switcher */}
              <LanguageSwitcher className="mx-auto sm:mx-0" />
            </div>

            {/* Modal Content Body */}
            <div className="py-5 sm:py-6 px-2 relative z-10">
              {/* Modal Title with Gold Accent */}
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/25">
                  <BalanceIcon sx={{ fontSize: '1.3rem' }} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 tracking-wide">
                  {t('disclaimerTitle')}
                </h3>
              </div>

              {/* Text Body - Soft Glowing Glass Panel */}
              <div className="bg-slate-950/70 border-l-4 border-amber-400/80 border-y border-r border-amber-500/15 rounded-2xl p-5 sm:p-6 text-slate-200 text-xs sm:text-sm leading-relaxed sm:leading-loose font-sans shadow-2xl tracking-wide">
                <p className="text-slate-200 font-normal">{t('disclaimerText')}</p>
              </div>
            </div>

            {/* Reusable Gold Action Accept Button */}
            <div className="pt-3 pb-6 sm:pb-8 md:pb-10 px-4 flex justify-center w-full relative z-10">
              <GoldButton onClick={handleAccept} icon={GavelIcon}>
                {t('disclaimerBtn')}
              </GoldButton>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerModal;

