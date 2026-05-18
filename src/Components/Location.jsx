import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

function Location() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      
        <div className="w-full   overflow-hidden shadow-lg">
        <div className="w-full h-[400px]">
  <iframe
    className="w-full h-full rounded-lg"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.8954312567384!2d73.7713557!3d18.5728226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b93591e5ede7%3A0x3d84464787957e8d!2sNANDAN%20PRO%20BIZ!5e1!3m2!1sen!2sin!4v1774869486789!5m2!1sen!2sin"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
        </div>

    
        <div>
          <h2 className="text-[35px]  font-semibold text-[#002741] mb-6">
            Get in Touch
          </h2>

          <div className="flex items-start mb-5">
            <img src="/assets/lc.svg" alt="" />
            <p className="pl-4 text-[16px] md:text-[22px] font-medium text-[#002741]">
              Office number 1013, Nandan Probiz, Sai Chowk
Rd, Laxman Nagar, Balewadi, Pune 411045,
Maharashtra, INDIA
            </p>
          </div>

          
          <div className="flex items-center mb-5">
            <img src="/assets/phon.svg" alt="" />
            <div className="flex flex-wrap">
            <a
              href="tel:+919146056767"
              className="pl-4 text-[16px] md:text-[22px] font-medium text-[#002741]"
            >
              +919146056767
            </a>
            <a
              href="tel:+918400092005"
              className="pl-4 text-[16px] md:text-[22px] font-medium text-[#002741]"
            >
              +918400092005
            </a>
            <a
              href="tel:+917741004777"
              className="pl-4 text-[16px] md:text-[22px] font-medium text-[#002741]"
            >
              +917741004777
            </a>
            </div>
          </div>

          
          <div className="flex items-center">
            <img src="/assets/email.svg" alt="" />
            <a
              href="mailto:contact@sairameducation.in"
              className="pl-4 text-[16px] md:text-[22px] font-medium text-[#002741]"
            >
              contact@sairameducation.in
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Location
