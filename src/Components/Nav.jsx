import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function Nav() {

  const [open, setOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [collegeOpen, setCollegeOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mbbsOpen, setMbbsOpen] = useState(false);
  const [btechOpen, setBtechOpen] = useState(false);

  return (
    <>
      <nav className="w-full px-6 py-4 flex items-center justify-between bg-[#49BBBD] relative z-50">

        <div className="flex items-center">
          <Link to="/">
          <img
            src="/assets/navlogo.svg"
            alt="Logo"
            className="bg-white h-[110px] w-[180px] rounded-br-[50%]"
          />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-9">

          <Link to="/" className="text-white text-[18px]">Home</Link>
          <Link to="/about" className="text-white text-[18px]">About us</Link>
          <Link to="/service" className="text-white text-[18px]">Services</Link>
          <Link to="/admission" className="text-white text-[18px]">Admission</Link>

          <div className="relative group">

            <div className="flex items-center gap-1 cursor-pointer">
              <Link to="/course" className="text-white text-[18px]">
                Courses
              </Link>

              <ChevronDown
                size={18}
                className="text-white transition-transform duration-300 group-hover:rotate-180"
              />
            </div>

            <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">

              <Link to="/engineering" className="block px-4 py-2 text-[15px] text-gray-700 hover:bg-gray-100">
                Engineering
              </Link>

              <Link to="/medical" className="block px-4 py-2 text-[15px] text-gray-700 hover:bg-gray-100">
                Medical
              </Link>

              <Link to="/management" className="block px-4 py-2 text-[15px] text-gray-700 hover:bg-gray-100">
                Management
              </Link>
              <Link to="/Humanities" className="block px-4 py-2 text-[15px] text-gray-700 hover:bg-gray-100">
                Humanities
              </Link>
              <Link to="/Law" className="block px-4 py-2 text-[15px] text-gray-700 hover:bg-gray-100">
                Law
              </Link>

            </div>
          </div>

          <div className="relative group">
  <div className="flex items-center gap-1 cursor-pointer">
    <Link
      to="/course"
      className="text-white text-[18px] "
    >
      Colleges
    </Link>

    <ChevronDown
      size={18}
      className="text-white transition-transform duration-300 group-hover:rotate-180"
    />
  </div>
  
  <div className="absolute left-0 mt-4 w-[320px] bg-white rounded-xl shadow-2xl border border-gray-200
                  opacity-0 invisible translate-y-2
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                  transition-all duration-300 z-50">

    <div className="py-3">

      {/* <Link
        to="/bams-colleges-in-maharashtra"
        className="block px-5 py-3 text-[15px] text-gray-700 hover:bg-gray-100"
      >
        BAMS BHMS BUMS Colleges of Maharashtra
      </Link> */}

      <Link
        to="/bpt-colleges-in-maharashtra"
        className="block px-5 py-3 text-[15px] text-gray-700 hover:bg-gray-100"
      >
        BPT Colleges in Maharashtra
      </Link>

      <Link
        to="/bds-colleges-in-maharashtra"
        className="block px-5 py-3 text-[15px] text-gray-700 hover:bg-gray-100"
      >
        BDS Colleges in Maharashtra
      </Link>

      <Link
        to="/nursing-college-in-maharastra"
        className="block px-5 py-3 text-[15px] text-gray-700 hover:bg-gray-100"
      >
        Nursing Colleges in Maharashtra
      </Link>

      <Link
        to="/engineering-colleges-in-maharashtra"
        className="block px-5 py-3 text-[15px] text-gray-700 hover:bg-gray-100"
      >
        Engineering Colleges in Maharashtra
      </Link>

      <Link
        to="/bams-colleges-in-maharashtra"
        className="block px-5 py-3 text-[15px] text-gray-700 hover:bg-gray-100"
      >
        BAMS Colleges in Maharashtra
      </Link>

    </div>
  </div>
</div>

<div className="relative group">

  {/* Parent */}
  <div className="flex items-center gap-2 cursor-pointer select-none">
    
    <Link
      to="/contact"
      className="text-white text-[18px]"
    >
      MBBS 2026
    </Link>

    <ChevronDown
      size={18}
      className="text-white transition-transform duration-300 group-hover:rotate-180"
    />
  </div>

  {/* Dropdown */}
  <div className="absolute top-10 left-0 bg-white text-black rounded-md shadow-lg w-[320px] z-50
                  opacity-0 invisible translate-y-2
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                  transition-all duration-300">

  <Link
  to="/book-slot"
  className="block px-5 py-3 text-[15px] text-gray-700 hover:bg-gray-100"
>
  MBBS Admission in Chhattisgarh
</Link>

<Link
  to="/mbbs-karnataka"
  className="block px-5 py-3 text-[15px] text-gray-700 hover:bg-gray-100"
>
  MBBS Admission in Karnataka
</Link>

<Link
  to="/book-slot"
  className="block px-5 py-3 text-[15px] text-gray-700 hover:bg-gray-100"
>
  MBBS Admission in Madhya Pradesh
</Link>

<Link
  to="/career"
  className="block px-5 py-3 text-[15px] text-gray-700 hover:bg-gray-100"
>
  MBBS Admission in Maharashtra
</Link>

<Link
  to="/book-slot"
  className="block px-5 py-3 text-[15px] text-gray-700 hover:bg-gray-100"
>
  MBBS Admission in Rajasthan
</Link>

<Link
  to="/book-slot"
  className="block px-5 py-3 text-[15px] text-gray-700 hover:bg-gray-100"
>
  MBBS Admission in Uttar Pradesh
</Link>
  </div>
</div>
<div className="relative group">

  {/* Parent */}
  <div className="flex items-center gap-2 cursor-pointer select-none">
    
    <Link
      to="/contact"
      className="text-white text-[18px]"
    >
      B-Tech 2026
    </Link>

    <ChevronDown
      size={18}
      className="text-white transition-transform duration-300 group-hover:rotate-180"
    />
  </div>

  {/* Dropdown */}
  <div className="absolute top-10 left-0 bg-white text-black rounded-md shadow-lg w-[320px] z-50
                  opacity-0 invisible translate-y-2
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                  transition-all duration-300">

    <Link
  to="/contact-us"
  className="block px-5 py-3 text-[15px] text-gray-700 hover:bg-gray-100"
>
  Admission in Engineering, Pune
</Link>

<Link
  to="/contact-us"
  className="block px-5 py-3 text-[15px] text-gray-700 hover:bg-gray-100"
>
  Admission in Engineering, Banglore
</Link>

<Link
  to="/contact-us"
  className="block px-5 py-3 text-[15px] text-gray-700 hover:bg-gray-100"
>
  Admission in Engineering, Chhenai
</Link>

<Link
  to="/contact-us"
  className="block px-5 py-3 text-[15px] text-gray-700 hover:bg-gray-100"
>
  Admission in Engineering, Delhi & Noida
</Link>

<Link
  to="/contact-us"
  className="block px-5 py-3 text-[15px] text-gray-700 hover:bg-gray-100"
>
  Admission in Engineering, Mumbai
</Link>

  </div>
</div>
{/* <Link to="/career" className="text-white text-[18px]" >Career</Link>
          <Link to="/contact-us" className="text-white text-[18px]">Book Your Slots</Link>
          <Link to="/contact" className="text-white text-[18px]">Contact Us</Link> */}

           <div className="relative group">

  {/* Parent */}
  <div className="flex items-center gap-2 cursor-pointer select-none">
    
    <Link
      to="/contact"
      className="text-white text-[18px]"
    >
      Contact Us
    </Link>

    <ChevronDown
      size={18}
      className="text-white transition-transform duration-300 group-hover:rotate-180"
    />
  </div>

  {/* Dropdown */}
  <div className="absolute top-10 left-0 bg-white text-black rounded-md shadow-lg w-44 z-50
                  opacity-0 invisible translate-y-2
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                  transition-all duration-300">

   <Link
  to="/contact-us"
  className="block px-5 py-3 text-[15px] text-gray-700 hover:bg-gray-100"
>
  Book Your Slots
</Link>

<Link
  to="/career"
  className="block px-5 py-3 text-[15px] text-gray-700 hover:bg-gray-100"
>
  Career
</Link>

  </div>
</div>

        </div>

        <div className="hidden md:block">
          <Link to="/contact-us">
            <button className="bg-white font-semibold text-[#5B5B5B] px-5 py-2 rounded-full hover:bg-gray-100">
              Career Counseling
            </button>
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>

      </nav>


      {/* Mobile Menu */}
      {/* Mobile Menu */}
<div className={`fixed top-0 left-0 h-full w-[75%] bg-[#49BBBD] transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-50`}>

  <div className="flex justify-between items-center px-6 py-4">
    <img src="/assets/navlogo.svg" className="bg-white p-1 h-[55px]" />
    <button onClick={() => setOpen(false)} className="text-white text-3xl">
      ✕
    </button>
  </div>

  {/* ✅ UPDATED MOBILE UI ONLY */}
  <div className="flex flex-col space-y-5 px-6 mt-6">

    <Link to="/" className="text-white text-[18px]" onClick={() => setOpen(false)}>Home</Link>

    <Link to="/about" className="text-white text-[18px]" onClick={() => setOpen(false)}>About us</Link>

    <Link to="/service" className="text-white text-[18px]" onClick={() => setOpen(false)}>Services</Link>

    <Link to="/admission" className="text-white text-[18px]" onClick={() => setOpen(false)}>Admission</Link>

    {/* COURSES */}
    <div>
      <div
        onClick={() => setCourseOpen(!courseOpen)}
        className="flex justify-between items-center text-white text-[18px] cursor-pointer"
      >
        Courses
        <ChevronDown className={`${courseOpen ? "rotate-180" : ""}`} />
      </div>

      {courseOpen && (
        <div className="pl-4 mt-2 flex flex-col space-y-2">
          <Link to="/engineering" className="text-white text-[18px]" onClick={() => setOpen(false)}>Engineering</Link>
          <Link to="/medical" className="text-white text-[18px]" onClick={() => setOpen(false)}>Medical</Link>
          <Link to="/management" className="text-white text-[18px]" onClick={() => setOpen(false)}>Management</Link>
          <Link to="/Humanities" className="text-white text-[18px]" onClick={() => setOpen(false)}>Humanities</Link>
          <Link to="/Law" className="text-white text-[18px]" onClick={() => setOpen(false)}>Law</Link>
        </div>
      )}
    </div>

    {/* COLLEGES */}
    <div>
      <div
        onClick={() => setCollegeOpen(!collegeOpen)}
        className="flex justify-between items-center text-white text-[18px] cursor-pointer"
      >
        Colleges
        <ChevronDown className={`${collegeOpen ? "rotate-180" : ""}`} />
      </div>

      {collegeOpen && (
        <div className="pl-4 mt-2 flex flex-col space-y-2">

          <Link to="/bpt-colleges-in-maharashtra" className="text-white text-[18px]" onClick={() => setOpen(false)}>
            BPT Colleges
          </Link>

          <Link to="/bds-colleges-in-maharashtra" className="text-white text-[18px]" onClick={() => setOpen(false)}>
            BDS Colleges
          </Link>

          <Link to="/nursing-college-in-maharastra" className="text-white text-[18px]" onClick={() => setOpen(false)}>
            Nursing Colleges
          </Link>

          <Link to="/engineering-colleges-in-maharashtra" className="text-white text-[18px]" onClick={() => setOpen(false)}>
            Engineering Colleges
          </Link>

          <Link to="/bams-colleges-in-maharashtra" className="text-white text-[18px]" onClick={() => setOpen(false)}>
            BAMS Colleges
          </Link>

        </div>
      )}
    </div>
<div>
  <div
    onClick={() => setMbbsOpen(!mbbsOpen)}
    className="flex justify-between items-center text-white text-[18px] cursor-pointer"
  >
    MBBS 2026
    <ChevronDown className={`${mbbsOpen ? "rotate-180" : ""}`} />
  </div>

  {mbbsOpen && (
    <div className="pl-4 mt-2 flex flex-col space-y-2">

      <Link to="/book-slot" className="text-white text-[18px]" onClick={() => setOpen(false)}>
        MBBS Admission in Chhattisgarh
      </Link>

      <Link to="/mbbs-karnataka" className="text-white text-[18px]" onClick={() => setOpen(false)}>
        MBBS Admission in Karnataka
      </Link>

      <Link to="/book-slot" className="text-white text-[18px]" onClick={() => setOpen(false)}>
        MBBS Admission in Madhya Pradesh
      </Link>

      <Link to="/career" className="text-white text-[18px]" onClick={() => setOpen(false)}>
        MBBS Admission in Maharashtra
      </Link>

      <Link to="/book-slot" className="text-white text-[18px]" onClick={() => setOpen(false)}>
        MBBS Admission in Rajasthan
      </Link>

      <Link to="/book-slot" className="text-white text-[18px]" onClick={() => setOpen(false)}>
        MBBS Admission in Uttar Pradesh
      </Link>

    </div>
  )}
</div>

<div>
  <div
    onClick={() => setBtechOpen(!btechOpen)}
    className="flex justify-between items-center text-white text-[18px] cursor-pointer"
  >
    B-Tech 2026
    <ChevronDown className={`${btechOpen ? "rotate-180" : ""}`} />
  </div>

  {btechOpen && (
    <div className="pl-4 mt-2 flex flex-col space-y-2">

      <Link to="/contact-us" className="text-white text-[18px]" onClick={() => setOpen(false)}>
        Admission in Engineering, Pune
      </Link>

      <Link to="/contact-us" className="text-white text-[18px]" onClick={() => setOpen(false)}>
        Admission in Engineering, Bangalore
      </Link>

      <Link to="/contact-us" className="text-white text-[18px]" onClick={() => setOpen(false)}>
        Admission in Engineering, Chennai
      </Link>

      <Link to="/contact-us" className="text-white text-[18px]" onClick={() => setOpen(false)}>
        Admission in Engineering, Delhi & Noida
      </Link>

      <Link to="/contact-us" className="text-white text-[18px]" onClick={() => setOpen(false)}>
        Admission in Engineering, Mumbai
      </Link>

    </div>
  )}
</div>
    {/* CONTACT */}
    <div>
      <div
        onClick={() => setContactOpen(!contactOpen)}
        className="flex justify-between items-center text-white text-[18px] cursor-pointer"
      >
        Contact Us
        <ChevronDown className={`${contactOpen ? "rotate-180" : ""}`} />
      </div>

      {contactOpen && (
        <div className="pl-4 mt-2 flex flex-col space-y-2">

          <Link to="/contact-us" className="text-white text-[18px]" onClick={() => setOpen(false)}>
            Book Your Slots
          </Link>

          <Link to="/career" className="text-white text-[18px]" onClick={() => setOpen(false)}>
            Career
          </Link>

        </div>
      )}
    </div>

    {/* BUTTON */}
    <Link to="/contact-us" onClick={() => setOpen(false)}>
      <button className="mt-6 bg-white text-[#5B5B5B] font-semibold px-5 py-3 rounded-full">
        Career Counseling
      </button>
    </Link>

  </div>
</div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

    </>
  );
}

export default Nav;