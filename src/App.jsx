import Navs from "./components/Navbar";
<<<<<<< HEAD
import {Routes, Route} from "react-router-dom"

import Destination from "./pages/Destinations";
import {HOME,DESTINATION, GALLERY, TRAVELBLOG, ABOUT} from "./routes"
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import TravelBlog from "./pages/TravelBlog";
import About from "./pages/About";


const App = () => {
  return (
    <>
      <Navs />
      <Routes>
        <Route element={<Home />} path={HOME} />
        <Route element={<Destination />} path={DESTINATION} />
        <Route element={<Gallery />} path={GALLERY} />
        <Route element={<TravelBlog />} path={TRAVELBLOG} />
        <Route element={<About />} path={ABOUT} />
      </Routes>
    </>
  );
};
=======
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Gallery from "./pages/Gallery";
import Travelblog from "./pages/Travelblog";
import Aboutus from "./pages/Aboutus";
import { ABOUTUS, DESTINATIONS, GALLERY, HOME, TRAVELBLOG } from "./routes";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <Navs />
      {/* <Container> */}
      <Routes>
        <Route element={<Home />} path={HOME} />
        <Route element={<Destinations />} path={DESTINATIONS} />
        <Route element={<Gallery />} path={GALLERY} />
        <Route element={<Travelblog />} path={TRAVELBLOG} />
        <Route element={<Aboutus />} path={ABOUTUS} />
      </Routes>
      {/* </Container> */}
    </div>
  );
}
>>>>>>> 0d15e8b (rebuild UI)

export default App;
