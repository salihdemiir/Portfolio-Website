import { FaArrowRight } from "react-icons/fa";

import "../styles/DemirTech.css";

function DemirTech() {
  return (
    <main className="demirtech-page">
      <section className="demirtech-hero">
        <span>DEMIRTECH</span>

        <h1>
          Modern web, IT ve siber güvenlik çözümleri sunan dijital teknoloji markası.
        </h1>

        <p>
          DemirTech; web geliştirme, kurumsal IT çözümleri, sunucu altyapıları,
          dijital dönüşüm ve güvenlik odaklı sistemler üzerine çalışan teknoloji markasıdır.
        </p>

        <a
          href="https://demirtech.tr"
          target="_blank"
          rel="noreferrer"
          className="demirtech-btn"
        >
          DemirTech’i Ziyaret Et <FaArrowRight />
        </a>
      </section>

      <section className="demirtech-grid">
        <div className="demirtech-card">
          <h2>Web Development</h2>

          <p>
            Modern, hızlı ve SEO odaklı web siteleri geliştiriyoruz.
          </p>
        </div>

        <div className="demirtech-card">
          <h2>IT Solutions</h2>

          <p>
            Kurumsal IT destek, sistem yönetimi ve teknik operasyon çözümleri sunuyoruz.
          </p>
        </div>

        <div className="demirtech-card">
          <h2>Cyber Security</h2>

          <p>
            Güvenlik odaklı altyapılar ve siber güvenlik farkındalığı üzerine çalışıyoruz.
          </p>
        </div>
      </section>
    </main>
  );
}

export default DemirTech;