import { useState } from 'react';
import Input from '../../../Input/Input';
import Button from '../../../Button/Button';

const Oxygen = (props) => {
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
                    <h1>Edit Post on Oxygen Cylinders</h1>
                    <br />
                    <Input
                        type='text'
                        label='Service Provider'
                        value={newPost.info.serviceProvider}
                        onChange={(event) => {
                            setNewPost({ ...newPost, info: { ...newPost.info, serviceProvider: event.target.value } });
                        }}
                    />
                    <br />
                    <Input
                        type='text'
                        label='Location'
                        value={newPost.info.location}
                        onChange={(event) => {
                            setNewPost({ ...newPost, info: { ...newPost.info, location: event.target.value } });
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

export default Oxygen;
