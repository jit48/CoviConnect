import React from 'react'
import api from '../../axios'
import { useEffect,useState} from 'react'
import NgoCard from './Ngo/NgoCard'
import '../../../src/styles/AllNgo.scss'

function AllNgo() {
    const [Ngos, setNgos] = useState([])
    const getNgos = async () => { 
        const data = await api.get('/ngo/allNgo').then((res)=>res.data)
        setNgos(data);   
    };
 
    useEffect(() => {
        getNgos();  
    }, []);

   
    return (
        <div className="ngoCard">
            {Ngos.map(ngo =>(
                <NgoCard key={ngo._id} facility={ngo} />
            ))}
        </div>
    )
};

export default AllNgo;
