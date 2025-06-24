import React, { useState, useEffect } from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';

// --- IMPORT THE BACKGROUND IMAGE ---
import footerBgImage from '../../assets/img/footer-bg.jpg';

const Footer = () => {
  // --- State and effect for the "Scroll to Top" button ---
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

  // --- Data for links relevant to your business ---

  const ourServices = [
      'Construction Scheduling',
      'Subcontractor Coordination',
      'Site Documentation',
      'Management Support',
      'Planning & Tendering',
  ];
  
  const legalLinks = ['Privacy Policy', 'Terms of Service', 'Imprint'];

  const socialLinks = [
    { href: '#', icon: FaTwitter, label: 'Twitter' },
    { href: '#', icon: FaFacebookF, label: 'Facebook' },
    { href: '#', icon: FaInstagram, label: 'Instagram' },
    { href: '#', icon: FaLinkedinIn, label: 'LinkedIn' },
  ];

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
        {/* --- UPDATED: Grid columns adjusted to match the 3 content blocks --- */}
        <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Company Info & Socials (takes up 2 columns on large screens) */}
          <div className="lg:col-span-2 md:ml-32 ml-auto"> 
            <h3 className="text-2xl font-bold text-white mb-6">TITANIUM</h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-400">
                Musterstraße 123<br/>
                80331 München<br/>
                Germany
              </p>
              <div className="space-y-1">
                <p className="text-gray-400">
                  <span className="font-semibold text-white">Phone:</span> +49 (0)89 1234567
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold text-white">Email:</span> info@titanium-pm.de
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
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
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
            <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
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
            © Copyright <span className="font-semibold text-white">TITANIUM</span> All Rights Reserved
          </p>
        </div>
      </div>

      {/* --- Scroll to Top Button --- */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 w-11 h-11 bg-red-600 hover:bg-red-700 text-white rounded-full 
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