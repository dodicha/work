"use client";

import { FaViber, FaWhatsapp } from "react-icons/fa";

export default function ContactButtons() {
  //   const viberLink = "viber://chat?number=%2B995571330455"; არ მუშაობს
  const whatsappLink = "https://wa.me/995571330455";

  const handleViberClick = () => {
    const viberUrl = "viber://chat?number=995571330455";
    const fallbackUrl = "https://www.viber.com/download/";

    window.location.href = viberUrl;

    // გასარკვევია როგორ ვქნათ ისე რომ თუ მომხმარებელს აპლიკაცია აქ აქვს დაინსტალირებული, მხოლოდ ამ შემთხვევაში გადაიყვანოს გადმოსაწერ ბმულზე

    // setTimeout(() => {
    //   if (!document.hidden) {
    //     window.location.href = fallbackUrl;
    //   }
    // }, 1000);
  };

  return (
    <div className="flex gap-4 items-center">
      <a
        target="_blank"
        onClick={handleViberClick}
        className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-2xl shadow-lg transition-all duration-300"
      >
        <FaViber size={24} />
        <span>Viber</span>
      </a>

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
