import PropTypes from "prop-types";
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useLocation } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import NotificationAlert from "react-notification-alert";
import Sidebar from "../wrappers/sidebar/ToolSideBar"
import Toolheader from "../wrappers/header/Toolheader"
import logo from "../assets/tool/img/react-logo.png";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin"
import {Row} from "reactstrap";


const LanToolLayout = props => {

    const [activeColor, setAtiveColor] = useState('blue')
    const [opacity, setOpacity] = useState()
    const [sidebarOpened, setSidebarOpened] = useState(false)
    const [sidebarMini, setSidebarMini] = useState(true)
    const mainPanel = useRef()
    const notificationAlert = useRef()
    const location = useLocation()
  

 
    useEffect(() => {
        const element = mainPanel.current;
        var ps = '';
        //Gestion du viewport
        if (navigator.platform.indexOf("Win") > -1) {
            document.documentElement.classList.add("perfect-scrollbar-on");
            document.documentElement.classList.remove("perfect-scrollbar-off");
            ps = new PerfectScrollbar(element);
            element.addEventListener("ps-scroll-y", showNavbarButton);
            let tables = document.querySelectorAll(".table-responsive");
            for (let i = 0; i < tables.length; i++) {
                ps = new PerfectScrollbar(tables[i]);
            }
        }
        window.addEventListener("scroll", showNavbarButton);
        return () => {
            if (navigator.platform.indexOf("Win") > -1) {
                ps.destroy();
                document.documentElement.classList.add("perfect-scrollbar-off");
                document.documentElement.classList.remove("perfect-scrollbar-on");
                element.removeEventListener("ps-scroll-y", showNavbarButton);
            }
        }
    }, [])



    const showNavbarButton = () => {
        if (
            document.documentElement.scrollTop > 50 ||
            document.scrollingElement.scrollTop > 50 ||
            mainPanel.scrollTop > 50
        ) {
            setOpacity({ opacity: 1 })
        } else if (
            document.documentElement.scrollTop <= 50 ||
            document.scrollingElement.scrollTop <= 50 ||
            mainPanel.current.scrollTop <= 50
        ) {
            setOpacity({ opacity: 0 })
        }
    };

    const handleMiniClick = () => {
        // let notifyMessage = "Sidebar mini ";
        if (document.body.classList.contains("sidebar-mini")) {
            setSidebarMini(false);
            // notifyMessage += "deactivated...";
        } else {
            setSidebarMini(true);
            // notifyMessage += "activated...";
        }
        // let options = {};
        // options = {
        //     place: "tr",
        //     message: notifyMessage,
        //     type: "primary",
        //     icon: "tim-icons icon-bell-55",
        //     autoDismiss: 7
        // };
        // notificationAlert.current.notificationAlert(options);
        document.body.classList.toggle("sidebar-mini");
    };

    const closeSidebar = () => {
        setSidebarOpened(false)
        document.documentElement.classList.remove("nav-open");
    };

    const toggleSidebar = () => {
        setSidebarOpened(!sidebarOpened)
        document.documentElement.classList.toggle("nav-open");
    };

    const handleActiveClick = color => {
        setAtiveColor(color)
    };

    return (
        <Fragment>

            <div className="wrapperBLACK">
                {/* ------------------------- NOTIFICATIONALERT ----------------------- */}
                <div className="rna-container">
                    <NotificationAlert ref={notificationAlert} />
                </div>
                <div
                    className="navbar-minimize-fixed"
                    style={{ opacity: opacity }}
                >
                    <button
                        className="minimize-sidebar btn btn-link btn-just-icon"
                        onClick={() => handleMiniClick()}
                    >
                        <i className="tim-icons icon-align-center visible-on-sidebar-regular text-muted" />
                        <i className="tim-icons icon-bullet-list-67 visible-on-sidebar-mini text-muted" />
                    </button>
                </div>
                {/* -------------------------END NOTIFICATIONALERT ----------------------- */}
                <Sidebar
                    {...props}
                    activeColor={activeColor}
                    logo={{
                        outterLink: "https://www.creative-tim.com/",
                        text: "Creative Tim",
                        imgSrc: logo
                    }}
                    closeSidebar={closeSidebar}
                />
                <div
                    className="main-panel mainPanel"
                    ref={mainPanel}
                    data={activeColor}
                >
                    <Toolheader
                        {...props}
                        handleMiniClick={handleMiniClick}
                        // brandText={this.getActiveRoute(routes)}
                        sidebarOpened={sidebarOpened}
                        toggleSidebar={toggleSidebar}
                        location={location}
                    />
                    {/* -------------------CONTENT COMPONENTS------------------- */}
                    <div className="content">
                        <Row>
                            {props.children}
                        </Row>
                    </div>
                    {/* -------------------NAVBAR RIGHT------------------------- */}
                    <FixedPlugin
                        activeColor={activeColor}
                        sidebarMini={sidebarMini}
                        andleActiveClick={handleActiveClick}
                        handleMiniClick={handleMiniClick}
                    />
                </div>

            </div>
        </Fragment >
    );
}

LanToolLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LanToolLayout;
