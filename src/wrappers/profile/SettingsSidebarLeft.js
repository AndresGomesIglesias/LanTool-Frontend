
import React from "react";
import classnames from "classnames";


import ImageUpload from "../../components/CustomUpload/ImageUpload";
import {
    NavItem,
    NavLink,
    Nav,
    Col,
    CardHeader,
    CardBody
} from "reactstrap";

const SettingsSidebarLeft = ({ toggleTabs, profileTabs, user }) => {

    return (
        <Col>
            <CardHeader >
                <h3 className="title">{user.username}</h3>
            </CardHeader>

            <CardBody>
                <ImageUpload avatar avatarLink={user} addBtnColor="default" />
                <div className="section">
                    <section>
                        <br />
                        <Nav className="flex-column nav-tabs-info" role="tablist">
                            <NavItem>
                                <NavLink
                                    className={classnames("pl-0 pb-0", {
                                        active: profileTabs === 1
                                    })}
                                    onClick={e => toggleTabs(e, 1)}
                                    href="#pablo"
                                >
                                    <i className="tim-icons icon-single-02" /> General
                          </NavLink>
                            </NavItem>
                            <hr className="line-info w-100 mt-1" />
                            <NavItem>
                                <NavLink
                                    className={classnames("pl-0 pb-0", {
                                        active: profileTabs === 2
                                    })}
                                    onClick={e => toggleTabs(e, 2)}
                                    href="#pablo"
                                >
                                    <i className="tim-icons icon-credit-card" /> Club
                          </NavLink>
                            </NavItem>
                            <hr className="line-info  w-100 mt-1" />
                            <NavItem>
                                <NavLink
                                    className={classnames("pl-0 pb-0", {
                                        active: profileTabs === 3
                                    })}
                                    onClick={e => toggleTabs(e, 3)}
                                    href="#pablo"
                                >
                                    <i className="tim-icons icon-lock-circle" />{" "}
                            Security
                          </NavLink>
                            </NavItem>
                            <hr className="line-info  w-100 mt-1" />
                            <NavItem>
                                <NavLink
                                    className={classnames("pl-0 pb-0", {
                                        active: profileTabs === 4
                                    })}
                                    onClick={e => toggleTabs(e, 4)}
                                    href="#pablo"
                                >
                                    <i className="tim-icons icon-volume-98" />{" "}
                            Notifications
                          </NavLink>
                            </NavItem>
                            <hr className="line-info  w-100 mt-1" />
                        </Nav>
                    </section>
                </div>
            </CardBody>
        </Col>
    );
}

export default SettingsSidebarLeft;