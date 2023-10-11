import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import AllJewelry from "../AllJewelry/AllJewelry";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Mayabi Jewelry | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="my-10">
                <AllJewelry></AllJewelry>
            </div>
        </div>
    );
};

export default Home;