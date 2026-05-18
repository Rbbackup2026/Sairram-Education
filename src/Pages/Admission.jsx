import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { Link } from "react-router-dom";
import ProcessSection from '../Components/Process';
import Testinomials from '../Components/Testinomials';
import News from '../Components/News';
import { ArrowRight } from "lucide-react";

const pathways = [
  {
    title: "Management Quota Admissions",
    description: "Structured guidance for students exploring management quota seats across private and deemed institutions, with clarity on eligibility, availability, and procedures.",
    icon: "assets/app.svg",
  },
  {
    title: "NRI Quota Admissions",
    description: "Support for students eligible under NRI category, including documentation guidance, eligibility criteria, and institutional requirements.",
    icon: "assets/app1.svg",
  },
  {
    title: "Institutional Admissions",
    description: "Guidance for institute-level admissions based on internal criteria, helping students understand alternative pathways within colleges and universities.",
    icon: "assets/app2.svg",
  }
];

 const ugPrograms = [
    { title: "Medical", para:"(MBBS, BDS, BAMS, BHMS, Allied Health Sciences)", img: "/assets/medical.svg" },
    { title: "Engineering", para:"(BTech/BE and specializations)", img: "/assets/eng.svg" },
    { title: "Management", para:"(BBA, BMS, BCA, Commerce programs)", img: "/assets/team.svg" },
    { title: "Humanities", para:"and Law programs", img: "/assets/hr.png" },
  ];

  const pgPrograms = [
    { title: "Medical", para:"(MBBS, BDS, BAMS, BHMS, Allied Health Sciences)", img: "/assets/medical.svg" },
    { title: "Engineering", para:"(BTech/BE and specializations)", img: "/assets/eng.svg" },
    { title: "Management", para:"(BBA, BMS, BCA, Commerce programs)", img: "/assets/team.svg" },
    { title: "Humanities", para:"and Law programs", img: "/assets/hr.png" },
  ];


