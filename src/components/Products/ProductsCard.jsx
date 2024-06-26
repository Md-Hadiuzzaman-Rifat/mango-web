

/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
// import Button from "../Button/Button";

import { useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const navigate= useNavigate()
  const handleNavigate=(url)=>{
    navigate(url)
    window.scrollTo(0, 0);
  }

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section */}
        {data.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="group"
            key={data._id}
          >
            <div className="relative">
              <img
                src={`${import.meta.env.VITE_ROOT_API}/Images/${data?.images[0]?.filename}`}
                alt=""
                className="h-[250px] w-[260px] object-cover rounded-md"
              />
              {/* hover button */}
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                
                  <button
                    className="bg-warning text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10"
                    onClick={()=>handleNavigate(`/productDetails/${data?._id}`)}
                  >View Details</button>
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
        ))}
      </div>
    </div>
  );
};

export default ProductCard;