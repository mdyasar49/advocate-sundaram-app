import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import AdvocateBandLogo from './AdvocateBandLogo';
import LanguageSwitcher from './common/LanguageSwitcher';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-8 md:p-12 bg-slate-950/95 backdrop-blur-3xl overflow-y-auto custom-scrollbar">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleAccept}
            className="fixed inset-0 bg-black/85"
          />

          {/* Clean Modern Glassmorphic Disclaimer Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{
              padding: '36px 40px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxHeight: '90vh',
            }}
            className="w-full max-w-3xl bg-[#0c101d] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-[#0e1222] to-[#070913] border border-amber-500/35 rounded-3xl shadow-[0_35px_100px_rgba(0,0,0,0.95)] relative my-auto text-left z-10"
          >
            {/* Header Section */}
            <div
              style={{
                display: 'flex',
                justify: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px',
                paddingBottom: '20px',
                borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {/* Emblem Badge */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2a2114] via-[#1a140b] to-[#0d0904] border border-amber-500/50 flex items-center justify-center p-2.5 shadow-xl shadow-amber-500/15 flex-shrink-0">
                  <AdvocateBandLogo size={38} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <h2 className="text-xl sm:text-2xl font-bold font-serif bg-gradient-to-r from-[#fef8eb] via-[#ebd7b9] to-[#d4af37] bg-clip-text text-transparent tracking-wide" style={{ margin: 0 }}>
                    {t('brandTitle')}
                  </h2>
                  <p className="text-[10px] sm:text-[11px] font-extrabold text-amber-400/90 tracking-[2.5px] uppercase" style={{ margin: 0 }}>
                    ADVOCATES & LEGAL CONSULTANTS
                  </p>
                </div>
              </div>

              {/* Language Switcher */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <LanguageSwitcher size="sm" align="right" />
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                overflowY: 'auto',
                maxHeight: '52vh',
                paddingRight: '8px',
                paddingTop: '8px',
                paddingBottom: '8px',
              }}
              className="custom-scrollbar relative z-10"
            >
              {/* Compliance Tag */}
              {t('disclaimerTag') && (
                <div>
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/12 border border-amber-500/35 text-amber-300 text-xs font-bold tracking-wider uppercase shadow-md">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
                    <span>{t('disclaimerTag')}</span>
                  </div>
                </div>
              )}

              {/* Disclaimer Title */}
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#f8f6f0] tracking-wide leading-snug" style={{ margin: 0 }}>
                {t('disclaimerTitle')}
              </h3>

              {/* Disclaimer Intro Paragraph */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-normal tracking-wide" style={{ margin: 0 }}>
                {t('disclaimerText')}
              </p>

              {/* Structured Legal Clauses Box */}
              {t('disclaimerPoint1') && (
                <div
                  style={{
                    backgroundColor: 'rgba(2, 6, 23, 0.85)',
                    border: '1px solid rgba(51, 65, 85, 0.8)',
                    borderRadius: '20px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    marginTop: '8px',
                    marginBottom: '8px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center flex-shrink-0 text-xs font-extrabold mt-0.5 shadow-md">
                      ✓
                    </div>
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-sans font-medium" style={{ margin: 0 }}>
                      {t('disclaimerPoint1')}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', paddingTop: '16px', borderTop: '1px solid rgba(51, 65, 85, 0.4)' }}>
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center flex-shrink-0 text-xs font-extrabold mt-0.5 shadow-md">
                      ✓
                    </div>
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-sans font-medium" style={{ margin: 0 }}>
                      {t('disclaimerPoint2')}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', paddingTop: '16px', borderTop: '1px solid rgba(51, 65, 85, 0.4)' }}>
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5 shadow-md">
                      ✓
                    </div>
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-sans font-medium" style={{ margin: 0 }}>
                      {t('disclaimerPoint3')}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Action Button */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingTop: '20px',
                borderTop: '1px solid rgba(212, 175, 55, 0.25)',
              }}
            >
              <GoldButton
                onClick={handleAccept}
                icon={CheckCircleIcon}
                size="md"
                className="w-full sm:w-auto"
              >
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


