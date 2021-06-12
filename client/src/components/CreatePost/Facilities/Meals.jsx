import { Fragment } from "react";
import Button from "../../Button/Button";

const  Meals = (props) => {
    return (
        <Fragment>
            <h1>This is Meals Form</h1>
            <Button variant='secondary' onClick={props.facilityHomeHandler}>Back</Button>
        </Fragment>
    )
}

export default  Meals;