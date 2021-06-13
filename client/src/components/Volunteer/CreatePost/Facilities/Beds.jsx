import { Fragment, useState } from "react";
import Button from "../../../Button/Button";
import api from "../../../../axios";
import Input from "../../../Input/Input";
import classes from '../CreatePost.module.css';

const Beds = (props) => {

    const [ data, setData ] = useState({
        hospitalName: '',
        location: '',
        beds: 0
    })
    const [ postSuccess, setPostSuccess ] = useState('none');

    const postData = () => {
        api.post('/facility/beds', data)
        .then((res) => {
            setPostSuccess('success');
        })
        .catch(()=>{
            setPostSuccess('unsuccessful');
        })
    }

    return (
        <Fragment>
            {postSuccess==='none' ? 
            (
            <div>
                <h1>Post an update on Beds</h1>
                <br/>
                <Input type="text" label="Hospital Name" onChange={(event)=> {setData({...data, hospitalName: event.target.value})}}/>
                <br/>
                <Input type="text" label="Location" onChange={(event)=> {setData({...data, location: event.target.value})}}/>
                <br/>
                <Input type="number" label="Beds Available" onChange={(event)=> {setData({...data, beds: event.target.value})}}/>
                <br/>
                <div className={classes.buttonContainer}>
                    <Button variant='secondary' onClick={props.facilityHomeHandler}>Back</Button>
                    <Button variant='primary' onClick={postData}>Post</Button>
                </div>
            </div>
            ): postSuccess==='success' ? <h1>You have Successfully posted !!</h1>: <h1>Error in Posting. Try Again !</h1>}
        </Fragment>
    )
}

export default Beds;