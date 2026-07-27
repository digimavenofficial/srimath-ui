"use client";

import { WHATSAPP_NUMBER } from "@/constants";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
    const message =
      "Hello! I'm interested in learning more about your projects.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 z-30 flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 active:scale-95 hover:px-8"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="text-xl">💬</span>
      <span className="hidden sm:inline">CHAT WITH US</span>
    </button>
  );
}
