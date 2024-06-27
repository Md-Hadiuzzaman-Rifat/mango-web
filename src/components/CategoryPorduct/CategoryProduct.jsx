/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const CategoryProduct = ({ data }) => {
  
  return (
      <div
        className="group"
      >
        <div className="relative">
          <img
            src={`${import.meta.env.VITE_ROOT_API}/images/${
              data?.images[0]?.filename
            }`}
            alt=""
            className="h-[180px] w-[260px] object-cover rounded-md"
          />
          {/* hover button */}
          <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
            <Link to={`/productDetails/${data?._id}`}>
              <Button
                text={"View Details"}
                bgColor={"bg-warning"}
                textColor={"text-white"}
              />
            </Link>
          </div>
        </div>
        <div className="leading-7">
          <h2 className="font-semibold">{data?.description?.productName}</h2>
          <h2 className="font-semi-bold line-through text-red-500">
            ${data?.description?.price}
          </h2>
          <h2 className="font-bold">${data?.description?.discount}</h2>
        </div>
      </div>
  );
};

export default CategoryProduct;
