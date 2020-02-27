import React, {Component} from "react";
import "./style.scss";
import services from "../../../images/services/Services.jpg";
import services2 from "../../../images/services/Services2.jpg";
import services3 from "../../../images/services/Services3.jpg";



class Services extends Component{

    render(){
        return(
            <div className="servicesContainer">
                <div className="services-photos">
                       
                    <div className="other-content"> 

                        <div className="servicices-main-photo">
                            <img src={services} alt=""/>
                        </div>

                        <div className="other-photos">

                            <div className="services3">
                                <img src={services3} alt=""/>
                            </div>

                            <div className="services2">
                                <img src={services2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-container">
                 
                    <div className="services-description">
                        <div className="services-title">
                            Services
                        </div>
                        <p> «Siranush Hakobian» ապրանքանիշը թողարկում է հետևյալ ապրանքի տեսականին, պայուսակներ, դրամապանակներ, գոտիներ, կրծքազարդեր, շարֆեր, կոշիկներ, տնային դեկորներ և այլն։ 
                        Ապրանքանիշը ընդունում է պատվերներ և անհատական և տարբեր ֆիրմաների հետ համատեղ։
                        Ապրանքանիշը ունի վերանորոգման սպասարկում, ըստ «Siranush Hakobian» ապրանքանիշի կողմից տրամադրվող երաշխիքային վկայագրի։ Վերանորոգման սպասարկումը վերաբերվում է միայն ապրանքանիշի կողմից թողարկված նմուշների ։
                        Մանրամասն տեղեկությունների, հարցերի , համագործակցությայն համար զանգահարել +37494949644 ։</p>

                        <p>Դասընթացներ

                        Սիրանուշ Հակոբյանի կողմից իրականցվում են դասընթացներ , առանց տարիքային սահմանափակման հետևյալ մասնագիտություններով
                        • Հագուստի մոդելավորում
                        • Տեքստիլ նկարչություն ( բատիկ )
                        • Կաշվեգործություն
                        Դասընթացների արդյունքում աշակերտը ձեռք է բերում բարձր պրոֆեսիոնալ հմտություններ վերոհիշյալ մասնագիտություններով ։
                        Ք. Երևան</p>

                        <p>Հեռախոս. +37494949644
                        E-mail. hakobiansiranush@gmail.com
                        Կայքէջ. https://www.siranushhakobian.com
                        Facebook. @sirhandmade
                        Instagram. @hakobiansiranush
                        Viber. +37494949644
                        Whatsapp. +37494949644</p>

                        
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Services;