import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import AdvocateBandLogo from './AdvocateBandLogo';
import LanguageSwitcher from './common/LanguageSwitcher';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/92 backdrop-blur-2xl overflow-y-auto custom-scrollbar">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleAccept}
            className="fixed inset-0 bg-black/80"
          />

          {/* Clean Modern Glassmorphic Disclaimer Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full max-w-2xl bg-[#0c101d] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-[#0e1222] to-[#070913] border border-amber-500/30 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.95)] relative flex flex-col my-auto text-left z-10 p-6 sm:p-10 md:p-12"
          >
            {/* Header Section */}
            <div className="relative z-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-amber-500/20">
              <div className="flex items-center gap-4">
                {/* Emblem Badge */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2a2114] via-[#1a140b] to-[#0d0904] border border-amber-500/50 flex items-center justify-center p-2.5 shadow-lg shadow-amber-500/10 flex-shrink-0">
                  <AdvocateBandLogo size={36} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-serif bg-gradient-to-r from-[#fef8eb] via-[#ebd7b9] to-[#d4af37] bg-clip-text text-transparent tracking-wide">
                    {t('brandTitle')}
                  </h2>
                  <p className="text-[10px] sm:text-[11px] font-bold text-amber-400/90 tracking-[2.5px] uppercase mt-1">
                    ADVOCATES & LEGAL CONSULTANTS
                  </p>
                </div>
              </div>

              {/* Language Switcher */}
              <div className="self-stretch sm:self-auto flex items-center justify-end relative z-50">
                <LanguageSwitcher size="sm" align="right" />
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="pt-6 pb-2 space-y-6 flex-1 overflow-y-auto max-h-[60vh] custom-scrollbar pr-1 relative z-10">
              {/* Compliance Tag */}
              {t('disclaimerTag') && (
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
                  <span>{t('disclaimerTag')}</span>
                </div>
              )}

              {/* Disclaimer Title */}
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#f8f6f0] tracking-tight leading-snug">
                {t('disclaimerTitle')}
              </h3>

              {/* Disclaimer Intro Paragraph */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-normal tracking-wide">
                {t('disclaimerText')}
              </p>

              {/* Structured Legal Clauses Box */}
              {t('disclaimerPoint1') && (
                <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5 shadow-sm">
                      ✓
                    </div>
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                      {t('disclaimerPoint1')}
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5 shadow-sm">
                      ✓
                    </div>
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                      {t('disclaimerPoint2')}
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5 shadow-sm">
                      ✓
                    </div>
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                      {t('disclaimerPoint3')}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Action Button */}
            <div className="pt-6 border-t border-amber-500/20 flex items-center justify-end mt-4 relative z-10">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(212,175,55,0.45)' }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAccept}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-extrabold text-xs sm:text-sm tracking-[2.5px] uppercase px-10 py-4 rounded-xl shadow-xl shadow-amber-500/20 hover:from-amber-400 hover:to-yellow-400 transition-all cursor-pointer flex items-center justify-center gap-3 border border-amber-300/50"
              >
                <CheckCircleIcon sx={{ fontSize: '1.3rem' }} />
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
