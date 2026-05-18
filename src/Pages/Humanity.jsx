import React from 'react'
import Nav from '../Components/Nav'
import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'
import Footer from '../Components/Footer'

import { Helmet } from "react-helmet-async";

function Humanity() {
  return (
    <div>
      <Helmet>
              <title>
                Humanities Admission Guidance India | BA, MA Counselling
              </title>
      
              <meta
                name="description"
                content="Get expert humanities counselling for BA, MA & social science courses. Admission guidance via merit, management & NRI quota in top colleges across India."
              />
      
              {/* Optional but Recommended */}
              <meta name="robots" content="index, follow" />
               <link
                rel="canonical"
                href="https://sairameducation.in/humanities"
              />
            </Helmet>
<Nav/>
<header className="w-full bg-[#49BBBD] py-[150px]  rouuded-xl md:rounded-b-[43%] shadow-xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        <div className="font-poppins">
          <h1 className="text-[52px] font-semibold text-[#FFFFFF] leading-tight mt-[60px] md:mt-0">
            Humanities
          </h1>
             <Link to="/contact-us">
         <button className="mt-8 bg-white/30 text-white px-8 py-3 rounded-full text-[18px] backdrop-blur-md transition">
  Book Your Free Consultation
</button>
</Link>
        </div>
        <div className="flex justify-center relative">
</div>
      </div>
    </header>
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h2 className="text-[32px]  font-bold text-[#2F327D] mb-4">
            Law Counselling & Admission Support
          </h2>
          <p className=" mb-4 font-Regular text-[16px] md:text-[18px] text-[#696984] tracking-[0.02em]">
         Sairam Education & Consultancy Services provides structured counselling and admission guidance for students aspiring to build careers in humanities, social sciences, and interdisciplinary fields. Our counselling approach helps students explore diverse academic pathways while aligning their interests, strengths, and long-term career goals.
          </p>
          <br />
          <p className=" mb-4 font-Regular text-[16px] md:text-[18px] text-[#696984] tracking-[0.02em]">We offer admission guidance through merit quota, management quota and NRI quota seats, ensuring a transparent and well-structured admission process across humanities institutions.</p>
        </div>
    <div className="flex justify-center">
  <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-[500px]">

    <div>
      <img
        src="/assets/cg.png"
        alt=""
        className="w-[280px] h-[480px] object-cover rounded-[100px]"
      />
    </div>

    <div className="mt-5 md:mt-20 relative">
      <img
        src="/assets/cg2.png"
        alt=""
        className="w-[280px] h-[380px] object-cover rounded-[100px]"
      />
      <img src="/assets/cr1.svg" className='absolute -top-[76px] left-[22px]' alt="" />
    </div>

  </div>
</div>
      </div>
    </section>
    <section className="py-20 bg-[#002741]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 flex justify-center">
  <div className="relative"> 
    <img
      src="/assets/cg3.png"
      alt="image"
      className="relative z-10"
    />
  </div>
</div>
        <div className="flex-1">
          <h2 className="text-[32px]  font-bold text-[#FFFFFF] mb-4">
           What We Offer
          </h2>
<p className='font-medium text-[16px] md:text-[20px] text-[#FFFFFF]'>Our Humanities counselling services include</p>
           <ul className="mt-6">
            {[
              "One-to-one counselling for humanities, social sciences, and related programs",
              "Guidance for admission through merit-based quota, management quota and NRI quota seats",
              "Support with application processes, documentation, and institutional coordination",
              "Program selection based on academic background and career interests",
              "End-to-end admission support until confirmation and reporting",
            ].map((item, index) => (
            <li key={index} className="flex gap-3 mb-4">

  <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full shrink-0 self-start mt-[6px]">
    <ChevronRight size={12} />
  </span>
  <span className="text-[#FFFFFF] text-[18px] md:text-[25px] font-medium leading-snug">
    {item}
  </span>
</li>


            ))}
          </ul>
        
        </div>
      </div>
    </section>
    <section className="py-16 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-[32px] font-bold text-[#002741] mb-4">
      Undergraduate Humanities Courses
    </h2>
    <p className="text-[16px] md:text-[20px] font-medium  text-[#2F327D] leading-relaxed">
     We provide counselling and admission support for the following undergraduate programs
    </p>
  </div>
     <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 mt-[43px]">
          <div className="flex-1 flex justify-center">
 <div className="relative inline-block">

 
  <span
    className="absolute -top-4 -left-4 w-0 h-0 
    border-t-[160px] border-r-[160px] 
    border-t-[#FFD25D] border-r-transparent 
    z-0"
  ></span>


  <span
    className="absolute -bottom-4 -right-4 w-0 h-0 
    border-b-[160px] border-l-[160px] 
    border-b-[#FFD25D] border-l-transparent 
    z-0"
  ></span>

  <img
    src="/assets/um.png"
    alt="Video Thumbnail"
    className="relative z-10 rounded-xl shadow-lg"
  />

</div>

</div>
        <div className="flex-1">
           <ul className="mt-6">
            {[
              "BA",
              "Psychology",
              "BCA",
              "BASLP",
              "BHM",
              "Other Humanities and Interdisciplinary Programs"
            ].map((item, index) => (
            <li key={index} className="flex gap-3 mb-4">
  <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full shrink-0 self-start mt-[6px]">
    <ChevronRight size={12} />
  </span>

  <span className="text-[#424040] text-[18px] md:text-[25px] font-medium leading-snug">
    {item}
  </span>
</li>
            ))}
          </ul>
           <Link to="/contact-us">
          <button className='text-[18px] p-3 px-7 bg-[#C30D22] rounded-full  text-[18px] font-semibold text-[#FFFFFF]'>Know More</button>
          </Link>        
        </div>
      </div>
</section>
<section className="py-16 px-6 bg-[#EEF4FF]">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-[32px] font-bold text-[#002741] mb-4">
      Postgraduate Humanities Courses
    </h2>
    <p className="text-[16px] md:text-[20px] font-medium  text-[#2F327D] leading-relaxed">
     Sairam Education supports postgraduate admissions across humanities and related disciplines
    </p>
  </div>
     <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 mt-[43px]">
        <div className="flex-1">
          
           <ul className="mt-6">
            {[
              "MHM",
              "MA",
              "MSc",
              "Other Postgraduate Humanities Programs",
            ].map((item, index) => (
            <li key={index} className="flex gap-3 mb-4">
  <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full shrink-0 self-start mt-[6px]">
    <ChevronRight size={12} />
  </span>

  <span className="text-[#424040] text-[18px] md:text-[25px] font-medium leading-snug">
    {item}
  </span>
</li>
            ))}
          </ul>
          <Link to="/contact-us">
          <button className='text-[18px] p-3 px-7 bg-[#C30D22] rounded-full  text-[18px] font-semibold text-[#FFFFFF]'>Know More</button>
          </Link>        
        </div>
          <div className="flex-1 flex justify-center">
  <div className="relative inline-block">

  
    <span
      className="absolute -top-[20px] -left-[20px] w-16 h-16
      bg-[#3FF1BB] z-20"
    ></span>

   
    <span
      className="absolute -top-[40px] -left-[40px] w-16 h-16
      bg-[#7768E5] z-30"
    ></span>

    
    <span
      className="absolute -bottom-3 -right-3 w-56 h-56
      bg-[#3BE1AF]
      z-0"
    ></span>

    <img
      src="/assets/em.png"
      alt="Video Thumbnail"
      className="relative z-10  shadow-lg"
    />

  </div>
</div>
      </div>
      </section>
      <section className="py-12 px-6 text-[#FFFFFF]">
        <div className="w-full lg:max-w-6xl mx-auto bg-[#49BBBD] rounded-[75px] p-10">
      
          <h2 className="text-[32px] font-bold">
            Start Your Journey in Humanities With Us
          </h2>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      
            <p className="md:max-w-[70%]  text-[16px] md:text-[20px] font-medium  leading-relaxed">
             Explore suitable Humanities programs and admission pathways with expert guidance.
            </p>
      <Link to="/contact-us">
            <button className="mt-2 md:-mt-[20px] px-8 py-3 bg-[#C30D22] text-white font-semibold rounded-full hover:bg-[#a90b1d] transition">
              Book Your Counselling Session
            </button>
            </Link>
      
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Humanity
