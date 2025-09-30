import Link from "next/link";

export default function HomePage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center p-8 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Judul Hai */}
      <h1 className="text-4xl font-bold mb-5">HAI!</h1>

      {/* Foto & Nama */}
      <section className="flex flex-col items-center mb-4">
        <img
          src="/Hello!.jpg"
          alt="Feriska"
          className="w-44 h-56 rounded-full object-cover mb-4 border-4 border-black"
        />
        <h1 className="px-4 py-1 rounded-md ">
          AKU FERISKA AGUSTINA FITRIA
        </h1>
      </section>

      {/* Selamat Datang */}
      <h2 className="text-base mb-2">SELAMAT DATANG DI WEB SEDERHANAKU INI</h2>
      <p className="font-bold mb-8">Web Developer | UI/UX Enthusiast</p>

      {/* Link Navigasi */}
      <section className="flex justify-center gap-8 mt-8 flex-wrap">
        <Link
          href="/about"
          className="rounded-lg px-8 py-4 text-white bg-pink-400 shadow-md hover:bg-pink-500 transition"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="rounded-lg px-8 py-4 text-white bg-pink-400 shadow-md hover:bg-pink-500 transition"
        >
          Project
        </Link>
        <Link
          href="/skills"
          className="rounded-lg px-8 py-4 text-white bg-pink-400 shadow-md hover:bg-pink-500 transition"
        >
          Skills
        </Link>
        <Link
          href="/contact"
          className="rounded-lg px-8 py-4 text-white bg-pink-400 shadow-md hover:bg-pink-500 transition"
        >
          Contact
        </Link>
      </section>

      {/* Vidio */}
      <section className="mt-12 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-4 text-pink-400">
          Vidio & Lagu Favoritku
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-4">
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/PiGt9C76U0s"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
