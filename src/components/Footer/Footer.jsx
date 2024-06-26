import { FaInstagram, FaFacebookSquare  } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <section id="footer" className="mt-32 relative pb-16 bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md">
      <div className="container flex flex-row flex-wrap gap-4 justify-around text-white p-4">
        <div className="max-w-[300px]">
          <h1 className=" text-3xl sm:text-4xl font-bold my-8">Tea Heaven</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
            ratione quidem libero, praesentium ab atque? Quidem maxime, numquam
            dolores assumenda error nemo modi repudiandae?
          </p>
        </div>
        <div>
          <h1 className=" text-3xl sm:text-4xl font-bold my-8">Tea Kingdom Sylhet</h1>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <h1 className=" text-3xl sm:text-4xl font-bold my-8">Follow Us</h1>
          <p>{import.meta.env.VITE_CONTACT}</p>
          <p>{import.meta.env.VITE_ADDRESS}</p>
          <div className="flex w-full justify-around mt-3 text-4xl"><FaInstagram /> <FaFacebookSquare/> <FaSquarePhone></FaSquarePhone> </div>
          <div>
          </div>
        </div>
        <div className="w-[90vh] h-[1px] bg-white mt-16"></div>
      </div>
      <p className="text-center text-white">This Website is created by <span className="font-bold">PIPRA SOFT</span> </p>
    </section>
  );
};

export default Footer;
