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

const CreatePost = (props) => {
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
                            <RadioInput type='radio' name='create' value='bed' label='Available Beds' onClick={facilityHandler} />
                            <RadioInput type='radio' name='create' value='oxygen' label='Oxygen Cylinders' onClick={facilityHandler} />
                            <RadioInput type='radio' name='create' value='ambulance' label='Ambulance Service' onClick={facilityHandler} />
                            <RadioInput type='radio' name='create' value='meals' label='Free Meal Service' onClick={facilityHandler} />
                            <RadioInput type='radio' name='create' value='bloodbank' label='Blood Bank Leads' onClick={facilityHandler} />
                            <RadioInput
                                type='radio'
                                name='create'
                                value='diagnosticcenter'
                                label='Diagnostic Centres'
                                onClick={facilityHandler}
                            />
                            <RadioInput type='radio' name='create' value='pharmacies' label='Pharmacies' onClick={facilityHandler} />
                        </div>
                        <br />
                        <Button variant='secondary' onClick={modalHandler}>
                            Back
                        </Button>
                    </Fragment>
                ) : facility === 'bed' ? (
                    <Beds getPost={props.getPost} facilityHomeHandler={facilityHome} />
                ) : facility === 'oxygen' ? (
                    <Oxygen getPost={props.getPost} facilityHomeHandler={facilityHome} />
                ) : facility === 'ambulance' ? (
                    <Ambulance getPost={props.getPost} facilityHomeHandler={facilityHome} />
                ) : facility === 'meals' ? (
                    <Meals getPost={props.getPost} facilityHomeHandler={facilityHome} />
                ) : facility === 'bloodbank' ? (
                    <BloodBank getPost={props.getPost} facilityHomeHandler={facilityHome} />
                ) : facility === 'diagnosticcenter' ? (
                    <Diagnostic getPost={props.getPost} facilityHomeHandler={facilityHome} />
                ) : (
                    <Pharmacies getPost={props.getPost} facilityHomeHandler={facilityHome} />
                )}
            </Modal>
        </Fragment>
    );
};

export default CreatePost;
