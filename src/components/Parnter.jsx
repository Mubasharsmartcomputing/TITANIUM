import React from 'react';
import { motion } from 'framer-motion';

// --- IMPORT ICONS & IMAGES ---
import { BsEasel, BsPatchCheck, BsBrightnessHigh } from 'react-icons/bs';
import featuresImg from '../assets/img/features-3-2.jpg'; 

// A small, reusable helper component for the icon boxes within this section
const AltServiceIconBox = ({ icon, title, description }) => (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h4 className="font-bold text-gray-800 text-lg">{title}</h4>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
);

// The main component for your section
const StrategicPartnerSection = () => {
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
                    <img src={featuresImg} alt="Strategic Project Planning" className="rounded-4xl shadow-xl  w-[600px] h-auto" />
                </motion.div>
                <motion.div 
                    className="lg:order-1 flex flex-col justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">A Strategic Partner, Not Just a Manager</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Beyond day-to-day oversight, we provide the strategic insights that elevate your project. We leverage 15 years of engineering experience to add value at every turn, transforming challenges into opportunities for innovation and efficiency.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
                        <AltServiceIconBox 
                            icon={<BsEasel className="text-red-500" size={42} />} 
                            title="Strategic Planning" 
                            description="Aligning project goals with long-term business objectives." 
                        />
                        <AltServiceIconBox 
                            icon={<BsPatchCheck className="text-red-500" size={42} />} 
                            title="Quality & Safety Audits" 
                            description="Implementing rigorous checks to guarantee excellence and security." 
                        />
                        <AltServiceIconBox 
                            icon={<BsBrightnessHigh className="text-red-500" size={42} />} 
                            title="Transparent Reporting" 
                            description="Utilizing modern tools for real-time progress and budget tracking." 
                        />
                        <AltServiceIconBox 
                            icon={<BsBrightnessHigh className="text-red-500" size={42} />} 
                            title="Technology Integration" 
                            description="Advising on and implementing tools like BIM for enhanced efficiency." 
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default StrategicPartnerSection;