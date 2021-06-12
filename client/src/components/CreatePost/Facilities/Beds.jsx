import { Fragment } from "react";
import Button from "../../Button/Button";

const Beds = (props) => {
    return (
        <Fragment>
            <h1>This is Beds Form</h1>
            <Button variant='secondary' onClick={props.facilityHomeHandler}>Back</Button>
        </Fragment>
    )
}

export default Beds;