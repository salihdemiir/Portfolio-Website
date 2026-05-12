import "../styles/Experience.css";

function Experience() {
  const experiences = [
    {
      company: "Arvato Logistics",
      role: "IT Helpdesk & System Support",
      date: "2025 - 2026",
      text:
        "Depo ve ofis ortamlarında kullanıcı desteği, donanım-yazılım kurulumu, sistem sürekliliği ve IT operasyon süreçlerine destek sağladım.",
    },

    {
      company: "Novartis",
      role: "IT Support Specialist",
      date: "2024 - 2025",
      text:
        "Kurumsal kullanıcı desteği, Microsoft 365 yönetimi, cihaz yönetimi ve sistem desteği süreçlerinde görev aldım.",
    },

    {
      company: "Inditex",
      role: "IT Specialist",
      date: "2023 - 2024",
      text:
        "Zara, Bershka ve Massimo Dutti mağazalarında IT operasyonları, cihaz yönetimi ve kullanıcı desteği sağladım.",
    },
    {
      company: "Mobven",
      role: "Android Developer Intern",
      date: "2023 - 2024",
      text:
        "MARVEL benzeri bir film ve dizi uygulaması geliştirme fırsatı elde ettim. Bu staj deneyimi, Android geliştirme becerilerimi uygulama ve gerçek dünya projelerinde çalışma fırsatı sundu.",
    },
    {
      company: "Diversey",
      role: "Information Technology Intern",
      date: "2022 - 2023",
      text:
        "Sistem yönetimi, ağ altyapısı ve kullanıcı destek hizmetleri konularında pratik deneyim kazandım.Bu staj, IT operasyonlarının temel prensiplerini öğrenme ve uygulama fırsatı sağladı.",
    },
    {
      company: "Ranna Digital Works",
      role: "React Native Mobile Application Developer Intern",
      date: "2021 - 2022",
      text:
        "React Native Developer olarak staj yaptım ve sağlık turizmi ile market uygulamaları üzerine projelerde görev aldım. Bu deneyim, mobil uygulama geliştirme süreçlerini öğrenme ve gerçek dünya projelerinde çalışma fırsatı sundu.",
    },
  ];

  return (
    <main className="experience-page">
      <section className="experience-hero">
        <span>DENEYİM</span>

        <h1>
          System administration, IT support ve siber güvenlik alanlarında edindiğim deneyimlerimle
          teknik altyapımı güçlendiriyorum.
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