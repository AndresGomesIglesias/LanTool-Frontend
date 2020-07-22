import React, { Fragment } from "react";
import { Col } from "reactstrap";

import FeatureElement from "../../components/feature/featureElement";

import featureJson from "../../data/feature.json"

const feature = () => {
  const { tilte, feature, button } = featureJson
  return ( 
    <Fragment>
      <div className="container" >
      <div  id="headers"  className="space-110" />
        <div className="row">
        <div  style={{marginBottom: "65px"}} className="text-center col-lg-12 col-md-12"><h1 className="title"> {tilte.title} </h1></div>
            {feature.map(rep => {
              return (
                <Col key={rep.id} md="4">
                  <FeatureElement data={rep} />
                </Col>
              )})}
                <div   className="col-lg-4"></div>
                <button className="mt-4 btn-warning btn-lg btn-simple col-lg-4" target="_blank">  { button.name } </button>
                <div className="col-lg-4"></div>
        </div>
      </div>
    </Fragment> 
  );
}
 
export default feature;

