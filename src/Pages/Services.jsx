import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet-async'
import Header from '../Components/Header'
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";
import ProcessSection from '../Components/Process'
import Testinomials from '../Components/Testinomials'
import News from '../Components/News'


const services = [
  {
    title: "General Career Counselling",
    desc: "Make the right decision from the start. We help students identify their strengths and choose the most suitable course and stream.",
    points: [
      "Personalized one-to-one counselling",
      "Stream and course clarity",
      "Career roadmap based on aptitude and goals",
    ],
    icon: "/assets/co.png",
  },
  {
    title: "Course & College Selection",
    desc: "We guide you in selecting the best options based on your profile, budget, and long-term plans.",
    points: [
      "Course selection aligned with industry demand",
      "Shortlisting of colleges and universities",
      "Guidance on accredited institutions only",
    ],
    icon: "/assets/co1.png",
  },
  {
    title: "Direct Admission",
    desc: "We assist students in securing admissions through management and NRI quota seats.",
    points: [
      "Personalized one-to-one counselling",
      "Stream and course clarity",
      "Career roadmap based on aptitude and goals",
    ],
    icon: "/assets/co2.png",
  },
   {
    title: "General Career Counselling",
    desc: "Make the right decision from the start. We help students identify their strengths and choose the most suitable course and stream.",
    points: [
      "Personalized one-to-one counselling",
      "Stream and course clarity",
      "Career roadmap based on aptitude and goals",
    ],
    icon: "/assets/co.png",
  },
  {
    title: "Course & College Selection",
    desc: "We guide you in selecting the best options based on your profile, budget, and long-term plans.",
    points: [
      "Course selection aligned with industry demand",
      "Shortlisting of colleges and universities",
      "Guidance on accredited institutions only",
    ],
    icon: "/assets/co1.png",
  },
  {
    title: "Direct Admission",
    desc: "We assist students in securing admissions through management and NRI quota seats.",
    points: [
      "Personalized one-to-one counselling",
      "Stream and course clarity",
      "Career roadmap based on aptitude and goals",
    ],
    icon: "/assets/co2.png",
  },
];

const ugPrograms = [
    { title: "Medical", img: "/assets/medical.svg" },
    { title: "Engineering", img: "/assets/eng.svg" },
    { title: "Management", img: "/assets/team.svg" },
    { title: "Humanities", img: "/assets/hr.png" },
    { title: "Law", img: "/assets/law.png" },
  ];




