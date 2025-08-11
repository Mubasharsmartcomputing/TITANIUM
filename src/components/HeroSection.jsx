import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCalculator, FaClock, FaGem } from 'react-icons/fa';

// Import your building/architecture image
import heroStaticImg from '../assets/img/hero-carousel/hero-carousel-5.png';

const HeroStatic = () => {
  const { t } = useTranslation();

  // 1. Get the array of hero elements from your JSON file.
  //    The { returnObjects: true } option is crucial for i18next to give us an array.
  const heroElements = t('pages.home.heroElements', { returnObjects: true });

  // 2. Create a matching array of icons. The order MUST match the JSON order.
  const icons = [
    <FaCalculator className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    <FaClock className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    <FaGem className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
  ];

  return (
    <section id="hero" className="relative bg-[#FDF9F1] min-h-screen overflow-hidden ">
      {/* Static Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroStaticImg}
          alt="Modern buildings and architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight">
              <span className="block mb-2">{t('pages.home.heroTitle1')}</span>
              <span className="block text-white">{t('pages.home.heroTitle2')}</span>
            </h1>

            {/* Yellow accent line */}
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-[#feb900] mx-auto mb-6 sm:mb-8"></div>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-200 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed px-4">
              {t('pages.home.heroDescription')}
            </p>

            {/* 
              ****************************************************
              *** IMPROVED RESPONSIVE GRID SECTION ***
              ****************************************************
              Better mobile responsiveness with proper spacing and sizing
            */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 max-w-6xl mx-auto px-4 sm:px-0">
              {heroElements.map((element, index) => (
                <div key={element.title} className="text-center group">
                  <div className="mb-6 sm:mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <div className="flex items-center justify-center h-20 w-20 sm:h-16 sm:w-16 lg:h-18 lg:w-18 rounded-full bg-gray-200 text-[#feb900] transition-colors duration-300 group-hover:bg-[#feb900] group-hover:text-white shadow-lg">
                      {/* Get the correct icon from our array using its index */}
                      {icons[index]}
                    </div>
                  </div>
                  {/* Use the dynamic title from the JSON file */}
                  <h3 className="text-xl sm:text-xl md:text-lg lg:text-2xl font-bold text-white mb-3 sm:mb-3 px-2">
                    {element.title}
                  </h3>
                  {/* Use the dynamic subtitle from the JSON file */}
                  <p className="text-gray-300 text-base sm:text-base md:text-sm lg:text-lg leading-relaxed px-2 max-w-xs mx-auto">
                    {element.subtitle}
                  </p>
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