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
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl">
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full max-w-2xl max-h-[90vh] bg-[#121622] border border-amber-500/35 rounded-3xl p-6 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_30px_rgba(212,175,55,0.12)] relative flex flex-col justify-between overflow-y-auto"
          >
            {/* Ambient Background Glows */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header: Logo, Brand & Language Selector Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-amber-500/20">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 shadow-inner">
                    <AdvocateBandLogo size={42} />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-2xl font-bold tracking-wider text-amber-300 font-serif uppercase">
                      {t('brandTitle')}
                    </h2>
                    <p className="text-[11px] sm:text-xs font-bold text-amber-400/80 tracking-[2px] uppercase mt-0.5">
                      ADVOCATES & LEGAL CONSULTANTS
                    </p>
                  </div>
                </div>

                {/* 5-Language Switcher Pills */}
                <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/90 border border-amber-500/30 shadow-md self-start sm:self-center">
                  <LanguageIcon sx={{ color: 'var(--gold-accent)', fontSize: '1.1rem', mx: 0.5 }} />
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
                      className={`px-3 py-1 text-xs font-bold rounded-xl transition-all duration-300 ${
                        lang === item.code
                          ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-600 text-slate-950 shadow-md shadow-amber-500/30 scale-105 font-extrabold'
                          : 'text-slate-300 hover:text-amber-300 hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Title Section */}
              <div className="mt-6 mb-4">
                <h3 className="text-xl sm:text-3xl font-bold font-serif text-amber-400 flex items-center gap-3">
                  <BalanceIcon sx={{ color: 'var(--gold-accent)', fontSize: '1.6rem' }} />
                  <span>{t('disclaimerTitle')}</span>
                </h3>
              </div>

              {/* Disclaimer Body Content Box */}
              <div className="bg-slate-950/80 border border-amber-500/20 rounded-2xl p-5 sm:p-7 mb-8 text-slate-300 text-xs sm:text-base leading-relaxed sm:leading-loose font-sans shadow-inner tracking-wide">
                <p>{t('disclaimerText')}</p>
              </div>
            </div>

            {/* Action Accept Button Container */}
            <div className="pt-2 flex justify-start sm:justify-start">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAccept}
                className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-600 text-slate-950 font-extrabold text-xs sm:text-sm tracking-[2px] uppercase shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center gap-3 border border-amber-300/40"
              >
                <GavelIcon sx={{ fontSize: '1.25rem' }} />
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
