import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../axios';

import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Input from '../Input/Input';

const Apply = (props) => {
    const {
        user: {
            user: { name, email, gender, contact, address },
            token,
        },
    } = useAuth();

    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState({
        recruitmentId: props.applicationId,
        name: name,
        gender: gender,
        contact: contact,
        email: email,
        occupation: '',
        address: address,
        reason: '',
    });

    const openModalHandler = () => {
        setOpenModal((prevState) => {
            return !prevState;
        });
    };
    const applicationHandler = async () => {
        const res = await api
            .post('/ngo/application', { ...data, recruitmentId: props.applicationId }, { headers: { 'x-auth-token': token } })
            .then((res) => res.data);
        console.log(res);
    };

    return (
        <>
            <Button onClick={openModalHandler}>Apply</Button>
            <Modal open={openModal} handleModal={openModalHandler}>
                <h1>Be a change maker</h1>
                <br />
                <Input
                    type='text'
                    label='Name'
                    value={data.name}
                    onChange={(event) => {
                        setData({ ...data, name: event.target.value });
                    }}
                />
                <br />
                <Input
                    type='text'
                    label='Gender'
                    value={data.gender}
                    onChange={(event) => {
                        setData({ ...data, gender: event.target.value });
                    }}
                />
                <br />
                <Input
                    type='tel'
                    label='Contact Number'
                    value={data.contact}
                    onChange={(event) => {
                        setData({ ...data, mobile: event.target.value });
                    }}
                />
                <br />
                <Input
                    type='email'
                    label='Email Address'
                    value={data.email}
                    onChange={(event) => {
                        setData({ ...data, email: event.target.value });
                    }}
                />
                <br />
                <Input
                    type='text'
                    label='Occupation'
                    value={data.occupation}
                    onChange={(event) => {
                        setData({ ...data, occupation: event.target.value });
                    }}
                />
                <br />
                <Input
                    type='text'
                    label='Full Address'
                    value={data.address}
                    onChange={(event) => {
                        setData({ ...data, address: event.target.value });
                    }}
                />
                <br />
                <label>Why do you want to join an NGO?</label>
                <br />
                <textarea
                    rows='20'
                    cols='118.5'
                    value={data.reason}
                    onChange={(event) => {
                        setData({ ...data, reason: event.target.value });
                    }}
                />
                <br />
                <br />
                <div className='buttonGroup' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant='secondary' onClick={openModalHandler}>
                        Back
                    </Button>
                    <Button onClick={applicationHandler}>Apply</Button>
                </div>
            </Modal>
        </>
    );
};

export default Apply;
