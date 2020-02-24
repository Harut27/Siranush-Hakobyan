import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";

import GuestLayout from "./guest-layout";
import Home from "../components/pages/home";
import AboutUs from "../components/pages/aboutUs";
import Catalog from "../components/pages/catalog";
import ContactUs from "../components/pages/contactUs";
import News from "../components/pages/news";
import Services from "../components/pages/services";
import Testimonials from "../components/pages/testimonials";


const Routes = () => {
  return (
    <Router>
      <Switch>
        <GuestLayout exact path="/" component={Home} />;
        <GuestLayout exact path="/home" component={Home} />;
        <GuestLayout exact path="/aboutus" component={AboutUs} />;
        <GuestLayout exact path="/catalog" component={Catalog} />;
        <GuestLayout exact path="/contactus" component={ContactUs} />;
        <GuestLayout exact path="/news" component={News} />;
        <GuestLayout exact path="/services" component={Services} />;
        <GuestLayout exact path="/testimonials" component={Testimonials} />;

       
      </Switch>
    </Router>
  );
};

export default Routes;
