import React from "react";
import Header from '../Header/Header';
import HowItWorks from '../HowItWorks/HowItWorks';
import Products from '../Products/Products';
import Stores from "../Stores/Stores";
import Footer from "../Footer/Footer";
const Home = () => {
    return (<>
         <Header/>
         <HowItWorks/>
         <Products/>
         <Stores/>
         <Footer/>
    </>)
}
export default Home;