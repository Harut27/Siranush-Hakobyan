import React, { Component } from "react";
import { Route } from "react-router";
import Navbar from "../../components/app_components/navbar/index";
import CatalogLink from "../../components/app_components/catalog-manu/index";


class CatalogLayout extends Component {
  render() {
    const { component: ChildComponent, ...rest } = this.props;

    return (
      <>
        <Navbar />
        <CatalogLink/>
        <div className="content">
          <Route
            {...rest}
            render={matchProps => {
              return <ChildComponent {...matchProps} />;
            }}
          />
        </div>
      </>
    );
  }
}

export default CatalogLayout;
