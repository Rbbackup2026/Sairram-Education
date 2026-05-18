import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

function Cr2() {
  return (
    <>
    <section className="py-20 bg-[#EEF4FF]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">  
        <div className="md:w-1/2 relative">
          <img
            src="/assets/bb.png" 
            alt="Illustration"
            className="w-full rounded-xl shadow-lg"
          />
          <img className="absolute -bottom-10 -right-2  md:-right-8 h-[200px] rounded-lg lg:h-[300px] mr-2" src="/assets/bb1.png" alt="" />
        </div>
        <div className="w-full md:w-1/2">     
          <h2 className="text-[32px] font-bold text-[#2F327D] mb-6">
            BTech/BE
          </h2>

         
          <ul className="space-y-4">
            {[
              "CSE",
              "IT",
              "ECE",
              "EEE",
              "ME",
              "AI/ML",
              "Data Science & Engineering",
              "Other",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                
              <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
 <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
   <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
    <ChevronRight size={12} />
  </span>
</span>
</span>              
                <span className="text-[#424040] text-[18px] md:text-[25px] font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <Link to="/engineering">
           <button className="mt-8 text-[18px] p-3 px-8 bg-[#C30D22] rounded-full  text-[18px] font-semibold text-[#FFFFFF]">Know More</button>
           </Link>
        </div>

      </div>
      <div className="max-w-7xl mt-[80px] mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
        <div className="md:w-1/2">     
          <h2 className="text-[32px] font-bold text-[#2F327D] mb-6">
            Business/ Management
          </h2>

         
          <ul className="space-y-4">
            {[
              "BBA",
              "BMS",
              "B.Com",
              "BFM",
              "BCA",
              "Other",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                
              <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
 <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
   <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
    <ChevronRight size={12} />
  </span>
</span>
</span>


               
                <span className="text-[#424040] text-[18px] md:text-[25px] font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <Link to="/management">
           <button className="mt-8 text-[18px] p-3 px-8 bg-[#C30D22] rounded-full  text-[18px] font-semibold text-[#FFFFFF]">Know More</button>
           </Link>
        </div>
        <div className="md:w-1/2 relative">
          <img
            src="/assets/bm.png" 
            alt="Illustration"
            className="w-full rounded-xl shadow-lg"
          />
          <img className="absolute -bottom-10 -right-2  md:-right-8 h-[200px] rounded-lg lg:h-[300px] mr-2" src="/assets/bm1.png" alt="" />
        </div>
      </div>
       <div className="max-w-7xl mt-[70px] mx-auto px-6 flex flex-col md:flex-row items-center gap-20">

        
        <div className="md:w-1/2 relative">
          <img
            src="/assets/mm.png" 
            alt="Illustration"
            className="w-full rounded-xl shadow-lg"
          />
          <img className="absolute -bottom-10 -right-2  md:-right-8 h-[200px] lg:h-[300px] mr-2 rounded-lg" src="/assets/mm1.png" alt="" />
        </div>
        <div className="w-full md:w-1/2">     
          <h2 className="text-[32px] font-bold text-[#2F327D] mb-6">
            Medical
          </h2>

         
          <ul className="space-y-4">
            {[
              "MBBS",
              "BHMS",
              "BAMS",
              "BDS",
              "B.Pharm",
              "BPT",
              "B.Sc Nursing",
              "Other",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                
              <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
 <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
   <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
    <ChevronRight size={12} />
  </span>
</span>
</span>


               
                <span className="text-[#424040] text-[18px] md:text-[25px] font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <Link to="/medical">
           <button className="mt-8 text-[18px] p-3 px-8 bg-[#C30D22] rounded-full  text-[18px] font-semibold text-[#FFFFFF]">Know More</button>
           </Link>
        </div>

      </div>
       
    </section>
    <div className="mb-12">
      <h2 className="text-[32px] font-bold text-[#002741] text-center mt-10 -mb-10">Post Graduate Courses</h2>
    <div className="max-w-5xl mt-[80px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">     
          <h2 className="text-[32px] font-bold text-[#2F327D] mb-6">
            Engineering
          </h2>
          <button className="bg-[#002741] mb-4 -mt-4 px-4 py-0 text-[#FFFFFF] text-[25px] font-medium">M.tech</button>

         
          <ul className="space-y-4">
            {[
              "Computer Science(AI/ML, Cybersecurity)",
              "Mechanical(Robotics, Manufacturing)",
              "Civil(Structural, Transportation)",
              "Electrical(Power Systems, Electronics)",
              "Other",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 font-medium text-[#424040]">
                
              <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
 <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
   <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
    <ChevronRight size={12} />
  </span>
</span>
</span>


               
                <span className="text-[#424040] text-[18px] md:text-[25px] font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <Link to="/contact-us">
           <button className="mt-8 text-[18px] p-3 px-8 bg-[#C30D22] rounded-full  text-[18px] font-semibold text-[#FFFFFF]">Know More</button>
           </Link>
        </div>
        <div className="md:w-1/2 relative">
          <img
            src="/assets/pg.png" 
            alt="Illustration"
            className="w-full rounded-xl shadow-lg"
          />
          <img className="absolute -bottom-10 -right-2 md:-right-8 rounded-lg h-[200px] lg:h-[300px] mr-2" src="/assets/pg1.png" alt="" />
        </div>
      </div>
      </div>
        <div className="mb-12">
    <div className="max-w-5xl mt-[80px] mx-auto  flex flex-col md:flex-row items-center gap-[50px]">
       <div className="md:w-1/2 relative">
          <img
            src="/assets/pm.png" 
            alt="Illustration"
            className="w-full rounded-xl shadow-lg"
          />
          <img className="absolute -bottom-10 -right-2 md:-right-8 rounded-lg h-[200px] lg:h-[300px] mr-2" src="/assets/pm1.png" alt="" />
        </div>
        <div className="w-full md:w-1/2 px-6">     
         
          <button className="bg-[#002741] mb-4 -mt-4 px-4  text-[#FFFFFF] text-[25px] font-medium">Me</button>

         
          <ul className="space-y-4">
            {[
              "Computer Science(AI/ML, Cybersecurity)",
              "Mechanical(Robotics, Manufacturing)",
              "Civil(Structural, Transportation)",
              "Electrical(Power Systems, Electronics)",
              "Other",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 font-medium text-[#424040]">
                
              <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
 <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
   <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
    <ChevronRight size={12} />
  </span>
</span>
</span>


               
                <span className="text-[18px] md:text-[25px] font-medium text-[#424040]">{item}</span>
              </li>
            ))}
          </ul>
           <button className="mt-8 text-[18px] p-3 px-8 bg-[#C30D22] rounded-full  text-[18px] font-semibold text-[#FFFFFF]">Know More</button>
        </div>
      </div>
      </div>
 
        <div className="mb-12">
     
    <div className="max-w-5xl mt-[80px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">     
          
          <button className="bg-[#002741] mb-4 -mt-4 px-4 py-0 text-[#FFFFFF] text-[25px] font-medium">Ms</button>

         
          <ul className="space-y-4">
            {[
              "Computer Science(AI/ML, Cybersecurity)",
              "Mechanical(Robotics, Manufacturing)",
              "Civil(Structural, Transportation)",
              "Electrical(Power Systems, Electronics)",
              "Other",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 font-medium text-[#424040]">
                
              <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
 <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
   <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
    <ChevronRight size={12} />
  </span>
</span>
</span>  
                <span className="text-[#424040] text-[18px] md:text-[25px] font-medium">{item}</span>
              </li>
            ))}
          </ul>
           <button className="mt-8 text-[18px] p-3 px-8 bg-[#C30D22] rounded-full  text-[18px] font-semibold text-[#FFFFFF]">Know More</button>
        </div>
        <div className="md:w-1/2 relative">
          <img
            src="/assets/ms.png" 
            alt="Illustration"
            className="w-full rounded-xl shadow-lg"
          />
          <img className="absolute -bottom-10 -right-2 md:-right-8 rounded-lg h-[200px] lg:h-[300px] mr-2" src="/assets/ms1.png" alt="" />
        </div>
      </div>
      </div>
     
       <div className="mb-12">
     
    <div className="max-w-5xl mt-[80px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">   <h2 className="text-[32px] font-bold text-[#2F327D] mb-6">
           Management
          </h2>  
                   
          <ul className="space-y-4">
            {[
              "MBA/PGDM",
              "MMS",
              "Executive MBA/PGDM",
              "MHM",
              "MSc in Mgt.",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 font-medium text-[#424040]">
                
              <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
 <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
   <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
    <ChevronRight size={12} />
  </span>
</span>
</span>  
                <span className="text-[#424040] text-[18px] md:text-[25px] font-medium">{item}</span>
              </li>
            ))}
          </ul>
           <button className="mt-8 text-[18px] p-3 px-8 bg-[#C30D22] rounded-full  text-[18px] font-semibold text-[#FFFFFF]">Know More</button>
        </div>
        <div className="md:w-1/2 relative">
          <img
            src="/assets/mt.png" 
            alt="Illustration"
            className="w-full rounded-xl shadow-lg"
          />
          <img className="absolute -bottom-10 -right-2 md:-right-8 rounded-lg h-[200px] lg:h-[300px] mr-2" src="/assets/mt1.png" alt="" />
        </div>
      </div>
      </div>
     
       <div className="mb-12">
     
    <div className="max-w-5xl mt-[80px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
       <div className="w-full md:w-1/2 relative">
          <img
            src="/assets/mm.png" 
            alt="Illustration"
            className="w-full rounded-xl shadow-lg"
          />
          <img className="absolute -bottom-10 -right-2 md:-right-8 rounded-lg h-[200px] lg:h-[300px] mr-2" src="/assets/mm1.png" alt="" />
        </div>
        <div className="w-full md:w-1/2">   <h2 className="text-[32px] font-bold text-[#2F327D] mb-6">
           Medical
          </h2>  
                   
          <ul className="space-y-4">
            {[
              "MD",
              "MMS",
              "DM",
              "MCH",
              "PhD",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 font-medium text-[#424040]">
                
              <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
 <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
   <span className="flex items-center justify-center w-6 h-6 bg-[#49BBBD] text-white rounded-full">
    <ChevronRight size={12} />
  </span>
</span>
</span>  
                <span className="text-[#424040] text-[18px] md:text-[25px] font-medium">{item}</span>
              </li>
            ))}
          </ul>
           <button className="mt-8 text-[18px] p-3 px-8 bg-[#C30D22] rounded-full  text-[18px] font-semibold text-[#FFFFFF]">Know More</button>
        </div>
       
      </div>
      </div>
      </>
  );
}

export default Cr2;
