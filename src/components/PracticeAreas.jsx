import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Box, Card, CardContent, Typography } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GavelIcon from '@mui/icons-material/Gavel';
import DescriptionIcon from '@mui/icons-material/Description';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BalanceIcon from '@mui/icons-material/Balance';

const PracticeAreas = () => {
  const { t } = useLanguage();

  const practices = [
    { num: '01', icon: <AccountBalanceIcon sx={{ fontSize: '2rem', color: 'var(--gold-accent)' }} />, title: t('p1Title'), desc: t('p1Desc') },
    { num: '02', icon: <GavelIcon sx={{ fontSize: '2rem', color: 'var(--gold-accent)' }} />, title: t('p2Title'), desc: t('p2Desc') },
    { num: '03', icon: <DescriptionIcon sx={{ fontSize: '2rem', color: 'var(--gold-accent)' }} />, title: t('p3Title'), desc: t('p3Desc') },
    { num: '04', icon: <Diversity1Icon sx={{ fontSize: '2rem', color: 'var(--gold-accent)' }} />, title: t('p4Title'), desc: t('p4Desc') },
    { num: '05', icon: <HandshakeIcon sx={{ fontSize: '2rem', color: 'var(--gold-accent)' }} />, title: t('p5Title'), desc: t('p5Desc') },
    { num: '06', icon: <BalanceIcon sx={{ fontSize: '2rem', color: 'var(--gold-accent)' }} />, title: t('p6Title'), desc: t('p6Desc') },
  ];

  return (
    <Box className="section-padding container" id="practices">
      <div className="section-header">
        <span className="section-tag">{t('tagPractices')}</span>
        <h3 className="section-title">{t('titlePractices')}</h3>
      </div>

      <div className="practice-grid">
        {practices.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <Card
              className="practice-card"
              sx={{
                background: 'var(--navy-card)',
                border: '1px solid var(--navy-card-border)',
                borderRadius: '16px',
                p: 2,
                height: '100%',
                position: 'relative',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'var(--gold-accent)',
                  boxShadow: '0 12px 30px rgba(212, 175, 55, 0.2)',
                },
              }}
            >
              <CardContent sx={{ p: 1, '&:last-child': { pb: 1 } }}>
                <span className="card-num">{item.num}</span>
                <div className="practice-icon">
                  {item.icon}
                </div>
                <Typography variant="h5" component="h4" sx={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700, mb: 1, fontFamily: 'var(--font-heading)' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Box>
  );
};

export default PracticeAreas;
