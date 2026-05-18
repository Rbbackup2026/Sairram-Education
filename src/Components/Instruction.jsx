import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Instruction() {

  const slides = [
    {
      question: "How do I apply for admission?",
      image: "/assets/oa1.png",
      answer: [
        {
          type: "points",
          content: [
            "Contact us (call, WhatsApp, or website) for an initial consultation",
            "Receive personalized career counseling based on your interests, marks, and goals",
            "Shortlist colleges/courses and complete applications with our guidance",
            "Submit documents and secure admission via merit, management, or NRI quota options"
          ]
        },
      ]
    },
    {
      question: "Which course is best for me?",
      image: "/assets/oa2.png",
      answer: [
        {
          type: "paragraph",
          content:
            "The best course depends on your academic background, career goals, budget, preferred location, and interests. We provide personalized career counseling to help you choose the right path, whether it’s"
        },
         {
          type: "points",
          content: [
            "Medical",
            "Engineering",
            "Management",
            "Humanities",
            "Law",
          ]
        },
      ]
    },
    {
      question: "What are the eligibility criteria?",
      image: "/assets/oa3.png",
      answer: [
        {
          type: "paragraph",
          content:
            "Eligibility varies by course and university. Here’s a quick overview:"
        },
         {
          type: "points",
          content: [
            "Medical (MBBS, BDS): 10+2 with Physics, Chemistry, Biology + NEET (for most colleges)",
            "Engineering (B.Tech): 10+2 with PCM + exams like JEE (varies by college)",
            "Management (BBA/MBA): BBA requires 10+2 (any stream); MBA requires a UG degree + exams like CAT/MAT or direct admission",
          ]
        },
         {
          type: "paragraph",
          content:
            "As criteria differ across colleges and states, Sairam helps you understand exact eligibility and the best admission options based on your profile."
        },
      ]
    },
    {
      question: "Do you provide admission in top colleges across India",
      image: "/assets/oa4.png",
      answer: [
        {
          type: "paragraph",
          content:"Yes, Sairam Education & Consultancy Services has tie-ups with 75+ reputed institutes across India. We help students secure admission in top colleges for medical, engineering, and management courses through merit-based, management quota, and NRI quota options. Our strong network ensures you get access to the best possible colleges based on your profile, budget, and preferences."
        },
      ]
    },
    {
      question: "Do you assist with education loans or financial guidance?",
      image: "/assets/ap5.jpg",
      answer: [
        {
          type: "paragraph",
          content:"Absolutely. We understand that financing education is a major concern for students and parents. Our team provides guidance on:"
        },
        {
          type: "points",
          content: [
            "Education loan options through leading banks and NBFCs",
            "Fee structure planning and budget alignment",
            "Scholarship opportunities (where available)",
          ]
        },
        {
          type: "paragraph",
          content:"We aim to make quality education accessible by helping you plan your finances smartly and confidently."
        },
      ]
    },
  ];
  // const slides = [
  //   {
  //     question: "How do I apply for admission?",
  //     answer:
  //       "You can apply by filling out our online form or contacting our admission counselor. We guide you step-by-step through the entire process.",
  //     image: "/assets/ap1.svg",
  //   },
  //   {
  //     question: "Which course is best for me?",
  //     answer:
  //       "Our experts analyze your interests, academic background, and career goals to suggest the best course for you.",
  //     image: "/assets/ap2.svg",
  //   },
  //   {
  //     question: "What are the eligibility criteria?",
  //     answer:
  //       "Eligibility depends on the course and institution. Generally, it includes minimum marks and entrance exam requirements.",
  //     image: "/assets/ap3.svg",
  //   },
  //   {
  //     question: "Do you provide admission in top colleges across India?",
  //     answer:
  //       "Yes, Sairam Education & Consultancy Services has tie-ups with 75+ reputed institutes across India. We help students secure admission in top colleges for medical, engineering, and management courses through merit-based, management quota, and NRI quota options. Our strong network ensures you get access to the best possible colleges based on your profile, budget, and preferences.",
  //     image: "/assets/ap3.svg",
  //   },{
  //     question: "Do you assist with education loans or financial guidance?",
  //     answer:
  //       "Absolutely. We understand that financing education is a major concern for students and parents. Our team provides guidance on: Education loan options through leading banks and NBFCs Fee structure planning and budget alignment Scholarship opportunities (where available)We aim to make quality education accessible by helping you plan your finances smartly and confidently.",
  //     image: "/assets/ap3.svg",
  //   },
  // ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="relative bg-white rounded-2xl shadow-lg p-6">
          
          <span className="shadow-xl text-white absolute top-4 left-4 z-10 px-4 py-1 text-sm font-semibold backdrop-blur rounded-full bg-[rgb(0,39,65)]">
  Question {current + 1}
</span>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full shrink-0">
                  <h4 className="text-[32px] font-semibold mb-4 mt-9">
                    {slide.question}
                  </h4>

                  <img
                    src={slide.image}
                    alt="instruction"
                    className="w-full rounded-xl object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1 bg-black/60 hover:bg-black text-white p-3 rounded-full transition"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1 bg-black/60 hover:bg-black text-white p-3 rounded-full transition"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div key={current} className="transition-all duration-500">
          <h2 className="text-[32px] font-semibold text-[#2F327D] mb-4"> {slides[current].question} </h2>

         <div className="text-[#696984] text-[15px] md:text-[17px] mb-6 leading-relaxed">
            {slides[current].answer.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p key={index} className="mb-2">
                    {block.content}
                  </p>
                );
              }

              if (block.type === "points") {
                return (
                  <ul key={index} className="list-disc pl-5 mb-2">
                    {block.content.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </div>

          <Link to="/contact-us">
            <button className="px-6 py-3 bg-[#C30D22] text-white rounded-full font-semibold hover:bg-[#a80b1d] transition">
              Book Your FREE Consultation Today
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Instruction;