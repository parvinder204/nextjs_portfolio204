"use client";  // Ensure this runs on client side

import { useParams, useRouter } from "next/navigation";
import blogs from "@/data/blogs";
import "@/assets/css/blog.css";

const BlogDetails = () => {
  const { id } = useParams();  // Get dynamic blog ID
  const router = useRouter();

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <h1 className="blog-not-found">Blog not found</h1>;
  }

  return (
    <main className="main-container">
    <section className="blog-details-container">
      <div className="blog-details-content-container">
        <div className="blog-details-image-container">
          <img src={blog.image} alt={blog.title} className="blog-details-image" />
        </div>
        <div className="blog-details-text-container">
          <h1 className="blog-details-title">{blog.title}</h1>
          <p className="blog-details-content">{blog.content}</p>
          <button onClick={() => router.push("/blog")} className="back-btn">
            ← Back to Blogs
          </button>
        </div>
      </div>
      <div className="blog-details-description-container">
      <p>{blog.description}</p>
      </div>
    </section>
    </main>
  );
};

export default BlogDetails;
