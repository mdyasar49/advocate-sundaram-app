import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageIcon from '@mui/icons-material/Language';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BalanceIcon from '@mui/icons-material/Balance';
import GavelIcon from '@mui/icons-material/Gavel';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import BusinessIcon from '@mui/icons-material/Business';
import MapIcon from '@mui/icons-material/Map';
import ExploreIcon from '@mui/icons-material/Explore';

const Footer = () => {
  const { t } = useLanguage();
  const [activeMap, setActiveMap] = React.useState('office');

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand Info & Language Translate */}
          <div className="footer-col brand-col">
            <h3 className="footer-brand-title">{t('brandTitle')}</h3>
            <div className="gold-accent-line"></div>
            <p className="footer-about-text">
              {t('footerAbout')}
            </p>

            {/* Language Translate Selector */}
            <div className="footer-lang-box">
              <span className="lang-box-label">
                <LanguageIcon sx={{ fontSize: '1.1rem', verticalAlign: 'middle', marginRight: '6px', color: 'var(--gold-accent)' }} />
                All Languages:
              </span>
              <div className="lang-select-wrapper">
                <div id="google_translate_element"></div>
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
              <li><GavelIcon sx={{ color: 'var(--gold-accent)', fontSize: '0.9rem', marginRight: '6px', verticalAlign: 'middle' }} /> {t('c2')}</li>
              <li><AccountBalanceIcon sx={{ color: 'var(--gold-accent)', fontSize: '0.9rem', marginRight: '6px', verticalAlign: 'middle' }} /> {t('c3')}</li>
            </ul>
          </div>

          {/* Column 3: Contact & Click-to-Locate Addresses */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">
              <ContactPageIcon sx={{ color: 'var(--gold-accent)', marginRight: '8px', verticalAlign: 'middle' }} />
              {t('footerContactHeader')}
            </h4>

            {/* Direct Phone Link */}
            <a href="tel:+918838828632" className="footer-phone-link">
              <PhoneInTalkIcon sx={{ verticalAlign: 'middle', marginRight: '6px' }} />
              <span>+91 88388 28632</span>
            </a>

            {/* Interactive Office Address Block */}
            <div
              className={`footer-addr-card ${activeMap === 'office' ? 'active' : ''}`}
              onClick={() => setActiveMap('office')}
              title="Click to view Jeeyapuram Office on Map"
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
                <span><GavelIcon sx={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '4px' }} /> {t('courtAddressHeader')}</span>
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
