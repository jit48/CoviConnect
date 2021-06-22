import { Fragment, useState } from 'react';
import Button from '../../../Button/Button';
import api from '../../../../axios';
import Input from '../../../Input/Input';
import classes from '../CreatePost.module.css';

const Beds = (props) => {
    const [data, setData] = useState({
        hospitalName: '',
        location: '',
        beds: 0,
<<<<<<< HEAD
        address: '',
        phnum: 0
    })
    const [ postSuccess, setPostSuccess ] = useState('none');
=======
    });
    const [postSuccess, setPostSuccess] = useState('none');
>>>>>>> 58596dee2fd9c8312ded94872fd28aae862de781

    const postData = () => {
        api.post('/facility/beds', data, {
            headers: {
                'x-auth-token': '',
            },
        })
            .then((res) => {
                console.log(res);
                setPostSuccess('success');
            })
            .catch(() => {
                setPostSuccess('unsuccessful');
            });
    };

    return (
        <Fragment>
<<<<<<< HEAD
            {postSuccess==='none' ? 
            (
            <div>
                <h1>Post an update on Beds</h1>
                <br/>
                <Input type="text" label="Hospital Name" onChange={(event)=> {setData({...data, hospitalName: event.target.value})}}/>
                <br/>
                <Input type="text" label="City" onChange={(event)=> {setData({...data, location: event.target.value})}}/>
                <br/>
                <Input type="text" label="Full Address" onChange={(event)=> {setData({...data, address: event.target.value})}}/>
                <br/>
                <Input type="tel" label="Hospital Contact Number" onChange={(event)=> {setData({...data, phnum: event.target.value})}}/>
                <br/>
                <Input type="number" label="Beds Available" onChange={(event)=> {setData({...data, beds: event.target.value})}}/>
                <br/>
                <div className={classes.buttonContainer}>
                    <Button variant='secondary' onClick={props.facilityHomeHandler}>Back</Button>
                    <Button variant='primary' onClick={postData}>Post</Button>
=======
            {postSuccess === 'none' ? (
                <div>
                    <h1>Post an update on Beds</h1>
                    <br />
                    <Input
                        type='text'
                        label='Hospital Name'
                        onChange={(event) => {
                            setData({ ...data, hospitalName: event.target.value });
                        }}
                    />
                    <br />
                    <Input
                        type='text'
                        label='Location'
                        onChange={(event) => {
                            setData({ ...data, location: event.target.value });
                        }}
                    />
                    <br />
                    <Input
                        type='number'
                        label='Beds Available'
                        onChange={(event) => {
                            setData({ ...data, beds: event.target.value });
                        }}
                    />
                    <br />
                    <div className={classes.buttonContainer}>
                        <Button variant='secondary' onClick={props.facilityHomeHandler}>
                            Back
                        </Button>
                        <Button variant='primary' onClick={postData}>
                            Post
                        </Button>
                    </div>
>>>>>>> 58596dee2fd9c8312ded94872fd28aae862de781
                </div>
            ) : postSuccess === 'success' ? (
                <h1>You have Successfully posted !!</h1>
            ) : (
                <h1>Error in Posting. Try Again !</h1>
            )}
        </Fragment>
    );
};

export default Beds;
