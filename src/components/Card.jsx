import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import Tags from "./Tags";

function Card({ item }) {
  return (
    <Link to={`details/${item.id}`}>
      <article className="card">
        <img src={item.pictures[0]} alt={item.title} />
        <h2>{item.title}</h2>
        <div className="overlay">
          <StarRating rating={item.rating} />
          <Tags tags={item.tags} />
        </div>
      </article>
    </Link>
  );
}

export default Card;
