function Icon({ children }) {
  return (
    <div className="icon">{children}</div>
  );
}

function App() {
  const experiences = [
    {
      period: "May 2025 — Present",
      title: "Information Technology Specialist",
      company: "Arvato (Bertelsmann)",
      desc: "Enterprise IT support across warehouse and office environments. Managing infrastructure, troubleshooting issues, and ensuring system uptime.",
    },
    {
      period: "Jan 2024 — Jan 2025",
      title: "Network & System Specialist",
      company: "Novartis",
      desc: "L2 support, Azure AD user management, VPN (CheckPoint), ServiceNow operations and enterprise troubleshooting.",
    },
    {
      period: "Aug 2023 — Jan 2024",
      title: "IT Specialist",
      company: "Inditex",
      desc: "Retail IT support across brands like Zara, Bershka. Strong L2 troubleshooting and user support experience.",
    },
  ];

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Inter, sans-serif;
          background: #020617;
          color: #e2e8f0;
        }

        .container {
          max-width: 1100px;
          margin: auto;
          padding: 40px 20px;
        }

        h1 {
          font-size: 52px;
          background: linear-gradient(90deg, #64ffda, #00c6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        h2 {
          color: #94a3b8;
          margin-top: -10px;
        }

        .icons {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }

        .icon {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          cursor: pointer;
          transition: 0.3s;
        }

        .icon:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(100,255,218,0.2);
          color: #64ffda;
        }

        .section {
          margin-top: 60px;
          animation: fadeUp 0.8s ease;
        }

        @keyframes fadeUp {
          from {opacity:0; transform:translateY(20px);}
          to {opacity:1; transform:translateY(0);}
        }

        .card {
          padding: 20px;
          margin-top: 15px;
          border-radius: 15px;
          background: rgba(15,23,42,0.6);
          backdrop-filter: blur(10px);
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(100,255,218,0.15);
        }

        .btns {
          margin-top: 20px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 10px 18px;
          border-radius: 999px;
          border: 1px solid #64ffda;
          color: #64ffda;
          text-decoration: none;
          font-weight: bold;
          transition: 0.3s;
        }

        .btn:hover {
          background: rgba(100,255,218,0.1);
        }

      `}</style>

      <div className="container">
        <h1>Salih Demir</h1>
        <h2>IT Systems Engineer | Cybersecurity Enthusiast</h2>

        <p>
          IT Systems Engineer with hands-on experience in enterprise infrastructure,
          Active Directory, Azure environments and IT operations. Focused on building
          reliable systems and advancing into cybersecurity.
        </p>

        <div className="icons">
          <a href="https://github.com/salihdemiir"><Icon>G</Icon></a>
          <a href="https://linkedin.com/in/salih-demiir"><Icon>in</Icon></a>
          <a href="mailto:salihdemiir@hotmail.com"><Icon>@</Icon></a>
          <a href="/Salih_Demir_CV.pdf"><Icon>CV</Icon></a>
        </div>

        <div className="section">
          <h2>Experience</h2>

          {experiences.map((e, i) => (
            <div className="card" key={i}>
              <h3>{e.title}</h3>
              <p>{e.company} — {e.period}</p>
              <p>{e.desc}</p>
            </div>
          ))}
        </div>

        <div className="section">
          <h2>Contact</h2>

          <div className="btns">
            <a className="btn" href="mailto:salihdemiir@hotmail.com">Email</a>
            <a className="btn" href="https://linkedin.com/in/salih-demiir">LinkedIn</a>
            <a className="btn" href="https://github.com/salihdemiir">GitHub</a>
            <a className="btn" href="/Salih_Demir_CV.pdf">Download CV</a>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;