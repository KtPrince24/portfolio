function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2>Education</h2>

        <div className="card education-card">

          <div className="edu-header">
            <div className="edu-left">
                <img src="/gct1.png" alt="GCT Logo" className="edu-logo" />

                <div>
                <h3>B.Tech – Information Technology</h3>
                <span className="edu-college">
                    Government College of Technology, Coimbatore
                </span>
                </div>
            </div>

            <span className="edu-year">2020 – 2024</span>
            </div>

          <p className="edu-description">
            Focused on software development, data structures, databases,
            and full-stack web technologies. Actively built projects and
            strengthened problem-solving skills.
          </p>

        </div>
      </div>
    </section>
  );
}

export default Education;
