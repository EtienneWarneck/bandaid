import React from 'react';
import "./Navigation.css";
// import BANDAID from "./"; 


const Navigation = props => {

        return (
            <nav>
                <div className="divLogo">
          <img className="logo" src={require("./BANDAID.png")} />
          </div>
          <div className="leftNav">
          <a href="#">Login | </a>
          <a href="#">Sign Up</a>
          </div>
            </nav>
        );
}
export default Navigation;