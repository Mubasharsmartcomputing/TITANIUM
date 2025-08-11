import React from 'react';


// --- IMPORT THE NEW COMPONENT ---
import ServiceComponent from '../components/ServiceComponent'; // Adjust path if needed




// --- MAIN SERVICES PAGE COMPONENT ---
const ServicesPage = () => {
  return (
    <main>
      
     
      {/* RENDER THE SEPARATE SERVICE CONTENT COMPONENT */}
      <ServiceComponent />

    </main>
  );
};

export default ServicesPage;