import RevealOnScroll from "../RevealOnScroll";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent justify-center text-center">
            Soft Skills
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all">
            <p className="text-zinc-100 mb-6">
              Great backend development goes beyond writing clean code—it's
              about collaborating effectively, thinking critically, and adapting
              quickly in fast-paced environments. Here are the soft skills I
              bring to every project:
            </p>
            <ul className="list-disc pl-6 text-zinc-100 mb-6 space-y-1">
              <li>Clear and concise technical communication</li>
              <li>Collaborative team player across cross-functional teams</li>
              <li>Analytical thinking and problem resolution under pressure</li>
              <li>Adaptability to new tools, systems, and challenges</li>
              <li>Strong attention to detail in code and system design</li>
              <li>Ownership mindset with accountability for deliverables</li>
              <li>Effective time and task management in agile workflows</li>
            </ul>
            <p className="text-zinc-100">
              These qualities help me build reliable, maintainable, and scalable
              backend systems while contributing positively to team culture and
              project success.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Skills;
