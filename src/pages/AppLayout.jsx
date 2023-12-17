import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="app-layout">
      <header>
        <img src="LOGO.png" alt="logo" />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
