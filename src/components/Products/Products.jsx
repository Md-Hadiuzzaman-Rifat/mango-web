/* eslint-disable react/prop-types */
import ProductCard from "./ProductsCard";
const Products = ({data}) => {
  return (
    <div id="products">
      <p className="container font-bold bg-primary text-3xl py-2 text-white">অর্ডার করুন</p>
      <div className="[2px] w-full container bg-primary my-12"></div>
      <div className="container">
        <ProductCard data={data} />
      </div>
    </div>
  );
};

export default Products;