function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56 0-.27-.01-1.15-.02-2.08-3.2.71-3.88-1.37-3.88-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.73.08-.72.08-.72 1.16.08 1.77 1.22 1.77 1.22 1.03 1.79 2.71 1.27 3.37.97.1-.76.4-1.27.73-1.56-2.56-.3-5.25-1.3-5.25-5.8 0-1.28.45-2.33 1.2-3.15-.12-.3-.52-1.5.11-3.13 0 0 .98-.32 3.2 1.2a10.9 10.9 0 0 1 5.82 0c2.22-1.52 3.2-1.2 3.2-1.2.63 1.63.23 2.83.11 3.13.75.82 1.2 1.87 1.2 3.15 0 4.51-2.69 5.49-5.26 5.79.41.36.78 1.09.78 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56a11.53 11.53 0 0 0 7.85-10.9C23.5 5.66 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5ZM.5 8h4V23h-4V8Zm7 0h3.83v2.05h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V23h-4v-7.74c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.98 2.01-2.98 4.1V23h-4V8Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M2.25 4.5h19.5A2.25 2.25 0 0 1 24 6.75v10.5A2.25 2.25 0 0 1 21.75 19.5H2.25A2.25 2.25 0 0 1 0 17.25V6.75A2.25 2.25 0 0 1 2.25 4.5Zm0 1.5v.2l9.75 6.83 9.75-6.83V6H2.25Zm19.5 11.99V8.03l-9.32 6.53a.75.75 0 0 1-.86 0L2.25 8.03v9.96h19.5Z" />
    </svg>
  );
}

