import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { NavbarBrand, UncontrolledTooltip,} from "reactstrap";

const Brand = () => {
    return (
        <Fragment>
            <div style={{lineHeight: "0px"}} className="navbar-translate">
              <NavbarBrand to="/" tag={Link} id="tooltip6619950104">
                <span>INTRA</span>  <small className="text-warning">Tools </small>
              </NavbarBrand>
              <UncontrolledTooltip delay={0} target="tooltip6619950104">
                Make your own intranet eSport
              </UncontrolledTooltip>
              <button className="navbar-toggler" id="navigation">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
        </Fragment>
    );
  };
  
  export default Brand;
    