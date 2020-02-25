import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./style.scss";


class CatalogManu extends Component{

    render(){

    return(
        <div>
            <div className="catalog-manu">
                <div className="aksesuar catalog-link">
                    <Link to="/catalog/aksesuar">Aksesuar</Link>
                </div>
                <div className="aksesuar catalog-link">
                    <Link to="/catalog/collection">Collection</Link>
                </div>
                <div className="aksesuar catalog-link">
                    <Link to="/catalog/dramapanakner">Dramapanakner</Link>
                </div>
                <div className="aksesuar catalog-link">
                    <Link to="/catalog/gotiner">Gotiner</Link>
                </div>
                <div className="aksesuar catalog-link">
                    <Link to="/catalog/koshikner">Koshikner</Link>
                </div>
                <div className="aksesuar catalog-link">
                    <Link to="/catalog/payusakner">Payusakner</Link>
                </div>
                <div className="aksesuar catalog-link">
                    <Link to="/catalog/sharfer">Sharfer</Link>
                </div>
                <div className="aksesuar catalog-link">
                    <Link to="/catalog/tnaindekorner">Tnain Dekorner</Link>
                </div>
            </div>
        </div>
    )
    }
}

export default CatalogManu;