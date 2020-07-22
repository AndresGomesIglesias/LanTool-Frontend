import React, { Fragment } from "react";

import MainLayout from "../../layouts/MainLayout";
import HeaderPrincing from "../../components/princing/HeaderPrincing";
import PrincingCardBody from "../../wrappers/princing/PrincingCardBody";

import PrincingJson from "../../data/princing"

const Princing = () => {

  return ( 
    <Fragment>
      <MainLayout>
       <div className="cd-section" id="pricing">
          <div className="pricing-1" id="pricing-1">
            <div className="container">
              <HeaderPrincing 
                HeaderPrincingJson={PrincingJson}
              />
              <div className="space-100" />
              <div className="row">
              {PrincingJson.card.map(rep => {
                return (
                  <PrincingCardBody cardPrincing={rep}/>
                )})}
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </Fragment>
   );

}
 
export default Princing;