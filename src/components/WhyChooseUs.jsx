import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Box, Typography, Chip } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LockIcon from '@mui/icons-material/Lock';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SectionHeader from './common/SectionHeader';
import GlassCard from './common/GlassCard';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const pillars = [
    { num: '01', icon: <VerifiedIcon sx={{ fontSize: '2.2rem', color: 'var(--gold-accent)' }} />, title: t('pil1Title'), desc: t('pil1Desc'), stat: t('pil1Stat') },
    { num: '02', icon: <AutoAwesomeIcon sx={{ fontSize: '2.2rem', color: 'var(--gold-accent)' }} />, title: t('pil2Title'), desc: t('pil2Desc'), stat: t('pil2Stat') },
    { num: '03', icon: <LockIcon sx={{ fontSize: '2.2rem', color: 'var(--gold-accent)' }} />, title: t('pil3Title'), desc: t('pil3Desc'), stat: t('pil3Stat') },
    { num: '04', icon: <AccountBalanceIcon sx={{ fontSize: '2.2rem', color: 'var(--gold-accent)' }} />, title: t('pil4Title'), desc: t('pil4Desc'), stat: t('pil4Stat') },
  ];

  return (
    <Box className="section-padding about-section relative overflow-hidden" id="courts">
      <div className="container relative z-10">
        {/* Reusable Section Header with Rating Badge */}
        <SectionHeader
          tag={t('tagPillars')}
          title={t('titlePillars')}
          ratingText={t('ratingText')}
        />

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
              {/* Reusable GlassCard Component */}
              <GlassCard className="group relative h-full flex flex-col justify-between text-left p-6 sm:p-7 md:p-8">
                <Box sx={{ p: { xs: 1.5, sm: 2.5 }, borderRadius: 3 }} className="flex flex-col justify-between h-full space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-5 w-full">
                      <div className="practice-icon w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:border-amber-400 transition-all shadow-lg shadow-amber-500/10 flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="card-num text-4xl font-extrabold text-amber-400/20 group-hover:text-amber-400/30 transition-colors font-serif leading-none">
                        {item.num}
                      </span>
                    </div>
                    <Typography variant="h6" component="h5" sx={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700, mb: 1.5, fontFamily: 'var(--font-heading)', textAlign: 'left' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65, mb: 3, textAlign: 'left' }}>
                      {item.desc}
                    </Typography>
                  </div>

                  <div className="pt-2 mt-auto">
                    <Chip
                      label={item.stat}
                      size="small"
                      sx={{
                        background: 'rgba(212, 175, 55, 0.12)',
                        color: 'var(--gold-accent)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        py: 0.75,
                        px: 1.5,
                        height: 'auto',
                        width: 'fit-content',
                        maxWidth: '100%',
                        alignSelf: 'flex-start',
                        '& .MuiChip-label': {
                          px: 1,
                          py: 0.25,
                          whiteSpace: 'normal',
                          textAlign: 'left',
                        },
                      }}
                    />
                  </div>
                </Box>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default WhyChooseUs;

