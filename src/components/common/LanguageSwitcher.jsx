import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageIcon from '@mui/icons-material/Language';

export const LANGUAGES = [
  { code: 'ta', label: 'தமிழ்' },
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिंदी' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'ml', label: 'മലയാളം' },
];

/**
 * Single authoritative LanguageSwitcher component for the entire app.
 * Guarantees 100% design consistency across TopBar, Mobile Menu, and Popups.
 */
const LanguageSwitcher = ({
  onSelect,
  showLabel = false,
  className = '',
  size = 'md', // 'sm' | 'md'
}) => {
  const { lang, setLang } = useLanguage();

  const handleSelect = (code) => {
    setLang(code);
    if (onSelect) onSelect(code);
  };

  const isSmall = size === 'sm';

  return (
    <div
      className={`inline-flex flex-wrap items-center gap-1 p-1 rounded-full bg-[#121110]/95 border border-[#3b3222] shadow-lg backdrop-blur-md justify-center ${className}`}
    >
      {showLabel && (
        <span className="text-amber-400 font-medium text-xs px-2 hidden sm:inline-flex items-center gap-1">
          <LanguageIcon sx={{ fontSize: '1rem' }} />
        </span>
      )}
      {LANGUAGES.map((item) => {
        const isActive = lang === item.code;
        return (
          <button
            key={item.code}
            type="button"
            onClick={() => handleSelect(item.code)}
            className={`px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
              isSmall ? 'px-2 py-0.5 text-[10px] sm:text-[11px]' : ''
            } ${
              isActive
                ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black shadow-[0_2px_10px_rgba(212,175,55,0.4)] font-extrabold scale-105'
                : 'text-[#a8a49c] hover:text-[#f3efe6] hover:bg-white/5'
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
