import React from "react";
import Navbar from "../reusables/Navbar";
import Hero from "../reusables/Hero";
import Cardmap from "../reusables/Cardmap";
import Footer from "../reusables/Footer";
import "../styles/global.css"

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Cardmap />
            <Footer />
        </>
    );
}

export default Home;