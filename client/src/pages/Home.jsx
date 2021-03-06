import "../styles/home.scss";
import { Link } from "react-router-dom";
import facilities from "../helpers/homeFacilities";
import image from "../Images/doctor.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home__intro">
        <div>
          <div className="Home__text">
            <span className="home__text__Connecting">Connecting</span> the{" "}
            <span className="home__text__Needful">Needful...</span>
            <br></br>to the{" "}
            <span className="Home__text__Helpful">Helpful.</span>
          </div>
          <div className="buttons">
              <Link to="/login">Volunteer Login</Link>
              <Link to="/login">NGO Login</Link>
          </div>
        </div>

        <div className="Home__image">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="Home__facility__hearder">
          <h3>Search For Valuable Resources</h3>
      </div>
      <div className="Home__content">
        {facilities.map((facility) => (
          <div className="Home__facility">
            <div className="Home__facility__image">
              <img src={facility.img} alt="beds" />
            </div>
            <div className={facility.type}>{facility.type}</div>
            <div className="Home__facility__discription">
              {facility.discription}
            </div>
            <Link to={`/facility/${facility.link}`}>
              <div className="Home__facility__link">
                <Link to={`/facility/${facility.link}`}>Explore</Link>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
