import React, { lazy } from "react";
import Button from "@/components/button";
import Carousel from "@/components/common/carousel";

const LazyComponent = lazy(() => import(/*webpackChunkName: 'LazyComponentChunk' */ '@/components/lazy'));

import ReactLogo from "../public/react-logo.png";


const App = () => {
    // console.log("API_URL: ", API_URL);
    
    const fetchUserDetails = () => {
        console.log("TEST USER");
    }

    return (
        <div>
            <h1>Hello React</h1>
            <img src={ReactLogo} alt="React logo" />
            <Carousel />
            <Button />
            <LazyComponent />
        </div>
    );
};

export default App;