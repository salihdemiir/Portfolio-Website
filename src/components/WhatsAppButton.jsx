function WhatsAppButton() {
  const phoneNumber = "905364375319";
  const message = "Merhaba, DemirTech üzerinden bilgi almak istiyorum.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="WhatsApp ile iletişime geç"
      title="WhatsApp"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        width="30"
        height="30"
      />
    </a>
  );
}

export default WhatsAppButton;
