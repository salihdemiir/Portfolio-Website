import { FaArrowRight } from "react-icons/fa";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "DemirTech",
      type: "Digital Solutions Brand",
      text: "Web, IT ve siber güvenlik çözümleri sunan modern teknoloji markası.",
      tags: ["React", "Vite", "SEO", "Vercel"],
      link: "https://demirtech.vercel.app",
    },
    {
      title: "Avukat Web Sitesi",
      type: "Corporate Website",
      text: "Hukuk bürosu için modern, mobil uyumlu ve SEO odaklı kurumsal web sitesi.",
      tags: ["React", "Tailwind", "SEO", "Responsive"],
      link: "https://www.ertugrulberktas.av.tr",
    },
    {
      title: "E-Ticaret Backend",
      type: "Backend Project",
      text: "Node.js ile ürün, kategori, kullanıcı ve sipariş yönetimi içeren e-ticaret altyapısı.",
      tags: ["Node.js", "Express", "MongoDB", "API"],
      link: "#",
    },
  ];

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <span>PROJELER</span>

        <h1>
          Öğrendiklerimi gerçek projelere dönüştürdüğüm çalışmalar.
        </h1>
      </section>

      <section className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div>
              <span className="project-type">{project.type}</span>

              <h2>{project.title}</h2>

              <p>{project.text}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <a href={project.link} target="_blank" rel="noreferrer">
              Projeyi Gör <FaArrowRight />
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Projects;