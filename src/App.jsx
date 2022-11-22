import Navs from "./components/Navbar";
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

export default App;
