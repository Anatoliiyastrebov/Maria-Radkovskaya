import React from 'react';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { QuestionnaireCard } from '../components/QuestionnaireCard';
import { t } from '../utils/i18n';
import { useLanguage } from '../context/LanguageContext';
import './Landing.css';

export const Landing: React.FC = () => {
  const { lang } = useLanguage();
  
  return (
    <div className="landing">
      <header className="landing-header">
        <Link to="/" className="logo-link">
          <div className="brand-logo">
            <img src="/logo-icon.png" alt="Wellness Logo" className="header-logo" />
            <span className="brand-text">
              <span>{t('common.brandFirstName', lang)}</span>
              <span>{t('common.brandLastName', lang)}</span>
            </span>
          </div>
        </Link>
        <h1 className="header-main-title">{t('common.title', lang)}</h1>
        <LanguageSwitcher />
      </header>
      
      <main className="landing-content">
        <div className="landing-hero">
          <h2 className="landing-title">{t('common.welcome', lang)}</h2>
          <p className="landing-description">
            {t('common.description', lang).split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < t('common.description', lang).split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
          <p className="landing-signature">{t('common.signature', lang)}</p>
        </div>
        
        <div className="questionnaires-grid">
          <QuestionnaireCard questionnaireId="babies" />
          <QuestionnaireCard questionnaireId="children" />
          <QuestionnaireCard questionnaireId="female" />
          <QuestionnaireCard questionnaireId="male" />
        </div>
      </main>
      
      <footer className="landing-footer">
        <Link to="/impressum" className="impressum-link">
          {t('impressum.title', lang)}
        </Link>
      </footer>
    </div>
  );
};

