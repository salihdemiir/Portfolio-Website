import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import DemirTech from "./pages/DemirTech";
import Contact from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <div className="portfolio-app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimda" element={<About />} />
          <Route path="/deneyim" element={<Experience />} />
          <Route path="/projeler" element={<Projects />} />
          <Route path="/yetenekler" element={<Skills />} />
          <Route path="/demirtech" element={<DemirTech />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;