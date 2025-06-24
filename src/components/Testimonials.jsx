import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // 1. Import hook

// --- IMPORT IMAGES ---
import testimonial1 from '../assets/img/testimonials/testimonials-1.jpg';
import testimonial2 from '../assets/img/testimonials/testimonials-2.jpg';
import testimonial3 from '../assets/img/testimonials/testimonials-3.jpg';
import testimonial4 from '../assets/img/testimonials/testimonials-4.jpg';
import testimonial5 from '../assets/img/testimonials/testimonials-5.jpg';


// 2. Data for non-translatable content. Order MUST match the JSON.
const staticTestimonialsInfo = [
  { id: 1, rating: 5, image: testimonial1 },
  { id: 2, rating: 5, image: testimonial2 },
  { id: 3, rating: 5, image: testimonial3 },
  { id: 4, rating: 5, image: testimonial4 },
  { id: 5, rating: 5, image: testimonial5 },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102 min-h-[320px] flex flex-col h-full">
      <div className="text-red-500 mb-4">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-9.983z" />
        </svg>
      </div>
      <StarRating rating={testimonial.rating} />
      <p className="text-gray-700 mb-6 flex-grow italic leading-relaxed">"{testimonial.text}"</p>
      <div className="flex items-center">
        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-red-100" />
        <div>
          <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
          <p className="text-red-600 text-sm font-medium">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { t } = useTranslation(); // 3. Initialize hook
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // 4. Dynamically create data by merging static and translated content
  const testimonialsData = t('pages.home.testimonials.items', { returnObjects: true }).map((item, index) => ({
    ...staticTestimonialsInfo[index], // Gets id, rating, image
    ...item, // Gets name, role, company, text
  }));

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleSlides = () => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 768) return 2;
    return 1;
  };

  const getMaxIndex = () => Math.max(0, testimonialsData.length - getVisibleSlides());

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= getMaxIndex() ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, windowWidth]);

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, getMaxIndex()));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= getMaxIndex() ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? getMaxIndex() : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            {/* 5. Replace hardcoded text */}
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('pages.home.testimonials.title')}</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('pages.home.testimonials.subtitle')}</p>
        </div>

        <div className="relative mb-12">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / getVisibleSlides())}%)` }}>
              {testimonialsData.map((testimonial) => (
                <div key={testimonial.id} className="flex-shrink-0 px-3" style={{ width: `${100 / getVisibleSlides()}%` }}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
          {/* 5. Replace hardcoded aria-labels */}
          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-red-50 z-10" aria-label={t('pages.home.testimonials.prevAriaLabel')}>
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-red-50 z-10" aria-label={t('pages.home.testimonials.nextAriaLabel')}>
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="flex justify-center space-x-3">
          {Array.from({ length: getMaxIndex() + 1 }).map((_, index) => (
            // 5. Replace hardcoded aria-label with dynamic one
            <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-red-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}`} aria-label={t('pages.home.testimonials.goToSetAriaLabel', { index: index + 1 })} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;