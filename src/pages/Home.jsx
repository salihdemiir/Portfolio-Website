import { Link } from "react-router-dom";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowRight,
  FaMapMarkerAlt,
} from "react-icons/fa";
import profileImage from "../assets/images/profile.png";
import "../styles/home.css";

function Home() {
  return (
    <main className="portfolio-home">
      <section className="portfolio-hero">
        <div className="hero-wrapper">
          <div className="hero-content">
            <span className="hero-eyebrow">
              İstanbul / Türkiye · IT & Software
            </span>

            <h1>
              Salih Demir
              <span>
                IT, Yazılım ve Siber Güvenlik odağında gelişen teknoloji
                profesyoneli.
              </span>
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
              <a
                href="https://github.com/salihdemiir"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/salih-demiir"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a href="mailto:salihdemiir@hotmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="hero-stats">
  <div>
    <strong>3+</strong>
    <span>Odak Alanı</span>
  </div>

  <div>
    <strong>IT</strong>
    <span>Kurumsal Deneyim</span>
  </div>

  <div>
    <strong>TR / EN</strong>
    <span>Çalışma Dili</span>
  </div>
</div>

          <div className="hero-card">
            <div className="profile-card">
              <div className="profile-photo-wrap">
  <img
    src={profileImage}
    alt="Salih Demir"
    className="profile-photo"
  />
</div>

              <h2>Salih Demir</h2>

              <p>Software Engineer · IT Specialist</p>
<div className="profile-tags">
  <span>Software</span>
  <span>IT Operations</span>
  <span>Cyber Security</span>
</div>

<div className="profile-availability">
  <span></span>
  Available for opportunities
</div>
              <div className="profile-info">
                <span>
                  <FaMapMarkerAlt /> İstanbul
                </span>

                <span className="work-status">Open to Work</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise-section">
        <div className="section-header">
          <span>Uzmanlık Alanları</span>
          <h2>Teknik altyapımı 4 güçlü alanda geliştiriyorum.</h2>
        </div>

        <div className="expertise-grid">
          <div className="expertise-card">
            <h3>IT Support</h3>
            <p>
              Son kullanıcı desteği, cihaz yönetimi, ticket süreçleri ve
              kurumsal IT operasyonları.
            </p>
          </div>

          <div className="expertise-card">
            <h3>System Administration</h3>
            <p>
              Windows sistemleri, Microsoft 365, kullanıcı yönetimi ve altyapı
              süreçleri.
            </p>
          </div>

          <div className="expertise-card">
            <h3>Web Development</h3>
            <p>
              React, Vite, modern arayüzler, responsive web siteleri ve SEO
              odaklı projeler.
            </p>
          </div>

          <div className="expertise-card">
            <h3>Cyber Security</h3>
            <p>
              Güvenlik farkındalığı, temel siber güvenlik pratikleri ve sürekli
              gelişim odaklı yaklaşım.
            </p>
          </div>
        </div>
      </section>
      <section className="featured-projects-section">
  <div className="section-header">
    <span>Öne Çıkan Projeler</span>
    <h2>Gerçek ihtiyaçlara yönelik modern ve kullanılabilir projeler.</h2>
  </div>

  <div className="projects-grid">
    <div className="project-card">
      <div className="project-tag">Portfolio</div>
      <h3>Personal Portfolio Website</h3>
      <p>
        Kişisel marka, teknik yetkinlikler, projeler ve iletişim alanlarını
        tek bir profesyonel yapıda sunan modern portföy sitesi.
      </p>

      <Link to="/projeler" className="project-link">
        Detayları Gör <FaArrowRight />
      </Link>
    </div>

    <div className="project-card featured">
      <div className="project-tag">DemirTech</div>
      <h3>DemirTech Solutions</h3>
      <p>
        Web tasarım, IT danışmanlık ve siber güvenlik odaklı hizmetleri
        premium bir marka yapısıyla sunmayı hedefleyen teknoloji sayfası.
      </p>

      <Link to="/demirtech" className="project-link">
        DemirTech’i İncele <FaArrowRight />
      </Link>
    </div>

    <div className="project-card">
      <div className="project-tag">Legal Website</div>
      <h3>Law Firm Website</h3>
      <p>
        Avukatlık hizmetleri için güven veren, SEO odaklı, responsive ve
        kurumsal görünüme sahip modern hukuk web sitesi tasarımı.
      </p>

      <Link to="/projeler" className="project-link">
        Detayları Gör <FaArrowRight />
      </Link>
    </div>
  </div>
</section>
<section className="career-section">
  <div className="career-content">
    <div>
      <span className="career-eyebrow">Kariyer Yönüm</span>

      <h2>
        IT altyapısı, yazılım geliştirme ve siber güvenliği aynı çizgide
        birleştiriyorum.
      </h2>

      <p>
        Hedefim; kurumsal IT tecrübemi yazılım mühendisliği bakış açısıyla
        güçlendirerek daha güvenli, sürdürülebilir ve ölçeklenebilir dijital
        sistemler geliştirmek.
      </p>

      <Link to="/iletisim" className="career-btn">
        Benimle İletişime Geç <FaArrowRight />
      </Link>
    </div>

    <div className="tech-stack">
      <span>React</span>
      <span>JavaScript</span>
      <span>Node.js</span>
      <span>Microsoft 365</span>
      <span>Azure / Entra ID</span>
      <span>Windows Server</span>
      <span>SQL</span>
      <span>Cyber Security</span>
      <span>ITSM</span>
      <span>Git / GitHub</span>
    </div>
  </div>
</section>
<section className="home-cta-section">
  <div className="home-cta-content">
    <span>Birlikte Çalışalım</span>

    <h2>
      Modern, güvenilir ve profesyonel dijital çözümler için iletişime geçelim.
    </h2>

    <p>
      Web geliştirme, IT destek, sistem yönetimi ve siber güvenlik odaklı
      projelerde değer üretmeye hazırım.
    </p>

    <div className="home-cta-actions">
      <Link to="/iletisim" className="primary-btn">
        İletişime Geç <FaArrowRight />
      </Link>

      <Link to="/projeler" className="secondary-btn">
        Projelerimi İncele
      </Link>
    </div>
  </div>
</section>
    </main>
  );
}

export default Home;