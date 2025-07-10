import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // 1. Import hook

// --- IMPORT IMAGES ---
import construction1 from '../assets/img/constructions-1.png';
import construction2 from '../assets/img/constructions-2.png';
import construction3 from '../assets/img/constructions-3.png';
import construction4 from '../assets/img/constructions-4.jpg';


// 2. Data for non-translatable content (images and unique IDs)
// The order MUST match the order of cards in your JSON files.
const staticConstructionsInfo = [
  {
    id: 2,
    image: construction2, // Corresponds to 'Residential Apartment Complexes'
  },
  {
    id: 1,
    image: construction1, // Corresponds to 'Commercial Office Towers'
  },
  {
    id: 3,
    image: construction3, // Corresponds to 'Industrial & Logistics Facilities'
  },
  {
    id: 4,
    image: construction4, // Corresponds to 'Public Infrastructure Projects'
  }
];


// --- Reusable Construction Card Component (No changes needed) ---
const ConstructionCard = ({ image, title, description }) => {
    return (
        <div className="bg-white rounded-[2.5rem] shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 xl:grid-cols-12">
                <div className="xl:col-span-5">
                    <div className="h-full min-h-[200px] xl:min-h-full">
                        <img src={image} alt={title} className="w-full h-full object-cover"/>
                    </div>
                </div>
                <div className="xl:col-span-7 flex items-center">
                    <div className="p-8">
                        <h4 className="text-2xl font-bold text-gray-800 mb-3 hover:text-[#feb900] transition-colors">
                            <a href="#">{title}</a>
                        </h4>
                        <p className="text-gray-600">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- MAIN CONSTRUCTIONS COMPONENT ---
const Constructions = () => {
  const { t } = useTranslation(); // 3. Initialize the translation hook

  // 4. Dynamically build the full data by merging static info with translated text
  const constructionsData = t('pages.home.constructions.cards', { returnObjects: true }).map((card, index) => ({
      ...staticConstructionsInfo[index], // Gets id and image from our static array
      ...card, // Gets title and description from the JSON translation file
  }));

  return (
    <section id="constructions" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Title - Now uses the `t` function */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800">{t('pages.home.constructions.title')}</h2>
          <p className="text-lg text-gray-600 mt-2">{t('pages.home.constructions.subtitle')}</p>
        </motion.div>

        {/* Construction Cards Grid - Maps over the new dynamic data */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {constructionsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ConstructionCard 
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Constructions;