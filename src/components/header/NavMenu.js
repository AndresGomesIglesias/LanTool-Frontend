import React, { Fragment } from "react";

import {
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavItem,
    NavLink,
    Nav,
  } from "reactstrap";

const NavMenu = ({ scrollPage }) => {
  
    return (
        <Fragment>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle caret color="default" nav>
                  <i style={{height: "0px", paddingRight: "0px"}} className="fa fa-cogs d-lg-none d-xl-none" />
                  Product
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem
                    style={{paddingTop: "0rem", paddingBottom: "0rem"}}
                    href="#pablo"
                    onClick={e => scrollPage(e, "headers")}
                  >
                    <i style={{height: "auto"}} className="tim-icons icon-bullet-list-67" />
                    Overview
                  </DropdownItem>
                  <DropdownItem
                    style={{paddingTop: "0rem", paddingBottom: "0rem"}}
                    href="#pablo"
                    onClick={e => scrollPage(e, "registation")}
                  >
                    <i style={{height: "auto"}} className="tim-icons icon-paper" />
                    Registation
                  </DropdownItem>
                  <DropdownItem
                    style={{paddingTop: "0rem", paddingBottom: "0rem"}}
                    href="#pablo"
                    onClick={e => scrollPage(e, "competiton")}
                  >
                    <i style={{height: "auto"}} className="tim-icons icon-bullet-list-67" />
                    Competition
                  </DropdownItem>
                  <DropdownItem
                    style={{paddingTop: "0rem", paddingBottom: "0rem"}}
                    href="#pablo"
                    onClick={e => scrollPage(e, "information")}
                  >
                    <i style={{height: "auto"}} className="tim-icons icon-bullet-list-67" />
                    Information
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
               
              <NavItem>
                <NavLink 
                  href="/Princing">
                  Princing
                </NavLink>
              </NavItem>
         
              <NavItem>
                <Button 
                  className="nav-link" 
                  color="default" 
                  href="/register" 
                  size="sm">
                  <p>Sign up</p>
                </Button>
                <Button 
                  className="nav-link" 
                  color="default" 
                  href="/login" 
                  size="sm">
                  <p>Login</p>
                </Button>
              </NavItem>
            </Nav>
        </Fragment>
    )
}

export default NavMenu;