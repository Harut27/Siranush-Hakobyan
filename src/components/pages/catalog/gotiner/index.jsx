import React, {Component} from "react";
import "../style.scss";
import OpenPhoto from "../../../app_components/open-image/index";


import Gotiner1 from "../../../../images/catalog/gotiner/Gotiner1.jpg";
import Gotiner2 from "../../../../images/catalog/gotiner/Gotiner2.jpg";
import Gotiner3 from "../../../../images/catalog/gotiner/Gotiner3.jpg";
import Gotiner4 from "../../../../images/catalog/gotiner/Gotiner4.jpg";

const images = [Gotiner1,
    Gotiner2,
    Gotiner3,
    Gotiner4]

class Gotiner extends Component{

    render(){
        return(
            <div className="gotiner-section">
                <div className="gotiner-wrapper centered">
                    {
                        images.map((image,index)=>{
                            return(
                                <div className={`${image} img big-cart`} key={index}>
                                   <OpenPhoto src={image} kay={index}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Gotiner;