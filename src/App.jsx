import "./App.scss";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="details/:id" element={<DetailPage />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
