import Card from "./Card";
import Container from "./Container";

function Cards({ items }) {
  return (
    <Container className="container-cards">
      {items.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Cards;
