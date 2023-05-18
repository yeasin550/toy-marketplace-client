import Funnel from "../../Funnel/Funnel";
import Gallery from "../../Gallery/Gallery";
import RentCar from "../../RentCar/RentCar";
import ShopByCategory from "../../ShopByCategory/ShopByCategory";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Funnel></Funnel>
            <RentCar></RentCar>
        </div>
    );
};

export default Home;