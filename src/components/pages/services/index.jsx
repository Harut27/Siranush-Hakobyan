import React, {Component} from "react";
import "./style.scss";
import OpenPhoto from "../../app_components/open-image/index";
import services from "../../../images/services/Services.jpg";
import services2 from "../../../images/services/Services2.jpg";
import services3 from "../../../images/services/Services3.jpg";
import  { withTranslation } from 'react-i18next';



class Services extends Component{

    render(){
        return(
            <div className="servicesContainer">
                <div className="services-photos">
                       
                    <div className="other-content"> 

                        <div className="servicices-main-photo">
                            <OpenPhoto src={services} />
                        </div>

                        <div className="other-photos">

                            <div className="services3">
                                <OpenPhoto src={services3} />
                            </div>

                            <div className="services2">
                                <OpenPhoto src={services2} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-container">
                 
                    <div className="services-description">
                        <div className="services-title">
                            {this.props.t('services.1')}
                        </div>
                        <div className="services-description-part">
                            <p>{this.props.t("services.2")} </p>
                            <div dangerouslySetInnerHTML={{ __html:this.props.t("services.3")}} />
                            <div dangerouslySetInnerHTML={{ __html:this.props.t("services.4")}} />
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default withTranslation()(Services);