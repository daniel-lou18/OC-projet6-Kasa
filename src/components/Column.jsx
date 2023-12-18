function Column({ children, className = "column" }) {
  return <div className={`${className}`}>{children}</div>;
}

export default Column;
