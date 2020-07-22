
import React, { Fragment, useState } from "react";
import Select from "react-select";
import Switch from "react-bootstrap-switch";


import {
    TabContent,
    TabPane,
    Button,
    Input,
    Container,
    Row,
    Col,
    FormGroup,
    Label,
    Form,
    Table,
    Alert,
    CardHeader,
    CardBody
} from "reactstrap";

const SettingsInformations = ({ toggleTabs, profileTabs }) => {
    const [choses, setChoses] = useState({
        gender: "",
        month: "",
        day: ""
    })

    return (
        <Fragment>

            <TabPane tabId="profile2">
                <header>
                    <h2 className="text-uppercase">Billing method</h2>
                </header>
                <hr className="line-info" />
                <br />
                <Table className="align-items-center">
                    <thead>
                        <tr>
                            <th scope="col">Card Type</th>
                            <th scope="col">Card Number</th>
                            <th scope="col">Payment Method</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                <img
                                    alt="..."
                                    className="avatar"
                                    src={require("../../assets/img/visas.png")}
                                />
                            </th>
                            <td>
                                <span className="d-block">
                                    •••• •••• •••• 8372
                                </span>
                                <small className="text-muted">Exp: 06/22</small>
                            </td>
                            <td className="text-center">
                                <FormGroup check className="form-check-radio">
                                    <Label check>
                                        <Input
                                            defaultChecked
                                            defaultValue="option2"
                                            id="Radios"
                                            name="exampleRadios"
                                            type="radio"
                                        />
                                        <span className="form-check-sign" />
                                    </Label>
                                </FormGroup>
                            </td>
                            <td>
                                <Button
                                    className="btn-simple"
                                    color="danger"
                                    size="sm"
                                    type="button"
                                >
                                    <i className="tim-icons icon-simple-remove" />{" "}
                                  Remove card
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <img
                                    alt="..."
                                    className="avatar"
                                    src={require("../../assets/img/mastercard.png")}
                                />
                            </th>
                            <td>
                                <span className="d-block">
                                    •••• •••• •••• 1225
                                </span>
                                <small className="text-muted">Exp: 07/21</small>
                            </td>
                            <td className="text-center">
                                <FormGroup check className="form-check-radio">
                                    <Label check>
                                        <Input
                                            defaultValue="option1"
                                            id="Radios"
                                            name="exampleRadios"
                                            type="radio"
                                        />
                                        <span className="form-check-sign" />
                                    </Label>
                                </FormGroup>
                            </td>
                            <td>
                                <Button
                                    className="btn-simple"
                                    color="danger"
                                    size="sm"
                                    type="button"
                                >
                                    <i className="tim-icons icon-simple-remove" />{" "}
                                  Remove card
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Button color="info" size="sm" type="button">
                    <i className="tim-icons icon-simple-add" /> Add card
                        </Button>
            </TabPane>
        </Fragment>
    );
}

export default SettingsInformations;