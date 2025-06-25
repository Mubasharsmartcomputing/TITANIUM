import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // 1. Import hook

// --- IMPORT ICONS ---
import { FaLinkedinIn, FaTwitter, FaCalendarAlt, FaFolderOpen } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

// --- IMPORT IMAGES ---
import profileImg from '../assets/img/consultant-profile.png'; // Your professional headshot
import blogImg1 from '../assets/img/blog/blog-1.jpg';
import blogImg2 from '../assets/img/blog/blog-2.jpg';
import blogImg3 from '../assets/img/blog/blog-3.jpg';

// 2. Data for non-translatable content. The order MUST match the JSON.
const staticSkillsData = [
  { level: '95%' },
  { level: '98%' },
  { level: '90%' },
  { level: '92%' },
  { level: '97%' },
];

const staticArticlesData = [
  { id: 1, image: blogImg1, link: '/blog/construction-scheduling-excellence' },
  { id: 2, image: blogImg2, link: '/blog/mastering-subcontractor-coordination' },
  { id: 3, image: blogImg3, link: '/blog/navigating-german-bauamt' },
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
  const { t } = useTranslation(); // 3. Initialize hook

  // 4. Dynamically create data by merging static info with translated text
  const skillsData = t('pages.consultant.skills.items', { returnObjects: true }).map((skillName, index) => ({
    name: skillName,
    ...staticSkillsData[index],
  }));

  // Re-use blog posts from the main blog data to avoid duplication
  const recentArticlesData = t('pages.blog.posts', { returnObjects: true }).slice(0, 3).map((post, index) => ({
    ...staticArticlesData[index], // Gets id, image, link
    ...post,                      // Gets date, title, category from main blog data
  }));

  return (
    <main className="bg-white">
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
              <img src={profileImg} alt={t('pages.consultant.profile.name')} className="rounded-4xl shadow-xl w-full h-auto" />
            </motion.div>
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* 5. Use translated text */}
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('pages.consultant.profile.name')}</h2>
              <h3 className="text-xl font-semibold text-red-600 mb-4">{t('pages.consultant.profile.role')}</h3>
              <p className="text-lg text-gray-600 mb-6">{t('pages.consultant.profile.bio')}</p>
              <div className="flex items-center space-x-4">
                <a href="/contact" className="bg-red-500 text-white font-bold py-3 px-8 rounded-full hover:bg-red-600 transition-colors duration-300">
                  {t('pages.consultant.profile.ctaButton')}
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
            <h2 className="text-4xl font-bold text-gray-800">{t('pages.consultant.skills.title')}</h2>
            <p className="text-lg text-gray-600 mt-2">{t('pages.consultant.skills.subtitle')}</p>
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
            <h2 className="text-4xl font-bold text-gray-800">{t('pages.consultant.articles.title')}</h2>
            <p className="text-lg text-gray-600 mt-2">{t('pages.consultant.articles.subtitle')}</p>
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
                      <img src={article.image} alt={article.title} className="rounded-2xl shadow-xl w-full h-32 md:h-full object-cover" />
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">{article.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
                        <span className="flex items-center"><FaCalendarAlt className="mr-2" />{article.date}</span>
                        <span className="flex items-center"><FaFolderOpen className="mr-2" />{article.category}</span>
                      </div>
                      <p className="text-red-600 font-semibold flex items-center">
                        {t('pages.consultant.articles.readMore')} <HiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
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