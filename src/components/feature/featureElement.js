import React, { Fragment } from 'react';



const featureElement = props => {

    const {title, classN, icone, imagePath, description, topMargin } = props.data;
   
    return ( 
        <Fragment>
            <div className="info info-hover" style={{marginTop: topMargin}}>
                <div className={ classN }>
                    <img
                    alt="..."
                    className="bg-blob"
                    src={require("../../assets/img/feature-blob/"+imagePath)}
                    />
                    <i className={ icone } />
                </div>
                <h2 className="info-title">{ title }</h2>
                <h4 className="description">{ description }</h4>
            </div>
        </Fragment>
     );
}
 
export default featureElement;