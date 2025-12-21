"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const whatsappLink = "https://wa.me/995551333358";

  return (
    <div className="flex gap-4 items-center">
      <a
        href={whatsappLink}
        target="_blank"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-2xl shadow-lg transition-all duration-300"
      >
        <FaWhatsapp size={24} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
