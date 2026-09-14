import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import BalanceIcon from '@mui/icons-material/Balance';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const TopBar = () => {
  const { lang, setLang, toggleLanguage, t } = useLanguage();

  return (
    <Box className="top-bar">
      <Box className="container top-bar-wrapper">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <BalanceIcon sx={{ color: 'var(--gold-accent)', fontSize: '1.1rem' }} />
            <Typography variant="body2" component="span" sx={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {t('topBarText')}
            </Typography>
          </Stack>
        </motion.div>

        <motion.div className="contact-quick flex flex-wrap items-center gap-3 justify-center" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          {/* MUI 5-Language Native Selector */}
          <Stack direction="row" spacing={0.5} sx={{ background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--gold-accent)', borderRadius: '20px', p: '2px' }}>
            {[
              { code: 'ta', label: 'தமிழ்' },
              { code: 'en', label: 'ENG' },
              { code: 'hi', label: 'हिंदी' },
              { code: 'te', label: 'తెలుగు' },
              { code: 'ml', label: 'മലയാളം' },
            ].map((item) => (
              <Button
                key={item.code}
                size="small"
                onClick={() => setLang(item.code)}
                sx={{
                  minWidth: 'auto',
                  px: 1.2,
                  py: 0.2,
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  borderRadius: '16px',
                  color: lang === item.code ? '#080d1a' : 'var(--text-muted)',
                  background: lang === item.code ? 'var(--gold-gradient)' : 'transparent',
                  textTransform: 'none',
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Button
            href="tel:+918838828632"
            startIcon={<PhoneIcon sx={{ fontSize: '1rem', color: 'var(--gold-accent)' }} />}
            sx={{ color: 'var(--text-muted)', textTransform: 'none', fontSize: '0.82rem', p: 0, '&:hover': { color: 'var(--gold-accent)' } }}
          >
            +91 88388 28632
          </Button>

          <Button
            href="https://wa.me/918838828632"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<WhatsAppIcon sx={{ fontSize: '1.1rem', color: '#25D366' }} />}
            sx={{ color: 'var(--text-muted)', textTransform: 'none', fontSize: '0.82rem', p: 0, '&:hover': { color: 'var(--gold-accent)' } }}
          >
            {t('topWa')}
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default TopBar;
