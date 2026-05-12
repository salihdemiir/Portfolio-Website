import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaGithub,
  FaLinkedinIn,
  FaDownload,
} from "react-icons/fa";

import "../styles/Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span>İLETİŞİM</span>
        <h1>Benimle İletişime Geç</h1>
        <p>
          İş fırsatları, proje iş birlikleri veya teknoloji odaklı fikirler için
          benimle iletişime geçebilirsiniz.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <div className="contact-info-card">
            <FaPhoneAlt />
            <div>
              <span>Telefon</span>
              <strong>+90 536 437 53 19</strong>
            </div>
          </div>

          <div className="contact-info-card">
            <FaEnvelope />
            <div>
              <span>E-Posta</span>
              <strong>salihdemiir@hotmail.com</strong>
            </div>
          </div>

          <div className="contact-info-card">
            <FaMapMarkerAlt />
            <div>
              <span>Konum</span>
              <strong>Ataşehir / İstanbul</strong>
            </div>
          </div>

          <div className="contact-info-card">
            <FaClock />
            <div>
              <span>Uygunluk</span>
              <strong>İş fırsatları ve projeler için açık</strong>
            </div>
          </div>

          <div className="contact-socials">
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

            <a
              href="mailto:salihdemiir@hotmail.com"
              aria-label="E-posta"
            >
              <FaEnvelope />
            </a>
          </div>

          <a
            href="/Salih_Demir_CV.pdf"
            download
            className="cv-download-btn"
          >
            CV İndir <FaDownload />
          </a>
        </div>

        <form className="contact-form">
          <h2>Bana Yaz</h2>

          <input type="text" placeholder="Ad Soyad" />
          <input type="email" placeholder="E-Posta" />
          <input type="tel" placeholder="Telefon" />
          <textarea placeholder="Mesajınızı yazınız"></textarea>

          <button type="submit">Mesaj Gönder</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;