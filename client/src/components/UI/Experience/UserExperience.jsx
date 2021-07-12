import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./UserExperience.scss";
import { Carousel } from "react-responsive-carousel";
function UserExperience(props) {
  const { experience } = props;
  return (
    <div className="UserExperience">
    <div className="shape">

    </div>
    <div>
      <h1>Look What Other People Say</h1>
    </div>
      <Carousel  autoPlay={true} interval={5000} infiniteLoop showIndicators={false} showThumbs={false} showStatus={false}>
        {experience.map((item) => (
          <div>
            <div className=" ExperienceCard" >
              <div className="Experience__Experience">
                <div className="Name">
                  <p><span>"</span>{item.name}</p>
                </div>
                <div className="City">
                  <p>From {item.city} says</p>
                </div>
                <div className="Experience">
                  <p>{item.experience}<span>"</span></p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default UserExperience;
