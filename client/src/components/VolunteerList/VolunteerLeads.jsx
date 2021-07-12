import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from "react-router";
import api from '../../axios'
import './VolunteerLeads.scss'
import styles from '../Volunteer/Post/Post.module.scss'
import Post from '../Volunteer/Post/Post';
import Male from '../../Images/Male.jpg'

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

    return (<div className='allLeads'>
        {
            Leads.map(lead => (

                <div className={styles.post}>
            <div className={styles.volunteer}>
                <img src={Male} alt='profile' />
                <div>
                    <h3>{lead.volunteerName}</h3>
                </div>
            </div>
            <hr />
            <div className={styles.facility}>
                
             <div className={styles.type}>
                 <h5
                    style={{
                        background: 'hsl(137, 60%, 50%)',
                    }}>
                    {lead.type.toUpperCase()}
                </h5>
                <h3>
                    <b>
                        {lead.info.serviceProvider}
                    </b>
                </h3>
                <p>
                    <b>
                        <em>Date : </em>
                    </b>
                    {lead.info.date}
                </p>
                <p>
                    <b>
                        <em>Contact : </em>
                    </b>
                    {lead.info.contactNum}
                </p>
                <p>
                    <b>
                        <em>City : </em>
                    </b>
                    {lead.info.city}
                </p>
                <p>
                    <b>
                        <em>Address : </em>
                    </b>
                    {lead.info.location}

                </p>
            </div>
            </div>
        </div>
        ))
    }
    </div>
    )
}

export default VolunteerLeads