function Admission() {
    const offers = [
    "1-on-1 counselling for profile & eligibility",
    "Guidance on Management, NRI & Institutional quotas",
    "College & course shortlisting",
    "Clear process, timeline & documentation support",
    "Budget-aligned planning",
    "End-to-end admission assistance",
  ];
  return (
    <div>
      <Nav/>
      <header className="w-full bg-[#49BBBD] pb-16 rouuded-xl md:rounded-b-[43%] shadow-xl">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      
              <div className="font-poppins">
                <h1 className="text-[32px] md:text-[52px] font-semibold text-[#FFFFFF] leading-tight mt-[60px] md:mt-0">
                 Get Admission
                </h1>
                <h4 className='mt-4 text-[25px] font-medium text-[#FFFFFF]'>Structured Admission Guidance Across Multiple Pathways</h4>
             <p className="mt-5 text-[16px] md:text-[18px] text-white text-left font-nunito ">
        Sairam Education & Consultancy Services offers structured admission guidance to help students and parents explore options beyond merit-based admissions across India. We provide clear, transparent support for Management, NRI, and Institutional Quota pathways—ensuring eligibility alignment and informed decisions.
      </p>
      
      <Link to="/contact-us">
               <button className="mt-8 bg-white/30 text-white px-8 py-3 rounded-full text-[18px] backdrop-blur-md transition">
        Book Your Free Consultation
      </button>
      </Link>
      
      
              </div>
              <div className="flex justify-center relative">
        <img
          src="/assets/girl2.svg"
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
          <section className="relative py-20 overflow-hidden bg-white">
      {/* 1. Pink Vertical Stripes Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15]"/>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Image with Decorative Elements */}
          <div className="relative w-full lg:w-1/2">
            {/* Blue Accent (Top Left) */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#0ea5e9] rounded-2xl -z-10" />
            
            {/* Red Accent (Bottom Right) */}
            <div className="absolute -bottom-6 -right-4 w-32 h-24 bg-[#be123c] rounded-2xl -z-10" />

            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white shadow-xl">
              <img 
                src="assets/ga.png" 
                alt="Students" 
                className="w-full h-auto object-cover grayscale-[20%]"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            {/* Small Pink Circle Accent */}
            <div className="w-10 h-10 bg-[#f87171] opacity-40 rounded-full mb-2 translate-x-[-10px]" />
            
            <h2 className="text-[32px] font-bold text-[#2F327D] mb-6">
              What We Offer
            </h2>
            
            <p className="text-[20px] text-[#2F327D] opacity-90 mb-2 leading-relaxed">
              Our admission guidance services are designed to simplify complex admission processes and provide clarity at every stage
            </p>

            <ul className="space-y-1 ">
              {offers.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#26BAA4] shrink-0" />
                  <span className="text-[#696984] font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
    <section className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15]" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#2F327D] mb-16">
          Admission Pathways We Cover
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathways.map((path, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white">
              <img src={path.icon} alt={path.title} className='mb-2' />

              <h3 className="text-[25px] font-semibold text-[#49BBBD] mb-2 leading-tight">
                {path.title}
              </h3>

              <p className="text-[15px] text-[#696984] leading-relaxed">
                {path.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 px-2 text-center">
      <h2 className="font-semibold text-[32px] text-[#002741] mb-4">
        Streams We Support
      </h2>

      <p className="text-[25px] font-medium text-[#002741] mx-auto mb-6">
We provide admission guidance across multiple academic streams
      </p>

      
      <div className="inline-block w-full lg:w-[75%] bg-gradient-to-r from-[#FFFFFF] via-[#36898B] to-[#FFFFFF] text-white text-[25px] font-semibold px-6 py-3 mb-12">
        Undergraduate Programs
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
              <p className="font-semibold text-[25px] text-[#002741] text-center">{item.title}</p>
              <p className='text-[18px] text-[#696984]'>{item.para}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="inline-block w-full lg:w-[75%] mt-12 bg-gradient-to-r from-[#FFFFFF] via-[#36898B] to-[#FFFFFF] text-white text-[25px] font-semibold px-6 py-3 mb-12">
        Postgraduate Programs
      </div>

      <div className="flex justify-center gap-4 flex-wrap px-4 md:px-0">
        {pgPrograms.map((item, index) => (
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
              <p className="font-semibold text-[25px] text-[#002741] text-center">{item.title}</p>
              <p className='text-[18px] text-[#696984]'>{item.para}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[#002741] font-medium text-[20px] md:text-[25px] mt-12">
        We help you choose the right pathway based on eligibility, interest, and career goals.
      </p>
      <Link to="/contact-us">
      <button className='px-6 py-4 rounded-full bg-[#C30D22] font-semibold text-[18px] text-[#FFFFFF] mt-10'>Book Free Consultation</button>
      </Link>
    </section>
    <ProcessSection/>
    <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-[32px]  font-bold text-[#2F327D] mb-4">
                Why Choose Sairam for Admission Guidance?
              </h2>
     <ul className='list-disc text-[18px] text-[#696984] font-medium space-y-2'>
      <li>Structured and transparent counselling approach</li>
      <li>Experience across multiple admission pathways</li>
      <li>Coverage across medical, engineering, management, law, and humanities</li>
      <li>Student-focused guidance aligned with long-term goals</li>
      <li>Strong network of institutions across India</li>
      <li>End-to-end support from counselling to admission confirmation</li>
     </ul>
     <Link to="/contact-us">
           <button className="mt-3 px-8 py-3 bg-[#C30D22] text-white font-semibold rounded-full hover:bg-[#a90b1d] transition">
                Book Free Consultation
              </button>
      </Link>
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
          src="/assets/ws.png"
          alt="Video Thumbnail"
          className="relative z-10 rounded-xl shadow-lg"
        />
    
      </div>
    </div>
    
    
    
          </div>
        </section>
          <div className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT IMAGE CARD */}
        <div className="relative flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-4 w-[280px] relative">
            
            {/* Badge */}
            <span className="absolute top-3 left-3 bg-purple-200 text-purple-700 text-xs px-3 py-1 rounded-full">
              Question 1
            </span>

            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9"
              alt="Italy"
              className="rounded-xl h-[200px] w-full object-cover"
            />

            {/* Text */}
            <p className="mt-3 text-sm font-medium text-gray-700">
              True or false? This play takes place in Italy
            </p>

            {/* Bottom success box */}
            <div className="mt-3 bg-green-100 text-green-700 text-xs p-2 rounded-lg flex items-center justify-between">
              <span>Your answer was sent successfully</span>
              <span>✔</span>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-6 -left-6 w-10 h-10 bg-purple-400 rounded-full"></div>
          <div className="absolute -bottom-6 right-0 w-6 h-6 bg-green-400 rounded-full"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold text-[#3A3A8F] mb-4">
            Featured Institutions
          </h2>

          <p className="text-gray-600 mb-6">
            A selection of colleges across medical, engineering, and management
            streams associated with our admission guidance network.
          </p>
         <Link to="/contact-us">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition">
            Book Your FREE Consultation Today
            <ArrowRight size={18} />
          </button>
          </Link>
        </div>
      </div>
    </div>
        <section className="py-12 px-6 text-[#FFFFFF]">
          <div className="w-full lg:max-w-6xl mx-auto bg-[#49BBBD] rounded-[75px] p-10">
        
            <h2 className="text-[32px] font-bold">
              Start Your Admission Journey With Clarity
            </h2>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        
              <p className="md:max-w-[70%]  text-[16px] md:text-[20px] font-medium  leading-relaxed">
               Explore the right admission pathway based on your profile,
preferences, and career goals with expert guidance.
              </p>
        <Link to="/contact-us">
              <button className="mt-2 md:-mt-[20px] px-8 py-3 bg-[#C30D22] text-white font-semibold rounded-full hover:bg-[#a90b1d] transition">
                Book a Counselling Session
              </button>
              </Link>
        
            </div>
          </div>
        </section>
        <Testinomials/>
        <News/>

      <Footer/>
    </div>
  )
}

export default Admission
