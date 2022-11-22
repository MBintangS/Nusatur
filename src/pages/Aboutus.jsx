import Heroaboutuscomp from "../components/Heroaboutus";
import HOC from "../components/HOC";
import Ourteam from "../components/Ourteam";
import Weare from "../components/Weare";
import Wedo from "../components/Wedo";

const Aboutus = () => {
  return (
    <HOC headerTitle="About Us">
      <section style={{ width: "100%" }}>
        <Heroaboutuscomp />
        <Weare />
        <Wedo />
        <Ourteam />
      </section>
    </HOC>
  );
};

export default Aboutus;
