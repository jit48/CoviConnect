import { useEffect, useState } from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import api from '../../../axios'
import CircularProgressWithLabel from '../../CircularProgressBar/CircularProgressBar'
const FundDetails = () => {
  const [fundData, setFundData] = useState([])
  const {
    user: { user, isAuthorised, token },
    logout,
  } = useAuth()
  const getFunds = async () => {
    const data = await api
      .get(`/ngo/getAllFunds/${user._id}`)
      .then((res) => res.data)
    setFundData(data)
    // console.log(data)
  }
  useEffect(() => {
    getFunds()
  }, [])

  const handleDelete = async (fund) => {
    console.log(fund._id)
    const respVar = await api
      .delete(`/ngo/deleteFund/${fund._id}`)
      .then((res) => res.data)
    console.log(respVar)
    const arr = fundData.filter((funds) => funds._id !== respVar._id)
    setFundData(arr)
    // setisDelete(!isDelete)
  }

  return (
    <div>
      {fundData.map((fund) => (
        <div>
          Title: {fund.title}
          <br />
          Name: {fund.name} <br />
          <CircularProgressWithLabel
            value={(fund.raised / fund.amount) * 100}
          />
          {/* <CircularProgressWithLabel
            variant="determinate"
            value={(fund.raised / fund.amount) * 100}
          /> */}
          Amount raised: {fund.raised} of {fund.amount}
          <br />
          <button type="submit" onClick={() => handleDelete(fund)}>
            DELETE
          </button>
        </div>
      ))}
    </div>
  )
}

export default FundDetails
