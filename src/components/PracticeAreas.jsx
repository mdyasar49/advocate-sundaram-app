import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Box, CardContent, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, Stack } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GavelIcon from '@mui/icons-material/Gavel';
import DescriptionIcon from '@mui/icons-material/Description';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BalanceIcon from '@mui/icons-material/Balance';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import SectionHeader from './common/SectionHeader';
import GlassCard from './common/GlassCard';

const PracticeAreas = () => {
  const { t } = useLanguage();
  const [selectedPractice, setSelectedPractice] = useState(null);

  const practices = [
    { num: '01', icon: <AccountBalanceIcon sx={{ fontSize: '2.2rem', color: 'var(--gold-accent)' }} />, title: t('p1Title'), desc: t('p1Desc'), details: t('p1Details') },
    { num: '02', icon: <GavelIcon sx={{ fontSize: '2.2rem', color: 'var(--gold-accent)' }} />, title: t('p2Title'), desc: t('p2Desc'), details: t('p2Details') },
    { num: '03', icon: <DescriptionIcon sx={{ fontSize: '2.2rem', color: 'var(--gold-accent)' }} />, title: t('p3Title'), desc: t('p3Desc'), details: t('p3Details') },
    { num: '04', icon: <Diversity1Icon sx={{ fontSize: '2.2rem', color: 'var(--gold-accent)' }} />, title: t('p4Title'), desc: t('p4Desc'), details: t('p4Details') },
    { num: '05', icon: <HandshakeIcon sx={{ fontSize: '2.2rem', color: 'var(--gold-accent)' }} />, title: t('p5Title'), desc: t('p5Desc'), details: t('p5Details') },
    { num: '06', icon: <BalanceIcon sx={{ fontSize: '2.2rem', color: 'var(--gold-accent)' }} />, title: t('p6Title'), desc: t('p6Desc'), details: t('p6Details') },
  ];

  return (
    <Box className="section-padding container relative" id="practices">
      {/* Reusable Section Header */}
      <SectionHeader tag={t('tagPractices')} title={t('titlePractices')} />

      <div className="practice-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {practices.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="h-full"
          >
            {/* Reusable GlassCard Component */}
            <GlassCard
              onClick={() => setSelectedPractice(item)}
              className="group relative h-full flex flex-col justify-between"
            >
              <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }} className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5 w-full">
                    <div className="practice-icon w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:border-amber-400 transition-all shadow-lg shadow-amber-500/10 flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="card-num text-4xl font-extrabold text-amber-400/20 group-hover:text-amber-400/30 transition-colors font-serif leading-none">
                      {item.num}
                    </span>
                  </div>
                  <Typography variant="h5" component="h4" sx={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, mb: 1, fontFamily: 'var(--font-heading)' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, mb: 3 }}>
                    {item.desc}
                  </Typography>
                </div>

                <Stack direction="row" alignItems="center" spacing={1} sx={{ color: 'var(--gold-accent)', fontSize: '0.85rem', fontWeight: 700, mt: 'auto' }}>
                  <span>{t('btnViewDetails')}</span>
                  <ArrowForwardIcon sx={{ fontSize: '1rem', transition: 'transform 0.2s', className: 'group-hover:translate-x-1' }} />
                </Stack>
              </CardContent>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Interactive Material UI Dialog Modal */}
      <Dialog
        open={Boolean(selectedPractice)}
        onClose={() => setSelectedPractice(null)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            background: '#0a101d',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            borderRadius: '24px',
            p: 1.5,
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(20px)',
          },
        }}
      >
        {selectedPractice && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1, pt: 2, px: 3 }}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <div
                  className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px' }}
                >
                  {selectedPractice.icon}
                </div>
                <Typography variant="h6" component="span" sx={{ color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem' }}>
                  {selectedPractice.title}
                </Typography>
              </Stack>
              <Button onClick={() => setSelectedPractice(null)} sx={{ color: 'var(--text-muted)', minWidth: 'auto', p: 0.5 }}>
                <CloseIcon />
              </Button>
            </DialogTitle>

            <DialogContent dividers sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', py: 2.5, px: 3 }}>
              <Typography variant="body1" sx={{ color: '#cbd5e1', lineHeight: 1.7, mb: 2.5, fontSize: '0.95rem' }}>
                {selectedPractice.details}
              </Typography>
              <div
                className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25"
                style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <AccountBalanceIcon sx={{ fontSize: '1.25rem', color: 'var(--gold-accent)', flexShrink: 0 }} />
                  <Typography variant="subtitle2" sx={{ color: 'var(--gold-accent)', fontWeight: 700, lineHeight: 1.3, m: 0, fontSize: '0.92rem' }}>
                    {t('modalLegalRepTitle')}
                  </Typography>
                </div>
                <Typography variant="caption" sx={{ color: 'var(--text-muted)', display: 'block', lineHeight: 1.5, pl: '28px', fontSize: '0.82rem' }}>
                  {t('modalLegalRepDesc')}
                </Typography>
              </div>
            </DialogContent>

            <DialogActions sx={{ pt: 2, px: 2 }}>
              <Button onClick={() => setSelectedPractice(null)} sx={{ color: 'var(--text-muted)', textTransform: 'none' }}>
                {t('modalClose')}
              </Button>
              <Button
                component="a"
                href={`https://wa.me/918838828632?text=Hello%20Advocate%20Sundaram%20Sir,%20I%20need%20legal%20consultation%20regarding%20${encodeURIComponent(selectedPractice.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                startIcon={<WhatsAppIcon />}
                sx={{
                  background: 'var(--gold-gradient)',
                  color: '#080d1a',
                  fontWeight: 700,
                  borderRadius: '30px',
                  px: 3,
                  py: 1,
                  textTransform: 'none',
                  boxShadow: '0 4px 20px var(--gold-glow)',
                  '&:hover': { background: 'var(--gold-gradient)', boxShadow: '0 6px 25px rgba(212, 175, 55, 0.5)' },
                }}
              >
                {t('modalWa')}
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default PracticeAreas;
