
import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { TabContent, TabPane } from "reactstrap";
import usePrevious from "../../hooks/usePrevious"
import TabPaneGeneral from "../../components/profile/TabPaneGeneral"
import { userActions } from "../../redux/actions/userAction"
import TabPaneClub from "../../components/profile/TabPaneClub";


const SettingsInformations = ({ profileTabs, user }) => {
    const dispatch = useDispatch()
    const [dataInput, setDataInput] = useState({})
    const file = useSelector(state => state.updateData.file)
    const prevCount = usePrevious(user);

    useEffect(() => {
     
        if (user && user !== prevCount) {
            setDataInput({
                id: user.id,
                username: user.username,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                description: user.profile.description,

            })
        }
        return () => { }
    },[user, prevCount]);
    const handleChange = e => {
        const { value, name } = e.target
        setDataInput({ ...dataInput, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(userActions.update(dataInput))
    
    }

    const handleClick = e => {
        if (file || typeof file === 'object') return dispatch(userActions.avatarUpdate(file, user))
        
        
    }

    return (
        <Fragment>
            <TabContent activeTab={"profile" + profileTabs}>
                <TabPane tabId="profile1">
                    <TabPaneGeneral
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        handleClick={handleClick}
                        dataInput={dataInput}
                    />
                </TabPane>
                <TabPane tabId="profile2">
                    <TabPaneClub />

                </TabPane>
            </TabContent>
        </Fragment>
    );
}

export default SettingsInformations;