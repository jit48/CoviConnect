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
            <h2>{facility.info.hospitalName}</h2>
          </div>
          <div className="location">
            <h3>
              <b>
                <i className="fas fa-map-marker-alt"></i>{" "}
              </b>
              {facility.info.address}
            </h3>
          </div>
          <div className="hospital">
            <h3>
              <b>
                <i class="fas fa-phone-volume"></i>
              </b>
              {facility.info.phnumber}
            </h3>
          </div>
          <div className="hospital">
            <h3>
              <b>Number Of Beds Available: </b>
              {facility.info.beds}
            </h3>
          </div>
          <div className="creator">
            <div className="Name">
              <div className="creatorName">
                <i class="fas fa-user-cog"></i>
                {facility.volunteerName}
              </div>
              <div className="creatorName">
              <i class="fas fa-calendar-alt"></i>
                {facility.info.date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BedCard;
