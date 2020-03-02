import React, { Component } from "react";
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./style.scss";

const Navbar = ()=>{

    const { t, i18n } = useTranslation();

    const handleclick = (lang)=>{
        i18n.changeLanguage(lang)
    }
    
    

        return(
                

                <div className="header">

                    <div className="languages">
                        <button onClick={()=>handleclick('en')}>En</button>
                        <button onClick={()=>handleclick('ru')}>Ру</button>
                        <button onClick={()=>handleclick('am')}>Հա</button>
                    </div>

                    <input className="menu-btn" type="checkbox" id="menu-btn"/>
                    <label htmlFor="menu-btn" className="menu-icon"><span className="nav-icon"></span></label>

                    <ul className="menu">
                        <li className="navbar-link">
                            <Link to={`/home`}>{t('navbar.1')}</Link>
                        </li>
                        <li className="navbar-link">
                            <Link to={`/aboutus`}>{t('navbar.2')}</Link>
                        </li>
                        <li className="navbar-link">
                            <Link to={`/services`}>{t('navbar.3')}</Link>
                        </li>
                        <li className="navbar-link">
                            <Link to={`/catalog/aksesuar`}>{t('navbar.4')} </Link>
                        </li>
                        <li className="navbar-link">
                            <Link to={`/testimonials`}>{t('navbar.5')}</Link>
                        </li>
                        <li className="navbar-link">
                            <Link to={`/contactus`}>{t('navbar.6')}</Link>
                        </li>
                    </ul>
                </div>
                
        )
}

export default Navbar;