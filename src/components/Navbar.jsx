import React, { useEffect } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-transparent backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-mono text-2xl font-bold text-zinc-100"
          >
            Lenlo<span className="text-sky-500">Dev</span>
          </a>
          {/* Mobile menu button */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#home"
              className="text-zinc-100 hover:text-sky-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-zinc-100 hover:text-sky-400 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-zinc-100 hover:text-sky-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-zinc-100 hover:text-sky-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-zinc-100 hover:text-sky-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
