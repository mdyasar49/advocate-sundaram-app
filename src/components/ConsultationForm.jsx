import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Box, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ConsultationForm = () => {
  const { t } = useLanguage();

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
    const { name, phone, category, location, message } = formData;
    const waMessage = `Hello Advocate Sundaram Sir,%0A%0AMy Name: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ALegal Category: ${encodeURIComponent(category)}%0ALocation: ${encodeURIComponent(location)}%0A%0AQuery:%0A${encodeURIComponent(message)}`;
    window.open(`https://wa.me/918838828632?text=${waMessage}`, '_blank');
  };

  return (
    <Box className="section-padding container" id="contact">
      <div className="section-header">
        <span className="section-tag">{t('tagContact')}</span>
        <h3 className="section-title">{t('titleContact')}</h3>
      </div>
      <motion.div
        className="contact-box"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">{t('lblName')}</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="e.g. K. Selvam"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">{t('lblPhone')}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                placeholder="e.g. 9876543210"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">{t('lblCategory')}</label>
              <select
                id="category"
                name="category"
                className="form-select"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">{t('optDefault')}</option>
                <option value="Civil & Property">{t('opt1')}</option>
                <option value="Criminal Defense">{t('opt2')}</option>
                <option value="Documentation">{t('opt3')}</option>
                <option value="Family Law">{t('opt4')}</option>
                <option value="General Consult">{t('opt5')}</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="location">{t('lblLocation')}</label>
              <input
                type="text"
                id="location"
                name="location"
                className="form-input"
                placeholder="e.g. Lalgudi / Trichy"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="form-group full">
              <label htmlFor="message">{t('lblMsg')}</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                rows="4"
                placeholder="Briefly describe your legal query..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              startIcon={<WhatsAppIcon sx={{ fontSize: '1.4rem !important' }} />}
              className="submit-btn"
              sx={{
                background: 'var(--gold-gradient)',
                color: '#080d1a',
                py: 2,
                px: 4,
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '1rem',
                textTransform: 'none',
                boxShadow: '0 4px 20px var(--gold-glow)',
                '&:hover': {
                  background: 'var(--gold-gradient)',
                  boxShadow: '0 8px 25px rgba(212, 175, 55, 0.5)',
                },
              }}
            >
              {t('btnSubmit')}
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </Box>
  );
};

export default ConsultationForm;
