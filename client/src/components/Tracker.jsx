import React from "react";
import "./Tracker.scss";
function Tracker(props) {
  const { state, data } = props;
  console.log(state);
  console.log(data);
  return (
    <div className="tracker">
      <h1>{state.toUpperCase()}</h1>
      <div className="trackerData">
        <div className="tracker_confirmed">
          <p>
            <b>Confirmed</b>
          </p>
          <p>{data.total.confirmed}</p>
        </div>
        <div className="tracker_active">
          <p>
            <b>Active</b>
          </p>
          <p>
            {data.total.confirmed -
              (data.total.recovered + data.total.deceased)}
          </p>
        </div>
        <div className="tracker_recovered">
          <p>
            <b>Recovered</b>
          </p>
          <p>{data.total.recovered}</p>
        </div>
        <div className="tracker_decased">
          <p>
            <b>Deceased</b>
          </p>
          <p>{data.total.deceased}</p>
        </div>
        <div className="trackerData">
          <div className="tracker_FullVaccine">
            <p>
              <b>Fully Vaccinated</b>
            </p>
            <p>{data.total.vaccinated2}</p>
          </div>
          <div className="tracker_HalfVaccine">
            <p>
              <b>Partially Vaccinated</b>
            </p>
            <p>{data.total.vaccinated1}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracker;
