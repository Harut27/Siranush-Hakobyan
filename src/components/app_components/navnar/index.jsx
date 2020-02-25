import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./style.scss";


const links = ["Home","About Us","Services","Catalog","News","Testimonials","Contact Us"]


class Navbar extends Component{
    
    render(){

        return(
            <div className="navbar">
                <div className="languages">
                    <div className="eng">EN</div>
                    <div className="ru">RU</div>
                    <div className="arm">AR</div>
                </div>
                <div className="links-section">
                    {
                        links.map((link,index)=>{
                            return(
                                <div className="navbar-link" key={index}>
                                    <Link to={`/${link.toLowerCase().replace(/\s/g, '')}`}>{link}</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Navbar;