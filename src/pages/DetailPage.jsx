import StarRating from "../components/StarRating/StarRating";
import Tags from "../components/Tags/Tags";
import Collapse from "../components/Collapse/Collapse";
import { useNavigate, useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Carousel from "../components/Carousel/Carousel";
import Row from "../components/Row";
import Column from "../components/Column";
import Host from "../components/Host/Host";
import { useEffect } from "react";

function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const item = logements.filter((logement) => logement.id === id)[0];

  useEffect(() => {
    if (!item) navigate("wrongid");
  }, [item, navigate]);

  if (!item) return null;
  const { pictures, title, location, tags, host, rating } = item;

  return (
    <>
      <Carousel imageUrls={pictures} />
      <Row className="row-summary">
        <Column className="column-left">
          <h1>{title}</h1>
          <h2>{location}</h2>
          <Tags tags={tags} />
        </Column>
        <Column className="column-right">
          <Host host={host} />
          <StarRating rating={rating} />
        </Column>
      </Row>
      <Row className="row-start">
        <Collapse item={item} title="Description" />
        <Collapse item={item} title="Équipements" />
      </Row>
    </>
  );
}

export default DetailPage;
