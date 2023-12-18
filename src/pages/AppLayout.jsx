import { Link, NavLink, Outlet } from "react-router-dom";
import Row from "../components/Row";

function AppLayout() {
  return (
    <div className="app-layout">
      <div className="container-main">
        <header>
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
        <main>
          <Outlet />
        </main>
      </div>
      <footer>FOOTER</footer>
    </div>
  );
}

export default AppLayout;
