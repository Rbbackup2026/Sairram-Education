import React from "react";
import { useParams, Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

function NewsDetails() {
  const { slug } = useParams();

  const newsData = [
    {
      id: 1,
      title: "JEE Main 2026 Session 2 Concludes: What It Means for Your College Admission Journey",
      desc: "The JEE Main 2026 Session 2 exams have officially concluded on April 8, marking a crucial moment for over 11 lakh engineering aspirants across India.",
      date: "April 10, 2026",
      category: "Education News",
      img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
      slug: "nw",
      content: `... (Your HTML Content) ...`,
    }
  ];

  const news = newsData.find((item) => item.slug === slug);

  if (!news) return (
    <div className="h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">News Not Found</h2>
        <Link to="/" className="ml-4 text-blue-600 underline">Go Back</Link>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />

      {/* --- Main Layout --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* --- Breadcrumbs --- */}
        <nav className="flex mb-6 text-sm text-gray-500">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">News Details</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- LEFT COLUMN: CONTENT --- */}
          <article className="lg:col-span-8 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            
            {/* Category & Date */}
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {news.category}
              </span>
              <span className="text-gray-400 text-sm">{news.date}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              {news.title}
            </h1>

            {/* Featured Image */}
            <div className="relative h-[300px] md:h-[450px] w-full mb-8 overflow-hidden rounded-xl shadow-lg">
              <img 
                src={news.img} 
                alt={news.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Rich Text Content */}
            <div 
              className="prose prose-lg max-w-none text-gray-700
                [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:border-l-4 [&_h2]:border-blue-600 [&_h2]:pl-4
                [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-800 [&_h3]:mt-6
                [&_p]:leading-relaxed [&_p]:mb-4
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6
                [&_li]:mb-2
                [&_strong]:text-gray-900 [&_strong]:font-bold
                [&_blockquote]:italic [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4"
              dangerouslySetInnerHTML={{ __html: news.content }}
            ></div>
          </article>

          {/* --- RIGHT COLUMN: SIDEBAR --- */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Quick Contact Card */}
            <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-4">Need Expert Guidance?</h3>
              <p className="text-blue-100 mb-6">Don't let your rank define your future. Get professional counseling today.</p>
              <a 
                href="tel:+919146056767" 
                className="block text-center bg-white text-blue-600 font-bold py-3 rounded-lg hover:bg-gray-100 transition"
              >
                Call Now
              </a>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Our Services</h3>
              <ul className="space-y-3">
                {["College Shortlisting", "Direct Admission Support", "Counselling", "Documentation Support"].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600 text-sm">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter / Stay Updated */}
            <div className="bg-gray-100 p-6 rounded-2xl border border-dashed border-gray-300">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Stay Updated</h3>
              <p className="text-sm text-gray-600 mb-4">Get the latest JEE & NEET updates directly in your inbox.</p>
              <input 
                type="email" 
                placeholder="Enter email" 
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none mb-3"
              />
              <button className="w-full bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-gray-800">
                Subscribe
              </button>
            </div>

          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default NewsDetails;