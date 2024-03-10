import { Outlet } from "react-router-dom";
import NavBar from "../../page/Home/Shared/NavBar/NavBar";
import Footer from "../../page/Home/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;