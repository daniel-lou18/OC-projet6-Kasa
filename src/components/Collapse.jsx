import { useState } from "react";
import Container from "./Container";

function Collapse({ item, title }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { description, equipments } = item;

  return (
    <Container className="container-collapse">
      <h3 className="title" onClick={() => setIsCollapsed((val) => !val)}>
        {title}
        <span className={`${isCollapsed ? "" : "chevron-down"}`}>
          <i className="fa-solid fa-chevron-up"></i>
        </span>
      </h3>
      {!isCollapsed && title !== "Équipements" && (
        <p className="text">{description}</p>
      )}
      {!isCollapsed && title === "Équipements" && (
        <ul className="list">
          {equipments.map((equipm) => (
            <li className="item" key={equipm}>
              {equipm}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

export default Collapse;
