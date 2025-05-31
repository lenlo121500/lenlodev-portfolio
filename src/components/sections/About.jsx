import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = [
    "React",
    "Next.JS",
    "TailwindCSS",
    "TypeScript",
    "HTML",
  ];

  const backendSkills = [
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "PostgreSQL",
    "JWT",
    "JavaScript",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all">
            <p className="text-zinc-100 mb-6">
              I’m a passionate and driven developer with a strong foundation in
              building scalable web applications and developing thoughtful,
              innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-zinc-100 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-zinc-100 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 👨‍🎓 Education</h3>
                <ul className="list-disc list-inside text-zinc-100 space-y-2">
                  <li>
                    <strong>B.S in Computer Science</strong> - ICCT Colleges
                    [2021 - 2024]
                  </li>
                  <li>
                    <strong>Achievements: </strong> Cum Laude, President's
                    Lister, ICCT & LGU Scholarship Awardee
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
                <div className="space-y-4 text-zinc-100">
                  <div>
                    <h4 className="font-semibold">Record Officer Assistant</h4>
                    <p className="text-sm">
                      - On The Job Training assigned at ICCT Colleges Registrar
                    </p>
                    <p className="text-sm">- Data Encoding</p>
                    <p className="text-sm">- Portal Assistance</p>
                    <p className="text-sm">- Digital Campaign</p>
                    <p className="text-sm">- Telemarketing Activities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
