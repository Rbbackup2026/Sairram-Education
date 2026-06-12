import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/+919146056767"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-5
        right-5
        z-50
        bg-green-500
        hover:bg-green-600
        text-white
        w-14
        h-14
        md:w-16
        md:h-16
        rounded-full
        flex
        items-center
        justify-center
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
      "
    >
      <FaWhatsapp className="text-3xl md:text-4xl" />
    </a>
  );
}

export default WhatsappButton;