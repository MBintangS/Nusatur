<<<<<<< HEAD
import { Container } from "react-bootstrap";
import {Helmet} from "react-helmet-async";


const HOC = ({children, headerTitle = "Nusatur"}) => {
    return (
        <>
        <Helmet>
            <title>
                {headerTitle}
            </title>
        </Helmet>
        {children}
        </>
    );
};

export default HOC;
=======
import { Helmet } from "react-helmet-async";

const HOC = ({ children, headerTitle = "NusaTur" }) => {
  return (
    <>
      <Helmet>
        <title>{headerTitle}</title>
      </Helmet>
      {children}
    </>
  );
};

export default HOC;
>>>>>>> 0d15e8b (rebuild UI)

export default HOC;