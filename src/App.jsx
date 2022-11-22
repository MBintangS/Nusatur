import Navs from "./components/Navbar";
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

export default App;
