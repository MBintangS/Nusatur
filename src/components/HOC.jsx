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
