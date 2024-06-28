const ExtraInfo = () => {
  return (
    <div className=" bg-primaryDark py-12 mb-24">
      <div className="">
      <h1 className="text-white pb-12 text-center text-4xl md:text-6xl font-bold">PRODUCT PROMO</h1>
      <iframe
        className="w-full container aspect-video min-h-64 rounded-xl"
        src={import.meta.env.VITE_YOUTUBE_VIDEO}
      ></iframe>
      </div>
    </div>
  );
};

export default ExtraInfo;
