import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';

export const LANGUAGES = [
  { code: 'ta', label: 'தமிழ்', name: 'Tamil' },
  { code: 'en', label: 'English', name: 'English' },
  { code: 'hi', label: 'हिंदी', name: 'Hindi' },
  { code: 'te', label: 'తెలుగు', name: 'Telugu' },
  { code: 'ml', label: 'മലയാളം', name: 'Malayalam' },
];

/**
 * Custom Luxury Gold Dropdown Language Switcher Component.
 * Supports 'right' or 'left' menu alignment to avoid overflow inside modals and headers.
 */
const LanguageSwitcher = ({
  onSelect,
  showLabel = false,
  className = '',
  size = 'md', // 'sm' | 'md' | 'lg'
  align = 'right', // 'right' | 'left'
}) => {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLangObj = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  const handleSelect = (code) => {
    setLang(code);
    setIsOpen(false);
    if (onSelect) onSelect(code);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isSmall = size === 'sm';
  const isLarge = size === 'lg';

  // Position alignment styling
  const alignClass = align === 'left' ? 'left-0 right-auto origin-top-left' : 'right-0 left-auto origin-top-right';

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      {showLabel && (
        <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs sm:text-sm uppercase tracking-wider select-none mb-2 px-1">
          <LanguageIcon sx={{ fontSize: '1.25rem', color: 'var(--gold-accent)' }} />
          <span>Select Language / மொழியைத் தேர்வு செய்க:</span>
        </div>
      )}

      {/* Dropdown Trigger Button */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`w-full inline-flex items-center justify-between gap-2.5 rounded-2xl bg-[#090b14] border-2 border-amber-500/40 text-amber-100 font-extrabold shadow-[0_6px_25px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all duration-200 cursor-pointer hover:border-amber-400 hover:shadow-amber-500/30 ${isSmall
            ? 'px-3.5 py-2 text-xs sm:text-sm'
            : isLarge
              ? 'px-6 py-3.5 text-base sm:text-lg'
              : 'px-4.5 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base'
          }`}
      >
        <div style={{ padding: 3 }} className="flex items-center gap-2">
          <LanguageIcon sx={{ fontSize: isSmall ? '1.15rem' : isLarge ? '1.5rem' : '1.35rem', color: 'var(--gold-accent)' }} />
          <span className="font-black text-amber-300 tracking-wide">{currentLangObj.label}</span>
          <span className="text-xs text-amber-500/80 uppercase tracking-wider font-bold hidden sm:inline">
            ({currentLangObj.name})
          </span>
        </div>

        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ExpandMoreIcon sx={{ fontSize: isSmall ? '1.25rem' : isLarge ? '1.6rem' : '1.45rem', color: 'var(--gold-accent)' }} />
        </motion.div>
      </motion.button>

      {/* Dropdown Animated Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 6, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`absolute ${alignClass} mt-2 w-max min-w-[210px] sm:min-w-[240px] max-w-[280px] bg-[#0c0e1a] border-2 border-amber-500/40 rounded-2xl p-2 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_30px_rgba(212,175,55,0.2)] backdrop-blur-2xl z-[999999] overflow-hidden`}
          >
            <div style={{ padding: 3 }} className="space-y-1">
              {LANGUAGES.map((item) => {
                const isActive = lang === item.code;
                return (
                  <motion.button
                    key={item.code}
                    type="button"
                    whileHover={{ x: 3 }}
                    onClick={() => handleSelect(item.code)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-extrabold transition-all duration-150 cursor-pointer ${isActive
                        ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-black shadow-lg shadow-amber-500/35 border border-amber-300/80'
                        : 'text-slate-200 hover:bg-amber-500/20 hover:text-amber-300'
                      }`}
                  >
                    <div style={{ padding: 2 }} className="flex items-center gap-2">
                      <span className="font-black text-sm sm:text-base">{item.label}</span>
                      <span className={`text-[11px] uppercase font-bold ${isActive ? 'text-slate-900' : 'text-slate-400'}`}>
                        ({item.name})
                      </span>
                    </div>

                    {isActive && <CheckIcon sx={{ fontSize: '1.2rem', color: '#060911' }} />}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;

