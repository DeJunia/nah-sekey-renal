"use client";
import { useState } from "react";

export default function AppointmentPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Appointment request submitted!");
    setForm({ name: "", email: "", phone: "", date: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-30 pb-24 px-6 md:px-16 lg:px-32 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Book an Appointment</h1>
        <p className="text-gray-600 mt-4">
          Schedule your visit with Dr. Nah Sekey and take a proactive step toward better kidney health.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid gap-6">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full bg-gray-100 rounded-xl px-4 py-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full bg-gray-100 rounded-xl px-4 py-3"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          value={form.phone}
          onChange={handleChange}
          className="w-full bg-gray-100 rounded-xl px-4 py-3"
        />
        <p className="text-gray-600 ml-5 text-sm">Date</p>
        <input
          type="date"
          name="date"
          required
          value={form.date}
          onChange={handleChange}
          className="w-full bg-gray-100 rounded-xl px-4 py-3"
        />
        <textarea
          name="message"
          placeholder="Additional notes (optional)"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full bg-gray-100 rounded-xl px-4 py-3 max-h-[300px] min-h-[100px]"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Submit Appointment Request
        </button>
      </form>
    </div>
  );
}
