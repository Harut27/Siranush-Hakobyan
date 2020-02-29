import React, {Component} from "react";
import "./style.scss"
import { useTranslation } from 'react-i18next';
import logo from "../../../images/logos/logo-white.png"
import  { withTranslation } from 'react-i18next';

class Home extends Component{

    render(){

    // const { t, i18n } = useTranslation();

        return(
            <div className="homeContainer">

                <div className="home-logo">
                    <img src={logo} alt=""/>
                </div>
                
                <div className="home-text">
                <span>{this.props.t("home.1")}</span>
                </div>
            </div>
        )
    }
}

export default withTranslation()(Home)