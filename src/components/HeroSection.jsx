import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCalculator, FaClock, FaGem } from 'react-icons/fa';

// Import your building/architecture image
import homeBanner from '../assets/img/homeBanner.jpg';

const HeroStatic = () => {
  const { t } = useTranslation();

  const heroElements = t('pages.home.heroElements', { returnObjects: true });

  const icons = [
    <FaCalculator className="w-12 h-12" />,
    <FaClock className="w-12 h-12" />,
    <FaGem className="w-12 h-12" />
  ];

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-brand-dark">
      {/* Background Image & Dark Overlay */}
      <div className="absolute inset-0">
        <img 
          src={homeBanner} 
          alt="Architectural Banner" 
          className="w-full h-full object-cover" 
        />
        {/* A solid, dark overlay matching your site's aesthetic */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center text-white p-4 sm:p-6 lg:p-8">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            
            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-shadow-md">
              <span className="block mb-2 text-gray-100">{t('pages.home.heroTitle1')}</span>
              <span className="block" style={{ color: '#B49562' }}>{t('pages.home.heroTitle2')}</span>
            </h1>

            {/* 
              **
               ACCENT LINE WITH INLINE STYLE
              **
              We removed 'bg-brand-gold' and added the style attribute directly.
              This will 100% work.
            */}
            <div 
              className="w-16 sm:w-20 h-1 mx-auto my-6 sm:my-8" 
              style={{ backgroundColor: '#B49562' }}
            ></div>

            {/* Description - Clean and readable */}
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-16">
              {t('pages.home.heroDescription')}
            </p>

            {/* Icons Section */}
            <div className="flex justify-center items-center space-x-20 mb-10 ">
              {heroElements.map((element, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl text-[#B49562] mb-3">
                    {icons[index]}
                  </div>
                  <h3 className="text-lg font-semibold">
                    {element.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroStatic;