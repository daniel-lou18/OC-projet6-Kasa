import { Link, NavLink } from "react-router-dom";
// utiliser des NavLinks pour la mise en forme des liens actifs
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
