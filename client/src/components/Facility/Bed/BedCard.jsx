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
            <p>
              <b>
                <i className="fas fa-map-marker-alt"></i>{" "}
              </b>
              {facility.info.address}
            </p>
          </div>
          <div className="hospital">
            <p>
              <b>
                <i class="fas fa-phone-alt"></i>{" "}
              </b>
              {facility.info.phnumber}
            </p>
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
                <p>{facility.volunteerName}</p>
              </div>
              <div className="creatorDate">
                <i class="fas fa-calendar-alt"></i>
                <p>{facility.info.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BedCard;
