import React from 'react';

// --- IMPORT YOUR NEWLY CREATED COMPONENTS ---

import Testimonials from '../components/Testimonials';   // Adjust path if needed

// --- IMPORT IMAGES ---
import pageTitleBg from '../assets/img/page-title-bg.jpg';
import AboutComponent from '../components/AboutComponent';


// --- MAIN ABOUT PAGE COMPONENT ---
const About = () => {
  return (
    <main className="bg-white">
      {/* Page Title Section */}
      <div className="relative py-24 bg-cover bg-center" style={{ backgroundImage: `url(${pageTitleBg})` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-5xl font-bold">About Us</h1>
          <nav className="text-sm mt-4">
            <ol className="list-none p-0 inline-flex items-center">
              <li><a href="/" className="text-red-400 hover:text-white">Home</a></li>
              <li className="mx-2">/</li>
              <li><span>About</span></li>
            </ol>
          </nav>
        </div>
      </div>

      {/* RENDER THE SEPARATE ABOUT CONTENT COMPONENT */}
      <AboutComponent/>

      {/* RENDER THE SEPARATE TESTIMONIALS COMPONENT */}
      <Testimonials />

    </main>
  );
};

export default About;