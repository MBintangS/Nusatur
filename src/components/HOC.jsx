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