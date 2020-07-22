import React, { Fragment, useState } from "react";
import { Input, Row, Button, Col, FormGroup, CardHeader, CardBody, Form } from "reactstrap";
import { clubService } from '../../services/clubSerice'

const TabPaneClub = () => {
    const [data, setData] = useState()

    const handleChange = e => {
        const { value, name } = e.target
        setData({ ...data, [name]: value })
    }


    const handleClick = e => {
        e.preventDefault()
        clubService.createClub(data)
    }

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
                            <label className="labels" htmlFor="#username"> Club name* </label>
                        </Col>
                        <Col className="align-self-center" md="9">
                            <FormGroup>
                                <Input
                                    id="name"
                                    name="name"
                                    required="required"
                                    type="text"
                                    onChange={e => handleChange(e)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="align-self-center" md="3">
                            <label className="labels" htmlFor="#firstname"> Tag </label>
                        </Col>
                        <Col className="align-self-center" md="9">
                            <FormGroup>
                                <Input
                                    id="tag"
                                    name="tag"
                                    type="text"
                                    onChange={e => handleChange(e)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="align-self-center" md="3">
                            <label className="labels" htmlFor="#lastname"> Site Web </label>
                        </Col>
                        <Col className="align-self-center" md="9">
                            <FormGroup>
                                <Input
                                    id="web"
                                    name="web"
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
                                    onChange={e => handleChange(e)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
                <Row className="mt-5 ml-1 mb-4 pt-3">
                    <Col>
                        <Button color="info" type="submit" onClick={e => handleClick(e)}>
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