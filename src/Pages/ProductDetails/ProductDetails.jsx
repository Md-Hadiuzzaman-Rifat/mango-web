/* eslint-disable no-unused-vars */
import {
    useGetProductsQuery,
    useGetSingleProductQuery,
  } from "../../features/product/productApi";
  import { useParams } from "react-router-dom";
  import DetailsImage from "../../components/DetailsImage/DetailsImage";
  import DetailsContent from "../../components/DetailsContent/DetailsContent";
  import { useEffect } from "react";
  import DetailsSkeleton from "../../components/DetailsSkeleton/DetailsSkeleton";
  import { useSelector } from "react-redux";
 import ProductCard from "../../components/Products/ProductsCard";
  
  
  const ProductDetails = () => {
    const { id } = useParams();
    const { data, isLoading, isError, isSuccess } = useGetSingleProductQuery(id);
    const { open } = useSelector((state) => state?.popUp);
    const {
      data: allProductData,
      isSuccess: allProductSuccess,
      isError: allProductError,
      isLoading: allProductLoading,
    } = useGetProductsQuery();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return (
      <div>
        <div className="2xl:container 2xl:mx-auto lg:py-8 lg:px-20 md:py-12 md:px-6 py-4 px-4 ">
          <div>
            {isLoading && <DetailsSkeleton/>}
            {!isLoading && isSuccess && data && (
              <div className="flex justify-center items-center lg:items-start lg:flex-row flex-col gap-8">
                <DetailsImage images={data?.images}></DetailsImage>
                <DetailsContent
                  desc={data.description}
                  img={data.images}
                ></DetailsContent>
              </div>
            )}
           
            {/* // youtube video  */}
            {!isLoading && data && data?.description?.videoLink && (
            <div
              className="aspect-w-16 aspect-h-9 mt-8 container"
              dangerouslySetInnerHTML={{
                __html: data?.description?.videoLink,
              }}
            ></div>
          )}
          </div>
          {isError && "Failed to load"}
        </div>
        <p className="container mt-12 font-bold text-2xl">Similar Product</p>
          <div className="w-full container h-[2px] bg-primary mt-4"></div>
        {/* // category  */}
          <div 
          className="my-12 container"
          >
        {allProductSuccess && isSuccess && (
        <ProductCard
          data={allProductData}
          category={data?.description?.category}
        ></ProductCard>
      )}      
      </div>  
        <div className="mb-16"></div>
        {/* <FooterBanner></FooterBanner> */}
      </div>
    );
  };
  
  export default ProductDetails;
  
