import { Fragment } from 'react';
import Button from '../../../Button/Button';

const Pharmacies = (props) => {
    return (
        <Fragment>
            <h1>This is Pharmacies Form</h1>
            <Button variant='secondary' onClick={props.facilityHomeHandler}>
                Back
            </Button>
        </Fragment>
    );
};

export default Pharmacies;
