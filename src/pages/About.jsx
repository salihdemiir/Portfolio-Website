import "../styles/About.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <span>HAKKIMDA</span>

        <h1>
          İstanbul’da yetişen, yazılım mühendisliği eğitimi almış ve kariyerini
          IT, yazılım ve siber güvenlik alanlarında geliştiren bir teknoloji
          profesyoneliyim.
        </h1>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Ben kimim?</h2>

          <p>
            Ben Salih Demir. 1998 yılında İstanbul Kadıköy’de dünyaya geldim ve
            yaşamımı İstanbul’da sürdürüyorum. Teknolojiye olan ilgim, eğitim
            hayatım ve kurumsal iş deneyimlerimle birlikte zamanla daha güçlü
            bir kariyer hedefi haline geldi.
          </p>

          <p>
            Yazılım mühendisliği eğitimimi Doğuş Üniversitesi’nde tam burslu
            olarak tamamladım. Üniversite hayatım boyunca yazılım geliştirme,
            algoritmalar, veri yapıları, web teknolojileri, veritabanı yönetimi
            ve ağ güvenliği gibi alanlarda kendimi geliştirdim.
          </p>

          <p>
            Kariyerimde kurumsal IT operasyonları, son kullanıcı desteği, cihaz
            yönetimi, sistem erişimleri ve altyapı sürekliliği süreçlerinde
            görev aldım. Arvato Logistics, Novartis ve Inditex gibi kurumsal
            yapılarda edindiğim deneyimler sayesinde teknik problemlere daha
            analitik, hızlı ve çözüm odaklı yaklaşmayı öğrendim.
          </p>

          <p>
            Bugün kariyerimi; IT altyapısı, modern web geliştirme ve siber
            güvenlik odağında ilerletiyorum. Uzun vadeli hedefim; yazılım,
            sistem ve güvenlik disiplinlerini bir araya getiren, güvenilir ve
            sürdürülebilir dijital çözümler üreten güçlü bir teknoloji uzmanı
            olmak.
          </p>
        </div>

        <div className="about-stats">
          <div>
            <strong>1998</strong>
            <span>İstanbul / Kadıköy</span>
          </div>

          <div>
            <strong>Doğuş</strong>
            <span>Yazılım Mühendisliği</span>
          </div>

          <div>
            <strong>IT</strong>
            <span>Kurumsal Operasyon</span>
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