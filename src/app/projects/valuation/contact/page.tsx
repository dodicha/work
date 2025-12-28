"use client";

import { FaWhatsapp, FaViber } from "react-icons/fa";

export default function ContactPage() {
  const whatsappNumber = "995551333358";
  const viberNumber = "995551333358";

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-xl w-full text-center bg-white shadow-xl rounded-2xl p-10">
        {/* Title */}
        <h1 className="text-3xl font-bold text-slate-900">Contact Us</h1>

        <p className="mt-4 text-slate-600">
          For fast and accurate property valuation, contact us directly.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition"
          >
            <FaWhatsapp size={24} />
            Contact via WhatsApp
          </a>

          {/* Viber */}
          <a
            href={`viber://chat?number=${viberNumber}`}
            className="flex items-center justify-center gap-3 bg-purple-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-purple-700 transition"
          >
            <FaViber size={24} />
            Contact via Viber
          </a>
        </div>

        {/* Trust note */}
        <p className="mt-8 text-sm text-slate-500">
          ✔ We usually respond within minutes during working hours
          <br />✔ Your inquiry is fully confidential
        </p>
      </div>
    </section>
  );
}
