function Contact() {
  return (
    <section id="contact" className="section">
      <h3 className="section-label">Contact</h3>
      <div className="contact-box">
        <p>
          I’m open to IT infrastructure, systems, support, and security-focused opportunities where
          I can contribute with hands-on experience, strong ownership, and a long-term engineering mindset.
        </p>

        <div className="contact-actions">
          <a className="btn fill" href="mailto:salihdemiir@hotmail.com">Send Email</a>
          <a className="btn" href="https://www.linkedin.com/in/salih-demiir/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" href="https://github.com/salihdemiir" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href="/Salih_Demir_CV.pdf" target="_blank" rel="noreferrer">Download CV</a>
        </div>

        <div className="footer-note">
          Built with React &amp; Vite • Clean, modern, and professional portfolio presence
        </div>
      </div>
    </section>
  );
}

export default Contact;
