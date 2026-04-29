function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <h3 className="section-label">Skills</h3>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill" key={skill}>{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
