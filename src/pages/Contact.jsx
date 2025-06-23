import React from 'react';
import { motion } from 'framer-motion'; // <-- 1. IMPORT MOTION

// --- IMPORT ICONS ---
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

// --- IMPORT IMAGES ---
import pageTitleBg from '../assets/img/page-title-bg.jpg';

// Reusable component for the info cards (Address, Call, Email)
const InfoCard = ({ icon, title, children }) => (
  <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col items-center text-center h-full">
    <div className="icon-wrapper mb-4">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-500 transition-colors duration-300 group-hover:bg-red-500 group-hover:text-white">{icon}</div>
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
    <div className="text-gray-600">{children}</div>
  </div>
);

const ContactPage = () => {
  return (
    <main className="bg-gray-50">
      
      {/* --- Page Title Section --- */}
      <div 
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${pageTitleBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          {/* 2. Animate the Title and Breadcrumbs */}
          <motion.h1 
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <motion.nav 
            className="text-sm mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ol className="list-none p-0 inline-flex items-center">
              <li><a href="/" className="text-red-400 hover:text-white">Home</a></li>
              <li className="mx-2">/</li>
              <li><span>Contact</span></li>
            </ol>
          </motion.nav>
        </div>
      </div>

      {/* --- Contact Details and Form Section --- */}
      <section id="contact" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          
          {/* --- Top Info Cards (Address, Call, Email) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* 3. Animate each info card with a staggered delay */}
            <motion.div 
              className="lg:col-span-6 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <InfoCard icon={<FiMapPin className="h-7 w-7" />} title="Address"><p>A108 Adam Street, New York, NY 535022</p></InfoCard>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-3 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <InfoCard icon={<FiPhone className="h-7 w-7" />} title="Call Us"><p>+1 5589 55488 55</p></InfoCard>
            </motion.div>

            <motion.div 
              className="lg:col-span-3 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <InfoCard icon={<FiMail className="h-7 w-7" />} title="Email Us"><p>info@example.com</p></InfoCard>
            </motion.div>
          </div>
          
          {/* --- Map and Form --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 4. Animate the Google Maps container */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                className="w-full h-full border-0 rounded-lg shadow-lg min-h-[400px]" // Use h-full and a min-height for responsiveness
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </motion.div>

            {/* 5. Animate the Contact Form container */}
            <motion.div 
              className="bg-white p-8 shadow-lg rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Added flex classes to make form take full height */}
              <form action="#" method="post" className="space-y-6 flex flex-col h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 focus:border-transparent transition" placeholder="Your Name" required />
                  <input type="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 focus:border-transparent transition" placeholder="Your Email" required />
                </div>
                <div>
                  <input type="text" name="subject" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 focus:border-transparent transition" placeholder="Subject" required />
                </div>
                {/* flex-grow makes the textarea expand to fill available space */}
                <div className="flex-grow">
                  <textarea name="message" rows="6" className="w-full h-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 focus:border-transparent transition" placeholder="Message" required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-red-500 text-white font-bold py-3 px-8 rounded-full hover:bg-red-600 transition-colors duration-300">Send Message</button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;