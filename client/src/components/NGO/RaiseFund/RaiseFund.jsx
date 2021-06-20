import { Fragment, useState } from "react";
import Modal from "../../Modal/Modal";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import api from "../../../axios";
import FileBase from 'react-file-base64';

const RaiseFund = () => {

    const [ openModal, setOpenModal ] = useState(false);
    const [ data, setData ] = useState({
        title: '',
        name: '',
        phone: 0,
        email: '',
        reason: '',
        file: null,
        amount: 0
    })


    const openModalHandler = () => {
        setOpenModal((prevState) => {
            return !prevState;
        });
    } 

    const submitForm = () => {
        api.post('/fundraise', data)
        .then(()=>{
            alert("Submitted");
        })
    }
    return(
        <Fragment>
            <Button onClick={openModalHandler}>Raise a Fund</Button>
            <Modal open={openModal} handleModal={openModalHandler}>
                <h1>Raise Fund for Nobel Cause</h1>
                <br />
                <Input type='text' label='Title' onChange={(event)=>{setData({...data, title: event.target.value})}}/>
                <br/>
                <Input type='text' label='Name of the Person' onChange={(event)=>{setData({...data, name: event.target.value})}}/>
                <br/>
                <Input type='tel' label='Contact Number of the Person' onChange={(event)=>{setData({...data, phone: event.target.value})}}/>
                <br/>
                <Input type='email' label='Email of the Person' onChange={(event)=>{setData({...data, email: event.target.value})}}/>
                <br/>
                <label>Brief reason of fund raising</label>
                <br/>
                <textarea rows="20" cols="118.5" onChange={(event)=>{setData({...data, reason: event.target.value})}}/>
                <br/>
                <br/>
                <Input type='number' label="Enter the amount" onChange={(event)=>{setData({...data, amount: event.target.value})}}/>
                <br/>
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setData({ ...data, file: base64 })} />
                <br/> 
                <div className='buttonGroup' style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button variant='secondary' onClick={openModalHandler}>Back</Button>
                    <Button onClick={submitForm}>Start Fund Raising</Button>
                </div>
            </Modal>
        </Fragment>
    )
}

export default RaiseFund;