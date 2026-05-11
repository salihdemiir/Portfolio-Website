import "../styles/Experience.css";

function Experience() {
  const experiences = [
    {
      company: "Novartis",
      role: "IT Helpdesk & System Support",
      date: "2024 - 2025",
      text:
        "Kurumsal kullanıcı desteği, Microsoft 365 yönetimi, cihaz yönetimi ve sistem desteği süreçlerinde görev aldım.",
    },

    {
      company: "Inditex",
      role: "IT Support Specialist",
      date: "2023 - 2024",
      text:
        "Zara, Bershka ve Massimo Dutti mağazalarında IT operasyonları, cihaz yönetimi ve kullanıcı desteği sağladım.",
    },

    {
      company: "Arvato Logistics",
      role: "IT Specialist",
      date: "2022 - 2023",
      text:
        "Depo ve ofis IT altyapılarında teknik destek, network süreçleri ve sistem operasyonlarında görev aldım.",
    },
  ];

  return (
    <main className="experience-page">
      <section className="experience-hero">
        <span>DENEYİM</span>

        <h1>
          IT operasyonları, kullanıcı desteği ve sistem yönetimi
          alanlarında deneyim.
        </h1>
      </section>

      <section className="timeline-section">
        {experiences.map((item, index) => (
          <div className="timeline-card" key={index}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>{item.date}</span>

              <h2>{item.company}</h2>

              <h3>{item.role}</h3>

              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Experience;