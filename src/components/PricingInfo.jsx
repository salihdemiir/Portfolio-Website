function PricingInfo() {
  const reasons = [
    {
      icon: "🎯",
      title: "Sonuç Odaklı Yaklaşım",
      text: "Sadece kod yazmıyoruz; projenizin hedeflerini, kullanıcı deneyimini ve büyüme potansiyelini düşünerek geliştiriyoruz.",
    },
    {
      icon: "⚡",
      title: "Hızlı Teslimat",
      text: "Planlı ve düzenli geliştirme süreciyle projeyi mümkün olan en kısa sürede yayına hazır hale getiriyoruz.",
    },
    {
      icon: "📱",
      title: "Web & Mobil Uzmanlığı",
      text: "Kurumsal web sitesi, mobil uygulama ve modern dijital çözümleri tek çatı altında sunuyoruz.",
    },
    {
      icon: "🔐",
      title: "Şeffaf Fiyatlandırma",
      text: "Gizli maliyet yok. Proje başlamadan önce kapsam, fiyat ve teslim süreci netleştirilir.",
    },
    {
      icon: "🛡️",
      title: "Yayın Sonrası Destek",
      text: "Proje yayına alındıktan sonra bakım, güncelleme ve teknik destek süreçlerinde yanınızdayız.",
    },
    {
      icon: "💬",
      title: "Doğrudan İletişim",
      text: "Projenizi geliştiren kişiyle doğrudan iletişim kurarsınız. Süreç boyunca hızlı geri dönüş alırsınız.",
    },
  ];

  const faqs = [
    {
      q: "Web sitesi yaptırmak ne kadar sürer?",
      a: "Basit bir portfolio veya kurumsal web sitesi genellikle 5-10 gün içinde hazırlanabilir. Daha kapsamlı projelerde süre ihtiyaca göre değişir.",
    },
    {
      q: "Mobil uygulama maliyeti neden değişken?",
      a: "Platform seçimi, kullanıcı girişi, admin paneli, ödeme sistemi, harita, bildirim, AI özellikleri gibi modüller maliyeti doğrudan etkiler.",
    },
    {
      q: "Teklif almadan önce ne hazırlamalıyım?",
      a: "Projenin amacı, hedef kitlesi, istenen özellikler ve örnek alınabilecek siteler ya da uygulamalar hazır olursa süreç daha hızlı ilerler.",
    },
    {
      q: "Yayınlandıktan sonra destek veriyor musunuz?",
      a: "Evet. Yayın sonrası bakım, küçük düzenlemeler, hata kontrolleri ve teknik destek için ayrıca destek sunulabilir.",
    },
    {
      q: "DemirTech hangi hizmetleri sunuyor?",
      a: "Web sitesi, mobil uygulama, IT danışmanlık, Microsoft 365 desteği, temel siber güvenlik farkındalığı ve dijital dönüşüm çözümleri sunar.",
    },
  ];

  return (
    <section className="dt-info-section">
      <div className="dt-info-container">
        <div className="dt-price-block">
          <h2>Proje Geliştirme Fiyatları 2026</h2>
          <p>Proje karmaşıklığına göre güncel tahmini maliyet aralıkları:</p>

          <div className="dt-price-list">
            <div>
              <span className="dot green"></span>
              <strong>Basit Web Sitesi</strong>
              <small>Portfolio, tanıtım sitesi, birkaç sayfa</small>
              <b>₺8K - ₺25K</b>
            </div>

            <div>
              <span className="dot blue"></span>
              <strong>Orta Karmaşıklık</strong>
              <small>Kurumsal site, form, SEO, özel tasarım</small>
              <b>₺25K - ₺80K</b>
            </div>

            <div>
              <span className="dot red"></span>
              <strong>Gelişmiş Proje</strong>
              <small>Mobil uygulama, admin panel, ödeme, AI</small>
              <b>₺80K+</b>
            </div>
          </div>
        </div>

        <div className="dt-why-block">
          <h2>Neden DemirTech?</h2>
          <p>Teknoloji çözümü seçerken doğru soruları sormak önemlidir.</p>

          <div className="dt-why-grid">
            {reasons.map((item, index) => (
              <div className="dt-why-card" key={index}>
                <span className="dt-why-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="dt-why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="dt-faq-block">
          <h2>Sık Sorulan Sorular</h2>
          <p>Proje yaptırmak isteyenlerin en çok merak ettiği sorular:</p>

          <div className="dt-faq-list">
            {faqs.map((item, index) => (
              <details key={index} className="dt-faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        <footer className="dt-footer">
          <strong>DemirTech</strong>
          <span>© 2026 DemirTech - Web, Mobil & IT Solutions</span>
          <a href="tel:+905364375319">📞 0536 437 53 19</a>
        </footer>
      </div>
    </section>
  );
}

export default PricingInfo;