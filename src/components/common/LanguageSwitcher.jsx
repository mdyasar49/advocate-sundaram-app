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

const LanguageSwitcher = ({ variant = 'pill', onSelect, showLabel = true, className = '' }) => {
  const { lang, setLang } = useLanguage();

  const handleSelect = (code) => {
    setLang(code);
    if (onSelect) onSelect(code);
  };

  return (
    <div
      className={`flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-slate-950/90 border border-amber-500/30 shadow-lg backdrop-blur-md justify-center ${className}`}
    >
      {showLabel && (
        <span className="text-amber-400 font-medium text-[11px] px-1.5 hidden md:inline-flex items-center gap-1">
          <LanguageIcon sx={{ fontSize: '0.9rem' }} />
        </span>
      )}
      {LANGUAGES.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => handleSelect(item.code)}
          className={`px-3 py-1 text-[11px] sm:text-xs font-bold rounded-full transition-all duration-300 ${
            lang === item.code
              ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-600 text-slate-950 shadow-md shadow-amber-500/40 font-extrabold scale-105'
              : 'text-slate-300 hover:text-amber-300 hover:bg-white/10'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
