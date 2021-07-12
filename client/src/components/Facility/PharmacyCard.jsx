import React from "react";
import UpVotes from "./Components/UpVotes";

function PharmacyCard(props) {
  const { facility } = props;
  return (
    <div className="">
      <div className="Card">
        <div className="votes">
          <UpVotes facility={facility} />
        </div>
        <div className="info">
          <div>
            <div>
              <h2>{facility.info.serviceProvider}</h2>
            </div>
          </div>
          <div className="location">
            <p>
              <b>
                <i className="fas fa-map-marker-alt"></i>{" "}
              </b>
              {facility.info.location}
            </p>
          </div>
          <div className="hospital">
            <p>
              <b>
                <i class="fas fa-phone-alt"></i>{" "}
              </b>
              {facility.info.contactNum}
            </p>
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

export default PharmacyCard;
