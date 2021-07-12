import React from 'react'
import './VolunteerCard.scss'
import { Link } from 'react-router-dom';
import volunteerMale from '../../Images/volunteerMale.png';
import volunteerFemale from '../../Images/volunteerFemale.png';

function VolunteerCard(props) {
    const {volunteer}=props;
    
   console.log(volunteer);
    return (
        <div className="volunteerCard">
            <div className="volunteerContent">
                <div className="volunteerInfo">
                    <div className="avatar">
                        <img src={volunteer.gender=='female'?volunteerFemale:volunteerMale} alt=""/>
                    </div>
                    <div className="volunteerName">
                        <h4>{volunteer.name}</h4>
                        <p>({volunteer.gender})</p>
                    </div>  
                </div>
                <div> 
                    <h5>Contact Info:</h5>
                    <div className="volunteerContact">

                        <p><i class="far fa-envelope"></i> {volunteer.email}</p> 
                        <p><i class="fas fa-phone-alt"></i> {volunteer.contact}</p>
                    </div>
                </div>
                <div>
                    <h5>Bio:</h5>
                    <p>{volunteer.bio}</p>
                </div>
                <div>
                    <h5>Address:</h5>
                    <p>{volunteer.address}</p>
                </div>
                <div className="leadButton">
                    <Link to={`/volunteer/allVolunteer/${volunteer._id}`} >Leads Provided</Link>
                </div>
                
            </div>   
        </div>
    )
}

export default VolunteerCard

