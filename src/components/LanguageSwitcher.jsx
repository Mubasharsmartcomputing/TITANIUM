import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-[#B49562] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('de')}
        className={`px-2 py-1 rounded ${i18n.language === 'de' ? 'bg-[#B49562] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
      >
        DE
      </button>
      <button
        onClick={() => changeLanguage('tr')}
        className={`px-2 py-1 rounded ${i18n.language === 'tr' ? 'bg-[#B49562] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
      >
        TR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
