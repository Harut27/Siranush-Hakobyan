import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./style.scss";


const links = ["Home","About Us","Services","Catalog","Testimonials","Contact Us"]


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
                    
                    <div className="navbar-link">
                        <Link to={`/home`}>Home</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to={`/aboutus`}>About Us</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to={`/services`}>Services</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to={`/catalog/aksesuar`}>Catalog</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to={`/testimonials`}>Testimonials</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to={`/contactus`}>Contact Us</Link>
                    </div>
                        
                </div>
            </div>
        )
    }
}

export default Navbar;