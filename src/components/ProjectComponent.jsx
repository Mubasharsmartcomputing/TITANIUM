import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // 1. Import hook

// --- IMPORT ICONS ---
import { BiZoomIn, BiLink } from 'react-icons/bi';

// --- IMPORT IMAGES ---
import construction1 from '../assets/img/projects/construction-1.jpg';
import construction2 from '../assets/img/projects/construction-2.jpg';
import construction3 from '../assets/img/projects/construction-3.jpg';
import design1 from '../assets/img/projects/design-1.jpg';
import design2 from '../assets/img/projects/design-2.jpg';
import remodeling1 from '../assets/img/projects/remodeling-1.jpg';
import remodeling2 from '../assets/img/projects/remodeling-2.jpg';
import repairs1 from '../assets/img/projects/repairs-1.jpg';
import repairs2 from '../assets/img/projects/repairs-2.jpg';

// 2. Data for non-translatable content. The order MUST match the JSON.
const staticProjectsData = [
  { id: 1, image: remodeling1 },
  { id: 2, image: construction1 },
  { id: 3, image: repairs1 },
  { id: 4, image: design1 },
  { id: 5, image: remodeling2 },
  { id: 6, image: construction2 },
  { id: 7, image: repairs2 },
  { id: 8, image: design2 },
  { id: 9, image: construction3 },
];

// These keys are for logic and MUST match the `category` in the JSON files.
const filterKeys = ['All', 'Remodeling', 'Construction', 'Repairs', 'Design'];

const ProjectComponent = () => {
    const { t, i18n } = useTranslation(); // 3. Initialize hook
    
    // State uses the English keys for filtering logic
    const [activeFilter, setActiveFilter] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState([]);

    // 4. Dynamically create data by merging static info with translated text.
    // useMemo ensures this only re-calculates when the language changes.
    const projectsData = useMemo(() => {
      return t('pages.projects.cards', { returnObjects: true }).map((card, index) => ({
        ...staticProjectsData[index], // Gets id, image
        ...card,                      // Gets title, category, description from JSON
      }));
    }, [i18n.language]); // Dependency on the current language

    // Get translated labels for the filter buttons
    const filterLabels = t('pages.projects.filters', { returnObjects: true });

    useEffect(() => {
        if (activeFilter === 'All') {
            setFilteredProjects(projectsData);
        } else {
            setFilteredProjects(projectsData.filter(p => p.category === activeFilter));
        }
    }, [activeFilter, projectsData]); // Re-run filter when the active key or the data language changes

    return (
        <section id="projects" className="py-16 gap-8 flex flex-col justify-center items-center text-center lg:py-24">
             <motion.h1 
                className="text-4xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {t('pages.projects.title')} {/* 5. Use translated title */}
              </motion.h1>
            <div className="container mx-auto px-4">
                
                {/* Filter Buttons */}
                <motion.ul 
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    {filterKeys.map((key, index) => (
                    <li key={key}>
                        <button
                          onClick={() => setActiveFilter(key)} // Set the English key for logic
                          className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${
                              activeFilter === key 
                              ? 'bg-red-500 text-white' 
                              : 'bg-white text-gray-700 hover:bg-red-100 shadow-sm'
                          }`}
                        >
                          {filterLabels[index]} {/* Display the translated label */}
                        </button>
                    </li>
                    ))}
                </motion.ul>

                {/* Portfolio Grid with Animation */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                    {filteredProjects.map(project => (
                        <motion.div
                          key={project.id}
                          layout
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                          className="group relative overflow-hidden rounded-lg shadow-lg"
                        >
                          <img src={project.image} className="w-full h-72 rounded-2xl shadow-xl object-cover" alt={project.title} />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                              <h4 className="text-white text-2xl font-bold mb-2">{project.title}</h4>
                              <p className="text-gray-300 mb-4">{project.description}</p>
                              <div className="flex space-x-4">
                                <a href={project.image} title={t('pages.projects.overlay.zoomIn')} className="text-white bg-red-500/80 hover:bg-red-500 rounded-full p-3 transition-colors">
                                    <BiZoomIn size={24} />
                                </a>
                                <a href={`/`} title={t('pages.projects.overlay.moreDetails')} className="text-white bg-red-500/80 hover:bg-red-500 rounded-full p-3 transition-colors">
                                    <BiLink size={24} />
                                </a>
                              </div>
                          </div>
                        </motion.div>
                    ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectComponent;