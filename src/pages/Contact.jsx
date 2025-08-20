import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // 1. Import hook

// --- IMPORT ICONS ---
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

// --- Reusable component for the info cards ---
const InfoCard = ({ icon, title, children }) => (
  <div className="p-6 bg-white rounded-2xl shadow-xl flex flex-col items-center text-center h-full">
    <div className="icon-wrapper mb-4">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-300 text-[#90692E] transition-colors duration-300 group-hover:bg-[#90692E] group-hover:text-white">
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
    <main className="bg-gray-200">
      <section id="contact" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          
          {/* --- Info Cards --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <motion.div 
              className="lg:col-span-6 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* --- 1. UPDATED GERMAN ADDRESS (MUNICH) --- */}
              <InfoCard icon={<FiMapPin className="h-6 w-6" />} title={t('pages.contact.infoCards.address.title')}>
                <p>{t('pages.contact.infoCards.address.value')}</p>
              </InfoCard>
              {/* --- GERMAN ADDRESS END --- */}
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
              {/* --- 2. UPDATED GOOGLE MAP FOR MUNICH --- */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.825227896173!2d11.57303031564881!3d48.13722297922339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e758a1b5d6f37%3A0x920a671399878298!2sMarienplatz%2C%2080331%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2sus!4v1695649528115!5m2!1sen!2sus"
                className="w-full h-full border-0 rounded-2xl shadow-xl min-h-[400px]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location - Munich, Germany"
              ></iframe>
              {/* --- GERMAN MAP END --- */}
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
                  <input type="text" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#90692E] focus:border-transparent transition" placeholder={t('pages.contact.form.placeholders.name')} required />
                  <input type="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#90692E] focus:border-transparent transition" placeholder={t('pages.contact.form.placeholders.email')} required />
                </div>
                <div>
                  <input type="text" name="subject" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#90692E] focus:border-transparent transition" placeholder={t('pages.contact.form.placeholders.subject')} required />
                </div>
                <div className="flex-grow">
                  <textarea name="message" rows="6" className="w-full h-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#90692E] focus:border-transparent transition" placeholder={t('pages.contact.form.placeholders.message')} required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-[#90692E] text-white font-bold py-3 px-8 rounded-full hover:bg-[#d8ba67] transition-colors duration-300">{t('pages.contact.form.submitButton')}</button>
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