import React, { Fragment } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Button, Col, Row,Input, InputGroupText, InputGroupAddon, InputGroup } from "reactstrap";

const Form = ({
    handleSubmit,
    emailError,
    email,
    emailState,
    toggle,
    handleFocus,
    handleblur,
    handleChange }) => {
    return (
        <Fragment>
        
            <form action="/register" method="get" onSubmit={(e) => handleSubmit(e)}>
                <Row className="row-input col-lg-12">
                    <Col className="pr-0" lg="8" md="12" xs="12">
                        <InputGroup
                            className={classnames(emailState, {
                                "input-group-focus": toggle.emailFocus
                            })}
                        >
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="tim-icons icon-email-85" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                className="col-lg-12"
                                name="email"
                                placeholder="Email..."
                                type="text"
                                value={email}
                                onChange={e => handleChange(e)}
                                onFocus={e => handleFocus(e)}
                                onBlur={e => handleblur(e)}
                            />
                            {emailState === "has-danger" ? (
                                <label className="error col-lg-12">{emailError}</label>
                            ) : null}
                        </InputGroup>
                    </Col>
                    <Col className="pl-0" lg="4" md="12" xs="12">
                        <Col md="2" xs="2"></Col>
                        <Col md="auto" xs="auto">
                            <button
                                type="submit"
                                style={{ fontSize: "0.8em" }}
                                className="btn-warning auto btn-simple pl-2 pr-2">
                                Create a free account
                            </button>
                        </Col>
                        <Col md="2" xs="2"></Col>
                    </Col>
                    <Button
                        className="col-lg-12 btn-link mt-4 d-block"
                        color="warning"
                        href="/"
                    >
                        <u>Live demo</u>
                    </Button>
                </Row>
            </form>

        </Fragment>
    );
}

Form.propTypes = {
  email: PropTypes.any,
  emailError: PropTypes.string,
  emailState: PropTypes.string,
  handleChange: PropTypes.func,
  handleFocus: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleblur: PropTypes.func,
  toggle: PropTypes.bool
}

export default Form;