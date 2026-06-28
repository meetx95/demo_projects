function Skills() {
  const skills = [{
    icon: "fa-brands fa-react react",
    title: "React.js",
    desc: "Modern frontend interfaces and UI architecture."
  }, {
    icon: "fa-brands fa-js js",
    title: "JavaScript",
    desc: "Interactive web applications and logic."
  }, {
    icon: "fa-solid fa-palette code",
    title: "Web Design",
    desc: "Modern UI/UX with premium visual hierarchy."
  }, {
    icon: "fa-solid fa-film ae",
    title: "Motion Graphics",
    desc: "Cinematic typography and animation design."
  }
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {
          skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <i className={skill.icon}></i>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Skills