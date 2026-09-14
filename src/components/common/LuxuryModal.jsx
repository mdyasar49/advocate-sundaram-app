import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';

/**
 * LuxuryModal - Reusable dark matte charcoal & gold shield popup modal component
 */
const LuxuryModal = ({
  isOpen,
  onClose,
  icon,
  badgeTag,
  title,
  subtitle = 'ADVOCATES & LEGAL CONSULTANTS',
  headerRight,
  children,
  actions,
  maxWidth = 'max-w-xl sm:max-w-2xl',
}) => {
  // Lock body scroll when modal is open
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/92 backdrop-blur-2xl overflow-y-auto">
          {/* Backdrop Click Handler */}
          <div className="fixed inset-0" onClick={onClose} />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className={`w-full ${maxWidth} bg-[#191919] border border-[#383020] rounded-none sm:rounded-sm p-6 sm:p-10 md:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.98)] relative flex flex-col my-auto text-left z-10`}
          >
            {/* Top Bar Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {/* Gold Shield Icon Badge */}
                {icon && (
                  <div className="flex-shrink-0 w-14 h-16 bg-gradient-to-b from-[#2d2518] via-[#1f1910] to-[#120e09] border border-amber-600/40 rounded-sm flex items-center justify-center p-2 shadow-lg">
                    {icon}
                  </div>
                )}
                <div>
                  <h2 className="text-lg sm:text-xl font-medium tracking-wide text-[#e6e0d4] font-serif">
                    {title}
                  </h2>
                  {subtitle && (
                    <p className="text-[10px] sm:text-[11px] font-bold text-amber-500/80 tracking-[2px] uppercase mt-1">
                      {subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Header Right (Language Switcher or Close X) */}
              <div className="self-stretch sm:self-auto flex items-center justify-end gap-3">
                {headerRight}
                {onClose && (
                  <button
                    onClick={onClose}
                    className="w-9 h-9 rounded-sm bg-[#121212] border border-[#383020] flex items-center justify-center text-[#a8a49c] hover:text-[#f3efe6] hover:border-amber-500/40 transition-all cursor-pointer flex-shrink-0"
                    aria-label="Close"
                  >
                    <CloseIcon sx={{ fontSize: '1.2rem' }} />
                  </button>
                )}
              </div>
            </div>

            {/* Horizontal Line Divider */}
            <div className="w-full border-b border-[#30281b] my-6 sm:my-8" />

            {/* Compliance / Category Tag */}
            {badgeTag && (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-xs text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase mb-4 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                {badgeTag}
              </div>
            )}

            {/* Children Body */}
            <div className="flex-1">{children}</div>

            {/* Actions Footer */}
            {actions && <div className="w-full pt-4">{actions}</div>}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LuxuryModal;
