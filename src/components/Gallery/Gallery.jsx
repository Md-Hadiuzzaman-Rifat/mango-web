/* eslint-disable no-unused-vars */
import panjabi1 from "../../assets/panjabi/panjabi/panjabi1.jpg"
import panjabi2 from "../../assets/panjabi/panjabi/panjabi2.jpg"
import panjabi3 from "../../assets/panjabi/panjabi/panjabi3.jpg"
import panjabi4 from "../../assets/panjabi/panjabi/panjabi4.jpg"



const Gallery = () => {
    const panjabis=[panjabi1, panjabi2, panjabi3, panjabi4]
    return (
        <div className="bg-primaryDark py-12 mb-24">
            <h1 className="text-white pb-12 text-center text-4xl md:text-6xl font-bold">OUR SHOWCASE</h1>
             <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            
                {
                    panjabis.map((item, id)=> <div className="" key={id}>
                        <img src={item} className=" object-cover" alt="" />
                    </div>

                    )
                }
            </div>
        </div>
    );
};

export default Gallery;