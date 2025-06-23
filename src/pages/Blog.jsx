import React from 'react';
import { motion } from 'framer-motion';

// --- IMPORT THE NEW COMPONENT ---
import BlogComponent from '../components/BlogComponent'; // Adjust path if needed

// --- IMPORT IMAGES ---
import pageTitleBg from '../assets/img/page-title-bg.jpg';

const BlogPage = () => {
  return (
    <main className="bg-gray-50">
      <div className="relative py-24 bg-cover bg-center" style={{ backgroundImage: `url(${pageTitleBg})` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <motion.h1 
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Blog
          </motion.h1>
          <motion.nav 
            className="text-sm mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ol className="list-none p-0 inline-flex items-center">
              <li className="flex items-center"><a href="/" className="text-red-400 hover:text-white">Home</a></li>
              <li className="flex items-center mx-2">/</li>
              <li className="flex items-center"><span>Blog</span></li>
            </ol>
          </motion.nav>
        </div>
      </div>
      
      {/* RENDER THE SEPARATE BLOG CONTENT COMPONENT */}
      <BlogComponent />

    </main>
  );
};

export default BlogPage;