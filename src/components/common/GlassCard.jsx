import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({
  children,
  className = '',
  onClick,
  hoverable = true,
  glowEffect = true,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverable ? { y: -6 } : undefined}
      onClick={onClick}
      className={`
        backdrop-blur-xl border border-amber-500/20 bg-slate-900/80 rounded-2xl p-6 sm:p-7 md:p-8
        transition-all duration-300 ${hoverable ? 'cursor-pointer hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/20' : ''}
        ${glowEffect ? 'shadow-lg shadow-amber-500/5' : ''}
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
