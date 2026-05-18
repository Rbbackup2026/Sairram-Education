import React from "react";
import { Link } from "react-router-dom";

const blogData = [
  {
    id: 1,
    img: "/assets/oa1.png",
    title: "Planning & Strategy",
    desc: "Every project starts with detailed planning and strategy to ensure we meet deadlines and achieve the best results.",
  },
  {
    id: 2,
    img: "/assets/oa2.png",
    title: "Execution & Delivery",
    desc: "Our team executes projects efficiently while maintaining high standards of quality and attention to detail.",
  },
  {
    id: 3,
    img: "/assets/oa3.png",
    title: "Review & Improvement",
    desc: "We continuously review and improve our processes to provide better results and client satisfaction.",
  },
  {
    id: 4,
    img: "/assets/oa4.png",
    title: "Final Stage",
    desc: "We finalize every project ensuring excellence and client satisfaction.",
  },
];

function Approach() {
  return (
    <section className="py-16  bg-[#EEF4FF] ">
      
     
      <h2 className="text-[32px] -mt-6 md:mt-0 font-bold text-center text-[#002741] mb-4">
        Our Approach
      </h2>
      <p className="text-[#2F327D] text-[20px] font-medium text-center max-w-3xl mx-auto mb-4">
        We follow a systematic approach to ensure every project is executed 
        with precision, quality, and efficiency.
      </p>
      <div className="flex flex-wrap justify-center max-w-7xl mx-auto">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="w-full sm:w-1/2 md:w-[23%] rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-[203px] mb-4 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.desc}</p>
              <hr className="border-gray-300" />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full">
        <Link to="/contact-us">
   <button className="block mx-auto p-3 px-6 bg-[#C30D22] font-semibold text-[18px] text-[#FFFFFF] rounded-full">Book Your FREE Consultation Today</button>
   </Link>
   </div>
    </section>
  );
}

export default Approach;
