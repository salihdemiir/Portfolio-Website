import { useMemo, useState } from "react";

const formatTL = (n) => `₺${n.toLocaleString("tr-TR")}`;

const groups = [
  {
    id: "platform",
    title: "Uygulama Platformu",
    subtitle: "iOS mu, Android mi, ikisi birden mi?",
    type: "single",
    options: [
      { id: "ios", icon: "🍎", title: "Apple iOS", desc: "iPhone & iPad", price: 45000 },
      { id: "android", icon: "🤖", title: "Google Android", desc: "Phone & Tablet", price: 45000 },
      { id: "both", icon: "📱", title: "iOS + Android", desc: "Her iki platform", price: 80000 },
    ],
  },
  {
    id: "auth",
    title: "Kullanıcı Altyapısı",
    subtitle: "Üyelik ve giriş sistemi gerekiyor mu?",
    type: "single",
    options: [
      { id: "none", icon: "🚫", title: "Olmayacak", desc: "Hesapsız kullanım", price: 0 },
      { id: "login", icon: "🔐", title: "Giriş Ekranı", desc: "Sadece login", price: 12000 },
      { id: "register", icon: "🪪", title: "Kayıt + Giriş", desc: "Tam üyelik", price: 22000 },
    ],
  },
  {
    id: "storage",
    title: "Veri Saklama",
    subtitle: "Veriler nerede tutulacak?",
    type: "single",
    options: [
      { id: "local", icon: "📦", title: "Yerel Depolama", desc: "Cihaz üzerinde", price: 6000 },
      { id: "cloud", icon: "☁️", title: "Uzak Veritabanı", desc: "Bulut tabanlı", price: 25000 },
    ],
  },
  {
    id: "modules",
    title: "Kullanılacak Modüller",
    subtitle: "İstediğiniz kadar seçin",
    type: "multi",
    options: [
      { id: "push", icon: "🔔", title: "Push Bildirim", price: 7000 },
      { id: "map", icon: "🗺️", title: "Harita", price: 12000 },
      { id: "gps", icon: "📍", title: "Konum / GPS", price: 10000 },
      { id: "qr", icon: "▣", title: "QR / Barkod", price: 9000 },
      { id: "camera", icon: "📷", title: "Kamera", price: 9000 },
      { id: "audio", icon: "🎧", title: "Ses Oynatıcı", price: 8000 },
      { id: "bluetooth", icon: "🛰️", title: "Bluetooth", price: 15000 },
      { id: "multi", icon: "🌍", title: "Çoklu Dil", price: 9000 },
      { id: "category", icon: "📦", title: "Ürün Kategorileri", price: 12000 },
      { id: "detail", icon: "🔍", title: "Ürün Detayları", price: 10000 },
      { id: "basket", icon: "🛒", title: "Sepet / Sipariş", price: 25000 },
      { id: "payment", icon: "💳", title: "Uygulama İçi Ödeme", price: 30000 },
      { id: "gallery", icon: "🖼️", title: "Resim Galerisi", price: 8000 },
      { id: "video", icon: "🎬", title: "Video Oynatıcı", price: 9000 },
      { id: "upload", icon: "📁", title: "Dosya Yükleme", price: 12000 },
      { id: "calendar", icon: "📅", title: "Etkinlik Takvimi", price: 9000 },
    ],
  },
  {
    id: "design",
    title: "Uygulama Tasarımı",
    subtitle: "Tasarım kapsamını belirleyin",
    type: "single",
    options: [
      { id: "standard", icon: "📐", title: "Standart Tasarım", desc: "Dikey ekran", price: 12000 },
      { id: "landscape", icon: "↔️", title: "Yatay Ekran", desc: "Landscape destekli", price: 10000 },
      { id: "tablet", icon: "📱", title: "Tablet Uyumlu", desc: "iPad / büyük ekran", price: 15000 },
      { id: "creative", icon: "✨", title: "Kreatif Tasarım", desc: "Özel UI / animasyon", price: 30000 },
    ],
  },
  {
    id: "admin",
    title: "Admin Paneli",
    subtitle: "İçerikleri yönetmek için web tabanlı panel ister misiniz?",
    type: "single",
    options: [
      { id: "noadmin", icon: "🚫", title: "İstemiyorum", desc: "Gerekmiyor", price: 0 },
      { id: "basicadmin", icon: "🖥️", title: "Basit Admin Panel", desc: "Temel yönetim", price: 35000 },
      { id: "proadmin", icon: "🚀", title: "Gelişmiş Admin Panel", desc: "Tam kapsamlı", price: 65000 },
    ],
  },
  {
    id: "ai",
    title: "Yapay Zeka Özellikleri",
    subtitle: "Opsiyonel AI modülleri",
    type: "multi",
    options: [
      { id: "chatbot", icon: "💬", title: "AI Chatbot", price: 30000 },
      { id: "vision", icon: "🖼️", title: "Görüntü Tanıma", price: 45000 },
      { id: "recommend", icon: "🎯", title: "Öneri Motoru", price: 35000 },
      { id: "voice", icon: "🎤", title: "Sesli Komut", price: 40000 },
      { id: "content", icon: "✍️", title: "İçerik Üretici", price: 25000 },
      { id: "search", icon: "🔎", title: "Akıllı Arama", price: 25000 },
    ],
  },
];

