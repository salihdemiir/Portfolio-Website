import DemirTechCalculator from "../components/DemirTechCalculator";
import PricingInfo from "../components/PricingInfo";

function DemirTech() {
  return (
    <div className="demirtech-page">
      <nav className="dt-navbar">
        <a href="/" className="dt-nav-brand">
          Salih Demir
        </a>

        <div className="dt-nav-links">
          <a href="#services">Hizmetler</a>
          <a href="#calculator">Maliyet Hesapla</a>
          <a
            href="https://wa.me/905364375319?text=Merhaba%20DemirTECH%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="dt-nav-cta"
          >
            Teklif Al
          </a>
        </div>
      </nav>

      <section className="demirtech-hero">
        <div className="dt-brand-mark">
          <span className="dt-mark-icon">D</span>
          <div>
            <strong>DemirTech</strong>
            <small>Web • Mobile • IT • Cyber Security</small>
          </div>
        </div>

        <span className="demirtech-badge">Modern Technology Studio</span>

        <h1>
          Dijital Projelerin İçin
          <br />
          Güçlü Teknoloji Çözümleri
        </h1>

        <p>
          DemirTech; web tasarım, mobil uygulama, IT danışmanlık ve siber
          güvenlik farkındalığı alanlarında modern, hızlı ve güvenilir çözümler
          sunar.
        </p>

        <div className="demirtech-actions">
          <a href="#calculator">Maliyet Hesapla</a>
          <a
            href="https://wa.me/905364375319?text=Merhaba%20DemirTECH%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp’tan Teklif Al
          </a>
        </div>
      </section>

      <section id="services" className="demirtech-services">
        <div>
          <span>01</span>
          <h3>Web Sitesi</h3>
          <p>Kurumsal, kişisel ve sektörel modern web siteleri.</p>
        </div>

        <div>
          <span>02</span>
          <h3>Mobil Uygulama</h3>
          <p>iOS ve Android için modern mobil uygulama çözümleri.</p>
        </div>

        <div>
          <span>03</span>
          <h3>IT & Siber Güvenlik</h3>
          <p>Sistem, altyapı, Microsoft 365 ve temel güvenlik danışmanlığı.</p>
        </div>
      </section>

      <section id="calculator">
        <DemirTechCalculator />
      </section>

      <PricingInfo />
    </div>
  );
}

export default DemirTech;