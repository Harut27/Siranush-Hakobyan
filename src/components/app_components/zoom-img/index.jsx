import React from "react";


const ZoomPhoto = (props)=>{
    return(
        <div className="container">
            <div className="delete-icon">X</div>
            <div className="imgWrapper">
                <img src={props.src} alt=""/>
            </div>
        </div>
    )
}

export default ZoomPhoto;