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
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-5 py-2 text-xs font-bold gap-2',
    md: 'px-8 sm:px-12 py-3.5 sm:py-4 text-xs sm:text-sm font-extrabold gap-2.5',
    lg: 'px-10 sm:px-14 py-4 sm:py-4.5 text-sm sm:text-base font-black gap-3',
  };

  const buttonContent = (
    <>
      {Icon && <Icon className="text-lg" />}
      <span>{children}</span>
    </>
  );

  const combinedClasses = `
    inline-flex items-center justify-center rounded-full
    bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-600
    text-slate-950 tracking-[2px] uppercase shadow-2xl shadow-amber-500/30
    hover:shadow-amber-500/50 transition-all duration-300 border border-amber-200/50
    cursor-pointer ${fullWidth ? 'w-full' : 'w-auto'} ${sizeClasses[size] || sizeClasses.md} ${className}
  `.trim();

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)' }}
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
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)' }}
      whileTap={{ scale: 0.97 }}
      className={combinedClasses}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};

export default GoldButton;
