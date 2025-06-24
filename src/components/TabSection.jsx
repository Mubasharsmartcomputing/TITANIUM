import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // ✨ IMPORT THE HOOK

// ✨ UPDATED: We only need the check icon for the new design
import { BsCheck2All } from 'react-icons/bs';

// --- IMPORT IMAGES (These are reused for the tabs) ---
import features1 from '../assets/img/features-1.jpg'; // Corresponds to Financial Control
import features2 from '../assets/img/features-2.jpg'; // Corresponds to Risk Mitigation
import features3 from '../assets/img/features-3.jpg'; // Corresponds to Quality Assurance
import features4 from '../assets/img/features-4.jpg'; // Corresponds to Clear Communication

// ✨ This array holds static info that doesn't need translation (like IDs and images)
const staticTabInfo = [
    { id: 1, image: features1 },
    { id: 2, image: features2 },
    { id: 3, image: features3 },
    { id: 4, image: features4 },
];

// --- ✨ REFACTORED: Main Component ---
const TabSection = () => {
    const { t } = useTranslation(); // ✨ INITIALIZE THE HOOK
    const [activeTab, setActiveTab] = useState(1);

    // ✨ DYNAMICALLY BUILD TABS DATA by combining static info with translated text
    const tabsData = t('pages.home.methodology.tabs', { returnObjects: true }).map((tab, index) => ({
        ...staticTabInfo[index], // gets id and image
        ...tab,                 // gets title, heading, description, points from JSON
    }));

    const activeTabData = tabsData.find(tab => tab.id === activeTab);

    return (
        // The entire component is now one cohesive section with a light gray background
        <section id="features" className="py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
            
                {/* ✨ NEW: Centered Section Title */}
                <motion.div 
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-4xl font-bold text-gray-800">{t('pages.home.methodology.title')}</h2>
                  <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">{t('pages.home.methodology.subtitle')}</p>
                </motion.div>

                {/* Tab Buttons (Functionality remains the same, styles are great) */}
                <motion.ul
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {tabsData.map(tab => (
                        <li key={tab.id}>
                            <button
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full p-4 text-center rounded-lg transition-colors duration-300 font-semibold text-lg ${
                                    activeTab === tab.id ? 'bg-red-500 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white'
                                }`}
                            >
                                {/* ✨ Changed from h4 to span for better semantics, as it's a button label */}
                                <span>{tab.title}</span>
                            </button>
                        </li>
                    ))}
                </motion.ul>
                
                {/* Tab Content (Structure is the same, but it's now fed the new data) */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {activeTabData && (
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="lg:order-2">
                                    <img src={activeTabData.image} alt={activeTabData.title} className="rounded-4xl shadow-xl w-[600px] h-auto" />
                                </div>
                                <div className="lg:order-1 flex flex-col justify-center">
                                    <h3 className="text-3xl font-bold text-gray-800 mb-3">{activeTabData.heading}</h3>
                                    <p className="italic text-gray-600 mb-4 leading-relaxed">{activeTabData.description}</p>
                                    <ul className="space-y-3 mt-4">
                                        {activeTabData.points.map((point, index) => (
                                            <li key={index} className="flex items-start">
                                                <BsCheck2All className="text-red-500 font-bold mr-3 mt-1 flex-shrink-0" size={24} />
                                                <span className="text-gray-700">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default TabSection;