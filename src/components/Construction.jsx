import React from 'react';
import { motion } from 'framer-motion';

// --- IMPORT IMAGES ---
// Make sure these paths are correct for your project structure
import construction1 from '../assets/img/constructions-1.jpg';
import construction2 from '../assets/img/constructions-2.jpg';
import construction3 from '../assets/img/constructions-3.jpg';
import construction4 from '../assets/img/constructions-4.jpg';


// --- Data for the construction cards ---
const constructionsData = [
  {
    id: 1,
    image: construction1,
    title: 'Commercial Office Towers',
    description: 'We specialize in the end-to-end project management of high-rise commercial buildings, ensuring structural integrity, on-time delivery, and adherence to complex urban regulations.',
  },
  {
    id: 2,
    image: construction2,
    title: 'Residential Apartment Complexes',
    description: 'Our expertise extends to multi-family residential projects, where we coordinate all trades to deliver high-quality living spaces that meet both developer and resident expectations.',
  },
  {
    id: 3,
    image: construction3,
    title: 'Industrial & Logistics Facilities',
    description: 'From massive warehouses to specialized manufacturing plants, we manage the unique challenges of industrial construction, focusing on workflow efficiency and robust infrastructure.',
  },
  {
    id: 4,
    image: construction4,
    title: 'Public Infrastructure Projects',
    description: 'We bring precision engineering and management to vital public works, including bridges and transport hubs, ensuring durability and long-term value for the community.',
  }
];


// --- Reusable Construction Card Component ---
const ConstructionCard = ({ image, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 xl:grid-cols-12">
                <div className="xl:col-span-5">
                    <div className="h-full min-h-[200px] xl:min-h-full">
                        <img src={image} alt={title} className="w-full h-full object-cover"/>
                    </div>
                </div>
                <div className="xl:col-span-7 flex items-center">
                    <div className="p-8">
                        <h4 className="text-2xl font-bold text-gray-800 mb-3 hover:text-red-600 transition-colors">
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
  return (
    <section id="constructions" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800">Our Core Construction Sectors</h2>
          <p className="text-lg text-gray-600 mt-2">Expertise across a diverse range of demanding construction environments.</p>
        </motion.div>

        {/* Construction Cards Grid */}
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