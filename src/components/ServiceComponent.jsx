import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// --- IMPORT ICONS (No changes) ---
import {
  FaTasks,
  FaUsersCog,
  FaFileSignature,
  FaHardHat,
  FaClipboardList,
  FaLandmark,
  FaFileInvoiceDollar,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

// --- UNIFIED DATA FOR 9 SERVICES (No changes) ---
const servicesData = [
  {
    id: 1,
    icon: <FaTasks size={32} />,
    title: "Phase & Schedule Planning",
    description:
      "We create detailed schedules and plan every construction phase to ensure your project is completed on time.",
    link: "/services/scheduling",
  },
  {
    id: 2,
    icon: <FaUsersCog size={32} />,
    title: "Subcontractor Coordination",
    description:
      "We seamlessly manage and coordinate all subcontractors on-site, ensuring an efficient workflow and high quality.",
    link: "/services/coordination",
  },
  {
    id: 3,
    icon: <FaFileSignature size={32} />,
    title: "Site Documentation",
    description:
      "We provide thorough and consistent documentation of all site progress, activities, and key milestones for a clear project record.",
    link: "/services/documentation",
  },
  {
    id: 4,
    icon: <FaHardHat size={32} />,
    title: "Management Support",
    description:
      "Offering expert, hands-on support to your construction management team, assisting with daily operations and oversight.",
    link: "/services/support",
  },
  {
    id: 5,
    icon: <FaClipboardList size={32} />,
    title: "Planning & Tendering",
    description:
      "Handling the complete planning and tendering process, from initial designs to soliciting competitive contractor bids.",
    link: "/services/tendering",
  },
  {
    id: 6,
    icon: <FaLandmark size={32} />,
    title: "Authority & Inspector Liaison",
    description:
      "We act as the primary liaison with government authorities and inspectors to secure permits and ensure full compliance.",
    link: "/services/authorities",
  },
  {
    id: 7,
    icon: <FaFileInvoiceDollar size={32} />,
    title: "Invoice Auditing",
    description:
      "We carefully review and verify all project-related invoices to ensure accuracy and maintain strict budget control.",
    link: "/services/auditing",
  },
  {
    id: 8,
    icon: <FaChartLine size={32} />,
    title: "Project Control",
    description:
      "Implementing robust project control systems to monitor progress, manage risks, and steer the project to success.",
    link: "/services/project-control",
  },
  {
    id: 9,
    icon: <FaCheckCircle size={32} />,
    title: "Quality Assurance",
    description:
      "Ensuring the final build meets the highest quality standards and managing a smooth handover process to you, the client.",
    link: "/services/quality-assurance",
  },
];

// --- REUSABLE SERVICE CARD COMPONENT (No changes) ---
const ServiceCard = ({ icon, title, description, link, readMoreText }) => (
  <div className="group bg-white p-8 rounded-4xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col text-start">
    <div className="icon-wrapper mb-6">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-200 text-[#B49562] transition-colors duration-300 group-hover:bg-[#B49562] group-hover:text-white">
        {icon}
      </div>
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-base text-gray-600 mb-6 flex-grow">{description}</p>
    <a
      href={link}
      className="font-bold text-[#B49562] hover:text-[#d99f00] flex items-center mt-auto self-start"
    >
      <span>{readMoreText}</span>
      <HiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  </div>
);

// --- MAIN SERVICE CONTENT COMPONENT ---
const ServiceComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="services"
        className="py-16 bg-gray-200 lg:py-24 gap-8 flex flex-col justify-center items-center text-center"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map(
              (
                service,
                index // The `index` is the key! (0, 1, 2, ...)
              ) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* 👇 THE FIX IS HERE. We use the `index` to match the JSON array. */}
                  <ServiceCard
                    icon={service.icon}
                    link={service.link}
                    title={t(`pages.services.cards.${index}.title`, {
                      defaultValue: service.title,
                    })}
                    description={t(
                      `pages.services.cards.${index}.description`,
                      { defaultValue: service.description }
                    )}
                    readMoreText={t("pages.services.readMore", {
                      defaultValue: "Read More",
                    })}
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceComponent;
