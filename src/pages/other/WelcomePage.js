import React, { Fragment } from 'react';
import ReactWizard from "react-bootstrap-wizard";
import { Col } from "reactstrap";
import LanToolLayout from '../../layouts/LanToolLayout';
import Step1 from "./WizardSteps/Step1";
import Step2 from "./WizardSteps/Step2";
import Step3 from "./WizardSteps/Step3";



const WelcomePage = () => {

   

    var steps = [
        {
            stepName: "Description",
            stepIcon: "tim-icons icon-trophy",
            component: Step1
        },
        {
            stepName: "Localisation",
            stepIcon: "tim-icons icon-square-pin",
            component: Step2
        },
        {
            stepName: "Dates",
            stepIcon: "tim-icons icon-delivery-fast",
            component: Step3
        }
    ];
    return (
        <Fragment>
            <LanToolLayout>
                <Col className="mr-auto ml-auto" md="10">
                    <ReactWizard
                        className="mt-0"
                        steps={steps}
                        navSteps
                        validate
                        title="Build Your LanParty"
                        description="This information will let us know more about your event."
                        headerTextCenter
                        finishButtonClasses="btn-wd btn-info"
                        nextButtonClasses="btn-wd btn-info"
                        previousButtonClasses="btn-wd"
                        progressbar
                        color="blue"
                    />
                </Col>
            </LanToolLayout>
        </Fragment>
    );
}

export default WelcomePage;










                                      





