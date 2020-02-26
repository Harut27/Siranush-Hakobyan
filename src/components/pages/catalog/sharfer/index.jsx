import React, {Component} from "react";
import "./style.scss";

import Sharfer1 from "../../../../images/catalog/sharfer/Sharfer1.jpg";
import Sharfer2 from "../../../../images/catalog/sharfer/Sharfer2.jpg";
import Sharfer3 from "../../../../images/catalog/sharfer/Sharfer3.jpg";
import Sharfer5 from "../../../../images/catalog/sharfer/Sharfer5.jpg";
import Sharfer6 from "../../../../images/catalog/sharfer/Sharfer6.jpg";
import Sharfer7 from "../../../../images/catalog/sharfer/Sharfer7.jpg";
import Sharfer9 from "../../../../images/catalog/sharfer/Sharfer9.jpg";
import Sharfer10 from "../../../../images/catalog/sharfer/Sharfer10.jpg";
import Sharfer11 from "../../../../images/catalog/sharfer/Sharfer11.jpg";

const images = [Sharfer1,
    Sharfer2,
    Sharfer3,
    Sharfer5,
    Sharfer6,
    Sharfer7,
    Sharfer9,
    Sharfer10,
    Sharfer11]

class Sharfer extends Component{

    render(){
        return(
            <div className="shatfer-container">
                <div className="sharfer-wrapper">
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

export default Sharfer;