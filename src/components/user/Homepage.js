import React from "react";
import ReactDOM from "react-dom";
import Header from "../Header.js";
import Card from "./Card.js";

import "./style.css";

function Homepage(){
    return (
        <div>
          <Header />
            <div className="App container">
                <div className="row">
                        <Card /><Card /><Card /><Card /><Card />
                </div>
            </div>
        </div>
    );
}

export default Homepage;