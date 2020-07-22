import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Col } from "reactstrap";

import DescriptionBloc from "../../components/overView/DescriptionBloc";
import AninationBloc from "../../components/overView/AninationBloc";

const FocusFeature = ({ infoBlocJson }) => {
  return ( 
      <Fragment>
        <div id={ infoBlocJson.id } className="section section-basic-components">
          <div className="container">
            <div className="row">
              <Col className="ml-auto mr-auto" lg="5" md="7">
                { infoBlocJson.position ==="left" ?  
                <DescriptionBloc props={infoBlocJson}/> : 
                <AninationBloc  props={infoBlocJson} containerInvers={"container-right"}/> }
              </Col>
              <Col lg="6" md="12">
                { infoBlocJson.position ==="left" ? 
                <AninationBloc props={infoBlocJson} /> : 
                <DescriptionBloc  dataInfo={infoBlocJson} containerInvers={"container-right"} props={infoBlocJson}/> }
              </Col>
            </div>
          </div>
        </div>
      </Fragment>
   );
}

FocusFeature.propTypes = {
  infoBlocJson: PropTypes.any
}
 
export default FocusFeature;

