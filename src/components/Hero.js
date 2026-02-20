function Hero() {
  return (
    <section id="hero">
      <div className="container hero-container">

        {/* Left Side - Image */}
        <div className="hero-image">
          <img src="/profile.png" alt="Bhuvaneshwaran" />
        </div>

        {/* Right Side - Text */}
        <div className="hero-content">
          <h1>Hi, I’m Bhuvaneshwaran</h1>

          <h2 className="hero-role">
            Software Engineer
          </h2>

          <p>
            I build scalable web applications using Java, Spring Boot, React.js
            and SQL with a strong focus on clean code and problem solving.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View Projects
            </a>

            <a
              href="/Bhuvaneshwaran_Resume.pdf"
              download
              className="btn btn-outline"
            >
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
