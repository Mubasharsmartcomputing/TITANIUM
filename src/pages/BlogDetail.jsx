import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiArrowLeft } from 'react-icons/hi';
import ReactMarkdown from 'react-markdown';

// Import images
import blogImg1 from '../assets/img/blog/blog-1.png';
import blogImg2 from '../assets/img/blog/blog-2.png';
import blogImg3 from '../assets/img/blog/blog-3.png';
import blogImg4 from '../assets/img/blog/blog-4.png';
import blogImg5 from '../assets/img/blog/blog-5.png';
import blogImg6 from '../assets/img/blog/blog-6.png';

const staticBlogImages = [
  blogImg1, blogImg2, blogImg3, blogImg4, blogImg5, blogImg6
];

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [post, setPost] = useState(null);
  
  // Get posts from translation file
  const posts = t('pages.blog.posts', { returnObjects: true }) || [];
  
  // Find post by slug or ID
  useEffect(() => {
    let foundPost = posts.find(p => p.slug === slug);
    
    // If not found by slug, try to find by ID from state
    if (!foundPost && location.state?.postId) {
      foundPost = posts.find(p => p.id === location.state.postId);
    }
    
    if (foundPost) {
      setPost({
        ...foundPost,
        image: staticBlogImages[foundPost.id - 1] || staticBlogImages[0]
      });
    } else {
      setPost(null);
    }
  }, [slug, posts, location.state?.postId]);
  
  // Handle language change
  useEffect(() => {
    const handleLanguageChanged = () => {
      const currentPosts = t('pages.blog.posts', { returnObjects: true }) || [];
      if (post) {
        const translatedPost = currentPosts.find(p => p.id === post.id);
        if (translatedPost && translatedPost.slug !== slug) {
          navigate(`/blog/${translatedPost.slug}`, { 
            replace: true,
            state: { postId: translatedPost.id }
          });
        }
      }
    };
    
    i18n.on('languageChanged', handleLanguageChanged);
    return () => i18n.off('languageChanged', handleLanguageChanged);
  }, [i18n, post, slug, navigate, t]);
  
  // Show loading state or not found
  if (!post) {
    return (
      <main className="bg-gray-200 min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('error.postNotFound', 'Post Not Found')}
            </h1>
            <p className="text-gray-600 mb-8">
              {t('error.postNotFoundMessage', 'The blog post you\'re looking for doesn\'t exist or may have been removed.')}
            </p>
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center px-6 py-3 bg-[#B49562] text-white rounded-lg hover:bg-[#9d8052] transition-colors"
            >
              <HiArrowLeft className="mr-2" />
              {t('common.backToBlog', 'Back to Blog')}
            </button>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-200 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => navigate('/blog')}
          className="inline-flex items-center text-[#B49562] hover:text-[#9d8052] mb-8 transition-colors"
        >
          <HiArrowLeft className="mr-2" />
          {t('common.backToBlog', 'Back to Blog')}
        </motion.button>

        {/* Blog Post */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Featured Image */}
          {post.image && (
            <div className="w-full h-96 bg-gray-300">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Title */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {post.title}
              </h1>
            </div>

            {/* Preview Paragraph */}
            {post.previewParagraph && (
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {post.previewParagraph}
              </p>
            )}

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Main Content */}
            <div className="prose prose-xl max-w-none prose-headings:font-semibold prose-headings:text-gray-900 prose-headings:mb-6 prose-p:text-gray-700 prose-p:leading-8 prose-p:mb-6 prose-a:text-[#B49562] prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-strong:font-semibold prose-em:text-gray-600 prose-blockquote:border-l-4 prose-blockquote:border-[#B49562] prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-ul:space-y-2 prose-ol:space-y-2 prose-li:text-gray-700 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono">
              {post.content ? (
                <ReactMarkdown>{post.content}</ReactMarkdown>
              ) : (
                <div className="flex items-center justify-center py-20">
                  <p className="text-gray-500 text-lg font-light">No content available for this post.</p>
                </div>
              )}
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
};

export default BlogDetail;