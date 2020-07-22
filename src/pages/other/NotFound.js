import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";


const NotFound = () => {

    return (
        <Fragment>
            <MetaTags>
                <title>HomePage</title>
                <meta
                name="description"
                content="Intranet pour lanner"
                />
            </MetaTags>
         <h1> ERROR 404</h1>
        </Fragment>
    )
}

export default NotFound;