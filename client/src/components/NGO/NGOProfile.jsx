import React from 'react'
import api from '../../axios'
import { useEffect,useState} from 'react'
import { useParams } from 'react-router'
import '../../styles/NGOProfile.scss'
import Ngo from '../Register/Ngo';

function NGOProfile() {
    const {id}= useParams();
    const [Ngos, setNgos] = useState({})
    const getNgos = async () => {
       
        const data = await api.get('/ngo/ngoProfile/'+id).then((res)=>res.data)
        setNgos(data); 
        console.log(data);
    };
    
    useEffect(() => {
        getNgos();  
    }, []);

    return (
        <div className="Outer">
        <div className="ngoContent">
            <div className="ngoImage">
                <img src={Ngos.file}/>
            </div> 
            <div className= "ngoDetails">
                <div className="ngoName">
                    {Ngos.name}
                </div>
                <div className="ngoAbout">
                    <p>{Ngos.about}</p>
                </div>
                <div className="contactInfo">
                    <h4>Contact Info:</h4>
                    <div className="contact">
                        
                        <p><i class="fas fa-phone-alt"></i>{Ngos.contact}</p>
                        <p><i class="far fa-envelope"></i>{Ngos.email}</p>
                    </div>
                        
                    <div className="address">
                        <h4>Address:</h4>
                        <p>{Ngos.address}</p>
                    </div>  
                </div>
            </div>
        </div>
        </div>
    )
}

export default NGOProfile