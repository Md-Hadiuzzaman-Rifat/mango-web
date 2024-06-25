/* eslint-disable react/prop-types */
import ProductCard from "./ProductsCard";
const Products = ({data}) => {
  return (
    <div className="my-28">
      <div className="container">
        <ProductCard data={data} />
      </div>
    </div>
  );
};

export default Products;