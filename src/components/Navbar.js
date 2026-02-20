import { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
  <div className="logo-name">Bhuvaneshwaran</div>
  <div className="logo-tagline">Full Stack Software Engineer</div>
</div>


      <div className="nav-links">
        <a href="#about" className={active === "about" ? "active" : ""}>About</a>
        <a href="#skills" className={active === "skills" ? "active" : ""}>Skills</a>
        <a href="#projects" className={active === "projects" ? "active" : ""}>Projects</a>
        <a href="#contact" className={active === "contact" ? "active" : ""}>Contact</a>
        <a 
          href="/Bhuvaneshwaran_Resume.pdf"
          download
          className="nav-resume"
        >
          Resume
        </a>

      </div>
    </nav>
  );
}

export default Navbar;
