import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- IMPORT ICONS ---
import { BsCheck2All, BsEasel, BsPatchCheck, BsBrightnessHigh } from 'react-icons/bs';

// --- IMPORT IMAGES ---
import altServicesImg from '../assets/img/alt-services.jpg';
import features1 from '../assets/img/features-1.jpg';
import features2 from '../assets/img/features-2.jpg';
import features3 from '../assets/img/features-3.jpg';
import features4 from '../assets/img/features-4.jpg';


// --- Data for the tabbed section ---
const tabsData = [
    {
        id: 1,
        title: 'Pre-Construction',
        heading: 'Precision in Every Blueprint',
        description: 'Our process begins long before breaking ground. We provide meticulous planning and analysis to ensure a solid foundation for your project.',
        points: [
            'Detailed feasibility studies and site analysis.',
            'Accurate cost estimation and value engineering.',
            'Comprehensive scheduling and logistics planning.'
        ],
        image: features1,
    },
    {
        id: 2,
        title: 'On-Site Management',
        heading: 'Excellence in Daily Execution',
        description: 'We bring rigorous oversight to the construction site, ensuring that every detail aligns with the project plan and quality standards.',
        points: [
            'Seamless subcontractor and materials coordination.',
            'Strict adherence to safety and regulatory protocols.',
            'Continuous quality control and progress monitoring.'
        ],
        image: features2,
    },
    {
        id: 3,
        title: 'Post-Construction',
        heading: 'Delivering a Flawless Finish',
        description: 'Our commitment extends beyond construction completion. We manage the final phase to ensure a smooth transition and handover.',
        points: [
            'Thorough final inspections and punch list management.',
            'Complete documentation and warranty handover.',
            'Operational training and facility integration support.'
        ],
        image: features3,
    },
    {
        id: 4,
        title: 'Technology & Innovation',
        heading: 'Building for the Future',
        description: 'We leverage modern technology to enhance efficiency, transparency, and the overall quality of every project.',
        points: [
            'Implementation of Building Information Modeling (BIM).',
            'Use of drones for site surveying and progress tracking.',
            'Cloud-based project management for real-time updates.'
        ],
        image: features4,
    },
];


// --- Main Tab Section Component ---
const TabSection = () => {
    const [activeTab, setActiveTab] = useState(1);
    const activeTabData = tabsData.find(tab => tab.id === activeTab);

    return (
        <>
            {/* Alt Services Section */}
            <section id="alt-services" className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7 }}
                        >
                            <img src={altServicesImg} alt="Alternative Services" className="rounded-lg shadow-xl w-full h-auto" />
                        </motion.div>
                        <motion.div
                            className="flex flex-col justify-center"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Methodology: A Foundation of Trust</h3>
                            <p className="text-gray-600 mb-6">Our success is built on a structured, transparent, and collaborative approach. We believe in proactive problem-solving and clear communication to turn complex challenges into successful outcomes.</p>
                            <div className="space-y-6">
                                <div className="flex items-start"><BsEasel className="text-red-500 flex-shrink-0 mr-4 mt-1" size={36} /><div><h4 className="text-lg font-bold">Strategic Planning</h4><p>Every successful project starts with a robust, well-defined plan.</p></div></div>
                                <div className="flex items-start"><BsPatchCheck className="text-red-500 flex-shrink-0 mr-4 mt-1" size={36} /><div><h4 className="text-lg font-bold">Quality Assurance</h4><p>We implement rigorous checks at every stage to ensure the highest standards.</p></div></div>
                                <div className="flex items-start"><BsBrightnessHigh className="text-red-500 flex-shrink-0 mr-4 mt-1" size={36} /><div><h4 className="text-lg font-bold">Innovative Solutions</h4><p>Leveraging technology and experience to overcome any obstacle.</p></div></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features (Tabs) Section */}
            <section id="features" className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <motion.ul
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {tabsData.map(tab => (
                            <li key={tab.id}>
                                <button
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full p-4 text-center rounded-lg transition-colors duration-300 font-semibold text-lg ${
                                        activeTab === tab.id ? 'bg-red-500 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    <h4>{tab.title}</h4>
                                </button>
                            </li>
                        ))}
                    </motion.ul>
                    
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="lg:order-2">
                                    <img src={activeTabData.image} alt={activeTabData.title} className="rounded-lg shadow-xl w-full" />
                                _</div>
                                <div className="lg:order-1 flex flex-col justify-center">
                                    <h3 className="text-3xl font-bold text-gray-800 mb-3">{activeTabData.heading}</h3>
                                    <p className="italic text-gray-600 mb-4">{activeTabData.description}</p>
                                    <ul className="space-y-3">
                                        {activeTabData.points.map((point, index) => (
                                            <li key={index} className="flex items-start">
                                                <BsCheck2All className="text-red-500 font-bold mr-3 mt-1 flex-shrink-0" size={24} />
                                                <span className="text-gray-700">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </>
    );
};

export default TabSection;