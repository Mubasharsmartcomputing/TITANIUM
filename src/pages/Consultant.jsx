import React from 'react';
import { motion } from 'framer-motion';

// --- IMPORT ICONS ---
import { FaLinkedinIn, FaTwitter, FaCalendarAlt, FaFolderOpen } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

// --- IMPORT IMAGES ---

import profileImg from '..//assets/img/consultant-profile.png'; // Your professional headshot
import blogImg1 from '../assets/img/blog/blog-1.jpg';
import blogImg2 from '../assets/img/blog/blog-2.jpg';
import blogImg3 from '../assets/img/blog/blog-3.jpg';

// --- DATA FOR THE PAGE ---
const skillsData = [
  { name: 'Project Scheduling & Management', level: '95%' },
  { name: 'Risk Mitigation & Problem Solving', level: '98%' },
  { name: 'Budget Control & Financial Oversight', level: '90%' },
  { name: 'Regulatory Compliance (Bauamt)', level: '92%' },
  { name: 'Subcontractor & Stakeholder Coordination', level: '97%' },
];

const recentArticlesData = [
  { id: 1, image: blogImg1, date: 'August 15', title: 'Why a Flawless Construction Schedule is Your Project\'s Most Valuable Asset', category: 'Project Management', link: '/blog/construction-scheduling-excellence' },
  { id: 2, image: blogImg2, date: 'August 22', title: 'The Art of Control: Eliminating Chaos Through Expert Subcontractor Coordination', category: 'Site Management', link: '/blog/mastering-subcontractor-coordination' },
  { id: 3, image: blogImg3, date: 'August 29', title: 'Navigating the Bauamt: How Expert Authority Liaison Keeps Your German Project on Track', category: 'Regulatory Compliance', link: '/blog/navigating-german-bauamt' },
];

// --- REUSABLE SKILL BAR COMPONENT ---
const SkillBar = ({ skill, level }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="font-medium text-gray-700">{skill}</span>
      <span className="text-sm font-medium text-red-600">{level}</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <motion.div
        className="bg-red-500 h-2.5 rounded-full"
        style={{ width: '0%' }}
        whileInView={{ width: level }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
  </div>
);

// --- MAIN CONSULTANT PROFILE PAGE COMPONENT ---
const Consultant = () => {
  return (
    <main className="bg-white">
      {/* Page Title Section */}
      {/* <div className="relative py-24 bg-cover bg-center" style={{ backgroundImage: `url(${pageTitleBg})` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-5xl font-bold">Consultant Profile</h1>
          <nav className="text-sm mt-4">
            <ol className="list-none p-0 inline-flex items-center">
              <li><a href="/" className="text-red-400 hover:text-white">Home</a></li>
              <li className="mx-2">/</li>
              <li><span>About the Founder</span></li>
            </ol>
          </nav>
        </div>
      </div> */}

      {/* Profile Intro Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src={profileImg} alt="Andreas Keller" className="rounded-4xl shadow-xl  w-full h-auto" />
            </motion.div>
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Andreas Keller</h2>
              <h3 className="text-xl font-semibold text-red-600 mb-4">Founder & Lead Civil Engineer, Titanium Engineering</h3>
              <p className="text-lg text-gray-600 mb-6">
                With 15 years of field-proven experience, I founded Titanium Engineering to bridge the critical gap between brilliant design and flawless execution. My passion lies in bringing order to complexity, ensuring every project is a testament to quality, efficiency, and unwavering integrity. My hands-on approach means I am deeply involved in every project we undertake, serving as a direct partner to our clients.
              </p>
              <div className="flex items-center space-x-4">
                <a href="/contact" className="bg-red-500 text-white font-bold py-3 px-8 rounded-full hover:bg-red-600 transition-colors duration-300">
                  Contact Me
                </a>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-red-500"><FaTwitter size={24} /></a>
                  <a href="#" className="text-gray-500 hover:text-red-500"><FaLinkedinIn size={24} /></a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-800">Core Expertise</h2>
            <p className="text-lg text-gray-600 mt-2">Specialized skills to guarantee project success.</p>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-6">
            {skillsData.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-800">Recent Insights</h2>
            <p className="text-lg text-gray-600 mt-2">Sharing knowledge from the front lines of project management.</p>
          </motion.div>
          <div className="space-y-8">
            {recentArticlesData.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={article.link} className="block group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div className="md:col-span-1">
                      <img src={article.image} alt={article.title} className="rounded-2xl shadow-xl  w-full h-32 md:h-full object-cover" />
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">{article.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
                        <span className="flex items-center"><FaCalendarAlt className="mr-2" />{article.date}</span>
                        <span className="flex items-center"><FaFolderOpen className="mr-2" />{article.category}</span>
                      </div>
                      <p className="text-red-600 font-semibold flex items-center">
                        Read Article <HiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
};

export default Consultant;