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
      
      {/* Page Title Section */}
      <div className="relative py-24 bg-cover bg-center" style={{ backgroundImage: `url(${pageTitleBg})` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          
          <motion.nav 
            className="text-sm mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ol className="list-none p-0 inline-flex items-center">
              <li><a href="/" className="text-red-400 hover:text-white">Home</a></li>
              <li className="mx-2">/</li>
              <li><span>Services</span></li>
            </ol>
          </motion.nav>
        </div>
      </div>

      {/* RENDER THE SEPARATE SERVICE CONTENT COMPONENT */}
      <ServiceComponent />

    </main>
  );
};

export default ServicesPage;