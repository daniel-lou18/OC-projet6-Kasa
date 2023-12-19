import Card from "./Card";
import "./cards.scss";

function Cards({ items }) {
  return (
    <div className="container-cards">
      {items.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Cards;
