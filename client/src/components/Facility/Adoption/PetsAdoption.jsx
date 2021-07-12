import { Fragment, useState } from 'react';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import api from '../../../axios';

const PetsAdoption = () => {
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState({
        type: 'pets',
        name: '',
        noOfAdoption: 0,
        animalType: '',
        age: 0,
        phNum: 0,
        email: '',
    });

    const openModalHandler = () => {
        setOpenModal((prevState) => {
            return !prevState;
        });
    };

    const submitForm = () => {
        api.post('/facility/adoption', data).then(() => {
            setOpenModal((prevState) => {
                return !prevState;
            });
        });
    };

    return (
        <Fragment>
            <Button onClick={openModalHandler}>Adopt Pets</Button>
            <Modal open={openModal} handleModal={openModalHandler}>
                <h1>Pets Adoption Form.</h1>
                <br />
                <label>Name</label>
                <Input
                    type='text'
                    onChange={(event) => {
                        setData({ ...data, name: event.target.value });
                    }}
                />
                <br />
                <br />
                <label>Number of Adoptions:</label>
                <br />
                <Input
                    type='number'
                    onChange={(event) => {
                        setData({ ...data, noOfAdoption: event.target.value });
                    }}
                />
                <br />
                <br />
                <label>Animal Type</label>
                <br />
                <select
                    onChange={(event) => {
                        setData({ ...data, animalType: event.target.value });
                    }}>
                    <option value=''></option>
                    <option value='Dog'>Dog</option>
                    <option value='Cat'>Cat</option>
                    <option value='Others'>Others</option>
                </select>
                <br />
                <br />
                <label>Age:</label>
                <br />
                <select
                    onChange={(event) => {
                        setData({ ...data, age: event.target.value });
                    }}>
                    <option value=''></option>
                    <option value='0-6months'>0-6months</option>
                    <option value='0.5-2yrs'>0.5-2yrs</option>
                    <option value='2+yrs'>2+yrs</option>
                </select>
                <br />
                <br />
                <label>Phone Number:</label>
                <br />
                <Input
                    type='number'
                    onChange={(event) => {
                        setData({ ...data, phNum: event.target.value });
                    }}
                />
                <br />
                <br />
                <label>Email:</label>
                <br />
                <Input
                    type='Email'
                    onChange={(event) => {
                        setData({ ...data, email: event.target.value });
                    }}
                />
                <br />
                <br />
                <div className='buttonGroup' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant='secondary' onClick={openModalHandler}>
                        Back
                    </Button>
                    <Button onClick={submitForm}>Submit</Button>
                </div>
            </Modal>
        </Fragment>
    );
};

export default PetsAdoption;
