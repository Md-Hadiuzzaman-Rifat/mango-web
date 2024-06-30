import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Services from "../../components/Services/Services";
import { useGetProductsQuery } from "../../features/product/productApi.js";
import ProductListSkeleton from "../../components/ProductListSkeleton/ProductListSkeleton.jsx";
import ReviewCarousel from "../../components/ReviewCarousel/ReviewCarouse.jsx"
import Features from "../../components/Features/Features.jsx";
import ExtraInfo from "../../components/ExtraInfo/ExtraInfo.jsx"

const Home = () => {
  // eslint-disable-next-line no-undef
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 50,
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
      {
        !isLoading && isSuccess
         && data?.length === 0 && <p className="font-bold text-2xl text-gray-400">No Product Uploaded</p>
      }
      <div className="w-full mt-32 bg-primary p-4 text-2xl text-center font-bold text-white mb-16">
        <h2>আমরা কেন সেরা? </h2>
      </div>
      <Features></Features>
      <ExtraInfo></ExtraInfo>
      <div className="bg-primary mt-32">
      <h1 className="container font-bold text-white p-4 text-center text-4xl">Reviews</h1>
      </div>
      <ReviewCarousel></ReviewCarousel>
      
      <Footer></Footer>
    </div>
  );
};

export default Home;
