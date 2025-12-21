"use client";

import { FaViber } from "react-icons/fa";

export default function ViberButton() {
  const handleViberClick = () => {
    const viberUrl = "viber://chat?number=995551333358";
    const fallbackUrl = "https://www.viber.com/download/";

    // ვცდილობთ ვაიბერის ბმულის გახსნას ახალ ტაბში
    const newWindow = window.open(viberUrl, "_blank");

    // fallback იმ შემთხვევაში, თუ აპი არ გაეშვა
    setTimeout(() => {
      if (!document.hidden && newWindow) {
        newWindow.location.href = fallbackUrl;
      }
    }, 1200);
  };

  return (
    <button
      onClick={handleViberClick}
      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer"
    >
      <FaViber size={24} />
      <span>Viber</span>
    </button>
  );
}
