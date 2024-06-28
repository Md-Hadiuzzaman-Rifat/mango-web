/* eslint-disable react/prop-types */

const CoverCarousel = ({data}) => {
    return (
        <div className=" ">
        <img src={data} className="w-full h-[70vh] object-cover" alt="" />
    </div>
    );
};

export default CoverCarousel;