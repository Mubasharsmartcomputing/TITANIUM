

// --- IMPORT THE NEW COMPONENT ---
import BlogComponent from '../components/BlogComponent'; // Adjust path if needed



const BlogPage = () => {
  return (
    <main className="bg-gray-50">
      
      
      {/* RENDER THE SEPARATE BLOG CONTENT COMPONENT */}
      <BlogComponent />

    </main>
  );
};

export default BlogPage;