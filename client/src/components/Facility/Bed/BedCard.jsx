import React from "react";
import "./BedCard.scss";

import UpVotes from "../Components/UpVotes";
function BedCard(props) {
  const { facility, handleVoteHandler } = props;

  const handleUpVoteHandler = (vote) => {
    handleVoteHandler(vote);
  };
  return (
    <div className="">
      <div className="BedCard">
        <div className="votes">
          <UpVotes facility={facility} handleUpVotes={handleUpVoteHandler} />
        </div>
        <div className="info">
          <div>
            <p>{/* <b>Hospital Name: </b> */}</p>
            <h2>{facility.info.hospitalName}</h2>
          </div>
          <div className="location">
            {/* <p>
              <b>Address: </b>
              {facility.info.address}
            </p> */}
            <h3>
              <b>Address: </b>
              {facility.info.hospitalName}
            </h3>
            {/* <p>
              <b>Location: </b>
              {facility.info.location}
            </p> */}
            <h3>
              <b>Location: </b>
              {facility.info.location}
            </h3>
          </div>
          <div className="hospital">
            {/* <p>
              <b>Contact Number: </b>
              {facility.info.phnumber}
            </p> */}
            <h3>
              <b>Contact Number: </b>
              {facility.info.phnumber}
            </h3>
          </div>
          <div className="hospital">
            {/* <p>
              <b>Number Of Beds Available: </b>
              {facility.info.beds}
            </p> */}
            <h3>
              <b>Number Of Beds Available: </b>
              {facility.info.beds}
            </h3>
          </div>
          <div className="creator">
            <h3>{`Created By ${facility.volunteerName} On ${facility.info.date}`}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BedCard;
