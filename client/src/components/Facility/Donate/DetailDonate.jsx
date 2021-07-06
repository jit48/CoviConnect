import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../../axios";
import "./DetailDonate.scss";
import Center from "../../Layout/Center";
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
    <Center>
      {data.length > 0 && (
        <div>
          <center>
            <h2>{data[0].title}</h2>
          </center>
          <br />
          <br />
          <div className="donationInfo">
            <div className="donationInfo_Pic">
              <img src={data[0].file} alt="" />
              <h3>Contact Info</h3>
              <h4>Email:</h4>
              <p>{data[0].email}</p>
              <h4>Phone Number:</h4>
              <p>{data[0].phone}</p>
              <h3>This fund raising campaign is created by:</h3>
              <p>{data[0].ngoname}</p>
              <h4>Email:</h4>
              <p>{data[0].ngoemail}</p>
              <h4>Phone Number:</h4>
              <p>{data[0].ngocontact}</p>
            </div>
            <div className="donationInfo_Details">
              <h3>{data[0].name}</h3>
              <br />
              <h3>Description</h3>
              <p>{data[0].reason}</p>
              <br />
              <h3>Funds Needed</h3>
              <p>{data[0].amount}</p>
              <br />
              <h3>Total Funds Raised</h3>
              <p>{data[0].raised}</p>
              <Button variant="primary" onClick={modalHandler}>
                Donate
              </Button>
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
    </Center>
  );
};

export default DetailDonate;
