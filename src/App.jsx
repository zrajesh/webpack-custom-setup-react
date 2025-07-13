import React from "react";
import Button from "@/components/button";
import ReactLogo from "../public/react-logo.png";

const App = () => {
    return (
        <div>
            <h1>Hello React</h1>
            <img src={ReactLogo} alt="React logo" />
            <Button />
        </div>
    );
};

export default App;