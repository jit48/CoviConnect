import { useState, useEffect } from "react";
import RaiseFund from "./RaiseFund/RaiseFund";
import Button from "../Button/Button";
import PostReqruitment from "./PostReqruitment/PostReqruitment";
import api from "../../axios";
import AdoptionRequests from "./AdoptionRequests/AdoptionRequests";
import FundDetails from "./FundDetails/FundDetails";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import "./NGOdashboard.scss";

const NGOdashboard = () => {
  const [openFund, setOpenFund] = useState(true);
  const [fundData, setFundData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    user: { user, isAuthorised, token },
    logout,
  } = useAuth();
  const openFundHandler = () => {
    setOpenFund(!openFund);
  };
  const [openModal, setopenModal] = useState(false);

  const openModalHandler = () => {
    setopenModal((prevState) => {
      return !prevState;
    });
  };
  const getFunds = async () => {
    const data = await api
      .get(`/ngo/getAllFunds/${user._id}`)
      .then((res) => res.data);
    setFundData(data);
    setLoading(true);
    // console.log(data)
  };
  useEffect(() => {
    getFunds();
  }, []);
  const handleDeleteFund = async (fund) => {
    // console.log(fund._id)
    const respVar = await api
      .delete(`/ngo/deleteFund/${fund._id}`)
      .then((res) => res.data);
    //console.log(respVar)
    const arr = fundData.filter((funds) => funds._id !== respVar._id);
    setFundData(arr);
    // setisDelete(!isDelete)
  };
  return (
    <div className="dashboard">
      <div className="dashboard__Actions">
        <div className="dashboard__Actions__min">
          <RaiseFund />
          <PostReqruitment />
        </div>
        <div className="SignOut">
          <Button variant="secondary" onClick={logout}>
            Sign Out
          </Button>
        </div>

        <div className="responsiveActions">
            <RaiseFund />
            <PostReqruitment />
        </div>
      </div>
      <div className="dashboard__AdoptionRequests">
        <div className="dashboard__AdoptionRequests__Summary">
          <h3>Adoption Requests</h3>
          {openModal ? (
            <i
              class="fas fa-chevron-circle-up fa-2x"
              onClick={openModalHandler}
            ></i>
          ) : (
            <i
              class="fas fa-chevron-circle-down fa-2x"
              onClick={openModalHandler}
            ></i>
          )}
        </div>
        <div>{openModal && <AdoptionRequests />}</div>
      </div>
      <div className="dashboard__AdoptionRequests">
        <div className="dashboard__AdoptionRequests__Summary">
          <h3>Active Fund Raiser Details</h3>
          {openFund ? (
            <i
              class="fas fa-chevron-circle-up fa-2x"
              onClick={openFundHandler}
            ></i>
          ) : (
            <i
              class="fas fa-chevron-circle-down fa-2x"
              onClick={openFundHandler}
            ></i>
          )}
        </div>
        <div className="dashboard__AdoptionRequests__Details">
          {openFund && (
            <FundDetails
              fundData={fundData}
              handleDeleteFund={handleDeleteFund}
              isLoading={loading}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NGOdashboard;
