import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Carousel images - you can replace these with your actual image paths
  const carouselImages = [
   
    'src/assets/img/hero-carousel/hero-carousel-1.jpg',
    'src/assets/img/hero-carousel/hero-carousel-2.jpg',
    'src/assets/img/hero-carousel/hero-carousel-3.jpg',
    'src/assets/img/hero-carousel/hero-carousel-4.jpg',
    'src/assets/img/hero-carousel/hero-carousel-5.jpg',
    
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselImages.length]);

  // Navigation functions
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const handleGetStarted = () => {
    // Add your get started functionality here
    document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-gray-900">
      {/* Carousel Images */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Animated birds/elements overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-gray-300 text-xs animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              ✈
            </div>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
             The Foundation of Everything 
              <br />
              <span className="text-white">You Want to Build</span>
            </h1>

            {/* Orange accent line */}
            <div className="w-20 h-1 bg-red-500 mx-auto mb-8"></div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              At Titanium Engineering Project Management, we bring hands-on experience in civil engineering to your projects. From scheduling and site coordination to documentation and authority liaison, we handle every detail with precision. Serving Bavaria and across Germany, we help planning offices and construction companies build with confidence.
            </p>

            {/* Get Started Button */}
            <button
              onClick={handleGetStarted}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-red-500 rounded-full hover:bg-red-500 hover:border-red-500 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-500/30"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 z-20 pointer-events-none">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/30 pointer-events-auto"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/30 pointer-events-auto"
          aria-label="Next slide"
        >
          <FaChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                index === currentSlide
                  ? 'bg-orange-500 scale-125'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Auto-play control */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isAutoPlaying ? (
            <FaPause className="w-4 h-4" />
          ) : (
            <FaPlay className="w-4 h-4" />
          )}
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;