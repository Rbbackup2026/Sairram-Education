import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const collegeData = [
{ sr: "01", name: "*PTT&TC LTM MEDICAL COLLEGE, SION", city: "MUMBAI", code: "6101" },
{ sr: "02", name: "*SETH G S MEDICAL COLLEGE, PAREL", city: "MUMBAI", code: "6102" },
{ sr: "03", name: "*TOPIWALA NATIONAL MEDICAL COLLEGE", city: "MUMBAI", code: "6103" },
{ sr: "04", name: "*PHYSIOTHERAPY SCHOOL & CENTRE GMC", city: "NAGPUR", code: "6208" },
{ sr: "05", name: "*CMF COLLEGE OF PHYSIOTHERAPY NIGADI", city: "PUNE", code: "6104" },
{ sr: "06", name: "*COLLEGE OF PHYSIOTHERAPY, SANCHETI", city: "PUNE", code: "6105" },
{ sr: "07", name: "*K. J. SOMAIYYA COLLEGE OF PHYSIOTHERAPY", city: "MUMBAI", code: "6116" },
{ sr: "08", name: "*MVP's College of Physiotherapy", city: "NASIK", code: "6117" },
{ sr: "09", name: "*Terana Charitable Trust College of Physiotherapy", city: "NAVI MUMBAI", code: "6118" },
{ sr: "10", name: "*MGM College of Physiotherapy", city: "NAVI MUMBAI", code: "6119" },
{ sr: "11", name: "MMERC M A RANGOONWALA (MINORITY) College of Physiotherapy", city: "PUNE", code: "6120" },
// Second
{ sr: "12", name: "K.J. Somaiya College of Physiotherapy, Sion", city: "MUMBAI", code: "6101" },
{ sr: "13", name: "Terna Charitable Trust College of Physiotherapy, Nerul", city: "NAVI MUMBAI", code: "6102" },
{ sr: "14", name: "Mahatma Gandhi Missions College of Physiotherapy, Raigad", city: "NAVI MUMBAI", code: "6103" },
{ sr: "15", name: "Dr. D. Y. Patil College of Physiotherapy", city: "NAVI MUMBAI", code: "6104" },
{ sr: "16", name: "Lokmanya Medical College of Physiotherapy, Kharghar", city: "NAVI MUMBAI", code: "6105" },
{ sr: "17", name: "Dr. G.D. Pol Foundation YMT College of Physiotherapy", city: "NAVI MUMBAI", code: "6106" },
{ sr: "18", name: "The SIA College of Health Sciences, College of Physiotherapy, Thane", city: "MUMBAI", code: "6107" },
{ sr: "19", name: "Deep Paramedical Organisations NETT College of Physiotherapy, Thane", city: "MUMBAI", code: "6108" },
{ sr: "20", name: "Dr. D. Y. Patil College of Physiotherapy", city: "PUNE", code: "6109" },
{ sr: "21", name: "MAEER’s Physiotherapy College, Talegaon Dabhade", city: "PUNE", code: "6110" },
{ sr: "22", name: "Smt. Kashibai Navale College of Physiotherapy, Narhe, Pune", city: "PUNE", code: "6111" },
{ sr: "23", name: "M.A. Rangoonwala College of Physiotherapy", city: "PUNE", code: "6112" },
{ sr: "24", name: "Chaitanya Medical Foundation’s College of Physiotherapy", city: "PUNE", code: "6113" },
{ sr: "25", name: "Progressive Education Society’s Modern College of Physiotherapy", city: "PUNE", code: "6114" },
{ sr: "26", name: "Late Shree Fakirbhai Pansare Education Foundation’s College of Physiotherapy, Nigdi", city: "PUNE", code: "6115" },
{ sr: "27", name: "Deccan Education Society Brijlal Jindal College of Physiotherapy", city: "PUNE", code: "6125" },
{ sr: "28", name: "Sancheti College of Physiotherapy", city: "PUNE", code: "6126" }
];

