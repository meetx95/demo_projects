function Projects() {
  const projects = [
    { title: "AI Chat Application", desc: "Modern AI interface with responsive frontend and animations." },
    { title: "Developer Portfolio", desc: "Premium frontend portfolio with futuristic glassmorphism UI." },
    { title: "Motion Graphics Showcase", desc: "Cinematic edits, visual effects, and typography animations." }
  ];

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="project-grid">
        {
          projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Projects