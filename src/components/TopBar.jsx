import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Box, Button, Stack, Typography } from '@mui/material';
import BalanceIcon from '@mui/icons-material/Balance';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LanguageSwitcher from './common/LanguageSwitcher';
import GoldButton from './common/GoldButton';

const TopBar = () => {
  const { t } = useLanguage();

  return (
    <Box className="top-bar hidden xl:block">
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
          {/* Reusable 5-Language Switcher Component */}
          <LanguageSwitcher size="sm" />

          <Button
            href="tel:+918838828632"
            startIcon={<PhoneIcon sx={{ fontSize: '1rem', color: 'var(--gold-accent)' }} />}
            sx={{ color: 'var(--text-muted)', textTransform: 'none', fontSize: '0.82rem', p: 0, '&:hover': { color: 'var(--gold-accent)' } }}
          >
            +91 88388 28632
          </Button>

          <GoldButton
            href="https://wa.me/918838828632"
            target="_blank"
            rel="noopener noreferrer"
            icon={WhatsAppIcon}
            size="sm"
          >
            {t('topWa')}
          </GoldButton>
        </motion.div>
      </Box>
    </Box>
  );
};

export default TopBar;

