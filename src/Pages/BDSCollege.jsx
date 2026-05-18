import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const collegeData = [
{ sr: "01", name: "D. Y. Patil University School of Dentistry", city: "Navi Mumbai", fee: "INR 7.50 Lacs / USD 15,500" },
{ sr: "02", name: "Dr. D. Y. Patil Dental College & Hospital", city: "Pune", fee: "" },
{ sr: "03", name: "D. Y. Patil Dental College", city: "Kolhapur", fee: "" },
{ sr: "04", name: "Bharati Vidyapeeth Dental College and Hospital", city: "Pune", fee: "" },
{ sr: "05", name: "Bharati Vidyapeeth Dental College and Hospital", city: "Sangli", fee: "INR 4.50 Lacs / USD 20,300" },
{ sr: "06", name: "MGM Dental College and Hospital", city: "NAVI MUMBAI", fee: "" },
{ sr: "07", name: "Krishna Institute of Medical Sciences (KIMS)", city: "Karad", fee: "" },
{ sr: "08", name: "Sharad Pawar Dental College & Hospital – SPDC&H DMIMS (Deemed to be University)", city: "Sawangi (Meghe), Wardha", fee: "" },
{ sr: "09", name: "Rural Dental College of Pravara Institute of Medical Sciences", city: "Loni", fee: "INR 4.50 Lacs / USD 19,000" },
{ sr: "10", name: "MGM Dental College and Hospital", city: "Aurangabad", fee: "" },
]
function BDSCollege() {
  return (
    <div>
      <Helmet>
         <title>
BDS Colleges in Maharashtra | Direct Admission in Dental Colleges
        </title>

        <meta
          name="description"
          content="Explore top BDS colleges in Maharashtra and secure direct admission in dental programs with expert counselling and admission support."
        />

        {/* Optional but Recommended */}
        <meta name="robots" content="index, follow" />
         <link
          rel="canonical"
          href="https://sairameducation.in/course"
        />
      </Helmet>
      <Nav/>
      <header className="w-full bg-[#49BBBD] py-[150px]  md:rounded-b-[43%] shadow-xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        <div className="font-poppins">
          <h1 className="text-[32px] md:text-[52px] font-semibold text-[#FFFFFF] leading-tight mt-[60px] md:mt-0">
           BDS COLLEGES IN MAHARASHTRA
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
     <section className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10 mb-6 mt-8">
        <h2 className="text-[20px] lg:text-[32px] font-bold text-[#002741] mb-4">
          BDS Colleges in Maharashtra
        </h2>

        <p className="text-gray-700 font-Regular text-[16px] md:text-[18px] text-[#696984] tracking-[0.02em]">
          Bachelor of Dental Surgery (BDS) is one of the most sought-after medical courses for students aspiring to build a successful career in dentistry and oral healthcare. Maharashtra is considered one of the top destinations for BDS admission in India due to its reputed dental colleges, advanced clinical infrastructure, and quality academic environment.
        </p>

        <p className="text-gray-700 font-Regular text-[16px] md:text-[18px] text-[#696984] tracking-[0.02em]">
          The state is home to several well-known private, deemed, and university-affiliated dental colleges that provide excellent academic training, practical exposure, modern laboratories, and clinical experience. Cities like Pune, Navi Mumbai, Kolhapur, Sangli, Wardha, Karad, Aurangabad, and Loni have some of the best BDS colleges in Maharashtra, attracting students from across India every year.
        </p>

        <p className="text-gray-700 font-Regular text-[16px] md:text-[18px] text-[#696984] tracking-[0.02em]">
         At Sairam Education & Consultancy Services, we help students explore suitable BDS colleges in Maharashtra based on their NEET score, budget, preferred city, and career goals. Our experienced counselling team provides complete admission guidance and support throughout the admission process.
        </p>
      </section>

      {/* SECTION 2 */}
      <section className="max-w-6xl  mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10">
        <h2 className="text-[20px] lg:text-[32px] font-bold text-[#002741] mb-4">
          List of Bachelor of Dental Surgery (BDS) Colleges in Maharashtra
        </h2>

        <p className="text-gray-700 font-Regular text-[16px] md:text-[18px] text-[#696984] tracking-[0.02em]">
          Below is the list of top BDS colleges in Maharashtra offering quality dental education, clinical training, internship opportunities, and modern infrastructure. These colleges are recognized for their academic excellence and practical exposure in the field of dentistry.
        </p>

        <p className="text-gray-700 font-Regular text-[16px] md:text-[18px] text-[#696984] tracking-[0.02em]">
         Students planning to pursue a career in dental sciences can compare colleges based on location, university affiliation, infrastructure, fees, and clinical exposure before selecting the right college for admission.
        </p>

        <p className="text-gray-700 font-Regular text-[16px] md:text-[18px] text-[#696984] tracking-[0.02em]">
          Start your dental career journey with expert admission counselling and personalized guidance from Sairam Education & Consultancy Services.
        </p>
      </section>
    <section className="py-16  overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="overflow-x-auto bg-white shadow-lg ">
          <table className="w-full text-left">
            
            <thead className="bg-[#002741] font-semibold text-[22px] text-white p-10">
              <tr>
                <th className="px-6 py-6 w-[5%]">SR NO.</th>
                <th className="px-6 py-6 w-[55%]">BDS College’s Name</th>
                <th className="px-6 py-6 w-[10%]">CITY</th>
                {/* <th className="px-6 py-6 w-[30%]">Annual Fee Gen. Fee / NRI Fee INR in Lacs. / USD</th> */}
              </tr>
            </thead>
            <tbody>
  {collegeData.map((college, index) => (
    <tr
      key={index}
      className={`text-[#002741] text-[20px] font-medium
        ${index % 2 === 0 ? "bg-[#D9D9D9]" : "bg-[#F2F2F2]"}
      `}
    >
      <td className="px-6 py-4 border-r border-[#002741]">
        {college.sr}
      </td>
      <td className="px-6 py-4 border-r border-[#002741]">
        {college.name}
      </td>
      <td className="px-6 py-4 border-r border-[#002741]">
        {college.city}
      </td>
      {/* <td className="px-6 py-4">
        {college.fee}
      </td> */}
    </tr>
  ))}
</tbody>
</table>
        </div>

      </div>
    </section>  
      <Footer/>
    </div>
  )
}

export default BDSCollege
