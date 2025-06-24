import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // 1. Import hook

// --- IMPORT ICONS & IMAGES ---
import { BsEasel, BsPatchCheck, BsBrightnessHigh } from 'react-icons/bs';
import featuresImg from '../assets/img/features-3-2.jpg'; 

// A small, reusable helper component for the icon boxes within this section (no changes needed)
const AltServiceIconBox = ({ icon, title, description }) => (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h4 className="font-bold text-gray-800 text-lg">{title}</h4>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
);

// 2. An array for the static icon components. The order MUST match the services array in your JSON.
const servicesIcons = [
    <BsEasel className="text-red-500" size={42} />,
    <BsPatchCheck className="text-red-500" size={42} />,
    <BsBrightnessHigh className="text-red-500" size={42} />,
    <BsBrightnessHigh className="text-red-500" size={42} />, // Note: You had two of these, so I've kept it the same.
];

// The main component for your section
const StrategicPartnerSection = () => {
  const { t } = useTranslation(); // 3. Initialize hook

  // 4. Get the array of service objects from the translation file
  const servicesData = t('pages.home.strategicPartner.services', { returnObjects: true });

  return (
    <section id="alt-services-2" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                    className="lg:order-2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Alt text is now translated */}
                    <img src={featuresImg} alt={t('pages.home.strategicPartner.imageAlt')} className="rounded-4xl shadow-xl w-[600px] h-auto" />
                </motion.div>
                <motion.div 
                    className="lg:order-1 flex flex-col justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    {/* All text content is now pulled from the translation file */}
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">{t('pages.home.strategicPartner.title')}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        {t('pages.home.strategicPartner.description')}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
                        {/* 5. Map over the translated data to create the icon boxes dynamically */}
                        {servicesData.map((service, index) => (
                           <AltServiceIconBox 
                                key={index}
                                icon={servicesIcons[index]} // Get icon from our static array
                                title={service.title} // Get title from JSON
                                description={service.description} // Get description from JSON
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default StrategicPartnerSection;