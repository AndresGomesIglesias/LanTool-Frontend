import PropTypes from "prop-types";
import React, { Fragment } from "react";


import ColorNavbar from "../../src/wrappers/header/Header";
import Footer from "../../src/wrappers/footer/Footer";



const MainLayout = ({ children, wrapper }) => {
    return (
        <Fragment>
            <ColorNavbar />
            <div className="wrapper" ref={wrapper}>
                {children}
            </div>
            <Footer />
        </Fragment>

    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
    wrapper: PropTypes.objectOf(PropTypes.string),
}

export default MainLayout
