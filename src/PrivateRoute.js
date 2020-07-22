import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {


    return (
        <Fragment>
            <Route {...rest} render={props => (
                localStorage.getItem('user')?
                    <Component {...props} />
                    :
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )} />
        </Fragment>
    )
}

export default PrivateRoute