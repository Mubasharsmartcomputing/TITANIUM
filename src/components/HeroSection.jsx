import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCalculator, FaClock, FaGem } from 'react-icons/fa';

// Import your building/architecture images
import homeBanner from '../assets/img/homeBanner.jpg'; // Assuming this is your subtle background pattern
import rightImage from '../assets/img/hero-carousel/rightImage.png';

const HeroStatic = () => {
  const { t } = useTranslation();

  // This data structure is assumed based on your code
  const heroElements = t('pages.home.heroElements', { returnObjects: true }) || [];

  // It's cleaner to define icon properties once
  const iconSize = 48; // A good size for visibility
  const iconColor = "#B49562"; // Using the brand gold for consistency

  const icons = [
    <FaCalculator size={iconSize} color={iconColor} />,
    <FaClock size={iconSize} color={iconColor} />,
    <FaGem size={iconSize} color={iconColor} />
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Image: Made subtle to not interfere with content */}
      <div className="absolute inset-0">
        <img 
          src={homeBanner} 
          alt="Architectural Banner Pattern" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Hero Content Wrapper */}
      <div className="relative z-10 w-full p-4 sm:p-6 lg:p-8">
        <div className="container mx-auto">

          {/* Top Section: Text & Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 lg:mb-28">
            
            {/* Left Side - Text Content */}
            <div className="text-left">
              {/* Main Title */}
              <h1 className="text-4xl font-bold tracking-tight mb-6">
                <span className="block mb-2 text-gray-700">{t('pages.home.heroTitle1')}</span>
                <span className="block" style={{ color: '#B49562' }}>{t('pages.home.heroTitle2')}</span>
              </h1>

              {/* Accent Line */}
              <div 
                className="w-20 h-1 my-8" 
                style={{ backgroundColor: '#B49562' }}
              ></div>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed max-w-xl">
                {t('pages.home.heroDescription')}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-end">
              <img 
                src={rightImage} 
                alt="Building Illustration" 
                className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto transition-transform duration-300 ease-in-out hover:scale-105" 
              />
            </div>
          </div>

          {/* Bottom Section - Icons */}
          <div className="flex justify-center items-center gap-8 sm:gap-16">
            {heroElements.map((element, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 transition-transform">
                  {icons[index]}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {element.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroStatic;