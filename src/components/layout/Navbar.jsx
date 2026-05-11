import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="portfolio-navbar">
      <div className="portfolio-navbar-container">
        {/* LOGO */}

        <Link
          to="/"
          className="portfolio-logo"
          onClick={closeMenu}
        >
          <span className="logo-demir">
            DEMIR
          </span>

          <span className="logo-salih">
            SALIH
          </span>
        </Link>

        {/* NAVIGATION */}

        <nav
          className={`portfolio-nav ${
            menuOpen ? "active" : ""
          }`}
        >
          <NavLink
            to="/"
            onClick={closeMenu}
          >
            Ana Sayfa
          </NavLink>

          <NavLink
            to="/hakkimda"
            onClick={closeMenu}
          >
            Hakkımda
          </NavLink>

          <NavLink
            to="/deneyim"
            onClick={closeMenu}
          >
            Deneyim
          </NavLink>

          <NavLink
            to="/projeler"
            onClick={closeMenu}
          >
            Projeler
          </NavLink>

          <NavLink
            to="/yetenekler"
            onClick={closeMenu}
          >
            Yetenekler
          </NavLink>

          <NavLink
            to="/demirtech"
            onClick={closeMenu}
          >
            DemirTech
          </NavLink>

          <NavLink
            to="/iletisim"
            onClick={closeMenu}
          >
            İletişim
          </NavLink>
        </nav>

        {/* RIGHT */}

        <div className="portfolio-navbar-right">
          <a
            href="mailto:salihdemir5335@gmail.com"
            className="portfolio-contact-btn"
          >
            İletişime Geç
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;