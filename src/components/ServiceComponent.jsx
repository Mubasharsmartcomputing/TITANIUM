import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // 1. Import hook

// --- IMPORT ICONS ---
import { FaTasks, FaUsersCog, FaFileSignature, FaHardHat, FaClipboardList, FaLandmark } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

// 2. Data for non-translatable content. The order MUST match the JSON.
const staticServicesData = [
  { id: 1, icon: <FaTasks size={32} />, link: '/services/scheduling' },
  { id: 2, icon: <FaUsersCog size={32} />, link: '/services/coordination' },
  { id: 3, icon: <FaFileSignature size={32} />, link: '/services/documentation' },
  { id: 4, icon: <FaHardHat size={32} />, link: '/services/support' },
  { id: 5, icon: <FaClipboardList size={32} />, link: '/services/tendering' },
  { id: 6, icon: <FaLandmark size={32} />, link: '/services/authorities' },
];

// --- REUSABLE SERVICE CARD COMPONENT ---
// Now accepts `readMoreText` prop
const ServiceCard = ({ icon, title, description, link, readMoreText }) => (
  <div className="group bg-white p-8 rounded-4xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
    <div className="icon-wrapper mb-6">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-500 transition-colors duration-300 group-hover:bg-red-500 group-hover:text-white">{icon}</div>
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow">{description}</p>
    <a href={link} className="font-bold text-red-600 hover:text-red-700 flex items-center mt-auto self-start">
      {/* Use the translated prop here */}
      <span>{readMoreText}</span>
      <HiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  </div>
);

// --- ALT SERVICES ICON BOX COMPONENT (Unused in this setup, but kept as is) ---
const AltServiceIconBox = ({ icon, title, description }) => (
    <div className="flex">
        <div className="flex-shrink-0 mr-4">{icon}</div>
        <div>
            <h4 className="font-bold text-lg text-gray-800">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

// --- MAIN SERVICE CONTENT COMPONENT ---
const ServiceComponent = () => {
    const { t } = useTranslation(); // 3. Initialize hook

    // 4. Dynamically create data by merging static info with translated text
    const servicesData = t('pages.services.cards', { returnObjects: true }).map((card, index) => ({
      ...staticServicesData[index], // Gets id, icon, link
      ...card,                      // Gets title, description from JSON
    }));

    return (
        <>
            {/* Services Section */}
            <section id="services" className="py-16 lg:py-24 gap-8 flex flex-col justify-center items-center text-center bg-gray-50">
                <motion.h1 
                    className="text-4xl font-bold text-gray-900"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* 5. Translate the title */}
                    {t('pages.services.title')}
                </motion.h1>
                <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        {/* 6. Pass the translated "Read More" text to the card */}
                        <ServiceCard {...service} readMoreText={t('pages.services.readMore')} />
                    </motion.div>
                    ))}
                </div>
                </div>
            </section>
        </>
    );
};

export default ServiceComponent;