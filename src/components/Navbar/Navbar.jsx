/* eslint-disable react/prop-types */
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <div className="absolute top-0 left-0 w-full py-2 text-white z-20">
      <div data-aos="fade-down" className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold uppercase ">
            <span className="font-normal ">{import.meta.env.VITE_WEB_NAME}</span>
          </h1>
          <ul className="space-x-14 text-xl hidden lg:flex">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#products">Where to find</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
          <div onClick={() => setSidebar(!sidebar)}>
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;