/* eslint-disable react/prop-types */
import ProductCard from "./ProductsCard";
const Products = ({data}) => {
  return (
    <div id="products">
      <p className="container font-bold text-4xl">Order Now</p>
      <div className="h-[2px] w-full container bg-primary my-12"></div>
      <div className="container">
        <ProductCard data={data} />
      </div>
    </div>
  );
};

export default Products;