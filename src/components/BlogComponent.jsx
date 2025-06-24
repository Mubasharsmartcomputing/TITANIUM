import React from 'react';
import { motion } from 'framer-motion';

// --- IMPORT ICONS ---
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

// --- IMPORT IMAGES ---
// Make sure these paths are correct for your project structure
import blogImg1 from '../assets/img/blog/blog-1.jpg';
import blogImg2 from '../assets/img/blog/blog-2.jpg';
import blogImg3 from '../assets/img/blog/blog-3.jpg';
import blogImg4 from '../assets/img/blog/blog-4.jpg';
import blogImg5 from '../assets/img/blog/blog-5.jpg';
import blogImg6 from '../assets/img/blog/blog-6.jpg';

// --- BLOG DATA (This can be moved to its own file later, but is fine here for now) ---
const blogData = [
  { id: 1, image: blogImg1, date: 'August 15', title: 'Why a Flawless Construction Schedule is Your Project\'s Most Valuable Asset', author: 'Jonas Richter', category: 'Project Management', excerpt: 'A successful project runs on a realistic, optimized, and actively managed schedule. We explore how our 15 years of experience in creating critical path schedules provides a clear roadmap for all stakeholders, preventing delays and ensuring milestones are met with precision.', link: '/' },
  { id: 2, image: blogImg2, date: 'August 22', title: 'The Art of Control: Eliminating Chaos Through Expert Subcontractor Coordination', author: 'Stefan Koch', category: 'Site Management', excerpt: 'A project’s momentum depends on the seamless integration of its many moving parts. Learn how Titanium Engineering acts as the central point of contact, synchronizing all trades to eliminate friction, maximize productivity, and create a harmonious, efficient worksite.', link: '/' },
  { id: 3, image: blogImg3, date: 'August 29', title: 'Navigating the Bauamt: How Expert Authority Liaison Keeps Your German Project on Track', author: 'Anja Weber', category: 'Regulatory Compliance', excerpt: 'Navigating German building codes requires deep expertise. We act as the official liaison between your project and the Bauamt, managing paperwork and ensuring full compliance to avoid the costly delays that can derail even the best-laid plans.', link: '/' },
  { id: 4, image: blogImg4, date: 'September 05', title: 'The Unseen Hero: How Meticulous Site Documentation Protects Your Project', author: 'Alex Schmidt', category: 'Risk Management', excerpt: 'Clear, consistent documentation is your project\'s best defense against disputes and delays. Discover our process for managing daily logs, RFIs, and submittals to create an unimpeachable record of your project\'s history.', link: '/blog' },
  { id: 5, image: blogImg5, date: 'September 17', title: 'Protecting Your Bottom Line: The Power of Rigorous Invoice Review', author: 'Lena Bauer', category: 'Financial Control', excerpt: 'Your financial interests are paramount. We delve into the importance of vigilant invoice verification and how our continuous project control monitoring provides real-time financial clarity and prevents budget overruns.', link: '/blog' },
  { id: 6, image: blogImg6, date: 'September 28', title: 'More Than Oversight: Augmenting Your Team with On-Demand Management Support', author: 'Markus Wolf', category: 'Team Support', excerpt: 'Whether you need to reinforce your in-house team or require specialized oversight for a complex phase, flexible support is key. Learn how our "boots on the ground" approach provides the technical problem-solving you need.', link: '/blog' }
];

// --- REUSABLE BLOG POST CARD COMPONENT ---
const BlogPostCard = ({ post }) => {
  return (
    <article className="bg-white rounded-2xl shadow-xl  overflow-hidden flex flex-col h-full group">
      <div className="relative">
        <img src={post.image} alt={post.title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" />
        <span className="absolute bottom-0 right-0 bg-red-500 text-white text-sm font-semibold px-4 py-2">{post.date}</span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-red-600 transition-colors">
          <a href={post.link}>{post.title}</a>
        </h3>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center"><FaUser className="mr-2 text-red-500" /><span>{post.author}</span></div>
          <span className="mx-3">/</span>
          <div className="flex items-center"><FaFolderOpen className="mr-2 text-red-500" /><span>{post.category}</span></div>
        </div>
        <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
        <hr className="my-4"/>
        <a href={post.link} className="font-bold text-red-600 hover:text-red-700 flex items-center self-start">
          <span>Read More</span>
          <HiArrowRight className="ml-2" />
        </a>
      </div>
    </article>
  );
};


// --- MODIFIED BlogComponent ---
const BlogComponent = ({ postLimit, title = "Blog" }) => {

    // --- NEW LOGIC: Determine which posts to show ---
    // If postLimit is a number, slice the array. Otherwise, use the full array.
    const postsToShow = postLimit ? blogData.slice(0, postLimit) : blogData;

    return (
        <section id="blog-posts" className="py-16 gap-8 flex flex-col justify-center items-center text-center lg:py-24">
            <motion.h1 
                className="text-4xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                >
                {/* MODIFIED: Use the title prop here */}
                {title}
            </motion.h1>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* MODIFIED: Map over 'postsToShow' instead of 'blogData' */}
                    {postsToShow.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <BlogPostCard post={post} />
                    </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogComponent;