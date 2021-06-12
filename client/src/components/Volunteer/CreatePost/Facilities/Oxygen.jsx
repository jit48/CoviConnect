import { Fragment } from 'react';
import Button from '../../../Button/Button';

const Oxygen = (props) => {
    return (
        <Fragment>
            <h1>This is Oxygen Form</h1>
            <Button variant='secondary' onClick={props.facilityHomeHandler}>
                Back
            </Button>
        </Fragment>
    );
};

export default Oxygen;
