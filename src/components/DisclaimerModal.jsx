import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import AdvocateBandLogo from './AdvocateBandLogo';
import LanguageSwitcher from './common/LanguageSwitcher';

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
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/92 backdrop-blur-2xl overflow-y-auto">
          {/* Modal Container - Matches Target Screenshot Exact Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full max-w-xl sm:max-w-2xl bg-[#191919] border border-[#383020] rounded-none sm:rounded-sm p-6 sm:p-10 md:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.98)] relative flex flex-col my-auto text-left"
          >
            {/* Top Bar Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {/* Gold Shield Logo Badge */}
                <div className="flex-shrink-0 w-14 h-16 bg-gradient-to-b from-[#2d2518] via-[#1f1910] to-[#120e09] border border-amber-600/40 rounded-sm flex items-center justify-center p-2 shadow-lg">
                  <AdvocateBandLogo size={36} />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-medium tracking-wide text-[#e6e0d4] font-serif">
                    {t('brandTitle')}
                  </h2>
                  <p className="text-[10px] sm:text-[11px] font-bold text-amber-500/80 tracking-[2px] uppercase mt-1">
                    ADVOCATES & LEGAL CONSULTANTS
                  </p>
                </div>
              </div>

              {/* Minimalist 5-Language Switcher */}
              <div className="self-stretch sm:self-auto flex justify-end">
                <LanguageSwitcher className="bg-[#121212]/90 border-[#383020]" />
              </div>
            </div>

            {/* Horizontal Line Divider */}
            <div className="w-full border-b border-[#30281b] my-6 sm:my-8" />

            {/* Compliance Tag */}
            {t('disclaimerTag') && (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-xs text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase mb-4 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                {t('disclaimerTag')}
              </div>
            )}

            {/* Modal Title */}
            <h3 className="text-2xl sm:text-3xl font-normal font-serif text-[#f3efe6] tracking-wide mb-4 sm:mb-6 text-left">
              {t('disclaimerTitle')}
            </h3>

            {/* Disclaimer Intro Paragraph */}
            <p className="text-[#a8a49c] text-sm sm:text-base leading-relaxed font-sans mb-6 text-left font-normal tracking-normal">
              {t('disclaimerText')}
            </p>

            {/* Structured Legal Clauses (if available) */}
            {t('disclaimerPoint1') && (
              <div className="space-y-3 mb-8 text-xs sm:text-sm text-[#b5b0a5] font-sans leading-relaxed border-l-2 border-amber-600/30 pl-4 py-1 bg-black/20 rounded-r-sm">
                <p className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold select-none">•</span>
                  <span>{t('disclaimerPoint1')}</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold select-none">•</span>
                  <span>{t('disclaimerPoint2')}</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold select-none">•</span>
                  <span>{t('disclaimerPoint3')}</span>
                </p>
              </div>
            )}

            {/* Left-Aligned Dark Action Button */}
            <div className="flex justify-start w-full pt-2">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#1f1d1b' }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAccept}
                className="bg-[#0c0b0a] text-[#e8e4db] font-bold text-xs sm:text-xs tracking-[3px] uppercase px-8 sm:px-10 py-4 rounded-sm border border-[#383020] shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
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


