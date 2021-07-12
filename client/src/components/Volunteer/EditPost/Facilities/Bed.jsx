import { useState } from 'react';
import Input from '../../../Input/Input';
import Button from '../../../Button/Button';

const Bed = (props) => {
    const { post, editPost } = props;

    const [newPost, setNewPost] = useState(post);
    const [postSuccess, setPostSuccess] = useState('none');

    const editHandler = async () => {
        editPost(post._id, newPost);
        setPostSuccess('success');
    };

    return (
        <>
            {postSuccess === 'none' ? (
                <>
                    <h1>Edit Post on Beds Availability</h1>
                    <br />
                    <Input
                        type='text'
                        label='Hospital Name'
                        value={newPost.info.hospitalName}
                        onChange={(event) => {
                            setNewPost({ ...newPost, info: { ...newPost.info, hospitalName: event.target.value } });
                        }}
                    />
                    <br />
                    <Input
                        type='text'
                        label='Address'
                        value={newPost.info.address}
                        onChange={(event) => {
                            setNewPost({ ...newPost, info: { ...newPost.info, address: event.target.value } });
                        }}
                    />
                    <br />
                    <Input
                        type='tel'
                        label='Contact Number'
                        value={newPost.info.contactNum}
                        onChange={(event) => {
                            setNewPost({ ...newPost, info: { ...newPost.info, contactNum: event.target.value } });
                        }}
                    />
                    <br />
                    <Input
                        type='tel'
                        label='Beds Available'
                        value={newPost.info.beds}
                        onChange={(event) => {
                            setNewPost({ ...newPost, info: { ...newPost.info, beds: event.target.value } });
                        }}
                    />
                    <br />
                    <Button variant='primary' onClick={editHandler}>
                        Post Edit
                    </Button>
                </>
            ) : (
                <h1>Post successfully edited.</h1>
            )}
        </>
    );
};

export default Bed;
