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

function CVIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M6.75 2.25h7.19c.6 0 1.17.24 1.6.66l3.8 3.8c.42.43.66 1 .66 1.6v11.94A2.25 2.25 0 0 1 17.75 22.5H6.25A2.25 2.25 0 0 1 4 20.25V4.5a2.25 2.25 0 0 1 2.25-2.25Zm6.75 1.81V7.5h3.44L13.5 4.06ZM8.25 11.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 3.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0-7.5a.75.75 0 0 0 0 1.5H11a.75.75 0 0 0 0-1.5H8.25Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function App() {
  const experiences = [
    {
      period: "May 2025 — Present",
      title: "Information Technology Specialist",
      company: "Arvato (Bertelsmann)",
      description:
        "Providing technical support and maintaining IT infrastructure across warehouse and office environments. Focused on system uptime, hardware and software installation, troubleshooting network and user issues, and coordinating with global IT teams for smooth operations.",
      highlights: [
        "Support enterprise infrastructure across warehouse and office environments",
        "Troubleshoot hardware, software, network, and user-related issues",
        "Coordinate with global IT teams on incidents and operational requests",
        "Contribute to infrastructure stability and daily operational continuity",
      ],
      tech: ["IT Infrastructure", "Technical Support", "Networking", "System Maintenance"],
    },
    {
      period: "Jan 2024 — Jan 2025",
      title: "Network & System Specialist",
      company: "Novartis",
      description:
        "Delivered L2 support in a corporate environment with responsibilities across user management, Entra ID (Azure AD), VPN support, mobile device services, Microsoft products, and business-critical platforms including SAP and ServiceNow workflows.",
      highlights: [
        "Managed user account operations on Microsoft Entra ID (Azure AD)",
        "Resolved incidents and requests through the ServiceNow platform",
        "Supported VPN connections via Check Point",
        "Provided support for Microsoft 365, Teams, Outlook, Office, Power BI, and Copilot",
      ],
      tech: ["Entra ID", "Azure AD", "ServiceNow", "Check Point VPN", "Microsoft 365"],
    },
    {
      period: "Aug 2023 — Jan 2024",
      title: "IT Specialist",
      company: "Inditex",
      description:
        "Provided comprehensive L2 IT support for nationwide retail operations across brands such as Zara, Bershka, Pull&Bear, Massimo Dutti, Zara Home, and Lefties. Gained hands-on experience in retail technology environments and fast-paced incident resolution.",
      highlights: [
        "Supported multiple nationwide retail brands under the Inditex group",
        "Handled L2 technical support in a large-scale retail environment",
        "Resolved user-facing and operational IT issues efficiently",
        "Strengthened troubleshooting and support discipline in business-critical operations",
      ],
      tech: ["L2 Support", "Retail IT", "Troubleshooting", "End User Support"],
    },
    {
      period: "May 2023 — Aug 2023",
      title: "Android Developer Intern",
      company: "Mobven",
      description:
        "Contributed to Android development workflows, supported the team on project tasks, and improved understanding of mobile application development in a professional software environment.",
      highlights: [
        "Worked closely with the Android development team",
        "Contributed to project-based development processes",
        "Improved mobile software development knowledge in a corporate environment",
      ],
      tech: ["Android", "Mobile Development", "Team Collaboration"],
    },
  ];

  const skills = [
    "Windows Support",
    "Microsoft 365",
    "Entra ID (Azure AD)",
    "Active Directory",
    "ServiceNow",
    "VPN Support",
    "Network Troubleshooting",
    "IT Infrastructure",
    "L2 Technical Support",
    "User & Access Management",
    "Endpoint Support",
    "Technical Documentation",
  ];

  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and developed a modern portfolio website to present my IT background, experience, and long-term transition into systems and cybersecurity roles.",
      tags: ["React", "Vite", "Responsive UI", "Portfolio"],
      link: "https://www.demirsalih.com.tr/",
    },
    {
      title: "IT Operations & Support Focus",
      description:
        "A professional profile built around enterprise IT support, infrastructure operations, identity management, and troubleshooting in corporate environments.",
      tags: ["IT Support", "Infrastructure", "Systems", "Operations"],
      link: "https://www.linkedin.com/in/salih-demiir/",
    },
  ];

  return (
    <>
      <style>{`
        :root {
          --bg: #0a192f;
          --bg-soft: #112240;
          --bg-card: rgba(17, 34, 64, 0.55);
          --line: rgba(148, 163, 184, 0.12);
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
          min-width: 320px;
          background: var(--bg);
          color: var(--text);
          font-family: Inter, Arial, Helvetica, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .app {
          min-height: 100vh;
          background:
            radial-gradient(circle at 20% 20%, rgba(100, 255, 218, 0.07), transparent 22%),
            radial-gradient(circle at 80% 10%, rgba(100, 255, 218, 0.04), transparent 18%),
            var(--bg);
        }

        .container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: minmax(300px, 380px) minmax(0, 1fr);
          gap: 64px;
        }

        .sidebar {
          position: sticky;
          top: 0;
          height: 100vh;
          padding: 88px 0 56px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .intro h1 {
          margin: 0;
          color: var(--white);
          font-size: clamp(42px, 5vw, 72px);
          line-height: 0.95;
          letter-spacing: -2.2px;
        }

        .intro h2 {
          margin: 18px 0 0;
          color: var(--white);
          font-size: clamp(20px, 2.3vw, 26px);
          line-height: 1.35;
          font-weight: 700;
        }

        .intro p {
          margin: 22px 0 0;
          max-width: 32ch;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.8;
        }

        .nav {
          margin-top: 44px;
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
          width: 32px;
          height: 1px;
          background: var(--muted);
          opacity: 0.7;
          transition: width 0.25s ease, background 0.25s ease, opacity 0.25s ease;
        }

        .nav a:hover {
          color: var(--white);
          transform: translateX(4px);
        }

        .nav a:hover::before {
          width: 58px;
          opacity: 1;
          background: var(--white);
        }

        .socials {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .icon-link {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid var(--line);
          color: var(--muted);
          background: rgba(255, 255, 255, 0.02);
          transition: transform 0.25s ease, color 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }

        .icon-link:hover {
          transform: translateY(-2px);
          color: var(--accent);
          border-color: rgba(100, 255, 218, 0.4);
          background: rgba(100, 255, 218, 0.06);
        }

        .content {
          padding: 88px 0;
          min-width: 0;
        }

        .section {
          padding-bottom: 96px;
        }

        .section-label {
          display: none;
          margin: 0 0 24px;
          color: var(--white);
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 800;
        }

        .about p {
          margin: 0 0 18px;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.9;
        }

        .about strong {
          color: var(--white);
          font-weight: 700;
        }

        .card {
          display: grid;
          grid-template-columns: 120px minmax(0, 1fr);
          gap: 22px;
          padding: 24px;
          margin-bottom: 18px;
          border-radius: 18px;
          border: 1px solid transparent;
          background: transparent;
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }

        .card:hover {
          background: var(--bg-card);
          border-color: rgba(100, 255, 218, 0.12);
          transform: translateY(-2px);
        }

        .period {
          padding-top: 5px;
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
          font-size: 20px;
          line-height: 1.45;
          font-weight: 700;
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
          color: var(--muted);
        }

        .tags {
          margin-top: 18px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tag {
          display: inline-flex;
          align-items: center;
          min-height: 32px;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(100, 255, 218, 0.08);
          border: 1px solid rgba(100, 255, 218, 0.12);
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
          border: 1px solid var(--line);
          background: rgba(17, 34, 64, 0.35);
          color: var(--text);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .skill:hover {
          transform: translateY(-2px);
          border-color: rgba(100, 255, 218, 0.16);
        }

        .project-card {
          display: grid;
          grid-template-columns: 120px minmax(0, 1fr);
          gap: 22px;
          padding: 24px;
          margin-bottom: 18px;
          border-radius: 18px;
          border: 1px solid transparent;
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }

        .project-card:hover {
          background: var(--bg-card);
          border-color: rgba(100, 255, 218, 0.12);
          transform: translateY(-2px);
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
          color: var(--white);
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .project-link:hover {
          color: var(--accent);
        }

        .contact-box {
          padding: 28px;
          border-radius: 20px;
          background: rgba(17, 34, 64, 0.45);
          border: 1px solid var(--line);
        }

        .contact-box p {
          margin: 0 0 18px;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.85;
        }

        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 22px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 12px 18px;
          border-radius: 999px;
          border: 1px solid var(--accent);
          color: var(--accent);
          font-weight: 700;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
          background: rgba(100, 255, 218, 0.08);
        }

        .btn.fill {
          background: var(--accent);
          color: #0a192f;
        }

        .btn.fill:hover {
          background: #7dffe4;
        }

        .footer-note {
          margin-top: 22px;
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
          }

          .nav a:hover {
            transform: none;
          }

          .content {
            padding: 16px 0 72px;
          }

          .section-label {
            display: block;
          }
        }

        @media (max-width: 680px) {
          .container {
            padding: 0 18px;
          }

          .intro h1 {
            letter-spacing: -1.2px;
          }

          .card,
          .project-card {
            grid-template-columns: 1fr;
            padding: 20px 18px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .contact-box {
            padding: 22px;
          }

          .contact-actions {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>

      <div className="app">
        <div className="container">
          <aside className="sidebar">
            <div>
              <div className="intro">
                <h1>Salih Demir</h1>
                <h2>IT Systems Engineer | Cybersecurity Enthusiast</h2>
                <p>
                  I build and support reliable technology solutions with hands-on experience in enterprise
                  infrastructure, user support, system operations, and modern workplace technologies. My
                  long-term focus is growing deeper in systems engineering and cybersecurity.
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
                href="/Salih_Demir_CV.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Download CV"
                title="Download CV"
              >
                <CVIcon />
              </a>
            </div>
          </aside>

          <main className="content">
            <section id="about" className="section about">
              <h3 className="section-label">About</h3>
              <p>
                I am a Software Engineering graduate with practical experience in <strong>enterprise IT
                support</strong>, <strong>infrastructure operations</strong>, <strong>identity and access
                workflows</strong>, and <strong>technical troubleshooting</strong>.
              </p>
              <p>
                My professional path has been shaped by fast-paced corporate environments where reliability,
                responsiveness, and ownership matter. I have supported users, business systems, endpoints,
                and infrastructure processes across both office and large-scale operational environments.
              </p>
              <p>
                I am currently focused on growing into roles where I can combine <strong>systems</strong>,
                <strong> infrastructure</strong>, and <strong>security</strong> with long-term engineering
                discipline.
              </p>
            </section>

            <section id="experience" className="section">
              <h3 className="section-label">Experience</h3>

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
              <h3 className="section-label">Skills</h3>

              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div className="skill" key={index}>
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            <section id="projects" className="section">
              <h3 className="section-label">Projects</h3>

              {projects.map((project, index) => (
                <article className="project-card" key={index}>
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

                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project <ArrowIcon />
                    </a>
                  </div>
                </article>
              ))}
            </section>

            <section id="contact" className="section">
              <h3 className="section-label">Contact</h3>

              <div className="contact-box">
                <p>
                  I’m open to IT infrastructure, systems, support, and security-focused opportunities where
                  I can contribute with hands-on experience, strong ownership, and a long-term engineering
                  mindset.
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

                  <a
                    className="btn"
                    href="/Salih_Demir_CV.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download CV
                  </a>
                </div>

                <div className="footer-note">
                  Built with React &amp; Vite • Clean, modern, and professional portfolio presence
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