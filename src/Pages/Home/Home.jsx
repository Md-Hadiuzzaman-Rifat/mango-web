import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import Reviews from "../../components/Reviews/Reviews";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Services from "../../components/Services/Services";

const Home = () => {
  // eslint-disable-next-line no-undef
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Hero />
      <Services></Services>
      <Content></Content>
      <Products></Products>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
