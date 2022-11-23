import { Container } from "react-bootstrap";
import "../styles/stylesdestinations.css";

const Popularplacestitle = () => {
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="daftarkota-title">
          <h1>Pilih daerah yang ingin kamu kunjungi</h1>
          <div className="garis-bawah-daftarkota" />
        </div>
      </div>
    </Container>
  );
};

export default Popularplacestitle;
