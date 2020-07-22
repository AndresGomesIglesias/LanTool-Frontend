import React, { Fragment, useEffect, useState} from "react";
import { UncontrolledCollapse, Navbar, Col} from "reactstrap";

import Logo from "../../components/header/Brand"
import NavMenu from "../../components/header/NavMenu";

const ColorNavbar = () => {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent")

  const changeNavbarColor = () => {
    if ( document.documentElement.scrollTop > 299 || document.body.scrollTop > 299) {
      setNavbarColor("bg-principal")
    } else if (document.documentElement.scrollTop < 300 || document.body.scrollTop < 300) {
      setNavbarColor("navbar-transparent")
    }
  };

  const scrollPage = (e, id) => {
    e.preventDefault();
    if (document.getElementById(id) !== null) {
      document.getElementById(id).scrollIntoView();
    }
  };
 
    useEffect(() =>  {
      window.addEventListener("scroll", changeNavbarColor) 
    }, []);
    
   useEffect(() => {
      return () => { window.removeEventListener("scroll", changeNavbarColor); }
    }, []);
      
  return ( 
    <Fragment>
      <Navbar className={"fixed-top " + navbarColor } expand="lg">
        <div id="navbar-scroll" className="container">

          <Logo />

          <UncontrolledCollapse navbar toggler="#navigation">
            <div className="navbar-collapse-header">
            <div style={{marginBottom: "0px"}} className="row">
                <Col className="collapse-brand" xs="6">
                  <a href="/" onClick={e => e.preventDefault()}>
                  <span>INTRA</span>  <small className="text-warning">Tools </small>
                  </a>
                </Col> 
                <Col className="collapse-close text-right" xs="6">
                  <button className="navbar-toggler" id="navigation">
                    <i style={{height: "0px"}} className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </div>
            </div>
            
            <NavMenu scrollPage={scrollPage}/>

          </UncontrolledCollapse>
        </div>
      </Navbar>
  </Fragment>
   );
}
 
export default ColorNavbar;
