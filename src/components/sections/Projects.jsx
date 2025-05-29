import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent justify-center text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Quably | Project Management Tool
              </h3>
              <p className="text-zinc-100 mb-4">
                Quably is a project management tool that allows users to create,
                manage, and collaborate on projects and tasks with ease inside a
                workspace. The owner of the workspace can invite other users to
                join and manage the project.
              </p>
              <div className="flex flex-wrap gap-1 mt-4">
                {[
                  "MongoDB",
                  "ExpressJS",
                  "NodeJS",
                  "React",
                  "Tailwindcss",
                  "Typescript",
                  "JWT",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-zinc-100 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <p>
                  Click the link to view the project. →{" "}
                  <a
                    href="https://github.com/lenlo121500/Quably"
                    target="_blank"
                    className="text-sky-400 hover:text-zinc-100 transition-colors"
                  >
                    Link
                  </a>
                </p>
              </div>
            </div>
            {/* Project 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                MERN Authentication System
              </h3>
              <p className="text-zinc-100 mb-4">
                Full-stack authentication system built with MERN stack. It
                includes User Authentication, JWT-Based Authorization, State
                Managements, Email notifications, and more.
              </p>
              <div className="flex flex-wrap gap-1 mt-4">
                {[
                  "MongoDB",
                  "ExpressJS",
                  "NodeJS",
                  "React",
                  "Zustand",
                  "Tailwindcss",
                  "Mailtrap",
                  "JWT",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-zinc-100 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <p>
                  Click the link to view the project. →{" "}
                  <a
                    href="https://auth-system-s7q8.onrender.com/"
                    target="_blank"
                    className="text-sky-400 hover:text-zinc-100 transition-colors"
                  >
                    Link
                  </a>
                </p>
              </div>
            </div>
            {/* Project 3 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">Wisp Chat Application</h3>
              <p className="text-zinc-100 mb-4">
                A modern, real-time chat application built with the MERN stack.
                Featuring user authentication, real-time messaging with
                Socket.io, image uploads with Cloudinary, and a sleek frontend
                UI powered by React, TailwindCSS, and Zustand state management.
              </p>
              <div className="flex flex-wrap gap-1 mt-4">
                {[
                  "MongoDB",
                  "ExpressJS",
                  "NodeJS",
                  "React",
                  "Tailwindcss",
                  "Socket.io",
                  "Cloudinary",
                  "JWT",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-zinc-100 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <p>
                  Click the link to view the project. →{" "}
                  <a
                    href="https://github.com/lenlo121500/wisp-chat-app/blob/main/README.md"
                    target="_blank"
                    className="text-sky-400 hover:text-zinc-100 transition-colors"
                  >
                    Link
                  </a>
                </p>
              </div>
            </div>
            {/* Project 4 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Subscription Tracker API
              </h3>
              <p className="text-zinc-100 mb-4">
                A backend service built with Node.js and Express.js for managing
                user subscriptions, sending email reminders, and handling
                renewals. Built with scalability, security, and real-world
                patterns in mind.
              </p>
              <div className="flex flex-wrap gap-1 mt-4">
                {[
                  "MongoDB",
                  "ExpressJS",
                  "NodeJS",
                  "NodeMailer/Upstash",
                  "Arcjet",
                  "JWT",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-zinc-100 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <p>
                  Click the link to view the project. →{" "}
                  <a
                    href="https://github.com/lenlo121500/subscription-tracker/blob/main/README.md"
                    target="_blank"
                    className="text-sky-400 hover:text-zinc-100 transition-colors"
                  >
                    Link
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
