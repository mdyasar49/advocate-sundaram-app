import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageIcon from '@mui/icons-material/Language';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BalanceIcon from '@mui/icons-material/Balance';
import ScaleIcon from '@mui/icons-material/Scale';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import BusinessIcon from '@mui/icons-material/Business';
import MapIcon from '@mui/icons-material/Map';
import ExploreIcon from '@mui/icons-material/Explore';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  const { lang, setLang, t } = useLanguage();
  const [activeMap, setActiveMap] = React.useState('office');

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Mobile & Tablet TopBar Relocated Info Banner (Hidden on Desktop/Laptop >= 1024px) */}
        <div className="block lg:hidden mb-8 p-4 rounded-2xl bg-[#0b1329] border border-amber-500/30 shadow-lg shadow-black/40">
          <div className="flex flex-col gap-3 text-center items-center">
            <div className="flex items-center justify-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
              <BalanceIcon sx={{ color: 'var(--gold-accent)', fontSize: '1.1rem' }} />
              <span>{t('topBarText')}</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-1">
              <a
                href="tel:+918838828632"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold hover:bg-amber-500/20 transition-all"
              >
                <PhoneIcon sx={{ fontSize: '0.95rem' }} />
                <span>+91 88388 28632</span>
              </a>

              <a
                href="https://wa.me/918838828632"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/20 transition-all"
              >
                <WhatsAppIcon sx={{ fontSize: '1rem' }} />
                <span>{t('topWa')}</span>
              </a>
            </div>

            {/* Mobile TopBar Language Selector */}
            <div className="w-full mt-2 pt-3 border-t border-slate-800">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-2">
                🌐 Select Language / மொழியைத் தேர்வு செய்க:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-amber-500/30">
                {[
                  { code: 'ta', label: 'தமிழ்' },
                  { code: 'en', label: 'English' },
                  { code: 'hi', label: 'हिंदी' },
                  { code: 'te', label: 'తెలుగు' },
                  { code: 'ml', label: 'മലയാളം' },
                ].map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => setLang(item.code)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all duration-300 ${
                      lang === item.code
                        ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-600 text-slate-950 shadow-md shadow-amber-500/30 scale-105'
                        : 'text-slate-300 hover:text-amber-300 hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-grid">
          {/* Column 1: Brand Info & Language Translate */}
          <div className="footer-col brand-col">
            <h3 className="footer-brand-title">{t('brandTitle')}</h3>
            <div className="gold-accent-line"></div>
            <p className="footer-about-text">
              {t('footerAbout')}
            </p>

            {/* Luxury 5-Language Selector */}
            <div className="footer-lang-box mt-5">
              <span className="lang-box-label mb-2 flex items-center text-xs font-bold text-amber-400 uppercase tracking-wider">
                <LanguageIcon sx={{ fontSize: '1.1rem', verticalAlign: 'middle', marginRight: '6px', color: 'var(--gold-accent)' }} />
                Select Language / மொழியைத் தேர்வு செய்க:
              </span>
              <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-amber-500/30 shadow-lg shadow-black/40 backdrop-blur-md">
                {[
                  { code: 'ta', label: 'தமிழ்' },
                  { code: 'en', label: 'English' },
                  { code: 'hi', label: 'हिंदी' },
                  { code: 'te', label: 'తెలుగు' },
                  { code: 'ml', label: 'മലയാളം' },
                ].map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => setLang(item.code)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all duration-300 ${
                      lang === item.code
                        ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-600 text-slate-950 shadow-md shadow-amber-500/30 scale-105'
                        : 'text-slate-300 hover:text-amber-300 hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Practice Courts List */}
          <div className="footer-col courts-col">
            <h4 className="footer-col-title">
              <AccountBalanceIcon sx={{ color: 'var(--gold-accent)', marginRight: '8px', verticalAlign: 'middle' }} />
              {t('footerCourtsHeader')}
            </h4>
            <ul className="footer-courts-list">
              <li><BalanceIcon sx={{ color: 'var(--gold-accent)', fontSize: '0.9rem', marginRight: '6px', verticalAlign: 'middle' }} /> {t('c1')}</li>
              <li><ScaleIcon sx={{ color: 'var(--gold-accent)', fontSize: '0.9rem', marginRight: '6px', verticalAlign: 'middle' }} /> {t('c2')}</li>
              <li><AccountBalanceIcon sx={{ color: 'var(--gold-accent)', fontSize: '0.9rem', marginRight: '6px', verticalAlign: 'middle' }} /> {t('c3')}</li>
            </ul>
          </div>

          {/* Column 3: Contact & Click-to-Locate Addresses */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">
              <ContactPageIcon sx={{ color: 'var(--gold-accent)', marginRight: '8px', verticalAlign: 'middle' }} />
              {t('footerContactHeader')}
            </h4>

            {/* Direct Phone Call Item */}
            <div className="footer-contact-item">
              <PhoneInTalkIcon sx={{ color: 'var(--gold-accent)', fontSize: '1.2rem', verticalAlign: 'middle', marginRight: '8px' }} />
              <a href="tel:+918838828632" className="footer-phone-link">
                +91 88388 28632
              </a>
            </div>

            {/* Interactive Office Address Block */}
            <div
              className={`footer-addr-card ${activeMap === 'office' ? 'active' : ''}`}
              onClick={() => setActiveMap('office')}
              title="Click to view Office on Map"
            >
              <div className="addr-card-header">
                <span><BusinessIcon sx={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '4px' }} /> {t('officeAddressHeader')}</span>
                <span className="pin-status-badge">
                  {activeMap === 'office' ? t('badgeActivePin') : t('badgeClickMap')}
                </span>
              </div>
              <div className="addr-card-body">
                <div className="addr-name">{t('officeAddressName')}</div>
                <div className="addr-line">{t('officeAddressLine1')}</div>
                <div className="addr-line">{t('officeAddressLine2')}</div>
              </div>
            </div>

            {/* Interactive Court Address Block */}
            <div
              className={`footer-addr-card ${activeMap === 'court' ? 'active' : ''}`}
              onClick={() => setActiveMap('court')}
              title="Click to view District Court on Map"
            >
              <div className="addr-card-header">
                <span><ScaleIcon sx={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '4px' }} /> {t('courtAddressHeader')}</span>
                <span className="pin-status-badge">
                  {activeMap === 'court' ? t('badgeActivePin') : t('badgeClickMap')}
                </span>
              </div>
              <div className="addr-card-body">
                <div className="addr-name">{t('courtAddressName')}</div>
                <div className="addr-line">{t('courtAddressLine1')}</div>
                <div className="addr-line">{t('courtAddressLine2')}</div>
              </div>
            </div>
          </div>

          {/* Column 4: Dynamic Interactive Google Map Card */}
          <div className="footer-col map-col">
            <h4 className="footer-col-title">
              <MapIcon sx={{ color: 'var(--gold-accent)', marginRight: '8px', verticalAlign: 'middle' }} />
              {t('mapTitle')}
            </h4>

            <div className="map-card-wrapper">
              <div className="map-container">
                {activeMap === 'office' ? (
                  <iframe
                    title="Advocate Sundaram Jeeyapuram Office Google Map"
                    src="https://maps.google.com/maps?q=S.+Sundaram+Advocate,+3%2F19,+Thiruchandurai+Agraharam,+Jeeyapuram,+Trichy+639101&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                    loading="lazy"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <iframe
                    title="Trichy City District Court Complex Google Map"
                    src="https://maps.google.com/maps?q=Combined+Court+Buildings,+Cantonment,+Tiruchirappalli,+Tamil+Nadu+620001&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                    loading="lazy"
                    allowFullScreen
                  ></iframe>
                )}
              </div>

              {activeMap === 'office' ? (
                <a
                  href="https://maps.google.com/?q=S.+Sundaram+Advocate,+3%2F19,+Thiruchandurai+Agraharam,+Jeeyapuram,+Trichy+639101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-nav-btn"
                >
                  <ExploreIcon sx={{ fontSize: '1.1rem', verticalAlign: 'middle', marginRight: '6px' }} /> {t('officeNavBtn')}
                </a>
              ) : (
                <a
                  href="https://maps.google.com/?q=Combined+Court+Buildings,+Cantonment,+Tiruchirappalli,+Tamil+Nadu+620001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-nav-btn"
                >
                  <ExploreIcon sx={{ fontSize: '1.1rem', verticalAlign: 'middle', marginRight: '6px' }} /> {t('courtNavBtn')}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>{t('footerCopyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
