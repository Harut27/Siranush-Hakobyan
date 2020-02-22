import React, {Component} from "react";
import {Link} from "react-router-dom"
import "./style.scss"
import Rihana1 from "../../../images/rihana-2.jpg"

class Home extends Component{

    render(){
        return(
            <div className="homeContainer">
                
                <div className="home-photo">
                    <img src={Rihana1} alt=""/>
                </div>
            </div>
        )
    }
}
export default Home;