function BPTCollege() {
  return (
    <div>
      <Helmet>
          <title>
BPT Colleges in Maharashtra | Direct Admission & Guidance
        </title>

        <meta
          name="description"
          content="Find the best physiotherapy colleges in Maharashtra. Get expert help for direct admission in BPT with trusted consultants in Pune."
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
           BPT COLLEGES IN MAHARASHTRA
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
          BPT Colleges in Maharashtra
        </h2>

        <p className="text-gray-700 font-Regular text-[16px] md:text-[18px] text-[#696984] tracking-[0.02em]">
          Bachelor of Physiotherapy (BPT) has become one of the most preferred healthcare
          courses among students looking to build a rewarding career in rehabilitation,
          physiotherapy, sports medicine, and patient care. Maharashtra is considered one
          of the top destinations for BPT admission in India due to its reputed medical
          universities, advanced healthcare infrastructure, and wide range of government
          and private physiotherapy colleges.
        </p>

        <p className="text-gray-700 font-Regular text-[16px] md:text-[18px] text-[#696984] tracking-[0.02em]">
          The state offers excellent academic exposure, clinical training opportunities,
          and internship programs for students pursuing physiotherapy education. Cities
          like Mumbai, Pune, Navi Mumbai, Nagpur, and Nashik are home to some of the best
          BPT colleges in Maharashtra, attracting students from across the country every year.
        </p>

        <p className="text-gray-700 font-Regular text-[16px] md:text-[18px] text-[#696984] tracking-[0.02em]">
          At Sairam Education & Consultancy Services, we help students explore suitable
          BPT colleges in Maharashtra based on their academic profile, budget, preferred
          city, and admission requirements. Our team provides complete admission guidance,
          counselling support, and assistance throughout the admission process.
        </p>
      </section>

      {/* SECTION 2 */}
      <section className="max-w-6xl  mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10">
        <h2 className="text-[20px] lg:text-[32px] font-bold text-[#002741] mb-4">
          List of Bachelor of Physiotherapy (BPT) Colleges in Maharashtra
        </h2>

        <p className="text-gray-700 font-Regular text-[16px] md:text-[18px] text-[#696984] tracking-[0.02em]">
          Below is the list of top BPT colleges in Maharashtra including colleges located
          in Mumbai, Pune, Navi Mumbai, Nagpur, and other major cities. These colleges are
          known for quality education, practical training, experienced faculty, and modern
          physiotherapy facilities.
        </p>

        <p className="text-gray-700 font-Regular text-[16px] md:text-[18px] text-[#696984] tracking-[0.02em]">
          Students seeking admission in Bachelor of Physiotherapy (BPT) courses can compare
          colleges based on location, infrastructure, academic reputation, and career
          opportunities before making their final decision.
        </p>

        <p className="text-gray-700 font-Regular text-[16px] md:text-[18px] text-[#696984] tracking-[0.02em]">
          Start your medical and healthcare career journey with expert admission guidance
          and personalized counselling support from Sairam Education & Consultancy Services.
        </p>
      </section>
     <section className="py-16  overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="overflow-x-auto bg-white shadow-lg ">
          <table className="w-full text-left">
            
            <thead className="bg-[#002741] font-semibold text-[22px] text-white p-10">
              <tr>
                <th className="px-6 py-6 w-[5%]">SR NO.</th>
                <th className="px-6 py-6 w-[55%]">BPT College’s Name</th>
                <th className="px-6 py-6 w-[10%]">CITY</th>
                {/* <th className="px-6 py-6 w-[15%]">CODE
Year (Lacs)</th> */}
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
        {college.code}
      </td> */}
    </tr>
  ))}
</tbody>
          </table>
        </div>

      </div>
    </section>  
     <section className="py-12 px-6 text-[#FFFFFF]">
  <div className="w-full lg:max-w-6xl mx-auto bg-[#49BBBD] rounded-[75px] p-10">

    <h2 className="text-[32px] font-bold">
      Start Your Journey Management With Us
    </h2>
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

      <p className="md:max-w-[70%]  text-[16px] md:text-[20px] font-medium  leading-relaxed">
       Get personalized medical counselling and explore suitable
admission pathways with clarity and confidence.
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

export default BPTCollege
