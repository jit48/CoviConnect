import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../../axios";
import "./DetailDonate.scss";
import CircularProgressWithLabel from "../../UI/CircularProgress/circularProgress";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import Input from "../../Input/Input";
import WorldImg from "../../../Images/WorldMask.jpg";

const DetailDonate = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
    amount: 0,
  });

  useEffect(() => {
    api.get(`/facility/fund/donate/${id}`).then((res) => {
      setData(res.data);
    });

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const modalHandler = () => {
    setShowModal((prevState) => {
      return !prevState;
    });
  };

  async function displayRazorpay() {
    const data = await api.post(`/facility/donation/razorpay/${id}`, userData);
    // modalHandler();
    var options = {
      key: process.env.REACT_APP_RAZORPAY,
      amount: userData.amount,
      currency: "INR",
      name: "Covi Connect",
      description: "Donate for a Cause",
      image: WorldImg,
      order_id: data.id,
      handler: function (response) {
        alert(
          "Your Payment is Successfull with payment Id " +
            response.razorpay_payment_id
        );
        modalHandler();
      },
      prefill: {
        name: userData.name,
        email: userData.email,
        contact: userData.contact,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
    // rzp1.on('payment.failed', function (response){
    //         alert(response.error.code);
    // });
  }

  return (
    <>
      {data.length > 0 && (
        <div>
          <div className="donationInfo">
            <div className="donationInfo_body">
              <div className="donationInfo_Pic">
                <div>
                  <h2>{data[0].title}</h2>
                </div>
                <img src={data[0].file} alt="" />
                <div className="donationInfo__Pic__description">
                  <h3>Description</h3>
                  <p>{data[0].reason}</p>
                </div>
              </div>
              <div className="donationInfo_Details">
                <div className="pointOfContact">
                  <h4>Created For: {data[0].name}</h4>
                  <div className="pointOfContact__contact">
                    <div>
                      <i className="fas fa-envelope"></i>
                      <b>{data[0].email}</b>
                    </div>
                    <div>
                      <i class="fas fa-phone-alt"></i>
                      <b>{data[0].phone}</b>
                    </div>
                  </div>
                </div>
                <div className="donationInfo__Details__Funds">
                  <div
                    className={`progress
                    ${
                      Math.round((data[0].raised / data[0].amount) * 100) > 10
                        ? Math.round((data[0].raised / data[0].amount) * 100) >
                          50
                          ? "green"
                          : "orange"
                        : "red"
                    }`}
                  >
                    <CircularProgressWithLabel
                      value={
                        (data[0].raised / data[0].amount) * 100 > 100
                          ? 100
                          : (data[0].raised / data[0].amount) * 100
                      }
                    />
                  </div>
                  <div className="donationInfo__Details__Progress">
                    <p>
                      <b>{data[0].raised}</b> of <b>{data[0].amount}</b> raised
                    </p>
                  </div>
                </div>
                <button
                  className="button"
                  variant="primary"
                  onClick={modalHandler}
                >
                  Donate
                </button>
                <div className="contactInfo">
                  <div>
                    <h3>Created by: {data[0].ngoname}</h3>
                  </div>
                  <div className="contactInfo__Contact">
                    <div>
                      <i className="fas fa-envelope"></i>
                      <b>{data[0].ngoemail}</b>
                    </div>
                    <div>
                      <i class="fas fa-phone-alt"></i>
                      <b>{data[0].ngocontact}</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal open={showModal} handleModal={modalHandler}>
            <h1>Donate to a Cause</h1>
            <br />
            <Input
              type="text"
              label="Your Name"
              onChange={(event) => {
                setUserData({ ...userData, name: event.target.value });
              }}
            />
            <br />
            <Input
              type="tel"
              label="Phone Number"
              onChange={(event) => {
                setUserData({ ...userData, contact: event.target.value });
              }}
            />
            <br />
            <Input
              type="email"
              label="Email"
              onChange={(event) => {
                setUserData({ ...userData, email: event.target.value });
              }}
            />
            <br />
            <Input
              type="number"
              label="Donation Amount"
              onChange={(event) => {
                setUserData({ ...userData, amount: +event.target.value * 100 });
              }}
            />
            <br />
            <Button id="rzp-button1" onClick={displayRazorpay}>
              Pay
            </Button>
          </Modal>
        </div>
      )}
    </>
  );
};

export default DetailDonate;