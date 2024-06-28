/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types

const CarouselItem = ({ data }) => {
  return (
    <div className="relative p-2 m-2 border mt-24 left-0 right-0">
      <img src={data.img} className=" rounded-full w-24 absolute top-[-50px] " alt="" />
      <div className="mt-12">
        <p>{data.name}</p>
        <p className="text-gray-500 text-sm mt-2 p-4">{data.reviews}</p>
      </div>
    </div>
  );
};

export default CarouselItem;