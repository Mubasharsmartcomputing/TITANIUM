import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Already imported, great!

// --- IMPORT ICONS & IMAGES (No changes here) ---
import { BsCheck2All } from 'react-icons/bs';
import features1 from '../assets/img/features-1.png';
import features2 from '../assets/img/features-2.png';
import features3 from '../assets/img/features-3.png';
import features4 from '../assets/img/features-4.png';
import features5 from '../assets/img/features-5.png';
import features9 from '../assets/img/features-9.png';
import construction1 from '../assets/img/constructions-1.png';
import construction2 from '../assets/img/constructions-2.png';

// ✨ STEP 1: Simplify the static array. It only holds info that NEVER changes.
const staticTabInfo = [
    { id: 1, image: features1 },
    { id: 2, image: features2 },
    { id: 3, image: features3 },
    { id: 4, image: features4 },
    { id: 5, image: construction1 },
    { id: 6, image: construction2 },
    { id: 7, image: features5 },
    { id: 8, image: features9 },
];

// --- Reusable Methodology Card Component (No changes needed here) ---
const MethodologyCard = ({ image, title, heading, description, points }) => {
    return (
        <div className="bg-white rounded-[2.5rem] shadow-lg overflow-hidden h-full">
            <div className="grid grid-cols-1 xl:grid-cols-12 h-full">
                <div className="xl:col-span-5">
                    <div className="h-[250px] xl:h-full">
                        <img src={image} alt={title} className="w-full h-full object-cover"/>
                    </div>
                </div>
                <div className="xl:col-span-7 flex items-center">
                    <div className="p-8 flex flex-col justify-between h-full">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3 hover:text-[#C3A666] transition-colors line-clamp-2">
                                <a href="#">{heading}</a>
                            </h4>
                            <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">{description}</p>
                        </div>
                        <ul className="space-y-2 mt-4">
                            {/* Check if points exists and is an array before mapping */}
                            {Array.isArray(points) && points.map((point, index) => (
                                <li key={index} className="flex items-start">
                                    <BsCheck2All className="text-[#C3A666] font-bold mr-3 mt-1 flex-shrink-0" size={16} />
                                    <span className="text-gray-700 text-sm leading-tight">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- MAIN METHODOLOGY COMPONENT ---
const TabSection = () => {
    const { t } = useTranslation(); // Already initialized, perfect!

    return (
        <section id="features" className="pt-16 lg:py-24 bg-gray-200">
            <div className="container mx-auto px-4">
            
                {/* Section Title (Already translated, no changes needed) */}
                <motion.div 
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('pages.home.methodology.title')}</h2>
                  <p className="text-base text-gray-800 mt-2 max-w-3xl mx-auto">{t('pages.home.methodology.subtitle')}</p>
                </motion.div>

                {/* ✨ STEP 2: Use the t() function to get card content from JSON */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {staticTabInfo.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <MethodologyCard 
                                image={item.image}
                                // The text is now pulled from your translation files using the index
                                title={t(`pages.home.methodology.cards.${index}.title`)}
                                heading={t(`pages.home.methodology.cards.${index}.heading`)}
                                description={t(`pages.home.methodology.cards.${index}.description`)}
                                // This tells i18next to return the array of points, not a string
                                points={t(`pages.home.methodology.cards.${index}.points`, { returnObjects: true }) || []}
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TabSection;
