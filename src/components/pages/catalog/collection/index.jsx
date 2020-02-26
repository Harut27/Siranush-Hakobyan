import React, {Component} from "react";
import "./style.scss";

import Collection2 from "../../../../images/catalog/collection/Collection2.jpg";
import Collection3 from "../../../../images/catalog/collection/Collection3.jpg";
import Collection7 from "../../../../images/catalog/collection/Collection7.jpg";
import Collection8 from "../../../../images/catalog/collection/Collection8.jpg";
import Collection9 from "../../../../images/catalog/collection/Collection9.jpg";
import Collection10 from "../../../../images/catalog/collection/Collection10.jpg";
import Collection11 from "../../../../images/catalog/collection/Collection11.jpg";
import Collection12 from "../../../../images/catalog/collection/Collection12.jpg";
import CollMar1 from "../../../../images/catalog/collection/CollectionMarine1.jpg";
import CollMar5 from "../../../../images/catalog/collection/CollectionMarine5.jpg";
import CollMar9 from "../../../../images/catalog/collection/CollectionMarine9.jpg";
// import CollMar11 from "../../../../images/catalog/collection/CollectionMarine11.jpg";
import CollMar12 from "../../../../images/catalog/collection/CollectionMarine12.jpg";
import CollMar14 from "../../../../images/catalog/collection/CollectionMarine14.jpg";
import CollMar15 from "../../../../images/catalog/collection/CollectionMarine15.jpg";
import CollMar17 from "../../../../images/catalog/collection/CollectionMarine17.jpg";
import CollMar21 from "../../../../images/catalog/collection/CollectionMarine21.jpg";
import CollMar31 from "../../../../images/catalog/collection/CollectionMarine31.jpg";
import CollMar32 from "../../../../images/catalog/collection/CollectionMarine32.jpg";
import CollMar34 from "../../../../images/catalog/collection/CollectionMarine34.jpg";
import CollMar37 from "../../../../images/catalog/collection/CollectionMarine37.jpg";
import CollMar41 from "../../../../images/catalog/collection/CollectionMarine41.jpg";
import CollMar43 from "../../../../images/catalog/collection/CollectionMarine43.jpg";
import CollMar44 from "../../../../images/catalog/collection/CollectionMarine44.jpg";
import CollMar46 from "../../../../images/catalog/collection/CollectionMarine46.jpg";


const images = [Collection2,Collection3,Collection7,Collection8,Collection9,Collection10,Collection11,Collection12,CollMar1,CollMar5,CollMar9,CollMar12, CollMar14,CollMar15,CollMar17,CollMar21,CollMar31,CollMar32,CollMar34,CollMar37,CollMar41,CollMar43,CollMar44,CollMar46]



class Collection extends Component{

    render(){
        return(
            <div className="collection-container">
                <div className="collection-wrapper">
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

export default Collection;