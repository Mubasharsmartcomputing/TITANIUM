import React from 'react';
import { motion } from 'framer-motion';

// --- IMPORT ICONS ---
import { FaTasks, FaUsersCog, FaFileSignature, FaHardHat, FaClipboardList, FaLandmark } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { BsCheck2, BsEasel, BsPatchCheck, BsBrightnessHigh } from 'react-icons/bs';

// --- IMPORT IMAGES ---
// Make sure this path is correct relative to this component file
import featuresImg from '../assets/img/features-3-2.jpg'; 


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
  <div className="group bg-white p-8 shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
   
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

// --- FEATURE CARD COMPONENT ---
const FeatureCard = ({ title, description, points }) => (
  <div>
    <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-center">
          <BsCheck2 className="text-red-500 font-bold mr-2 flex-shrink-0" size={24} />
          <span className="text-gray-700">{point}</span>
        </li>
      ))}
    </ul>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

            {/* Features Cards Section */}
            <section id="features-cards" className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                    <FeatureCard title="Financial Control" description="We provide vigilant invoice verification and rigorous project controls to maintain financial integrity from start to finish." points={['Budget Adherence Tracking', 'Value Engineering', 'Invoice & Payment Verification']} />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                    <FeatureCard title="Risk Mitigation" description="Our proactive approach identifies potential issues before they become costly problems, ensuring a smoother project flow." points={['Proactive Problem Solving', 'Safety & Compliance Audits', 'Contractual Safeguards']} />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                    <FeatureCard title="Quality Assurance" description="We uphold the highest standards, ensuring that all materials, craftsmanship, and final results meet your exact specifications." points={['Material Quality Checks', 'Workmanship Inspections', 'Adherence to Blueprints']} />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
                    <FeatureCard title="Clear Communication" description="Serving as your single point of contact, we ensure all stakeholders are aligned and informed at every stage of the project." points={['Regular Progress Reports', 'Stakeholder Meeting Facilitation', 'Centralized Information Hub']} />
                    </motion.div>
                </div>
                </div>
            </section>

            {/* Alt Services 2 Section */}
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
                    <img src={featuresImg} alt="Strategic Project Planning" className="rounded-lg shadow-xl w-full h-auto md:w-[500px]" />
                    </motion.div>
                    <motion.div 
                    className="lg:order-1 flex flex-col justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    >
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">A Strategic Partner, Not Just a Manager</h3>
                    <p className="text-gray-600 mb-6">Beyond day-to-day oversight, we provide the strategic insights that elevate your project. We leverage 15 years of engineering experience to add value at every turn, transforming challenges into opportunities for innovation and efficiency.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <AltServiceIconBox icon={<BsEasel className="text-red-500 flex-shrink-0" size={42} />} title="Strategic Planning" description="Aligning project goals with long-term business objectives." />
                        <AltServiceIconBox icon={<BsPatchCheck className="text-red-500 flex-shrink-0" size={42} />} title="Quality & Safety Audits" description="Implementing rigorous checks to guarantee excellence and security." />
                        <AltServiceIconBox icon={<BsBrightnessHigh className="text-red-500 flex-shrink-0" size={42} />} title="Transparent Reporting" description="Utilizing modern tools for real-time progress and budget tracking." />
                        <AltServiceIconBox icon={<BsBrightnessHigh className="text-red-500 flex-shrink-0" size={42} />} title="Technology Integration" description="Advising on and implementing tools like BIM for enhanced efficiency." />
                    </div>
                    </motion.div>
                </div>
                </div>
            </section>
        </>
    );
};

export default ServiceComponent;