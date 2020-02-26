import React, {Component} from "react";
import "./style.scss";
import Payusak2 from "../../../../images/catalog/payusakner/Payusak2.jpg";
import Payusak3 from "../../../../images/catalog/payusakner/Payusak3.jpg";
import Payusak4 from "../../../../images/catalog/payusakner/Payusak4.jpg";
import Payusak5 from "../../../../images/catalog/payusakner/Payusak5.jpg";
import Payusak6 from "../../../../images/catalog/payusakner/Payusak6.jpg";
import Payusak10 from "../../../../images/catalog/payusakner/Payusak10.jpg";
import Payusak11 from "../../../../images/catalog/payusakner/Payusak11.jpg"; 
import Payusak13 from "../../../../images/catalog/payusakner/Payusak13.jpg";

const images = [Payusak2,
    Payusak3,
    Payusak4,
    Payusak5,
    Payusak6,
    Payusak10,
    Payusak11,
    Payusak13]


class Payusakner extends Component{

    render(){
        return(
            <div className="payusakner-container">
                <div className="payusakner-wrapper">
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

export default Payusakner;