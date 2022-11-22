
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