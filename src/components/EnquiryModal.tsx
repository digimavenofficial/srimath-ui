"use client";

import { useState } from "react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const resetForm = () => {
    setName("");
    setMobile("");
    setEmail("");
    setMessage("");
    setStatusMessage(null);
    setError(null);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setStatusMessage(null);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, mobile, email, message }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data?.message || "Failed to send enquiry.");
      }

      setStatusMessage("Your enquiry has been sent successfully.");
      resetForm();
    } catch (sendError) {
      setError(
        sendError instanceof Error
          ? sendError.message
          : "Unable to send enquiry. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl ring-1 ring-black/5">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#F69F11] font-semibold">
              Enquiry Form
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">Send us your details</h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="text-gray-500 transition hover:text-gray-900"
            aria-label="Close enquiry form"
          >
            ✕
          </button>
        </div>

        <form className="space-y-6 px-6 py-6" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-gray-700">Name</span>
              <input
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11] focus:ring-2 focus:ring-[#F69F11]/20"
                placeholder="Your full name"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-gray-700">Mobile Number</span>
              <input
                required
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
                className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11] focus:ring-2 focus:ring-[#F69F11]/20"
                placeholder="+91 98765 43210"
                type="tel"
              />
            </label>
          </div>

          <label className="space-y-2">
            <span className="text-sm font-medium text-gray-700">Email Address</span>
            <input
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11] focus:ring-2 focus:ring-[#F69F11]/20"
              placeholder="you@example.com"
              type="email"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-gray-700">Message</span>
            <textarea
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={5}
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11] focus:ring-2 focus:ring-[#F69F11]/20"
              placeholder="Tell us about your enquiry"
            />
          </label>

          {statusMessage && (
            <div className="rounded-2xl bg-green-50 border border-green-100 px-4 py-3 text-sm text-green-700">
              {statusMessage}
            </div>
          )}

          {error && (
            <div className="rounded-2xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-2xl bg-[#F69F11] px-6 py-3 text-white font-semibold transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit Now"}
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="inline-flex items-center justify-center rounded-2xl border border-gray-300 px-6 py-3 text-gray-700 transition hover:border-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
