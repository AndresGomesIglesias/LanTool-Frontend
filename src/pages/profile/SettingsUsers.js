import React, { Fragment, useEffect, useState } from "react";
import { Col, Card } from "reactstrap";
import { useSelector } from 'react-redux'
import LanToolLayout from '../../layouts/LanToolLayout'
import SettingsSidebarLeft from "../../wrappers/profile/SettingsSidebarLeft";
import SettingsInformations from "../../wrappers/profile/SettingsInformations";



const SettingsUsers = () => {
  const [profileTabs, setProfileTabs] = useState(1)
  const user = useSelector(state => state.loginData.user)

  const toggleTabs = (e, index) => {
    e.preventDefault();
    setProfileTabs(index)
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    // wrapper.current.current.scrollTop = 0;
    document.body.classList.add("account-settings");
    return () => {
      document.body.classList.remove("account-settings");
    }
  }, [])

  return (
    <Fragment>
      <LanToolLayout>
        <Col xl="9" md="9">
          <Card className="mt-0">
            <SettingsInformations
              profileTabs={profileTabs}
              toggleTabs={toggleTabs}
              user={user}
            />

          </Card>
        </Col>
        <Col md="3" xl="3" >
          <Card className="mt-0">
            <SettingsSidebarLeft
              profileTabs={profileTabs}
              toggleTabs={toggleTabs}
              user={user}
            />
          </Card>
        </Col>
      </LanToolLayout>
    </Fragment>
  );
}

export default SettingsUsers;
