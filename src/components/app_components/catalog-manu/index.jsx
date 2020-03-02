import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./style.scss";
import  { withTranslation } from 'react-i18next';



class CatalogManu extends Component{

    render(){

    return(
        <div>
            <div className="catalog-manu">
                <div className="aksesuar catalog-link">
                    <Link to="/catalog/aksesuar">{this.props.t("catalog.1")}</Link>
                </div>
                <div className="aksesuar catalog-link">
                    <Link to="/catalog/collection">{this.props.t("catalog.2")}</Link>
                </div>
                <div className="aksesuar catalog-link">
                    <Link to="/catalog/dramapanakner">{this.props.t("catalog.3")}</Link>
                </div>
                <div className="aksesuar catalog-link">
                    <Link to="/catalog/gotiner">{this.props.t("catalog.4")}</Link>
                </div>
                <div className="aksesuar catalog-link">
                    <Link to="/catalog/koshikner">{this.props.t("catalog.5")}</Link>
                </div>
                <div className="aksesuar catalog-link">
                    <Link to="/catalog/payusakner">{this.props.t("catalog.6")}</Link>
                </div>
                <div className="aksesuar catalog-link">
                    <Link to="/catalog/sharfer">{this.props.t("catalog.7")}</Link>
                </div>
                <div className="aksesuar catalog-link">
                    <Link to="/catalog/tnaindekorner">{this.props.t("catalog.8")}</Link>
                </div>
            </div>
        </div>
    )
    }
}

export default withTranslation()(CatalogManu);