import React, { Fragment, useState, useEffect } from "react";
import classnames from "classnames";
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";
import { userActions } from "../../redux/actions/userAction";


const LoginPage = props => {

  //REDUX
  const dispatch = useDispatch();

  //STATES
  const [toggle, setToggle] = useState(false);
  const [users, setUser] = useState({
    username: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);



  useEffect(() => {
    document.body.classList.add("login-page");
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    return () => {
      document.body.classList.remove("login-page");
    }
  }, [])

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...users, [name]: value });
  }

  const handleSubmit = (e) => {
    const { username, password } = users;
    e.preventDefault();
    if (users.username && users.password) {
     return dispatch(userActions.login(username, password))
    }
    setSubmitted(true);
  }

  return (
    <Fragment>
      <div className="page-header">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="page-header-image" />
        <Container>
          <Col className="mx-auto" lg="5" md="8">
            <Card className="card-login">
              <Form onSubmit={e => handleSubmit(e)}>
                <CardHeader>
                  <CardImg
                    alt="..."
                    src={require("../../assets/img/square-purple-1.png")}
                  />
                  <CardTitle tag="h4">Login</CardTitle>
                </CardHeader>
                <CardBody>
                  <InputGroup
                    className={classnames("input-lg",
                      { "input-group-focus": toggle.firstNameFocus },
                      { "has-danger": submitted })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Username..."
                      name="username"
                      type="text"
                      value={users.username}
                      onChange={e => handleChange(e)}
                      onFocus={e => setToggle({ firstNameFocus: true })}
                      onBlur={e => setToggle({ firstNameFocus: false })}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames("input-lg",
                      { "input-group-focus": toggle.lastNameFocus },
                      { "has-danger": submitted })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-caps-small" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="password"
                      className=" col-12"
                      type="password"
                      name="password"
                      value={users.password}
                      onChange={e => handleChange(e)}
                      onFocus={e => setToggle({ lastNameFocus: true })}
                      onBlur={e => setToggle({ lastNameFocus: false })}
                    />
                    {submitted ? (
                      <label className="error col-12 mt-2 pl-0">Unable to log in with provided credentials.</label>
                    ) : null}
                  </InputGroup>

              
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    block
                    type="submit"
                    className="btn-round"
                    color="primary"
                    size="lg"
                  >
                    Login
                    </Button>
                </CardFooter>
                <div className="pull-left ml-3 mb-3">
                  <h6>
                    <a
                      href="localhost:3000/register/"
                      className="link footer-link"
                      onClick={e => e.preventDefault()}
                    >
                      Create Account
                      </a>
                  </h6>
                </div>
                <div className="pull-right mr-3 mb-3">
                </div>
              </Form>
            </Card>
          </Col>
        </Container>
      </div>
    </Fragment>
  );
}

export default withRouter(LoginPage);
