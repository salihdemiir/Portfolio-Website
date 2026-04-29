import { CVIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <div className="intro">
          <h1>Salih Demir</h1>
          <h2>IT Systems Engineer | Cybersecurity Enthusiast</h2>
          <p>
            I build and support reliable technology solutions with hands-on experience in enterprise
            infrastructure, user support, system operations, and modern workplace technologies. My
            long-term focus is growing deeper in systems engineering and cybersecurity.
          </p>
        </div>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <div className="socials">
        <a className="icon-link" href="https://github.com/salihdemiir" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
          <GitHubIcon />
        </a>

        <a className="icon-link" href="https://www.linkedin.com/in/salih-demiir/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
          <LinkedInIcon />
        </a>

        <a className="icon-link" href="mailto:salihdemiir@hotmail.com" aria-label="Email" title="Email">
          <MailIcon />
        </a>

        <a className="icon-link" href="/Salih_Demir_CV.pdf" target="_blank" rel="noreferrer" aria-label="Download CV" title="Download CV">
          <CVIcon />
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
