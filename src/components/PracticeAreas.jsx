import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Box, CardContent, Typography, Stack } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GavelIcon from '@mui/icons-material/Gavel';
import DescriptionIcon from '@mui/icons-material/Description';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BalanceIcon from '@mui/icons-material/Balance';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionHeader from './common/SectionHeader';
import GlassCard from './common/GlassCard';
import LuxuryModal from './common/LuxuryModal';

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
              className="group relative h-full flex flex-col justify-between cursor-pointer"
            >
              <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }} className="h-full flex flex-col justify-between">
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

                <Stack direction="row" alignItems="center" spacing={1} sx={{ color: 'var(--gold-accent)', fontSize: '0.85rem', fontWeight: 700, mt: 'auto', pt: 2.5, pb: 0.5 }}>
                  <span>{t('btnViewDetails')}</span>
                  <ArrowForwardIcon sx={{ fontSize: '1rem', transition: 'transform 0.2s', className: 'group-hover:translate-x-1' }} />
                </Stack>
              </CardContent>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Redesigned Luxury Practice Area Detail Popup Modal */}
      <LuxuryModal
        isOpen={Boolean(selectedPractice)}
        onClose={() => setSelectedPractice(null)}
        icon={selectedPractice?.icon}
        title={selectedPractice?.title}
        subtitle="TRICHY DISTRICT COURTS & HIGH COURT ADVOCATE"
        badgeTag="PRACTICE AREA LEGAL DETAIL"
        actions={
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full pt-3">
            <button
              onClick={() => setSelectedPractice(null)}
              className="w-full sm:w-auto bg-[#0c0b0a] hover:bg-[#1f1d1b] border border-[#383020] text-[#e8e4db] font-bold text-xs tracking-[2px] uppercase px-6 py-3.5 rounded-sm cursor-pointer transition-all duration-200"
            >
              {t('modalClose')}
            </button>
            <a
              href={`https://wa.me/918838828632?text=Hello%20Advocate%20Sundaram%20Sir,%20I%20need%20legal%20consultation%20regarding%20${encodeURIComponent(selectedPractice?.title || '')}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-black font-extrabold text-xs tracking-[2px] uppercase px-8 py-3.5 rounded-sm shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon sx={{ fontSize: '1.2rem' }} />
              <span>{t('modalWa')}</span>
            </a>
          </div>
        }
      >
        {selectedPractice && (
          <div>
            {/* Detailed Description */}
            <p className="text-[#a8a49c] text-sm sm:text-base leading-relaxed font-sans mb-6 font-normal">
              {selectedPractice.details}
            </p>

            {/* Legal Representation Badge Card */}
            <div className="bg-[#121110] border border-[#383020] rounded-sm p-4 sm:p-5 flex items-start gap-4 mb-6 shadow-inner">
              <div className="w-10 h-10 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <AccountBalanceIcon sx={{ fontSize: '1.25rem', color: '#f59e0b' }} />
              </div>
              <div>
                <h4 className="text-sm font-semibold font-serif text-[#e8e4db] mb-1">
                  {t('modalLegalRepTitle')}
                </h4>
                <p className="text-xs text-[#a8a49c] leading-relaxed font-sans">
                  {t('modalLegalRepDesc')}
                </p>
              </div>
            </div>
          </div>
        )}
      </LuxuryModal>
    </Box>
  );
};

export default PracticeAreas;
