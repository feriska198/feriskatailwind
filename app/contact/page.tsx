"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "feriskaagustina@gmail.com",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data:", form);
    alert("Pesan berhasil ditampilkan di console!");
  };

  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center 
      bg-gradient-to-br from-[#f5f3edff] to-[#d8487aff] p-8"
    >
      {/* Tombol Home */}
      <Link
        href="/"
        className="absolute top-4 right-4 bg-pink-500 text-white font-bold px-4 py-2 rounded-lg shadow-md hover:bg-pink-400 transition"
      >
        Home
      </Link>

      <section className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Contact Me
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nama</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md bg-gray-100"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Pesan</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              rows={4}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-semibold py-2 rounded-md hover:bg-pink-400 transition"
          >
            Kirim
          </button>
        </form>

        {/* Sosmed */}
        <div className="mt-6 text-center">
          <p className="font-medium text-gray-700 mb-2">Follow me on:</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/frska.af?igsh=NHNvaXNkNmV2b3A4"
              target="_blank"
              className="text-pink-600 font-semibold hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
