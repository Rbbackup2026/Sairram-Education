import React from "react";
import { Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Testinomials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      image: "/assets/ct.svg",
      text: "Clear guidance helped me choose the right college confidently.",
      rating: 5,
    },
    {
      name: "Anjali Verma",
      image: "/assets/ts1.jpg",
      text: "The admission process felt simple and well organized.",
      rating: 4,
    },
    {
      name: "Saurabh Patil",
      image: "/assets/ts2.jpg",
      text: "Professional counseling and honest advice throughout.",
      rating: 5,
    },
    {
      name: "Priya Mehta",
      image: "/assets/pr.jpeg",
      text: "Supportive team that made every step stress-free and clear.",
      rating: 5,
    },
    {
      name: "Amit Kulkarni",
      image: "/assets/mn.jpeg",
      text: "Got the right direction at the right time for my career.",
      rating: 4,
    },{
      name: "Neha Singh",
      image: "/assets/ne.jpeg",
      text: "Smooth experience with transparent and reliable guidance throughout.",
      rating: 5,
    },
  ];

  return (
    <section className="w-full py-12 px-6 bg-[#EEF4FF]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-[32px] text-[#002741] font-semibold text-center mb-10">
          Reviews
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}

          breakpoints={{
            0: { slidesPerView: 1 },     
            640: { slidesPerView: 2 },  
            1024: { slidesPerView: 3 },  
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-2xl border border-2 border-black flex flex-col h-full">

                <div className="flex items-center mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <h4 className="ml-3 font-medium text-[#2E2F35] text-[15px]">
                    {item.name}
                  </h4>
                </div>

                <p className="text-[#58595D] text-[16px] font-medium mb-6">
                  {item.text}
                </p>

                <div className="mt-auto flex justify-end">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400 ml-1"
                    />
                  ))}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default Testinomials;