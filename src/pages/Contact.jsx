import { useState } from "react";
import emailjs from "@emailjs/browser";

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
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: "",
      error: "",
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        loading: false,
        success: "Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağım.",
        error: "",
      });

      setFormData({
        from_name: "",
        from_email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        loading: false,
        success: "",
        error: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
      });
    }
  };

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
              <strong>salihdemir@hotmail.com</strong>
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

            <a href="mailto:salihdemir@hotmail.com" aria-label="E-posta">
              <FaEnvelope />
            </a>
          </div>

          <a
            href="/Salih-Demir-CV.pdf"
            download
            className="cv-download-btn"
          >
            CV İndir <FaDownload />
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Bana Yaz</h2>

          <input
            type="text"
            name="from_name"
            placeholder="Ad Soyad"
            value={formData.from_name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="E-Posta"
            value={formData.from_email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Telefon"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Mesajınızı yazınız"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={status.loading}>
            {status.loading ? "Gönderiliyor..." : "Mesaj Gönder"}
          </button>

          {status.success && <p className="form-success">{status.success}</p>}
          {status.error && <p className="form-error">{status.error}</p>}
        </form>
      </section>
    </main>
  );
}

export default Contact;