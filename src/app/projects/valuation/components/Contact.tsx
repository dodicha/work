"use client";

import React, { useState } from "react";
import { FaViber, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

export function ViberButton() {
  const handleViberClick = () => {
    const viberUrl = "viber://chat?number=995571330455";
    const fallbackUrl = "https://www.viber.com/download/";

    window.location.href = viberUrl;

    setTimeout(() => {
      if (!document.hidden) {
        window.location.href = fallbackUrl;
      }
    }, 1000);
  };

  return (
    <a
      target="_blank"
      onClick={handleViberClick}
      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer"
    >
      <FaViber size={24} />
      <span>Viber</span>
    </a>
  );
}

export function WhatsappButton() {
  const whatsappLink = "https://wa.me/995571330455";

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

export function EmailForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ymuhf62", // შენი Gmail Service ID
        "template_n3o8xsv", // შენი Template ID
        e.target as HTMLFormElement, // <form> ელემენტი
        "Z2EGJ4GW71TqykWjw" // შენი Public Key
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
        },
        (error) => {
          console.error("Error sending email:", error);
          setLoading(false);
        }
      );
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        გაუგზავნე ექსპერტს შეტყობინება
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="სახელი"
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded-lg"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="ელფოსტა"
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded-lg"
          required
        />

        <textarea
          name="message"
          placeholder="შეტყობინება..."
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded-lg h-32"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full"
        >
          {loading ? "იგზავნება..." : "გაგზავნა"}
        </button>
      </form>

      {sent && (
        <p className="text-green-600 text-center mt-3">
          ✅ შეტყობინება წარმატებით გაიგზავნა!
        </p>
      )}
    </div>
  );
}
