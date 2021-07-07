import { Fragment, useState } from 'react'
import Modal from '../../Modal/Modal'
import Button from '../../Button/Button'
import Input from '../../Input/Input'
import api from '../../../axios'

const PostReqruitment = () => {
  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState({
    description: '',
    responsibilty: '',
    qualification: '',
    skill: '',
    duration: '',
  })

  const openModalHandler = () => {
    setOpenModal((prevState) => {
      return !prevState
    })
  }

  const submitForm = () => {
    api.post('/ngo/ngoRecruit', data).then(() => {
      setOpenModal((prevState) => {
        return !prevState
      })
    })
  }
  return (
    <Fragment>
      <Button onClick={openModalHandler}>Post Reqruitment</Button>
      <Modal open={openModal} handleModal={openModalHandler}>
        <h1>Find a change maker</h1>
        <br />
        <label>Brief description:</label>
        <br />
        <textarea
          rows="10"
          cols="118.5"
          onChange={(event) => {
            setData({ ...data, description: event.target.value })
          }}
        />
        <br />
        <label>Responsibilities ahead:</label>
        <br />
        <textarea
          rows="10"
          cols="118.5"
          onChange={(event) => {
            setData({ ...data, responsibility: event.target.value })
          }}
        />
        <br />
        <label>Qualification:</label>
        <br />
        <textarea
          rows="8"
          cols="118.5"
          onChange={(event) => {
            setData({ ...data, qualification: event.target.value })
          }}
        />
        <br />
        <label>Mandatory skills:</label>
        <br />
        <textarea
          rows="8"
          cols="118.5"
          onChange={(event) => {
            setData({ ...data, skill: event.target.value })
          }}
        />
        <br />
        <Input
          type="text"
          label="Duration"
          onChange={(event) => {
            setData({ ...data, duration: event.target.value })
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
    </Fragment>
  )
}

export default PostReqruitment
