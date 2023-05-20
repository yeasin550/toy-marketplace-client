import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Header/NavBar";

const Main = () => {
    return (
      <div className="lg:mx-10">
       
        <NavBar></NavBar>
          <Outlet></Outlet>
      
        <Footer></Footer>
      </div>
    );
};

export default Main;