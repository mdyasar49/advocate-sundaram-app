import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Box, Typography, Paper } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LockIcon from '@mui/icons-material/Lock';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const pillars = [
    { icon: <VerifiedIcon sx={{ fontSize: '2.5rem', color: 'var(--gold-accent)', mb: 1 }} />, title: t('pil1Title'), desc: t('pil1Desc') },
    { icon: <AutoAwesomeIcon sx={{ fontSize: '2.5rem', color: 'var(--gold-accent)', mb: 1 }} />, title: t('pil2Title'), desc: t('pil2Desc') },
    { icon: <LockIcon sx={{ fontSize: '2.5rem', color: 'var(--gold-accent)', mb: 1 }} />, title: t('pil3Title'), desc: t('pil3Desc') },
    { icon: <AccountBalanceIcon sx={{ fontSize: '2.5rem', color: 'var(--gold-accent)', mb: 1 }} />, title: t('pil4Title'), desc: t('pil4Desc') },
  ];

  return (
    <Box className="section-padding about-section" id="courts">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t('tagPillars')}</span>
          <h3 className="section-title">{t('titlePillars')}</h3>
        </div>
        <div className="pillars-list">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              style={{ height: '100%' }}
            >
              <Paper
                className="pillar-box"
                elevation={0}
                sx={{
                  background: 'var(--navy-card)',
                  border: '1px solid var(--navy-card-border)',
                  borderRadius: '16px',
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'var(--gold-accent)',
                    boxShadow: '0 10px 25px rgba(212, 175, 55, 0.2)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                {item.icon}
                <Typography variant="h6" component="h5" sx={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, mb: 1, fontFamily: 'var(--font-heading)' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {item.desc}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default WhyChooseUs;
