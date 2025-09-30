import Link from "next/link";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function SkillsPage() {
  const skills = [
    { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500 w-6 h-6" /> },
    { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-500 w-6 h-6" /> },
    { name: "Next.js", level: 70, icon: <FaReact className="text-blue-400 w-6 h-6" /> },
    { name: "JavaScript", level: 85, icon: <FaJs className="text-yellow-400 w-6 h-6" /> },
    { name: "Tailwind CSS", level: 75, icon: <SiTailwindcss className="text-teal-400 w-6 h-6" /> },
  ];

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center py-10 px-4
      bg-gradient-to-br from-pink-300 to-white relative"
    >
      {/* Tombol Home */}
      <Link
        href="/"
        className="absolute top-4 right-4 bg-pink-400 text-black font-bold px-4 py-2 rounded-lg shadow-md hover:bg-pink-300 transition"
      >
        Home
      </Link>

      <h1 className="text-3xl font-bold mb-8">My Skills</h1>

      <div className="w-full max-w-xl space-y-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-4"
          >
            {/* Icon */}
            {skill.icon}

            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
                <div
                  className="h-5 rounded-full bg-pink-400"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
