import useTitle from "../../../hooks/useTitle";
import Funnel from "../../Funnel/Funnel";
import Gallery from "../../Gallery/Gallery";
import RentCar from "../../RentCar/RentCar";
import ShopByCategory from "../../ShopByCategory/ShopByCategory";
import Banner from "../Banner/Banner";

const Home = () => {
    useTitle('Home')
    return (
        <div>
            
            <Banner></Banner>
            <Gallery></Gallery>
            <Funnel></Funnel>
            <ShopByCategory></ShopByCategory>
            <RentCar></RentCar>
        </div>
    );
};

export default Home;