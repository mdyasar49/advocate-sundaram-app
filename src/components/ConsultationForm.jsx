import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Box, Button, TextField, MenuItem, Snackbar, Alert, Chip, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import CategoryIcon from '@mui/icons-material/Category';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MessageIcon from '@mui/icons-material/Message';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ConsultationForm = () => {
  const { t } = useLanguage();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '',
    location: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenSnackbar(true);
    const { name, phone, category, location, message } = formData;
    const waMessage = `Hello Advocate Sundaram Sir,%0A%0AMy Name: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ALegal Category: ${encodeURIComponent(category)}%0ALocation: ${encodeURIComponent(location)}%0A%0AQuery:%0A${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/918838828632?text=${waMessage}`, '_blank');
    }, 400);
  };

  return (
    <Box className="section-padding container relative" id="contact">
      <div
        className="section-header text-center mb-12 flex flex-col items-center justify-center mx-auto w-full"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
      >
        <Chip
          label={t('tagContact')}
          sx={{
            background: 'rgba(212, 175, 55, 0.12)',
            color: 'var(--gold-accent)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            fontWeight: 700,
            fontSize: '0.78rem',
            letterSpacing: '1.5px',
            mb: 1.5,
            mx: 'auto',
          }}
        />
        <h3 className="section-title text-3xl md:text-4xl font-extrabold text-white font-serif text-center w-full" style={{ textAlign: 'center' }}>
          {t('titleContact')}
        </h3>
      </div>

      <motion.div
        className="contact-box max-w-3xl mx-auto backdrop-blur-2xl bg-slate-950/80 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/80 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <form onSubmit={handleSubmit} className="space-y-7 sm:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <TextField
              fullWidth
              label={t('lblName')}
              name="name"
              placeholder="e.g. K. Selvam"
              value={formData.name}
              onChange={handleChange}
              required
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: 'var(--gold-accent)' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '14px',
                  background: 'rgba(8, 13, 26, 0.85)',
                  '& fieldset': { borderColor: 'rgba(212, 175, 55, 0.3)' },
                  '&:hover fieldset': { borderColor: 'var(--gold-accent)' },
                  '&.Mui-focused fieldset': { borderColor: 'var(--gold-accent)' },
                },
              }}
            />

            <TextField
              fullWidth
              label={t('lblPhone')}
              name="phone"
              type="tel"
              placeholder="e.g. 9876543210"
              value={formData.phone}
              onChange={handleChange}
              required
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon sx={{ color: 'var(--gold-accent)' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '14px',
                  background: 'rgba(8, 13, 26, 0.85)',
                  '& fieldset': { borderColor: 'rgba(212, 175, 55, 0.3)' },
                  '&:hover fieldset': { borderColor: 'var(--gold-accent)' },
                  '&.Mui-focused fieldset': { borderColor: 'var(--gold-accent)' },
                },
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <TextField
              select
              fullWidth
              label={t('lblCategory')}
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CategoryIcon sx={{ color: 'var(--gold-accent)' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '14px',
                  background: 'rgba(8, 13, 26, 0.85)',
                  '& fieldset': { borderColor: 'rgba(212, 175, 55, 0.3)' },
                  '&:hover fieldset': { borderColor: 'var(--gold-accent)' },
                  '&.Mui-focused fieldset': { borderColor: 'var(--gold-accent)' },
                },
              }}
            >
              <MenuItem value="">{t('optDefault')}</MenuItem>
              <MenuItem value="Civil & Property">{t('opt1')}</MenuItem>
              <MenuItem value="Criminal Defense">{t('opt2')}</MenuItem>
              <MenuItem value="Documentation">{t('opt3')}</MenuItem>
              <MenuItem value="Family Law">{t('opt4')}</MenuItem>
              <MenuItem value="General Consult">{t('opt5')}</MenuItem>
            </TextField>

            <TextField
              fullWidth
              label={t('lblLocation')}
              name="location"
              placeholder="e.g. Lalgudi / Trichy"
              value={formData.location}
              onChange={handleChange}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon sx={{ color: 'var(--gold-accent)' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '14px',
                  background: 'rgba(8, 13, 26, 0.85)',
                  '& fieldset': { borderColor: 'rgba(212, 175, 55, 0.3)' },
                  '&:hover fieldset': { borderColor: 'var(--gold-accent)' },
                  '&.Mui-focused fieldset': { borderColor: 'var(--gold-accent)' },
                },
              }}
            />
          </div>

          <TextField
            fullWidth
            multiline
            rows={4}
            label={t('lblMsg')}
            name="message"
            placeholder="Briefly describe your legal query..."
            value={formData.message}
            onChange={handleChange}
            required
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1 }}>
                  <MessageIcon sx={{ color: 'var(--gold-accent)' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '16px',
                background: 'rgba(8, 13, 26, 0.85)',
                '& fieldset': { borderColor: 'rgba(212, 175, 55, 0.3)' },
                '&:hover fieldset': { borderColor: 'var(--gold-accent)' },
                '&.Mui-focused fieldset': { borderColor: 'var(--gold-accent)' },
              },
            }}
          />

          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              startIcon={<WhatsAppIcon sx={{ fontSize: '1.4rem !important' }} />}
              sx={{
                background: 'var(--gold-gradient)',
                color: '#080d1a',
                py: 1.8,
                borderRadius: '50px',
                fontWeight: 800,
                fontSize: '1.05rem',
                textTransform: 'none',
                boxShadow: '0 6px 25px var(--gold-glow)',
                '&:hover': {
                  background: 'var(--gold-gradient)',
                  boxShadow: '0 8px 30px rgba(212, 175, 55, 0.6)',
                },
              }}
            >
              {t('btnSubmit')}
            </Button>
          </motion.div>
        </form>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert severity="success" variant="filled" sx={{ width: '100%', background: '#10b981', color: '#fff', fontWeight: 700 }}>
            Redirecting to WhatsApp for Instant Legal Consultation...
          </Alert>
        </Snackbar>
      </motion.div>
    </Box>
  );
};

export default ConsultationForm;
