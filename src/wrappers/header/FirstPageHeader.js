import React, { Fragment, useState } from "react";
import { verifyEmail } from "../../helpers/validatorHelper.js"
import Form from "../../components/header/Form"


const FirstPageHeader = props => {

  const [toggle, setToggle] = useState(false)
  const [email, setEmail] = useState()
  const [emailError, setEmailError] = useState()
  const [emailState, setEmailState] = useState()

  const change = e => {
    const { name, value } = e.target
    setEmail(value)
    if (name === 'email') {
      if (verifyEmail(value)) {
        setEmailError("")
        setEmailState("has-success")
      } else {
        setEmailError("required")
        setEmailState("has-danger")
      }
    }
  }

  const handleSubmit = e => {
    if (emailError !== "") {
      e.preventDefault()
      sessionStorage.removeItem("email")
      setEmailError("required")
      setEmailState("has-danger")
    }
    sessionStorage.setItem("email", email)
  }

  const handleChange = (e) => {
    change(e)
  }

  const handleFocus = (e) => {
    setToggle({ emailFocus: true })
    change(e)
  }

  const handleblur = (e) => {
    setToggle({ emailFocus: false })
  }

  return (
    <Fragment>
      <div className="page-header">
        <img alt="..." className="path" src={require("../../assets/img/blob.png")} />
        <img alt="..." className="path2" src={require("../../assets/img/path2.png")} />
        <img alt="..." className="shapes triangle" src={require("../../assets/img/triunghiuri.png")} />
        <img alt="..." className="shapes wave" src={require("../../assets/img/waves.png")} />
        <img alt="..." className="shapes squares" src={require("../../assets/img/patrat.png")} />
        <img alt="..." className="shapes circle" src={require("../../assets/img/cercuri.png")} />
        <div className="container" >
          <div className="content-center brand">
            <h1 className="h1-seo "> INTRA <small className="text-warning">Tools </small></h1>
            <h3> Your esport tool for big and small Lan </h3>
            <Form
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              email={email}
              emailError={emailError}
              emailState={emailState}
              toggle={toggle}
              handleFocus={handleFocus}
              handleblur={handleblur}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FirstPageHeader;










