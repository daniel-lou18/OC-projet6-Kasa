import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import Tags from "./Tags";

function Card({ item }) {
  const { id, pictures, title, rating, tags } = item;

  return (
    <Link to={`details/${id}`}>
      <article className="card">
        <img src={pictures[0]} alt={title} />
        <h2>{title}</h2>
        <div className="overlay">
          <StarRating rating={rating} />
          <Tags tags={tags} />
        </div>
      </article>
    </Link>
  );
}

export default Card;
