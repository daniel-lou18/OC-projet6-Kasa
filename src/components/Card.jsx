import { Link } from "react-router-dom";

function Card({ item }) {
  const { id, pictures, title } = item;

  return (
    <Link to={`details/${id}`}>
      <article className="card">
        <img src={pictures[0]} alt={title} />
        <h2>{title}</h2>
        <div className="overlay" />
      </article>
    </Link>
  );
}

export default Card;
