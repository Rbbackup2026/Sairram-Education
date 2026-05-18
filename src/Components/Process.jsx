import React from "react";

const steps = [
  {
    img:"/assets/op1.svg",
  },
  {
    img:"/assets/op2.svg",
  },
  {
    img:"/assets/op3.svg",
  },
  {
    img:"/assets/op4.svg",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-[32px] font-bold text-[#2F327D] mb-3">Our Process</h2>
          <p className="text-[20px] text-[#2F327D] font-medium">
            A simple, structured approach to your admission journey
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-y-12 gap-x-6 mb-4">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <img src={step.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}