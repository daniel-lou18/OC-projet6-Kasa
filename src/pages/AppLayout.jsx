import { Link, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="app-layout">
      <header>
        <Link to="/">
          <img src="LOGO.png" alt="logo" />
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
