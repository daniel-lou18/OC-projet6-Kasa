function Card({ item }) {
  return (
    <article className="card">
      <h2>{item.title}</h2>
      <div className="overlay"></div>
    </article>
  );
}

export default Card;
