import React, { Fragment,useRef, useEffect } from "react";

import FirstPageHeader from "../../wrappers/header/FirstPageHeader";
import MainLayout from "../../layouts/MainLayout";

import Feature from "../../wrappers/overView/feature";
import FocusFeature from "../../wrappers/overView/FocusFeature";

import infoBlocJson from "../../data/infoBloc"


const HomePage = props => {
  console.log('props', props)

  let wrapper = useRef("wrapper");
  let contentRef = useRef(wrapper)
  
  useEffect(() => {
    document.body.classList.add("presentation-page");
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    contentRef.current.current.scrollTop = 0;
  });
  
  useEffect(() => {
    return () => {
      document.body.classList.remove("presentation-page");
    }
  }, []);

  return ( 
    <Fragment>
      <MainLayout wrapper={wrapper}>
          <FirstPageHeader history={props}/>
          <Feature />
          <div className="space-110" />
          <div className="space-110" />
          <FocusFeature infoBlocJson={infoBlocJson[0]}/>
          <FocusFeature infoBlocJson={infoBlocJson[1]}/>
          <FocusFeature infoBlocJson={infoBlocJson[2]}/>
          <div className="space-110" />
          <div className="space-110" />
      </MainLayout>
    </Fragment>
   );
}
 
export default HomePage;
