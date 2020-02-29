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
            <div className="navbar">
                <div className="languages">
                    <button onClick={()=>handleclick('en')}>En</button>
                    <button onClick={()=>handleclick('ru')}>Ру</button>
                    <button onClick={()=>handleclick('am')}>Հա</button>
                </div>
                <div className="links-section">
                    
                    <div className="navbar-link">
                        <Link to={`/home`}>
                            {t('navbar.1')}
                        </Link>
                    </div>
                    <div className="navbar-link">
                        <Link to={`/aboutus`}>
                            {t('navbar.2')}
                        </Link>
                    </div>
                    <div className="navbar-link">
                        <Link to={`/services`}>
                            {t('navbar.3')}
                        </Link>
                    </div>
                    <div className="navbar-link">
                        <Link to={`/catalog/aksesuar`}>
                            {t('navbar.4')}
                        </Link>
                    </div>
                    <div className="navbar-link">
                        <Link to={`/testimonials`}>
                            {t('navbar.5')}
                        </Link>
                    </div>
                    <div className="navbar-link">
                        <Link to={`/contactus`}>
                            {t('navbar.6')}
                        </Link>
                    </div>
                </div>
            </div>
        )
}

export default Navbar;