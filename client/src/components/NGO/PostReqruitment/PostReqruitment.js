import { Fragment, useState, useEffect } from 'react';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import api from '../../../axios';
import { useAuth } from '../../../contexts/AuthContext';

const PostReqruitment = (props) => {
    const {
        user: {
            user: { name, _id },
            token,
        },
    } = useAuth();



    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState({
        id: _id,
        organisation: name,
        description: '',
        responsibility: '',
        qualification: '',
        skill: '',
        duration: '',
    });

    const openModalHandler = () => {
        setOpenModal((prevState) => {
            return !prevState;
        });
    };

    const submitForm = () => {
        api.post('/ngo/recruitments', { ...data, organisation: name }, { headers: { 'x-auth-token': token } }).then(() => {
            setOpenModal((prevState) => {
                return !prevState;
            });
        });
        props.recruitment();
    };
    return (
        <Fragment>
            <Button onClick={openModalHandler}>Post Reqruitment</Button>
            <Modal open={openModal} handleModal={openModalHandler}>
                {props.onGoing===0 ? 
                <div>
                    <h1>Find a change maker</h1>
                    <br />
                    <label>Brief description:</label>
                    <br />
                    <textarea
                        rows='10'
                        cols='118.5'
                        onChange={(event) => {
                            setData({ ...data, description: event.target.value });
                        }}
                    />
                    <br />
                    <label>Responsibilities ahead:</label>
                    <br />
                    <textarea
                        rows='10'
                        cols='118.5'
                        onChange={(event) => {
                            setData({ ...data, responsibility: event.target.value });
                        }}
                    />
                    <br />
                    <label>Qualification:</label>
                    <br />
                    <textarea
                        rows='8'
                        cols='118.5'
                        onChange={(event) => {
                            setData({ ...data, qualification: event.target.value });
                        }}
                    />
                    <br />
                    <label>Mandatory skills:</label>
                    <br />
                    <textarea
                        rows='8'
                        cols='118.5'
                        onChange={(event) => {
                            setData({ ...data, skill: event.target.value });
                        }}
                    />
                    <br />
                    <Input
                        type='text'
                        label='Duration'
                        onChange={(event) => {
                            setData({ ...data, duration: event.target.value });
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
                </div>
                :
                <h1>You currently have on-going recruitment drives. Close them to create more.</h1>
                }
            </Modal>
        </Fragment>
    );
};

export default PostReqruitment;
