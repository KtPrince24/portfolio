function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2>Experience</h2>

        <div className="card experience-card">
          <div className="exp-header">
            <div className="exp-left">
                <img src="/zoho.svg" alt="Zoho Logo" className="exp-logo" />
                
                <div>
                <h3>Incubation Trainee</h3>
                <span className="exp-company">
                    Zoho Corporation Pvt Ltd
                </span>
                </div>
            </div>

            <span className="exp-duration">2023 – 2024</span>
        </div>

          <ul className="exp-points">
            <li>
              Worked on real-world software modules in a structured development environment.
            </li>
            <li>
              Strengthened backend logic, debugging skills, and database design concepts.
            </li>
            <li>
              Collaborated with mentors and peers to deliver optimized solutions.
            </li>
            <li>
              Improved problem-solving skills through hands-on development tasks.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
