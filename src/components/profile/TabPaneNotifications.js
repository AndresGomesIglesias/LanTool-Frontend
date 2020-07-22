
import React, { Fragment, useState } from "react";

import Select from "react-select";
import { Input, Row, Button, Col, FormGroup, CardHeader, CardBody, Form } from "reactstrap";

const TabPaneClub = () => {


    return (
        <Fragment>
            <Form >
                <CardHeader>
                    <h3 className="title">eSport Club informations</h3>
                </CardHeader>
                <CardBody className="mb-4 ">
                    <hr className="line-info w-100 mt-1" />
                    <br />
                    <Row>
                        <Col className="align-self-center" md="3">
                            <label className="labels" htmlFor="#username"> Username* </label>
                        </Col>
                        <Col className="align-self-center" md="9">
                            <FormGroup>
                                <Input
                                    id="username"
                                    name="username"
                                    required="required"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="align-self-center" md="3">
                            <label className="labels" htmlFor="#firstname"> First Name </label>
                        </Col>
                        <Col className="align-self-center" md="9">
                            <FormGroup>
                                <Input
                                    id="firstname"
                                    name="first_name"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="align-self-center" md="3">
                            <label className="labels" htmlFor="#lastname"> Last Name </label>
                        </Col>
                        <Col className="align-self-center" md="9">
                            <FormGroup>
                                <Input
                                    id="lastname"
                                    name="last_name"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="align-self-center" md="3">
                            <label className="labels" htmlFor="#email">
                                Email*
                              </label>
                        </Col>
                        <Col className="align-self-center" md="9">
                            <FormGroup>
                                <Input
                                    id="email"
                                    name="email"
                                    required="required"
                                    type="email"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                            <label className="labels mt-0" htmlFor="#about">
                                About
                              </label>
                        </Col>
                        <Col className="align-self-center" md="9">
                            <FormGroup>
                                <Input
                                    id="about"
                                    name="about"
                                    required="required"
                                    type="textarea"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
                <Row className="mt-5 ml-1 mb-4 pt-3">
                    <Col>
                        <Button color="info" type="submit">
                            Save Changes
                              </Button>
                        <Button
                            className="btn-simple ml-4"
                            color="info"
                            type="button"
                        >
                            Cancel
                              </Button>
                    </Col>
                </Row>
            </Form>
        </Fragment>
    );
}

export default TabPaneClub;