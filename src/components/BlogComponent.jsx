import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // 1. Import hook
import { useNavigate } from 'react-router-dom';

// --- IMPORT ICONS ---
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

// --- IMPORT IMAGES ---
import blogImg1 from '../assets/img/blog/blog-1.png';
import blogImg2 from '../assets/img/blog/blog-2.png';
import blogImg3 from '../assets/img/blog/blog-3.png';
import blogImg4 from '../assets/img/blog/blog-4.png';
import blogImg5 from '../assets/img/blog/blog-5.png';
import blogImg6 from '../assets/img/blog/blog-6.png';

// 2. Data for non-translatable content. The order MUST match the JSON.
const staticBlogData = [
  { id: 1, image: blogImg1 },
  { id: 2, image: blogImg2 },
  { id: 3, image: blogImg3 },
  { id: 4, image: blogImg4 },
  { id: 5, image: blogImg5 },
  { id: 6, image: blogImg6 }
];

// --- REUSABLE BLOG POST CARD COMPONENT ---
// Now accepts `readMoreText` as a prop
const BlogPostCard = ({ post, readMoreText }) => {
  const navigate = useNavigate();

  const handlePostClick = (e) => {
    e.preventDefault();
    navigate(`/blog/${post.slug}`, {
      state: { postId: post.id }
    });
  };

  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full group">
      <div className="relative">
        <img src={post.image} alt={post.title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow text-start">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 hover:text-[#B49562] transition-colors">
          <button 
            onClick={handlePostClick}
            className="text-left hover:text-[#B49562] transition-colors"
          >
            {post.title}
          </button>
        </h3>
        <p className="text-base text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
        <button 
          onClick={handlePostClick}
          className="inline-flex items-center text-[#B49562] font-semibold hover:underline text-left"
        >
          {readMoreText} <HiArrowRight className="ml-2" />
        </button>
      </div>
    </article>
  );
};

// --- MODIFIED BlogComponent ---
// Now accepts `titleKey` instead of a hardcoded string
const BlogComponent = ({ postLimit, titleKey = 'pages.blog.title', showTitle = true }) => {
    const { t } = useTranslation(); // 3. Initialize hook

    // 4. Dynamically create data by merging static info with translated text
    const blogData = t('pages.blog.posts', { returnObjects: true }).map((post, index) => ({
      ...staticBlogData[index], // Gets id, image, link
      ...post, // Gets date, title, author, category, excerpt from JSON
    }));

    // Logic to determine which posts to show remains the same
    const postsToShow = postLimit ? blogData.slice(0, postLimit) : blogData;

    return (
        <section id="blog-posts" className="pb-10 bg-gray-200 gap-8 flex flex-col justify-center items-center text-center my-10 md:my-0 lg:py-20">
            {showTitle && (
                <motion.h1 
                    className="text-4xl font-bold text-gray-900"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {t(titleKey)}
                </motion.h1>
            )}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postsToShow.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        {/* 6. Pass the translated "Read More" text to the card */}
                        <BlogPostCard post={post} readMoreText={t('pages.blog.readMore')} />
                    </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogComponent;
