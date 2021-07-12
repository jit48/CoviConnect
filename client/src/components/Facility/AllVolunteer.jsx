import React from 'react'
import api from '../../axios'
import { useEffect,useState} from 'react'
import VolunteerCard from '../VolunteerList/VolunteerCard'
import '../../styles/AllVolunteer.scss'
function AllVolunteer() {
    const [Volunteer, setVolunteer] = useState([])
    const getNgos = async () => {
       
        const data = await api.get('/volunteer/allVolunteer').then((res)=>res.data)
        setVolunteer(data); 
         
    };
 
    useEffect(() => {
        getNgos();  
    }, []);


    return (
        <div className="volunteerCard">
            {Volunteer.map(volunteer =>( 
                           
                <VolunteerCard volunteer={volunteer}/>
           
            ))}
        </div>
    )
}

export default AllVolunteer;
