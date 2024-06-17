import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import Reviews from "../../components/Reviews/Reviews";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Services from "../../components/Services/Services";
import { useGetProductsQuery } from "../../features/product/productApi.js";
import ProductListSkeleton from "../../components/ProductListSkeleton/ProductListSkeleton.jsx";



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

  const { data, isSuccess, isLoading } = useGetProductsQuery();


  return (
    <div>
      <Hero />
      <Services></Services>
      <Content></Content>
      {
        isLoading && <ProductListSkeleton/>
      }
      {
        !isLoading && isSuccess
         && data?.length > 0 && <Products data={data}></Products>
      }
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
