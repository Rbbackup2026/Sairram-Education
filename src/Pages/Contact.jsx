import React, { useState } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet-async';

function Contact() {

  const [formData, setFormData] = useState({
    fullName: "",
    number: "",
    city: "",
    course: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ""
    });

    setSuccess("");
  };

  const validateForm = () => {

    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    else if (!/^[A-Za-z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = "Only alphabets allowed";
    }

    if (!formData.number.trim()) {
      newErrors.number = "Phone number is required";
    }
    else if (!/^[0-9]{10}$/.test(formData.number)) {
      newErrors.number = "Phone number must be 10 digits";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    else if (!/^[A-Za-z\s]+$/.test(formData.city)) {
      newErrors.city = "City must contain only alphabets";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validateForm()) return;

    try {

      setLoading(true);

      const response = await fetch("https://sairambackend-fzn3.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      setSuccess(data.message);

      setFormData({
        fullName: "",
        number: "",
        city: "",
        course: "",
        message: ""
      });

    } catch (error) {

      console.error(error);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
     <Helmet>
       <title>
Book Free Career Counselling | Admission Experts Pune
        </title>

        <meta
          name="description"
          content="Book your free counselling session with expert admission consultants in Pune. Get guidance for engineering, medical, MBA, and more."
        />

        {/* Optional but Recommended */}
        <meta name="robots" content="index, follow" />
         <link
          rel="canonical"
          href="https://sairameducation.in/course"
        />
     </Helmet>
      <Nav/>

      <section className="bg-[#F3FBFB] py-16">

        <div className="max-w-[1200px] mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-[38px] lg:text-[48px] font-bold text-[#2F327D]">
              Get In Touch
            </h1>

            <p className="mt-6 text-gray-600 text-[17px] leading-relaxed">
              If you have any questions about admissions, colleges, or courses,
              feel free to contact our team.
            </p>
          </div>

          <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100">

            <h2 className="text-[28px] font-bold text-[#2F327D] mb-6">
              Send Us A Message
            </h2>

            {success && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg border border-green-300">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  } focus:border-[#49BBBD] outline-none`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

             
              <div>
                <input
                  type="text"
                  name="number"
                  placeholder="Number"
                  value={formData.number}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.number ? "border-red-500" : "border-gray-300"
                  } focus:border-[#49BBBD] outline-none`}
                />
                {errors.number && (
                  <p className="text-red-500 text-sm mt-1">{errors.number}</p>
                )}
              </div>

              {/* City */}
              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  } focus:border-[#49BBBD] outline-none`}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>

              {/* Course */}
             <div>
  <select
    name="course"
    value={formData.course}
    onChange={handleChange}
    className={`w-full px-4 py-3 rounded-lg border ${
      errors.course ? "border-red-500" : "border-gray-300"
    } ${formData.course === "" ? "text-gray-400" : "text-black"}
    focus:border-[#49BBBD] outline-none bg-white`}
  >
    <option value="" disabled className="text-gray-400">
      Select Course
    </option>
    <option value="Engineering">Engineering</option>
    <option value="Medical">Medical</option>
    <option value="Management">Management</option>
    <option value="Humanities">Humanities</option>
    <option value="Law">Law</option>
    
  </select>

  {errors.course && (
    <p className="text-red-500 text-sm mt-1">{errors.course}</p>
  )}
</div>

              <textarea
                rows="5"
                name="message"
                placeholder="Message (Optional)"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#49BBBD] outline-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#49BBBD] hover:bg-[#38a5a7] text-white font-semibold py-3 rounded-lg shadow-md"
              >
                {loading ? "Sending..." : "Submit Message"}
              </button>

            </form>

          </div>

        </div>

      </section>

      <Footer/>

    </div>
  )
}

export default Contact