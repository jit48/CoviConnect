import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from "react-router";
import api from '../../axios'
import './VolunteerLeads.scss'

function VolunteerLeads() {
    const {id}=useParams();
    const [Leads, setLeads] = useState([])
    // const [name,setName]=useState("")
    const getLeads = async () => {
        const data = await api.get(`/volunteer/allVolunteer/${id}`).then((res)=>res.data)
        setLeads(data);
        // data.length>0 ?  setName(data[0].volunteerName) : setName("")
        // console.log(data);
    };
    
    useEffect(() => {
        getLeads();
          
    }, []);
    return (
        <div>
        <div className="allLeads"> 
        
         <table>
            <tr>
                <th> </th>
                <th>City</th>
                <th>Location</th>
                <th>Service Provider</th>
                <th>Contact Number</th>  
                <th>Date Posted</th>                
            </tr>
            {Leads.map(lead =>( 
            <tr>   
                <td>{lead.type}</td>
                <td>{lead.info.city}</td>
                <td>{lead.info.location}</td>
                <td>{lead.info.serviceProvider}</td>
                <td>{lead.info.contactNum}</td>
                <td>{lead.info.date}</td>
                
            </tr>
            ))}
        </table> :            
               
            </div>
            
        </div>
    )
}

export default VolunteerLeads
