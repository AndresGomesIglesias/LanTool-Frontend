import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux'
import axios from "axios";

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-pro-react.scss";
import "./assets/scss/black-dashboard-pro-react.scss";
import "./assets/demo/demo.css";
import "./assets/demo/react-demo.css";

import routes from "./routes.js";
import PrivateRoute from "./PrivateRoute";
import history from "./helpers/history";

const App = props => {
  const user = useSelector(state => state.loginData.user)


  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:8000/api/v1/accounts/update/${user.id}/`, { headers: { 'Content-Type': 'application/json' } })
        .then(rep => {
          localStorage.setItem('user', JSON.stringify(rep.data))
        })
        .catch(err => {
          localStorage.removeItem('user')
        })
    }
    return () => { }
  }, [user])

  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      switch (prop.layout) {
        case "":
          // if (localStorage.getItem('user') && prop.layout === "") {
          //   // return (
          //   //   history.push('/wellcome')
          //   // )
          // } else {
          return (
            <Route
              exact
              path={prop.path}
              component={prop.component}
              key={key}
            />
          );


        case "admin":
          return (
            <PrivateRoute
              exact
              path={prop.path}
              component={prop.component}
              key={key}
            />
          );
        default:
          return null

      }
    });
  };


  return (
    < Fragment>
      <Router history={history}>
        <Switch>
          {getRoutes(routes)}
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
