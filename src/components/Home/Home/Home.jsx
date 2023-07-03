import Project from "../../Projects/Project";
import What from "../../What/What";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import MySkill from "../MySkill/MySkill";

const Home = () => {
    return (
        <>
        <Hero/>
        <About/>
        <MySkill/>
        <Project/>
        <What/>
        <Contact/>
        </>
    );
};

export default Home;