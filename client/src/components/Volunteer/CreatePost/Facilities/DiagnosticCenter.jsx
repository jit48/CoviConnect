import { Fragment, useState } from 'react';
import { useAuth } from '../../../../contexts/AuthContext';
import api from '../../../../axios';

import Button from '../../../Button/Button';
import Input from '../../../Input/Input';
import classes from '../CreatePost.module.css';

const Diagnostic = (props) => {
    const {
        user: { token },
    } = useAuth();

    const [data, setData] = useState({
        centreName: '',
        location: '',
        city:"",
        contactNum: 0,
    });
    const [postSuccess, setPostSuccess] = useState('none');

    const postData = async () => {
        await api
            .post('/facility/diagnosticcenter', { info: data }, { headers: { 'x-auth-token': token } })
            .then((res) => {
                setPostSuccess('success');
            })
            .catch(() => {
                setPostSuccess('unsuccessful');
            });
        props.getPost();
    };

    return (
        <Fragment>
            {postSuccess === 'none' ? (
                <div>
                    <h1>Post an update on Diagnostic Centre</h1>
                    <br />
                    <Input
                        type='text'
                        label='Name of Diagnostic Centre'
                        onChange={(event) => {
                            setData({ ...data, centreName: event.target.value });
                        }}
                    />
                    <br />
                    <Input
                        type='text'
                        label='Address'
                        onChange={(event) => {
                            setData({ ...data, location: event.target.value });
                        }}
                    />
                    <br />
                    <br />
                    <Input
                        type='text'
                        label='City'
                        onChange={(event) => {
                            setData({ ...data, city: event.target.value });
                        }}
                    />
                    <br />
                    <Input
                        type='number'
                        label='Contact Number'
                        onChange={(event) => {
                            setData({ ...data, contactNum: event.target.value });
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
                </div>
            ) : postSuccess === 'success' ? (
                <h1>You have Successfully posted !!</h1>
            ) : (
                <h1>Error in Posting. Try Again !</h1>
            )}
        </Fragment>
    );
};

export default Diagnostic;
