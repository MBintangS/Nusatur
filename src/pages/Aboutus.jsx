import Contactus from "../components/Contactus";
import Heroaboutus from "../components/Heroaboutus";
import HOC from "../components/HOC";
import Ourteam from "../components/Ourteam";
import Weare from "../components/Weare";
import Wedo from "../components/Wedo";

const Aboutus = () => {
  return (
    <HOC headerTitle="About Us">
      <section style={{ width: "100%" }}>
        <Heroaboutus />
        <Weare />
        <Wedo />
        <Ourteam />
        <Contactus />
      </section>
    </HOC>
  );
};

export default Aboutus;
