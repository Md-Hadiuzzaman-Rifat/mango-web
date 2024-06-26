import { whyWeBest } from "../../utils/reviews";

const Features = () => {
  return (
    <div className="container my-24">
      <div className="w-full gap-16 flex lg:justify-around flex-col items-center lg:flex-row flex-wrap ">
        <div className="max-w-[400px] lg:max-w-[500]">
          <div>
            {whyWeBest?.map((data, id) => (
              <div
                data-aos="fade-right"
                data-aos-delay={data.aosDelay}
                className="border-solid border-2 shadow-md shadow-primaryDark border-secondary m-2 rounded-md min-h-20"
                key={id}
              >
                <p className="font-bold text-lg m-2">{data}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            className="w-full min-w-[300px] object-cover lg:min-w-[500px]"
            src="/map.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
