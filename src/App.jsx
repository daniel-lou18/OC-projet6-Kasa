import "./App.scss";
import Cards from "./components/Cards";
import Collapse from "./components/Collapse";
import logements from "./data/logements.json";

function App() {
  return (
    <>
      <Collapse item={logements[0]} title="Description" />
      <Collapse item={logements[0]} title="Équipements" />
      <Cards items={logements} />
    </>
  );
}

export default App;
