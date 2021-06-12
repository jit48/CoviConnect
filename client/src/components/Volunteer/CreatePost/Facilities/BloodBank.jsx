import { Fragment } from "react";
import Button from "../../Button/Button";

const BloodBank = (props) => {
    return (
        <Fragment>
            <h1>This is Blood Bank Form</h1>
            <Button variant='secondary' onClick={props.facilityHomeHandler}>Back</Button>
        </Fragment>
    )
}

export default BloodBank;