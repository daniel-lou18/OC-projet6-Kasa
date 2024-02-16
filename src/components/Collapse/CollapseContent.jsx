function CollapseContent({ equipments, description, title }) {
  if (title === "Équipements")
    return (
      <ul className={`list`}>
        {equipments.map((equipm) => (
          <li className="item" key={equipm}>
            {equipm}
          </li>
        ))}
      </ul>
    );
  else return <p className={`text`}>{description}</p>;
}

export default CollapseContent;
