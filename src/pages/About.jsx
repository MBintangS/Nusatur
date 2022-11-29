import Contactus from "../components/Contactus";
import Heroaboutus from "../components/Heroaboutus";
import HOC from "../components/HOC";
import Ourteam from "../components/Ourteam";
import Weare from "../components/Weare";
import Wedo from "../components/Wedo";
import Footer from "../components/Footer"

const About = () => {
  return (
    <HOC headerTitle="About Us">
      <section style={{ width: "100%" }}>
        <Heroaboutus />
        <Weare />
        <Wedo />
        <Ourteam />
        <Contactus />
        <Footer />
      </section>
    </HOC>
  );
};

export default About;