import React from 'react';
import { motion } from 'framer-motion';

// --- IMPORT ICONS ---
import { FaTasks, FaUsersCog, FaFileSignature, FaHardHat, FaClipboardList, FaLandmark } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';


// --- IMPORT IMAGES ---
// Make sure this path is correct relative to this component file



// --- YOUR ACTUAL SERVICES DATA ---
const servicesData = [
  { id: 1, icon: <FaTasks size={32} />, title: 'Construction Scheduling', description: 'We develop and manage critical path schedules, optimizing workflow and ensuring all project milestones are met with precision.', link: '/services/scheduling' },
  { id: 2, icon: <FaUsersCog size={32} />, title: 'Subcontractor Coordination', description: 'We act as your central point of contact, synchronizing all trades to create a harmonious and efficient worksite.', link: '/services/coordination' },
  { id: 3, icon: <FaFileSignature size={32} />, title: 'Site Documentation', description: 'Meticulous, real-time documentation provides a comprehensive project record, ensuring clarity, accountability, and risk mitigation.', link: '/services/documentation' },
  { id: 4, icon: <FaHardHat size={32} />, title: 'Management Support', description: 'We reinforce your existing team with expert oversight, technical guidance, and hands-on support to overcome any challenge.', link: '/services/support' },
  { id: 5, icon: <FaClipboardList size={32} />, title: 'Planning & Tendering', description: 'Our strategic approach to planning and tendering ensures you secure the most qualified partners at the best possible value.', link: '/services/tendering' },
  { id: 6, icon: <FaLandmark size={32} />, title: 'Authority Cooperation', description: 'We expertly navigate German building regulations, managing all communications with authorities to keep your project moving.', link: '/services/authorities' },
];


// --- REUSABLE SERVICE CARD COMPONENT ---
const ServiceCard = ({ icon, title, description, link }) => (
  <div className="group bg-white p-8 rounded-4xl shadow-xl  transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
   
    <div className="icon-wrapper mb-6">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-500 transition-colors duration-300 group-hover:bg-red-500 group-hover:text-white">{icon}</div>
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <a href={link} className="font-bold text-red-600 hover:text-red-700 flex items-center mt-auto">
      <span>Read More</span>
      <HiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  </div>
);



// --- ALT SERVICES ICON BOX COMPONENT ---
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
                            Our Services
                          </motion.h1>
                <div className="container mx-auto px-4">
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <ServiceCard {...service} />
                    </motion.div>
                    ))}
                </div>
                </div>
            </section>

         
            
        </>
    );
};

export default ServiceComponent;