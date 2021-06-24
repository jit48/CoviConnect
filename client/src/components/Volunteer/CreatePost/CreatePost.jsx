import { Fragment, useState } from 'react';
import classes from './CreatePost.module.css';
import RadioInput from '../../RadioInput/RadioInput';

import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import Beds from './Facilities/Beds';
import Oxygen from './Facilities/Oxygen';
import Ambulance from './Facilities/Ambulance';
import BloodBank from './Facilities/BloodBank';
import Meals from './Facilities/Meals';
import Diagnostic from './Facilities/DiagnosticCenter';
import Pharmacies from './Facilities/Pharmacies';

const CreatePost = () => {
    const [showModal, setShowModal] = useState(false);
    const [facility, setFacility] = useState('none');

    const modalHandler = () => {
        setShowModal((prevState) => {
            return !prevState;
        });
        setFacility('none');
    };

    const facilityHandler = (event) => {
        setFacility(event.target.value);
    };

    const facilityHome = () => {
        setFacility('none');
    };

    return (
        <Fragment>
            <Button variant='primary' onClick={modalHandler}>
                Create Post
            </Button>
            <Modal open={showModal} handleModal={modalHandler}>
                {facility === 'none' ? (
                    <Fragment>
                        <h1>Post an update on ?</h1>
                        <br />
                        <div className={classes.InputContainer}>
                            <RadioInput type='radio' name='Choice' value='Beds' label='Available Beds' onClick={facilityHandler} />
                            <RadioInput type='radio' name='Choice' value='Oxygen' label='Oxygen Cylinders' onClick={facilityHandler} />
                            <RadioInput type='radio' name='Choice' value='Ambulance' label='Ambulance Service' onClick={facilityHandler} />
                            <RadioInput type='radio' name='Choice' value='Meals' label='Free Meal Service' onClick={facilityHandler} />
                            <RadioInput type='radio' name='Choice' value='BloodBank' label='Blood Bank Leads' onClick={facilityHandler} />
                            <RadioInput
                                type='radio'
                                name='Choice'
                                value='DiagnosticCenter'
                                label='Diagnostic Centres'
                                onClick={facilityHandler}
                            />
                            <RadioInput type='radio' name='Choice' value='Pharmacies' label='Pharmacies' onClick={facilityHandler} />
                        </div>
                        <br />
                        <Button variant='secondary' onClick={modalHandler}>
                            Back
                        </Button>
                    </Fragment>
                ) : facility === 'Beds' ? (
                    <Beds facilityHomeHandler={facilityHome} />
                ) : facility === 'Oxygen' ? (
                    <Oxygen facilityHomeHandler={facilityHome} />
                ) : facility === 'Ambulance' ? (
                    <Ambulance facilityHomeHandler={facilityHome} />
                ) : facility === 'Meals' ? (
                    <Meals facilityHomeHandler={facilityHome} />
                ) : facility === 'BloodBank' ? (
                    <BloodBank facilityHomeHandler={facilityHome} />
                ) : facility === 'DiagnosticCenter' ? (
                    <Diagnostic facilityHomeHandler={facilityHome} />
                ) : (
                    <Pharmacies facilityHomeHandler={facilityHome} />
                )}
            </Modal>
        </Fragment>
    );
};

export default CreatePost;
