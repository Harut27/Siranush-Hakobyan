import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./style.scss";

const links = ["Home","About Us","Services","Catalog","News","Testimonials","Contact Us"]


class Navbar extends Component{
    
    render(){

        return(
            <div className="navbar">
                <div className="logo-section">Eng</div>
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