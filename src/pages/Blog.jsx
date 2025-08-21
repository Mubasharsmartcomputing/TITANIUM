

// --- IMPORT THE NEW COMPONENT ---
import BlogComponent from '../components/BlogComponent'; // Adjust path if needed



const BlogPage = () => {
  return (
    <main className='bg-gray-200'>
      
      
      {/* RENDER THE SEPARATE BLOG CONTENT COMPONENT */}
      <BlogComponent showTitle={false} />

    </main>
  );
};

export default BlogPage;