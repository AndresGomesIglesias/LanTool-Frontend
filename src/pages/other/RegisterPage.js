import React from "react";
import { connect } from 'react-redux'

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  CardImg,
  Label,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

import { userActions } from "../../redux/actions/userAction"

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFullName: "",
      loginFullNameState: "",

      loginEmail: "",
      loginEmailState: "",

      loginPassword: "",
      loginPasswordState: "",
      passwordError: "",

      squares1to6: "",
      squares7and8: "",
      checked: false
    };
    this.handleChangeCheckeBox = this.handleChangeCheckeBox.bind(this);

  }
  componentDidUpdate(prevState) {
    if (this.props.status === 500 && this.props.status !== prevState.status) {
      this.setState({ loginFullNameState: "has-danger" });
    }
  }

  componentDidMount() {
    const getEmail = sessionStorage.getItem('email')
    if (getEmail !== "" && getEmail) {
      this.setState({ loginEmail: getEmail });
      this.setState({ loginEmailState: "has-success" });
    }
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("register-page");
    document.body.classList.add("overflow-hidden");
    // document.documentElement.addEventListener("mousemove", this.followCursor);
  }
  componentWillUnmount() {
    document.body.classList.remove("register-page");
    document.body.classList.remove("overflow-hidden");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
  }

  followCursor = event => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    this.setState({
      squares1to6:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)",
      squares7and8:
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    });
  };
  verifyEmail = value => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };
  verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };


  handleChange = (event, stateName, type, stateNameEqualTo, maxValue) => {

    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "password":
        if (this.verifyLength(event.target.value, 8)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;

      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  };

  isValidated = () => {
    if (
      this.state.loginFullNameState === "has-success" &&
      this.state.loginEmailState === "has-success" &&
      this.state.loginPasswordState === "has-success"
    ) {
      return true;
    } else {
      if (this.state.loginFullNameState !== "has-success") {
        this.setState({ loginFullNameState: "has-danger" });
      }
      if (this.state.lastnameState !== "has-success") {
        this.setState({ lastnameState: "has-danger" });
      }
      if (this.state.loginEmailState !== "has-success") {
        this.setState({ loginEmailState: "has-danger" });
      }
      if (this.state.loginPasswordState !== "has-success") {
        this.setState({ loginPasswordState: "has-danger" });
      }
      return false;
    }
  };

  handleClick = () => {
    console.log(this.state)
    if (this.isValidated() && this.state.checked) {
      return this.props.register(this.state)
    }
  };

  handleChangeCheckeBox() {
    this.setState({
      checked: !this.state.checked
    })
  }


  render() {
   

    let {
      loginFullNameState,
      loginEmailState,
      loginEmail,
      loginPasswordState,
      checked
    } = this.state;
    return (
      <>
        <div className="wrapper" ref="wrapper">
          <div className="page-header" style={{}}>
            <div className="page-header-image" />
            <Container>

              <Row >
                <div
                  className="square square-7"
                  id="square7"
                  style={{ transform: this.state.squares7and8 }}
                />
                <div
                  className="square square-8"
                  id="square8"
                  style={{ transform: this.state.squares7and8 }}
                />
                <Col md="6" className="center" >
                  <Form id="LoginValidation">

                    <Card className="card-register">
                      <CardHeader>
                        <CardImg
                          alt="..."
                          src={require("../../assets/img/square1.png")}
                        />
                        <CardTitle tag="h4">Register</CardTitle>
                      </CardHeader>

                      <CardBody>

                        <FormGroup className={`has-label ${loginFullNameState}`}>
                          <label>Full Name *</label>
                          <Input
                            name="fullname"
                            type="text"
                            onChange={e =>
                              this.handleChange(e, "loginFullName", "length", 1)
                            }
                          />
                          {
                            this.props.status === 500 ?
                              <label className="error">Username allready took</label> :
                              (loginFullNameState === "has-danger" ? (
                                <label className="error">This field may not be blank.</label>
                              ) : null)
                          }

                        </FormGroup>
                        <FormGroup className={`has-label ${loginEmailState}`}>
                          <label>Email Address *</label>
                          <Input
                            name="loginEmail"
                            type="email"
                            value={loginEmail}
                            onChange={e => this.handleChange(e, "loginEmail", "email")}
                          />
                          {loginEmailState === "has-danger" ? (
                            <label className="error">
                              <label className="error">Enter a valid email address.</label>
                            </label>
                          ) : null}
                        </FormGroup>
                        <FormGroup className={`has-label ${loginPasswordState}`}>
                          <label>Password *</label>
                          <Input
                            name="loginPassword"
                            type="password"
                            autoComplete="off"
                            onChange={e =>
                              this.handleChange(e, "loginPassword", "password")
                            }
                          />
                          {loginPasswordState === "has-danger" ? (
                            <label className="error">Ensure this field has at least 8 characters.</label>
                          ) : null}


                        </FormGroup>
                        <FormGroup check className="text-left">
                          <Label className={checked ? null : "text-danger"} check>
                            <Input id="invalidCheck3" required checked={checked} onChange={this.handleChangeCheckeBox} type="checkbox" />
                            <span className="form-check-sign " />I m a event organizer * {" "}
                          </Label>
                        </FormGroup>
                      </CardBody>
                      <CardFooter className="text-left">
                        {this.props.registering ?
                          <Button color="primary" onClick={this.handleClick} disabled>
                            Loading....
                          </Button>
                          :
                          <Button color="primary" onClick={this.handleClick} >
                           Register
                        </Button>}
                      </CardFooter>
                    </Card>
                  </Form>
                </Col>
              </Row>
            </Container>
            <div className="register-bg" />
            <div
              className="square square-1"
              id="square1"
              style={{ transform: this.state.squares1to6 }}
            />
            <div
              className="square square-2"
              id="square2"
              style={{ transform: this.state.squares1to6 }}
            />
            <div
              className="square square-3"
              id="square3"
              style={{ transform: this.state.squares1to6 }}
            />
            <div
              className="square square-4"
              id="square4"
              style={{ transform: this.state.squares1to6 }}
            />
            <div
              className="square square-5"
              id="square5"
              style={{ transform: this.state.squares1to6 }}
            />
            <div
              className="square square-6"
              id="square6"
              style={{ transform: this.state.squares1to6 }}
            />
          </div>
        </div>
      </>
    );
  }
}

// RegisterPage.propTypes = {
//   register: PropTypes.func,
//   history: PropTypes.shape({
//     push: PropTypes.func
//   }),
//   register: PropTypes.shape({
//     errors: PropTypes.any
//   })

// }


const mapDispatchToProps = (dispatch) => ({
  register: (reg, loca) => {
    dispatch(userActions.register(reg, loca))
  }
})

const mapStateToProps = state => {
  const { status, registering } = state.registerData;
  return {
    status: status,
    registering: registering
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
// export default RegisterPage
