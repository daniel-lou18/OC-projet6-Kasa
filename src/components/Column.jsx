import Row from "./Row";

function Column({ children, ...props }) {
  return <Row {...props}>{children}</Row>;
}

export default Column;
