import { Fragment } from "react";
import Button from "../../Button/Button";

const  Diagnostic = (props) => {
    return (
        <Fragment>
            <h1>This is Diagnostic Form</h1>
            <Button variant='secondary' onClick={props.facilityHomeHandler}>Back</Button>
        </Fragment>
        
    )
}

export default  Diagnostic;