import React, { useState, useEffect } from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';

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

  // --- Data for links (easy to update) ---
  const usefulLinks = ['Home', 'About us', 'Services', 'Terms of service', 'Privacy policy'];
  const ourServices = ['Web Design', 'Web Development', 'Product Management', 'Marketing', 'Graphic Design'];
  const hicSolutaSetp = ['Molestiae accusamus iure', 'Excepturi dignissimos', 'Suscipit distinctio', 'Dilecta', 'Sit quas consectetur'];
  const nobisIllum = ['Ipsam', 'Laudantium dolorum', 'Dinera', 'Trodelas', 'Flexo'];

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
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('src/assets/img/footer-bg.jpg')`,
          }}
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-slate-800/80" />
        
        {/* Geometric pattern overlay */}
        {/* <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div> */}
      </div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Column 1: Company Info & Socials */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">UpConstruction</h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-400">
                A108 Adam Street<br/>
                New York, NY 535022<br/>
                United States
              </p>
              <div className="space-y-1">
                <p className="text-gray-400">
                  <span className="font-semibold text-white">Phone:</span> +1 5589 55488 55
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold text-white">Email:</span> info@example.com
                </p>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-2 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-slate-700 border border-slate-600 rounded flex items-center justify-center 
                             text-gray-400 hover:bg-slate-600 hover:text-white hover:border-slate-500 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Useful Links</h4>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-2">
              {ourServices.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Hic solutasetp */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Hic solutasetp</h4>
            <ul className="space-y-2">
              {hicSolutaSetp.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Nobis illum */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Nobis illum</h4>
            <ul className="space-y-2">
              {nobisIllum.map((item) => (
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

      {/* --- Red Scroll to Top Button --- */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-10 w-11 h-11 bg-red-600 hover:bg-red-700 text-white rounded-full 
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