import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCalculator, FaCalendarAlt, FaGem } from 'react-icons/fa';

// Import your building/architecture images
import homeBanner from '../assets/img/homeBanner.jpg'; // Assuming this is your subtle background pattern
import rightImage from '../assets/img/rightImage4.png';

const HeroStatic = () => {
  const { t } = useTranslation();

  // This data structure is assumed based on your code
  const heroElements = t('pages.home.heroElements', { returnObjects: true }) || [];

  // It's cleaner to define icon properties once
  const iconSize = 48; // A good size for visibility
  const iconColor = "#B49562"; // Using the brand gold for consistency

  const icons = [
    <FaCalendarAlt className="h-6 w-6" />,
    <FaCalculator className="h-6 w-6" />,
    <FaGem className="h-6 w-6" />
  ];

  return (
    <section id="hero" className="relative min-h-[40vh] lg:min-h-[60vh] flex items-center overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={homeBanner} 
          alt="Architectural Banner Pattern" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Hero Content Wrapper */}
      <div className="relative z-10 w-full py-4 px-4 sm:py-6 sm:px-6 lg:py-8 lg:px-8">
        <div className="container mx-auto max-w-7xl">

          {/* Top Section: Text & Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left">
              {/* Main Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                <span className="block mb-2 text-gray-800">{t('pages.home.heroTitle1')}</span>
                <span className="block" style={{ color: '#B49562' }}>{t('pages.home.heroTitle2')}</span>
              </h1>

              {/* Accent Line */}
              <div 
                className="w-20 h-1 my-4 mx-auto lg:mx-0" 
                style={{ backgroundColor: '#B49562' }}
              ></div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-900 leading-relaxed mb-6 mx-auto lg:mx-0 max-w-xl">
                {t('pages.home.heroDescription')}
              </p>
            
             {/* Icons */}
              <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8">
                {heroElements.map((element, index) => (
                  <div key={index} className="flex flex-col items-center text-center group">
                    <div className="mb-2">
                      <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-200 text-[#B49562] transition-colors duration-300 group-hover:bg-[#B49562] group-hover:text-white">
                        {icons[index]}
                      </div>
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-900">
                      {element.title}
                    </h3>
                  </div>
                ))}
              </div>             
            </div>
            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-end">
              <img 
                src={rightImage}
                alt="Building Illustration" 
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto max-h-95 object-contain transition-transform duration-300 ease-in-out hover:scale-105" 
              />       
            </div>          
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroStatic;