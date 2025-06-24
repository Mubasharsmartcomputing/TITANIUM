import React from 'react';
import { motion } from 'framer-motion';

// --- IMPORT THE NEW COMPONENT ---
import ServiceComponent from '../components/ServiceComponent'; // Adjust path if needed

// --- IMPORT IMAGES ---
import pageTitleBg from '../assets/img/page-title-bg.jpg';


// --- MAIN SERVICES PAGE COMPONENT ---
const ServicesPage = () => {
  return (
    <main className="bg-white">
      
     
      {/* RENDER THE SEPARATE SERVICE CONTENT COMPONENT */}
      <ServiceComponent />

    </main>
  );
};

export default ServicesPage;