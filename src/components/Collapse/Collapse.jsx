import { useState } from "react";
import "./collapse.scss";

function Collapse({ item, title }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { description, equipments } = item;

  return (
    <div className={`container-collapse ${isCollapsed ? "" : "visible"}`}>
      <h3 className="title" onClick={() => setIsCollapsed((val) => !val)}>
        {title}
        <span className={`${isCollapsed ? "" : "chevron-down"}`}>
          <i className="fa-solid fa-chevron-up"></i>
        </span>
      </h3>
      {title !== "Équipements" && <p className={`text`}>{description}</p>}
      {title === "Équipements" && (
        <ul className={`list`}>
          {equipments.map((equipm) => (
            <li className="item" key={equipm}>
              {equipm}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Collapse;
