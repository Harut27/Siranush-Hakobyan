import React, {Component} from "react";
import "./style.scss";

import Dramapanak1 from "../../../../images/catalog/dramapanakner/Dramabanak1.jpg";
import Dramapanak2 from "../../../../images/catalog/dramapanakner/Dramabanak2.jpg";
import Dramapanak3 from "../../../../images/catalog/dramapanakner/Dramabanak3.jpg";
import Dramapanak5 from "../../../../images/catalog/dramapanakner/Dramabanak5.jpg";
import Dramapanak6 from "../../../../images/catalog/dramapanakner/Dramabanak6.jpg";
import Dramapanak7 from "../../../../images/catalog/dramapanakner/Dramabanak7.jpg";
import Dramapanak8 from "../../../../images/catalog/dramapanakner/Dramabanak8.jpg";
import Dramapanak9 from "../../../../images/catalog/dramapanakner/Dramabanak9.jpg";





const images = [Dramapanak1,
    Dramapanak2,
    Dramapanak3,
    Dramapanak5,
    Dramapanak6,
    Dramapanak7,
    Dramapanak8,
    Dramapanak9]

class Dramapanakner extends Component{

    render(){
        return(
            <div className="dramapanakner-container">
                <div className="dramapanakner-wrapper">
                    {
                        images.map((image,index)=>{
                            return(
                                <div className={`${image} img`} key={index}>
                                    <img src={image} alt=""/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Dramapanakner;