import Banner from "../components/Banner/Banner";
import Cards from "../components/Cards/Cards";
import logements from "../data/logements.json";

function Home() {
  return (
    <div>
      <Banner>Chez vous, partout et ailleurs</Banner>
      <Cards items={logements} />
    </div>
  );
}

export default Home;
