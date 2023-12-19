import Column from "../components/Column";
import Collapse from "../components/Collapse/Collapse";
import content from "../data/about";
import Banner from "../components/Banner/Banner";

function About() {
  return (
    <>
      <Banner type="about" />
      <Column className="column-about">
        {content.map((elem) => (
          <Collapse title={elem.title} item={elem} key={elem.title} />
        ))}
      </Column>
    </>
  );
}

export default About;
