import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

// Simple language selector UI. Actual translations are not implemented;
// this component only stores the choice in localStorage and calls an
// optional callback when changed. It mimics the look of the StoneCatalog
// language button.
const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

function LanguageSwitcher({ onChange }) {
  const { i18n } = useTranslation();
  const current = languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('language', langCode);
    if (onChange) onChange(langCode);
  };

  return (
    <Dropdown align="end" className="language-switcher">
      <Dropdown.Toggle
        variant="link"
        id="language-dropdown"
        className="text-dark"
        style={{ padding: '0.25rem 0.5rem' }}
      >
        <FaGlobe /> {current.flag}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {languages.map((l) => (
          <Dropdown.Item key={l.code} onClick={() => changeLanguage(l.code)}>
            {l.flag} {l.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageSwitcher;
