import { Fragment } from "react";
import Button from "../../Button/Button";

const Ambulance  = (props) => {
    return (
        <Fragment>
            <h1>This is Ambulance Form</h1>
            <Button variant='secondary' onClick={props.facilityHomeHandler}>Back</Button>
        </Fragment>
    )
}

export default Ambulance ;