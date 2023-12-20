import Banner from "../components/Banner/Banner";
import Cards from "../components/Cards/Cards";
import logements from "../data/logements.json";

function Home() {
  return (
    <>
      <Banner>
        Chez vous,{<br className="newline" />} partout et ailleurs
      </Banner>
      <Cards items={logements} />
    </>
  );
}

export default Home;
