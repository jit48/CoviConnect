import { useState, useEffect } from "react";
import RaiseFund from "./RaiseFund/RaiseFund";
import RecruitApplication from "./RecruitApplication/RecruitApplication";
import PostReqruitment from "./PostReqruitment/PostReqruitment";
import api from "../../axios";
import AdoptionRequests from "./AdoptionRequests/AdoptionRequests";
import FundDetails from "./FundDetails/FundDetails";
import { useAuth } from "../../contexts/AuthContext";
import Members from "./Members";
import "./NGOdashboard.scss";

const NGOdashboard = () => {
  const [openFund, setOpenFund] = useState(false);
  const [openRecruitments, setOpenRecruitments] = useState(false);
  const [fundData, setFundData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [application, setApplication] = useState([{members:""}]);
  const [ , isfetching] = useState(false);
  const [openMembers, setOpenMembers] = useState(false);
  const [members, setMembers] = useState([]);

  const {
    user: { user},
  } = useAuth();
  const openFundHandler = () => {
    setOpenFund(!openFund);
  };
  const openRecruitmentHandler = () => {
    setOpenRecruitments(!openRecruitments);
  };
  const openMemberHandler = () => {
    setOpenMembers(!openMembers);
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
  const recruitmentData = async () => {
    isfetching(true);
    const rData = await api
      .get(`/ngo/getAllRecruitments/${user._id}`)
      .then((res) => res.data);
    setApplication(rData);
    isfetching(true);
  };

  const getMembers = async () => {
    const res = await api
      .get(`ngo/getAllMembers/${user._id}`)
      .then((res) => res.data[0].members);
    setMembers(res);
  };
console.log(members);
  // useEffect(() => {

  // }, []);
  useEffect(() => {
    getFunds();
    recruitmentData();
    getMembers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [application]);
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
          <PostReqruitment onGoing={application.length} recruitment={recruitmentData}/>
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
      <div className="dashboard__AdoptionRequests">
        <div className="dashboard__AdoptionRequests__Summary">
          <h3>Recruitment Applications</h3>
          {openRecruitments ? (
            <i
              class="fas fa-chevron-circle-up fa-2x"
              onClick={openRecruitmentHandler}
            ></i>
          ) : (
            <i
              class="fas fa-chevron-circle-down fa-2x"
              onClick={openRecruitmentHandler}
            ></i>
          )}
        </div>
        <div className="dashboard__AdoptionRequests__Details">
          {openRecruitments && (
            <div>
              <RecruitApplication RecruitmentDatas={application} />
            </div>
          )}
        </div>
      </div>
      <div className="dashboard__AdoptionRequests">
        <div className="dashboard__AdoptionRequests__Summary">
          <h3>Members</h3>
          {openMembers ? (
            <i
              class="fas fa-chevron-circle-up fa-2x"
              onClick={openMemberHandler}
            ></i>
          ) : (
            <i
              class="fas fa-chevron-circle-down fa-2x"
              onClick={openMemberHandler}
            ></i>
          )}
        </div>
        <div className="dashboard__AdoptionRequests__Details">
          {openMembers && (
            <div>
              <Members members={members} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NGOdashboard;
