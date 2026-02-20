function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>

        <div className="grid-2">

          <div className="card">

            {/* Project Image Grid */}
            <div className="project-images">
            <img src="/money1.png" alt="Money Manager 1" />
            <img src="/money2.png" alt="Money Manager 2" />
            <img src="/money3.png" alt="Money Manager 3" />
            </div>

            <h3 style={{ marginBottom: "10px" }}>
                Money Manager Web Application
            </h3>

            <p>
              A full-stack web application that allows users to track income,
              expenses, and savings with secure authentication and
              category-based analysis.
            </p>

            <div style={{ marginTop: "15px" }}>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">MongoDB</span>
            </div>

            <div style={{ marginTop: "20px" }}>
              <a 
                href="https://money-manager-frontend-lilac.vercel.app/" 
                target="_blank"
                rel="noreferrer"
                style={{ marginRight: "15px", color: "#2563eb", fontWeight: "500" }}
              >
                Live Demo
              </a>

              <a 
                href="https://github.com/KtPrince24/Money-Manager-frontend" 
                target="_blank"
                rel="noreferrer"
                style={{ color: "#2563eb", fontWeight: "500" }}
              >
                GitHub
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
