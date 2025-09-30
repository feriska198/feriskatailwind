"use client";

import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Langkah-langkah program flutter",
      description: "klik untuk membuka tugasku!",
      link: "https://www.canva.com/design/DAGyZWU1jBg/C7aTT5QPPnAmS1K2Di1_RQ/view",
    },
    {
      title: "maaf saya belum memiliki project untuk saat ini",
      description: "ayo mulai projectmu!",
    },
    {
      title: "maaf saya belum memiliki project untuk saat ini",
      description: "ayo mulai projectmu!",
    },
  ];

  return (
    <main
      className="relative min-h-screen text-gray-800 p-10 bg-gradient-to-b from-white to-pink-200"
    >
      {/* Tombol Home */}
      <Link
        href="/"
        className="absolute top-4 right-4 bg-pink-400 text-black font-bold px-4 py-2 rounded-lg shadow-md hover:bg-pink-300 transition"
      >
        Home
      </Link>

      {/* Judul */}
      <h1 className="text-4xl font-bold text-center mb-8">Proyek Saya</h1>

      {/* List Project */}
      <div className="max-w-3xl mx-auto space-y-6">
        {projects.map((project, index) =>
          project.link ? (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer"
            >
              <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg text-black hover:scale-105 transition-transform">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </a>
          ) : (
            <div
              key={index}
              className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg text-black"
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          )
        )}
      </div>
    </main>
  );
}
