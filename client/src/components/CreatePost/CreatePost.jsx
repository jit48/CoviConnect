import { Fragment, useState } from 'react';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Beds from './Facilities/Beds';
import Oxygen from './Facilities/Oxygen';
import Ambulance from './Facilities/Ambulance';
import BloodBank from './Facilities/BloodBank';
import Meals from './Facilities/Meals';
import Diagnostic from './Facilities/DiagnosticCenter';
import Pharmacies from './Facilities/Pharmacies';
import classes from './CreatePost.module.css';

const CreatePost = () => {
    const [showModal, setShowModal] = useState(false);
    const [facility, setFacility] = useState('none');

    const ModalHandler = () => {
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
            <Button variant='primary' onClick={ModalHandler}>
                Create Post
            </Button>
            <Modal open={showModal} handleModal={ModalHandler}>
                {facility === 'none' ? (
                    <Fragment>
                        <h1>Post an update on ?</h1>
                        <br />
                        <div className={classes.InputContainer}>
                            <input type='radio' name='Choice' value='Beds' onClick={facilityHandler} />
                            <label>Beds</label>
                            <input type='radio' name='Choice' value='Oxygen' onClick={facilityHandler} />
                            <label>Oxygen</label>
                            <input type='radio' name='Choice' value='Ambulance' onClick={facilityHandler} />
                            <label>Ambulance</label>
                            <input type='radio' name='Choice' value='Meals' onClick={facilityHandler} />
                            <label>Meals</label>
                            <input type='radio' name='Choice' value='BloodBank' onClick={facilityHandler} />
                            <label>Blood Bank</label>
                            <input type='radio' name='Choice' value='DiagnosticCenter' onClick={facilityHandler} />
                            <label>Diagnostic Center</label>
                            <input type='radio' name='Choice' value='Pharmacies' onClick={facilityHandler} />
                            <label>Pharmacies</label>
                        </div>
                        <br />
                        <Button variant='secondary' onClick={ModalHandler}>
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
