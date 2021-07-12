import React from 'react';
import { NavLink } from 'react-router-dom';
import './NgoCard.scss';

const NgoCard = (props) => {
    const {facility} = props;
    console.log(facility);
    return (
       
        <div className="NgoCard">
            <div className="NgoContent">
                <div className="NgoName">
                    <h1>{(facility.name)}</h1>
                </div>
                
                <div>
                    <h4>Address:</h4>
                    <p>{facility.address}</p>
                </div>
                <div>
                    <h4>About:</h4>
                    <p>{(facility.about).substring(0,50)}...</p>
                </div>
                <div className="contactInfo">
                    <h4>Contact Info:</h4>
                    <p><i class="far fa-envelope"></i>{facility.email}</p>
                    <p><i class="fas fa-phone-alt"></i>{facility.contact}</p>
                </div>                    
                <div className="detailsButton">
                    <NavLink to={`/ngo/allNgo/${facility._id}`} >View Details</NavLink>
                </div> 
                
            </div>
        </div>
       
    )
}

export default NgoCard;