import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";

import GuestLayout from "./guest-layout";
import CatalogLayout from "./catalog-layout"
import Home from "../components/pages/home";
import AboutUs from "../components/pages/aboutUs";
import ContactUs from "../components/pages/contactUs";
import News from "../components/pages/news";
import Services from "../components/pages/services";
import Testimonials from "../components/pages/testimonials";

import Aksesuar from "../components/pages/catalog/aksesuar";
import Collection from "../components/pages/catalog/collection";
import Dramapanakner from "../components/pages/catalog/dramapanakner";
import Gotiner from "../components/pages/catalog/gotiner";
import Koshikner from "../components/pages/catalog/koshikner";
import Payusakner from "../components/pages/catalog/payusakner";
import Sharfer from "../components/pages/catalog/sharfer";
import TnainDekorner from "../components/pages/catalog/tnayin-dekorner";


const Routes = () => {
  return (
    <Router>
      <Switch>
        <GuestLayout exact path="/" component={Home} />;
        <GuestLayout exact path="/home" component={Home} />;
        <GuestLayout exact path="/aboutus" component={AboutUs} />;
        <GuestLayout exact path="/contactus" component={ContactUs} />;
        <GuestLayout exact path="/news" component={News} />;
        <GuestLayout exact path="/services" component={Services} />;
        <GuestLayout exact path="/testimonials" component={Testimonials} />;

        <CatalogLayout exact path="/catalog/aksesuar" component={Aksesuar} />;
        <CatalogLayout exact path="/catalog/collection" component={Collection} />;
        <CatalogLayout exact path="/catalog/dramapanakner" component={Dramapanakner} />;
        <CatalogLayout exact path="/catalog/gotiner" component={Gotiner} />;
        <CatalogLayout exact path="/catalog/koshikner" component={Koshikner} />;
        <CatalogLayout exact path="/catalog/payusakner" component={Payusakner} />;
        <CatalogLayout exact path="/catalog/sharfer" component={Sharfer} />;
        <CatalogLayout exact path="/catalog/tnainDekorner" component={TnainDekorner} />;

       
      </Switch>
    </Router>
  );
};

export default Routes;
