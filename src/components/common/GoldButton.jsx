import React from 'react';
import { motion } from 'framer-motion';

const GoldButton = ({
  children,
  onClick,
  href,
  icon: Icon,
  fullWidth = false,
  target = '_self',
  rel,
  className = '',
  size = 'md',
  variant = 'gold',
  type = 'button',
  ...props
}) => {
  const sizeClasses = {
    sm: 'pl-1.5 pr-4 py-1 text-xs font-bold gap-2',
    md: 'pl-2 pr-6 py-2 sm:py-2.5 text-xs sm:text-sm font-extrabold gap-2.5',
    lg: 'pl-2.5 pr-8 py-3 sm:py-3.5 text-sm sm:text-base font-black gap-3',
  };

  const badgeSizes = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 sm:w-9 sm:h-9 text-base',
    lg: 'w-10 h-10 sm:w-11 sm:h-11 text-lg sm:text-xl',
  };

  const buttonContent = (
    <>
      {Icon && (
        <span
          className={`${badgeSizes[size] || badgeSizes.md} rounded-full bg-[#080d1a] border border-[#d4af37]/60 flex items-center justify-center flex-shrink-0 text-[#fbbf24] shadow-md transition-transform duration-300 group-hover:scale-105`}
        >
          <Icon className="text-current" fontSize="inherit" />
        </span>
      )}
      <span className="text-[#080d1a] font-extrabold tracking-wide">
        {children}
      </span>
    </>
  );

  const combinedClasses = `
    group inline-flex items-center justify-center rounded-full
    bg-gradient-to-r from-[#ffe066] via-[#f59e0b] to-[#d97706]
    text-slate-950 shadow-lg shadow-amber-500/25
    hover:shadow-amber-500/50 hover:from-[#ffeb99] hover:to-[#f59e0b]
    transition-all duration-300 border border-amber-200/60
    cursor-pointer ${fullWidth ? 'w-full' : 'w-auto'} ${sizeClasses[size] || sizeClasses.md} ${className}
  `.trim();

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={combinedClasses}
        {...props}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={combinedClasses}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};

export default GoldButton;

