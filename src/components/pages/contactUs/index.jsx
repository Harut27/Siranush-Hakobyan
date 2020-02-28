import React, {Component} from "react";
import "./style.scss"
import Contactimage1 from "../../../images/contact/contact-us.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook,faTwitter,faYoutube,faViber,faWhatsapp } from '@fortawesome/free-brands-svg-icons';

class ContactUs extends Component{

    render(){
        return(
            <div className="contactContainer">
                <div className="picture-section">
                    <img src={Contactimage1} alt=""/>
                </div>
                <div className="adress-section">
                    <span className="contact-title">Contact Us</span>


                    <div className="contactData contactMail">
                        <FontAwesomeIcon icon={faEnvelope}/>
                            <span className="contactEmail">hakobiansiranush@gmail.com</span>
                    </div>
                    <div className="contactData contactLocation">
                    <FontAwesomeIcon icon={faLocationArrow}/>
                        <span className="contactAdress">Ք. Երևան</span>
                    </div>
                    <div className="contactData contactPhone">
                        <FontAwesomeIcon icon={faPhone}/>
                        <span className="contactPhone">+37494949644</span>
                    </div>
                    <div className="contactViber contactData">
                        <FontAwesomeIcon icon={faViber}/>
                        <span className="contactPhone">+37494949644</span>
                    </div>
                    <div className="contactWhatsapp contactData">
                        <FontAwesomeIcon icon={faWhatsapp}/>
                        <span className="contactPhone">+37494949644</span>
                    </div>


                    <div className="contact-social-icons">
                        <div className="facebook-icon">
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div className="twitter-icon">
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className="youtube-icon">
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default ContactUs;