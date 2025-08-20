import React from 'react';

// --- IMPORT YOUR NEWLY CREATED COMPONENTS ---

import Testimonials from '../components/Testimonials';   // Adjust path if needed

// --- IMPORT IMAGES ---import pageTitleBg from '../assets/img/page-title-bg.jpg';
import AboutComponent from '../components/AboutComponent';


// --- MAIN ABOUT PAGE COMPONENT ---
const About = () => {
  return (
    <main className="bg-gray-200">
     

      {/* RENDER THE SEPARATE ABOUT CONTENT COMPONENT */}
      <AboutComponent/>

      {/* RENDER THE SEPARATE TESTIMONIALS COMPONENT */}
     

    </main>
  );
};

export default About;