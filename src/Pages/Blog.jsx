import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

function Blog() {
  const blogData = [
    {
      id: 1,
      title: "Low Score in CAT? Here’s What You Can Still Do",
      desc: "Every year, lakhs of students appear for the Common Admission Test with the hope of getting into top B-schools like the Indian Institutes of Management.",
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      content: "Full content of blog 1...",
      slug:"low-score-in-cat-heres-what-you-can-still-do",
    },
    {
      id: 2,
      title: "What Is Direct Admission in India? A Complete Guide for Students",
      desc: "Every year, thousands of students in India struggle with one common problem:",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      content: "Full content of blog 2...",
      slug:"what-is-direct-admission-in-india-a-complete-guide-for-students",
    },
 
    {
      id: 3,
      title: "How Students Secure Seats Through Management Quota in India",
      desc: "For many students in India, getting into a good college feels like a race decided by a single exam.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      content: "Full content of blog 4...",
      slug:"gggl",
    },
  ];

  const newsData = [
    {
      id: 1,
      title: "JEE Main 2026 Session 2 Concludes: What It Means for Your College Admission Journey",
      desc: "The JEE Main 2026 Session 2 exams have officially concluded on April 8, marking a crucial moment for over 11 lakh engineering aspirants across India.",
      img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
      content: "Full news content 1...",
      slug:"how-students-secure-seats-through-management-quota-in-india",
    },
  ];

  const [visibleBlogs, setVisibleBlogs] = useState(3);
  const [visibleNews, setVisibleNews] = useState(3);

  return (
    <div>
      <Nav />

      {/* BLOG SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">Blogs</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {blogData.slice(0, visibleBlogs).map((item) => (
            <div key={item.id} className="shadow-lg rounded-xl overflow-hidden">
              <img
                src={`${item.img}?auto=format&fit=crop&w=800`}
                alt={item.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-2 line-clamp-2">{item.desc}</p>

                <Link to={`/blog-details/${item.slug}`}>
                  <button className="mt-4 bg-[#49BBBD] text-white px-4 py-2 rounded">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {visibleBlogs < blogData.length && (
          <div className="text-center mt-6">
            <button
              onClick={() => setVisibleBlogs(visibleBlogs + 3)}
              className="bg-[#49BBBD] text-white px-6 py-2 rounded-lg"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* NEWS SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">News & Articles</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {newsData.slice(0, visibleNews).map((item) => (
            <div key={item.id} className="shadow-lg rounded-xl overflow-hidden">
              <img
                src={`${item.img}?auto=format&fit=crop&w=800`}
                alt={item.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>

                <Link to={`/news-details/${item.slug}`}>
                  <button className="mt-4 bg-[#49BBBD] text-white px-4 py-2 rounded">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>                         

        {visibleNews < newsData.length && (
          <div className="text-center mt-6">
            <button
              onClick={() => setVisibleNews(visibleNews + 3)}
              className="bg-[#49BBBD] text-white px-6 py-2 rounded-lg"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Blog;