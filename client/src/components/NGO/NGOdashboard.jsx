<<<<<<< HEAD
import { Fragment, useState } from "react";
import RaiseFund from "./RaiseFund/RaiseFund";

=======
import { Fragment, useState, useEffect } from 'react'
import RaiseFund from './RaiseFund/RaiseFund'
import PostReqruitment from './PostReqruitment/PostReqruitment'
import Button from '../Button/Button'
import AdoptionRequests from './AdoptionRequests/AdoptionRequests'
import FundDetails from './FundDetails/FundDetails'
>>>>>>> 0a218eaab7a356988618e6cdf01e6f2317e7680c
const NGOdashboard = () => {
  const [openFund, setOpenFund] = useState(false)

<<<<<<< HEAD
    return(
        <Fragment>
            <RaiseFund />
        </Fragment>
    )
=======
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
>>>>>>> 0a218eaab7a356988618e6cdf01e6f2317e7680c
}

export default NGOdashboard
