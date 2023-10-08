import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/img2.avif"
import img2 from "../../../assets/img2.jpg"
import img3 from "../../../assets/img3.avif"


const Banner = () => {
    return (
        <div className="flex justify-between">
            <h2 className=" font-bold font-serif leading-tight italic text-6xl text-current">WE CAN PROVIDE PRODUCTS<br /> AS PER YOUR REQUIREMENT
            <br /><a className=" font-normal text-3xl font-sans not-italic"> Stay with Mayabi Jewelry..!! </a>
            </h2>
            <Carousel className="w-4/5">
                <div>
                    <img src={img1} />
                </div>
                <div> 
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;