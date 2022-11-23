import HOC from "../components/HOC";
import Popularplacespict from "../components/Popularplacespict";
import Popularplacestitle from "../components/Popularplacestitle";
import Popularplaces from "../components/Popularplaces";
import "../styles/styles.css";

const Destinations = () => {
  return (
    <HOC headerTitle="Destinations">
      <Popularplacestitle />
      <Popularplacespict />
      <section style={{ width: "100%" }}>
        <Popularplaces />
      </section>
    </HOC>
  );
};

export default Destinations;
