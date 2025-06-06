import React, { useState, useEffect } from "react";
import RevealOnScroll from "../RevealOnScroll";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Hi, I'm LenloDev";
  const typingSpeed = 150;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentIndex < fullText.length) {
          setDisplayedText((prev) => prev + fullText[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else if (!isDeleting && currentIndex === fullText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && currentIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCurrentIndex((prev) => prev - 1);
        } else if (isDeleting && currentIndex === 0) {
          setIsDeleting(false);
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, fullText]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent leading-tight">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-zinc-100 text-lg mb-8 max-w-lg mx-auto">
            I'm a passionate Web Developer specializing in building scalable,
            high-performance web applications. I craft clean, maintainable code
            with a strong focus on performance, usability, and user-centric
            design.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://drive.google.com/file/d/17rsooKgPO96dmhuoEX-NLYf7fp8w7glC/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-zinc-100 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me!
            </a>
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <a
              href="https://www.facebook.com/raul.cartativo.castillo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-100 hover:text-white hover:bg-blue-600 p-2 rounded-md hover:scale-110 transition-all duration-300"
            >
              <FaFacebook className="w-9 h-9" />
            </a>

            <a
              href="https://www.instagram.com/cchivalryyyy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-100 hover:text-white hover:bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-md hover:scale-110 transition-all duration-300"
            >
              <FaInstagram className="w-9 h-9" />
            </a>

            <a
              href="https://github.com/lenlo121500"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-100 hover:text-black hover:bg-white p-2 rounded-md hover:scale-110 transition-all duration-300"
            >
              <FaGithub className="w-9 h-9" />
            </a>

            <a
              href="https://www.linkedin.com/in/raulc8808/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-100 hover:text-white hover:bg-blue-700 p-2 rounded-md hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin className="w-9 h-9" />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
