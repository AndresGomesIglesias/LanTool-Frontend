import React, { Fragment } from "react"

const DescriptionBloc = props => {
    
    const {title, sousTitle, description} = props.props
    
    return ( 
        <Fragment>
            <h1 className="title">{ title }</h1>
            <h5 className="category text-primary"><strong>{ sousTitle }</strong></h5>
            <p className="description mt-5" style={{textAlign: "start"}}> { description } </p>
        </Fragment>
     );
}
 
export default DescriptionBloc
