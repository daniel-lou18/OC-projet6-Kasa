import Cards from "../components/Cards";
import logements from "../data/logements.json";

function Home() {
  return (
    <div>
      <Cards items={logements} />
    </div>
  );
}

export default Home;
