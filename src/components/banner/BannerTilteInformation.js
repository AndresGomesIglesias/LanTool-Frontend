
import React, { Fragment } from "react";


const BannierTitleInformation = () => {
    return (  
        <Fragment>
            <h1 className="header tt center-align orange-text">LANTOOL</h1>
            <div className="center-align row">
                <h5 className="header col s12 light">The best tool for lan party or events eSport</h5>
            </div>
            <div className="center-align ">
                <a href="http://localhost:3001/addevent" id="download-button"
                    className="btn-large waves-effect waves-light orange">New event</a>
            </div>
            <br></br>
            <br></br>
        </Fragment>
    );
}
 
export default BannierTitleInformation;
