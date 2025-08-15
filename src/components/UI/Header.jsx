import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { HiGlobeAlt, HiSearch, HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import logo from '../../assets/img/Logo_for_Titanium_Engineering_Project_Management.png';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const languages = [
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' }
  ];

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setLanguageDropdownOpen(false);
    console.log(`Language changed to: ${languageCode}`);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  // Navigation items with translations
  const navItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'services', path: '/services' },
    // { key: 'consultant', path: '/consultant' },
    // { key: 'projects', path: '/projects' },
    { key: 'blog', path: '/blog' },
    { key: 'contact', path: '/contact' },
  ];

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-20">
            
            {/* Logo */}
            <NavLink to="/">
              <img 
                src={logo} 
                alt="Titanium Engineering Logo" 
                className="h-20 w-24 lg:h-32 lg:w-36"
              />
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => {
                const isSpecialItem = item.key === 'about' || item.key === 'services';
                return (
                  <NavLink
                    key={item.key}
                    to={item.path}
                    className={({ isActive }) =>
                      `transition-colors duration-200 font-medium text-sm xl:text-base uppercase tracking-wider px-2 py-1 border-b-2
                       ${isActive
                         ? isSpecialItem ? 'text-[#FFD700] border-[#FFD700]' : 'text-[#feb900] border-[#feb900]'
                         : isSpecialItem ? 'text-gray-700 border-transparent hover:text-[#FFD700]' : 'text-gray-700 border-transparent hover:text-[#feb900]'
                       }`
                    }
                  >
                    {t(`nav.${item.key}`)}
                  </NavLink>
                );
              })}
            </nav>

            {/* Desktop Right Side Icons */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={toggleLanguageDropdown}
                  className="flex items-center space-x-2 text-gray-700 hover:text-[#FFD700] transition-colors duration-200 px-2 py-1 rounded-md"
                >
                  <span className="text-sm font-medium">{i18n.language.toUpperCase()}</span>
                  <HiGlobeAlt size={16} />
                  <HiChevronDown size={14} className={`transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Language Dropdown */}
                {isLanguageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-red-50 hover:text-[#feb900] transition-colors duration-200 flex items-center space-x-2
                          ${i18n.language === language.code ? 'bg-red-50 text-[#feb900]' : 'text-gray-700'}
                        `}
                      >
                        <span>{language.flag}</span>
                        <span>{language.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button 
                className="text-[#FFD700] hover:text-[#d3c07e] transition-colors duration-200"
                title={t('common.search')}
              >
                <HiSearch size={20} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={handleMenuToggle}
                className="text-gray-700 hover:text-[#feb900] transition-colors duration-200 p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
          `}
        >
          <nav className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => {
              const isSpecialItem = item.key === 'about' || item.key === 'services';
              return (
                <NavLink
                  key={item.key}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-3 py-3 font-medium text-sm uppercase tracking-wider rounded-md transition-colors duration-200
                     ${isActive
                       ? isSpecialItem ? 'bg-[#FFD700] text-white' : 'bg-[#feb900] text-white'
                       : isSpecialItem ? 'text-gray-700 hover:text-[#FFD700] hover:bg-red-50' : 'text-gray-700 hover:text-[#feb900] hover:bg-red-50'
                     }`
                  }
                >
                  {t(`nav.${item.key}`)}
                </NavLink>
              );
            })}
            
            {/* Mobile Language Switcher */}
            <div className="pt-4 mt-4 border-t border-gray-200 px-3">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">{t('common.language')}</span>
              </div>
              <div className="space-y-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-200 flex items-center space-x-2
                      ${i18n.language === language.code 
                        ? 'bg-[#feb900] text-white' 
                        : 'text-gray-700 hover:text-[#d8c274] hover:bg-red-50'
                      }
                    `}
                  >
                    <span>{language.flag}</span>
                    <span>{language.name}</span>
                  </button>
                ))}
              </div>
              
              {/* Search button */}
              <div className="flex justify-end pt-3 mt-3 border-t border-gray-200">
                <button 
                  className="text-[#feb900] hover:text-[#d8c274] transition-colors duration-200"
                  title={t('common.search')}
                >
                  <HiSearch size={20} />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 lg:hidden z-40" 
          onClick={closeMenu}
        />
      )}

      {/* Overlay for language dropdown */}
      {isLanguageDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setLanguageDropdownOpen(false)}
        />
      )}
    </>
  );
}