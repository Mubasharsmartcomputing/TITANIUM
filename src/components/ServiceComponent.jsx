import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// --- IMPORT ICONS ---
import {
  FaTasks,
  FaUsersCog,
  FaHardHat,
  FaClipboardList,
  FaLandmark,
  FaFileInvoiceDollar,
  FaChartLine,
} from "react-icons/fa";

// --- ICONS FOR 7 SERVICES ---
const serviceIcons = [
  <FaTasks size={32} />,
  <FaUsersCog size={32} />,
  <FaHardHat size={32} />,
  <FaClipboardList size={32} />,
  <FaLandmark size={32} />,
  <FaFileInvoiceDollar size={32} />,
  <FaChartLine size={32} />,
];

// --- REUSABLE SERVICE CARD COMPONENT ---
const ServiceCard = ({ icon, title, description }) => (
  <div className="group bg-white p-8 rounded-4xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col text-start">
    <div className="icon-wrapper mb-6">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-200 text-[#B49562] transition-colors duration-300 group-hover:bg-[#B49562] group-hover:text-white">
        {icon}
      </div>
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-base text-gray-600 mb-6 flex-grow">{description}</p>
  </div>
);

// --- MAIN SERVICE CONTENT COMPONENT ---
const ServiceComponent = () => {
  const { t } = useTranslation();
  const services = t('pages.services.cards', { returnObjects: true }) || [];

  return (
    <>
      <section
        id="services"
        className="py-16 bg-gray-200 lg:py-24 gap-8 flex flex-col justify-center items-center text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">{t('pages.services.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard
                  icon={serviceIcons[index]}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceComponent;
