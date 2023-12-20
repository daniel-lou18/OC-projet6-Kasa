import "./host.scss";
import Row from "../../components/Row";

function Host({ host }) {
  const { name, picture } = host;
  return (
    <Row className="row-host">
      <span>{name}</span>
      <img src={picture} alt="profile" />
    </Row>
  );
}

export default Host;
