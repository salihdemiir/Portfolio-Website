import "../styles/About.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <span>HAKKIMDA</span>

        <h1>
          IT altyapısı, yazılım geliştirme ve siber güvenlik alanlarında
          kendini geliştiren bir teknoloji profesyoneliyim.
        </h1>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Ben kimim?</h2>

          <p>
            Ben Salih Demir. Yazılım mühendisliği mezunuyum ve kariyerimi IT,
            sistem yönetimi, yazılım geliştirme ve siber güvenlik odağında
            ilerletiyorum. Kurumsal IT destek tecrübem sayesinde kullanıcı,
            sistem, ağ ve operasyon süreçlerini gerçek iş ortamlarında deneyimledim.
          </p>

          <p>
            Bugün hem teknik operasyon tarafında güçlü kalmak hem de modern web
            teknolojileriyle üretim yapmak istiyorum. Uzun vadeli hedefim;
            yazılım, altyapı ve güvenlik taraflarını birleştiren güçlü bir
            teknoloji uzmanı olmak.
          </p>
        </div>

        <div className="about-stats">
          <div>
            <strong>3+</strong>
            <span>Kurumsal Deneyim</span>
          </div>

          <div>
            <strong>IT</strong>
            <span>Support & System</span>
          </div>

          <div>
            <strong>Web</strong>
            <span>React Projects</span>
          </div>

          <div>
            <strong>Cyber</strong>
            <span>Security Focus</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;