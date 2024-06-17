/* eslint-disable react/prop-types */
import ProductCard from "./ProductsCard";
const Products = ({data}) => {
  return (
    <div>
      <div className="container">
        <ProductCard data={data} />
      </div>
    </div>
  );
};

export default Products;