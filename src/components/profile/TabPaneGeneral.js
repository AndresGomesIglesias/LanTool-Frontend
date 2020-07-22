import React, { Fragment } from "react";
import { Input, Row, Button, Col, FormGroup, CardHeader, CardBody, Form } from "reactstrap";

const SettingsInformations = ({ handleChange, dataInput, handleSubmit, handleClick }) => {
    const { username, email, first_name, last_name, description } = dataInput



    return (
        <Fragment>
            <Form onSubmit={e => handleSubmit(e)}>
                <CardHeader>
                    <h3 className="title">General information</h3>
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
                                    value={username}
                                    id="username"
                                    name="username"
                                    required="required"
                                    type="text"
                                    onChange={e => handleChange(e)}
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
                                    Value={first_name}
                                    id="firstname"
                                    name="first_name"
                                    type="text"
                                    onChange={e => handleChange(e)}
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
                                    value={last_name}
                                    id="lastname"
                                    name="last_name"
                                    type="text"
                                    onChange={e => handleChange(e)}
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
                                    value={email}
                                    name="email"
                                    required="required"
                                    type="email"
                                    onChange={e => handleChange(e)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                            <label className="labels mt-0" htmlFor="#description">
                                Description
                              </label>
                        </Col>
                        <Col className="align-self-center" md="9">
                            <FormGroup>
                                <Input
                                    id="description"
                                    value={description}
                                    name="description"
                                    type="textarea"
                                    onChange={e => handleChange(e)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
                <Row className="mt-5 ml-1 mb-4 pt-3">
                    <Col>
                        <Button
                            color="info"
                            type="submit"
                            onClick={e => handleClick(e)}
                        >
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

export default SettingsInformations;