function DemirTechCalculator() {
  const [single, setSingle] = useState({
    platform: "both",
    auth: "register",
    storage: "cloud",
    design: "creative",
    admin: "basicadmin",
  });

  const [multi, setMulti] = useState({
    modules: ["push", "map", "gps", "qr", "camera", "multi"],
    ai: ["chatbot"],
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    detail: "",
  });

  const total = useMemo(() => {
    let sum = 0;

    groups.forEach((group) => {
      if (group.type === "single") {
        const selected = group.options.find((o) => o.id === single[group.id]);
        sum += selected?.price || 0;
      } else {
        const selectedIds = multi[group.id] || [];
        selectedIds.forEach((id) => {
          const item = group.options.find((o) => o.id === id);
          sum += item?.price || 0;
        });
      }
    });

    return sum;
  }, [single, multi]);

  const selectedText = groups
    .map((group) => {
      if (group.type === "single") {
        const item = group.options.find((o) => o.id === single[group.id]);
        return `${group.title}: ${item?.title || "-"}`;
      }

      const selectedItems = group.options.filter((o) =>
        (multi[group.id] || []).includes(o.id)
      );

      return `${group.title}: ${
        selectedItems.length ? selectedItems.map((x) => x.title).join(", ") : "-"
      }`;
    })
    .join("\n");

  const whatsappMessage = encodeURIComponent(
    `Merhaba, DemirTech üzerinden teklif almak istiyorum.\n\n${selectedText}\n\nTahmini bütçe: ${formatTL(
      total
    )}\n\nAd Soyad: ${form.name || "-"}\nTelefon: ${form.phone || "-"}\nE-posta: ${
      form.email || "-"
    }\nŞirket: ${form.company || "-"}\nProje Detayı: ${form.detail || "-"}`
  );

  const toggleMulti = (groupId, optionId) => {
    setMulti((prev) => {
      const current = prev[groupId] || [];
      return {
        ...prev,
        [groupId]: current.includes(optionId)
          ? current.filter((id) => id !== optionId)
          : [...current, optionId],
      };
    });
  };

  return (
    <section className="dt-calc-page">
      <div className="dt-calc-container">
        <div className="dt-calc-header">
          <span>Anlık & Ücretsiz</span>
          <h1>DemirTech Proje Maliyet Hesaplama</h1>
          <p>Özellikleri seçin, tahmini fiyatı anında görün. Sonra teklif alın.</p>
        </div>

        {groups.map((group) => {
          const selectedCount =
            group.type === "multi" ? multi[group.id]?.length || 0 : null;

          return (
            <div className="dt-group" key={group.id}>
              <div className="dt-group-head">
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.subtitle}</p>
                </div>

                {group.type === "multi" && (
                  <strong>{selectedCount} seçili</strong>
                )}
              </div>

              <div className={`dt-options ${group.type === "multi" ? "multi" : ""}`}>
                {group.options.map((option) => {
                  const active =
                    group.type === "single"
                      ? single[group.id] === option.id
                      : multi[group.id]?.includes(option.id);

                  return (
                    <button
                      type="button"
                      key={option.id}
                      className={`dt-option ${active ? "active" : ""}`}
                      onClick={() =>
                        group.type === "single"
                          ? setSingle((prev) => ({
                              ...prev,
                              [group.id]: option.id,
                            }))
                          : toggleMulti(group.id, option.id)
                      }
                    >
                      <span className="dt-icon">{option.icon}</span>

                      <span className="dt-option-text">
                        <b>{option.title}</b>
                        {option.desc && <small>{option.desc}</small>}
                      </span>

                      <span className="dt-check">{active ? "✓" : ""}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div className="dt-offer-box">
          <div className="dt-offer-title">
            <span>Projeye Başlayalım</span>
            <h2>Ücretsiz Teklif Alın</h2>
            <p>WhatsApp’tan hızlıca yazın veya formu doldurun.</p>
          </div>

          <div className="dt-offer-actions">
            <a
              href={`https://wa.me/905364375319?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="dt-whatsapp"
            >
              WhatsApp’tan Yazın
            </a>

            <a href="tel:+905364375319" className="dt-call">
              Bizi Arayın
            </a>
          </div>

          <div className="dt-form-grid">
            <input
              placeholder="Adınız Soyadınız"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="E-posta"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              placeholder="+90 5__ ___ __ __"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <input
              placeholder="Şirket adı (opsiyonel)"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
          </div>

          <textarea
            placeholder="Uygulamanız ne yapacak? Hedef kitleniz kim?"
            value={form.detail}
            onChange={(e) => setForm({ ...form, detail: e.target.value })}
          />

          <div className="dt-total">
            <span>Seçimlerinize göre tahmini toplam maliyet</span>
            <h2>{formatTL(total)}</h2>
            <small>Rakamlar tahminidir. Kesin teklif için görüşme yapılır.</small>
          </div>

          <a
            href={`https://wa.me/905364375319?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="dt-submit"
          >
            Ücretsiz Teklif Talep Et →
          </a>
        </div>
      </div>
    </section>
  );
}

export default DemirTechCalculator;