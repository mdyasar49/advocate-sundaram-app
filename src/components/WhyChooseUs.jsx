import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Box, Typography, Paper, Chip, Rating, Avatar, Stack } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LockIcon from '@mui/icons-material/Lock';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import StarIcon from '@mui/icons-material/Star';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const pillars = [
    { icon: <VerifiedIcon sx={{ fontSize: '2.5rem', color: 'var(--gold-accent)' }} />, title: t('pil1Title'), desc: t('pil1Desc'), stat: '100% Bar Certified' },
    { icon: <AutoAwesomeIcon sx={{ fontSize: '2.5rem', color: 'var(--gold-accent)' }} />, title: t('pil2Title'), desc: t('pil2Desc'), stat: '15+ Yrs Experience' },
    { icon: <LockIcon sx={{ fontSize: '2.5rem', color: 'var(--gold-accent)' }} />, title: t('pil3Title'), desc: t('pil3Desc'), stat: '100% Confidential' },
    { icon: <AccountBalanceIcon sx={{ fontSize: '2.5rem', color: 'var(--gold-accent)' }} />, title: t('pil4Title'), desc: t('pil4Desc'), stat: 'High Court & District Courts' },
  ];

  return (
    <Box className="section-padding about-section relative overflow-hidden" id="courts">
      <div className="container relative z-10">
        <div className="section-header text-center mb-12">
          <Chip
            label={t('tagPillars')}
            sx={{
              background: 'rgba(212, 175, 55, 0.12)',
              color: 'var(--gold-accent)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              fontWeight: 700,
              fontSize: '0.78rem',
              letterSpacing: '1.5px',
              mb: 1.5,
            }}
          />
          <h3 className="section-title text-3xl md:text-4xl font-extrabold text-white font-serif mb-4">{t('titlePillars')}</h3>

          <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} sx={{ mt: 2 }}>
            <Rating value={5} readOnly precision={0.5} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
            <Typography variant="body2" sx={{ color: 'var(--gold-accent)', fontWeight: 700, fontSize: '0.9rem' }}>
              5.0 / 5.0 Rating by Trichy Clients
            </Typography>
          </Stack>
        </div>

        <div className="pillars-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="h-full"
            >
              <Paper
                elevation={0}
                className="pillar-box group relative h-full backdrop-blur-xl border border-amber-500/20 bg-slate-900/70 rounded-2xl p-6 text-center flex flex-col justify-between transition-all duration-300 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2"
              >
                <div>
                  <Box className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </Box>
                  <Typography variant="h6" component="h5" sx={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, mb: 1, fontFamily: 'var(--font-heading)' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, mb: 3 }}>
                    {item.desc}
                  </Typography>
                </div>

                <Chip
                  label={item.stat}
                  size="small"
                  sx={{
                    background: 'rgba(212, 175, 55, 0.1)',
                    color: 'var(--gold-accent)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    py: 0.5,
                    mx: 'auto',
                  }}
                />
              </Paper>
            </motion.div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default WhyChooseUs;
