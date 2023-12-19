import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function AppLayout() {
  return (
    <>
      <div className="container-main">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
