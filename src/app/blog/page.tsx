import Link from "next/link";
import blogs from "@/data/blogs";
import "@/assets/css/blog.css";

const BlogPage = () => {
  return (
    <main className="main-container">
    <section className="blog-container">
      <h1 className="blog-heading">Latest Blogs</h1>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-description">{blog.description}</p>
            <Link href={`/blog/${blog.id}`} className="read-more-btn">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
    </main>
  );
};

export default BlogPage;
