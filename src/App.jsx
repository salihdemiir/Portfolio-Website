function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56 0-.28-.01-1.2-.02-2.17-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.97.1-.75.4-1.26.72-1.55-2.55-.29-5.24-1.29-5.24-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.19 1.18a10.97 10.97 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.43-5.25 5.71.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56a11.53 11.53 0 0 0 7.85-10.9C23.5 5.66 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96ZM3 9h3.96v12H3V9Zm7.02 0H13.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-3.96v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95V21h-3.96V9Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function App() {
  const experiences = [
    {
      period: "2024 — PRESENT",
      title: "Software Engineer (IT Support & Infrastructure)",
      company: "Enterprise IT Environment",
      description:
        "Supported enterprise users across on-site and remote environments, resolving hardware, software, Microsoft 365, Intune, Entra ID, and connectivity issues while ensuring business continuity and service reliability.",
      highlights: [
        "Resolved 10–20 support tickets daily in high-volume environments",
        "Delivered 500+ onsite support operations",
        "Handled 500+ remote support cases",
        "Provided direct support for VIP stakeholders and critical user groups",
      ],
      tech: ["Microsoft 365", "Intune", "Entra ID", "Networking", "IT Support"],
    },
    {
      period: "PREVIOUS",
      title: "IT Helpdesk / Systems Support",
      company: "Corporate Support Operations",
      description:
        "Provided structured end-user support, device setup, troubleshooting, account assistance, and technical documentation across fast-paced corporate operations with a strong focus on user satisfaction and operational efficiency.",
      highlights: [
        "Managed endpoint setup and maintenance processes",
        "Supported user access, account, and device-related requests",
        "Resolved incidents efficiently across software and hardware layers",
        "Maintained technical documentation and support procedures",
      ],
      tech: ["Windows", "Hardware", "Troubleshooting", "Documentation"],
    },
  ];

  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and developed a modern portfolio website to present my technical background, enterprise experience, and long-term growth path in software engineering and cybersecurity.",
      tags: ["React", "Vite", "Portfolio", "Responsive UI"],
    },
    {
      title: "IT Support Ticket Dashboard",
      description:
        "Built as a concept interface for tracking support requests, monitoring ticket flow, and organizing issue resolution in a clean and practical dashboard structure.",
      tags: ["React", "Dashboard", "IT Support", "UI"],
    },
    {
      title: "Network Monitoring Mini Tool",
      description:
        "A lightweight project idea focused on basic connectivity visibility, system checks, and practical monitoring scenarios for infrastructure-oriented workflows.",
      tags: ["Networking", "Monitoring", "Support Tools"],
    },
  ];

  const skills = [
    "Microsoft 365",
    "Intune",
    "Entra ID (Azure AD)",
    "Network Troubleshooting",
    "Hardware & Software Support",
    "Remote Support",
    "IT Documentation",
    "Windows Support",
    "User Management",
    "Cybersecurity Fundamentals",
  ];

  return (
    <>
      <style>{`
        :root {
          --bg: #0a192f;
          --bg-soft: #112240;
          --line: #233554;
          --text: #ccd6f6;
          --muted: #8892b0;
          --accent: #64ffda;
          --white: #e6f1ff;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--bg);
          color: var(--text);
          font-family: Inter, Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .app {
          min-height: 100vh;
          background:
            radial-gradient(circle at 20% 20%, rgba(100,255,218,0.06), transparent 25%),
            radial-gradient(circle at 80% 10%, rgba(100,255,218,0.04), transparent 20%),
            var(--bg);
        }

        .container {
          width: min(1400px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 42% 58%;
          gap: 40px;
          padding: 0 32px;
        }

        .sidebar {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 90px 0 60px 0;
        }

        .intro h1 {
          margin: 0;
          font-size: 72px;
          line-height: 1;
          color: var(--white);
          letter-spacing: -2px;
        }

        .intro h2 {
          margin: 18px 0 0 0;
          font-size: 30px;
          color: var(--text);
          font-weight: 700;
        }

        .intro p {
          margin: 24px 0 0 0;
          max-width: 380px;
          color: var(--muted);
          font-size: 18px;
          line-height: 1.8;
        }

        .nav {
          margin-top: 64px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .nav a {
          display: flex;
          align-items: center;
          gap: 14px;
          width: max-content;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 1.8px;
          font-size: 13px;
          font-weight: 700;
          transition: all 0.25s ease;
        }

        .nav a::before {
          content: "";
          width: 34px;
          height: 1px;
          background: var(--muted);
          transition: all 0.25s ease;
          opacity: 0.7;
        }

        .nav a:hover {
          color: var(--white);
          transform: translateX(6px);
        }

        .nav a:hover::before {
          width: 64px;
          background: var(--white);
          opacity: 1;
        }

        .socials {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .icon-link {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--muted);
          border: 1px solid var(--line);
          border-radius: 999px;
          transition: all 0.25s ease;
          background: rgba(255,255,255,0.01);
        }

        .icon-link:hover {
          color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-3px);
          box-shadow: 0 0 18px rgba(100,255,218,0.12);
        }

        .content {
          padding: 90px 0;
        }

        .section {
          padding: 0 0 110px 0;
        }

        .section-title {
          display: none;
          margin: 0 0 24px 0;
          color: var(--white);
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .about p {
          margin: 0 0 24px 0;
          color: var(--muted);
          font-size: 18px;
          line-height: 1.9;
        }

        .about strong {
          color: var(--white);
          font-weight: 700;
        }

        .card {
          display: grid;
          grid-template-columns: 150px 1fr;
          gap: 24px;
          padding: 24px;
          border: 1px solid transparent;
          border-radius: 18px;
          transition: all 0.25s ease;
          margin-bottom: 18px;
          background: transparent;
        }

        .card:hover {
          background: rgba(17,34,64,0.55);
          border-color: rgba(100,255,218,0.10);
          transform: translateY(-2px);
        }

        .period {
          color: var(--muted);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding-top: 4px;
        }

        .card h3 {
          margin: 0;
          color: var(--white);
          font-size: 22px;
          line-height: 1.4;
        }

        .card h4 {
          margin: 6px 0 0 0;
          color: var(--muted);
          font-size: 15px;
          font-weight: 600;
        }

        .card p {
          margin: 16px 0 0 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.8;
        }

        .highlights {
          margin: 14px 0 0 0;
          padding-left: 18px;
          color: var(--text);
        }

        .highlights li {
          margin-bottom: 8px;
          line-height: 1.7;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 18px;
        }

        .tag {
          font-size: 13px;
          color: var(--accent);
          background: rgba(100,255,218,0.08);
          border: 1px solid rgba(100,255,218,0.1);
          padding: 8px 12px;
          border-radius: 999px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .skill {
          background: rgba(17,34,64,0.45);
          border: 1px solid rgba(255,255,255,0.05);
          color: var(--text);
          padding: 16px 18px;
          border-radius: 14px;
          transition: all 0.25s ease;
        }

        .skill:hover {
          border-color: rgba(100,255,218,0.18);
          transform: translateY(-2px);
          color: var(--white);
        }

        .contact-box {
          background: rgba(17,34,64,0.55);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          padding: 28px;
        }

        .contact-box p {
          margin: 0 0 18px 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.8;
        }

        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 20px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 18px;
          border-radius: 999px;
          border: 1px solid var(--accent);
          color: var(--accent);
          font-weight: 700;
          transition: all 0.25s ease;
        }

        .btn:hover {
          background: rgba(100,255,218,0.08);
          transform: translateY(-2px);
        }

        .btn.fill {
          background: var(--accent);
          color: #0a192f;
        }

        .btn.fill:hover {
          background: #7dffe4;
        }

        .footer-note {
          margin-top: 26px;
          color: var(--muted);
          font-size: 14px;
        }

        @media (max-width: 1100px) {
          .container {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .sidebar {
            position: relative;
            height: auto;
            padding: 60px 0 30px 0;
          }

          .nav {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 14px;
          }

          .nav a:hover {
            transform: none;
          }

          .content {
            padding: 20px 0 80px 0;
          }

          .section-title {
            display: block;
          }
        }

        @media (max-width: 700px) {
          .container {
            padding: 0 20px;
          }

          .intro h1 {
            font-size: 46px;
          }

          .intro h2 {
            font-size: 24px;
          }

          .intro p,
          .about p {
            font-size: 16px;
          }

          .card {
            grid-template-columns: 1fr;
            padding: 20px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="app">
        <div className="container">
          <aside className="sidebar">
            <div>
              <div className="intro">
                <h1>Salih Demir</h1>
                <h2>Software Engineer</h2>
                <p>
                  I build and support reliable technology solutions with a focus on enterprise systems,
                  troubleshooting, and continuous growth in software engineering and cybersecurity.
                </p>
              </div>

              <nav className="nav">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>

            <div className="socials">
              <a
                className="icon-link"
                href="https://github.com/salihdemiir"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <GitHubIcon />
              </a>

              <a
                className="icon-link"
                href="https://www.linkedin.com/in/salih-demiir/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedInIcon />
              </a>

              <a
                className="icon-link"
                href="mailto:salihdemiir@hotmail.com"
                aria-label="Email"
                title="Email"
              >
                <MailIcon />
              </a>

              <a
                className="icon-link"
                href="/Salih-Demir-CV.pdf"
                download="Salih-Demir-CV.pdf"
                aria-label="Download CV"
                title="Download CV"
              >
                <DownloadIcon />
              </a>
            </div>
          </aside>

          <main className="content">
            <section id="about" className="section about">
              <h3 className="section-title">About</h3>
              <p>
                I am a <strong>Software Engineer</strong> with over <strong>3 years of hands-on experience</strong>
                supporting enterprise IT environments and delivering reliable technical solutions.
                My background includes <strong>Microsoft 365, Intune, Entra ID</strong>, and advanced troubleshooting
                across complex corporate infrastructures.
              </p>

              <p>
                I have worked in <strong>high-volume support environments</strong>, resolving
                <strong> 10–20 tickets daily</strong> while maintaining strong service quality and user satisfaction.
                I have delivered <strong>500+ onsite</strong> and <strong>500+ remote support operations</strong>,
                including direct support for <strong>VIP stakeholders</strong>.
              </p>

              <p>
                Currently, I am expanding my capabilities toward <strong>software engineering and cybersecurity</strong>,
                focusing on building scalable systems, improving my development skills, and strengthening my
                security mindset through hands-on projects.
              </p>
            </section>

            <section id="experience" className="section">
              <h3 className="section-title">Experience</h3>

              {experiences.map((item, index) => (
                <article className="card" key={index}>
                  <div className="period">{item.period}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <h4>{item.company}</h4>
                    <p>{item.description}</p>

                    <ul className="highlights">
                      {item.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>

                    <div className="tags">
                      {item.tech.map((tag, i) => (
                        <span className="tag" key={i}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <section id="skills" className="section">
              <h3 className="section-title">Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div className="skill" key={index}>
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            <section id="projects" className="section">
              <h3 className="section-title">Projects</h3>

              {projects.map((project, index) => (
                <article className="card" key={index}>
                  <div className="period">PROJECT</div>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="tags">
                      {project.tags.map((tag, i) => (
                        <span className="tag" key={i}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <section id="contact" className="section">
              <h3 className="section-title">Contact</h3>
              <div className="contact-box">
                <p>
                  I’m open to software, IT, infrastructure, and technology-focused opportunities where I can
                  contribute with hands-on experience, strong ownership, and a long-term engineering mindset.
                </p>

                <div className="contact-actions">
                  <a className="btn fill" href="mailto:salihdemiir@hotmail.com">
                    Send Email
                  </a>
                  <a
                    className="btn"
                    href="https://www.linkedin.com/in/salih-demiir/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="btn"
                    href="https://github.com/salihdemiir"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>

                <div className="footer-note">
                  Built with React & Vite • Designed for a clean, modern, professional presence
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;