<<<<<<< HEAD

import { Container } from "react-bootstrap";
import HOC from "../components/HOC";

const Destination = () => {
    return (
        <Container>
            <HOC headerTitle="Destination">
                <h1 style={{marginTop:"100px"}}>Halaman Destination</h1>
            </HOC>
        </Container>    
    );
};

export default Destination;
=======
import HOC from "../components/HOC";
import "../styles/styles.css";

const Destinations = () => {
  return (
    <HOC headerTitle="Destinations">
      <h1 className="beranda">Halaman Destinations</h1>
    </HOC>
  );
};

export default Destinations;