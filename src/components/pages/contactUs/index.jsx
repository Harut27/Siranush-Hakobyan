import React, {Component} from "react";
import "./style.scss"
import Contactimage from "../../../images/contact/contact.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faMarker } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';



class ContactUs extends Component{

    render(){
        return(
            <div className="contactContainer">
                <div className="picture-section">
                <img src={Contactimage} alt=""/>

                    <div className="adress-section">
                        <span className="contact-title">Contact Us</span>
                        <div className="contactData">
                            <FontAwesomeIcon icon={faEnvelope}/>
                             <span className="contactEmail">mymail@gmail.com</span>
                        </div>
                        <div className="contactData">
                        <FontAwesomeIcon icon={faEnvelope}/>

                            <span className="contactAdress">Erevan,Ajapnyak,17t</span>
                        </div>
                        <div className="contactData">
                          <FontAwesomeIcon icon={faEnvelope}/>
                            <span className="contactPhone">+37499999999</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactUs;