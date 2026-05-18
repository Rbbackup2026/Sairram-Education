import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Nav />

      <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-xl">
          
          {/* 404 Number */}
          <h1 className="text-[80px] md:text-[120px] font-extrabold text-[#2F327D] leading-none">
            404
          </h1>

          {/* Title */}
          <h2 className="text-[24px] md:text-[32px] font-semibold text-gray-800 mt-4">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-[16px] md:text-[18px] text-gray-500 mt-3 leading-relaxed">
            Sorry, the page you are looking for doesn’t exist or has been moved.
            Please check the URL or go back to the homepage.
          </p>

          {/* Button */}
          <Link
            to="/"
            className="inline-block mt-6 px-6 py-3 bg-[#2F327D] text-white text-[16px] font-medium rounded-lg shadow-md hover:bg-[#1f2260] transition duration-300"
          >
            Go Back Home
          </Link>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default NotFound;