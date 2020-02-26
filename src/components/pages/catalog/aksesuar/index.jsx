import React, {Component} from "react";
import "./style.scss";

import Accessories1 from "../../../../images/catalog/acsesuarner/Accessories1.jpg";
import Accessories5 from "../../../../images/catalog/acsesuarner/Accessories5.jpg";
import Accessories6 from "../../../../images/catalog/acsesuarner/Accessories6.jpg";
import Accessories7 from "../../../../images/catalog/acsesuarner/Accessories7.jpg";
import Accessories8 from "../../../../images/catalog/acsesuarner/Accessories8.jpg";
import Accessories9 from "../../../../images/catalog/acsesuarner/Accessories9.jpg";
import Accessories11 from "../../../../images/catalog/acsesuarner/Accessories11.jpg";
import Accessories12 from "../../../../images/catalog/acsesuarner/Accessories12.jpg";
import Accessories14 from "../../../../images/catalog/acsesuarner/Accessories14.jpg";
import Accessories16 from "../../../../images/catalog/acsesuarner/Accessories16.jpg";
import Accessories17 from "../../../../images/catalog/acsesuarner/Accessories17.jpg";
import Accessories19 from "../../../../images/catalog/acsesuarner/Accessories19.jpg";
import Accessories20 from "../../../../images/catalog/acsesuarner/Accessories20.jpg";

const images = [Accessories1,Accessories5,Accessories6,Accessories7,Accessories8,Accessories9,Accessories11,Accessories12,Accessories14,Accessories16,Accessories17,Accessories19,Accessories20]



class Aksesuar extends Component{

    render(){
        return(
            <div className="aksesuar-page">
                <div className="aksesuarner-wrapper">
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

export default Aksesuar;