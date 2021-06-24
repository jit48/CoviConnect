import { Fragment, useState } from 'react';
import { useAuth } from '../../../../contexts/AuthContext';
import api from '../../../../axios';

import Button from '../../../Button/Button';
import Input from '../../../Input/Input';
import classes from '../CreatePost.module.css';

const Meals = (props) => {
    const {
        user: { token },
    } = useAuth();

    const [data, setData] = useState({
        serviceProvider: '',
        location: '',
        contactNum: 0,
    });
    const [postSuccess, setPostSuccess] = useState('none');

    const postData = () => {
        api.post('/facility/meals', { info: data }, { headers: { 'x-auth-token': token } })
            .then((res) => {
                setPostSuccess('success');
            })
            .catch(() => {
                setPostSuccess('unsuccessful');
            });
    };

    return (
        <Fragment>
            {postSuccess === 'none' ? (
                <div>
                    <h1>Post an update on Meal Service</h1>
                    <br />
                    <Input
                        type='text'
                        label='Service Provider'
                        onChange={(event) => {
                            setData({ ...data, serviceProvider: event.target.value });
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

export default Meals;