function App() {
  const experiences = [
    {
      period: "2024 — 2025",
      title: "IT Specialist",
      company: "Novartis",
      description:
        "Supported enterprise IT operations across infrastructure, endpoint management, user services, and troubleshooting in a fast-paced corporate environment.",
      highlights: [
        "Resolved 10–20 support tickets daily in high-volume environments",
        "Delivered 500+ onsite support operations",
        "Handled 500+ remote support cases",
        "Provided direct support for VIP stakeholders and critical user groups",
      ],
      tech: ["Microsoft 365", "Intune", "Entra ID", "Networking", "IT Support"],
    },
    {
      period: "Previous",
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
          --bg: #081120;
          --bg-soft: rgba(17, 34, 64, 0.72);
          --line: rgba(148, 163, 184, 0.14);
          --text: #cbd5e1;
          --muted: #94a3b8;
          --accent: #64ffda;
          --white: #f8fafc;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          min-width: 320px;
          overflow-x: hidden;
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
            radial-gradient(circle at 15% 20%, rgba(100, 255, 218, 0.08), transparent 26%),
            radial-gradient(circle at 85% 0%, rgba(100, 255, 218, 0.05), transparent 20%),
            linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0)),
            var(--bg);
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: minmax(290px, 380px) minmax(0, 1fr);
          gap: 56px;
        }

        .sidebar {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 72px 0 44px;
        }

        .intro h1 {
          margin: 0;
          color: var(--white);
          font-size: clamp(40px, 5vw, 68px);
          line-height: 1.02;
          letter-spacing: -2px;
        }

        .intro h2 {
          margin: 14px 0 0;
          color: var(--text);
          font-size: clamp(22px, 2.8vw, 28px);
          line-height: 1.35;
          font-weight: 700;
        }

        .intro p {
          margin: 18px 0 0;
          max-width: 34ch;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.85;
        }

        .nav {
          margin-top: 42px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .nav a {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          width: fit-content;
          color: var(--muted);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .nav a::before {
          content: "";
          width: 30px;
          height: 1px;
          background: var(--muted);
          opacity: 0.75;
          transition: width 0.25s ease, background 0.25s ease, opacity 0.25s ease;
        }

        .nav a:hover {
          color: var(--white);
          transform: translateX(4px);
        }

        .nav a:hover::before {
          width: 54px;
          background: var(--white);
          opacity: 1;
        }

        .socials {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .icon-link {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: var(--muted);
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.02);
          transition: transform 0.25s ease, border-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
        }

        .icon-link:hover {
          color: var(--accent);
          border-color: rgba(100, 255, 218, 0.45);
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(100, 255, 218, 0.08);
        }

        .content {
          min-width: 0;
          padding: 72px 0;
        }

        .section {
          padding-bottom: 88px;
        }

        .section-title {
          display: none;
          margin: 0 0 20px;
          color: var(--white);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .about p {
          margin: 0 0 18px;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.9;
        }

        .about strong {
          color: var(--white);
        }

        .card {
          display: grid;
          grid-template-columns: 120px minmax(0, 1fr);
          gap: 20px;
          margin-bottom: 16px;
          padding: 22px;
          border: 1px solid transparent;
          border-radius: 18px;
          background: transparent;
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }

        .card:hover {
          transform: translateY(-2px);
          background: rgba(17, 34, 64, 0.5);
          border-color: rgba(100, 255, 218, 0.12);
        }

        .period {
          padding-top: 4px;
          color: var(--muted);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .card h3 {
          margin: 0;
          color: var(--white);
          font-size: 21px;
          line-height: 1.4;
        }

        .card h4 {
          margin: 6px 0 0;
          color: var(--muted);
          font-size: 15px;
          font-weight: 600;
        }

        .card p {
          margin: 14px 0 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.8;
        }

        .highlights {
          margin: 14px 0 0;
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
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(100, 255, 218, 0.1);
          background: rgba(100, 255, 218, 0.08);
          color: var(--accent);
          font-size: 13px;
          font-weight: 600;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .skill {
          padding: 16px 18px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(17, 34, 64, 0.45);
          color: var(--text);
          transition: transform 0.25s ease, border-color 0.25s ease, color 0.25s ease;
        }

        .skill:hover {
          transform: translateY(-2px);
          border-color: rgba(100, 255, 218, 0.18);
          color: var(--white);
        }

        .contact-box {
          padding: 28px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(17, 34, 64, 0.55);
        }

        .contact-box p {
          margin: 0 0 18px;
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
          min-height: 46px;
          padding: 12px 18px;
          border-radius: 999px;
          border: 1px solid var(--accent);
          color: var(--accent);
          font-weight: 700;
          transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
          background: rgba(100, 255, 218, 0.08);
        }

        .btn.fill {
          background: var(--accent);
          color: #081120;
        }

        .btn.fill:hover {
          background: #7dffe4;
        }

        .footer-note {
          margin-top: 24px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.7;
        }

        @media (max-width: 1024px) {
          .container {
            grid-template-columns: 1fr;
            gap: 0;
            max-width: 760px;
          }

          .sidebar {
            position: relative;
            height: auto;
            padding: 56px 0 28px;
          }

          .nav {
            margin-top: 30px;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 14px;
          }

          .nav a:hover {
            transform: none;
          }

          .content {
            padding: 12px 0 72px;
          }

          .section-title {
            display: block;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 18px;
          }

          .intro h1 {
            letter-spacing: -1.4px;
          }

          .card {
            grid-template-columns: 1fr;
            padding: 18px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .contact-box {
            padding: 22px;
          }
        }
      `}</style>

      <div className="app">
        <div className="container">
          <aside className="sidebar">
            <div>
              <div className="intro">
                <h1>Salih Demir</h1>
                <h2>Junior Software Engineer | Cybersecurity Enthusiast</h2>
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
            </div>
          </aside>

          <main className="content">
            <section id="about" className="section about">
              <h3 className="section-title">About</h3>
              <p>
                I am a software engineering graduate with hands-on experience in enterprise IT support,
                infrastructure operations, endpoint management, and technical troubleshooting.
              </p>
              <p>
                My background combines <strong>practical IT operations</strong> with a growing focus on
                <strong> software engineering</strong> and <strong>cybersecurity</strong>. I enjoy building
                clean solutions, improving user experience, and continuously strengthening my technical depth.
              </p>
              <p>
                I am currently focused on growing into roles where I can contribute to software, systems,
                and security-driven environments with long-term ownership and discipline.
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
                        <span className="tag" key={i}>
                          {tag}
                        </span>
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
                  <div className="period">Project</div>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="tags">
                      {project.tags.map((tag, i) => (
                        <span className="tag" key={i}>
                          {tag}
                        </span>
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