import StarRating from "../components/StarRating/StarRating";
import Tags from "../components/Tags/Tags";
import Collapse from "../components/Collapse/Collapse";
import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Carousel from "../components/Carousel/Carousel";
import Row from "../components/Row";
import Column from "../components/Column";

function DetailPage() {
  const { id } = useParams();
  const item = logements.filter((logement) => logement.id === id)[0];
  console.log(item);
  return (
    <div>
      <Carousel imageUrls={item.pictures} />
      <Row className="row-summary">
        <Column className="column-left">
          <h1>{item.title}</h1>
          <h2>{item.location}</h2>
          <Tags tags={item.tags} />
        </Column>
        <Column>
          <StarRating rating={item.rating} />
        </Column>
      </Row>
      <Row className="row-start">
        <Collapse item={item} title="Description" />
        <Collapse item={item} title="Équipements" />
      </Row>
    </div>
  );
}

export default DetailPage;
