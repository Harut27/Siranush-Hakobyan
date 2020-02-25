import React, {Component} from "react";
import {Link} from "react-router-dom"
import "./style.scss"
import logo from "../../../images/logos/logo-white.png"

class Home extends Component{

    render(){
        return(
            <div className="homeContainer">

                <div className="home-logo">
                    <img src={logo} alt=""/>
                </div>
                
                <div className="home-text">
                <span>Յուրաքանչյուր աքսեսուար ունի իր յուրօրինակ պատմությունը, դա կարող է դառնալ քո կյանքի պատմությունը,
                     քո ստեղծագործ աշխարհի վկայությունը։</span>
                </div>
            </div>
        )
    }
}
export default Home;