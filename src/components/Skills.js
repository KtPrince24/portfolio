function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>

        <div className="skills-grid">

          <div className="card skill-card">
            <h3>Languages</h3>
            <div className="skill-list">
              <span>Java</span>
              <span>JavaScript</span>
              <span>SQL</span>
            </div>
          </div>

          <div className="card skill-card">
            <h3>Frontend</h3>
            <div className="skill-list">
              <span>React</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>

          <div className="card skill-card">
            <h3>Backend</h3>
            <div className="skill-list">
              <span>Node.js</span>
              <span>Express</span>
              <span>Spring Boot</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className="card skill-card">
            <h3>Tools & Concepts</h3>
            <div className="skill-list">
              <span>Git</span>
              <span>OOPs</span>
              <span>Database Design</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
