import { useMemo, useState } from "react";

const services = [
  { id: "portfolio", name: "Portfolio / Kişisel Site", price: 8000 },
  { id: "corporate", name: "Kurumsal Web Sitesi", price: 15000 },
  { id: "lawyer", name: "Avukat Web Sitesi", price: 18000 },
  { id: "ecommerce", name: "E-Ticaret Sitesi", price: 30000 },
  { id: "seo", name: "SEO Temel Kurulum", price: 5000 },
  { id: "whatsapp", name: "WhatsApp Entegrasyonu", price: 2500 },
  { id: "domain", name: "Domain / Vercel Yayınlama", price: 3000 },
  { id: "admin", name: "Admin Panel", price: 15000 },
  { id: "support", name: "Aylık Bakım & Destek", price: 5000 },
];

function CostCalculator() {
  const [selected, setSelected] = useState([]);

  const total = useMemo(() => {
    return selected.reduce((sum, id) => {
      const item = services.find((service) => service.id === id);
      return sum + (item?.price || 0);
    }, 0);
  }, [selected]);

  const toggleService = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const selectedServices = services.filter((service) =>
    selected.includes(service.id)
  );

  const message = `Merhaba, DemirTech üzerinden teklif almak istiyorum.%0A%0ASeçilen hizmetler:%0A${selectedServices
    .map((item) => `- ${item.name}`)
    .join("%0A")}%0A%0ATahmini bütçe: ${total.toLocaleString(
    "tr-TR"
  )} TL`;

  return (
    <section id="calculator" className="section">
      <h3 className="section-label">Cost Calculator</h3>

      <div className="calculator-box">
        <div className="calculator-header">
          <span className="calculator-badge">DemirTech</span>
          <h2>Proje Maliyet Hesaplama</h2>
          <p>
            İhtiyacın olan hizmetleri seç, tahmini bütçeyi gör ve WhatsApp
            üzerinden hızlıca teklif al.
          </p>
        </div>

        <div className="calculator-grid">
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => toggleService(service.id)}
              className={`calculator-card ${
                selected.includes(service.id) ? "active" : ""
              }`}
            >
              <span>{service.name}</span>
              <strong>{service.price.toLocaleString("tr-TR")} TL</strong>
            </button>
          ))}
        </div>

        <div className="calculator-result">
          <div>
            <span>Tahmini Toplam</span>
            <h3>{total.toLocaleString("tr-TR")} TL</h3>
          </div>

          <a
            href={`https://wa.me/905364375319?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="calculator-btn"
          >
            WhatsApp’tan Teklif Al
          </a>
        </div>
      </div>
    </section>
  );
}

export default CostCalculator;