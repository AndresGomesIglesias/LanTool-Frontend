import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import classNames from "classnames";
import {
    Button,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Input,
    InputGroup,
    NavbarBrand,
    Navbar,
    NavLink,
    Nav,
    Container,
    Modal,
    UncontrolledTooltip
} from "reactstrap";
import { userActions } from '../../redux/actions/userAction';

const ToolHeader = props => {

    //REDUX
    const user = useSelector(state => state.updateData.user)
    const dispatch = useDispatch()

    // STATE
    const [collapseOpen, setCollapseOpen] = useState(false)
    const [modalSearch, setModalSearch] = useState(false)
    const [color, setClor] = useState("navbar-transparent")

    const updateColor = useCallback(() => {
        if (window.innerWidth < 993 && collapseOpen) {
            setClor("bg-white")
        } else { setClor("navbar-transparent") }
    }, [collapseOpen])



    useEffect(() => {
        window.addEventListener("resize", updateColor);
        return () => {
            window.removeEventListener("resize", updateColor);
        }
    }, [updateColor]);

    // function that adds color white/transparent to the navbar on resize (this is for the collapse)

    // this function is to open the Search modal
    const toggleModalSearch = () => { setModalSearch(!modalSearch) };

    // this function opens and closes the collapse on small devices
    const toggleCollapse = () => {
        if (collapseOpen) {
            setClor("navbar-transparent")
        } else { setClor("bg-white") }
        setCollapseOpen(!collapseOpen)
    };



    return (
        <Fragment>
            <Navbar
                className={classNames("navbar-absolute", {
                    [color]:
                        props.location.pathname.indexOf("full-screen-map") === -1
                })}
                expand="lg"
            >
                <Container fluid>
                    <div className="navbar-wrapper">
                        <div className="navbar-minimize d-inline">
                            <Button
                                className="minimize-sidebar btn-just-icon"
                                color="link"
                                id="tooltip209599"
                                onClick={props.handleMiniClick}
                            >
                                <i className="tim-icons icon-align-center visible-on-sidebar-regular" />
                                <i className="tim-icons icon-bullet-list-67 visible-on-sidebar-mini" />
                            </Button>
                            <UncontrolledTooltip
                                delay={0}
                                target="tooltip209599"
                                placement="right"
                            >
                                Sidebar toggle
                            </UncontrolledTooltip>
                        </div>
                        <div
                            className={classNames("navbar-toggle d-inline", {
                                toggled: props.sidebarOpened
                            })}
                        >
                            <button
                                className="navbar-toggler"
                                type="button"
                                onClick={props.toggleSidebar}
                            >
                                <span className="navbar-toggler-bar bar1" />
                                <span className="navbar-toggler-bar bar2" />
                                <span className="navbar-toggler-bar bar3" />
                            </button>
                        </div>
                        <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                            {props.brandText}
                        </NavbarBrand>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navigation"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={toggleCollapse}
                    >
                        <span className="navbar-toggler-bar navbar-kebab" />
                        <span className="navbar-toggler-bar navbar-kebab" />
                        <span className="navbar-toggler-bar navbar-kebab" />
                    </button>
                    <Collapse navbar isOpen={collapseOpen}>
                        <Nav className="ml-auto" navbar>
                            <InputGroup className="search-bar" tag="li">
                                <Button
                                    color="link"
                                    data-target="#searchModal"
                                    data-toggle="modal"
                                    id="search-button"
                                    onClick={toggleModalSearch}
                                >
                                    <i className="tim-icons icon-zoom-split" />
                                    <span className="d-lg-none d-md-block">Search</span>
                                </Button>
                            </InputGroup>
                            <UncontrolledDropdown nav>
                                <DropdownToggle
                                    caret
                                    color="default"
                                    data-toggle="dropdown"
                                    nav
                                >
                                    <div className="notification d-none d-lg-block d-xl-block" />
                                    <i className="tim-icons icon-sound-wave" />
                                    <p className="d-lg-none">Notifications</p>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-navbar" right tag="ul">
                                    <NavLink tag="li">
                                        <DropdownItem className="nav-item">
                                            Mike John responded to your email
                                </DropdownItem>
                                    </NavLink>
                                    <NavLink tag="li">
                                        <DropdownItem className="nav-item">
                                            You have 5 more tasks
                                </DropdownItem>
                                    </NavLink>
                                    <NavLink tag="li">
                                        <DropdownItem className="nav-item">
                                            Your friend Michael is in town
                                </DropdownItem>
                                    </NavLink>
                                    <NavLink tag="li">
                                        <DropdownItem className="nav-item">
                                            Another notification
                                </DropdownItem>
                                    </NavLink>
                                    <NavLink tag="li">
                                        <DropdownItem className="nav-item">
                                            Another one
                                </DropdownItem>
                                    </NavLink>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav>
                                <DropdownToggle
                                    caret
                                    color="default"
                                    data-toggle="dropdown"
                                    nav
                                    onClick={e => e.preventDefault()}
                                >
                                
                                    <div className="photo">
                                        {user.profile ?
                                            <img alt="..." src={user.profile.avatar} /> : null}

                                    </div>
                                    <b className="caret d-none d-lg-block d-xl-block ml-2" />
                                    <p className="d-lg-none">Log out</p>

                                </DropdownToggle>

                                <DropdownMenu className="dropdown-navbar" right tag="ul">
                                    <span
                                        className="mt-2 mb-2"
                                        style={{
                                            display: "flex",
                                            justifyContent: "center"
                                        }}>{user.username}</span>
                                    <DropdownItem divider tag="li" />

                                    <NavLink tag="li">
                                        <DropdownItem className="nav-item">Profile</DropdownItem>
                                    </NavLink>
                                    <NavLink tag="li">
                                        <DropdownItem
                                            tag={Link}
                                            to={`settings/${user.username}/`}
                                            className="nav-item">Settings</DropdownItem>
                                    </NavLink>
                                    <DropdownItem divider tag="li" />
                                    <NavLink tag="li">
                                        <DropdownItem
                                            onClick={e => dispatch(userActions.logout())}
                                            className="nav-item">Log out</DropdownItem>
                                    </NavLink>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <li className="separator d-lg-none" />
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            <Modal
                modalClassName="modal-search"
                isOpen={modalSearch}
                toggle={toggleModalSearch}
            >
                <div className="modal-header">
                    <Input id="inlineFormInputGroup" placeholder="SEARCH" type="text" />
                    <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={toggleModalSearch}
                    >
                        <i className="tim-icons icon-simple-remove" />
                    </button>
                </div>
            </Modal>
        </Fragment>
    );
}

export default ToolHeader;