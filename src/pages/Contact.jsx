import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // 1. Import hook

// --- IMPORT ICONS ---
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

// --- Reusable component for the info cards ---
const InfoCard = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center text-center h-full">
    <div className="icon-wrapper mb-4">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-500 transition-colors duration-300 group-hover:bg-red-500 group-hover:text-white">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <div className="text-gray-600 text-sm">{children}</div>
  </div>
);

const ContactPage = () => {
  const { t } = useTranslation(); // 2. Initialize hook

  return (
    <main className="bg-gray-50">
      <section id="contact" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">

          {/* ✨ Centered Section Title Block */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* 3. Use translated text */}
            <h2 className="text-4xl font-bold text-gray-800">{t('pages.contact.title')}</h2>
            <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
              {t('pages.contact.subtitle')}
            </p>
          </motion.div>
          
          {/* --- Info Cards --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <motion.div 
              className="lg:col-span-6 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <InfoCard icon={<FiMapPin className="h-6 w-6" />} title={t('pages.contact.infoCards.address.title')}>
                <p>{t('pages.contact.infoCards.address.value')}</p>
              </InfoCard>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-3 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <InfoCard icon={<FiPhone className="h-6 w-6" />} title={t('pages.contact.infoCards.phone.title')}>
                <p>{t('pages.contact.infoCards.phone.value')}</p>
              </InfoCard>
            </motion.div>

            <motion.div 
              className="lg:col-span-3 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <InfoCard icon={<FiMail className="h-6 w-6" />} title={t('pages.contact.infoCards.email.title')}>
                <p>{t('pages.contact.infoCards.email.value')}</p>
              </InfoCard>
            </motion.div>
          </div>
          
          {/* --- Map and Form --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.7728347898!2d28.87209618991487!3d41.00498229971274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1676962243765!5m2!1sen!2sus"
                className="w-full h-full border-0 rounded-2xl shadow-xl min-h-[400px]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location - Istanbul, Turkey"
              ></iframe>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <form action="#" method="post" className="space-y-6 flex flex-col h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 focus:border-transparent transition" placeholder={t('pages.contact.form.placeholders.name')} required />
                  <input type="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 focus:border-transparent transition" placeholder={t('pages.contact.form.placeholders.email')} required />
                </div>
                <div>
                  <input type="text" name="subject" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 focus:border-transparent transition" placeholder={t('pages.contact.form.placeholders.subject')} required />
                </div>
                <div className="flex-grow">
                  <textarea name="message" rows="6" className="w-full h-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 focus:border-transparent transition" placeholder={t('pages.contact.form.placeholders.message')} required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-red-500 text-white font-bold py-3 px-8 rounded-full hover:bg-red-600 transition-colors duration-300">{t('pages.contact.form.submitButton')}</button>
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