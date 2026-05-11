import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../styles/Contact.css";

function Contact() {
  return (
    <main className="portfolio-contact-page">
      <section className="contact-hero">
        <span>İLETİŞİM</span>

        <h1>
          Yeni projeler, iş fırsatları ve teknoloji üzerine bağlantı kuralım.
        </h1>
      </section>

      <section className="contact-layout">
        <div className="contact-left">
          <div className="contact-card">
            <FaEnvelope />

            <div>
              <h3>E-Posta</h3>

              <p>salihdemir5335@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <FaLinkedinIn />

            <div>
              <h3>LinkedIn</h3>

              <p>linkedin.com/in/salih-demir</p>
            </div>
          </div>

          <div className="contact-card">
            <FaGithub />

            <div>
              <h3>GitHub</h3>

              <p>github.com/salihdemiir</p>
            </div>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt />

            <div>
              <h3>Konum</h3>

              <p>İstanbul / Türkiye</p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form">
            <input type="text" placeholder="Ad Soyad" />

            <input type="email" placeholder="E-Posta" />

            <textarea placeholder="Mesajınızı yazın"></textarea>

            <button type="submit">
              Mesaj Gönder
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;