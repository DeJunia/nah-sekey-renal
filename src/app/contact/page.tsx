"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-30 pb-24 px-6 md:px-16 lg:px-32 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Contact Us</h1>
        <p className="text-gray-600 mt-4">
          Have questions or need assistance? Reach out to us, and wee will respond as soon as possible.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="grid gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full bg-gray-100 rounded-xl px-4 py-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full bg-gray-100 rounded-xl px-4 py-3"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full bg-gray-100 rounded-xl px-4 py-3"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>

        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Visit or Call Us</h2>
          <p className="text-gray-700 mb-2">
            📍 123 Renal Drive, Accra, Ghana
          </p>
          <p className="text-gray-700 mb-2">
            📞 +233 53 458 2327
          </p>
          <p className="text-gray-700 mb-2">
            📧 info@nahsekeyrenal.com
          </p>
          <p className="text-gray-700 mt-4">
            Our support team is available Monday - Saturday, 8:00 AM - 6:00 PM.
          </p>
        </div>
      </div>
    </div>
  );
}
