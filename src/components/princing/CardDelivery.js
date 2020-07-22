import React, { Fragment } from 'react';

const CardDelivery = ({ dataDelivery })  => {
    const { iconClass, info } = dataDelivery
    
    return ( 
        <Fragment>
            <ul style={{borderBottom: "1px solid rgba(52,70,117,.3)"}}>
                <li>
                    <i className={"tim-icons " + iconClass } /> { info }
                </li>
            </ul>
        </Fragment>
     );
}
 
export default CardDelivery;

