import { Link } from "react-router-dom";
import "../styles/home.css";

/* ICONS */
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56 0-.27-.01-1.15-.02-2.08-3.2.71-3.88-1.37-3.88-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.73.08-.72.08-.72 1.16.08 1.77 1.22 1.77 1.22 1.03 1.79 2.71 1.27 3.37.97.1-.76.4-1.27.73-1.56-2.56-.3-5.25-1.3-5.25-5.8 0-1.28.45-2.33 1.2-3.15-.12-.3-.52-1.5.11-3.13 0 0 .98-.32 3.2 1.2a10.9 10.9 0 0 1 5.82 0c2.22-1.52 3.2-1.2 3.2-1.2.63 1.63.23 2.83.11 3.13.75.82 1.2 1.87 1.2 3.15 0 4.51-2.69 5.49-5.26 5.79.41.36.78 1.09.78 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56a11.53 11.53 0 0 0 7.85-10.9C23.5 5.66 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5ZM.5 8h4V23h-4V8Zm7 0h3.83v2.05h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V23h-4v-7.74c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.98 2.01-2.98 4.1V23h-4V8Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M2.25 4.5h19.5A2.25 2.25 0 0 1 24 6.75v10.5A2.25 2.25 0 0 1 21.75 19.5H2.25A2.25 2.25 0 0 1 0 17.25V6.75A2.25 2.25 0 0 1 2.25 4.5Zm0 1.5v.2l9.75 6.83 9.75-6.83V6H2.25Zm19.5 11.99V8.03l-9.32 6.53a.75.75 0 0 1-.86 0L2.25 8.03v9.96h19.5Z" />
    </svg>
  );
}

function CVIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M6.75 2.25h7.19c.6 0 1.17.24 1.6.66l3.8 3.8c.42.43.66 1 .66 1.6v11.94A2.25 2.25 0 0 1 17.75 22.5H6.25A2.25 2.25 0 0 1 4 20.25V4.5a2.25 2.25 0 0 1 2.25-2.25Zm6.75 1.81V7.5h3.44L13.5 4.06ZM8.25 11.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 3.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0-7.5a.75.75 0 0 0 0 1.5H11a.75.75 0 0 0 0-1.5H8.25Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M23.5 6.2a2.9 2.9 0 0 0-2-2.05C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.5.65a2.9 2.9 0 0 0-2 2.05A30.5 30.5 0 0 0 0 12a30.5 30.5 0 0 0 .5 5.8 2.9 2.9 0 0 0 2 2.05c1.8.65 9.5.65 9.5.65s7.7 0 9.5-.65a2.9 2.9 0 0 0 2-2.05A30.5 30.5 0 0 0 24 12a30.5 30.5 0 0 0-.5-5.8ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

function Home() {
  const skills = [
    "IT Infrastructure",
    "Microsoft 365",
    "Entra ID",
    "Network Support",
    "Cyber Security",
    "React & Vite",
  ];

  const stats = [
    { value: "3+", label: "Kurumsal deneyim" },
    { value: "10+", label: "Teknik yetkinlik" },
    { value: "24/7", label: "Gelişim odağı" },
  ];

  return (
    <div className="home-premium">
      <section className="home-hero-premium">
        <div className="home-left">
          <span className="home-kicker">Software Engineer • IT Specialist</span>

          <h1>
            Modern IT, Software
            <br />
            & Security Mindset
          </h1>

          <p>
            Kurumsal IT destek, sistem altyapısı, kullanıcı yönetimi ve modern
            web teknolojileri alanında deneyim sahibi bir yazılım mühendisiyim.
          </p>

          <div className="home-buttons">
            <Link to="/demirtech" className="home-primary">
              DemirTECH’i Gör
            </Link>

            <a href="#projects" className="home-secondary">
              Projelerim
            </a>
          </div>

          <div className="home-socials">
            <a href="https://github.com/salihdemiir" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>

            <a href="https://www.linkedin.com/in/salih-demiir/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>

            <a href="mailto:demirtech@demirsalih.com.tr" target="_blank" rel="noreferrer">  
              <MailIcon />
            </a>

            <a href="/Salih_Demir_CV.pdf" target="_blank" rel="noreferrer">
              <CVIcon />
            </a>

            <a href="https://www.youtube.com/@demirtech" target="_blank" rel="noreferrer">
              <YouTubeIcon />
            </a>
          </div>

          <div className="home-skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="home-right">
          <div className="profile-card">
            <div className="profile-avatar">SD</div>
            <h3>Salih Demir</h3>
            <p>Software Engineer</p>
          </div>
        </div>
      </section>

      <section className="home-stats">
        {stats.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section id="projects" className="home-projects-premium">
        <h2>Projeler</h2>

        <div className="premium-project-grid">
          <Link to="/demirtech" className="premium-project-card">
            <h3>DemirTECH</h3>
          </Link>

          <div className="premium-project-card">
            <h3>Portfolio</h3>
          </div>

          <div className="premium-project-card">
            <h3>IT Experience</h3>
          </div>
        </div>
      </section>

      <section className="location-section">
        <h2>📍 Istanbul Office</h2>

        <div className="map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.5448548622717!2d29.110607477780846!3d40.96954862180607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac73129044967%3A0xc1cc76d78be4777e!2sDemirTech!5e0!3m2!1str!2str!4v1777457494252!5m2!1str!2str"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DemirTech Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Home;