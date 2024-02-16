import { useState } from "react";
import "./collapse.scss";
import CollapseContent from "./CollapseContent";
import CollapseTitle from "./CollapseTitle";

function Collapse({ item, title }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { description, equipments } = item;
  // rendu conditionnel en fonction de la valeur de "title" à l'aide de l'opérateur ternaire

  function handleClick() {
    setIsCollapsed((val) => !val);
  }

  return (
    <div className={`container-collapse ${isCollapsed ? "" : "visible"}`}>
      <CollapseTitle
        onClick={handleClick}
        isCollapsed={isCollapsed}
        title={title}
      />
      <CollapseContent
        description={description}
        equipments={equipments}
        title={title}
      />
    </div>
  );
}

export default Collapse;
