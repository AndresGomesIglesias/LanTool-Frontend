import React, { Fragment } from 'react';
import { Col } from "reactstrap";


const HeaderPrincing = ({ HeaderPrincingJson }) => {
    const { title, description } = HeaderPrincingJson.header

    return ( 
        <Fragment>
            <div className="row">
                <Col id="test"  className="ml-auto mr-auto text-center" md="6">
                    <h2 className="title rowAncre">{ title }</h2>
                    <h4 className="description">{ description }</h4>
                    <div className="section-space" />
                </Col>
            </div>
        </Fragment>
     );
}
 
export default HeaderPrincing;