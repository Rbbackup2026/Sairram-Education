import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { FaBookOpen } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router';

 const points = [
    "We empower our team members to grow professionally while helping students achieve their academic goals with confidence.",

    "We believe in building a work culture rooted in honesty, commitment, transparency, and mutual respect. These values guide the way we interact with students, parents, partner institutions, and one another.",

    "Our aim is to create a positive and growth-oriented environment where employees feel motivated, supported, and encouraged to contribute their ideas and expertise.",

    "We bring together experienced education consultants and passionate young professionals, creating a dynamic workplace that promotes collaboration, innovation, and continuous learning.",

    "Through regular training programs, workshops, and knowledge-sharing sessions, we continuously invest in strengthening our team’s counseling, communication, and industry expertise.",

    "Our internal discussions and mentorship-driven approach help employees stay updated with changing education trends, admission processes, and student requirements across India and overseas.",

    "We encourage open communication across all levels of the organization and value every team member’s contribution toward the success of our students and partners.",

    "Employees at Sairam Education & Consultancy Services,  have direct opportunities to interact with leadership, share feedback, and actively participate in the organization’s growth journey.",
  ];

function Career() {
  return (
    <div>
        <Nav />
       <section className=" mt-3 w-full bg-gradient-to-r from-[#1e88e5] to-[#0f2d52] py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Heading */}
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Careers
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center text-white text-lg font-medium">
          <span className="hover:text-gray-200 cursor-pointer transition">
            <Link to="/">
            Home
            </Link>
          </span>

          <span className="mx-2">»</span>

          <span className="text-white">Careers</span>
        </div>
      </div>
    </section>
    <section className="bg-[#e9e9e9] py-16 px-4">
      <div className="max-w-7xl mx-auto bg-[#49bbbd] rounded-sm shadow-xl py-16 px-6 md:px-16 text-center">
        
        {/* Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-bold ">
          Join us
        </h2>
        <h4 className='text-[23px] lg:text-[32px] text-[#FFFFFF] font-semibold'>Find a career that makes a difference.</h4>
        {/* Description */}
        <p className="text-white text-[12px] lg:text-[18px] leading-2 max-w-5xl mx-auto mb-3">
          We think big and set the pace in this industry. We empower outcomes. We forge partnerships and bring students and their dream careers together. 

        </p>

        {/* Button */}
       <a
  href="https://wa.me/919146056767"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 bg-[#169c59] hover:bg-[#12834b] text-white text-[18px] font-semibold px-10 py-3  lg:py-5 rounded-full shadow-2xl transition duration-300"
>
  <FaWhatsapp className="text-[18px] lg:text-xl" />

  <h3 className="text-[12px] lg:text-[18px] whitespace-nowrap">
    CONNECT ON WHATSAPP
  </h3>
</a>
      </div>
    </section>
     <section className="bg-[#f1f1f1] py-10 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-center text-[#002741] text-[27px] lg:text-6xl font-bold mb-2 lg:mb-16">
          Why work with Sairam Education
        </h2>

        {/* List */}
        <div className="space-y-6">
          {points.map((item, index) => (
            <div
              key={index}
              className="border-b border-[#2347ff] pb-5 flex items-start gap-4"
            >
              {/* Icon */}
              <FaBookOpen className="text-[#2347ff] text-lg mt-2 min-w-[18px]" />

              {/* Text */}
              <p className="text-[#5b5f8a] text-[13px] md:text-[18px] leading-9">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </div>
  )
}

export default Career
