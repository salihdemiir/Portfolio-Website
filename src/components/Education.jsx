import TimelineCard from "./TimelineCard";

function Education({ education }) {
  return (
    <section id="education" className="section">
      <h3 className="section-label">Education</h3>
      {education.map((item) => (
        <TimelineCard item={item} key={`${item.company}-${item.period}`} />
      ))}
    </section>
  );
}

export default Education;
