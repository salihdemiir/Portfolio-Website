import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="portfolio-footer-container">
        <div className="footer-left">
          <h2>
            DEMIR<span>SALIH</span>
          </h2>

          <p>
            Yazılım, IT altyapısı ve siber güvenlik alanlarında
            modern çözümler geliştiren teknoloji odaklı portfolio.
          </p>
        </div>

        <div className="footer-right">
          <a
            href="https://github.com/salihdemiir"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/salih-demir"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>

          <a href="mailto:salihdemir5335@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Salih Demir. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;