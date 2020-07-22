import React, { Fragment } from 'react';

import { 
    Col, 
    Card,
    CardHeader,
    Badge,
    CardTitle,
    CardBody,
    Button
 } from "reactstrap";

import CardDelivery from '../../components/princing/CardDelivery';

const PrincingCardBody = ({ cardPrincing }) => {
    const { id, badge, price, informations } = cardPrincing
    
    return ( 
        <Fragment>
            <Col md="4">
                <Card key={ id }className="card-pricing">
                    <CardHeader className="bg-info">
                        <Badge className="badge-default">{ badge }</Badge>
                        <CardTitle tag="h1">
                        <small>CHF</small>
                        { price }
                        </CardTitle>
                        <h5>per month</h5>
                    </CardHeader>
                    <CardBody>
                        {informations.map(rep => {
                        return (  
                            <CardDelivery dataDelivery={rep}/>
                        )})}
                        <Button
                        className="mt-4"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        >
                        SIGN UP
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
     );
}
 
export default PrincingCardBody;

