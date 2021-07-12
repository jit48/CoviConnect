import { Fragment, useEffect, useState } from "react";
import api from "../../../axios";
import "./Donate.scss";
import Button from "../../Button/Button";
import SideNav from "../../../pages/UI/SideNav";
import { Link } from "react-router-dom";

const Donate = ({ funds }) => {
  return (
    <Fragment>
      <SideNav />
      <div className="funds">
        <div className="fundContainer">
          {funds.map((fund) => (
            <div className="fundCard">
              <div className="fundCard-img">
                <img src={fund.file} alt="Donation_Image" />
              </div>
              <div className="fundCard-details">
                <h3>{fund.title}</h3>
                <p>
                  Amount to Raise: <b>{fund.amount}</b>
                </p>
                <div>
                  <br />
                  <Link to={`/fund/donate/${fund._id}`}>
                    <Button variant="primary">Donate</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Donate;