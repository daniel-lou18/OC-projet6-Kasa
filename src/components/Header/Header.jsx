import { Link, NavLink } from "react-router-dom";
import Row from "../Row";
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <Row>
        <Link to="/">
          <img src="/LOGO.png" alt="logo" />
        </Link>
        <Row className="row-end">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="about">A propos</NavLink>
        </Row>
      </Row>
    </header>
  );
}

export default Header;