function Services() {
  return (
    <div>
         <Helmet>
                <title>
                  Sairam Education Services | Direct Admission & Career Guidance Pune
                </title>
        
                <meta
                  name="description"
                  content="Get expert career counselling and direct admission in engineering, medical, and MBA colleges. Trusted admission consultants in Pune with end-to-end support."
                />
        
                <meta name="robots" content="index, follow" />
                 <link
                  rel="canonical"
                  href="https://sairameducation.in/"
                />
              </Helmet>

      <Nav />
      <header className="w-full bg-[#49BBBD] pb-16 rouuded-xl md:rounded-b-[43%] shadow-xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        <div className="font-poppins">
          <h1 className="text-[32px] md:text-[52px] font-semibold text-[#FFFFFF] leading-tight mt-[60px] md:mt-0">
           Our Services
          </h1>
          <h4 className='mt-4 text-[25px] font-medium text-[#FFFFFF]'>End-to-End Admission & Career Guidance</h4>
       <p className="mt-5 text-[16px] md:text-[18px] text-white text-left font-nunito ">
  Choosing the right course and securing admission can feel overwhelming. <br />
We simplify this journey through personalized support.
From career counselling to final admission, we ensure you make informed decisions at every step.
</p>

<Link to="/contact-us">
         <button className="mt-8 bg-white/30 text-white px-8 py-3 rounded-full text-[18px] backdrop-blur-md transition">
  Book Your Free Consultation
</button>
</Link>


        </div>
        <div className="flex justify-center relative">
  <img
    src="/assets/girl.svg"
    alt="Header"
    className="w-full  rounded-xl z-5 -mt-[35px] md:mt-0"
  />

  
  <img
    src="/assets/im1.svg"
    alt="Speech 1"
    className="absolute hidden md:block bottom-[400px] -right-6"
  />

  
  <img
    src="/assets/im2.svg"
    alt="Speech 2"
    className="absolute hidden md:block bottom-[170px] -left-4 z-10"
  />

 
  <img
    src="/assets/im.svg"
    alt="Chat Icon"
    className="absolute hidden md:block bottom-[561px] -left-7 z-10"
  />

</div>


      </div>
    </header>
     <section className="py-16 relative">
      <h2 className="text-center text-[32px] font-bold text-[#2F327D] mb-10">
        Our Core Services
      </h2>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Custom Arrows */}
        <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
          <button className="prev bg-green-500 text-white p-3 rounded-full">
            <ChevronLeft />
          </button>
        </div>

        <div className="absolute -right-7 top-1/2 -translate-y-1/2 z-10">
          <button className="next bg-green-500 text-white p-3 rounded-full">
            <ChevronRight />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" p-6 h-full">
                <img
                  src={item.icon}
                  alt=""
                  className="w-14 h-14 mb-4"
                />

                <h3 className="text-[25px] font-semibold text-[#2F327D] mb-2">
                  {item.title}
                </h3>

                <p className="text-[15px] text-[#696984] mb-4">
                  {item.desc}
                </p>

                <ul className="space-y-2">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start text-[18px] text-[#696984] font-medium">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    <section className="bg-[#EEF4FF] py-16 px-2 text-center">
      <h2 className="font-bold text-[32px] text-[#2F327D] mb-4">
Admission Support Across Streams
      </h2>
      <p className='text-[20px] font-medium text-[#2F327D] mb-5 -mt-1'>We provide counselling and admission assistance across multiple fields</p>

      
      <div className="inline-block w-full lg:w-[75%] bg-gradient-to-r from-[#FFFFFF] via-[#36898B] to-[#FFFFFF] text-white text-[25px] font-semibold px-6 py-3 mb-12">
        Undergraduate & Postgraduate Programs
      </div>

      <div className="flex justify-center gap-4 flex-wrap px-4 md:px-0">
        {ugPrograms.map((item, index) => (
          <div
            key={index}
            className="w-full lg:w-[237px] h-[230px] bg-white rounded-lg shadow-lg"
          >
            <div className="flex flex-col justify-center items-center h-full">
              <img
                src={item.img}
                alt={item.title}
                className="w-[50px] h-[50px] mb-6"
              />
              <p className="font-semibold text-[25px] text-center">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <ProcessSection/>
     <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-[32px]  font-bold text-[#2F327D] mb-4">
                Why Choose Sairam?
              </h2>
     <ul className='list-disc text-[18px] text-[#696984] font-medium space-y-2'>
      <li>18+ years of experience in education consultancy</li>
      <li>5,000+ students successfully guided</li>
      <li>75+ institute tie-ups across India</li>
      <li>Transparent and student-focused approach</li>
      <li>End-to-end support from counselling to admission</li>
     </ul>
             
            </div>
    
          <div className="flex-1 flex justify-center">
      <div className="relative"> 
        <span className="absolute -top-[8px] -left-[8px] w-16 h-16 
          border-t-[21px] border-l-8 rounded-2xl border-[#23BDEE] z-0">
        </span>
    
        <span className="absolute -bottom-2 -right-2 w-[150px] h-[150px] 
          border-b-[21px] border-r-8 rounded-2xl border-[#C30C22] z-0">
        </span>    
        <img
          src="/assets/as.png"
          alt="Video Thumbnail"
          className="relative z-10 rounded-xl shadow-lg"
        />
    
      </div>
    </div>
    
    
    
          </div>
        </section>
    <Testinomials/>
    <News/>

      <Footer />
    </div>
  )
}

export default Services
