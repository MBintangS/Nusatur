import HOC from "../components/HOC"; 
import Popularplaces from "../components/Popularplaces"; 
import Articlebloghome from "../components/Articlebloghome"
import Footer from "../components/Footer"
 
const Destinations = () => { 
  return ( 
    <HOC headerTitle="Destinations"> 
      <Popularplaces /> 
      <Articlebloghome />
      <Footer />
    </HOC> 
  ); 
}; 
 
export default Destinations;

// import { Container } from "react-bootstrap";
// import Footer from "../components/Footer";
// import HOC from "../components/HOC";

// import { NavLink, useLocation } from "react-router-dom";

// const Destination = () => {
//   const { pathname } = useLocation();

//   return (
//     <HOC headerTitle="Destination">
//       <div>
//         <Container>
//           <div style={{ marginTop: "100px" }}>
//             <NavLink to={`${pathname}/package`}>klik disini</NavLink>
//           </div>
//         </Container>
//       </div>

//       <Footer />
//     </HOC>
//   );
// };

// export default Destination;
