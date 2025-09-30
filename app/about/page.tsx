import Link from "next/link";

export default function AboutPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-r from-[#f5f3edff] to-[#ee7ba4ff] relative"
    >
      {/* Tombol Home */}
      <Link
        href="/"
        className="absolute top-4 right-4 px-4 py-2 bg-pink-500 text-white font-bold rounded-lg shadow-md hover:bg-pink-400 transition"
      >
        Home
      </Link>

      <section
        className="flex items-center gap-8 max-w-3xl bg-white/90 p-8 rounded-2xl shadow-lg"
      >
        {/* Foto */}
        <img
          src="/voto.jpg"
          alt="Feriska"
          className="w-56 h-72 rounded-[50%/40%] object-cover border-[3px] border-pink-300 shadow-md"
        />

        {/* Biodata */}
        <div>
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            Biodata Singkatku
          </h1>
          <p className="text-lg mb-2">
            <strong>Nama:</strong> Feriska Agustina Fitria
          </p>
          <p className="text-lg mb-2">
            <strong>Sekolah:</strong> SMK Negeri 8 Malang
          </p>
          <p className="text-lg mb-2">
            <strong>Jurusan:</strong> Rekayasa Perangkat Lunak (RPL)
          </p>
          <p className="text-gray-600 mt-4">
            "hai selamat datang, tidak ada banyak yang bisa kalian lihat disini :)"
          </p>
        </div>
      </section>
    </main>
  );
}
