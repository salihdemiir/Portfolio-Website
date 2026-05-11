import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowRight,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../styles/home.css";

function Home() {
  return (
    <main className="portfolio-home">
      <section className="portfolio-hero">
        <div className="hero-content">
          <span className="hero-eyebrow">
            İstanbul / Türkiye · IT & Software
          </span>

          <h1>
            Salih Demir
            <span>IT, Yazılım ve Siber Güvenlik odağında gelişen teknoloji profesyoneli.</span>
          </h1>

          <p>
            IT destek, sistem yönetimi, web geliştirme ve siber güvenlik
            alanlarında kendini geliştiren; modern, güvenilir ve sürdürülebilir
            dijital çözümler üretmeye odaklanan bir yazılım mühendisiyim.
          </p>

          <div className="hero-actions">
            <Link to="/projeler" className="primary-btn">
              Projelerimi İncele <FaArrowRight />
            </Link>

            <Link to="/iletisim" className="secondary-btn">
              İletişime Geç
            </Link>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/salihdemiir" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/salih-demir" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>

            <a href="mailto:salihdemir5335@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-card">
            <div className="profile-avatar">
              SD
            </div>

            <h2>Salih Demir</h2>

            <p>Software Engineer · IT Specialist</p>

            <div className="profile-info">
              <span>
                <FaMapMarkerAlt /> İstanbul
              </span>

              <span>Open to Work</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;