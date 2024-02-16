function CollapseTitle({ onClick, title, isCollapsed }) {
  return (
    <h3 className="title" onClick={onClick}>
      {title}
      <span className={`${isCollapsed ? "" : "chevron-down"}`}>
        <i className="fa-solid fa-chevron-up"></i>
      </span>
    </h3>
  );
}

export default CollapseTitle;
