import { Fragment, useState, useEffect } from 'react'
import RaiseFund from './RaiseFund/RaiseFund'
import PostReqruitment from './PostReqruitment/PostReqruitment'
import api from '../../axios'
import { useAuth } from '../../contexts/AuthContext'
const NGOdashboard = () => {
  const {
    user: { user, isAuthorised, token },
    logout,
  } = useAuth()

  useEffect(() => {
    console.log(user)
  }, [])

  return (
    <Fragment>
      <RaiseFund />
      <br />
      <br />
      <PostReqruitment />
      {user.isAdoption &&
        user.adoptionForm.map((newUser) => <p>{newUser.maritalStatus}</p>)}
    </Fragment>
  )
}

export default NGOdashboard
