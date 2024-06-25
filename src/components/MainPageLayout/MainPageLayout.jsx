/* eslint-disable react/prop-types */
// import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import Navbar1 from "../Navbar1/Navbar1";
import Footer from "../Footer/Footer";
const MainPageLayout = ({children}) => {
    const location= useLocation()
    const {pathname}= location || {}
     return (
        <div>
            {
                (pathname !== "/home" && pathname !== "/" && pathname !== "" ) && <Navbar1></Navbar1>
            }
            {children}
            {
                (pathname !== "/home" && pathname !== "/" && pathname !== "" ) && <Footer></Footer>
            }
        </div>
    );
};

export default MainPageLayout;