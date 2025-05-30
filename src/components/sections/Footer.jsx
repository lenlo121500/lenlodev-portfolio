import RevealOnScroll from "../RevealOnScroll";

const Footer = () => {
  return (
    <footer className="bg-transparent">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-6 md:py-12">
            <p className="text-zinc-100 text-sm md:text-base">
              &copy; 2025 LenloDev. All rights reserved.
            </p>
            <p className="text-zinc-100 text-sm md:text-base">
              Designed and Developed by LenloDev
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </footer>
  );
};

export default Footer;
