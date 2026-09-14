import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import AdvocateBandLogo from './AdvocateBandLogo';
import LanguageSwitcher from './common/LanguageSwitcher';
import LuxuryModal from './common/LuxuryModal';

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
    <LuxuryModal
      isOpen={isOpen}
      onClose={null}
      icon={<AdvocateBandLogo size={36} />}
      title={t('brandTitle')}
      subtitle="ADVOCATES & LEGAL CONSULTANTS"
      badgeTag={t('disclaimerTag')}
      headerRight={<LanguageSwitcher className="bg-[#121212]/90 border-[#383020]" />}
      actions={
        <div className="flex justify-start w-full pt-2">
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: '#1f1d1b' }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAccept}
            className="bg-[#0c0b0a] text-[#e8e4db] font-bold text-xs tracking-[3px] uppercase px-8 sm:px-10 py-4 rounded-sm border border-[#383020] shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{t('disclaimerBtn')}</span>
          </motion.button>
        </div>
      }
    >
      {/* Modal Title */}
      <h3 className="text-2xl sm:text-3xl font-normal font-serif text-[#f3efe6] tracking-wide mb-4 sm:mb-6 text-left">
        {t('disclaimerTitle')}
      </h3>

      {/* Disclaimer Intro Paragraph */}
      <p className="text-[#a8a49c] text-sm sm:text-base leading-relaxed font-sans mb-6 text-left font-normal tracking-normal">
        {t('disclaimerText')}
      </p>

      {/* Structured Legal Clauses */}
      {t('disclaimerPoint1') && (
        <div className="space-y-3 mb-6 text-xs sm:text-sm text-[#b5b0a5] font-sans leading-relaxed border-l-2 border-amber-600/30 pl-4 py-1.5 bg-black/20 rounded-r-sm">
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
    </LuxuryModal>
  );
};

export default DisclaimerModal;
