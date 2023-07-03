import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar/Navbar";
import Footer from "../components/Home/Footer/Footer";
// import Navbar from "../components/Home/Navbar/Navbar";
const Main = () => {
    return (
        <>
        <Navbar/>
         <Outlet/>
         <Footer/>
        </>
    );
};

export default Main;