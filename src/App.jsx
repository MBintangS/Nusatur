import Navs from "./components/Navbar";
import {Routes, Route} from "react-router-dom"

import {HOME,DESTINATION, GALLERY, TRAVELBLOG, ABOUT, PACKAGE, DETAIL, ARTICLE, FORM} from "./routes"
import Destination from "./pages/Destinations";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import TravelBlog from "./pages/TravelBlog";
import About from "./pages/About";
import Package from "./pages/Package";
import Detail from "./pages/Detail";
import Article from "./pages/Article"
import Form from "./pages/Form";


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
        <Route element={<Package />} path={PACKAGE} /> 
        <Route element={<Detail /> } path={DETAIL} />
        <Route element={<Article />} path={ARTICLE} />
        <Route element={<Form />} path={FORM} />
      </Routes>
    </>
  );
};

export default App;
