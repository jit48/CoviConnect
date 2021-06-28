import { Fragment, useState, useEffect } from 'react'
import RaiseFund from './RaiseFund/RaiseFund'
import PostReqruitment from './PostReqruitment/PostReqruitment'
import api from '../../axios'
import { useAuth } from '../../contexts/AuthContext'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
const NGOdashboard = () => {
  const {
    user: { user, isAuthorised, token },
    logout,
  } = useAuth()

  useEffect(() => {
    console.log(user)
  }, [])

  const[openModal,setopenModal]=useState(false);
  
  const openModalHandler=()=>{
      setopenModal((prevState)=>{
        return !prevState
      })
  }

  return (
    <Fragment>
      <RaiseFund />
      <br />
      <br />
      <PostReqruitment />
      <br /><br/>
      <Button onClick={openModalHandler}>Adoption Requests</Button>
      <Modal open={openModal} handleModal={openModalHandler}>
        {user.isAdoption &&
          user.adoptionForm.map((newUser) => <p>{newUser.maritalStatus}</p>)
          
        }
      </Modal>
    </Fragment>
  )
}

export default NGOdashboard
