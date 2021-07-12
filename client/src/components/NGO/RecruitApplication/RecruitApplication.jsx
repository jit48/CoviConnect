import ApplicationTable from './ApplicationTable';
import Button from '../../Button/Button';
import api from '../../../axios';

const RecruitApplication = (props) =>{

    const handleClose = (id) => {
        api.post(`/ngo/delete/recruit/${id}`);
    } 
    return (
        <div>
            {props.RecruitmentDatas.length===0 ? <h3>No on-going recruitment drives found !! </h3> : props.RecruitmentDatas.map((data)=>(
                <div>
                    <h3>Following candidates have submitted their application.</h3>
                    <ApplicationTable applications={data.applications} recruitmentId={data._id}/>
                    <h3>Close this recruitment <Button variant='secondary' onClick={()=>handleClose(data._id)}>Close</Button></h3>
                </div>
            ))}
            </div>
        
    )
    
}

export default RecruitApplication

