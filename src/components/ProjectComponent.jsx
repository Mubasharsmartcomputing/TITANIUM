import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const projectsData = [
  { id: 1, image: remodeling1, title: 'Modern Kitchen Renovation', category: 'Remodeling', description: 'Complete overhaul of a residential kitchen.' },
  { id: 2, image: construction1, title: 'Commercial Office Tower', category: 'Construction', description: 'Structural engineering and project management.' },
  { id: 3, image: repairs1, title: 'Historic Facade Repair', category: 'Repairs', description: 'Structural repairs for a historic building.' },
  { id: 4, image: design1, title: 'Residential Home Blueprint', category: 'Design', description: 'Architectural design and planning phase.' },
  { id: 5, image: remodeling2, title: 'Open-Concept Living Space', category: 'Remodeling', description: 'Combining living and dining areas.' },
  { id: 6, image: construction2, title: 'High-Rise Apartment Complex', category: 'Construction', description: 'Multi-family residential construction.' },
  { id: 7, image: repairs2, title: 'Foundation Integrity Check', category: 'Repairs', description: 'Foundation assessment and reinforcement.' },
  { id: 8, image: design2, title: 'Industrial Warehouse Layout', category: 'Design', description: 'Logistics and structural design for warehousing.' },
  { id: 9, image: construction3, title: 'City Infrastructure Project', category: 'Construction', description: 'Public works and civil engineering management.' },
];

const filterCategories = ['All', 'Remodeling', 'Construction', 'Repairs', 'Design'];

const ProjectComponent = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState(projectsData);

    useEffect(() => {
        if (activeFilter === 'All') {
            setFilteredProjects(projectsData);
        } else {
            setFilteredProjects(projectsData.filter(p => p.category === activeFilter));
        }
    }, [activeFilter]);

    return (
        <section id="projects" className="py-16 gap-8 flex flex-col justify-center items-center text-center lg:py-24">
             <motion.h1 
                className="text-4xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Our Projects
              </motion.h1>
            <div className="container mx-auto px-4">
                
                {/* Filter Buttons */}
                <motion.ul 
                    // --- THIS IS THE ONLY LINE THAT CHANGED ---
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    {filterCategories.map(category => (
                    <li key={category}>
                        <button
                        onClick={() => setActiveFilter(category)}
                        className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${
                            activeFilter === category 
                            ? 'bg-red-500 text-white' 
                            : 'bg-white text-gray-700 hover:bg-red-100 shadow-sm'
                        }`}
                        >
                        {category}
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
                        <img src={project.image} className="w-full h-72 object-cover" alt={project.title} />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                            <h4 className="text-white text-2xl font-bold mb-2">{project.title}</h4>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex space-x-4">
                            <a href={project.image} title="Zoom In" className="text-white bg-red-500/80 hover:bg-red-500 rounded-full p-3 transition-colors">
                                <BiZoomIn size={24} />
                            </a>
                            <a href={`/`} title="More Details" className="text-white bg-red-500/80 hover:bg-red-500 rounded-full p-3 transition-colors">
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