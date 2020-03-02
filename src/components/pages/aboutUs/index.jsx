import React, {Component} from "react";
import "./style.scss";
import about1 from "../../../images/about/about1.jpg";
import about4 from "../../../images/about/about4.jpg";
import OpenPhoto from "../../app_components/open-image/index";
import  { withTranslation } from 'react-i18next';




class AboutUs extends Component{
    render(){
        return(
            <div className="aboutContainer">
                <div className="contant-section">
                    <div className="about-img">
                        <div className="about4">
                            <OpenPhoto src={about4} />
                        </div>
                        <div className="about1">
                            <OpenPhoto src={about1} />
                        </div>
                    </div>
                    <div className="about-title">
                        {this.props.t("about.1")}
                    </div>
                    <div className="about-text">
                        <p>{this.props.t("about.2")}</p>
                        <p>{this.props.t("about.3")}</p>
                        <p>{this.props.t("about.4")}</p>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default withTranslation()(AboutUs);