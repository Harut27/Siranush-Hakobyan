import React, {Component} from "react";
import "./style.scss"
// import RihanaContact from "../../../images/rihanna-contact.jpg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhone } from '@fortawesome/free-solid-svg-icons'

class ContactUs extends Component{

    render(){
        return(
            <div className="contactContainer">
                <div className="picture-section">
                {/* <img src={RihanaContact} alt=""/> */}

                    <div className="adress-section">
                        <span className="contact-title">Contact Us</span>
                        <div className="contactData">
                            {/* <FontAwesomeIcon icon={faPhone}/> */}
                             <span className="contactEmail">mymail@gmail.com</span>
                        </div>
                        <div className="contactData">
                            <span className="contactAdress">Erevan,Ajapnyak,17t</span>
                        </div>
                        <div className="contactData">
                            <span className="contactPhone">+37499999999</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactUs;