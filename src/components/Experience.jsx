import TimelineCard from "./TimelineCard";

function Experience({ experiences }) {
  return (
    <section id="experience" className="section">
      <h3 className="section-label">Experience</h3>
      {experiences.map((item) => (
        <TimelineCard item={item} key={`${item.company}-${item.period}`} />
      ))}
    </section>
  );
}

export default Experience;
