import { useState } from 'react';
import { Fragment } from 'react-is';
import { useParams } from 'react-router-dom';
import CreatePost from '../components/CreatePost/CreatePost'

const Volunteer = () => {
    const { id } = useParams();
    return (
        <Fragment>
            <section>Volunteer : {id}</section>
            <CreatePost />
        </Fragment>
    )
};

export default Volunteer;
