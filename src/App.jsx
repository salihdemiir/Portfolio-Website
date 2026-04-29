import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DemirTech from "./pages/DemirTech";

function App() {
  return (
    <div className="app-layout">

      {/* 🔥 NAVBAR */}
      <header className="top-header">
        <Link to="/" className="site-logo">
          Salih Demir
        </Link>

        <div className="nav-right">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/demirtech" className="demirtech-link">
            DemirTECH
          </Link>
        </div>
      </header>

      {/* 🔥 CONTENT */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demirtech" element={<DemirTech />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;