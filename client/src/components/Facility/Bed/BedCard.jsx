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
            <p>
              <b>Hospital Name: </b>
              {facility.info.hospitalName}
            </p>
          </div>
          <div className="location">
            <p>
              <b>Address: </b>
              {facility.info.address}
            </p>
            <p>
              <b>Location: </b>
              {facility.info.location}
            </p>
          </div>
          <div className="hospital">
            <p>
              <b>Contact Number: </b>
              {facility.info.phnumber}
            </p>
          </div>
          <div className="hospital">
            <p>
              <b>Number Of Beds Available: </b>
              {facility.info.beds}
            </p>
          </div>
          <div className="creator">
            <div>
              <p>
                <b>Created By: </b> {facility.volunteerName}
              </p>
            </div>
            <div>
              <p>
                <b>Created On: </b>
                {facility.info.date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BedCard;
