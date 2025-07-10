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
    <FaCalculator className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    <FaClock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    <FaGem className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
  ];

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-gray-900">
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
              *** MODIFIED SECTION - NOW FULLY DYNAMIC ***
              ****************************************************
              Instead of three separate divs, we now map over the heroElements array.
              This makes the code cleaner and ensures it changes with the language.
            */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
              {heroElements.map((element, index) => (
                <div key={element.title} className="text-center group">
                  <div className="mb-4 sm:mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-200 text-[#feb900] transition-colors duration-300 group-hover:bg-[#feb900] group-hover:text-white">
                      {/* Get the correct icon from our array using its index */}
                      {icons[index]}
                    </div>
                  </div>
                  {/* Use the dynamic title from the JSON file */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                    {element.title}
                  </h3>
                  {/* Use the dynamic subtitle from the JSON file */}
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
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