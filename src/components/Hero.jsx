import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Box, Chip, Stack, Typography, Paper } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import BalanceIcon from '@mui/icons-material/Balance';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import GoldButton from './common/GoldButton';

const Hero = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="hero" style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      {/* Background Graphic Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/images/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
          pointerEvents: 'none',
          borderRadius: '24px',
          zIndex: 0,
        }}
      />

      <div className="container hero-grid" style={{ position: 'relative', zIndex: 1, overflow: 'hidden', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}
        >
          <div className="hero-badge">
            <SecurityIcon sx={{ color: 'var(--gold-accent)', fontSize: '1rem', mr: 0.5 }} /> {t('heroBadge')}
          </div>
          <h2 className="hero-headline">
            {t('heroHeadline1')}
            <span>{t('heroHeadlineSpan')}</span>
          </h2>
          <p className="hero-description">
            {t('heroDesc')}
          </p>
          <div className="hero-actions flex flex-wrap items-center gap-4">
            <GoldButton
              href="tel:+918838828632"
              icon={PhoneIcon}
              size="md"
            >
              {t('btnCall')}
            </GoldButton>

            <GoldButton
              href="https://wa.me/918838828632?text=Hello%20Advocate%20Sundaram%20Sir,%20I%20would%20like%20to%20schedule%20a%20legal%20consultation."
              target="_blank"
              icon={WhatsAppIcon}
              size="md"
            >
              {t('btnWa')}
            </GoldButton>
          </div>

          {/* Thirukkural on Justice Banner Card (Multi-Language MUI Chips) */}
          <motion.div
            className="kural-banner-card"
            style={{
              background: 'rgba(15, 23, 42, 0.85)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderLeft: '4px solid var(--gold-accent)',
              borderRadius: '16px',
              padding: '1.5rem 1.75rem',
              marginTop: '2.25rem',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              maxWidth: '100%',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '10px', width: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', maxWidth: '100%' }}>
                <BalanceIcon sx={{ color: 'var(--gold-accent)', fontSize: '1.2rem', flexShrink: 0 }} />
                <Typography variant="subtitle2" sx={{ color: 'var(--gold-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', wordBreak: 'break-word', maxWidth: '100%' }}>
                  {lang === 'ta' ? 'திருக்குறள் (குறள் 118: நடுவுநிலைமை / Justice)' : 'Thirukkural (Kural 118: Justice & Impartiality)'}
                </Typography>
              </Box>
            </div>

            {/* Kural Content synced directly with global website language */}
            {lang === 'ta' && (
              <>
                <p className="kural-verse-text" style={{ fontFamily: '"Mukta Malar", serif', fontSize: '1.05rem', color: '#fff', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.5, marginBottom: '6px', wordBreak: 'break-word' }}>
                  "சமன்செய்து சீர்தூக்கும் கோல்போல் அமைந்தொருபால்<br />
                  கோடாமை சான்றோர்க்கு அணி."
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', wordBreak: 'break-word' }}>
                  <strong style={{ color: 'var(--gold-accent)' }}>பொருள்:</strong> தராசுக் கோல் போல் எந்தப் பக்கமும் சாயாமல், நடுவுநிலைமையோடு நீதியை நிலைநாட்டுவதே சான்றோர்க்கு அழகாகும்.
                </p>
              </>
            )}

            {lang === 'en' && (
              <>
                <p className="kural-verse-text" style={{ fontSize: '0.98rem', color: '#fff', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.5, marginBottom: '6px', wordBreak: 'break-word' }}>
                  "To stand like a balanced scale, uncurved by favor or prejudice, is the true ornament of the wise."
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', wordBreak: 'break-word' }}>
                  <strong style={{ color: 'var(--gold-accent)' }}>Meaning:</strong> Like a balanced scale that holds level without leaning to any side, remaining completely unbiased and upholding justice is the duty of legal guardians.
                </p>
              </>
            )}

            {lang === 'hi' && (
              <>
                <p className="kural-verse-text" style={{ fontSize: '0.98rem', color: '#fff', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.5, marginBottom: '6px', wordBreak: 'break-word' }}>
                  "समान रूप से तौलने वाले तराजू की भांति, किसी एक ओर झुके बिना निष्पक्ष रहना ही ज्ञानियों का आभूषण है।"
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', wordBreak: 'break-word' }}>
                  <strong style={{ color: 'var(--gold-accent)' }}>अर्थ:</strong> तराजू के कांटे की भांति निष्पक्ष रहकर न्याय की रक्षा करना ही सच्चे न्यायविद का धर्म है।
                </p>
              </>
            )}

            {lang === 'te' && (
              <>
                <p className="kural-verse-text" style={{ fontSize: '0.98rem', color: '#fff', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.5, marginBottom: '6px', wordBreak: 'break-word' }}>
                  "త్రాసువలె సమంగా తూచి, ఏ పక్కకీ తలవంచకుండా నిష్పాక్షికంగా ఉండటమే ప్రాజ్ఞులకు అలంకారం."
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', wordBreak: 'break-word' }}>
                  <strong style={{ color: 'var(--gold-accent)' }}>భావం:</strong> త్రాసు ముల్లు వలె ఎటు వైపు వాలకుండా నిష్పాక్షికంగా న్యాయాన్ని నిలబెట్టడమే న్యాయవాది ధర్మం.
                </p>
              </>
            )}

            {lang === 'ml' && (
              <>
                <p className="kural-verse-text" style={{ fontSize: '0.98rem', color: '#fff', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.5, marginBottom: '6px', wordBreak: 'break-word' }}>
                  "തുലാസ്സുപോലെ സമമായി തൂക്കി, ഒരു വശത്തേക്കും ചായാതെ നിഷ്പക്ഷമായി നിലകൊള്ളുന്നതാണ് വിവേകികളുടെ അലങ്കാരം."
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', wordBreak: 'break-word' }}>
                  <strong style={{ color: 'var(--gold-accent)' }}>അർത്ഥം:</strong> തുലാസ് പോലെ പക്ഷപാതമില്ലാതെ നീതി നടപ്പിലാക്കുക എന്നതാണ് നിയമപാലകന്റെ കർത്തവ്യം.
                </p>
              </>
            )}
          </motion.div>
        </motion.div>

        {/* Advocate Profile Card */}
        <motion.div
          className="advocate-card"
          id="about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ maxWidth: '100%', boxSizing: 'border-box' }}
        >
          <div className="advocate-avatar-wrap">
            <div className="advocate-avatar">
              <PersonIcon sx={{ fontSize: '3.5rem', color: 'var(--gold-accent)' }} />
            </div>
          </div>
          <div className="advocate-details">
            <h3>{t('cardName')}</h3>
            <p>{t('cardRole')}</p>
          </div>
          <ul className="meta-list">
            <li><AccountBalanceIcon sx={{ color: 'var(--gold-accent)', fontSize: '1.1rem', mr: 1, flexShrink: 0 }} /> {t('metaPractice')}</li>
            <li><PhoneIcon sx={{ color: 'var(--gold-accent)', fontSize: '1.1rem', mr: 1, flexShrink: 0 }} /> {t('metaPhone')}</li>
            <li><LocationOnIcon sx={{ color: 'var(--gold-accent)', fontSize: '1.1rem', mr: 1, flexShrink: 0 }} /> {t('metaLocation')}</li>
            <li><VerifiedIcon sx={{ color: 'var(--gold-accent)', fontSize: '1.1rem', mr: 1, flexShrink: 0 }} /> {t('metaBar')}</li>
          </ul>

          {/* Executive Legal Philosophy Quote Box */}
          <div
            className="advocate-quote-box"
            style={{
              background: 'rgba(212, 175, 55, 0.06)',
              borderLeft: '4px solid var(--gold-accent)',
              padding: '1rem 1.25rem',
              borderRadius: '0 12px 12px 0',
              marginTop: '1.25rem',
              fontSize: '0.88rem',
              fontStyle: 'italic',
              color: '#e2e8f0',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              maxWidth: '100%',
              boxSizing: 'border-box',
            }}
          >
            <FormatQuoteIcon sx={{ color: 'var(--gold-accent)', transform: 'scaleX(-1)', flexShrink: 0 }} />
            <span style={{ wordBreak: 'break-word', maxWidth: '100%' }}>
              {t('quoteText')}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
