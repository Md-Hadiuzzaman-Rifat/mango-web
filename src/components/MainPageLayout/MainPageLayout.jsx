/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar1 from "../Navbar1/Navbar1";
const MainPageLayout = ({children}) => {
    const location= useLocation()
    const {pathname}= location || {}
     return (
        <div>
            <Navbar1></Navbar1>
            {children}
            {
                (pathname !== "/home" && pathname !== "/" && pathname !== "" ) && <Footer></Footer>
            }
        </div>
    );
};

export default MainPageLayout;