/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../features/product/productApi";
import ProductListSkeleton from "../components/ProductListSkeleton/ProductListSkeleton";
import { useEffect } from "react";
import ProductCard from "../components/Products/ProductsCard";
import CategoryProduct from "../components/CategoryPorduct/CategoryProduct";

export default function Category() {

  const {categoryName}= useParams()
  const { data, isSuccess, isLoading } = useGetProductsQuery();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white " id={categoryName}>

      
      <div className="container mt-4 mb-12 min-h-[60vh]">
        <h2 className="text-2xl font-bold  text-gray-900 bg-gray-100 font-abc p-2 mb-4">
          {categoryName?.toUpperCase()}
        </h2>
        {isLoading && <ProductListSkeleton />}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2  lg:grid-cols-4">
          {isSuccess &&
            !isLoading &&
            data
              ?.filter(
                (item) =>
                  item?.description?.category ===
                  categoryName
              )
              
              ?.map((item) => <CategoryProduct key={item?._id} data={item} />)}
              
        </div>
      </div>
    </div>
  );
}
