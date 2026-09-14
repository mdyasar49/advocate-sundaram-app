import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import AdvocateBandLogo from './AdvocateBandLogo';
import BalanceIcon from '@mui/icons-material/Balance';
import GavelIcon from '@mui/icons-material/Gavel';
import LanguageIcon from '@mui/icons-material/Language';

const DisclaimerModal = () => {
  const { lang, setLang, t } = useLanguage();
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
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl">
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full max-w-xl sm:max-w-2xl bg-[#0b101d] border border-amber-500/40 rounded-3xl p-5 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_30px_rgba(212,175,55,0.15)] relative flex flex-col overflow-hidden"
          >
            {/* Ambient Background Glows */}
            <div className="absolute -top-28 -left-28 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-28 -right-28 w-56 h-56 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header: Brand & Logo */}
            <div className="flex items-center gap-4 pb-4 border-b border-amber-500/20">
              <div className="flex-shrink-0 p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                <AdvocateBandLogo size={38} />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-base sm:text-xl font-bold tracking-wider text-amber-300 font-serif uppercase truncate">
                  {t('brandTitle')}
                </h2>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-400 tracking-widest uppercase mt-0.5">
                  ADVOCATES & LEGAL CONSULTANTS
                </p>
              </div>
            </div>

            {/* 5-Language Switcher Bar */}
            <div className="my-4 p-1.5 rounded-2xl bg-slate-950/90 border border-amber-500/25 flex flex-wrap items-center justify-center gap-1.5 shadow-md">
              <span className="text-amber-400 font-bold text-[11px] uppercase tracking-wider px-2 flex items-center gap-1">
                <LanguageIcon sx={{ fontSize: '0.95rem' }} /> Language:
              </span>
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
                  onClick={() => setLang(item.code)}
                  className={`px-3 py-1 text-xs font-bold rounded-xl transition-all duration-200 ${
                    lang === item.code
                      ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-600 text-slate-950 shadow-md shadow-amber-500/30 font-extrabold scale-105'
                      : 'text-slate-300 hover:text-amber-300 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Modal Title */}
            <div className="flex items-center gap-2.5 mb-2">
              <BalanceIcon sx={{ color: 'var(--gold-accent)', fontSize: '1.4rem' }} />
              <h3 className="text-lg sm:text-2xl font-bold font-serif text-amber-400">
                {t('disclaimerTitle')}
              </h3>
            </div>

            {/* Scrollable Text Body Container (Scrollbar Styled) */}
            <div className="max-h-[35vh] sm:max-h-[42vh] overflow-y-auto custom-scrollbar bg-slate-950/90 border border-amber-500/20 rounded-2xl p-4 sm:p-6 my-2 text-slate-200 text-xs sm:text-sm leading-relaxed sm:leading-loose font-sans shadow-inner tracking-wide">
              <p>{t('disclaimerText')}</p>
            </div>

            {/* Action Accept Button Container */}
            <div className="pt-4 flex justify-center w-full">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAccept}
                className="w-full sm:w-auto px-10 py-3.5 rounded-2xl bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-600 text-slate-950 font-extrabold text-xs sm:text-sm tracking-[2px] uppercase shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center gap-2.5 border border-amber-300/40"
              >
                <GavelIcon sx={{ fontSize: '1.2rem' }} />
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
