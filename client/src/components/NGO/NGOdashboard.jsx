import { Fragment, useState, useEffect } from 'react'
import RaiseFund from './RaiseFund/RaiseFund'
import PostReqruitment from './PostReqruitment/PostReqruitment'
import Button from '../Button/Button'
import AdoptionRequests from './AdoptionRequests/AdoptionRequests'
import FundDetails from './FundDetails/FundDetails'
const NGOdashboard = () => {
  const [openFund, setOpenFund] = useState(false)

  const openFundHandler = () => {
    setOpenFund(!openFund)
  }
  const [openModal, setopenModal] = useState(false)

  const openModalHandler = () => {
    setopenModal((prevState) => {
      return !prevState
    })
  }

  return (
    <Fragment>
      <RaiseFund />
      <br />
      <br />
      <PostReqruitment />
      <br />
      <br />
      <Button onClick={openModalHandler}>Adoption Requests</Button>
      {openModal && <AdoptionRequests />}
      <br />
      <br />
      <Button onClick={openFundHandler}>Fund Details</Button>
      {openFund && <FundDetails />}
    </Fragment>
  )
}

export default NGOdashboard
