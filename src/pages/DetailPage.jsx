import StarRating from "../components/StarRating";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";
import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Carousel from "../components/Carousel";

function DetailPage() {
  const { id } = useParams();
  const item = logements.filter((logement) => logement.id === id)[0];
  console.log(item);
  return (
    <div>
      <Carousel imageUrls={item.pictures} />
      <StarRating rating={item.rating} />
      <Tags tags={item.tags} />
      <Collapse item={item} title="Description" />
      <Collapse item={item} title="Équipements" />
    </div>
  );
}

export default DetailPage;
