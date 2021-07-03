import { Fragment, useState } from 'react'
import Modal from '../../Modal/Modal'
import Button from '../../Button/Button'
import Input from '../../Input/Input'
import api from '../../../axios'

const KidsAdoption = () => {
  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState({
    type: 'kids',
    name: '',
    noOfAdoption: 0,
    maritalStatus: '',
    age: 0,
    phNum: 0,
    email: '',
  })

  const openModalHandler = () => {
    setOpenModal((prevState) => {
      return !prevState
    })
  }

  const submitForm = () => {
    // console.log(data)
    api.post('/facility/adoption', data).then(() => {
      setOpenModal((prevState) => {
        return !prevState
      })
    })
  }

  return (
    <Fragment>
      <Button onClick={openModalHandler}>Kids</Button>
      <Modal open={openModal} handleModal={openModalHandler}>
        <h1>Kids Adoption Form.</h1>
        <br />
        <label>Name</label>
        <Input
          type="text"
          onChange={(event) => {
            setData({ ...data, name: event.target.value })
          }}
        />
        <br />
        <br />
        <label>Number of Adoptions:</label>
        <br />
        <Input
          type="number"
          onChange={(event) => {
            setData({ ...data, noOfAdoption: event.target.value })
          }}
        />
        <br />
        <br />
        <label>Age Preference:</label>
        <br />
        <select
          onChange={(event) => {
            setData({ ...data, age: event.target.value })
          }}
        >
          <option value=""></option>
          <option value="0-2yrs">0-2yrs</option>
          <option value="2-5yrs">2-5yrs</option>
          <option value="5-8yrs">5-8yrs</option>
          <option value="8-12yrs">8-12yrs</option>
          <option value="12yrs+">12yrs+</option>
        </select>
        <br />
        <br />
        <label>Your Marital Status.</label>
        <br />
        <select
          onChange={(event) => {
            setData({ ...data, maritalStatus: event.target.value })
          }}
        >
          <option value=""></option>
          <option value="single">Single</option>
          <option value="Married">Married</option>
        </select>
        <br />
        <br />
        <label>Phone Number:</label>
        <br />
        <Input
          type="number"
          onChange={(event) => {
            setData({ ...data, phNum: event.target.value })
          }}
        />
        <br />
        <br />
        <label>Email:</label>
        <br />
        <Input
          type="Email"
          onChange={(event) => {
            setData({ ...data, email: event.target.value })
          }}
        />
        <br />
        <br />
        <div
          className="buttonGroup"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Button variant="secondary" onClick={openModalHandler}>
            Back
          </Button>
          <Button onClick={submitForm}>Submit</Button>
        </div>
      </Modal>
      <br></br>
      <br></br>
    </Fragment>
  )
}

export default KidsAdoption
