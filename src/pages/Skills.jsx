import "../styles/Skills.css";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Vite",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Responsive Design",
      ],
    },

    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "SQL",
      ],
    },

    {
      title: "IT & System",
      skills: [
        "Microsoft 365",
        "Active Directory",
        "Intune",
        "Network Support",
        "Windows Server",
        "IT Support",
      ],
    },

    {
      title: "Cyber Security",
      skills: [
        "Security Awareness",
        "VPN",
        "Endpoint Security",
        "SOC Fundamentals",
        "Network Security",
      ],
    },
  ];

  return (
    <main className="skills-page">
      <section className="skills-hero">
        <span>YETENEKLER</span>

        <h1>
          Yazılım, IT ve siber güvenlik alanlarında kullandığım teknolojiler.
        </h1>
      </section>

      <section className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h2>{group.title}</h2>

            <div className="skill-items">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Skills;