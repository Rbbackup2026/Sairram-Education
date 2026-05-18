import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { Link } from 'react-router'

const policyData = [
  {
    title: "Introduction",
    content: "Sairam Education & Consultancy Services (“Sairam Education”, “we”, “our”, or “us”) is committed to protecting the privacy and personal data of students, parents, and website users. This Privacy Policy explains how we collect, use, store, and protect your information when you interact with our website www.sairameducation.in and our services. This policy is designed in accordance with applicable Indian laws, including the Digital Personal Data Protection Act, 2023 (DPDP Act) and relevant provisions of the Information Technology Act, 2000. By using our website or services, you consent to the practices described in this Privacy Policy.",
  },
  {
    title: "Information We Collect",
    content: "We may collect the following types of personal and non-personal information:",
    subSections: [
      {
        subTitle: "Personal Information",
        points: [
          "Name",
          "Phone number",
          "Email address",
          "Academic details",
          "Location details",
        ],
      },
      {
        subTitle: "Technical Information",
        points: [
          "IP address",
          "Browser and device information",
          "Pages visited",
        ],
      },
    ],
  },
  {
    title: "How We Collect Information",
    points: [
      "Website forms",
      "Phone calls & WhatsApp",
      "Email interactions",
      "Cookies and analytics tools",
    ],
  },
  {
    title: "Purpose of Data Collection",
    points: [
      "Providing counseling and admission guidance",
      "Responding to queries",
      "Improving website performance",
    ],
  },

  // ✅ NEW SECTIONS ADDED

  {
    title: "Data Sharing and Disclosure",
    content:
      "We do not sell or rent your personal data. However, your information may be shared in the following cases:",
    points: [
      "With educational institutions for admission-related processes (only with consent)",
      "With third-party service providers (e.g., CRM tools, email/SMS providers)",
      "With government or regulatory authorities if required by law",
      "To comply with legal obligations or enforce our policies",
    ],
    extra:
      "All third parties are expected to maintain confidentiality and use data only for specified purposes.",
  },
  {
    title: "Data Security",
    content:
      "We implement reasonable security practices to protect your data, including:",
    points: [
      "Secure servers and hosting environments",
      "SSL encryption for website communication",
      "Restricted access to personal data",
      "Regular monitoring and updates of security practices",
    ],
    extra:
      "While we take all reasonable precautions, no system can guarantee absolute security.",
  },
  {
    title: "Data Retention",
    content:
      "We retain personal data only for as long as necessary to:",
    points: [
      "Fulfill the purposes outlined in this policy",
      "Comply with legal, regulatory, or operational requirements",
    ],
    extra:
      "Admission and counselling records may be retained for a reasonable period unless deletion is requested.",
  },
  {
    title: "User Rights",
    content:
      "In accordance with applicable data protection laws, users have the right to:",
    points: [
      "Access their personal data",
      "Request correction of inaccurate information",
      "Request deletion of their data (subject to legal obligations)",
      "Withdraw consent for data usage",
    ],
    extra:
      "To exercise these rights, users may contact us using the details provided below.",
  },
  {
    title: "Cookies and Tracking Technologies",
    content:
      "Our website uses cookies and similar technologies to:",
    points: [
      "Enhance user experience",
      "Analyze website traffic and behavior",
      "Improve functionality and performance",
    ],
    extra:
      "To exercise these rights, users may contact us using the details provided below.",
  },
  {
  title: "Third-Party Links",
  content:
    "Our website may contain links to external websites. We are not responsible for the privacy practices or content of such third-party websites. Users are advised to review their respective privacy policies.",
},
{
  title: "International Data Protection (If Applicable)",
  content:
    "If users access our website from outside India, their data may be processed in India. We aim to follow globally accepted data protection practices, including principles aligned with regulations such as the General Data Protection Regulation (GDPR), where applicable.",
},
{
  title: "Grievance Officer",
  content:
    "In accordance with Indian data protection regulations, the contact details of the Grievance Officer are as follows:",
  subSections: [
    {
      subTitle: "",
      points: [
        "Name: [To Be Updated]",
        "Email: contact@sairameducation.in",
        "Phone: +91 9146056767",
      ],
    },
  ],
  extra:
    "Users may contact the Grievance Officer for any concerns regarding data privacy, misuse, or grievances.",
},
{
  title: "Policy Updates",
  content:
    "Sairam Education reserves the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date. Users are encouraged to review this policy periodically.",
},
{
  title: "Contact Us",
  content:
    "For any questions or concerns regarding this Privacy Policy, you may contact us:",
  subSections: [
    {
      subTitle: "",
      points: [
        "Sairam Education & Consultancy Services",
        "Office No. 1013, Nandan Probiz, Sai Chowk Rd,",
        "Laxman Nagar, Balewadi, Pune 411045, Maharashtra, India",
        "Phone: +91 9146056767 / +91 8400092005 / +91 7741004777",
        "Email: contact@sairameducation.in",
      ],
    },
  ],
},
{
  title: "Disclaimer",
  content:
    "This Privacy Policy is intended for general informational purposes and reflects current data protection practices. It is recommended to have this policy reviewed by a qualified legal professional to ensure full compliance with applicable laws and regulations.",
}
];
function Privacypolicy() {
  return (
    <div>
      <Nav/>
      <header className="w-full bg-[#49BBBD] pb-16 rouuded-xl md:rounded-b-[43%] shadow-xl">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      
              <div className="font-poppins">
                <h1 className="text-[32px] md:text-[52px] font-semibold text-[#FFFFFF] leading-tight mt-[60px] md:mt-0">
                 Privacy Policy
                </h1>
                <h4 className='mt-4 text-[25px] font-medium text-[#FFFFFF]'>Effective Date: 20th April, 2026</h4>
      
      <Link to="/contact-us">
               <button className="mt-6 bg-white/30 text-white px-8 py-3 rounded-full text-[18px] backdrop-blur-md transition">
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
           <div className="max-w-5xl mx-auto px-6 py-10">
      {policyData.map((section, index) => (
        <div key={index} className="mb-8">
          
          <h2 className="text-[32px] font-semibold text-[#2F327D] mb-2 flex items-center">
            <span className="w-3 h-3 bg-pink-400 rounded-full mr-2"></span>
            {section.title}
          </h2>

          {section.content && (
            <p className="text-[#696984] text-[18px] mb-3">{section.content}</p>
          )}

          {/* Points */}
          {section.points && (
            <ul className="list-disc pl-6 text-[#696984] text-[18px] space-y-1">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}

          {section.subSections &&
            section.subSections.map((sub, i) => (
              <div key={i} className="mt-3">
                <h3 className="font-semibold text-[#2F327D] text-[25px]">
                  {sub.subTitle}
                </h3>
                <ul className="list-disc pl-6 text-[#696984] text-[18px] pace-y-1">
                  {sub.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      ))}
    </div>
      <Footer/>
    </div>
  )
}

export default Privacypolicy
