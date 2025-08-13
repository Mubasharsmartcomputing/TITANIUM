import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';
import logo from '../../assets/img/Logo_for_Titanium_Engineering_Project_Management.png';

// --- IMPORT THE BACKGROUND IMAGE ---
import footerBgImage from '../../assets/img/footer-bg.jpg';
import { NavLink } from 'react-router-dom';

// Static data for social links (icons and hrefs)
const staticSocialLinks = [
  { href: '#', icon: FaTwitter },
  { href: '#', icon: FaFacebookF },
  { href: '#', icon: FaInstagram },
  { href: '#', icon: FaLinkedinIn },
];

const Footer = () => {
  const { t } = useTranslation();
  const [isScrollButtonVisible, setScrollButtonVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setScrollButtonVisible(true);
      } else {
        setScrollButtonVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // --- Dynamically generate data from translation files ---
  const ourServices = t('footer.ourServices.items', { returnObjects: true });
  const legalLinks = t('footer.legal.items', { returnObjects: true });
  
  const socialLinks = t('footer.socials', { returnObjects: true }).map((social, index) => ({
    ...staticSocialLinks[index], // Gets href, icon
    ...social,                   // Gets label
  }));

  return (
    <footer className="relative bg-slate-800 text-gray-300 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${footerBgImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-slate-800/80" />
      </div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Company Info & Socials */}
          <div className="lg:col-span-2 md:ml-32 ml-2"> 
    <NavLink to="/" className="flex items-start pr-20">
                 <img 
                   src={logo} 
                   alt="Titanium Engineering Logo" 
                   className="h-22 w-28 lg:h-28 md:w-40"
                 />
               </NavLink>
            <div className="space-y-3 text-sm">
              <p className="text-gray-400">
                {t('footer.address.street')}<br/>
                {t('footer.address.city')}<br/>
                {t('footer.address.country')}
              </p>
              <div className="space-y-1">
                <p className="text-gray-400">
                  <span className="font-semibold text-white">{t('footer.phoneLabel')}</span> +49 176 62499547
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold text-white">{t('footer.emailLabel')}</span> info@titaniumengineeringpm.com
                </p>
              </div>
            </div>
            
            <div className="flex space-x-2 mt-6">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label} className="w-9 h-9 bg-slate-700 border border-slate-600 rounded flex items-center justify-center text-gray-400 hover:bg-slate-600 hover:text-white hover:border-slate-500 transition-all duration-300">
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          
          {/* Column 2: Our Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">{t('footer.ourServices.title')}</h4>
            <ul className="space-y-2">
              {ourServices.map((service) => (
                <li key={service}>
                  <a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
         
          {/* Column 3: Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">{t('footer.legal.title')}</h4>
            <ul className="space-y-2">
              {legalLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- Bottom Copyright Section --- */}
        <div className="border-t border-slate-700 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            {t('footer.copyright', { companyName: t('footer.companyName') })}
          </p>
        </div>
      </div>

      {/* --- Scroll to Top Button --- */}
      <button
        onClick={scrollToTop}
        aria-label={t('footer.scrollToTop')}
        className={`fixed bottom-6 right-6 w-11 h-11 bg-[#feb900] hover:bg-[#fcd97b] text-white rounded-full 
                    shadow-lg transition-all duration-300 transform hover:scale-105 
                    flex items-center justify-center z-50
                    ${isScrollButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <FaArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
};

export default Footer;