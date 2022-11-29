import { NavLink, useLocation } from "react-router-dom";
import HOC from "../components/HOC";
import Herotravelblog from "../components/Herotravelblog"
import Slider from "../components/Slider"
import Travelblog from "../components/Travelblog"
import Footer from "../components/Footer";

const TravelBlog = () => {
    const {pathname} = useLocation();

  return (
    <HOC headerTitle="Travel Blog">
        <Herotravelblog />
        <Slider />
        <Travelblog />
        <Footer />
    </HOC>
  );
};

export default TravelBlog;
