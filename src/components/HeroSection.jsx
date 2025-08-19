import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCalculator, FaClock, FaGem } from 'react-icons/fa';

// Import your building/architecture image
import homeBanner from '../assets/img/homebanner.png';

const HeroStatic = () => {
  const { t } = useTranslation();

  const heroElements = t('pages.home.heroElements', { returnObjects: true });

  const icons = [
    <FaCalculator className="w-8 h-8" />,
    <FaClock className="w-8 h-8" />,
    <FaGem className="w-8 h-8" />
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
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-shadow-md">
              <span className="block mb-2 text-gray-100">{t('pages.home.heroTitle1')}</span>
              <span className="block" style={{ color: '#90692E' }}>{t('pages.home.heroTitle2')}</span>
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
              style={{ backgroundColor: '#90692E' }}
            ></div>

            {/* Description - Clean and readable */}
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-16">
              {t('pages.home.heroDescription')}
            </p>
          </div>

          {/* Elegant & Brand-Aligned Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {heroElements.map((element, index) => (
              <div 
                key={element.title} 
                className="
                  group text-center p-8
                  bg-black/30 backdrop-blur-sm
                  border border-gray-500/30 
                  rounded-lg shadow-xl 
                  transition-all duration-300 
                  hover:border-brand-gold/60 hover:bg-black/50 hover:-translate-y-2"
              >
                {/* Styled Icon Container */}
                <div className="mb-6 flex justify-center">
                  <div className="
                    w-20 h-20 rounded-full 
                    flex items-center justify-center 
                    bg-brand-gold/10
                    border-2 border-brand-gold/40
                    text-brand-gold
                    transition-all duration-300
                    group-hover:bg-brand-gold/20 group-hover:scale-110"
                  >
                    {icons[index]}
                  </div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-100 mb-3">
                  {element.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {element.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroStatic;