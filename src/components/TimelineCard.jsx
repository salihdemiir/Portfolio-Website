function TimelineCard({ item }) {
  return (
    <article className="card">
      <div className="period">{item.period}</div>

      <div>
        <h3>{item.title}</h3>
        <h4>{item.company}</h4>
        <p>{item.description}</p>

        <ul className="highlights">
          {item.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="tags">
          {item.tech.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default TimelineCard;
